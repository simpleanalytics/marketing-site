<template>
  <div>
    <section
      class="relative overflow-hidden bg-gradient-to-b from-transparent to-blue-100/80 pb-52"
    >
      <div class="max-w-4xl px-6 mx-auto">
        <div
          class="grid items-start gap-10 lg:grid-cols-[minmax(0,536px)_minmax(0,280px)]"
        >
          <div>
            <h1
              class="mb-3.5 text-[31px] font-bold leading-[1.22] tracking-[-0.025em] text-gray-700"
            >
              Consent banners create a 20%+ traffic gap
            </h1>
            <p class="mb-5 text-[16.32px] leading-[1.6] text-gray-500">
              GA4 only tracks visitors who give consent. That means part of your
              traffic isn't reflected in your reports.
            </p>

            <div class="text-[15.04px] leading-[1.7]">
              <p>
                In the EU, most websites operate behind a consent banner. When a
                visitor clicks "Reject":
              </p>
              <ul class="mt-2.5">
                <li class="flex items-start">
                  <XMarkIcon
                    class="mr-2 mt-1 h-4 w-4 shrink-0 stroke-red-500"
                  />
                  <span>No pageviews.</span>
                </li>
                <li class="mt-0.5 flex items-start">
                  <XMarkIcon
                    class="mr-2 mt-1 h-4 w-4 shrink-0 stroke-red-500"
                  />
                  <span>No sessions.</span>
                </li>
                <li class="mt-0.5 flex items-start">
                  <XMarkIcon
                    class="mr-2 mt-1 h-4 w-4 shrink-0 stroke-red-500"
                  />
                  <span>No attributions.</span>
                </li>
              </ul>
              <p class="mt-2.5">
                In addition, ad-blockers remove additional visits before GA4
                even loads.
              </p>
            </div>
          </div>

          <div
            class="mt-8 rounded-md border border-gray-200 bg-white px-4 py-3 shadow-[0_1px_4px_-1px_rgba(55,61,73,0.06)]"
          >
            <p
              class="mb-3 text-[8.8px] font-semibold uppercase tracking-[0.12em] text-red-500"
            >
              Case Study
            </p>

            <div class="mb-3 grid grid-cols-3 text-center">
              <div class="py-1">
                <p
                  class="mb-1.5 text-[8px] font-semibold uppercase tracking-[0.1em] leading-[1] text-gray-500"
                >
                  GA4
                </p>
                <p
                  class="font-mono text-[16.8px] font-bold leading-none text-gray-700"
                >
                  1.6M
                </p>
              </div>

              <div class="border-x border-gray-200/30 py-1">
                <p
                  class="mb-1.5 text-[8px] font-semibold uppercase tracking-[0.1em] leading-[1] text-gray-500"
                >
                  Actual traffic
                </p>
                <p
                  class="font-mono text-[16.8px] font-bold leading-none text-gray-700"
                >
                  2.03M
                </p>
              </div>

              <div class="py-1">
                <p
                  class="mb-1.5 text-[8px] font-semibold uppercase tracking-[0.1em] leading-[1] text-gray-500"
                >
                  Missing traffic
                </p>
                <p
                  class="font-mono text-[17.6px] font-bold leading-none text-red-500"
                >
                  400K+
                </p>
                <p
                  class="mt-1 font-mono text-[9.28px] leading-none text-gray-500"
                >
                  (+20%)
                </p>
              </div>
            </div>

            <p class="text-[12.16px] leading-[1.45]">
              Hebban, a Dutch media company, measured over 400,000 pageviews
              that never appeared in GA4.
            </p>
          </div>
        </div>

        <div class="mt-4 max-w-[700px] text-[15.04px] leading-[1.7]">
          <p class="font-semibold text-gray-700">
            The result: part of your traffic is structurally invisible.
          </p>
          <p class="mt-2.5">
            Those missing visits distort dashboards, attribution models, and
            performance reviews.
          </p>
          <p class="mt-2.5">
            The fix: Not replacing GA4, but adding a cookieless traffic baseline
            alongside it so you can see the full picture.
          </p>
        </div>
      </div>

      <ClientOnly>
        <div
          class="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 scale-x-[-1]"
        >
          <BackgroundChart
            class="fill-blue-50 stroke-blue-500 dark:fill-gray-800"
          />
        </div>
      </ClientOnly>
    </section>

    <section class="relative py-8">
      <div class="max-w-4xl px-6 mx-auto">
        <div class="mb-4">
          <p
            class="mb-1.5 text-[9.12px] font-semibold uppercase tracking-[0.12em] text-red-500"
          >
            Case Study
          </p>
          <h2
            class="mb-2.5 text-[28px] font-bold leading-[35px] tracking-[-0.025em] text-gray-700"
          >
            A real example
          </h2>
          <p class="text-[15.2px] leading-[1.7]">
            We ran this side-by-side with
            <span class="font-semibold text-gray-700">Hebban</span>, a Dutch
            media company. Their setup was simple:
          </p>
          <ul class="mt-1.5 list-disc pl-4 text-[15.2px] leading-[1.7]">
            <li>GA4 for behavioural data after consent</li>
            <li class="mt-0.5">
              Simple Analytics implemented in parallel to measure total traffic
              independently of consent
            </li>
          </ul>
        </div>

        <div
          class="mb-4 overflow-hidden rounded-md border border-gray-200/30 bg-white"
        >
          <img
            src="https://assets.simpleanalytics.com/images/hebban-data-gap.jpg"
            alt="Side-by-side comparison: GA4 showing 1.6M pageviews vs Simple Analytics showing 2,031,468 pageviews"
            class="block h-auto w-full"
          />
        </div>

        <div
          class="mb-4 grid grid-cols-3 border-b border-gray-700/5 pb-3.5 text-center"
        >
          <div>
            <p
              class="mb-1.5 text-[8.32px] font-semibold uppercase tracking-[0.1em] text-gray-500"
            >
              GA4
            </p>
            <p class="font-mono text-2xl font-bold leading-6 text-gray-700">
              1.6M
            </p>
          </div>
          <div class="border-x border-gray-700/5">
            <p
              class="mb-1.5 text-[8.32px] font-semibold uppercase tracking-[0.1em] text-gray-500"
            >
              Actual traffic
            </p>
            <p class="font-mono text-2xl font-bold leading-6 text-gray-700">
              2.03M
            </p>
          </div>
          <div>
            <p
              class="mb-1.5 text-[8.32px] font-semibold uppercase tracking-[0.1em] text-gray-500"
            >
              Missing traffic
            </p>
            <p class="font-mono text-2xl font-bold leading-6 text-red-500">
              400K+
            </p>
            <p
              class="mt-1 font-mono text-[11.2px] leading-[11.2px] text-gray-500"
            >
              (+20%)
            </p>
          </div>
        </div>

        <div class="mb-3">
          <p class="mb-1 text-[15.2px] leading-[1.7]">Results after 30 days:</p>
          <p class="text-[15.2px] leading-[1.7]">
            GA4 reported 1.6M pageviews.<br />Simple Analytics measured 2.03M.
          </p>
        </div>

        <div>
          <p class="text-[15.2px] font-semibold leading-[1.7] text-gray-700">
            Over 400,000 visits were invisible in GA4.
          </p>
        </div>
      </div>
    </section>

    <section
      class="bg-gradient-to-t from-red-50 dark:from-gray-700 mt-12 w-full relative overflow-hidden pb-32"
    >
      <div class="max-w-4xl px-6 mx-auto">
        <div class="mb-4">
          <h2
            class="mb-2.5 text-[28px] font-bold leading-[35px] tracking-[-0.025em] text-gray-700"
          >
            How the additional layer works
          </h2>
          <div class="text-[15.2px] leading-[1.7]">
            <p>
              Simple Analytics is a privacy-first analytics tool that does not
              use cookies, trackers, or personal data. Because no personal data
              is processed, consent is not required to measure pageviews while
              remaining GDPR-compliant.
            </p>
            <p class="mt-2.5">
              GA4 remains responsible for behavioural depth and attribution.<br />
              Simple Analytics provides a complete traffic baseline.
            </p>
          </div>
          <p
            class="mt-3.5 text-[15.2px] font-medium leading-[1.7] text-gray-700"
          >
            Together, they give you the full picture.
          </p>
        </div>

        <AnalyticsLayerFlowDiagram />

        <p class="mt-1 text-center text-[15.2px] font-medium text-gray-700">
          Complement, don't replace.
        </p>
      </div>

      <ClientOnly>
        <div
          class="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 scale-x-[-1]"
        >
          <BackgroundChart
            class="fill-blue-50 stroke-red-500 dark:stroke-red-600 dark:fill-gray-800"
          />
        </div>
      </ClientOnly>
    </section>

    <section class="py-8">
      <div class="max-w-4xl px-6 mx-auto">
        <h2
          class="mb-1.5 text-[28px] font-bold leading-[35px] tracking-[-0.025em] text-gray-700"
        >
          Why this matters for agencies
        </h2>
        <p class="mb-4 max-w-[580px] text-[15.2px] leading-[1.7] text-[#4f545f]">
          If you manage clients:
        </p>

        <div class="mb-4">
          <div class="flex items-start gap-2 py-[3px]">
            <CheckIcon class="mt-1 h-[9px] w-[9px] shrink-0 stroke-[2.5] text-red-500" />
            <span class="text-[14.4px] leading-[20.88px] text-[#4f545f]">
              Total traffic is underreported
            </span>
          </div>
          <div class="flex items-start gap-2 py-[3px]">
            <CheckIcon class="mt-1 h-[9px] w-[9px] shrink-0 stroke-[2.5] text-red-500" />
            <span class="text-[14.4px] leading-[20.88px] text-[#4f545f]">
              Campaign performance may be unaccurate
            </span>
          </div>
          <div class="flex items-start gap-2 py-[3px]">
            <CheckIcon class="mt-1 h-[9px] w-[9px] shrink-0 stroke-[2.5] text-red-500" />
            <span class="text-[14.4px] leading-[20.88px] text-[#4f545f]">
              Attribution may lack full context
            </span>
          </div>
        </div>

        <p class="mb-4 text-[15.2px] font-semibold leading-[1.7] text-gray-700">
          A 20% difference changes how results are interpreted.
        </p>
        <p class="mb-3 text-[15.2px] leading-[1.7] text-[#4f545f]">
          Running a parallel baseline gives you:
        </p>

        <div>
          <div class="flex items-start gap-2 py-[3px]">
            <CheckIcon class="mt-1 h-[9px] w-[9px] shrink-0 stroke-[2.5] text-red-500" />
            <span class="text-[14.4px] leading-[20.88px] text-[#4f545f]">
              Clear separation between consented and total traffic
            </span>
          </div>
          <div class="flex items-start gap-2 py-[3px]">
            <CheckIcon class="mt-1 h-[9px] w-[9px] shrink-0 stroke-[2.5] text-red-500" />
            <span class="text-[14.4px] leading-[20.88px] text-[#4f545f]">
              More defensible reporting
            </span>
          </div>
          <div class="flex items-start gap-2 py-[3px]">
            <CheckIcon class="mt-1 h-[9px] w-[9px] shrink-0 stroke-[2.5] text-red-500" />
            <span class="text-[14.4px] leading-[20.88px] text-[#4f545f]">
              Fewer &quot;traffic dropped after CMP change&quot; conversations
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-8">
      <div class="max-w-4xl px-6 mx-auto">
        <div class="mb-5 border-t border-gray-200"></div>

        <div class="mb-4">
          <h2
            class="text-[28px] font-bold leading-[35px] tracking-[-0.025em] text-gray-700"
          >
            Run it on one client
          </h2>
        </div>

        <div>
          <div class="flex items-baseline gap-3">
            <span
              class="w-6 shrink-0 text-right font-mono text-base font-semibold text-red-500"
              >01</span
            >
            <p class="text-[15.2px] font-medium leading-[22.8px] text-gray-700">
              Install Simple Analytics next to GA4.
            </p>
          </div>

          <div class="mt-4 flex items-baseline gap-3">
            <span
              class="w-6 shrink-0 text-right font-mono text-base font-semibold text-red-500"
              >02</span
            >
            <p class="text-[15.2px] font-medium leading-[22.8px] text-gray-700">
              Run both for 30 days
            </p>
          </div>

          <div class="mt-4 flex items-baseline gap-3">
            <span
              class="w-6 shrink-0 text-right font-mono text-base font-semibold text-red-500"
              >03</span
            >
            <p class="text-[15.2px] font-medium leading-[22.8px] text-gray-700">
              Compare totals.
            </p>
          </div>
        </div>

        <div
          class="mt-5 max-w-[560px] rounded-md border border-gray-200 bg-blue-100/30 px-4 py-3 shadow-[0_1px_4px_-1px_rgba(55,61,73,0.06)]"
        >
          <div class="text-[13.44px] leading-[21.5px] text-[#4f545f]">
            <p>There is no migration required. No CMP changes. GA4 stays in place.</p>
            <p class="mt-1">
              Setup takes minutes. And it won't slow down your website.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-14 pt-2">
      <div class="max-w-4xl px-6 mx-auto text-center">
        <div class="border-t border-gray-200 pt-10">
          <h3
            class="mb-2.5 text-[24.8px] font-bold leading-[31px] tracking-[-0.025em] text-gray-700"
          >
            See the gap for yourself
          </h3>
          <p class="mx-auto mb-5 max-w-[440px] text-[15.2px] leading-[25.08px] text-[#4f545f]">
            If you work with clients and want to quantify the consent gap, start
            with one domain and run a side-by-side comparison.
          </p>
          <p class="mx-auto mb-5 max-w-[440px] text-[15.2px] leading-[25.08px] text-[#4f545f]">
            Book a short setup call and we'll configure it together.
          </p>
          <a
            href="https://cal.com/ironbrands/partner-program-intro"
            class="inline-flex items-center justify-center rounded-md bg-red-500 px-8 py-3 text-[15.2px] font-semibold text-white transition-all duration-200 hover:bg-red-600"
          >
            Book a short setup call
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { CheckIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import BackgroundChart from "../components/images/BackgroundChart.vue";

const title = "Agencies";
const description =
  "Understand how consent banners and ad blockers create reporting gaps, and why a cookieless baseline closes the blind spot.";

definePageMeta({
  title: title,
  description: description,
});

useSeoMeta({
  title: `${title} - Simple Analytics`,
  ogTitle: `${title} - Simple Analytics`,
  description: description,
  ogDescription: description,
});
</script>
