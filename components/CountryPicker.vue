<template>
  <div>
    <label :for="inputId" class="block text-sm font-medium"> Country </label>
    <div class="relative mt-1">
      <input
        type="text"
        :id="inputId"
        v-model="searchQuery"
        @focus="showDropdown = true"
        @blur="handleBlur"
        @input="showDropdown = true"
        placeholder="Search for your country..."
        class="w-full rounded-md border shadow-sm sm:text-sm"
        autocomplete="off"
        aria-autocomplete="list"
        :aria-expanded="showDropdown"
        :aria-controls="listboxId"
      />
      <ul
        v-if="showDropdown && filteredCountries.length"
        :id="listboxId"
        role="listbox"
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-opacity-5 focus:outline-none sm:text-sm"
      >
        <li
          v-for="country in filteredCountries"
          :key="country.code"
          @mousedown.prevent="selectCountry(country)"
          role="option"
          :aria-selected="country.code === selectedCountryCode"
          class="relative cursor-pointer select-none py-2 pl-3 pr-9 hover:bg-gray-100"
        >
          <span class="block truncate">{{ country.name }}</span>
          <span
            v-if="country.code === selectedCountryCode"
            class="absolute inset-y-0 right-0 flex items-center pr-4"
          >
            <CheckIcon class="h-5 w-5" aria-hidden="true" />
          </span>
        </li>
      </ul>
      <div v-if="normalizedErrors.length" class="mt-1">
        <p
          v-for="(error, idx) in normalizedErrors"
          :key="idx"
          class="text-sm text-red-500 dark:text-red-500"
        >
          {{ typeof error === "object" ? error.message : error }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, useId } from "vue";
import { CheckIcon } from "@heroicons/vue/24/outline";
import { NATIVE_COUNTRY_NAMES } from "@simpleanalytics/common/utils/countries";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  errors: {
    type: [Array, String],
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputId = useId();
const listboxId = useId();

const searchQuery = ref("");
const selectedCountryCode = ref(props.modelValue);
const showDropdown = ref(false);

const normalizedErrors = computed(() => {
  if (Array.isArray(props.errors)) return props.errors;
  return props.errors ? [props.errors] : [];
});

const allCountries = computed(() => {
  try {
    if (!Array.isArray(NATIVE_COUNTRY_NAMES)) {
      console.error("NATIVE_COUNTRY_NAMES is not loaded or not an array.");
      return [];
    }

    // Function to normalize text by removing accents
    const normalizeText = (text) => {
      if (!text) return "";
      return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    };

    return NATIVE_COUNTRY_NAMES.map((country) => {
      const normalizedName = normalizeText(country.name);
      const normalizedNative = normalizeText(country.native);

      return {
        code: country.code,
        name: country.name || country.code,
        searchNames:
          `${country.name} ${country.native} ${country.code}`.toLowerCase(),
        normalizedNames: `${normalizedName} ${normalizedNative} ${country.code.toLowerCase()}`,
      };
    }).sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error("Error processing NATIVE_COUNTRY_NAMES:", error);
    return [];
  }
});

const filteredCountries = computed(() => {
  try {
    if (
      !searchQuery.value ||
      !Array.isArray(allCountries.value) ||
      allCountries.value.length === 0
    ) {
      return [];
    }
    const lowerSearch = searchQuery.value.toLowerCase().trim();
    if (!lowerSearch) return [];

    // Normalize the search query to remove accents
    const normalizedSearch = lowerSearch
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    // For exactly 2 characters, prioritize country code matches
    if (lowerSearch.length === 2) {
      const codeMatches = allCountries.value.filter(
        (country) => country.code.toLowerCase() === lowerSearch,
      );

      if (codeMatches.length > 0) return codeMatches;
    }

    return allCountries.value.filter((country) => {
      return (
        (typeof country?.searchNames === "string" &&
          country.searchNames.includes(lowerSearch)) ||
        (typeof country?.normalizedNames === "string" &&
          country.normalizedNames.includes(normalizedSearch))
      );
    });
  } catch (error) {
    console.error("Error computing filteredCountries:", error);
    return [];
  }
});

const setInputFromModelValue = (code) => {
  if (code && Array.isArray(allCountries.value)) {
    const countryData = allCountries.value.find((c) => c?.code === code);
    searchQuery.value = countryData?.name || "";
    selectedCountryCode.value = code;
  } else {
    searchQuery.value = "";
    selectedCountryCode.value = "";
  }
};

watch(
  () => props.modelValue,
  (newCode) => {
    if (newCode !== selectedCountryCode.value) {
      setInputFromModelValue(newCode);
    }
  },
  { immediate: true },
);

const selectCountry = (country) => {
  if (!country || typeof country !== "object") return;
  searchQuery.value = country.name || "";
  selectedCountryCode.value = country.code || "";
  emit("update:modelValue", selectedCountryCode.value);
  showDropdown.value = false;
};

const handleBlur = () => {
  setTimeout(() => {
    try {
      if (!Array.isArray(allCountries.value)) {
        showDropdown.value = false;
        return;
      }
      const currentSelectedCountry = allCountries.value.find(
        (c) => c?.code === selectedCountryCode.value,
      );

      if (
        !currentSelectedCountry ||
        searchQuery.value !== currentSelectedCountry.name
      ) {
        const exactMatch = allCountries.value.find(
          (c) =>
            typeof c?.name === "string" &&
            c.name.toLowerCase() === searchQuery.value.toLowerCase(),
        );
        if (exactMatch) {
          selectCountry(exactMatch);
        } else {
          searchQuery.value = "";
          selectedCountryCode.value = "";
          emit("update:modelValue", "");
        }
      }
    } catch (error) {
      console.error("Error in handleBlur:", error);
      searchQuery.value = "";
      selectedCountryCode.value = "";
      emit("update:modelValue", "");
    } finally {
      showDropdown.value = false;
    }
  }, 200);
};
</script>
