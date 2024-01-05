<template>
    <div class="relative z-[9999] bg-white flex justify-center items-center w-full flex-col">
        <div class="w-[90%] py-16">
      <svg height="3" width="100%" class="">
        <line x1="0" y1="0" x2="100%" y2="0" style="stroke:rgb(0, 0, 0);stroke-width:2" />
      </svg>
      <svg height="3" width="100%" class="">
        <line x1="0" y1="0" x2="100%" y2="0" style="stroke:rgb(0, 0, 0);stroke-width:2" />
      </svg>
    </div>
    <div class="w-[90%] flex justify-between items-center pb-12 max-[560px]:flex-col max-[560px]:gap-[5em]">
      <img src="/logo.png" alt="" class="h-[120px] ">
      <ul class="text-left text-[15px] max-[560px]:hidden">
            <li class="pb-12 font-bold text-[18.5px]">PAGES</li>
            <li><router-link to="/" class="">home</router-link></li>
            <li class="py-4"><router-link to="/projekti">projekti</router-link></li>
            <li><router-link to="/cijena">cijena</router-link></li>
            <li class="py-4"><router-link to="/kontakt">kontakt</router-link></li>
        </ul>
        <ul class="max-[560px]:hidden">
            <li><a href="">PHONE: +381643904535</a></li>
            <li><a href="mailto:jelen.despot@gmail.com">EMAIL: jelen.despot@gmail.com</a></li>
            <li><a href="https://www.instagram.com/studio_oker/">INSTAGRAM ▸ ▹</a></li>
        </ul>
      <div class="min-[561px]:hidden flex w-full justify-between items-center px-12 max-[400px]:flex-col max-[400px]:gap-[5em]">
        <ul class="text-left text-[15px] max-[400px]:text-center">
            <li class="pb-12 font-bold text-[18.5px]">PAGES</li>
            <li><router-link to="/" class="">home</router-link></li>
            <li class="py-4"><router-link to="/projekti">projekti</router-link></li>
            <li><router-link to="/cijena">cijena</router-link></li>
            <li class="py-4"><router-link to="/kontakt">kontakt</router-link></li>
        </ul>
        <ul class="">
            <li><a href="tel:+381643904535">PHONE: +381643904535</a></li>
            <li><a href="mailto:jelen.despot@gmail.com">EMAIL: studio@gmail.com</a></li>
            <li><a href="https://www.instagram.com/studio_oker/">INSTAGRAM ▸ ▹</a></li>
        </ul>
      </div>
        
    </div>
    <div class="w-full bg-[#1a1a1a] flex items-center ">
        <div class="flex justify-center  items-center w-full text-white py-[5px]  max-[460px]:flex  max-[460px]:flex-col  max-[460px]:justify-center">
            Copyright ©2024 Designed by <a href="https://agencycroatia.com/#/" class="pl-[5px] font-bold">NewAge</a>
        </div>
    </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>