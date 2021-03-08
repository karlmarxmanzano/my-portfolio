<template>
  <div class="bg-primary w-full absolute top-0 dark:bg-night-dark">
    <header class="max-w-5xl mx-auto">
      <div class="flex items-center justify-between h-24">
        <Logo />

        <nav class="flex items-center space-x-8">
          <nav-item>Home</nav-item>
          <nav-item>About</nav-item>
          <nav-item>Projects</nav-item>
          <call-to-action :is-outlined="true">Hire me</call-to-action>
          <DarkSwitch />
        </nav>
      </div>
    </header>
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
