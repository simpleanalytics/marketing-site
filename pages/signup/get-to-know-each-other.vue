<template>
  <div class="-mt-28 flex lg:items-center flex-grow">
    <div class="flex flex-grow max-w-7xl mx-auto">
      <div class="w-1/2 ml-8 mr-12 hidden lg:block">
        <NuxtLink
          :to="localePath({ name: 'index' })"
          class="items-center inline-flex mb-4"
        >
          <SimpleAnalyticsIcon class="h-5 w-auto sm:h-6" />
          <span
            class="sm:hidden lg:block ml-3 text-xl sm:text-2xl text-gray-500 dark:text-gray-400"
          >
            Simple Analytics
          </span>
        </NuxtLink>

        <Video
          class="w-full block dark:hidden"
          :width="854"
          :height="480"
          color="#5d3828"
          :autoplay="true"
          fillColor="fill-gray-200"
          poster="https://assets.simpleanalytics.com/videos/2024-10-24-adriaan-iron-waving/light/video.png"
        >
          <source
            src="https://assets.simpleanalytics.com/videos/2024-10-24-adriaan-iron-waving/light/video.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.simpleanalytics.com/videos/2024-10-24-adriaan-iron-waving/light/video.ogv"
            type="video/ogg"
          />
          <source
            src="https://assets.simpleanalytics.com/videos/2024-10-24-adriaan-iron-waving/light/video.webm"
            type="video/webm"
          />
        </Video>
        <Video
          class="w-full hidden dark:block"
          :width="854"
          :height="480"
          color="#5d3828"
          :autoplay="true"
          fillColor="fill-gray-300"
          poster="https://assets.simpleanalytics.com/videos/2024-10-24-adriaan-iron-waving/dark/video.png"
        >
          <source
            src="https://assets.simpleanalytics.com/videos/2024-10-24-adriaan-iron-waving/dark/video.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.simpleanalytics.com/videos/2024-10-24-adriaan-iron-waving/dark/video.ogv"
            type="video/ogg"
          />
          <source
            src="https://assets.simpleanalytics.com/videos/2024-10-24-adriaan-iron-waving/dark/video.webm"
            type="video/webm"
          />
        </Video>
        <p class="mt-4 leading-loose">
          We are
          <NuxtLink
            href="https://x.com/adriaandotcom"
            target="_blank"
            rel="nofollow noopener noreferrer"
            >Adriaan</NuxtLink
          >
          and
          <NuxtLink
            href="https://x.com/IronBrands16"
            target="_blank"
            rel="nofollow noopener noreferrer"
            >Iron</NuxtLink
          >, the founders of Simple Analytics. Our business is entirely
          self-funded and proudly supported by our {{ userCount }}+ users.
        </p>

        <p class="mt-4 leading-loose">
          We don't sell your data, we don't do ads and we don't have investors
          who tell us what to do. We're here to build a product that you love.
        </p>

        <p class="mt-4 leading-loose">
          Use it for free as long as you need, or, if you're happy, consider one
          of our paid options for more features and more data history.
        </p>

        <p class="mt-4 leading-loose">Cheers,</p>

        <div class="mt-1 flex items-center space-x-2">
          <Adriaan
            class="inline w-20 h-20 stroke-gray-600 dark:stroke-gray-300"
          />
          <Ampersand class="inline w-8 fill-gray-200 dark:fill-gray-600" />
          <Iron class="inline w-20 h-20 stroke-gray-600 dark:stroke-gray-300" />
        </div>
      </div>
      <div class="lg:w-1/2 mx-4 lg:ml-12 lg:mr-8 flex flex-col justify-center">
        <NuxtLink
          :to="localePath({ name: 'index' })"
          class="items-center inline-flex mb-4 lg:hidden"
        >
          <SimpleAnalyticsIcon class="h-5 w-auto sm:h-6" />
          <span
            class="sm:hidden lg:block ml-3 text-xl sm:text-2xl text-gray-500 dark:text-gray-400"
          >
            Simple Analytics
          </span>
        </NuxtLink>

        <SignupStep2 class="w-full" @next="next" />
      </div>
    </div>

    <Confetti v-if="showConfetti" />
  </div>
</template>

<script setup>
import { useSignupStore } from "~/stores/signup";
import SignupStep2 from "~/components/SignupStep2.vue";
import X from "~/components/icons/X.vue";
import { userCount } from "~/utils/miscellaneous";
import Iron from "~/components/icons/Iron.vue";
import Adriaan from "~/components/icons/Adriaan.vue";
import Ampersand from "~/components/icons/Ampersand.vue";
import SimpleAnalyticsIcon from "~/components/images/SimpleAnalyticsIcon.vue";

const signupStore = useSignupStore();
const router = useRouter();
const showConfetti = ref(false);

const next = (data) => {
  signupStore.setCustomerInfo(data);
  if (data.companySize !== "no_company" && data.companySize !== "only_me") {
    router.push("/signup/add-your-colleagues");
  } else {
    handleComplete();
  }
};

const handleComplete = async () => {
  try {
    const response = await signupStore.submitSignup();
    showConfetti.value = true;
    if (response.redirect) {
      setTimeout(() => {
        window.location.href = response.redirect;
      }, 1000);
    } else {
      signupStore.setGeneralError("Account created, log in to continue");
    }
  } catch (error) {
    if (error.message !== "Validation failed")
      signupStore.setGeneralError(error.message);
  }
};
</script>
