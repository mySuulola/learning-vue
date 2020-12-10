<template>
    <div>
        <label :for="state.label">{{ state.label }}</label>
        <input type="text" v-model="message" :id="state.label">
    </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {

  name: "TextInput",
  setup(props) {
    const state = reactive({
      label: computed(() => props.label),
      value: computed(() => props.value),
    });
    console.log("*****", props);
    return {
      state,
    };
  },
};
</script>
