<template>
  <section id="contact" class="section-blue-gray py-6 text-white">
    <div class="container p-4 d-flex flex-lg-row flex-column gap-5">
      <div class="col-12 col-lg-6 d-flex flex-column align-self-center text-lg-start text-center mb-0 mb-lg-5 gap-3">
        <h2 class="title-second fw-bold">Contact <span class="text-blue">Me</span></h2>
        <p class="fw-semibold p-text-color">
          I'm just a few clicks away. You can contact me through my socials. 
          <i class="bi bi-arrow-down icon-bounce"></i>
        </p>
        <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
          <a :href="userData.linkedin" class="icon-social" target="_blank">
            <i class="bi bi-linkedin"></i>
          </a>
          <a :href="userData.github" class="icon-social" target="_blank">
            <i class="bi bi-github"></i>
          </a>
          <a :href="`mailto:${userData.email}`" class="btn btn-blue fw-semibold" target="_blank">
            <i class="bi bi-envelope-paper icon-bold"></i> Email
          </a>
        </div>
      </div>
      <div class="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
        <ContactForm :formFields="formFields" />
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'Contact',
  props: {
    userData: Object
  },
  components: {
    ContactForm
  },
  data() {
    return {
      formFields: [
        { name: "name", placeholder: "Enter your name", type: "text"},
        { name: "email", placeholder: "Enter your email", type: "email"},
        { name: "message", placeholder: "Enter your message", type: "text_area", rows: "5"},
      ],
    }
  },
}
</script>

<style scoped>
  p {
    max-width: 30ch;
  }
</style>