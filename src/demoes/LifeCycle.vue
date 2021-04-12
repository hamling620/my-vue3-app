<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
import { 
  onBeforeMount, 
  onMounted, 
  onBeforeUpdate, 
  onUpdated, 
  onBeforeUnmount, 
  onUnmounted
} from 'vue'
export default {
  name: 'LifeCycle',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup () { // 相当于beforeCreate和created
    console.log('setup')
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
  },
  beforeCreate () {
    console.log('child beforeCreate')
  },
  created () {
    console.log('child created')
  },
  beforeMount () {
    console.log('child beforeMount')
  },
  mounted () {
    console.log('child mounted')
  },
  beforeUpdate () {
    console.log('child beforeUpdate')
  },
  updated () {
    console.log('child updated')
  },
  beforeUnmount () {
    console.log('child beforeUnmount')
  },
  unmounted () {
    console.log('child unmounted')
  },
}
</script>

<style>

</style>