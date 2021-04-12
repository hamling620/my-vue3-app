<template>
  <div>
    <h1>生命周期</h1>
    <LifeCycle v-if="show" :msg="msg" />
    <div>
      <button @click="changeMsgHandler">change msg</button>
      <button @click="toggleShowHandler">change show</button>
    </div>
  </div>
</template>

<script>
import LifeCycle from './LifeCycle.vue'
// 父子组件声明周期
// 1.挂载时
// parent beforeCreate
// parent created
// parent beforeMounte
// child beforeCreate
// child created
// child beforeMount
// child mounted
// parent mounted

// 2.子组件更新时
// parent beforeUpdate
// child beforeUpdate
// child updated
// parent updated

// 3.子组件卸载时
// parent beforeUpdate
// child beforeUnmount
// child unmounted
// parent updated

// Vue3中
// beforeDestory -> beforeUmount
// destoryed -> unmounted
export default {
  name: 'LifeCycleWrapper',
  components: {
    LifeCycle
  },
  data () {
    return {
      msg: 'hello lifeCycle!',
      show: true
    }
  },
  beforeCreate () {
    console.log('parent beforeCreate')
  },
  created () {
    console.log('parent created')
  },
  beforeMount () {
    console.log('parent beforeMount')
  },
  mounted () {
    console.log('parent mounted')
  },
  beforeUpdate () {
    console.log('parent beforeUpdate')
  },
  updated () {
    console.log('parent updated')
  },
  beforeUnmount () {
    console.log('parent beforeUnmount')
  },
  unmounted () {
    console.log('parent unmounted')
  },
  methods: {
    changeMsgHandler () {
      this.msg += Date.now()
    },
    toggleShowHandler () {
      this.show = !this.show
    }
  }
}
</script>

<style>

</style>