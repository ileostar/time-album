export default defineStore('user', () => {
  /***
   * 当前选中菜单的索引，默认为第一个菜单
   */
  const active = ref('/pages/index')
  return {
    active,
  }
}, {
  persist: {
    paths: ['active'],
  },
})
