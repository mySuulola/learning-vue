<template>
  <div class="w-full flex flex-col items-start mb-5">
    <label class="text-gray-500 px-1 mb-1 capitalize text-sm" v-if="label">{{
      label
    }}</label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="label"
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full rounded h-8 px-2 border-2"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>
