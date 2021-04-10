<template>
  <div>
    鼠标的位置：x {{ x }}，y {{ y }}
  </div>
</template>

<script>
import useMousePosition from './useMousePosition'
export default {
  name: 'Mouse',
  setup () {
    const { x, y } = useMousePosition()
    return {
      x,
      y
    }
  }
}
</script>

<style>

</style>