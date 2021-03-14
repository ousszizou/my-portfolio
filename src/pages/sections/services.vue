<template>
  <div id="services" class="services-section my-24">
    <h2 class="text-left section-heading uppercase font-semibold underline">
      <span class="text-4xl font-bold mr-1 rounded-sm relative">s</span>ervices
    </h2>
    <div class="content-section flex mt-20 justify-around">
      <div class="left-section w-full lg:w-3/5 text-left">
        <h3 class="text-2xl capitalize font-bold mb-8">what i can do.</h3>
        <div class="all-services">
          <div class="ml-0 lg:ml-1">
            <h4 class="underline font-bold">Web Development</h4>
            <p class="mt-3 text-sm">
              I know how to create your website to run across devices using the
              latest technologies available.
            </p>
          </div>
          <div class="ml-0 lg:ml-1 mt-4">
            <h4 class="underline font-bold">Create Content</h4>
            <p class="mt-3 text-sm">
              I offer creating custom content like <b>individual courses</b>,
              <b>one-off videos</b>, <b>articles</b>.
            </p>
          </div>
          <div class="ml-0 lg:ml-1 mt-4">
            <h4 class="underline font-bold">Other Services</h4>
            <p class="mt-3 text-sm">
              Fix bugs - App improvements - Help/Consultation
            </p>
          </div>
        </div>
      </div>
      <div class="hidden lg:block right-section">
        <g-image src="~/assets/images/illustration-2.svg"></g-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* services section */
.services-section .content-section .left-section .all-services p span {
  color: var(--special-color);
  font-weight: bold;
}
</style>
