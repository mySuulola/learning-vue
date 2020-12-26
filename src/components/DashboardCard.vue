<template>
  <div :class="`md:h-56 w-full md:w-5/12  rounded ${background} mx-6 mt-5 px-3 py-5`">
    <p class="font-bold text-md">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
    },
    title: {
      type: String,
      default: "Unspecified",
    },
  },
};
</script>
