<template>
  <router-link
    :class="`cursor-pointer flex mt-5 px-3 py-2 ${
      state.route.includes(route) && 'bg-indigo-700 rounded text-white py-3'
    }`"
    :to="route"
  >
    <img v-if="state.route.includes(route)" src="../assets/dashboard_white.svg" class="w-5" :alt="name" />
    <img v-if="!state.route.includes(route)" src="../assets/dashboard.svg" class="w-5" :alt="name" />
    <h5 :class="`font-light text-sm ml-2 ${
      state.route.includes(route) && 'font-medium'
    }`">{{ name }}</h5>
  </router-link>
</template>

<script>
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";

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
    route: {
      type: String,
    },
  },
  setup() {
    const route = useRouter();
    const state = reactive({
      route: computed(() => route.currentRoute.value.path),
    });
    return {
      state,
    };
  },
};
</script>
