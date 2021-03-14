<template>
  <div id="works" class="works-section my-24 text-left">
    <h2 class="section-heading uppercase font-semibold underline">
      <span class="text-4xl font-bold mr-1 rounded-sm relative">m</span>y work
    </h2>
    <!-- work-1 -->
    <div class="mt-20 card w-full xl:w-4/5 rounded-md mx-auto overflow-hidden">
      <div class="card-header work-1 h-64 overflow-hidden">
        <g-link data-cursor-hover>
          <g-image src="~/assets/images/work1.png"></g-image>
        </g-link>
      </div>
      <div class="card-content mx-4 md:mx-8 lg:mx-12 my-6">
        <div class="mb-4 md:mb-10">
          <h3 class="text-1xl md:text-2xl font-bold inline-block">
            Marvel - Portfolio Theme
          </h3>
          <span
            class="underline font-bold uppercase text-smallest ml-3"
            data-cursor-hover
          >
            see demo
            <external-link-icon class="inline-block"></external-link-icon>
          </span>
        </div>
        <div class="tags uppercase text-xs font-semibold mb-6">
          <span class="mr-2 rounded-sm p-1 md:p-2">#html5</span>
          <span class="mr-2 rounded-sm p-1 md:p-2">#css3</span>
          <span class="mr-2 rounded-sm p-1 md:p-2">#javascript</span>
          <span class="mr-2 rounded-sm p-1 md:p-2">#tailwindcss</span>
        </div>
        <p class="text-sm md:text-md">
          It’s time to create and inspire with
          <span>Marvel</span>, a stunning modern portfolio theme I created so
          you can showcase your work the way it truly deserves.
        </p>
      </div>
    </div>
    <!-- work-2 -->
    <div class="mt-12 card w-full xl:w-4/5 rounded-md mx-auto overflow-hidden">
      <div class="card-header work-2 h-64 overflow-hidden">
        <g-link data-cursor-hover>
          <g-image src="~/assets/images/work-2.png"></g-image>
        </g-link>
      </div>
      <div class="card-content mx-4 md:mx-8 lg:mx-12 my-6">
        <div class="mb-4 md:mb-10">
          <h3 class="text-1xl md:text-2xl font-bold inline-block">
            Magazee - Website Template
          </h3>
          <span
            class="underline font-bold uppercase text-smallest ml-3"
            data-cursor-hover
          >
            see demo
            <external-link-icon class="inline-block"></external-link-icon>
          </span>
        </div>
        <div class="tags uppercase text-xs font-semibold mb-6">
          <span class="mr-2 rounded-sm p-1 md:p-2">#html5</span>
          <span class="mr-2 rounded-sm p-1 md:p-2">#css3</span>
        </div>
        <p class="text-sm md:text-md">
          Responsive, progressive web app for magazine websites.
        </p>
      </div>
    </div>
    <!-- work-3 -->
    <div class="mt-12 card w-full xl:w-4/5 rounded-md mx-auto overflow-hidden">
      <div class="card-header work-3 h-64 overflow-hidden">
        <g-link data-cursor-hover>
          <g-image src="~/assets/images/work3.png"></g-image>
        </g-link>
      </div>
      <div class="card-content mx-4 md:mx-8 lg:mx-12 my-6">
        <div class="mb-4 md:mb-10">
          <h3 class="text-1xl md:text-2xl font-bold inline-block">
            Syntax - Personal Blog
          </h3>
          <span
            class="underline font-bold uppercase text-smallest ml-3"
            data-cursor-hover
          >
            <g-link to="https://vigorous-minsky-a122f9.netlify.app/">
              see demo
            </g-link>
            <external-link-icon class="inline-block"></external-link-icon>
          </span>
        </div>
        <div class="tags uppercase text-xs font-semibold mb-6">
          <span class="mr-2 rounded-sm p-1 md:p-2">#Nuxt.js</span>
          <span class="mr-2 rounded-sm p-1 md:p-2">#Tailwindcss</span>
        </div>
        <p class="text-sm md:text-md">My awesome personal blog.</p>
      </div>
    </div>
    <!-- more works -->
    <div class="text-center mt-16 more-works inline-block w-48 relative">
      <div class="circle"></div>
      <g-link
        data-cursor-hover
        to="/works"
        class="uppercase text-md font-light relative"
      >
        see more
        <span class="text-lg">&#8594;</span>
      </g-link>
    </div>
    <!-- let's work together -->
    <div class="mt-16 text-center">
      <h3 class="text-2xlPlus sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Like my works? Let's work together,
        <br />You can contact me now!
      </h3>
      <g-link
        class="btn mr-auto mt-8 font-bold py-3 px-8 rounded-sm text-sm inline-block uppercase"
        v-scroll-to="'#contact'"
        data-cursor-hover
        >contact</g-link
      >
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";
export default {
  components: {
    ExternalLinkIcon,
  },
};
</script>

<style>
/* my works section */

.works-section .card {
  box-shadow: 1px 1px 18px var(--box-shadow);
  background: var(--card-color);
}

.works-section .card .card-header img {
  max-width: 100%;
  cursor: pointer;
}

.works-section .card .work-1:hover img {
  animation: moveSlideshow1 3s ease-in-out forwards;
}

.works-section .card .work-2:hover img {
  animation: moveSlideshow2 3s ease-in-out forwards;
}

.works-section .card .work-3:hover img {
  animation: moveSlideshow3 3s ease-in-out forwards;
}

@keyframes moveSlideshow1 {
  100% {
    transform: translateY(-74%);
  }
}

@screen lg {
  @keyframes moveSlideshow1 {
    100% {
      transform: translateY(-87%);
    }
  }
}

@screen xl {
  @keyframes moveSlideshow1 {
    100% {
      transform: translateY(-84.5%);
    }
  }
}

@keyframes moveSlideshow2 {
  100% {
    transform: translateY(-76.2%);
  }
}

@screen lg {
  @keyframes moveSlideshow2 {
    100% {
      transform: translateY(-88.5%);
    }
  }
}

@screen xl {
  @keyframes moveSlideshow2 {
    100% {
      transform: translateY(-87%);
    }
  }
}

@keyframes moveSlideshow3 {
  100% {
    transform: translateY(-60%);
  }
}

@screen lg {
  @keyframes moveSlideshow3 {
    100% {
      transform: translateY(-88.5%);
    }
  }
}

@screen xl {
  @keyframes moveSlideshow3 {
    100% {
      transform: translateY(-60%);
    }
  }
}

.works-section .card .card-content div span svg {
  vertical-align: sub;
  width: 18px;
  color: var(--body-color);
  position: relative;
  top: 3px;
}

.works-section .card .card-content .tags span {
  background: var(--tags-bg-color);
  color: var(--special-color);
}

.works-section .circle {
  width: 45px;
  height: 45px;
  background: var(--special-color);
  display: inline-block;
  border-radius: 50px;
  left: 0%;
  position: absolute;
  transition: all 0.5s ease-in-out;
  top: -30%;
}

@screen sm {
  .works-section .circle {
    left: 4%;
    top: -16%;
  }
}

@screen md {
  .works-section .circle {
    left: 4%;
    top: -15%;
  }
}

@screen lg {
  .works-section .circle {
    left: 4%;
    top: -12%;
  }
}

.more-works:hover .circle {
  width: 210px;
}

.more-works:hover a {
  color: var(--bg-color);
}

.more-works {
  left: 50%;
  transform: translateX(-50%);
}
</style>
