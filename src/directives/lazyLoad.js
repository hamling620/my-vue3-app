import { throttle } from '@/utils'

const LazyLoad = {
  init (el, value, defaultSrc) {
    el.setAttribute('data-src', value)
    el.setAttribute('src', defaultSrc)
  },
  observe (el) {
    const io = new IntersectionObserver(entries => {
      const src = el.dataset.src
      if (entries[0].isIntersecting && src) {
        el.src = src
        el.removeAttribute('data-src')
      }
    })
    io.observe(el)
  },
  onScroll (el) {
    function load () {
      const windowHeight = document.documentElement.clientHeight // 屏幕的高度
      const { top, bottom } = el.getBoundingClientRect()
      const src = el.dataset.src
      if (top - windowHeight < 0 && bottom > 0 && src) { // top - widowHeight表示元素在页面中的投票要小于视口的高度，也就是刚刚从底部冒出来，并且底部也要出现
        el.src = src
        el.removeAttribute('data-src')
      }
    }
    window.addEventListener('scroll', throttle(load))
  }
}

// 注意Vu3生命周期的改变
export default {
  install (app, options) {
    const defaultSrc = options.default
    app.directive('lazy', {
      beforeMount (el, binding) {
        LazyLoad.init(el, binding.value, defaultSrc)
      },
      mounted (el) {
        if (IntersectionObserver) {
          LazyLoad.observe(el)
        } else {
          LazyLoad.onScroll(el)
        }
      }
    })
  }
}
