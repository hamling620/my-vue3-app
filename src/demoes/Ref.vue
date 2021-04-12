<template>
  <div>
    <h1>Ref的使用</h1>
    <hr>
    <div>name: {{ state.name }}</div>
    <div>age: {{ ageRef }}</div>
    <div ref="eleRef">我是一段文字</div>
    <LifeCycleWrapper ref="lifeCycleRef" />
  </div>
</template>

<script>
// ref可以用于模板和reactive，使用时不用+.value；其它场景下获取和修改都需要+.vaule
// ref还可以按照以前的方式获取dom元素或者组件实例
import { ref, reactive, onMounted } from 'vue'
import LifeCycleWrapper from './LifeCycleWrapper.vue'
export default {
  name: 'Ref',
  components: {
    LifeCycleWrapper
  },
  setup () {
    const nameRef = ref('hamling') // 值类型响应式，而不是引用类型响应式
    const ageRef = ref(28)
    const eleRef = ref(null)
    const lifeCycleRef = ref({})

    const state = reactive({
      name: nameRef
    })

    onMounted(() => {
      console.log('eleRef', eleRef.value, eleRef.value.innerHTML)
      console.log('lifeCycle', lifeCycleRef.value)
    })

    setTimeout(() => {
      nameRef.value = 'lucile'
      ageRef.value = 18
    }, 2000)

    return {
      state,
      ageRef,
      eleRef,
      lifeCycleRef
    }
  }
}
</script>

<style>

</style>