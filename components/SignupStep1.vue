<template>
  <div>
    <form @submit.prevent="submitCredentials" class="space-y-6">
      <div>
        <StepCounter class="mb-2" :step="1" :total="2" />
        <h1 class="text-2xl lg:text-3xl font-bold mb-4">Create your account</h1>

        <label for="email" class="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="Enter your (work) email address..."
          required
          class="mt-1"
          :class="{ 'border-red-500 dark:border-red-600': emailErrors.length }"
          @input="clearError('email')"
        />
        <div v-if="emailErrors" class="mt-1">
          <p class="text-sm text-red-500 dark:text-red-600">
            {{ emailErrors }}
          </p>
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">
          Login method
        </label>
        <div class="mt-0 space-y-2 space-x-4">
          <label
            class="inline-flex items-center input dark:bg-gray-700 py-3 px-4 rounded-lg"
          >
            <input
              v-model="loginMethod"
              type="radio"
              value="magic-link"
              @input="clearError('loginMethod')"
            />
            <span class="ml-2">Magic link</span>
            <EnvelopeIcon class="h-6 w-6 ml-2" />
          </label>
          <label
            class="inline-flex items-center input dark:bg-gray-700 py-3 px-4 rounded-lg"
          >
            <input
              v-model="loginMethod"
              type="radio"
              value="password"
              @input="clearError('loginMethod')"
            />
            <span class="ml-2">Password</span>
            <KeyIcon class="h-6 w-6 ml-2" />
          </label>
        </div>
        <div v-if="loginMethodErrors" class="mt-1">
          <p class="text-sm text-red-500">
            {{ loginMethodErrors }}
          </p>
        </div>
      </div>

      <div v-if="loginMethod === 'password'">
        <label for="password" class="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="Enter a long passphrase..."
          required
          class="mt-1"
          :class="{ 'border-red-500': passwordErrors }"
          @input="clearError('password')"
        />
        <div v-if="passwordErrors" class="mt-1">
          <p class="text-sm text-red-500">
            {{ passwordErrors }}
          </p>
        </div>

        <div class="mt-2 flex items-center">
          <label class="inline-flex items-center">
            <input
              v-model="useHaveIBeenPwned"
              type="checkbox"
              class="form-checkbox"
            />
            <span class="ml-2 text-sm"> Check if password has leaked </span>
          </label>
          <QuestionMarkCircleIcon
            class="ml-1 h-3 w-3 text-gray-400 hover:text-gray-500 cursor-pointer"
            @click="showHaveIBeenPwnedExplainer = !showHaveIBeenPwnedExplainer"
          />
        </div>
        <p
          v-if="showHaveIBeenPwnedExplainer"
          class="mt-1 text-xs bg-blue-100 dark:bg-gray-900 px-4 py-2 leading-relaxed rounded max-w-lg"
        >
          When enabled, we check your password against the
          <NuxtLink
            href="https://haveibeenpwned.com/Passwords"
            target="_blank"
            rel="noopener noreferrer"
            >haveibeenpwned.com</NuxtLink
          >
          database without sending your actual password to the service. First,
          we hash your password using SHA1, then send only the first five
          characters of that hash. The service responds with any leaked
          passwords that begin with those characters. We then check on our end
          if any of these matches your password. If it has been leaked before,
          we display a warning. Rest assured, we never store your password in
          plain text.
        </p>
      </div>

      <div>
        <label class="inline-flex items-center">
          <input
            v-model="termsConfirmed"
            type="checkbox"
            required
            class="form-checkbox"
            @input="clearError('termsConfirmed')"
          />
          <span class="ml-2 text-sm"
            >I accept the
            <NuxtLink
              :href="`${DASHBOARD_URL}/general-terms-and-conditions`"
              target="_blank"
            >
              General Terms and Conditions
              <ArrowTopRightOnSquareIcon
                class="h-4 w-4 inline-block align-text-top"
              />
            </NuxtLink>
          </span>
        </label>
        <div v-if="termsErrors" class="mt-1">
          <p class="text-sm text-red-500">
            {{ termsErrors }}
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
        <button type="submit" class="button">Next</button>
        <ChartLoader
          v-if="signupStore.isLoading"
          class="ml-3 h-8 text-red-500 dark:text-red-600"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  KeyIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/24/outline";
import { computed, ref } from "vue";
import { useSignupStore } from "~/stores/signup";
import { useFieldErrors } from "~/composables/useFieldErrors";
import ChartLoader from "./ChartLoader.vue";
import StepCounter from "./StepCounter.vue";

const config = useRuntimeConfig();
const { DASHBOARD_URL } = config.public;

const showHaveIBeenPwnedExplainer = ref(false);

const signupStore = useSignupStore();
const errors = computed(() => signupStore.errors);
const emailErrors = useFieldErrors(errors, "email");
const loginMethodErrors = useFieldErrors(errors, "loginMethod");
const passwordErrors = useFieldErrors(errors, "password");
const termsErrors = useFieldErrors(errors, "termsConfirmed");
const generalErrors = useFieldErrors(errors, "general");

const email = computed({
  get: () => signupStore.email,
  set: (value) => signupStore.setCredentials({ email: value }),
});

const loginMethod = computed({
  get: () => signupStore.loginMethod,
  set: (value) => signupStore.setCredentials({ loginMethod: value }),
});

const password = computed({
  get: () => signupStore.password,
  set: (value) => signupStore.setCredentials({ password: value }),
});

const termsConfirmed = computed({
  get: () => signupStore.termsConfirmed,
  set: (value) => signupStore.setCredentials({ termsConfirmed: value }),
});

const useHaveIBeenPwned = computed({
  get: () => signupStore.useHaveIBeenPwned,
  set: (value) => signupStore.setCredentials({ useHaveIBeenPwned: value }),
});

const emit = defineEmits(["next"]);

const clearError = (field) => {
  signupStore.clearError(field);
};

const submitCredentials = async () => {
  if (signupStore.isLoading) return;
  const isValid = await signupStore.validateStep1();
  if (isValid) emit("next");
};
</script>
