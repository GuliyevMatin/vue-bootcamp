<template>
  <div class="bg-red-600 text-white">{{ complted }}</div>
  <div class="bg-blue-600 text-white">{{unComplted}}</div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    chooseTodo: Array,
  },
  setup(props) {
      const complted= computed (()=>props.chooseTodo.filter(i=>i.completed).length)
      const unComplted= computed (()=>props.chooseTodo.filter(i=> !i.completed).length)

      return {complted, unComplted}
  },
};
</script>
