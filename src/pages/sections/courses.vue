<template>
  <div id="courses" class="courses-section my-24 text-center">
    <h3 class="mb-6 text-3xl font-bold">
      I create videos on
      <g-link to="https://www.youtube.com/c/algorithmCoding" data-cursor-hover
        >YouTube</g-link
      >
    </h3>
    <p class="max-w-xl mx-auto text-sm md:text-md">
      Since 2018, I've created courses on Web Development, Python, Golang, and
      more. I love being able to put the things I've learned into a package for
      others to learn from.
    </p>
    <!-- <div class="mt-6 max-w-xl mx-auto">
      <h3 class="text-2xl mb-6 font-bold">Looking for Custom Content?</h3>
      <p class="text-sm md:text-md">
        I often get requests to create custom content like individual courses,
        one-off videos, articles, etc. If you're interested in something,contact
        me and include all of the necessary details.
      </p>
      <g-link
        class="btn mr-auto mt-8 font-bold py-3 px-8 rounded-sm text-sm inline-block uppercase"
        v-scroll-to="'#contact'"
        data-cursor-hover
        >contact</g-link
      >
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
/* courses section */

.courses-section h3 a {
  color: var(--special-color);
  text-decoration: underline;
  cursor: pointer;
}
</style>
