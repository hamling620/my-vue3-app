<template>
  <div>
    <div v-for="item in imageList" :key="item.name" class="img-item">
      <img v-lazy="item.imgUrl" :alt="item.name">
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from 'vue'
export default {
  name: 'ImageLoad',
  setup () {
    const state = reactive({
      imageList: []
    })

    onMounted(() => {
      setTimeout(() => {
        state.imageList = Array(25).fill(0).map((item, index) => {
          return {
            name: `image_${index}`,
            imgUrl: `src/assets/images/gallery/${index + 1}.png`
          }
        })
      }, 500)
    })

    return toRefs(state)
  }
}
</script>

<style lang="scss">
img {
  width: 200px;
  object-fit: contain;
}
</style>