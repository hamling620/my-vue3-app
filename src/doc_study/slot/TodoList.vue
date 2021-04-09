<template>
  <ul>
    <li v-for="(item, index) in data" :key="item.id || index">
      <slot :item="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>