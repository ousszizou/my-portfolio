<template>
  <div class="layout">
    <header class="header">
      <Logo data-cursor-hover />
      <nav class="nav">
        <g-link
          data-cursor-hover
          class="nav__link menu-span uppercase text-smallest tracking-widerPlus font-bold"
          to="/"
          ><span data-hover="home">home</span></g-link
        >
        <g-link
          data-cursor-hover
          class="nav__link menu-span uppercase text-smallest tracking-widerPlus font-bold"
          v-scroll-to="'#about'"
          ><span data-hover="about">about</span></g-link
        >
        <g-link
          data-cursor-hover
          class="nav__link menu-span uppercase text-smallest tracking-widerPlus font-bold"
          v-scroll-to="'#works'"
          ><span data-hover="works">works</span></g-link
        >
        <g-link
          data-cursor-hover
          class="nav__link menu-span uppercase text-smallest tracking-widerPlus font-bold"
          v-scroll-to="'#services'"
          ><span data-hover="services">services</span></g-link
        >
        <g-link
          data-cursor-hover
          class="nav__link menu-span uppercase text-smallest tracking-widerPlus font-bold"
          v-scroll-to="'#courses'"
          ><span data-hover="courses">courses</span></g-link
        >
        <g-link
          data-cursor-hover
          class="nav__link menu-span uppercase text-smallest tracking-widerPlus font-bold"
          v-scroll-to="'#contact'"
          ><span data-hover="contact">contact</span></g-link
        >
        <ToggleDarkMode class="align-middle ml-6" data-cursor-hover>
          <template slot="default" slot-scope="{ dark }">
            <MoonIcon v-if="dark" />
            <SunIcon v-else />
          </template>
        </ToggleDarkMode>
      </nav>
    </header>
    <slot />
    <cursor-fx color-hover="#D0BB79" />
    <footer class="mb-5">
      <p class="mb-1">&copy; 2020 Oussama Djaidri. All rights reserved.</p>
      <p class="text-sm">
        Built with <span>Gridsome</span> & <span>Tailwindcss</span>.
      </p>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleDarkMode from "~/components/ToggleDarkMode";
import { SunIcon, MoonIcon } from "vue-feather-icons";

export default {
  components: {
    Logo,
    ToggleDarkMode,
    SunIcon,
    MoonIcon,
  },
};
</script>

<style>

/* customize scrollbar */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px var(--bg-color); 
    -webkit-border-radius: 6px;
    border-radius: 6px;
}
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 50px;
    border-radius: 50px;
    background: var(--special-color);
}
::-webkit-scrollbar-thumb:window-inactive {
    background: var(--title-color); 
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  overflow-x: hidden;
}

.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav {
  overflow: hidden;
}

.nav__link {
  margin-left: 20px;
  transition: transform 500ms;
  -webkit-transition: -webkit-transform 500ms;
  -moz-transition: transform 500ms;
  position: relative;
}

.nav__link span {
  display: inline-block;
  position: relative;
  transition: transform 500ms;
  -webkit-transition: -webkit-transform 500ms;
  -moz-transition: transform 500ms;
}
.nav__link span::after {
  content: attr(data-hover);
  position: absolute;
  top: -30px;
  left: 0;
  transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  color: var(--special-color);
}

.nav__link:hover span,
.nav__link:focus span {
  transform: translateY(30px);
  -webkit-transform: translateY(30px);
  -moz-transform: translateY(30px);
}

svg {
  color: var(--title-color);
}

button:focus {
  outline: none;
}

.menu-span {
  color: var(--title-color);
}

#cursor-fx {
  color: var(--title-color) !important;
}

footer p span {
  color: var(--special-color);
  font-weight: bold;
}
</style>
