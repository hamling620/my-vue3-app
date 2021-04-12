<template>
  <div>
    <h1>toRef的使用</h1>
    <hr>
    <div>state: {{ state.name }} {{ state.age }}</div>
    <div>ref: {{ nameRef }} {{ ageRef }}</div>
  </div>
</template>

<script>
import { toRef, reactive } from 'vue'
export default {
  name: 'ToRef',
  setup () {
    const state = reactive({
      name: 'hamling',
      age: 18
    })
    // 直接返回state或者解构之后返回会丢失响应式
    // 可以通过将state中的值变为ref，那么可以直接将它们返回，并且保持引用，保持响应式
    const nameRef = toRef(state, 'name')
    const ageRef = toRef(state, 'age')

    setTimeout(() => {
      state.name = 'lucile'
      state.age = 22
    }, 1500)

    setTimeout(() => {
      nameRef.value = 'mike'
      ageRef.value = 29
    }, 3000)

    return {
      state,
      nameRef,
      ageRef
    }
  }
}
</script>

<style>

</style>