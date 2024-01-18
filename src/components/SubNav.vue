<template>
  <div class="container-fluid offcanvas-body d-flex align-items-center me-0">
    <ul class="navbar-nav justify-content-end align-items-center flex-grow-1 fw-semibold fs-5">
      <li v-for="header in headers" :key="header.id" class="nav-item mx-1">
        <a
          :href="`#${header.id}`"
          :class="{ 'nav-link': true, active: header.id === currentSection }"
        >{{ header.name }}</a>
      </li>
    </ul>
  </div>
</template>
  
<script setup>
  import { ref, onMounted } from "vue";
  
  const currentSection = ref();
  let section = ref();
  
  const headers = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];
  
  onMounted(() => {
    section.value = document.querySelectorAll("section");
  
    window.addEventListener("scroll", updateScroll);
    updateScroll();
  });
  
  function updateScroll() {
    section.value.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
  
      if (top >= offset && top < offset + height) {
        currentSection.value = id;
      }
    });
  }
</script>
  
