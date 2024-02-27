<template>
  <div class="flex flex-wrap items-center justify-center -m-6">
    <Tooltip
      v-for="company in filtered"
      :key="company.name"
      :text="company.name"
      class="flex items-center group m-6"
      :class="{
        [company.class]: company.class,
        ...tooltipclass,
      }"
    >
      <a :href="company.url" target="_blank" class="pointer-events-auto"
        ><component :is="company.component" :class="'h-16 ' + imageclass" /></a
    ></Tooltip>
  </div>
</template>

<script setup>
import Tooltip from "../components/Tooltip.vue";

import NomadListLogo from "../components/logos/NomadList.vue";
import CinchLogo from "../components/logos/Cinch.vue";
import MichelinLogo from "../components/logos/Michelin.vue";
import AnwaltLogo from "../components/logos/Anwalt.vue";
import HomeyLogo from "../components/logos/Homey.vue";
import AllesBesteLogo from "../components/logos/AllesBeste.vue";
import TrustlyLogo from "../components/logos/Trustly.vue";
import CleanshotLogo from "../components/logos/Cleanshot.vue";
import GFLLogo from "../components/logos/GFL.vue";

import HavasMediaLogo from "../components/logos/HavasMedia.vue";
import GovScotLogo from "../components/logos/GovScot.vue";
import GovUKLogo from "../components/logos/GovUK.vue";
import HyundaiLogo from "../components/logos/Hyundai.vue";
import BankOfEnglandLogo from "../components/logos/BankOfEngland.vue";
import WipLogo from "../components/logos/Wip.vue";

const props = defineProps(["limit", "tooltipclass", "imageclass"]);

const list = [
  {
    name: "Bank of England",
    url: "https://www.bankofengland.co.uk/",
    component: BankOfEnglandLogo,
    countries: ["uk"],
  },
  {
    name: "Michelin",
    url: "https://www.michelin.com/",
    component: MichelinLogo,
  },
  {
    name: "Hyundai",
    url: "https://www.hyundai.com/",
    component: HyundaiLogo,
  },
  {
    name: "Government of the United Kingdom",
    url: "https://www.gov.uk/",
    component: GovUKLogo,
    countries: ["uk"],
  },
  {
    name: "Havas Media Group",
    url: "https://havasmediagroup.com/",
    component: HavasMediaLogo,
  },
  {
    name: "Nomad List",
    url: "https://nomadlist.com/",
    component: NomadListLogo,
    countries: ["nl"],
  },
  {
    name: "Scottish Government",
    url: "https://www.gov.scot/",
    component: GovScotLogo,
    countries: ["uk"],
  },
  {
    name: "Cinch",
    url: "https://www.cinch.co.uk/",
    component: CinchLogo,
    countries: ["uk"],
  },
  {
    name: "Homey",
    url: "https://homey.app/",
    component: HomeyLogo,
    countries: ["nl"],
  },
  {
    name: "Anwalt",
    url: "https://www.anwalt.de/",
    component: AnwaltLogo,
    countries: ["de"],
  },
  {
    name: "Trustly Bank",
    url: "https://www.trustly.com/",
    component: TrustlyLogo,
  },
  {
    name: "AllesBeste",
    url: "https://www.allesbeste.de/",
    component: AllesBesteLogo,
    countries: ["de"],
  },
  {
    name: "CleanShot X",
    url: "https://cleanshot.com/",
    component: CleanshotLogo,
  },
  {
    name: "Green for life Canada",
    url: "https://gflenv.com/",
    component: GFLLogo,
    countries: ["ca", "us"],
  },
  {
    name: "Work in Progress",
    url: "https://wip.co/",
    component: WipLogo,
    countries: ["nl"],
  },
];

const filtered = props.limit ? [...list].slice(0, props.limit) : list;

const classes = !props.tooltipclass
  ? ["justify-center"]
  : props.tooltipclass?.split(" ") || [];

const tooltipclass = Object.fromEntries(classes.map((c) => [c, true]));

const imageclass = props.imageclass ? props.imageclass : "max-w-full";
</script>
