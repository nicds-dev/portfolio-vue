<template>
  <nav 
    id="navbar" 
    class="navbar navbar-blur navbar-expand-lg navbar-dark bg-transparent fixed-top border-bottom border-blue"
  >
    <div class="container pt-2" style="scrollbar-gutter: stable;">
      <!-- Name/Logo -->
      <a href="#" class="navbar-brand fw-bold fs-4 ps-3">nicds.<span class="text-blue">dev</span></a>
      <!-- Toggle Button -->
      <button 
        class="navbar-toggler shadow-none border-0"
        @click="toggleOffcanvas"
        type="button" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasNavbar" 
        aria-controls="offcanvasNavbar" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- SideBar -->
      <div 
        class="sidebar offcanvas offcanvas-start p-2" 
        tabindex="-1" 
        id="offcanvasNavbar" 
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div 
          class="container offcanvas-header text-white">
          <h5 class="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
            nicds.
            <span class="text-blue">dev</span>
          </h5>
          <button 
            type="button" 
            class="btn-close btn-close-white shadow-none" 
            data-bs-dismiss="offcanvas" aria-label="Close"
          ></button>
        </div>
        <SubNav />
      </div>
    </div>
  </nav>
</template>

<script setup>
import SubNav from './SubNav.vue';

</script>
