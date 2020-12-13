<template>
  <div>
    <div v-if="state.message">
      <small>{{ state.message }}</small>
    </div>
    <h1>Name is {{ state.name }}</h1>
    <h5>{{ state.age }} years old</h5>
    <h5 class="text-red">Username is {{ state.username }}</h5>
    <h5>Result is {{ state.name }}</h5>
    <div>
      <button @click="increaseAge">Increase Age</button>
      <button @click="decreaseAge">Decrease Age</button>
    </div>
    <!-- <input type="text" v-model="state.name" /> -->
    <div>
      <label for="">Change Name</label>
      <input type="text" v-model="state.name" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { reactive, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Home",
  setup(props, { emit }) {
    const store = useStore();
    const user = computed(() => store.state.User.user);

    console.log(user, "userrrrrrr");

    const state = reactive({
      name: "Guest",
      age: 20,
      message: "",
      username: computed(() => `${state.name.toLowerCase()}_${state.age}`),
    });

    const message = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });
    const increaseAge = () => {
      state.age += 1;
    };
    const decreaseAge = () => {
      state.age -= 1;
    };
    return {
      state,
      increaseAge,
      decreaseAge,
      message,
    };
  },
};
</script>
