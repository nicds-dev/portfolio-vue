<template>
  <section id="home" class="section-dark min-vh-100 py-6 pb-0 text-white d-flex align-items-center">
    <div class="container mx-auto row align-items-center gap-5">
      <article class="col-lg-7 order-2 order-lg-1 text-lg-start text-center ps-lg-3 d-flex flex-column gap-1">
        <h1 class="fw-semibold fs-2">Hi, I'm <span class="text-blue">Nicolás</span>,</h1>
        <h1 class="fw-bold fs-1 text-blue">
          <span>Backend </span>
          <vue-writer
            :array='["Developer"]'
            :eraseSpeed='80'
            :typeSpeed='80'
            class="text-white d-inline"
          />
          <span class="blinking-text">|</span>
        </h1>
        <em class="fs-5 mb-3">Optimizing the experience behind the screen.</em>
        <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 gap-lg-3">
          <a href="/cv-es.pdf" class="btn btn-cv fw-semibold" target="_blank"><i class="bi bi-download icon-bold"></i> CV</a>
          <a :href="user.linkedin" class="btn btn-social fw-semibold" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</a>
          <a :href="user.github" class="btn btn-social fw-semibold" target="_blank"><i class="bi bi-github"></i> GitHub</a>
        </div>
      </article>
      <div class="col-lg-4 col-md-8 order-1 text-center mx-auto">
        <img :src="user.img" alt="nicds picture" class="img-fluid w-img-70 rounded-circle">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        linkedin: "https://www.linkedin.com/in/nicds/",
        github: "https://github.com/nicds-dev/",
        img: require("@/assets/img/profile.webp"),
      }
    };
  }
};
</script>

<style scoped>
  @keyframes blink {
    0%, 100% {
     opacity: 1;
    }50% {
      opacity: 0;
    }
  }
  .blinking-text {
    animation: blink 1s infinite;
  }
</style>
