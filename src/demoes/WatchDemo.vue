<template>
  <div>{{ name }} {{ age }}</div>
</template>

<script>
import { reactive, ref, toRefs, watch, watchEffect } from 'vue'
export default {
  setup () {
    const state = reactive({
      name: 'hamling',
      age: 28
    })

    const numRef = ref(1)

    // watch第一个参数必须是响应式的比如ref，或者是函数()=> props.value ()=> state.value
    // 第二个参数watchCallback，vue2中的handler
    // 第三个参数options { immdiate: true, deep: true }
    watch(numRef, (newVal, oldVal) => {
      console.log(newVal, oldVal)
    }, {
      immediate: true,
      deep: true
    })

    watch(() => state.name, (newVal, oldVal) => {
      console.log(newVal, oldVal)
    }, {
      immediate: true
    })

    // 至少执行一次，第一次收集哪些数据被用到了，然后只监听用到的
    watchEffect(() => {
      console.log(state.age)
    })

    setTimeout(() => {
      numRef.value = 2
    }, 1500)

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style>

</style>