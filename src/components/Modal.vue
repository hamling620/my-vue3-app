<template>
  <teleport to="body">
    <div v-if="showModal" class="modal" :style="{ width }">
      <div class="modal-header">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <i class="icon-close" @click="handleClose">×</i>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
      <div v-if="$slots.footer" class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </teleport>
  <teleport to="body">
    <div v-if="showModal" class="modal-mask" @click="handleMaskClick"></div>
  </teleport>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '40%'
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    }
  },
  emits: ['onClose'],
  setup (props, { emit }) {
    const showModal =  ref(props.show)

    const handleClose = () => {
      showModal.value = false
      emit('onClose')
    }

    watch(() => props.show, (newValue) => {
      showModal.value = newValue
    })

    const handleMaskClick = () => {
      props.closeOnClickMask && handleClose()
    }

    return {
      showModal,
      handleClose,
      handleMaskClick
    }
  }
}
</script>

<style lang="scss" scoped>
$primaryColor: '#2ab561';
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, .5);
}
.modal {
  position: relative;
  margin: 15vh auto;
  padding: 20px;
  background-color: #fff;
  z-index: 1000;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(123, 123, 123, .5);
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  }
  &-header {
    margin-bottom: 10px;
    .icon-close {
      position: absolute;
      top: 20px;
      right: 20px;
      line-height: 20px;
      font-size: 20px;
      font-style: normal;
      color: #333333;
      cursor: pointer;
      &:hover {
        color: $primaryColor;
      }
    }
  }
  &-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 40px;
  }
}
</style>
