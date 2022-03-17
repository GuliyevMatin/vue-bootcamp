<script setup>
// import Todos from "./components/Todos.vue";

import { defineAsyncComponent } from "@vue/runtime-core";

// import User from "./components/User.vue"
const Todos = defineAsyncComponent(() => import("./components/Todos.vue"));
// const User = defineAsyncComponent(() => import("./components/User.vue"));
</script>

<template>
  <suspense>
    <template #default>
      <Todos />
      <!-- <User /> -->
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
  <!-- <Todos /> -->
  <!-- <User/> -->
</template>
