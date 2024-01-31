<template>
  <NavBar />
  <Home :userData="userData" />
  <About />
  <Projects />
  <Contact :userData="userData" />
  <Footer :userData="userData" />
  <div v-if="$i18n" class="position-fixed bottom-0 end-0 p-md-4 p-3 dropup-center dropup">
    <button type="button" class="btn btn-languages btn-lg" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="bi bi-translate"></i>
    </button>
    <ul class="dropdown-menu">
      <li>
        <a @click="$i18n.locale = 'en'" class="dropdown-item">{{ $t('lang.en') }}</a>
        <a @click="$i18n.locale = 'es'" class="dropdown-item">{{ $t('lang.es') }}</a>
      </li>
    </ul>
  </div>
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
        linkedin: 'https://www.linkedin.com/in/nicds/',
        github: 'https://github.com/nicds-dev/',
        email: 'nicdsdev@gmail.com',
        img: require('@/assets/img/profile.webp'),
      },
    }
  },
  onMounted() {
    document.cookie = "locale=es";
  }
}
</script>
