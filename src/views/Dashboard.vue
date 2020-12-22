<template>
  <div class="w-full flex">
    <div class="w-48 bg-gray-50 h-screen px-2 border-r">
      <img src="../assets/coy-logo.png" class="w-24 pt-2 pb-6" alt="logo" />
      <NavItem
        imageUrl="../assets/dashboard.svg"
        name="Dashboard"
        active="true"
      />
      <NavItem imageUrl="../assets/dashboard.svg" name="My Subjects" />
      <NavItem imageUrl="../assets/dashboard.svg" name="Classes" />
      <NavItem imageUrl="../assets/dashboard.svg" name="Messages" />
      <NavItem imageUrl="../assets/dashboard.svg" name="Setings" />
      <NavItem imageUrl="../assets/dashboard.svg" name="Profile" />
      <NavItem imageUrl="../assets/dashboard.svg" name="Star War" />
    </div>
    <div class="w-full bg-gray-50 min-h-screen">
      <div
        id="usernav"
        class="flex justify-between pt-4 px-3 border-b mb-5 pb-2"
      >
        <div class="shadow flex rounded w-1/3">
          <input
            type="text"
            class="bg-gray-50 border-0 placeholder-gray-500 w-full rounded p-3 hover:border:0 h-10 cursor-not-allowed"
            placeholder="Search..."
          />
          <button
            class="bg-gray-50 w-auto flex justify-end items-center text-gray-500 p-2 hover:text-gray-700 rounded cursor-not-allowed"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              view-box="0 0 24 24"
              class="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
        <div class="flex items-center">
          <img src="../assets/apple.svg" alt="noti" class="w-4" />
          <p @click="logoutUser" class="mx-3 px-2 py-1 rounded-xl bg-gray-200 cursor-pointer">
            Logout
          </p>
        </div>
      </div>
      <div id="id" class="flex justify-between px-5">
        <p class="text-red-400 text-light text-md">
          Welcome, {{ user.username }}
        </p>
        <p class="text-red-400 text-light text-sm">
          {{ new Date().toUTCString() }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import NavItem from "../components/NavItem.vue";
import router from "../router";

export default {
  components: {
    NavItem,
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);

    const logoutUser = async () => {
      console.log("logging out");
      await store.dispatch("User/setUser", null);
      router.push({ path: "login" });
    };

    return {
      user,
      logoutUser,
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: rgb(116, 115, 115);
}
</style>
