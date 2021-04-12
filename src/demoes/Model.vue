<template>
  <div>
    <input type="text" :value="name" @input="$emit('update:name', $event.target.value)" />
    <input type="text" :value="age" @input="$emit('update:age', $event.target.value)"/>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    age: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style>

</style>