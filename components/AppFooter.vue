<template>
  <div>
    <div>

    </div>

    <div class="bg-primary-dark dark:bg-night-dark">
      <div class="text-blue-100 px-6 sm:max-w-sm lg:max-w-5xl mx-auto">
        <div class="grid grid-flow-row md:grid-cols-3 gap-y-6 gap-x-8 py-10">
          <Logo />

          <div>
            <p class="mb-2 font-medium text-xl">Sitemap</p>

            <div class="flex flex-col gap-y-1">
              <a href="#" class="cursor-pointer">Home</a>
              <a href="#" class="cursor-pointer">About</a>
              <a href="#" class="cursor-pointer">Portfolio</a>
            </div>
          </div>

          <div>
            <p class="mb-2 font-medium text-xl">Let's work together!</p>

            <div class="flex gap-x-3">
              <span class="h-7 w-7" style="color: #181717;"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></span>
              <span class="h-7 w-7" style="color: #1877F2;"><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title>Facebook icon</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></span>
              <span class="h-7 w-7" style="color: #D14836;"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Gmail icon</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg></span>
            </div>
          </div>
        </div>

        <div class="pb-3">
          <p class="text-sm text-center text-gray-900 dark:text-light">Copyright © 2021 Karl Marx Manzano</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './Logo'

export default {
  components: {
    Logo,
  }
}
</script>

<style lang="css">
</style>
