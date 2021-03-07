<template>
  <div>
    <div class="max-w-7xl mx-auto py-6 flex flex-col justify-center">
      <div class="flex flex-col items-start justify-center min-h-screen py-28">
        <div class="text-5xl mb-4">👋</div>

        <h1 class="text-8xl font-bold mb-8">I can make your ideas real in <span class="text-primary">the web!</span></h1>

        <p class="text-base text-light w-6/12 text-break mb-8">
          I'm a web developer based in Philippines Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic aut voluptate esse nobis amet eaque atque minus quo vel maxime sunt, soluta, iusto corporis.
        </p>

        <call-to-action :is-rounded="true" class=" self-start">Get in touch</call-to-action>

        <div class="w-10 h-1 absolute bottom-24 right-2/4">
          <svg class="animate-bounce" xmlns="http://www.w3.org/2000/svg" width="29" height="55" viewBox="0 0 29 55"><g transform="translate(-421 -510)"><g transform="translate(421 510)" fill="none" stroke="#000" stroke-width="3"><rect width="29" height="55" rx="14.5" stroke="none"/><rect x="1.5" y="1.5" width="26" height="52" rx="13" fill="none"/></g><circle cx="7.5" cy="7.5" r="7.5" transform="translate(428 516)"/></g></svg>
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

        <div class="flex flex-col justify-center">
          <p class="mb-6">Hi! I am Karl, a web developer based in the Philippines. Mabuhay!</p>

          <p class="mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, sed porro, culpa delectus fugiat eveniet harum totam obcaecati eligendi magnam, provident quod sunt repellendus aut consectetur aliquam dolorem ad dolores.</p>

          <p class="">Let's work together! Download <a href="#" class="text-primary rounded border border-dashed border-primary-light cursor-pointer py-1 px-2 ml-1 hover:bg-primary hover:text-white transition-all">resume</a></p>

          <div class="mt-16">
            <nav>
              <ul>
                <li>MedSys</li>
              </ul>
            </nav>

            <div>
              <p class="">Software Developer <span class="text-primary">@MedSys (Kaiser-dela Cruz Consulting Inc.)</span></p>
              <p class="text-sm mb-2">June 1, 2018 - July 1, 2020</p>

              <div class="text-sm flex flex-col gap-y-1">
                <div class="flex">
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
                  Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery
                </div>
                <div class="flex">
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
                  Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness
                </div>
                <div class="flex">
                  <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
                  Clients included NKTI, UCMed, Sacred Heart, Lorma Medical Center, and ACE Dumaguete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-section>

    <app-section title="Other Significant Projects">
      <div class="grid grid-cols-3 gap-4">
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
