<template>
  <div class="container-fluid offcanvas-body d-flex align-items-center me-0">
    <ul class="navbar-nav justify-content-end align-items-center flex-grow-1 fw-semibold fs-5">
      <li v-for="header in headers" :key="header" class="nav-item mx-1">
        <a
          :href="`#${header}`"
          :class="{ 'nav-link': true, active: header === currentSection }"
        >{{ $t(`navbar.${header}`) }}</a>
      </li>
    </ul>
  </div>
</template>
  
<script>

export default {
  name: "SubNav",
  props: {
    headers: Object
  },
  data() {
    return {
      currentSection: null,
      section: null,
    }
  },
  methods: {
    updateScroll() {
      this.section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          this.currentSection = id;
        }
      });
    },
  },
  mounted() {
    this.section = document.querySelectorAll("section");

    window.addEventListener("scroll", this.updateScroll);
    this.updateScroll();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
}  
</script>
  
