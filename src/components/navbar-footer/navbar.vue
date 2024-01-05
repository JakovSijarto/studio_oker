<template>
    <div class="absolute z-[9999] w-full flex justify-center items-center py-16 max-[590px]:pt-8">
        <div class="w-[90%] flex items-center justify-between font-bold uppercase">
            <img src="/logo.png" alt="" class="h-[120px] ">
            <ul class="flex gap-[2em] max-[590px]:hidden tracking-[0.1em]">
                <li><router-link to="/" class="">Home </router-link></li> 
                <li><router-link to="/projekti">Projekti</router-link></li>
                <li><router-link to="/cijena">Cijena</router-link></li>
                <li><router-link to="/kontakt">Kontakt</router-link></li>
            </ul>
            <div class="min-[591px]:hidden">
      <!-- Hamburger menu button -->
      <button @click="toggleMenu" class="block lg:hidden focus:outline-none">
        <img src="/hamb-menu.webp" alt="" class="w-12">
      </button>

      <!-- Hamburger menu content -->
      <transition 
      name="fade">
        <div v-show="isMenuOpen" class="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center">
          <div class="p-8 rounded-lg">
            <!-- Close button -->
            <button @click="closeMenu" class="absolute top-4 right-4 focus:outline-none">
              <img src="/hamb-close.svg" alt="" class="h-12">
            </button>

            <!-- Menu items -->
            <ul class="flex flex-col items-center gap-4">
              <li><router-link to="/" @click="closeMenu" class="flex items-center gap-[2em]">Home</router-link></li> 
              <li><router-link to="/projekti" @click="closeMenu" class="flex items-center gap-[2em]">Projekti</router-link></li>
              <li><router-link to="/cijena" @click="closeMenu" class="flex items-center gap-[2em]">Cijena</router-link></li>
              <li><router-link to="/kontakt" @click="closeMenu" class="flex items-center gap-[2em]">Kontakt</router-link></li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
        </div>
    </div>
</template>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight; // trigger reflow
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.opacity = 0;
      done();
    },
  },
};
</script>