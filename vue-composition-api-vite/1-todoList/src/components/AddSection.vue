<template>
      <section>
        <input @keydown.enter="addList($event)" type="text" placeholder="elave etmek ucun yaz" class="w-full border-[2px] bg-gray-600 text-white p-2 border-gray-600 outline-none">
      </section>
</template>


<script>
export default {
    props:{
        addList:Function
    },
  
}
</script>