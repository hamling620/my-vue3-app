<template>
  <div class="slider" ref="slider" :style="{ width: computedSize(width), height: computedSize(height) }">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { addClass } from '@/utils/dom'

BScroll.use(Slide)

export default {
  name: 'Slider',
  props: {
    width: {
      type: [Number, String],
      default: '100%'
    },
    height: {
      type: [Number, String],
      default: '400px'
    }
  },
  setup () {
    const slider = ref('slider')
    const sliderGroup = ref('slider-group')
    const scroll = ref(null)

    const computedSize = (value) => {
      return typeof value === 'number' ? value + 'px' : value
    }
  
    const setSliderWidth = () => {
      const children = sliderGroup.value.children
      const sliderWidth = slider.value.clientWidth
      let width = 0
      for (let i = 0; i < children.length; i++) {
        const child = children[i]
        addClass(child, 'slider-group-item')
        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      sliderGroup.value.style.width = width + 'px'
    }

    const initSlider = () => {
      scroll.value = new BScroll(slider.value, {
        scrollX: true,
        scrollY: false,
        slide: {
          loop: true,
          threshold: 100,
          autoplay: true
        },
        momentum: false,
        bounce: false,
        stopPropagation: true
      })
    }

    onMounted(() => {
      nextTick(() => {
        setSliderWidth()
        initSlider()
      })
    })

    onBeforeUnmount(() => {

    })

    return {
      slider,
      sliderGroup,
      computedSize
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  overflow: hidden;
  &-group {
    height: 100%;
    &-item {
      float: left;
    }
  }
}

</style>