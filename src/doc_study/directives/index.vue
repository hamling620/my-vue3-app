<template>
  <div>
    <div><input type="range" min="0" max="500" v-focus v-model="pinPadding"></div>
    <div v-pin:[direction]="pinPadding">Stick me {{ pinPadding }} px from the {{ direction }} of the page</div>
  </div>
</template>

<script>
// 自定义指令
// 除了核心功能默认内置的指令，Vue也允许注册自定义指令。注意，在Vue2.0中代码复用和抽象的主要形式是组件。然而有的情况，你仍需对普通元素进行底层操作，这是就会用到自定义指令
// 全局注册和局部注册
// 一个指令定义对象可以提供如下几个钩子函数（均为可选）
// beforeMount 当指令第一次绑定到元素并且在挂载父组件之前调用。在这里可以做一次性的初始化设置。
// mounted 在挂载绑定元素的父组件时调用
// beforeUpdate 在更新过包含组件的Vnode之前调用
// updated 在包含组件的Vnode及其子组件的Vnode更新之后调用
// beforeUnmount 在卸载绑定元素的父组件之前调用
// unmounted 当指令与元素解除绑定且父组件已卸载时，只调用一次

// 钩子函数的参数el binding vnode prevVnode
// 动态指令参数
// 指令的参数可以是动态的，例如在v-directive[argument]="value"中，argument可以根据组件实例数据进行更新！这使得自定义指令可以在应用中被灵活使用

// 对象字面量，如果指令需要多个值可以传递一个对象，指令函数能够接受任意合法JavaScript表达式
// 在组件中使用，Vue3有了片段支持(fragment)，组件可能有多个根节点。如果在有多个根节点的组件上使用自定义指令，可能会出现问题
import { reactive, toRefs } from 'vue'
export default {
  directives: {
    focus: {
      // beforeMount () {
      //   console.log('beforeMount focus')
      // },
      mounted (el) {
        el.focus()
        console.log('mounted focus')
      },
      // beforeUpdate () {
      //   console.log('beforeUpdate focus')
      // },
      // updated () {
      //   console.log('updated focus')
      // },
      // beforeUnmount () {
      //   console.log('beforeUnmount focus')
      // },
      // unmounted () {
      //   console.log('unmounted')
      // }
    },
    pin: {
      mounted (el, binding) {
        // binding.arg binding.value
        el.style.position = 'fixed'
        const direction = binding.arg || 'top'
        el.style[direction] = binding.value + 'px'
      },
      updated (el, binding) {
        const direction = binding.arg || 'top'
        el.style[direction] = binding.value + 'px'
      }
    }
  },
  setup () {
    const state = reactive({
      direction: 'right',
      pinPadding: 200
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style>

</style>