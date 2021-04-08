<template>
  <div class="switch-wrapper">
    <input 
      type="checkbox" 
      :id="id" 
      class="switch-input"
      :checked="value"
      @change="handleChange"
    >
    <label :for="id" class="switch-label">
      <span class="switch-btn"></span>
    </label>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
export default {
  name: 'ISwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:value'],
  setup (props, { emit }) {
    const { uid } = getCurrentInstance()
    const id = ref(`switch_${uid}`)

    const handleChange = (e) => {
      emit('update:value', e.target.checked)
    }

    return {
      id,
      handleChange
    }
  }
}
</script>

<style lang="scss" scoped>
.switch-wrapper {
  display: inline-flex;
  vertical-align: top;
  .switch-input {
    display: none;
    width: 0;
    height: 0;
    opacity: 0;
    &:checked + .switch-label {
      background-color: #E44444;
      & > .switch-btn {
        left: 100%;
        transform: translate(-100%, -50%);
      }
    }
  }
  .switch-label {
    display: inline-block;
    position: relative;
    width: 42px;
    height: 24px;
    border-radius: 12px;
    border: 1px solid #E5E5E5;
    cursor: pointer;
    transition: all .2s;
    -webkit-tag-highlight-color: transparent;
  }
  .switch-btn {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #fff;
    transition: all .2s;
    box-shadow: -1px 2px 2px 0 rgba(0, 0, 0, .1), 0 2px 10px 0 rgba(0, 0, 0, 0.08), 0 0 2px 0px rgba(0, 0, 0, .2) ;
  }
}
</style>
