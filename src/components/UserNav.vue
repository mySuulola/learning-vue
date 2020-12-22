<template>
  <div class="flex justify-between dark:bg-black">
    <router-link
      :class="`md:w-1/2 pl-4 pt-4 ${
        state.route === '/'
          ? 'bg-gray-50 dark:bg-black'
          : 'bg-blue-500 dark:bg-gray-900'
      }`"
      to="/"
    >
      <img src="../assets/coy-logo.png" alt="logo" class="w-16 md:w-24" />
    </router-link>

    <div
      :class="`flex md:w-1/2 pr-4 pt-4 justify-end ${
        state.route === '/'
          ? 'bg-gray-50 dark:bg-black'
          : 'bg-gray-100 dark:bg-gray-900'
      }`"
    >
      <router-link to="/">
        <p class="text-gray-500 mx-5 dark:text-white">Guide</p>
      </router-link>

      <router-link to="/">
        <p class="text-gray-500 dark:text-white mx-2 dark:font-bold">FAQs</p>
      </router-link>

      <Switch v-model:checked="state.darkMode" />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";
import Switch from "./Switch.vue";
import router from "../router";

export default {
  name: "UserNav",
  router,
  components: {
    Switch,
  },
  props: {
    darkMode: Boolean,
  },

  setup(props) {
    const route = useRouter();
    console.log(route.currentRoute);

    const state = reactive({
      darkMode: computed(() => props.darkMode),
      route: computed(() => route.currentRoute.value.path),
    });
    return {
      state,
    };
  },
};
</script>
