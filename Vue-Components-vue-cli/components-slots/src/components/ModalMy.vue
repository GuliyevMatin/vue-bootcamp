<template>
  <div class="container">
    <div class="header">
      <slot name="title" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>
