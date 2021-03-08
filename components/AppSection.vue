<template>
  <div class="max-w-5xl mx-auto py-24 relative">
    <p v-if="title" class="section-title text-center text-primary uppercase tracking-widest font-bold text-3xl mb-20 dark:text-accent">{{ title }}</p>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    title: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
