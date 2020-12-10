<template>
  <div class="md:flex flex-1">
    <div class="md:w-1/2 bg-blue-500 flex flex-col justify-center py-4">
      <h1 class="text-2xl text-white py-4 font-semibold">
        Connect with the right community
      </h1>
      <p class="text-sm text-gray-200 px-4 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        voluptas, ullam dicta beatae eligendi nemo fugit porro officiis,
        perspiciatis reprehenderit at dolor accusantium omnis rerum, dignissimos
        libero quisquam dolore eos?
      </p>
    </div>
    <div class="md:w-1/2 bg-gray-100 flex flex-col justify-center px-10 py-4">
      <form @submit.prevent="processUserLogin">
        <CustomInput v-model="state.username" label="username" type="text" />
        <CustomInput v-model="state.password" label="password" type="password" />
        <!-- <textarea id="newTwoot" rows="4" v-model="state.newTwootContent" /> -->

        <button
          class="py-2 px-3 bg-blue-500 w-full rounded-md text-white mt-7"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import CustomInput from "../components/CustomInput.vue";

export default {
  name: "Login",
  components: {
    CustomInput,
  },
  setup(props, { emit }) {
    const state = reactive({
      newTwootContent: "",
      username: computed({
        get: () => props.modelValue,
        set: (value) => {
          console.log(value, "------");
          return emit("update:modalValue", value);
        },
      }),
      password: "",
    });
    const processUserLogin = () => {
      console.log(state);
      console.log(state.username);
      console.log(state.password);
      console.log(state.newTwootContent);
    };
    return {
      state,
      processUserLogin,
    };
  },
};
</script>
