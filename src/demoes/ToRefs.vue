<template>
  <div>
    <h1>toRefs的使用</h1>
    <hr>
    <div>state {{ state.name }} {{ state.age }}</div>
    <div>toRefs {{ name }} {{ age }}</div>
  </div>
</template>

<script>
/*
  ref、toRef、toRefs最佳使用方式
  1. 使用reactive做对象的响应式，使用ref做值的响应式(当然ref可以来引用DOM元素或者子组件实例)
  2. setup中返回toRefs(state)或者toRef(state, 'name')来代替返回{state}，避免在模板中通过state去引用，如果直接返回state会丢失响应式
  3. ref变量名都是用xxxRef
  4. 合成函数返回响应式数据，使用toRefs

  为什么要使用ref？
  1. 返回值类型会丢失响应式，Vue3通过Proxy实现响应式，而基本值不具备响应式
  2. 如在setup、computed、合成函数都有可能返回值的类型
  3. Vue如果不定义ref，用户将自造ref，反而造成混乱

  为什么要使用.value?
  1. ref是一个对象（不丢失响应式），value存储值
  2. 通过.value属性的get和set实现响应式
  3. 用于模板或则reactive时，不需要.value，其它情况都需要

  为什么需要toRef和toRefs？
  1. 初衷：不丢失响应式的情况下把对象数据进行扩展
  2. 前提：针对的是响应式数据（reactive封装的）非普通对象
  3. 注意：不创造响应式，而是延续响应式
 */
import { reactive, toRefs } from 'vue'
export default {
  name: 'ToRefs',
  setup () {
    const state = reactive({
      name: 'hamling',
      age: 18
    })

    const stateToRefs = toRefs(state) // 如果传入的是普通值，而不是响应的值，那么将失去响应式

    const { name, age } = stateToRefs

    setTimeout(() => {
      name.value = 'lucile'
      age.value = 20
    }, 2000)

    return Object.assign({}, { state }, { name, age })
  }
}
</script>

<style>

</style>