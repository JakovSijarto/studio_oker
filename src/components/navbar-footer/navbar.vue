<template>
    <div class="absolute z-[9999] w-full flex justify-center items-center py-16">
        <div class="w-[90%] flex items-center justify-between">
            <div class="">LOGO</div>
            <ul class="flex gap-[2em] max-[360px]:hidden">
                <li><router-link to="/">Home</router-link></li> 
                <li><router-link to="/projekti">Projekti</router-link></li>
                <li><router-link to="/cijena">Cijena</router-link></li>
                <li><router-link to="/kontakt">Kontakt</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>