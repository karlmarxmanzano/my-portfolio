<template>
  <div class="max-w-7xl mx-auto mt-32 mb-44">
    <div v-if="title" class="text-center text-primary uppercase tracking-widest font-bold text-3xl section-title mb-24">{{ title }}</div>

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
  // .section-title {
  //   &::after {
  //     display: block;
  //     margin: 0 auto;
  //     content: '';
  //     height: 2px;
  //     width: 35px;
  //     background-color: #003C8F;
  //   }
  // }
</style>
