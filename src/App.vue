<template>
  <NavBar />
  <Home />
  <About />
  <Projects />
  <Contact />
</template>

<script>
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    Home,
    About,
    Projects,
    Contact
  }
}
</script>
