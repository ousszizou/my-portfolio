<template>
  <Layout>
    <h1 class="text-4xl uppercase my-10 text-center font-bold">
      Portfolios are <span class="focus-word">everything</span>,<br />
      promises are <span class="focus-word">nothing</span>.<br />
      <span class="focus-word">Do</span> the work.
    </h1>
    <div class="my-12 works-page">
      <p class="text-center text-xl">
        For over <b>4 years</b> I’ve been designing and developing websites.<br />
        Below are some of my works.
      </p>
      <!-- work-1 -->
      <div class="flex my-20">
        <div class="w-3/5 card h-112 rounded-md p-10">
          <div class="overflow-hidden h-112 rounded-md shadow-xl">
            <g-image src="~/assets/images/work1.png"></g-image>
          </div>
        </div>
        <div class="p-10 w-2/5 self-center">
          <h4 class="text-4xl font-bold">Marvel - Portfolio Theme</h4>
          <p class="mt-4 leading-6">
            It’s time to create and inspire with Marvel, a stunning modern
            portfolio theme I created so you can showcase your work the way it
            truly deserves.
          </p>
          <div class="mt-4">
            <chevrons-right-icon class="inline-block"></chevrons-right-icon>
            <h5 class="align-middle font-semibold inline-block">Fact sheet</h5>
            <ul class="text-xs ml-2 mt-2">
              <li class="mt-1">
                <b>&middot; Technology:</b> HTML5,CSS3,JavaScript,Tailwindcss
              </li>
              <li class="mt-1"><b>&middot; Category:</b> Web Development</li>
              <li class="mt-1"><b>&middot; Type:</b> Static Website</li>
            </ul>
          </div>
          <g-link
            class="btn mt-6 font-bold py-3 px-8 rounded-full capitalize text-sm inline-block"
            to="/"
            data-cursor-hover
            >View Details</g-link
          >
        </div>
      </div>
      <!-- work-2 -->
      <div class="flex my-20 mt-36">
        <div class="p-10 w-2/5 self-center">
          <h4 class="text-4xl font-bold">Magazee - Website Template</h4>
          <p class="mt-4 leading-6">
            Responsive, progressive web app for magazine websites.
          </p>
          <div class="mt-4">
            <chevrons-right-icon class="inline-block"></chevrons-right-icon>
            <h5 class="align-middle font-semibold inline-block">Fact sheet</h5>
            <ul class="text-xs ml-2 mt-2">
              <li class="mt-1"><b>&middot; Technology:</b> HTML5,CSS3</li>
              <li class="mt-1"><b>&middot; Category:</b> Web Development</li>
              <li class="mt-1"><b>&middot; Type:</b> Static Website</li>
            </ul>
          </div>
          <g-link
            class="btn mt-6 font-bold py-3 px-8 rounded-full capitalize text-sm inline-block"
            to="/"
            data-cursor-hover
            >View Details</g-link
          >
        </div>
        <div class="w-3/5 card h-112 rounded-md p-10">
          <div class="overflow-hidden h-112 rounded-md shadow-xl">
            <g-image src="~/assets/images/work-2.png"></g-image>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { ChevronsRightIcon } from "vue-feather-icons";
export default {
  components: {
    ChevronsRightIcon,
  },
};
</script>

<style>
h1 span.focus-word {
  color: var(--special-color);
}
.works-page .card {
  background-color: var(--special-color);
  background: linear-gradient(150deg, var(--special-color) 2.02%, #bba86c 100%);
}
.btn {
  background: var(--special-color);
  color: #fff;
  border: 2px solid var(--special-color);
  transition: all 0.5s ease-in-out;
}

.btn:hover,
.btn:focus {
  background: var(--bg-color);
  color: var(--special-color);
}
</style>
