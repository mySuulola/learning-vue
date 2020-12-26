<template>
  <div>
    <div
      v-if="user === null"
      :class="{ dark: darkMode }"
      class="min-h-screen flex flex-col"
    >
      <GuestNav :darkMode="darkMode" />
      <router-view />
    </div>
    <div
      v-else
      :class="{ dark: darkMode }"
      class="w-full min-h-screen flex"
    >
      <SideNav />
      <div class="w-full bg-gray-50 min-h-screen">
        <UserNav />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import SideNav from "./components/SideNav.vue";
import GuestNav from "./components/GuestNav.vue";
import UserNav from "./components/UserNav.vue";

export default {
  name: "App",
  components: {
    SideNav,
    GuestNav,
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
