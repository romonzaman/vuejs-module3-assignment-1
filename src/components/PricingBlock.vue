<script setup>
import {ref} from 'vue'
import { pricing } from "../data.js"

const activePrice = ref(0)

</script>

<template lang="">
<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6" id="pricing">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Pricing that Fits Your Fitness Goals</h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Choose the perfect plan that suits your needs and take your fitness journey to the next level with our app. We offer flexible pricing options designed to accommodate various workout preferences and commitment levels. Select from the following membership plans:
        </p>
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <!-- Pricing Card -->
          <div @click="activePrice=index" class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white" v-for="price,index in pricing" :key="index" :class="index==activePrice&&'bg-blue-50'||'bg-white'">
              <h3 class="mb-4 text-2xl font-semibold">{{price.name}}</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">{{price.description}}</p>
              <br/><br/><br/>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">${{price.amount}}</span>
                  <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <a @click.prevent.stop="activePrice=index" href="#" class="bottom-10 text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>
          </div>
          <div class="text-lg text-center flex">
            <div class="w-[500]">
                No matter which plan you choose, our commitment to your fitness success remains unwavering. We believe in delivering exceptional value, expert guidance, and continuous support to help you achieve your desired results. Join us today and start your transformative fitness journey!
            </div>
          </div>
  </div>
</section>
</template>

<style lang="">
    
</style>