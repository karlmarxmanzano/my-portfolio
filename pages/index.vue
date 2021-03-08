<template>
  <div>
    <div class="max-w-5xl mx-auto py-6 flex flex-col justify-center">
      <div class="flex flex-col items-start justify-center min-h-screen py-28">
        <div class="text-5xl mb-4">👋</div>

        <h1 class="text-7xl font-bold mb-8 dark:text-blue-100">I can make your ideas real in <span class="text-primary dark:text-accent">the web!</span></h1>

        <p class="text-base text-light w-6/12 text-break mb-8 dark:text-light-light">
          I'm a web developer based in Philippines Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic aut voluptate esse nobis amet eaque atque minus quo vel maxime sunt, soluta, iusto corporis.
        </p>

        <call-to-action :is-rounded="true" class=" self-start">Get in touch</call-to-action>

        <div class="w-10 h-1 absolute bottom-24 right-2/4">
          <svg class="animate-bounce" xmlns="http://www.w3.org/2000/svg" width="29" height="55" viewBox="0 0 29 55" fill="currentColor"><g transform="translate(-421 -510)"><g transform="translate(421 510)" fill="none" stroke="#000" stroke-width="3"><rect width="29" height="55" rx="14.5" stroke="none"/><rect x="1.5" y="1.5" width="26" height="52" rx="13" fill="none"/></g><circle cx="7.5" cy="7.5" r="7.5" transform="translate(428 516)"/></g></svg>
        </div>
      </div>
    </div>

    <app-section title="Featured Projects">
      <featured-project class="mb-20"></featured-project>
      <featured-project :reverse="true"></featured-project>
    </app-section>

    <app-section title="About Me">
      <div class="grid grid-cols-2 gap-x-16">
        <div>
          <img src="~/assets/images/img-placeholder.jpg" alt="" style="box-shadow: -10px -10px 0 #E3B341;">
        </div>

        <div class="flex flex-col justify-center dark:text-light-light">
          <p class="mb-6">Hi! I am Karl, a web developer based in the Philippines. Mabuhay!</p>

          <p class="mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, sed porro, culpa delectus fugiat eveniet harum totam obcaecati eligendi magnam, provident quod sunt repellendus aut consectetur aliquam dolorem ad dolores.</p>

          <p class="">Let's work together! Download <a href="#" class="text-primary rounded border border-dashed border-primary-light cursor-pointer py-1 px-2 ml-1 hover:bg-primary hover:text-white transition-all">resume</a></p>
        </div>
      </div>
    </app-section>

    <app-section title="Other Significant Projects">
      <div class="grid grid-cols-3 gap-3">
        <project-card></project-card>
        <project-card></project-card>
        <project-card></project-card>
        <project-card></project-card>
        <project-card></project-card>
        <project-card></project-card>
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
