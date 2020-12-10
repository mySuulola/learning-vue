<template>
  <div class="flex justify-between px-4 pt-4 dark:bg-black">
    <router-link to="/">
      <img src="../assets/coy-logo.png" alt="logo" class="w-16 md:w-24" />
    </router-link>

    <div class="flex">
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
import Switch from "./Switch.vue";

export default {
  name: "UserNav",
  components: {
    Switch,
  },
  props: {
    darkMode: Boolean,
  },

  setup(props) {
    const state = reactive({
      darkMode: computed(() => props.darkMode),
    });
    return {
      state,
    };
  },
};
</script>
