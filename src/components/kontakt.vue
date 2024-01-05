<template>
<div class="pt-52">
    <div class="w-full bg-black relative">
      <img src="/kontakt-photo.webp" alt="" class="h-[770px] w-full object-cover opacity-[0.3]">
        <div class="absolute inset-0 flex items-center w-full justify-center text-white ">
            <div class="w-[90%] flex justify-between items-center max-[900px]:flex-col">
        <ul class="max-[900px]:hidden text-[14px]">
        <li class="text-[16px] font-bold leading-[1.6] tracking-[0.2em]">TEL.NUMBER:</li>
        <li class="pt-2 pb-4"><a href="tel:+381643904535">+381643904535</a></li>
        <li class="text-[16px] font-bold leading-[1.6] tracking-[0.2em] pb-2">EMAIL:</li>
        <li class="pb-4"><a href="mailto:jelen.despot@gmail.com">jelen.despot@gmail.com</a></li>
        <li class="flex gap-[0.5em]"><img src="/facebook.svg" alt="" class="w-8"><a href="https://www.instagram.com/studio_oker/"><img src="/instagram.svg" alt="" class="w-8"></a></li>
      </ul>
        <form class="flex flex-col items-center max-[900px]:w-full" ref="form" @submit="sendEmail">
        <p class="text-[20px] pb-2 mx-4 tracking-[0.2em]">CONTACT ME:</p>
        <input type="text" required v-model="ime" name="ime" class="border-b leading-[0.15em] py-[15px] bg-[transparent] w-[600px] max-[900px]:w-[90%] pr-4" placeholder="Name *">
        <input type="email" required v-model="email" name="email" class="bg-[transparent] border-b leading-[0.15em] py-[15px] w-[600px] max-[900px]:w-[90%] pr-4" placeholder="Mail *">
        <input type="phone" required v-model="telefon" name="telefon" class="bg-[transparent] border-b leading-[0.15em] py-[15px] w-[600px] max-[900px]:w-[90%] pr-4" placeholder="Telephone *">
        <textarea id="" v-model="poruka" name="poruka" placeholder="Your Question" class="bg-[transparent] border-b leading-[0.15em] py-[15px] pt-[30px] w-[600px]  pr-4 max-h-[150px] min-h-[150px] max-[900px]:w-[90%]"></textarea>
        <button type="submit" class="rounded-[27px] border leading-[1px] py-6 px-16 mt-12 hover-effect-button w-[200px]">Ask</button>
      </form>
      <ul class="min-[901px]:hidden pt-16 text-center text-[14px]">
        <li class="text-[16px] font-bold leading-[1.6] tracking-[0.2em]">TEL.NUMBER:</li>
        <li class="pt-2 pb-4"><a href="tel:+381643904535">+381643904535</a></li>
        <li class="text-[16px] font-bold leading-[1.6] tracking-[0.2em] pb-2">EMAIL:</li>
        <li class="pb-4"><a href="mailto:jelen.despot@gmail.com">jelen.despot@gmail.com</a></li>
        <li class="flex gap-[0.5em] justify-center"><img src="/facebook.svg" alt="" class="w-8"><a href="https://www.instagram.com/studio_oker/"><img src="/instagram.svg" alt="" class="w-8"></a></li>
      </ul>
      </div>
      </div>
      
    </div>
</div>
    
</template>
<script>
import emailjs from 'emailjs-com';

export default {
data(){
return{
 ime:"",
 email:"",
 telefon:"",
 poruka:""
}
},
methods: {
sendEmail() {
 emailjs.sendForm('service_26j234o', 'template_6uybn4o', this.$refs.form, 'tGrrFjuKCc7u6wh3f')
   .then((result) => {
        console.log('SUCCESS!', result.text);
   }, (error) => {
       console.log('FAILED...', error.text);
   });
   
},

},

}
</script>