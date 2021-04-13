export const addClass = (el, ...classes) => {
  if (!el || !classes.length) return
  el.classList.add(...classes)
}