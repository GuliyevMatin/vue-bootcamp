<template>
  <div class="flex justify-between items-center even:bg-gray-500 px-2 py-2">
    <label for="`todo_$(todo.id)_completed`">
      <input type="checkbox" id="`todo_$(todo.id)_completed`" />
      <span class="mx-2">{{todo.title}}</span>
    </label>
    <button @click="deleteItem" class="bg-indigo-400 px-5 py-2 rounded-md">Sil</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  setup(props,context) {
      const deleteItem = () =>{
          context.emit('delete-Item',props.todo)
      }
      return {deleteItem}
  }
};
</script>
