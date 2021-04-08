<template>
  <div class="split" ref="splitRef">
    <template v-if="mode==='horizontal'">
      <div class="split-left" 
        :style="{ width: offsetPercent, paddingRight: `${parseInt(triggerSize) / 2}px` }">
        <slot name="left"></slot>
      </div>
      <div class="split-trigger-horizontal"
        :style="{ width: `${parseInt(triggerSize)}px`, left: `calc(${offsetPercent} - ${parseInt(triggerSize) / 2}px)` }"
        @mousedown="handleMouseDown"
      ></div>
      <div 
        class="split-right" 
        :style="{ left: offsetPercent, paddingLeft: `${parseInt(triggerSize) / 2}px` }">
        <slot name="right"></slot>
      </div>
    </template>
    <template v-else>
      <div class="split-top" 
        :style="{ height: offsetPercent, paddingBottom: `${parseInt(triggerSize) / 2}px` }">
        <slot name="top"></slot>
      </div>
      <div class="split-trigger-vertical" 
        :style="{ height: `${parseInt(triggerSize)}px`, top: `calc(${offsetPercent} - ${parseInt(triggerSize) / 2}px)` }"
        @mousedown="handleMouseDown"
      ></div>
      <div class="split-bottom" 
        :style="{ top: offsetPercent, paddintTop: `${parseInt(triggerSize) / 2}px` }">
        <slot name="bottom"></slot>
      </div>
    </template>
  </div>
</template>

<script>
import { reactive, ref, computed, onBeforeUnmount } from 'vue'
export default {
  name: 'SplitPane',
  props: {
    value: {
      type: Number,
      default: .5
    },
    mode: {
      type: String,
      default: 'horizontal',
      validator: (value) => ['vertical', 'horizontal'].includes(value)
    },
    max: {
      type: [Number, String],
      default: '40px',
      validator: (value) => parseInt(value) >= 0
    },
    min: {
      type: [Number, String],
      default: '40px',
      validator: (value) => parseInt(value) >= 0
    },
    triggerSize: {
      type: [Number, String],
      default: '8px'
    }
  },
  emits: ['update:value', 'on-move-start', 'on-moving', 'on-move-end'],
  setup (props, { emit }) {
    const { mode, max, min } = props
    const state = reactive({
      canMove: false,
      initalOffset: 0 // 鼠标相对于trigger左侧的位置
    })
    const splitRef = ref(null)
    const offsetPercent = computed(() => {
      return props.value * 100 + '%' // 这里只能用props.value，否则不能响应式，也可以用ref进行包裹
    })

    const handleMouseMove = (e) => {
      if (!state.canMove) return
      const { initalOffset } = state
      const { triggerSize } = props
      const { width, height, left, top } = splitRef.value.getBoundingClientRect()
      let value = mode === 'horizontal' ? (e.pageX - initalOffset + parseInt(triggerSize) / 2 - left) / width : (e.pageY - initalOffset + parseInt(triggerSize) / 2 - top) / height
      // 边界判断
      let maxValue = 0
      let minValue = 0
      if (typeof max === 'string') {
        maxValue = mode === 'horizontal' ? (width - parseInt(max)) / width : (height - parseInt(max)) / height
        maxValue = maxValue <= 0 ? 0 : maxValue
      } else {
        maxValue = max >= 1 ? 1 : max
      }
      if (typeof min === 'string') {
        minValue = mode === 'horizontal' ? parseInt(min) / width : parseInt(min) / height
        minValue = minValue >= 1 ? 1 : minValue
      } else {
        minValue = min >= 1 ? 1 : min
      }
      if (value >= maxValue) {
        value = maxValue
      } else if (value <= minValue) {
        value = minValue
      }
      emit('update:value', value)
      emit('on-moving')
    }

    const handleMouseUp = () => {
      state.canMove = false
      emit('on-move-end')
    }

    const handleMouseDown = (e) => {
      state.canMove = true
      const { left, top } = e.target.getBoundingClientRect()
      state.initalOffset = mode === 'horizontal' ? e.pageX - left : e.pageY - top
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      emit('on-move-start')
    }

    onBeforeUnmount(() => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    })

    return {
      splitRef,
      offsetPercent,
      handleMouseDown
    }
  }
}
</script>

<style lang="scss" scoped>
.split {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  &-left {
    position: absolute;
    left: 0;
    height: 100%;
    user-select: none;
  }
  &-right {
    position: absolute;
    right: 0;
    height: 100%;
    user-select: none;
  }
  &-top {
    position: absolute;
    top: 0;
    width: 100%;
    user-select: none;
  }
  &-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    user-select: none;
  }
  &-trigger-horizontal {
    position: absolute;
    top: 0;
    height: 100%;
    background-color: #ccc;
    cursor: col-resize;
    z-index: 2;
  }
  &-trigger-vertical {
    position: absolute;
    left: 0;
    width: 100%;
    background-color: #ccc;
    cursor: row-resize;
    z-index: 2;
  }
} 
</style>
