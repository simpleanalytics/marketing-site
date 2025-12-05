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
          color="#5d3828"
          :autoplay="true"
          style="aspect-ratio: 1024/576"
          fillColor="fill-gray-200"
          poster="https://assets.simpleanalytics.com/images/homepage/welcome/dashboard-small-light.png"
        >
          <source
            src="https://assets.simpleanalytics.com/images/homepage/welcome/dashboard-small-light.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.simpleanalytics.com/images/homepage/welcome/dashboard-small-light.ogv"
            type="video/ogg"
          />
          <source
            src="https://assets.simpleanalytics.com/images/homepage/welcome/dashboard-small-light.webm"
            type="video/webm"
          />
        </Video>
        <Video
          class="w-full hidden dark:block"
          color="#5d3828"
          :autoplay="true"
          style="aspect-ratio: 1024/576"
          fillColor="fill-gray-300"
          poster="https://assets.simpleanalytics.com/images/homepage/welcome/dashboard-small-dark.png"
        >
          <source
            src="https://assets.simpleanalytics.com/images/homepage/welcome/dashboard-small-dark.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.simpleanalytics.com/images/homepage/welcome/dashboard-small-dark.ogv"
            type="video/ogg"
          />
          <source
            src="https://assets.simpleanalytics.com/images/homepage/welcome/dashboard-small-dark.webm"
            type="video/webm"
          />
        </Video>

        <p class="mt-10 text-center text-sm text-gray-800 dark:text-gray-500">
          Trusted by these companies and govenments
        </p>
        <div class="mb-0 flex flex-wrap items-center space-x-7">
          <Tooltip text="Bloomberg" class="group">
            <NuxtLink href="https://www.bloomberg.com/" target="_blank">
              <LogosBloomberg class="h-6 my-3 translate-y-[20%]" />
            </NuxtLink>
          </Tooltip>
          <Tooltip text="Michelin" class="group">
            <NuxtLink href="https://www.michelin.com/" target="_blank">
              <LogosMichelin class="h-8 my-3" />
            </NuxtLink>
          </Tooltip>
          <Tooltip text="Hyundai" class="group">
            <NuxtLink href="https://www.hyundai.com/" target="_blank">
              <LogosHyundai class="h-8 my-3" />
            </NuxtLink>
          </Tooltip>
          <Tooltip text="GOV.UK" class="group">
            <NuxtLink href="https://www.gov.uk/" target="_blank">
              <LogosGovUK class="h-9 my-3" />
            </NuxtLink>
          </Tooltip>
        </div>
      </div>

      <div class="lg:w-1/2 mx-4 lg:ml-12 lg:mr-8 flex flex-col justify-center">
        <SignupStep3 class="w-full" @next="next" />
      </div>
    </div>

    <Confetti v-if="showConfetti" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSignupStore } from "~/stores/signup";
import SignupStep3 from "~/components/SignupStep3.vue";
import SimpleAnalyticsIcon from "~/components/images/SimpleAnalyticsIcon.vue";

const localePath = useLocalePath();
const signupStore = useSignupStore();
const showConfetti = ref(false);

const next = async (data = {}) => {
  if (data.teamMembers) signupStore.setTeamMembers(data.teamMembers);

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
