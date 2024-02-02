<template>
  <section id="about" class="section-blue-gray py-6 text-white">
    <div class="container d-flex flex-column px-4 pt-4 gap-3">
      <h2 class="title-second fw-bold">{{ $t("aboutSection.title") }}
        <span class="text-blue">{{ $t("aboutSection.title2") }}</span>
      </h2>
      <p class="fw-semibold p-text-color">
        {{ $t("aboutSection.description") }}
      </p>
    </div>
    <div class="container d-flex flex-lg-row flex-column p-4">
      <h3 class="fw-semibold fs-4 col-2">{{ $t("aboutSection.studies") }}:</h3>
      <li class="col ms-3 fw-semibold p-text-color">
        {{ $t("aboutSection.career") }}
        <br>
        <span class="opacity-75">
          Corporación Universitaria Autónoma de Nariño
          <br>
          {{ $t("aboutSection.dates") }}
        </span>
      </li>  
    </div>
  </section>
</template>

<script>

</script>

<style scoped>
  ::marker {
    color: #42C189;
  }
</style>
