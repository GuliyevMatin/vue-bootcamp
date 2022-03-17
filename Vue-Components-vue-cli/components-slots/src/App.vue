<template>
  <div>
    <ModalMy>
      <template #title>
        <h3>Slots Basliq</h3>
      </template>
      <template #content>
        <h3>
          Slots Content,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ex possimus impedit beatae dolores? Autem et quia ratione
          illum nulla quidem, repellat consectetur consequuntur, saepe aliquam, deserunt minus eaque blanditiis?
        </h3>
      </template>
      <template #footer>
        <h5>Slost footer</h5>
      </template>
    </ModalMy>
  </div>
</template>

<script>
import ModalMy from "@/components/ModalMy";
export default {
  components: {
    ModalMy,
  },
};
</script>

<style></style>
