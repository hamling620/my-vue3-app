<template>
  <div class="container">
    {{ show ? '隐藏' : '显示' }}<ISwitch v-model:value="show" />
    <hr>
    <ThemeDemo v-if="show" />
  </div>
</template>

<script>
import { ref } from 'vue'
import ISwitch from '@/components/ISwitch'
import ThemeDemo from '@/doc_study/provide&inject'
export default {
  name: 'App',
  components: {
    ISwitch,
    ThemeDemo
  },
  setup () {
    const show = ref(true)
    return {
      show
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
}
</style>
