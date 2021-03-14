<template>
  <Layout class="text-center">
    <div>
      <!-- header section -->
      <HeaderSection />
      <!-- about section -->
      <AboutSection />
      <!-- works section -->
      <WorksSection />
      <!-- services section -->
      <ServicesSection />
      <!-- courses section -->
      <CoursesSection />
      <!-- contact section -->
      <ContactSection />
    </div>
  </Layout>
</template>

<script>
import HeaderSection from "./sections/header.vue";
import AboutSection from "./sections/about.vue";
import WorksSection from "./sections/works.vue";
import ServicesSection from "./sections/services.vue";
import CoursesSection from "./sections/courses.vue";
import ContactSection from "./sections/contact.vue";

export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    HeaderSection,
    AboutSection,
    WorksSection,
    ServicesSection,
    CoursesSection,
    ContactSection,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.profile__image {
  margin: 3rem auto 0;
}

.social-media a svg {
  transition: all 0.5s;
}

.social-media a svg:hover {
  color: var(--special-color);
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

.btn-secondary {
  background: var(--bg-color);
  color: var(--special-color);
  border: 2px solid var(--special-color);
  transition: all 0.5s ease-in-out;
}

.btn-secondary:hover,
.btn-secondary:focus {
  background: var(--special-color);
  color: #fff;
}

/* scroller */
.scroll-downs {
  position: absolute;
  top: 125%;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 60px;
  height: 60px;
}

.scroll-downs span {
  font-size: 11px;
  text-transform: capitalize;
  color: var(--title-color);
}

.mousey {
  width: 3px;
  padding: 3px 6px;
  height: 20px;
  border: 2px solid var(--title-color);
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
  margin: 2px auto;
}
.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: var(--title-color);
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% {
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(15px);
    opacity: 0;
  }
}
</style>
