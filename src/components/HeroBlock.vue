<script setup>
    import {banner} from "../data.js"
</script>

<template lang="">

    <section class="bg-white dark:bg-gray-900 mt-8" style="background: linear-gradient(45deg, #FFFFF2 0%, #004ba2 100%)">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    {{banner.title}}
                </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    {{banner.subtitle}}
                </p>
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-blue-100 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                   <img class="h-8 mr-2" :src="banner.imgBtn1" alt=""> {{banner.textBtn1}}
                </a> 
                <a href="#" class="bg-gray-200 ml-6 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                   <img class="h-8 mr-2" :src="banner.imgBtn2" alt=""> {{banner.textBtn2}}
                </a> 
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img class="rounded-2xl" :src="banner.img" alt="gympp">
            </div>                
        </div>
    </section>
</template>

<style lang="">
    
</style>
