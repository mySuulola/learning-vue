<template>
  <div class="md:flex flex-1">
    <div
      class="md:w-1/2 bg-blue-500 flex flex-col justify-center py-4 px-6 dark:bg-gray-900"
    >
      <img src="../assets/auth.svg" class="w-auto" alt="login" />
      <h1 class="text-2xl text-white py-4 font-semibold">
        Connect with the right community
      </h1>
      <p class="text-sm text-gray-200 font-medium lg:w-3/4 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        voluptas, ullam dicta beatae eligendi nemo fugit porro officiis,
        perspiciatis reprehenderit at dolor accusantium omnis rerum, dignissimos
        libero quisquam dolore eos?
      </p>
    </div>
    <div
      class="md:w-1/2 bg-gray-100 flex flex-col justify-center px-10 py-4 dark:bg-gray-900 items-center"
    >
      <form class="w-full lg:w-2/3" @submit.prevent="processUserLogin">
        <CustomInput v-model="state.username" label="Username" type="text" />
        <CustomInput
          v-model="state.password"
          label="Password"
          type="password"
        />
        <button class="py-2 px-3 bg-blue-500 w-full rounded-md text-white mt-7">
          Login
        </button>
      </form>
      <p class="text-gray-500 mt-4">
        Not registered?
        <router-link to="/register" class="text-blue-500"
          >Sign up here</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import CustomInput from "../components/CustomInput.vue";
import router from "../router";

export default {
  name: "Login",
  components: {
    CustomInput,
  },
  router,
  setup() {
    const store = useStore();

    const state = reactive({
      username: "",
      password: "",
      isLoading: false,
    });
    const processUserLogin = async () => {
      const { username } = state;
      const user = {
        username,
      };
      await store.dispatch("User/setUser", user);
      router.push({ path: "home" });
    };
    return {
      state,
      processUserLogin,
    };
  },
};
</script>
