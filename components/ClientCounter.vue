<template>
  <client-only>
    <p
      v-if="counterValue > 0"
      class="text-base sm:text-lg lg:text-md md:leading-normal leading-normal"
    >
      {{ text }}: <span class="tabular-nums">{{ formattedNumber }}</span>
    </p>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      counterValue: 0,
      counterValueStart: 0,
      medianRatePerMinute: 0,
      fetchedAt: new Date().getTime(),
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
    this.updateInterval = setInterval(this.updateCounter, 200);
    this.fetchInterval = setInterval(this.fetchInitialData, 1000 * 60 * 5);
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

        this.fetchedAt = new Date().getTime();
        this.counterValueStart = data.count;
        this.counterValue = data.count;
        this.medianRatePerMinute = data.medianRatePerMinute;
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    },
    updateCounter() {
      const currentTime = new Date().getTime();
      const elapsedMinutes = (currentTime - this.fetchedAt) / (1000 * 60);

      const updatedValue =
        this.counterValueStart + elapsedMinutes * this.medianRatePerMinute;

      this.counterValue = Math.round(updatedValue);
    },
  },
};
</script>

<style scoped>
/* Add any styles if necessary */
</style>
