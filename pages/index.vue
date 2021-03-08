<template>
  <div>
    <div class="px-6 sm:px-0 sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto flex flex-col justify-center">
      <div class="relative flex flex-col justify-center min-h-screen">
        <div class="text-4xl lg:text-5xl mb-4">👋</div>

        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 dark:text-blue-100">I can make your ideas real in <br class="block sm:hidden"> <span class="text-primary dark:text-accent">the web!</span></h1>

        <p class="text-sm sm:text-base text-light md:w-6/12 text-break mb-8 dark:text-light-light">
          I'm a web developer based in Philippines Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <call-to-action :is-rounded="true" class=" self-start">Get in touch</call-to-action>


      </div>
    </div>

    <app-section class="space-y-10 md:space-y-16" title="Featured Projects">
      <featured-project></featured-project>
      <featured-project :reverse="true"></featured-project>
    </app-section>

    <app-section title="About Me">
      <div class="grid grid-flow-row md:grid-flow-col lg:grid-cols-2 gap-x-16">
        <div class="mb-6 mt-4 sm:mb-5 lg:mb-0">
          <img src="~/assets/images/img-placeholder.jpg" alt="" style="box-shadow: -10px -10px 0 #E3B341;">
        </div>

        <div class="flex flex-col space-y-4 justify-center text-sm text-night-dark dark:text-light-light">
          <p>Hi! I am Karl, a web developer based in the Philippines. Mabuhay!</p>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, sed porro, culpa delectus fugiat eveniet harum totam obcaecati eligendi magnam, provident quod sunt repellendus aut consectetur aliquam dolorem ad dolores.</p>

          <p>Let's work together! <br class="block sm:hidden">Download <a href="#" class="text-primary rounded border border-dashed border-primary-light cursor-pointer py-1 px-2 ml-1 leading-10 sm:leading-normal hover:bg-primary hover:text-white transition-all dark:border-light-light dark:text-light-light dark:hover:bg-light-light dark:hover:text-night-dark">resume</a></p>
        </div>
      </div>
    </app-section>

    <app-section title="Other Significant Projects">
      <!-- <div class="grid grid-flow-row md:grid-flow-col md:grid-cols-2 lg:grid-cols-3 gap-3"> -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div class="col-span-1" v-for="index in 6" :key="index">
          <project-card></project-card>
        </div>
      </div>
    </app-section>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppSection from '@/components/AppSection'
import CallToAction from '@/components/CallToAction'
import FeaturedProject from '@/components/FeaturedProject'

export default {
  components: {
    AppHeader,
    AppSection,
    CallToAction,
    FeaturedProject,
  }
}
</script>

<style lang="scss" scoped>
</style>
