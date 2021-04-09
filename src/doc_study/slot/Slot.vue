<template>
  <div>
    <Layout>
      <template v-slot:header>
        header
      </template>
      <template v-slot:default>
        main
      </template>
      <template v-slot:footer>
        footer
      </template>
    </Layout>
    <!-- <TodoList v-slot="slotProps" :data="list">
      <div>{{ slotProps.item.name }}
        <button @click="handleDeleteItem(slotProps.item.id)">delete</button>
      </div>
    </TodoList> -->
    <!--解构 -->
    <TodoList v-slot="{ item }" :data="list">
      <div>{{ item.name }}
        <button @click="handleDeleteItem(item.id)">delete</button>
      </div>
    </TodoList>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Layout from './Layout'
import TodoList from './TodoList'
// 插槽（Slot）：内容分发的API，设计灵感源自于Web Components草案规范。
// <slot></slot>元素作为承载分发内容的出口
// 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的；
// slot中的后备内容，如果没添加插槽内容默认显示的内容
// 具名插槽<slot name="header"></slot>
// v-slot只能用在template上，只有一种情况例外。v-slot 可以简写为#。
// 作用域插槽：有时候让插槽的内容能够访问子组件才有的的数据是很有用的。当一个组件被用来渲染一个项目数组时，这是一个常见的情况，我们希望自定义每个项目的渲染方式。
// 绑定在<slot>元素上的atrribute，被称为插槽prop。现在在父级作用域中，我们可以使用带值的v-slot来定义我们提供的插槽prop的名字
// 独占默认的插槽的缩写语法：当被提供的内容只有默认插槽时，组件的标签才可以被当做插槽的模板来使用。这样我们就可以把v-slot直接用在组件上
// 注意默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确；只要出现多个插槽，请始终为所有的插槽使用完整的基于template的语法
// 作用域插槽的内部工作原理是将你的插槽内容包括在一个传入单个参数的函数里
// function (slotProps) { 插槽内容 }
// 这意味着v-slot的值实际上可以是任何能够作为函数定义中的参数的JavaScript表达式
// 动态插槽名：动态指令参数也可以用在v-slot上，来定义动态的插槽名

export default {
  components: {
    Layout,
    TodoList
  },
  setup () {
    const state = reactive({
      list: [
        {
          id: 1,
          name: 'hamling'
        },
        {
          id: 2,
          name: 'lucile'
        },
        {
          id: 3,
          name: 'taylor'
        }
      ]
    })

    const handleDeleteItem = (id) => {
      const index = state.list.findIndex(item => item.id === id)
      if (index > -1) {
        state.list.splice(index, 1)
      }
    }

    return {
      ...toRefs(state),
      handleDeleteItem
    }
  }
}
</script>

<style>

</style>