<template>
  <div class="btn" :class="greyBG ? 'grey-bg' : 'green-bg'">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    greyBG: {
      type: Boolean,
      default: true
    }
  }
};
</script>
