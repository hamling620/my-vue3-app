<template>
  <div>
    {{ name }} {{ age }}
    <Model 
      v-model:name="name" 
      v-model:age="age" 
    />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Model from './Model.vue'
export default {
  components: {
    Model
  },
  setup () {
    const state = reactive({
      name: 'hamling',
      age: 28
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style>

</style>