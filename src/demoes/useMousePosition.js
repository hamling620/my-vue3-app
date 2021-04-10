import { ref, onMounted, onUnmounted } from 'vue'

function useMousePosition () {
  const x = ref(0)
  const y = ref(0)

  function handleChange (e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', handleChange)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleChange)
  })

  return {
    x,
    y
  }
}

export default useMousePosition
