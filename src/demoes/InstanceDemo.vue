<template>
  <div>获取组件实例</div>
</template>

<script>
import { reactive, getCurrentInstance, onMounted } from 'vue'
export default {
  setup () {
    // CompositionAPI无法获取this
    // OptionsAPI中可以获取this实例

    const state = reactive({
      x: 1,
      y: 2
    })

    console.log('compositionApi', this)
    console.log('instance', getCurrentInstance())

    onMounted(() => {
      console.log('instance in mounted', getCurrentInstance())
    })

    return {
      state
    }

  },
  mounted () {
    console.log('optionApi', this)
  }
}
</script>

<style>

</style>