<template>
  <NavBar />
  <Home :userData="userData" />
  <About />
  <Projects />
  <Contact :userData="userData" />
  <Footer :userData="userData" />
</template>

<script>
import NavBar from './components/NavBar.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Home,
    About,
    Projects,
    Contact,
    Footer
  },
  data() {
    return {
      userData: {
        linkedin: "https://www.linkedin.com/in/nicds/",
        github: "https://github.com/nicds-dev/",
        email: "nicdsdev@gmail.com",
        img: require("@/assets/img/profile.webp"),
      },
    }
  },
}
</script>
