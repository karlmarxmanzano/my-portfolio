<template>
  <button
    class="bg-accent px-6 py-3 rounded transform transition hover:-translate-y-0.5 focus:ring-accent focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-accent-dark"
    :class="{ 'rounded-btn': isRounded, 'outlined-btn': isOutlined }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CallToAction',
  props: {
    isRounded: {
      type: Boolean,
      default: false
    },
    isOutlined: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
  .rounded-btn {
    @apply rounded-full;
  }

  .outlined-btn {
    @apply transition duration-300 ease-in-out focus:outline-none bg-transparent text-accent-light border border-accent hover:bg-accent hover:text-black font-bold;
  }
</style>
