<template>
<!-- template有fragment的作用，不需只要一个子元素包裹 -->
  <button @click="handleOpen">打开</button>
  <teleport to="body">
    <div v-if="show" class="modal">
      <div class="modal-content">
        hello teleport!
        <button @click="handleClose">关闭</button>
      </div>
    </div>
  </teleport>
  <teleport to="body">
    <div class="modal-mask" v-if="show"></div>
  </teleport>
</template>

<script>
import { ref } from 'vue'
// 传送门的使用
// template的fragment作用
// ReactDom.createPortal
export default {
  name: 'TeleportDemo',
  setup () {
    const show = ref(false)
    const handleOpen = () => {
      show.value = true
    }
    const handleClose = () => {
      show.value = false
    }

    return {
      show,
      handleOpen,
      handleClose
    }
  }
}
</script>

<style>
  .modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eaeaea;
    opacity: .7;
    z-index: 999;
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }
  .modal-content {
    width: 500px;
    height: 500px;
    background-color: #E44444;
    opacity: .3;
  }
</style>