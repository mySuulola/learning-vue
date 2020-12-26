<template>
  <div id="usernav" class="flex justify-between pt-4 px-3 border-b mb-5 pb-2">
    <div class="shadow flex rounded md:w-1/3 mr-5">
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
      <p
        @click="logoutUser"
        class="mx-3 px-2 py-1 rounded-xl bg-gray-200 cursor-pointer"
      >
        Logout
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from 'vuex';

export default {
  name: "UserNav",
  props: {
    darkMode: Boolean,
  },

  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);
    const route = useRouter();

    const logoutUser = async () => {
      await store.dispatch("User/setUser", null);
      route.push({ path: "login" });
    };

    return {
      user,
      logoutUser,
    };
  },
};
</script>
