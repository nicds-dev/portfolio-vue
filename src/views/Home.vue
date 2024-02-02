<template>
  <section id="home" class="section-dark min-vh-100 py-6 pb-lg-0 text-white d-flex align-items-center">
    <div class="container mx-auto row align-items-center row-gap-5">
      <article class="col-lg-7 order-2 order-lg-1 text-lg-start text-center d-flex flex-column pt-lg-4 gap-1">
        <h1 class="fw-semibold fs-1">{{ $t("homeSection.title") }}<span class="text-blue">Nicolás</span>,
        <br>
          <span class="fw-bold text-blue">{{ $t("homeSection.title2") }}
            <span class="text-white d-inline">{{ $t("homeSection.title3") }}</span>
          </span>
        </h1>
        <em class="fs-5 mt-2 mb-4">{{ $t("homeSection.subtitle") }}</em>
        <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
          <a :href="userData.linkedin" class="icon-social" target="_blank"><i class="bi bi-linkedin"></i></a>
          <a :href="userData.github" class="icon-social" target="_blank"><i class="bi bi-github"></i></a>
          <a :href="$t('homeSection.cv')" class="btn btn-cv fw-semibold" target="_blank"><i class="bi bi-download icon-bold"></i> CV</a>
        </div>
      </article>
      <div class="col-lg-5 col-md-8 order-1 mx-auto mx-lg-0 text-lg-end text-center">
        <img :src="userData.img" alt="nicds picture" class="img-fluid blob">
      </div>
      <div class="d-flex flex-column flex-lg-row align-items-center pt-lg-5 py-4 row-gap-5 order-3">
          <h2 class="col-lg-2 col text-lg-start text-center fw-bold fs-4 mb-0">
            {{ $t("homeSection.stack") }}<span class="text-blue">{{ $t("homeSection.stack2") }}</span>
          </h2>
          <div class="col d-flex flex-wrap gap-4 justify-content-center me-lg-5">
            <div v-for="category in catIcons"
              :key="category"
              class="d-flex flex-wrap gap-2"
            >
              <img v-for="icon in category"
              :src="`https://skillicons.dev/icons?i=${icon.text}`"
              :alt="`${icon.name} logo`"
            >
            </div>
            
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  props: {
    userData: Object
  },
  data() {
    return {
      catIcons: {
        iconsBack: [
          { name: "Python", text: "py"},
          { name: "Django", text: "django"},
          { name: "PostgreSQL", text: "postgres"},
          { name: "Postman", text: "postman"},
        ],
        iconsFront: [
          { name: "JavaScript", text: "js"},
          { name: "VueJS", text: "vue"},
          { name: "Bootstrap", text: "bootstrap"},
        ],
        iconsTools: [
          { name: "Git", text: "git"},
        ],
      } 
    }
  },
}
</script>

<style scoped>
  @media (min-width: 992px) {
    em {
      max-width: 40ch;
    }
  }
  .fs-1 {
    font-size: calc(1.5rem + 1.5vw) !important;
  }
  .img-fluid {
    max-width: 85%;
  }
  @media (min-width: 1200px) {
    .fs-1 {
      font-size: 3rem !important;
    }
  }
  @media (max-width: 992px) {
    .py-6 {
      padding-top: 9rem !important;
      padding-bottom: 3rem;;
    }
  }
</style>
