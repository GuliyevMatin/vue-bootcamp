<template>
  <div class="summary mt-5 flex justify-end items-end">
    <div class="text-right mr-2">
      <div class="text-gray-500">Ara Toplam :</div>
      <div class="text-gray-400">KDV Toplam :</div>
      <div class="text-gray-300">Genel Toplam :</div>
    </div>
    <div class="text-right">
      <div class="text-gray-500">{{subtotal }}</div>
      <div class="text-gray-400">18,00</div>
      <div class="text-gray-300">118,00</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({ items: Array });
const subtotal = computed(() => props.items.reduce((t, i) => t + i.totalPrice, 0));
</script>
