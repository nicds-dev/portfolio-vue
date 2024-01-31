<template>
  <nav 
    id="navbar" 
    class="navbar navbar-blur navbar-expand-lg navbar-dark fixed-top border-bottom border-blue"
  >
    <div class="container-fluid py-1">
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
        class="sidebar offcanvas offcanvas-start py-1 px-3" 
        tabindex="-1" 
        id="offcanvasNavbar" 
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div 
          class="container-fluid offcanvas-header text-white">
          <h5 class="offcanvas-title fs-4 fw-bold" id="offcanvasNavbarLabel">
            nicds.
            <span class="text-blue">dev</span>
          </h5>
          <button 
            type="button" 
            class="btn-close btn-close-white shadow-none" 
            data-bs-dismiss="offcanvas" aria-label="Close"
          ></button>
        </div>
        <SubNav :headers="headers" />
      </div>
    </div>
  </nav>
</template>

<script>
import SubNav from './SubNav.vue'

export default {
  name: 'NavBar',
  components: {
    SubNav
  },
  data() {
    return {
      headers: {
        home: 'home',
        about: 'about',
        projects: 'projects',
        contact: 'contact'
      }
    }
  }
}
</script>

<style scoped>
	.container-fluid {
		width: 95%;
	}
</style>
