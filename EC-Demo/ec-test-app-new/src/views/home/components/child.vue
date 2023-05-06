<template>
  <div>text:{{ textS }}</div>
  <div>number:{{ numberText }}</div>
  <a-button @click="toEMit">111</a-button>
</template>
<script lang="ts" setup>
import { watch } from "vue";

const initdata = defineProps({
  textS: {
    type: String,
    default: "1",
  },
  numberText: {
    type: Number,
    default: null,
  },
});
const emit = defineEmits(["getEmitData", "setEmitValue"]);
const toEMit = () => {
  emit("getEmitData", "1");
  emit("setEmitValue", { name: "1" });
};
</script>