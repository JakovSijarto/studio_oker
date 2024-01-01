<template>
  <div class="h-[100vh] relative z-[999]">
      <swiper :pagination="pagination" :loop="true" :modules="modules" :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
     :effect="'fade'" class="mySwiper">
     <swiper-slide><img src="/hero-img1.webp" alt=""></swiper-slide>
    <swiper-slide><img src="/hero-img2.webp" alt=""></swiper-slide>
    <swiper-slide><img src="/hero-img3.webp" alt=""></swiper-slide>
    <swiper-slide><img src="/hero-img4.webp" alt=""></swiper-slide>
  </swiper>
  </div>
  <div class="relative z-[1000] bg-white flex flex-col items-center ">
    <div class="w-[90%] py-12">
      <svg height="3" width="100%" class="">
        <line x2="100%" style="stroke:rgb(0, 0, 0);stroke-width:2" />
      </svg>
      <svg height="3" width="100%" class="">
        <line x2="100%" style="stroke:rgb(0, 0, 0);stroke-width:2" />
      </svg>
    </div>
    <div class="w-[90%] flex items-center justify-between">
      <p>Projects</p>
      <p>check out other projects</p>
    </div>
    <div class="w-[90%] flex gap-[5em] pt-[50px] justify-between items-center max-[740px]:flex-col">
      <div class="w-full bg-white cursor-pointer">
        <img src="/projects1.webp" alt="" class="h-[900px] w-[100%] object-cover hover-effect">
        <div class="">Project 1</div>
      </div>
      <div class="w-full bg-white cursor-pointer">
        <img src="/projects2.webp" alt="" class="h-[900px] w-[100%] object-cover hover-effect">
        <div class="text-left">Project 2</div>
      </div>
    </div>
    <div class="w-[90%] py-32 max-[680px]:py-12">
      <svg height="3" width="100%" class="">
        <line x1="0" y1="0" x2="100%" y2="0" style="stroke:rgb(0, 0, 0);stroke-width:2" />
      </svg>
      <svg height="3" width="100%" class="">
        <line x1="0" y1="0" x2="100%" y2="0" style="stroke:rgb(0, 0, 0);stroke-width:2" />
      </svg>
    </div>
    <div class="w-[90%] flex gap-[2em] max-[680px]:flex-col">
      <img src="/aboutus-photo.webp" alt="" class="w-[50%] h-[1000px] object-cover max-[680px]:w-[100%] max-[680px]:h-[600px]">
      <div class="mx-8 max-[680px]:hidden">
        <div class="w-[90%] h-[1000px] flex">
      <svg height="100%" width="4" class="">
        <line y1="100%" style="stroke:rgb(0, 0, 0);stroke-width:2" />
      </svg>
      <svg height="100%" width="4" class="">
        <line y1="100%" style="stroke:rgb(0, 0, 0);stroke-width:2" />
      </svg>
    </div>
      </div>
      <div class="w-full ">
        <p class="pb-[10px]">SHEVRINA MARI | DESIGN STUDIO</p>
        <p class="border-b w-full border-black pb-[30px]">about us</p>
        <div class="w-full border-b border-black pb-[50px]">
          <ul class="pt-[50px]">
            <li>We are studio creating minimalistic spaces</li>
            <li class="py-4">Our main goal is to make functional space designed according to specific requirements of our clients using individual approach.</li>
            <li>We choose quality not quantity</li>
            <li class="py-4">Architectural view of creating spaces: we work with volumes, from general to particular.</li>
            <li>Less is more</li>
          </ul>
        </div>
        <div class="w-full pt-[50px] flex flex-col gap-[2em]">
          Što klijenti kažu?
          <span class="border w-full h-[300px] max-h-[300px]"></span>
        </div>
      </div>
    </div>
    <div class="w-full mt-16 bg-black relative">
      <img src="/contact-home.webp" alt="" class="h-[770px] w-full object-cover opacity-[0.3]">
      <form class="absolute inset-0 flex items-center justify-center flex-col text-white">
        <p class="text-[30px] pb-2 mx-4 text-center">YOU CAN ASK ANY QUESTIONS</p>
        <input type="text" class="border-b text-[13px] leading-[0.15em] py-[15px] bg-[transparent] w-[800px] max-[900px]:w-[90%] pr-4" placeholder="Name*">
        <input type="tel" class="bg-[transparent] border-b text-[13px] leading-[0.15em] py-[15px] w-[800px] max-[900px]:w-[90%] pr-4" placeholder="Mail*">
        <input type="mail" class="bg-[transparent] border-b text-[13px] leading-[0.15em] py-[15px] w-[800px] max-[900px]:w-[90%] pr-4" placeholder="Telephone*">
        <textarea name="" id="" placeholder="Your Question*" class="bg-[transparent] border-b text-[13px] leading-[0.15em] py-[15px] pt-[30px] w-[800px]  pr-4 max-h-[150px] min-h-[150px] max-[900px]:w-[90%]"></textarea>
        <button class="rounded-[27px] border leading-[1px] py-6 px-16 mt-12 hover-effect-button">Ask</button>
      </form>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-fade';

  import { Pagination, EffectFade, Autoplay } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        pagination: {
          clickable: true,
        },
        modules: [Pagination, EffectFade, Autoplay],
      };
    },
  };
</script>

<style scoped>
.hover-effect-button:hover{
  background: white;
  color:black;
  border:1px solid black;
  transition: all 0.3s ease-in;
}
.hover-effect-button{
  transition: all 0.15s ease-out;
}

input,textarea {
  outline: none;
}
.hover-effect:hover{
  opacity: 0.5;
  transition: all 0.3s ease-in;
}
.hover-effect{
  transition: all 0.3s ease-in;
}
.mySwiper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100; /* Adjust as needed */
  background-color: white; /* Adjust background color if necessary */
}

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

.swiper-pagination-bullet-active {
  background-color: black !important; /* Active bullet color */
}
</style>