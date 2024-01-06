<template>
    <h1 class="pt-52 pl-24 pb-16 font-bold text-[18px] import_font text-size max-[520px]:pl-4">PROJECTS:</h1>
    <div class="w-full flex justify-center items-center">
      <ul class="flex flex-wrap w-[90%] items-start justify-center text-[22px] max-[360px]:w-auto">
    <li v-for="project in projects" :key="project.id" class="mx-[15px] mb-[30px] max-[360px]:mx-2 hovered_card max-[360px]:w-[40%]">
      <router-link :to="{ name: 'project-details', params: { id: project.id }}" class=" flex justify-start items-start flex-col  max-[985px]:w-[200px] max-[512px]:w-[100%] max-[360px]:w-[100%]">
        <img :src="getImagePath(project.image)" alt="Project Image" class="w-[413px] max-h-[270px] h-[270px] object-cover max-[985px]:h-[700px] max-[360px]:h-[200px] "/>
        <p class="pt-4 text-hover text-[22px] import_font text-size_pr" >{{ project.name }}</p>
      </router-link>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, name: '63 sqm APARTMENT', image: 'projects1.webp' },
        { id: 2, name: '140 sq.m. VILLA', image: 'projects2.webp' },
        { id: 3, name: '75 sqm APARTMENT', image: 'projects3.webp' },
        { id: 4, name: '82 sqm APARTMENT', image: 'projects4.webp' },
        { id: 5, name: '45 sqm APARTMENT', image: 'projects5.webp' },
        { id: 6, name: '30 sqm APARTMENT', image: 'projects6.webp' },
      ],
    };
  },
  methods: {
    getImagePath(image) {
      return `./${image}`;
    },
  },
};
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/notcouriersans');
.import_font{
  font-family: 'NotCourierSans', sans-serif;
}
.hovered_card:hover .text-hover{
  color: #c5a47e;
  font-weight: 100 !important;
}
@media (min-width: 160px) and (max-width: 1023px){
  .text-size{
    font-size: calc(.255vw + 1rem)!important;
  }
  .text-size_pr{
    font-size: calc((22vw - 20vw)/ 10 + 1.25rem)!important;
  }
}
</style>