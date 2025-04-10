<template>
  <div>
    <form @submit.prevent="submitCustomerInfo" class="space-y-6">
      <div>
        <StepCounter class="mb-2" :step="2" :total="totalSteps" />
        <h1 class="text-2xl lg:text-3xl font-bold mb-4">
          Get to know each other
        </h1>
      </div>

      <SignupErrors :errors="errors" :other-errors="nonGetToKnowErrors" />

      <div>
        <label
          for="signupSource"
          class="block text-sm font-medium text-gray-700"
        >
          Where did you first hear about us?
        </label>
        <select v-model="signupSource" id="signupSource" class="mt-1">
          <option value="" disabled>Pick one...</option>
          <option value="search">Search (Google, DuckDuckgo, Bing)</option>
          <option value="word-of-mouth">Someone told me about it</option>
          <option value="reddit">Reddit</option>
          <option value="hackernews">Hacker News</option>
          <option value="x">X / Twitter</option>
          <option value="linkedin">LinkedIn</option>
          <option value="blog">Blog</option>
          <option value="podcast">Podcast</option>
          <option value="youtube">Youtube</option>
          <option value="other">Other</option>
        </select>
        <div v-if="signupSourceErrors.length" class="mt-1">
          <p
            v-for="(error, idx) in signupSourceErrors"
            :key="idx"
            class="text-sm text-red-500"
          >
            {{ error }}
          </p>
        </div>
      </div>

      <div>
        <label
          for="companySize"
          class="block text-sm font-medium text-gray-700"
        >
          Company size
        </label>
        <select
          v-model="companySize"
          id="companySize"
          class="mt-1"
          @change="clearError('companySize')"
        >
          <option value="" disabled>Pick one...</option>
          <option value="no_company">I'm not a company</option>
          <option value="only_me">Only me</option>
          <option value="2-10">2-10</option>
          <option value="11-50">11-50</option>
          <option value="51-100">51-100</option>
          <option value="101-250">101-250</option>
          <option value="250+">250+</option>
        </select>
        <div v-if="companySizeErrors.length" class="mt-1">
          <p
            v-for="(error, idx) in companySizeErrors"
            :key="idx"
            class="text-sm text-red-500"
          >
            {{ error }}
          </p>
        </div>
      </div>

      <div v-if="showJobRole">
        <label for="jobRole" class="block text-sm font-medium text-gray-700">
          What's your job role?
        </label>
        <select
          v-model="jobRole"
          id="jobRole"
          class="mt-1"
          @change="clearError('jobRole')"
        >
          <option value="" disabled>Pick one...</option>
          <option value="software-engineering">Software engineering</option>
          <option value="data-science-analytics">
            Data science / Analytics
          </option>
          <option value="founder-cofounder">Founder / Co-founder</option>
          <option value="marketing">Marketing</option>
          <option value="leadership">Leadership</option>
          <option value="product-management">Product management</option>
          <option value="sales">Sales</option>
          <option value="other">Other / Not Listed</option>
        </select>
        <div v-if="jobRoleErrors.length" class="mt-1">
          <p
            v-for="(error, idx) in jobRoleErrors"
            :key="idx"
            class="text-sm text-red-500"
          >
            {{ error }}
          </p>
        </div>
      </div>

      <div>
        <p v-if="generalErrors.length" class="mt-1 text-sm text-red-600">
          <span v-for="(error, idx) in generalErrors" :key="idx">
            {{ error }}
          </span>
        </p>
      </div>

      <div class="flex items-center">
        <button
          type="submit"
          class="button"
          v-if="companySize && ['no_company', 'only_me'].includes(companySize)"
          :disabled="signupStore.isLoading"
        >
          <CheckIcon class="h-5 w-5 mr-2" />
          Complete Signup
        </button>

        <button
          type="submit"
          class="button"
          v-else
          :disabled="signupStore.isLoading"
        >
          Next
        </button>

        <ChartLoader
          v-if="signupStore.isLoading"
          class="ml-3 h-8 text-red-500 dark:text-red-600"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";
import { useSignupStore } from "~/stores/signup";
import { useFieldErrors } from "~/composables/useFieldErrors";
import ChartLoader from "./ChartLoader.vue";

const router = useRouter();
const signupStore = useSignupStore();
const localePath = useLocalePath();
if (!signupStore.email) router.replace(localePath({ name: "signup" }));

const jobRole = computed({
  get: () => signupStore.jobRole,
  set: (value) => signupStore.setCustomerInfo({ jobRole: value }),
});

const companySize = computed({
  get: () => signupStore.companySize,
  set: (value) => signupStore.setCustomerInfo({ companySize: value }),
});

const signupSource = computed({
  get: () => signupStore.signupSource,
  set: (value) => signupStore.setCustomerInfo({ signupSource: value }),
});

const errors = computed(() => signupStore.errors);
const jobRoleErrors = useFieldErrors(errors, "jobRole");
const companySizeErrors = useFieldErrors(errors, "companySize");
const signupSourceErrors = useFieldErrors(errors, "signupSource");
const generalErrors = useFieldErrors(errors, "general");

const nonGetToKnowErrors = computed(() => {
  return errors.value.filter(
    (error) =>
      !["jobRole", "companySize", "signupSource"].includes(error.field),
  );
});

const emit = defineEmits(["next"]);

const clearError = (field) => {
  signupStore.clearError(field);
};

const submitCustomerInfo = () => {
  // Here you can add validation if needed before emitting 'next'
  emit("next", {
    jobRole: jobRole.value,
    companySize: companySize.value,
    signupSource: signupSource.value,
  });
};

const showJobRole = computed(() => {
  return (
    companySize.value && !["no_company", "only_me"].includes(companySize.value)
  );
});

const totalSteps = computed(() => (showJobRole.value ? 3 : 2));
</script>
