<template>
  <div>
    <button :style="{color: theme === 'light' ? '#000' : '#fff' , background: theme === 'light' ? '#fff' : '#000' }" @click="handleChange">
      make the change
    </button>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup () {
    const { theme, handleChange } = inject('theme')
    return {
      theme,
      handleChange
    }
  }
}
</script>

<style>

</style>