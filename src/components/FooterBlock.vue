<script setup>
  import { footers } from "../data.js"
</script>

<template lang="">
    <footer class="bg-gray-100">
      <div class="container mx-auto px-6 pt-10 pb-6 w-1/2">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">{{footers[0].title}}</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a :href="footers[0].links[0].url" class="hover:underline text-gray-600 hover:text-orange-500">{{footers[0].links[0].title}}</a>
              </li>
              <li class="mt-2">
                <a :href="footers[0].links[1].url" class="hover:underline text-gray-600 hover:text-orange-500">{{footers[0].links[1].title}}</a>
              </li>
              <li class="mt-2">
                <a :href="footers[0].links[2].url" class="hover:underline text-gray-600 hover:text-orange-500">{{footers[0].links[2].title}}</a>
              </li>
            </ul>
          </div>

          <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">{{footers[1].title}}</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a :href="footers[1].links[0].url" class="hover:underline text-gray-600 hover:text-orange-500">{{footers[1].links[0].title}}</a>
              </li>
              <li class="mt-2">
                <a :href="footers[1].links[1].url" class="hover:underline text-gray-600 hover:text-orange-500">{{footers[1].links[1].title}}</a>
              </li>
              <li class="mt-2">
                <a :href="footers[1].links[2].url" class="hover:underline text-gray-600 hover:text-orange-500">{{footers[1].links[2].title}}</a>
              </li>
            </ul>
          </div>
          
          <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">{{footers[2].title}}</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a :href="footers[2].links[0].url" class="hover:underline text-gray-600 hover:text-orange-500">{{footers[2].links[0].title}}</a>
              </li>
              <li class="mt-2">
                <a :href="footers[2].links[1].url" class="hover:underline text-gray-600 hover:text-orange-500">{{footers[2].links[1].title}}</a>
              </li>
              <li class="mt-2">
                <a :href="footers[2].links[2].url" class="hover:underline text-gray-600 hover:text-orange-500">{{footers[2].links[2].title}}</a>
              </li>
            </ul>
          </div>
          
          <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">{{footers[3].title}}</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a :href="footers[3].links[0].url" class="hover:underline text-gray-600 hover:text-orange-500">{{footers[3].links[0].title}}</a>
              </li>
              <li class="mt-2">
                <a :href="footers[3].links[1].url" class="hover:underline text-gray-600 hover:text-orange-500">{{footers[3].links[1].title}}</a>
              </li>
              <li class="mt-2">
                <a :href="footers[3].links[2].url" class="hover:underline text-gray-600 hover:text-orange-500">{{footers[3].links[2].title}}</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
</template>

<style lang="">
    
</style>