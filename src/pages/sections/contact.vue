<template>
  <dir id="contact" class="contact-section p-0">
    <div class="contact-header mb-8">
      <span class="uppercase font-bold text-xs">get in touch</span>
      <h3 class="font-bold text-6xl uppercase">contact</h3>
    </div>
    <div class="contact-content flex flex-wrap">
      <div
        class="contact-info w-full flex flex-wrap lg:flex-no-wrap justify-around"
      >
        <span class="text-sm w-1/2 mb-4">
          <mail-icon class="inline align-middle"></mail-icon>
          <span class="inline align-middle ml-1">odjaidri@gmail.com</span>
        </span>
        <span class="text-sm w-1/2">
          <phone-icon class="inline align-middle"></phone-icon>
          <span class="inline align-middle"> +213 666-35-83-89 </span>
        </span>
        <span class="text-sm w-1/2">
          <map-pin-icon class="inline align-middle"></map-pin-icon>
          <span class="inline align-middle"> address: Sétif, Algeria </span>
        </span>
        <span class="text-sm w-1/2">
          <smile-icon class="inline align-middle"></smile-icon>
          <span class="inline align-middle">
            freelancer : <span class="freelancer font-bold">available</span>
          </span>
        </span>
      </div>
      <div
        class="contact-form mt-1 w-full sm:w-11/12 md:w-5/6 lg:w-full sm:mx-auto flex p-4"
      >
        <form class="w-full lg:w-1/2 p-2 lg:p-6">
          <input
            class="w-full border mb-4 p-4 rounded"
            type="text"
            name="name"
            placeholder="Your Name"
            autocomplete="off"
          />
          <input
            class="w-full border mb-4 p-4 rounded"
            type="email"
            name="email"
            placeholder="Your Email"
            autocomplete="off"
          />
          <input
            class="w-full border mb-4 p-4 rounded"
            type="text"
            name="subject"
            placeholder="Subject"
            autocomplete="off"
          />
          <textarea
            class="w-full border rounded p-4"
            name="details"
            cols="24"
            rows="5"
            placeholder="Additional Details"
          ></textarea>
          <button
            data-cursor-hover
            class="mt-4 font-bold py-3 px-8 rounded text-sm inline-block uppercase"
          >
            send
          </button>
        </form>
        <div class="hidden lg:block w-1/2 p-4">
          <g-image src="~/assets/images/contactme.svg"></g-image>
        </div>
      </div>
    </div>
  </dir>
</template>

<script>
import { MailIcon, PhoneIcon, MapPinIcon, SmileIcon } from "vue-feather-icons";
export default {
  components: {
    MailIcon,
    PhoneIcon,
    MapPinIcon,
    SmileIcon,
  },
};
</script>

<style>
/* contact section */

.contact-section .contact-header span::after {
  content: " ";
  width: 20px;
  height: 2px;
  background: var(--body-color);
  display: inline-block;
  position: relative;
  top: -4px;
  left: 5px;
}

.contact-info span .freelancer {
  color: var(--special-color);
}

.contact-form form input,
.contact-form form textarea {
  background: var(--bg-color);
  border: 2px solid var(--title-color);
  transition: all 0.2s ease-in-out;
}

.contact-form form input:focus,
.contact-form form textarea:focus {
  box-shadow: none;
  outline: none;
  border: 2px solid var(--special-color);
}

.contact-form form button {
  background: var(--special-color);
  color: #fff;
  border: 2px solid var(--special-color);
  transition: all 0.5s ease-in-out;
}

.contact-form form button:hover,
.contact-form form button:focus {
  background: var(--bg-color);
  color: var(--special-color);
}
</style>
