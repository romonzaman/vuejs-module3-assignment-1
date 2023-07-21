<script setup>
  import { footers } from "../data.js"
</script>

<template lang="">
    <footer class="bg-gray-300">
      <div class="container mx-auto px-6 pt-10 pb-6 w-1/2">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/4 text-center md:text-left" v-for="footer, index in footers" :key="index">
            <h5 class="uppercase mb-6 font-bold">{{footer.title}}</h5>
            <ul class="mb-4">
              <li class="mt-2" v-for="link,index in footer.links" :key="index">
                <a :href="link.url" target="new" class="text-gray-600 hover:text-orange-500">{{link.title}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
</template>

<style lang="">
    
</style>