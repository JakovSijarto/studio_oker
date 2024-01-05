<template>
    <div class="pt-52 w-full">
      <h2 class="pl-24 pb-16 max-[340px]:pl-0 max-[340px]:text-center font-bold text-[18px]">Project Details</h2>
      <div class="w-full flex justify-center ">
        <div class="w-[90%] flex justify-between items-center gap-[3em] max-[1090px]:flex-col">
        <img :src="imagePath" alt="Project Image" class="max-h-[427px] w-[640px] object-cover max-[1090px]:w-full"/>
        <div class="w-full flex justify-start flex-col">
          <p class="font-bold text-[18px]">{{ project.name }}</p>
          <p class="py-16 max-[400px]:py-8 text-[14px]">{{ project.description }}</p>
          <router-link to="/projekti" class="border w-[160px] h-[50px] flex justify-center items-center text-[18px] font-bold">Go back</router-link>
        </div>
        
      </div>
    </div>
      
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        projects: [
        { id: 1, name: 'Project 1', image: 'projects1.webp', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Adipiscing diam donec adipiscing tristique risus nec. Non sodales neque sodales ut etiam sit amet nisl purus. In egestas erat imperdiet sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Purus in mollis nunc sed id semper risus in. " },
        { id: 2, name: 'Project 2', image: 'projects2.webp', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Adipiscing diam donec adipiscing tristique risus nec. Non sodales neque sodales ut etiam sit amet nisl purus. In egestas erat imperdiet sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Purus in mollis nunc sed id semper risus in. " },
        { id: 3, name: 'Project 3', image: 'projects3.webp', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Adipiscing diam donec adipiscing tristique risus nec. Non sodales neque sodales ut etiam sit amet nisl purus. In egestas erat imperdiet sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Purus in mollis nunc sed id semper risus in. " },
        { id: 4, name: 'Project 4', image: 'projects4.webp', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Adipiscing diam donec adipiscing tristique risus nec. Non sodales neque sodales ut etiam sit amet nisl purus. In egestas erat imperdiet sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Purus in mollis nunc sed id semper risus in. " },
        { id: 5, name: 'Project 5', image: 'projects5.webp', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Adipiscing diam donec adipiscing tristique risus nec. Non sodales neque sodales ut etiam sit amet nisl purus. In egestas erat imperdiet sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Purus in mollis nunc sed id semper risus in. " },
        { id: 6, name: 'Project 6', image: 'projects6.webp', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Adipiscing diam donec adipiscing tristique risus nec. Non sodales neque sodales ut etiam sit amet nisl purus. In egestas erat imperdiet sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Purus in mollis nunc sed id semper risus in. " },
      ],
        project: {},
      };
    },
    created() {
      this.project = this.projects.find((p) => p.id === parseInt(this.id));
    },
    computed: {
      imagePath() {
        // Assuming the images are in the same directory as your component
        return `/studio_oker/${this.project.image}`
      },
    },
  };
  </script>
  