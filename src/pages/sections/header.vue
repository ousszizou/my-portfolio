<template>
  <kinesis-container id="home" class="relative">
    <Profile class="h-full w-1/3 md:w-1/6 mt-8 mx-auto" />
    <div>
      <h1 class="text-3xl font-bold mt-2">Oussama Djaidri</h1>
      <vue-typed-js
        :strings="[
          'JavaScript Developer',
          'Golang Developer',
          'Youtube Creator',
        ]"
        :typeSpeed="80"
        :loop="true"
        :showCursor="true"
        :cursorChar="'_'"
        :backSpeed="50"
        style="display: inline-block"
        class="my-3"
      >
        <span>
          I'm a
          <span class="typing"></span>
        </span>
      </vue-typed-js>
      <div class="social-media flex w-1/2 m-auto justify-center mt-3">
        <g-link
          to="https://www.linkedin.com/in/oussama-djaidri-ab2143149/"
          data-cursor-hover
        >
          <linkedin-icon
            stroke-width="1.5"
            size="20"
            class="mx-2"
          ></linkedin-icon>
        </g-link>
        <g-link to="https://github.com/ousszizou" data-cursor-hover>
          <github-icon stroke-width="1.5" size="20" class="mx-2"></github-icon>
        </g-link>
        <g-link to="https://twitter.com/Djaidri_oussama" data-cursor-hover>
          <twitter-icon
            stroke-width="1.5"
            size="20"
            class="mx-2"
          ></twitter-icon>
        </g-link>
        <g-link
          to="https://www.youtube.com/c/algorithmCoding"
          data-cursor-hover
        >
          <youtube-icon
            stroke-width="1.5"
            size="20"
            class="mx-2"
          ></youtube-icon>
        </g-link>
      </div>
    </div>
    <div class="hidden md:block">
      <kinesis-element
        class="absolute"
        style="top: 10%; left: 10%"
        :strength="10"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 238 238"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M156 155.982H0V-0.000495155H156V155.982Z" fill="#D0BB79" />
          <path
            d="M234.005 234.1H78.0054V78.0887H234.005V234.1Z"
            stroke="currentColor"
            stroke-width="6.6665"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </kinesis-element>
      <kinesis-element
        class="absolute"
        style="top: 100%; right: 25%"
        :strength="10"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 312 281"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M81.2803 81.0007L196.224 280.115L311.196 81.0007H81.2803Z"
            fill="#D0BB79"
          />
          <path
            d="M4 3.99853L118.944 203.113L233.915 3.99853H4Z"
            stroke="currentColor"
            stroke-width="6.6665"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </kinesis-element>
      <kinesis-element
        class="absolute"
        style="top: 3%; right: 15%"
        :strength="10"
      >
        <svg
          width="75"
          height="75"
          viewBox="0 0 201 161"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70.6787 64.8648C70.6787 29.0425 99.6937 -0.000370204 135.516 -0.000370204C171.338 -0.000370204 200.381 29.0425 200.381 64.8648C200.381 100.687 171.338 129.702 135.516 129.702C99.6937 129.702 70.6787 100.687 70.6787 64.8648Z"
            fill="#FF5A5A"
          />
          <path
            d="M4 92.2057C4 56.3834 33.0429 27.3684 68.8372 27.3684C104.659 27.3684 133.702 56.3834 133.702 92.2057C133.702 128.028 104.659 157.043 68.8372 157.043C33.0429 157.043 4 128.028 4 92.2057Z"
            stroke="currentColor"
            stroke-width="6.6665"
            stroke-miterlimit="10"
          />
        </svg>
      </kinesis-element>
      <kinesis-element
        class="absolute hidden lg:block"
        style="top: 52%; left: 28%"
        :strength="10"
      >
        <svg
          width="70"
          height="70"
          viewBox="0 0 515 356"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 352.084L90.1997 265.901"
            stroke="currentColor"
            stroke-width="6.6667"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M4 265.869L90.1997 352.053"
            stroke="currentColor"
            stroke-width="6.6667"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M299.946 109.617C299.946 51.2888 347.234 4.00033 405.562 4.00033C463.89 4.00033 511.179 51.2888 511.179 109.617C511.179 167.945 463.89 215.233 405.562 215.233C347.234 215.233 299.946 167.945 299.946 109.617Z"
            stroke="#FF5A5A"
            stroke-width="6.66656"
            stroke-miterlimit="10"
          />
        </svg>
      </kinesis-element>
      <kinesis-element
        class="absolute"
        style="top: 100%; left: 23%"
        :strength="10"
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 512 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style="transform: rotate(45deg)"
        >
          <path
            d="M507.855 87.6985L424.166 4.00024L339.981 88.1738L255.796 4.00024L171.845 87.9232L88.1558 4.22208L4 88.3984"
            stroke="#7AB9DC"
            stroke-width="6.66668"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </kinesis-element>
      <kinesis-element class="absolute" style="top: 54%; right: 0%">
        <svg
          width="200"
          height="200"
          viewBox="0 0 903 379"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M812.57 288.736L898.77 374.919"
            stroke="currentColor"
            stroke-width="6.6667"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M3.99976 222.536L33.3465 251.906C52.31 270.847 83.0635 270.847 102.03 251.906L117.521 236.409C136.491 217.436 167.244 217.436 186.211 236.409L201.695 251.873C220.658 270.847 251.412 270.847 270.382 251.873L285.625 236.637C304.592 217.663 335.345 217.663 354.312 236.637L369.322 251.646C388.292 270.619 419.045 270.619 438.012 251.646L463.564 226.078"
            stroke="#FFEE50"
            stroke-width="6.66667"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M717.477 132.548L832.255 66.2572L717.477 -8.07734e-05V132.548Z"
            fill="#FF5A5A"
          />
        </svg>
      </kinesis-element>
      <kinesis-element
        class="absolute hidden lg:block"
        style="top: 40%; right: 25%"
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 341 332"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M337.476 106.319V327.921H115.884V106.319H337.476Z"
            stroke="#7AB9DC"
            stroke-width="6.66639"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M297.29 146.338V287.311H156.327V146.338H297.29Z"
            stroke="#7AB9DC"
            stroke-width="6.66668"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M256.896 247.213H196.58V186.906H256.896V247.213Z"
            stroke="#7AB9DC"
            stroke-width="6.66652"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M196.245 4.00006V196.241H4V4.00006H196.245Z"
            stroke="currentColor"
            stroke-width="6.66624"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </kinesis-element>
      <kinesis-element class="absolute" style="top: 70%" :strength="10">
        <svg
          width="100"
          height="100"
          viewBox="0 0 128 342"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style="transform: rotate(45deg)"
        >
          <path
            d="M4.24484 341.394C4.10256 330.708 8.11166 319.967 16.2693 311.821L41.8804 286.21C57.9223 270.168 57.9223 244.166 41.8804 228.124L16.0406 202.263C-0.00129513 186.222 -0.00129513 160.22 16.0406 144.178L42.1205 118.092C58.1596 102.05 58.1596 76.0483 42.1205 60.0064L16.0321 33.9208C7.02078 24.9095 3.07037 12.7455 4.18354 1"
            stroke="currentColor"
            stroke-width="6.6665"
            stroke-miterlimit="10"
          />
          <path
            d="M39.4531 341.394C39.3108 330.708 43.3199 319.967 51.4776 311.821L77.0887 286.21C93.1306 270.168 93.1306 244.166 77.0887 228.124L51.2487 202.263C35.2068 186.222 35.2068 160.22 51.2487 144.178L77.3286 118.092C93.3677 102.05 93.3677 76.0483 77.3286 60.0064L51.2404 33.9208C42.229 24.9095 38.2813 12.7455 39.3917 1"
            stroke="currentColor"
            stroke-width="6.6665"
            stroke-miterlimit="10"
          />
          <path
            d="M74.6894 341.394C74.5471 330.708 78.5563 319.967 86.7139 311.821L112.325 286.21C128.367 270.168 128.367 244.166 112.325 228.124L86.4852 202.263C70.4433 186.222 70.4433 160.22 86.4852 144.178L112.565 118.092C128.604 102.05 128.604 76.0483 112.565 60.0064L86.4767 33.9208C77.4654 24.9095 73.5177 12.7455 74.6281 1"
            stroke="currentColor"
            stroke-width="6.6665"
            stroke-miterlimit="10"
          />
        </svg>
      </kinesis-element>
    </div>
    <g-link
      data-cursor-hover
      v-scroll-to="'#contact'"
      class="btn mt-8 font-bold py-2 px-8 rounded-full capitalize text-sm inline-block"
      >hire me</g-link
    >
    <div class="scroll-downs" v-scroll-to="'#about'" data-cursor-hover>
      <span>scroll down</span>
      <div class="mousey">
        <div class="scroller"></div>
      </div>
    </div>
  </kinesis-container>
</template>

<script>
import Profile from "~/components/Profile.vue";
import {
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
  YoutubeIcon,
} from "vue-feather-icons";
export default {
  components: {
    Profile,
    LinkedinIcon,
    GithubIcon,
    TwitterIcon,
    YoutubeIcon,
  },
};
</script>

<style>
</style>
