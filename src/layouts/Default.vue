<template>
  <div>
    <div v-if="loading">
      <breeding-rhombus-spinner
        :animation-duration="2000"
        :size="100"
        color="#D0BB79"
      />
    </div>
    <div class="layout" v-else>
      <TheHeader />
      <slot />
      <cursor-fx />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import { BreedingRhombusSpinner } from "epic-spinners";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import Logo from "~/components/Logo.vue";

export default {
  components: {
    BreedingRhombusSpinner,
    TheHeader,
    TheFooter,
    Logo,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  overflow-x: hidden;
}

/* Load Page Spinner */
.breeding-rhombus-spinner {
  position: absolute !important;
  top: 50%;
  z-index: 9999;
  left: 50%;
  transform: translate(-50%, -50%) !important;
}

/* customize scrollbar */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px var(--bg-color);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background: var(--special-color);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: var(--title-color);
}

.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

/* Styling LOGO */
svg {
  color: var(--title-color);
}

#cursor-fx {
  color: var(--title-color) !important;
}
</style>
