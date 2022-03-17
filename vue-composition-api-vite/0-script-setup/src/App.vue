<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" />
  <button @click="inc">{{ counter }}</button>
  <OddOrEven :counter="counter" @odd-Event="alertMsg" />

  <hr />
  <hr />
  <input type="text" v-model="personal.lobby.name" />
  <input type="text" v-model="personal.lobby.lname" />

  {{personal}}
</template>
<script setup>
import { reactive } from "vue";
import OddOrEven from "./components/OddOrEven.vue";
import Utils from "./composables/Utils";
const { title, counter, inc, alertMsg } = Utils();

const personal = reactive({
  lobby: {
    name: "",
    lname: "",
  },
});
</script>
