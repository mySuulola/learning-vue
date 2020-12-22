<template>
  <div class="md:flex flex-1">
    <div
      class="md:w-1/2 bg-blue-500 flex flex-col justify-center py-4 px-6 dark:bg-gray-900 items-center"
    >
      <img src="../assets/people.svg" class="w-auto lg:w-2/3" alt="login" />
      <h1 class="text-xl text-white py-4 text-center pt-5">
        Join the company of achievers
      </h1>
    </div>
    <div
      class="md:w-1/2 bg-gray-100 flex flex-col justify-center px-10 py-4 dark:bg-gray-900 items-center"
    >
      <form class="w-full lg:w-2/3" @submit.prevent="processUserRegistration">
        <p class="text-sm text-red-400 text-center">{{ state.error }}</p>
        <p class="text-center text-xl uppercase text-blue-400">Sign Up</p>
        <CustomInput v-model="state.firstName" label="First Name" type="text" />
        <CustomInput v-model="state.lastName" label="Last Name" type="text" />
        <CustomInput
          v-model="state.phoneNumber"
          label="Phone Number"
          type="tel"
        />
        <CustomInput v-model="state.email" label="Email" type="text" />
        <!-- <CustomInput v-model="state.username" label="Username" type="text" /> -->
        <CustomInput
          v-model="state.password"
          label="Password"
          type="password"
        />
        <CustomInput
          v-model="state.confirmPassword"
          label="Confirm Password"
          type="password"
        />
        <button class="py-2 px-3 bg-blue-500 w-full rounded-md text-white mt-7">
          Sign Up
        </button>
      </form>
      <p class="text-center text-xs font-thin mt-3">Or sign up using</p>
      <div class="mt-4 flex justify-center">
        <img src="../assets/apple.svg" class="w-7" alt="apple signup" />
        <img src="../assets/google.svg" class="w-7 mx-6 " alt="google login" />
        <img src="../assets/facebook.svg" class="w-7" alt="facebook login" />
      </div>
      <p class="text-gray-500 mt-4">
        Already registered?
        <router-link to="/login" class="text-blue-500">Login here</router-link>
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
      // username: "",
      password: "",
      phoneNumber: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      email: "",
      isLoading: false,
      error: "",
    });
    const processUserRegistration = async () => {
      const { username, confirmPassword, password } = state;
      if (password !== confirmPassword) {
        state.error = "Password do not match";
        setTimeout(() => {
          state.error = "";
        }, 10000);
        return;
      }
      const user = {
        username,
      };
      await store.dispatch("User/setUser", user);
      router.push({ path: "home" });
    };
    return {
      state,
      processUserRegistration,
    };
  },
};
</script>
