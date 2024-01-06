<template>
    <div v-if="showButton" @click="scrollToTop" class="scroll-to-top-btn border  rounded-[50%] z-[99999] p-2">
      <img src="/arrow-up.svg" alt="" class="w-[32px] h-[32px] ">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showButton: false,
      };
    },
    methods: {
        scrollToTop() {
  const currentPosition = window.scrollY;
  const step = currentPosition / 20;
  let interval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, window.scrollY - step);
    } else {
      clearInterval(interval);
    }
  }, 17);
},
      handleScroll() {
        this.showButton = window.scrollY > 100; // Adjust the scroll threshold as needed
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  .scroll-to-top-btn {
    position: fixed;
    bottom: 65px;
    right: 10px;
    cursor: pointer;
    background-color: transparent;
    padding: 10px;
    display: flex;
    align-items: center;
    background:white;
  }
  </style>
  