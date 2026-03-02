<template>
  <div class="bg-red-100 dark:bg-gray-600 min-h-full">
    <form
      class="px-6 flex-grow flex flex-col min-h-full"
      @submit.prevent="onSubmit"
    >
      <div class="mt-4">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block my-2 w-20 h-20 rounded-full"
          style="margin-right: -1.2rem"
        >
          <circle
            cx="200"
            cy="200"
            r="200"
            class="fill-red-500 dark:fill-red-600"
          />
          <path d="M132.414 201.448H100V298.69H132.414V201.448Z" fill="white" />
          <path
            d="M210.206 143.103H177.793V298.69H210.206V143.103Z"
            fill="white"
          />
          <path d="M288 88H255.586V298.69H288V88Z" fill="white" />
        </svg>
        <img
          src="https://assets.simpleanalytics.com/images/people/adriaan.jpg"
          class="inline-block my-2 w-20 h-20 rounded-full"
          style="margin-left: -1.2rem"
        />
      </div>

      <h2 class="mt-4 text-2xl font-semibold">The Privacy Newsletter</h2>
      <p class="mt-4 leading-relaxed">
        Hey, my name is Adriaan, I'm the founder of Simple Analytics. About once
        a month, I share insights and privacy updates in our newsletter.
        Unsubscribe with 1 click.
      </p>

      <div
        class="text-left mt-3 flex-grow bg-gradient-to-b from-red-100 to-red-300 dark:from-gray-600 dark:to-gray-700 -mx-8 px-8"
      >
        <p
          v-if="thankyou"
          class="text-green-700 dark:text-green-600 border border-green-700 dark:border-green-600 p-2 py-1 mb-4 w-max max-w-full rounded"
        >
          {{
            "Check your inbox to confirm your subscription. Thank you for subscribing!"
          }}
        </p>
        <p
          v-else-if="errorMessage"
          class="text-red-500 border-red-500 dark:text-red-400 border dark:border-red-400 p-2 py-1 mb-4 w-max max-w-full rounded transition-opacity"
          :class="errorTransparant ? 'opacity-0' : ''"
        >
          {{ errorMessage }}
        </p>

        <input
          type="text"
          v-model="email"
          :placeholder="`E.g.: eric{'@'}google.com`"
          class="mr-2 pl-3 py-2 appearance-none max-w-full w-full rounded text-base focus:outline-none sm:text-normal bg-gray-50 text-gray-500 border border-red-100 dark:border-0 dark:bg-gray-900 dark:text-gray-300 focus:ring-red-200 focus:border-red-200 dark:focus:ring-gray-500 dark:focus:border-gray-500"
        />

        <label class="block mb-2 mt-3" for="newsletter">
          <input
            name="newsletter"
            type="checkbox"
            class="mr-1"
            id="newsletter"
            v-model="newsletter"
          />
          Newsletter
        </label>

        <label class="block my-2" for="new-blog-posts">
          <input
            name="notify"
            type="checkbox"
            class="mr-1"
            id="new-blog-posts"
            v-model="notify"
          />
          Notify me of new blog posts
        </label>

        <p class="mt-3 mb-4">
          <input type="submit" class="button primary" :value="`Subscribe`" />
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const config = useRuntimeConfig();
const { DASHBOARD_URL } = config.public;

const email = ref("");
const errorMessage = ref("");
const errorTransparant = ref(false);

const thankyou = ref(false);
const newsletter = ref(true);
const notify = ref(true);

// Error messages lookup
const errorMessages = {
  "blog.subscribe.errors.no_email": "Please fill in an email address",
  "blog.subscribe.errors.invalid_email": "Please fill in a valid email address",
  "blog.subscribe.errors.select_at_least_one":
    "Please select at least one checkbox",
  "blog.subscribe.errors.already_subscribed":
    "This email address is already subscribed",
  "general.errors.something_went_wrong":
    "Something went wrong. Please try again later.",
};

watch(email, () => {
  errorMessage.value = "";
});

const setError = (slug) => {
  const message = errorMessages[slug] || slug;
  if (!errorMessage.value) return (errorMessage.value = message);

  // Blink error if there was already an error
  errorTransparant.value = true;
  setTimeout(() => {
    errorMessage.value = message;
    errorTransparant.value = false;
  }, 200);
};

const onSubmit = async () => {
  thankyou.value = false;

  // Check if email address is filled in
  if (!email.value) return setError("blog.subscribe.errors.no_email");

  // Validate email address
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()))
    return setError("blog.subscribe.errors.invalid_email");

  const type =
    newsletter.value && notify.value
      ? "newsletter,notify"
      : newsletter.value
        ? "newsletter"
        : notify.value
          ? "notify"
          : null;

  // Select at least one checkbox
  if (!type) return setError("blog.subscribe.errors.select_at_least_one");

  const response = await fetch(DASHBOARD_URL + "/subscribe", {
    method: "POST",
    headers: { "Content-Type": "text/plain; charset=UTF-8" },
    body: JSON.stringify({
      email: email.value.trim().toLowerCase(),
      type: type,
    }),
  });

  const { ok, message } = await response.json();

  if (ok) {
    email.value = "";
    errorMessage.value = "";
    thankyou.value = true;
  } else {
    if (/email(.*)invalid/i.test(message))
      return setError("blog.subscribe.errors.invalid_email");

    if (/already subscribed/i.test(message))
      return setError("blog.subscribe.errors.already_subscribed");

    if (message) return setError(message);

    setError("general.errors.something_went_wrong");
  }
};
</script>
