<template>
    <h1 class="pt-52 pl-24 pb-16 font-style_NotCourierSans font-bold text-[18px]">Projects:</h1>
    <div class="w-full flex justify-center items-center">
      <ul class="flex flex-wrap w-[90%] items-center justify-center font-style_NotCourierSans text-[22px]">
    <li v-for="project in projects" :key="project.id" class="mx-[15px] mb-[30px] max-[360px]:mx-2">
      <router-link :to="{ name: 'project-details', params: { id: project.id }}" class=" flex justify-start items-start flex-col  max-[985px]:w-[200px] max-[512px]:w-[100%]">
        <img :src="getImagePath(project.image)" alt="Project Image" class="w-[413px] max-h-[270px] h-[270px] object-cover max-[985px]:h-[700px] "/>
        <p class="pt-4">{{ project.name }}</p>
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
        { id: 1, name: 'Project 1', image: 'projects1.webp' },
        { id: 2, name: 'Project 2', image: 'projects2.webp' },
        { id: 3, name: 'Project 3', image: 'projects3.webp' },
        { id: 4, name: 'Project 4', image: 'projects4.webp' },
        { id: 5, name: 'Project 5', image: 'projects5.webp' },
        { id: 6, name: 'Project 6', image: 'projects6.webp' },
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
<style scoped>
.font-style_NotCourierSans{
  font-family: 'NotCourierSans', sans-serif;
}
</style>