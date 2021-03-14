<template>
  <div id="about" class="about-section pt-12 my-24 flex">
    <div class="w-full lg:w-3/5 about-section__left text-left">
      <h2 class="section-heading uppercase font-semibold underline">
        <span class="text-4xl font-bold mr-1 rounded-sm relative">a</span>bout
        me
      </h2>
      <h3 class="mt-12">Hello 👋 Welcome to my portfolio!</h3>
      <h4 class="text-3xl mt-2 md:mt-0 md:text-5xl">
        I'm
        <span class="capitalize text-5xl xl:text-6xl font-black"
          >oussama djaidri</span
        >
      </h4>
      <p class="mt-4 text-md md:text-1xl max-w-sm md:max-w-xl">
        Fullstack developer from
        <span class="relative">Algeria</span>, passionate about
        <span class="middle-span relative">javascript</span>
        ecosystem, <span class="third-span relative">Golang</span> development.
        <br />focused on creating
        <span class="last-span relative">modern web apps</span>.
      </p>
      <g-link
        class="btn mr-auto mt-8 font-bold py-3 px-8 rounded-full capitalize text-sm inline-block"
        to="/works"
        data-cursor-hover
        >See My Works</g-link
      >
      <g-link
        class="btn-secondary ml-0 sm:ml-4 mr-auto mt-8 font-bold py-3 px-8 rounded-full capitalize text-sm inline-block"
        to="/about"
        data-cursor-hover
        >more about me</g-link
      >
    </div>
    <div class="hidden lg:block about-section__right self-center mt-12">
      <g-image src="~/assets/images/about-me.svg"></g-image>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* about section */
.section-heading {
  color: var(--title-color);
}

.section-heading span {
  background: var(--special-color);
  padding: 5px 10px;
  color: var(--bg-color);
}

.section-heading span::before {
  content: " ";
  width: 100%;
  height: 100%;
  background: var(--title-color);
  position: absolute;
  top: 5px;
  opacity: 0.9;
  left: -5px;
  z-index: -1;
  border-radius: 3px;
}

.about-section .about-section__left p span::after {
  content: " ";
  width: 84px;
  height: 10px;
  position: absolute;
  bottom: 0px;
  background: var(--special-color);
  right: 0;
  z-index: -1;
  opacity: 0.5;
}

.about-section .about-section__left p .middle-span::after {
  width: 110px;
}

.about-section .about-section__left p .third-span::after {
  width: 80px;
}

.about-section .about-section__left p .last-span::after {
  width: 210px;
}
</style>
