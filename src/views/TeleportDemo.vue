<template>
  <h1>Teleport（传送门）</h1>
  <div>{{ msg }}</div>
  <button @click="handleClick">点击</button>
  <Modal
    :show="show"
    @on-close="show=false"
  >
    <template #title>
      <h3>对话框</h3>
    </template>
    <template #default>
      你好
    </template>
  </Modal>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Modal from '@/components/Modal'
export default {
  name: 'TeleportDemo',
  components: {
    Modal
  },
  setup () {
    const state = reactive({
      msg: 'Hello Teleport !',
      show: false
    })
    const handleClick = () => {
      state.show = true
    }
    return {
      ...toRefs(state),
      handleClick
    }
  }
}
</script>

<style>

</style>
