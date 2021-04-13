<template>
  <div class="container">
    <SlideDemo />
  </div>
</template>

<script>
import SlideDemo from '@/views/SlideDemo'
export default {
  name: 'App',
  components: {
    SlideDemo
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
