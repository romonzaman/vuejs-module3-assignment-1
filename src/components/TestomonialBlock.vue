<script setup>
  import { testomonies } from "../data.js"
</script>

<template lang="">
<!-- Container for demo purpose -->
<div class="container my-24 mx-auto md:px-6">
  <section class="mb-32 text-center">
    <h2 class="mb-12 text-3xl font-bold">Testimonials</h2>

    <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <div class="mb-12 md:mb-0" v-for="testomonie,index in testomonies" :key="index">
        <div class="mb-6 flex justify-center">
          <img :src="testomonie.avatar"
            class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
        </div>
        <h5 class="mb-2 text-lg font-bold">{{testomonie.name}}</h5>
        <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
          {{testomonie.title}}
        </h6>
        <p class="mb-4">
          {{testomonie.comment}}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6">
            <path fill="currentColor"
              d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
          </svg>
        </p>
        <ul class="mb-0 flex justify-center" v-html="testomonie.rating">
        </ul>
      </div>


    </div>
  </section>
</div>
<!-- Container for demo purpose -->
</template>

<style lang="">
    
</style>