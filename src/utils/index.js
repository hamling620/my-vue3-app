// 节流函数
export function throttle (fn, delay = 500) {
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} must be type of function!`)
  }
  let timer
  let prevTime 
  return function (...args) {
    const currTime = Date.now()
    if (!prevTime) prevTime = currTime
    timer && clearTimeout(timer)

    if (currTime - prevTime > delay) {
      prevTime = currTime
      timer && clearTimeout(timer)
      fn.apply(this, args)
      return
    }

    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, dely)
  }
}
