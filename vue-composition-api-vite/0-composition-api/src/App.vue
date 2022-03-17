<template>
  <div>
    <h3>{{ title }}</h3>
    <input type="text" v-model="title" />
    <p>{{ titleLengthMessage }}</p>
    <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, at!</p>
    <button @click="toggleIt">Toggle</button>
    <button @click="counter++">{{ counter }} {{ oddOrEven }}</button>
    <hr />

    <input type="text" v-model="seacrhText" />
    <p v-if="isTyping">Yaziyor.....</p>
  </div>
</template>

<script>
import Counter from './composibles/Counter.js'
import Toggle from './composibles/Toggle.js'
import Seacrh from './composibles/Seacrh.js'
import Title from './composibles/Title.js'

export default {
  setup() {

    const {counter,oddOrEven} = Counter()
    const {title,titleLengthMessage} = Title()
    const {show,toggleIt} = Toggle()
    const {seacrhText,isTyping} = Seacrh()
    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
      oddOrEven,
      counter,
      seacrhText,
      isTyping,
    };
  },
};
</script>
