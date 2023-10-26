<template>
  <client-only>
    <p class="text-base sm:text-lg lg:text-md md:leading-normal leading-normal">
      {{ text }}: {{ formattedNumber }}
    </p>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      counterValue: 0,
      medianRatePerMinute: 0,
    };
  },
  props: {
    intlLocale: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    endpoint: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    await this.fetchInitialData();
    this.updateInterval = setInterval(this.updateCounter, 334);
  },
  beforeDestroy() {
    clearInterval(this.updateInterval);
  },
  computed: {
    formattedNumber() {
      return new Intl.NumberFormat(this.intlLocale).format(this.counterValue);
    },
  },
  methods: {
    async fetchInitialData() {
      try {
        // Replace with your actual API endpoint
        const response = await fetch(
          new URL("/api/utils/sum-datapoints", this.endpoint),
        );
        const data = await response.json();

        this.counterValue = 6456395964; //data.count;
        this.medianRatePerMinute = data.medianRatePerMinute;
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    },
    updateCounter() {
      // Convert the rate from "per minute" to "per 20ms"
      const ratePer20ms = this.medianRatePerMinute / ((60 * 1000) / 334);
      this.counterValue = Math.round(this.counterValue + ratePer20ms);
    },
  },
};
</script>

<style scoped>
/* Add any styles if necessary */
</style>
