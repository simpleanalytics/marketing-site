<template>
  <div class="flex flex-col flex-wrap sm:flex-row -mt-8 -mx-6">
    <div class="basis-1/2">
      <DocumentTextIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="mx-6 leading-loose text-center text-red-400 dark:text-red-600">
        What we do and don't do with your data
      </p>
      <p class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose">
        The data we collect belongs to you. We only collect non-personal data
        and don't share the data with third parties or transfer it overseas.
        Your website data never leaves the Netherlands and, therefore, the E.U.
        Also, no other third-party vendors have access to any data outside the
        hosting company that owns the servers on which the data is stored.
      </p>

      <ChartBarIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="mx-6 leading-loose text-center text-red-400 dark:text-red-600">
        What metrics do we collect?
      </p>
      <p class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose">
        We do not collect any personal data. We do not use cookies and never
        collect information that could be used to fingerprint a user. You do not
        need to tweak any settings to make our software privacy-friendly: Simple
        Analytics is privacy-friendly by design. Here is a
        <a href="https://docs.simpleanalytics.com/what-we-collect"
          >detailed list</a
        >
        of what we do and don't collect from your visitors.
      </p>

      <GiftIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="mx-6 leading-loose text-center text-red-400 dark:text-red-600">
        How does the free plan work?
      </p>
      <p class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose">
        Simple Analytics is free forever. To get started create an account to
        start your trial (no creditcard required). During 14-day trial you can
        explore all our features. After the 14 days, you'll need to select a
        plan to continue using Simple Analytics. You can choose to continue
        using one of our paid plans or downgrade to our free plan and continue
        using Simple Analytics free forever.
      </p>

      <ClockIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="mx-6 leading-loose text-center text-red-400 dark:text-red-600">
        How does the free trial work?
      </p>
      <p class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose">
        When you sign-up, your 14-day free trial (no credit card required)
        starts. No matter which plan you choose. During these 14 days, you can
        use advanced features without any restrictions. After the trial period,
        we'll ask you to choose a plan to continue using Simple Analytics. If
        you choose our paid plan, we need you to add your payment details. You
        can switch to any plan, provided your usage remains within its limits.
      </p>

      <ShieldCheckIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="mx-6 leading-loose text-center text-red-400 dark:text-red-600">
        Is Simple Analytics GDPR-compliant?
      </p>
      <p class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose">
        Simple Analytics is 100% GDPR compliant with data protection law from
        installation. Because it only processes non-personal data, it can
        satisfy the requirements of the strictest privacy regulation, including
        the GDPR, the ePrivacy Directive, the UK GDPR, and the PECT. For more
        information
        <a href="https://docs.simpleanalytics.com/compliance"
          >check our documentation</a
        >.
      </p>

      <NoSymbolIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="leading-loose text-center mx-6 text-red-400 dark:text-red-600">
        Can I cancel anytime?
      </p>
      <p class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose">
        Yes. You can cancel your subscription at any moment. You will still have
        access to your account and data until the end of the period you paid
        for.
      </p>
    </div>
    <div class="basis-1/2">
      <ArrowTrendingUpIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="leading-loose text-center mx-6 text-red-400 dark:text-red-600">
        What happens when your traffic grows?
      </p>
      <p
        class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose"
        v-html="
          'You monthly fee will match your usage. Drag the slider to see what you pay for a certain amount of data points. Simple Analytics automatically calculates your data points (first looking back one month, then the average of the previous three months).'
        "
      ></p>

      <AverageChart
        class="mx-6 max-w-full rounded-lg dark:border-none bg-red-50 dark:bg-gray-700"
      />

      <p
        class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose"
        v-html="
          'So, if you had an increase in traffic during the past three months, you pay only a little more next month. Likewise, you automatically pay a little less when your average amount of page views decreased during the last months.'
        "
      ></p>

      <CalendarDaysIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="leading-loose text-center mx-6 text-red-400 dark:text-red-600">
        How do we charge for yearly plans?
      </p>
      <p
        class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose"
        v-html="
          `When you choose yearly, you estimate your traffic after your trial. We send you an email when you go over your limit, you have one week to increase your limit. Otherwise, we'll do it for you. To prevent extra invoices during the year, set your limit high enough. After the year, your datapoints will be reset to zero.`
        "
      ></p>

      <ClockIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="leading-loose text-center mx-6 text-red-400 dark:text-red-600">
        What does 30 day history mean?
      </p>
      <p class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose">
        You can use Simple Analytics for free forever (in our free plan).
        However, there are some limitations to this plan. One limit is on your
        analytics history, which is capped at 30 days. This means you can only
        view your website stats for the last 30 days. Any traffic data older
        than 30 days will be automatically deleted from our servers. If you need
        longer data history and retention, you can choose one of our paid plans.
      </p>

      <ChartBarSquareIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="leading-loose text-center mx-6 text-red-400 dark:text-red-600">
        What does unlimited pageviews mean?
      </p>
      <p class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose">
        Our free plan offers unlimited pageviews. This allows you to track as
        much traffic as your website gets without any restrictions. However, we
        have a fair use policy to make sure our servers run smoothly for all
        users. If your traffic exceeds our fair use limits, we'll notify you via
        email. If you're unsure about your website's traffic volume, feel free
        to
        <a href="https://dashboard.simpleanalytics.com/contact">contact us</a>
        in advance.
      </p>

      <CreditCardIcon
        class="mx-auto stroke-1 w-10 h-10 mt-14 mb-4 stroke-red-400 dark:stroke-red-600"
      />
      <p class="leading-loose text-center mx-6 text-red-400 dark:text-red-600">
        What payment methods do you accept?
      </p>
      <p class="my-4 leading-loose mx-6 text-sm sm:text-base sm:leading-loose">
        We accept Credit Card, Debit Card, Bitcoin
        <span
          class="border border-red-400 dark:border-red-600 text-red-400 dark:text-red-600 rounded-full text-sm py-1 px-2"
          >+10% & yearly</span
        >, Apple Pay, and Google Pay as payment methods for all our paid plans.
        You can pay in Euros, US Dollars or British Pounds. Bills from
        {{ currency?.sign }}500 can be paid via bank transfers and cost an
        additional
        <span
          class="border border-red-400 dark:border-red-600 text-red-400 dark:text-red-600 rounded-full text-sm py-1 px-2"
          >10&#37;</span
        >
        in banking and service fees.
      </p>
    </div>
  </div>
</template>

<script setup>
import {
  ShieldCheckIcon,
  NoSymbolIcon,
  CreditCardIcon,
  ArrowTrendingUpIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  ChartBarIcon,
  GiftIcon,
  ClockIcon,
  ChartBarSquareIcon,
} from "@heroicons/vue/24/outline";

import AverageChart from "./images/AverageChart.vue";

const currency = useCurrency();
</script>
