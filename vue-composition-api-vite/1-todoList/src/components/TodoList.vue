<template>
  <section class="mt-4">
    <TodoListItem v-for="todoItem in todoList" :key="todoItem.id" :todo="todoItem" @delete-Item="$emit('delete-Item',$event)" />
    <small>{{ itemLength }} adet todo var</small>
    <Summary :chooseTodo="todoList" />
  </section>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
import Summary from "./Summary.vue";
import { computed } from "vue";
export default {
  components: {
    TodoListItem,
    Summary,
  },
  props: {
    todoList: Array,
  },
  setup(props) {
    const itemLength = computed(() => props.todoList.length);
    return { itemLength };
  },
};
</script>
