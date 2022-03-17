<template>
  <h3>{{ counter }}</h3>
</template>
<script setup>
import { computed, watch } from "vue";
const props = defineProps({ counter: Number });
const emits = defineEmits(["odd-Event"]);
const result = computed(() => (props.counter % 2 === 0 ? "cut" : "tek"));
watch(result, (result) => {
  if (result === "tek") emits("odd-Event", true);
});
</script>
