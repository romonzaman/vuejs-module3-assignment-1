<script setup>
    import {appinfo, nav} from "../data.js"
    import {ref} from "vue"

    const mobile_menu = ref(0)

    function menu_button_clicked(){
        if(mobile_menu.value ==0) mobile_menu.value = 1
        else mobile_menu.value = 0 
        console.log(mobile_menu.value)
    }
</script>

<template lang="">
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center">
        <img :src="appinfo.logo" class="h-8 mr-3" alt="{{appinfo.title}}">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{appinfo.title}}</span>
    </a>
    <div class="flex md:order-2">
        <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href="#pricing">Get started</a>
        <button @click="menu_button_clicked()" data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
    </div>
    <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky" :class="mobile_menu==0&&'hidden'||''">
        <ul class="flex flex-col text-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" :class="mobile_menu==0&&''||''">
        <li v-for="navitem,index in nav" :key="index">
            <a :href="navitem.href" class="block py-2 pl-3 pr-4 text-white bg-blue-700 hover:bg-blue-50 hover:text-red-600 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">{{navitem.name}}</a>
        </li>
        </ul>
    </div>
    </div>
    </nav>
</template>

<style lang="">    
</style>