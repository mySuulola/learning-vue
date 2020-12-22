<template>
  <div :class="`cursor-pointer flex mt-5 px-3 py-2 ${active && 'bg-blue-500 rounded text-white'}`">
    <img src="../assets/dashboard.svg" class="w-5" :alt="name" />
    <h5 class="font-light text-sm ml-2">{{ name }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
    },
    name: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
