<template>
  <label class="cursor-pointer flex items-center">
    <input
      v-bind="$attrs"
      class="hidden"
      type="checkbox"
      :checked="checked"
      @change="$emit('update:checked', $event.target.checked)"
    />
    <span class="switch"></span>
    <span
      @click="updateModeState(false)"
      v-if="checked"
      class="ml-2 mb-4 text-gray-900 font-bold bg-gray-100 px-3 rounded-xl"
      >Light</span
    >
    <span
      @click="updateModeState(true)"
      v-if="!checked"
      class="mb-4 text-white bg-black px-4 rounded-xl"
      >Dark</span
    >
  </label>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "Switch",
  setup() {
    const store = useStore();

    const updateModeState = async (mode) => {
      await store.dispatch('Mode/setMode', mode);
    };
    return {
      updateModeState,
    };
  },
  props: {
    checked: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
