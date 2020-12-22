<template>
  <div :class="{ dark: darkMode }" class="min-h-screen flex flex-col">
    <UserNav v-if="user === null" :darkMode="darkMode" />
    <router-view />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import UserNav from "./components/UserNav.vue";

export default {
  name: "App",
  components: {
    UserNav,
  },
  setup() {
    const store = useStore();
    const darkMode = computed(() => store.state.Mode.darkMode);
    const user = computed(() => store.state.User.user);

    return {
      darkMode,
      user,
    };
  },
};
</script>
