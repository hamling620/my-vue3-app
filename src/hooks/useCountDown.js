import { ref, onMounted, onBeforeUnmount } from 'vue'

function useCountDown (endVal) {
  const count = ref(endVal)
  const timer = ref(null)

  const handleCountDown = () => {
    timer.value = setInterval(() => { 
      if (--count.value === 0) {
        clearInterval(timer.value)
        return
      }
    }, 1000)
  }

  onMounted(() => {
    handleCountDown()
  })

  onBeforeUnmount(() => {
    timer.value && clearInterval(timer.value)
  })

  return count
}

// 根据目标时间来进行倒计时

export default useCountDown
