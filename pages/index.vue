<template>
  <NuxtLayout name="default">
    <template #hero>
      <div class="text-center">
        <h1 class="text-4xl font-medium text-gray-600 sm:text-5xl md:text-6xl">
          <span class="leading-snug"
            >The <span class="text-red-500">privacy-first</span></span
          >
          {{ " " }}
          <span class="block leading-snug">Google Analytics alternative.</span>
        </h1>
        <p
          class="mt-4 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl"
        >
          Trusted by governments, NGOs, and small to mid-sized enterprises.
        </p>

        <div class="flex items-center justify-center mt-6 sm:mt-10">
          <HavasMediaLogo class="h-14 mt-0 m-4 sm:m-8" />
          <GovScotLogo class="h-16 mt-1 m-4 sm:m-8" />
          <GovUKLogo class="h-16 mt-0 m-4 sm:m-8" />
          <HyundaiLogo class="h-14 mt-0 m-4 sm:m-8" />
        </div>

        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-4">
          <div>
            <a href="#" class="button large primary"> Start trial now </a>
            <p class="mb-8 sm:mb-0 text-xs text-gray-500 mt-2">
              No credit card required
            </p>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a href="#" class="button large"> See live demo </a>
          </div>
        </div>
      </div>
    </template>

    <div class="max-w-3xl px-4 mx-auto text-center">
      <div class="max-w-2xl -mt-4 sm:-mt-14 z-10 mx-auto relative" style="">
        <div class="absolute flex items-center justify-center w-full h-full">
          <NuxtLink href="#" class="button large shadow-xl"
            >Go to live demo</NuxtLink
          >
        </div>

        <div class="shadow-sm shadow-gray-200 rounded-md">
          <video
            loop=""
            autoplay=""
            muted=""
            crossorigin="anonymous"
            class="shadow-lg shadow-gray-200 rounded-md"
            preload="auto"
            poster="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.png"
          >
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.webm"
              type="video/webm"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.ogg"
              type="video/ogg"
            />
            <source
              src="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.wmv"
              type="video/wmv"
            />
            <p>
              Your browser doesn't support HTML5 video. Here is a
              <a
                href="https://assets.simpleanalytics.com/videos/2022-03-17-dashboard/video.mp4"
                target="_blank"
                rel="noopener"
                >link to the video</a
              >
              instead.
            </p>
          </video>
        </div>
      </div>

      <Quote
        class="mt-4"
        :logo="DuckDuckGoLogo"
        title="DuckDuckGo"
        subtitle="Biggest privacy-friendly search engine"
        quote="Switching to Simple Analytics will still give you visibility into how
      visitors are using your website, but you'll also be respecting their right
      to privacy."
      />

      <h3
        class="text-2xl sm:text-5xl leading-normal sm:leading-normal text-gray-600 mt-2 mb-4 sm:mt-4 sm:mb-8 font-medium"
      >
        The most privacy-friendly analytics online.
      </h3>

      <ul class="mx-auto w-96 text-left">
        <li class="flex items-center my-4">
          <ListIcon class="h-8 mr-3 shrink-0" />
          <p>
            We <span class="text-red-500">comply</span> by design with all
            privacy policies - GDPR, PECR, CCPA and more.
          </p>
        </li>
        <li class="flex items-center my-4">
          <ListIcon class="h-8 mr-3 shrink-0" />
          <p>We <span class="text-red-500">never track</span> anyone</p>
        </li>
        <li class="flex items-center my-4">
          <ListIcon class="h-8 mr-3 shrink-0" />
          <p>
            We don’t <span class="text-red-500">store</span> or
            <span class="text-red-500">sell</span> any visitor data
          </p>
        </li>
        <li class="flex items-center my-4">
          <ListIcon class="h-8 mr-3 shrink-0" />
          <p>No <span class="text-red-500">cookie banner</span> required</p>
        </li>
      </ul>

      <Quote
        class="mt-4"
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=707b9c33066bf8808c934c8ab394dff6"
        title="Manager X"
        subtitle="Company x"
        quote="We're proud to be able to tell our customers that we don't track them at
      all."
      />

      <h3
        class="text-2xl sm:text-5xl leading-normal sm:leading-normal text-gray-600 mt-2 mb-4 sm:mt-4 sm:mb-8 font-medium"
      >
        Simple.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        One dashboard to instantly see how many visitors are coming to your
        website. Where they come from. And what they do once they're there.
        Without cookies. Without stalking.
      </p>

      <div>
        <a href="#" class="button">Start trial now</a>
        <p class="mb-8 sm:mb-0 text-xs text-gray-500 mt-2">
          Free 14-day trial. No credit card required. Cancel anytime.
        </p>
      </div>

      <h3
        class="text-2xl sm:text-5xl leading-normal sm:leading-normal text-gray-600 mt-2 mb-4 sm:mt-12 sm:mb-8 font-medium"
      >
        Connect <span class="text-red-500">your data</span> with your unique
        workflow.
      </h3>
      <p class="my-4 leading-loose max-w-xl mx-auto">
        With the API and UI, you get full access to your analytics data.
        Download data whenever you want. Export your results. Or integrate with
        your favorite tools or data lakes. Your data is yours and stays yours.
      </p>
    </div>

    <section class="bg-gray-100 w-full">
      <div class="max-w-3xl p-8 mt-12 mx-auto text-center">
        <DataConnections class="mx-auto my-4" style="width: 400px" />
      </div>
    </section>

    <div class="max-w-3xl px-4 mx-auto text-center">
      <Quote
        class="mt-4"
        :logo="DuckDuckGoLogo"
        title="Anonymous Owner"
        subtitle="..."
        quote="After switching from GA, I tried out another privacy-focused analytics
      solution but it turned out it was too minimal and didn't give me what I
      needed. I make decisions based on data. Luckily, Simple Analytics shows
      the exact metrics I need to know about in order to grow my business, while
      also being respectful of the privacy of my visitors. AND it loads
      extremely quickly, making it SEO-friendly"
      />
    </div>
  </NuxtLayout>
</template>

<script setup>
import HavasMediaLogo from "../components/logos/HavasMedia.vue";
import GovScotLogo from "../components/logos/GovScot.vue";
import GovUKLogo from "../components/logos/GovUK.vue";
import HyundaiLogo from "../components/logos/Hyundai.vue";
import DuckDuckGoLogo from "../components/logos/DuckDuckGo.vue";
import Quote from "../components/Quote.vue";
import DataConnections from "../components/images/DataConnections.vue";
import ListIcon from "../components/images/ListIcon.vue";

definePageMeta({
  title: "Home",
  layout: false,
});
</script>
