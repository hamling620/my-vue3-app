<template>
  <div>
    主题色 {{ themeValue }}
    <Toolbar />
  </div>
</template>

<script>
import { ref, provide } from 'vue'
import Toolbar from './Toolbar'
// Provide & Inject (提供/注入) 类似于react context
// 父组件通过provide选项来提供数据，子组件有一个inject选项来使用这个数据
// 父组件不需要知道哪些子组件使用它提供的property，子组件不需要知道inject property来自哪里
export default {
  components: {
    Toolbar
  },
  setup () {
    const themeValue = ref('light')
    const handleChange = () => {
      themeValue.value = themeValue.value === 'light' ? 'dark' : 'light'
    }
    provide('theme', {
      theme: themeValue,
      handleChange
    })
    return {
      themeValue
    }
  }
}
</script>

<style>

</style>