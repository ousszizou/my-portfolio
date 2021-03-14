<template>
  <header class="header">
    <Logo data-cursor-hover />
    <Navbar />
  </header>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Navbar from "~/components/Navbar.vue";
export default {
  components: {
    Logo,
    Navbar,
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
</style>
