<template>
  <div>
    <Slider :width="500" v-if="imageList.length">
      <div v-for="item in imageList" :key="item.name">
        
      </div>
    </Slider>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from 'vue'
import Slider from '@/components/Slider'
export default {
  components: {
    Slider
  }, 
  setup () {
    const state = reactive({
      imageList: []
    })

    onMounted(() => {
      setTimeout(() => {
        state.imageList = Array(5).fill(0).map((item, index) => {
          return {
            name: `image_${index}`,
            imgUrl: `src/assets/images/gallery/${index + 1}.png`
          }
        })
      }, 500)
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style>

</style>