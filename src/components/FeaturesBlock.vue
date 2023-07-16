<script setup>
  import {features} from "../data.js"
</script>

<template>
<!-- Container for demo purpose -->
<div class="container my-24 mx-auto md:px-6">
  <!-- Section: Design Block -->
  <section class="mb-32 text-center lg:text-left" id="features">

    <div class="py-12 md:px-6 md:px-12">
      <div class="container mx-auto xl:px-32">
        <div class="flex grid items-center lg:grid-cols-2">
          <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0" v-html="features.text">
          </div>
          <div class="md:mb-12 lg:mb-0">
            <img :src="features.img"
              class="rotate-lg-6 w-full rounded-lg shadow-lg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
</div>

</template>

<style lang="">
    
</style>