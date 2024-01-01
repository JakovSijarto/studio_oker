<template>
  <div>
    <navbar_main/>
    <router-view>
    </router-view>
    <footer_main/>
  </div>
  </template>
  
  <script setup>
  import navbar_main from "./components/navbar-footer/navbar.vue"
  import footer_main from "./components/navbar-footer/footer.vue"
  </script>