<template>
  <section id="projects" class="section-dark py-6 text-white">
    <div class="container d-flex flex-column p-4 gap-5">
      <h2 class="title-second fw-bold text-center">{{ $t("projectSection.title") }}</h2>
      <div class="row g-5">
        <div v-for="project in portfolio" :key="project.title" class="col-12 col-md-6 col-lg-4">
          <div class="h-100 d-flex flex-column gap-2 box-project rounded p-3">
            <h3 class="fs-5 fw-bold text-blue">{{ project.title }}</h3>
            <img v-if="project.img" :src="require(`@/assets/img/${project.img}`)" :alt="project.title" class="img-fluid rounded">
            <div class="d-flex flex-wrap justify-content-center gap-2">
              <div v-for="tag in project.tags" class="box-skill-tag rounded-3 d-flex flex-column justify-content-center align-items-center">
                <span class="fw-semibold">{{ tag }}</span>
              </div>
            </div>
            <p class="fw-semibold p-text-color my-2">{{ project.description }}</p>
            <div class="d-flex gap-3 ms-auto mt-auto">
              <a v-if="project.link || project.youtube" :href="project.link || project.youtube" target="_blank">
                <i class="bi bi-box-arrow-up-right icon-project"></i>
              </a>
              <a v-if="project.source" :href="project.source" target="_blank">
                <i class="bi bi-github icon-project"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  created() {
    this.getProjects();
  },
  data() {
    return {
      portfolio: []
    }
  },
  methods: {
    async getProjects() {
      let res = await fetch("projects.json")
      let data = await res.json()

      const currentLanguage = this.$i18n.locale;

      this.portfolio = data[currentLanguage].projects;
      console.log(this.portfolio)
    }
  },
}
</script>

<style scoped>

</style>