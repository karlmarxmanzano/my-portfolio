<template>
  <div>
    <div class="bg-primary w-full absolute top-0 dark:bg-night-dark z-10">
      <header class="px-6 sm:px-0 sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <div class="flex items-center space-x-2 justify-between h-20 sm:h-24">
          <div class="flex space-x-2">
            <Logo />

            <button
              class="text-gray-500 focus:outline-none md:hidden"
            >
              <svg class="h-6 w-6 text-light-light" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </button>
          </div>

          <nav class="hidden md:flex md:items-center md:space-x-8">
            <nav-item>Home</nav-item>
            <nav-item>About</nav-item>
            <nav-item>Projects</nav-item>
            <call-to-action :is-outlined="true">Hire me</call-to-action>
            <DarkSwitch />
          </nav>

          <div class="md:hidden">
            <DarkSwitch />
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import Logo from './Logo'
import NavItem from './NavItem'
import CallToAction from './CallToAction'
import DarkSwitch from './DarkSwitch'

export default {
  components: {
    Logo,
    NavItem,
    CallToAction,
    DarkSwitch,
  }
}
</script>

    ToggleSwitch
<style lang="css">
</style>
