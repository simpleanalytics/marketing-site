<template>
  <div class="flow-wrapper">
    <VueFlow
      :nodes="nodes"
      :edges="edges"
      :fit-view-on-init="true"
      :nodes-draggable="false"
      :nodes-connectable="false"
      :elements-selectable="false"
      :zoom-on-scroll="false"
      :pan-on-drag="false"
      :prevent-scrolling="false"
    >
      <template #node-ga>
        <div class="ga-node-content">
          <img
            src="https://files.simpleanalytics.com/2026-02-25-google-analytics-logo-with-text.png"
            alt="Google Analytics"
            class="ga-node-logo"
          />
        </div>
      </template>
      <template #node-looker>
        <div class="looker-node-content">
          <LookerStudioLogo class="looker-node-logo" />
        </div>
      </template>
    </VueFlow>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Position, VueFlow } from "@vue-flow/core";
import LookerStudioLogo from "~/components/LookerStudioLogo.vue";

import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";

const nodes = ref([
  {
    id: "browser",
    position: { x: 300, y: 0 },
    data: { label: "Client website" },
    class: "node-central",
  },
  {
    id: "adblocker",
    position: { x: 100, y: 120 },
    data: { label: "🛑 Ad-blocker" },
    class: "node-standard node-adblocker",
    sourcePosition: Position.Bottom,
  },
  {
    id: "ga",
    position: { x: 100, y: 240 },
    data: { label: "Google Analytics" },
    class: "node-standard node-ga",
    type: "ga",
    targetPosition: Position.Top,
  },
  {
    id: "simple-analytics",
    position: { x: 500, y: 180 },
    data: { label: "Simple Analytics" },
    class: "node-green",
  },
  {
    id: "looker",
    position: { x: 300, y: 360 },
    data: { label: "Looker Studio" },
    class: "node-standard node-looker",
    type: "looker",
  },
]);

const edges = ref([
  {
    id: "e1-dark",
    source: "browser",
    target: "adblocker",
    animated: false,
    class: "gray-data-flow-dark",
  },
  {
    id: "e1-light",
    source: "browser",
    target: "adblocker",
    animated: false,
    class: "gray-data-flow-light",
  },
  {
    id: "e2-dark",
    source: "adblocker",
    target: "ga",
    animated: false,
    class: "gray-data-flow-slow-dark",
    type: "straight",
  },
  {
    id: "e2-light",
    source: "adblocker",
    target: "ga",
    animated: false,
    class: "gray-data-flow-slow-light",
    type: "straight",
  },
  {
    id: "e3-dark",
    source: "ga",
    target: "looker",
    animated: false,
    class: "gray-data-flow-slow-dark",
  },
  {
    id: "e3-light",
    source: "ga",
    target: "looker",
    animated: false,
    class: "gray-data-flow-slow-light",
  },
  {
    id: "e4-dark",
    source: "browser",
    target: "simple-analytics",
    animated: false,
    class: "green-data-flow-dark",
  },
  {
    id: "e5-dark",
    source: "simple-analytics",
    target: "looker",
    animated: false,
    class: "green-data-flow-dark",
  },
  {
    id: "e4-light",
    source: "browser",
    target: "simple-analytics",
    animated: false,
    class: "green-data-flow-light",
  },
  {
    id: "e5-light",
    source: "simple-analytics",
    target: "looker",
    animated: false,
    class: "green-data-flow-light",
  },
]);
</script>

<style scoped>
.flow-wrapper {
  height: 500px;
  width: 100%;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background-color: #f8fafc;
}

:deep(.vue-flow__node) {
  border-radius: 8px;
  padding: 12px 20px;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: transform 0.2s ease;
}

:deep(.vue-flow__node:hover) {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

:deep(.vue-flow__node.node-central) {
  border: 2px solid #0f172a;
  background: #1e293b;
  color: white;
}

:deep(.vue-flow__node.node-standard) {
  border: 2px solid #cbd5e1;
  background: white;
  color: #334155;
}

:deep(.vue-flow__node.node-green) {
  border: 2px solid #10b981;
  background: #ecfdf5;
  color: #047857;
}

:deep(.vue-flow__node.node-looker) {
  border: 2px solid #cbd5e1;
  background: white;
  padding: 10px 12px;
}

:deep(.vue-flow__node.node-ga) {
  border: 2px solid #cbd5e1;
  background: white;
  padding: 8px 10px;
  width: 220px;
}

:deep(.vue-flow__node.node-adblocker) {
  width: 220px;
}

:deep(.vue-flow__edge-path) {
  stroke: #94a3b8;
  stroke-width: 2;
}

:deep(.vue-flow__handle) {
  opacity: 0;
  pointer-events: none;
}

:deep(.green-data-flow-dark .vue-flow__edge-path) {
  stroke: #10b981;
  stroke-width: 3;
  stroke-linecap: butt;
  stroke-dasharray: 8 8 !important;
  stroke-dashoffset: 0;
  animation: flow-packets-dark 0.8s linear infinite !important;
}

:deep(.green-data-flow-light .vue-flow__edge-path) {
  stroke: #b3e4d4;
  stroke-width: 3;
  stroke-linecap: butt;
  stroke-dasharray: 8 8 !important;
  stroke-dashoffset: 8;
  animation: flow-packets-light 0.8s linear infinite !important;
}

:deep(.gray-data-flow-dark .vue-flow__edge-path) {
  stroke: #94a3b8;
  stroke-width: 3;
  stroke-linecap: butt;
  stroke-dasharray: 8 8 !important;
  stroke-dashoffset: 0;
  animation: flow-packets-dark 0.8s linear infinite !important;
}

:deep(.gray-data-flow-light .vue-flow__edge-path) {
  stroke: #cbd5e1;
  stroke-width: 3;
  stroke-linecap: butt;
  stroke-dasharray: 8 8 !important;
  stroke-dashoffset: 8;
  animation: flow-packets-light 0.8s linear infinite !important;
}

:deep(.gray-data-flow-slow-dark .vue-flow__edge-path) {
  stroke: #ef4444;
  stroke-width: 3;
  stroke-linecap: butt;
  stroke-dasharray: 8 8 !important;
  stroke-dashoffset: 0;
  animation: flow-packets-dark 1.2s linear infinite !important;
}

:deep(.gray-data-flow-slow-light .vue-flow__edge-path) {
  stroke: #fca5a5;
  stroke-width: 3;
  stroke-linecap: butt;
  stroke-dasharray: 8 8 !important;
  stroke-dashoffset: 8;
  animation: flow-packets-light 1.2s linear infinite !important;
}

@keyframes flow-packets-dark {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -16;
  }
}

@keyframes flow-packets-light {
  from {
    stroke-dashoffset: 8;
  }
  to {
    stroke-dashoffset: -8;
  }
}

.looker-node-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ga-node-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ga-node-logo {
  width: 180px;
  max-width: 100%;
  height: auto;
}

.looker-node-logo {
  width: 160px;
  max-width: 100%;
  height: auto;
}
</style>
