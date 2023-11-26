import { defineStore } from 'pinia'

export const useFooterStore = defineStore('footer', () => {
  /***
   * 当前选中菜单的索引，默认为第一个菜单
   */
  const currIndex = ref(0)

  return {
    currIndex,
  }
})
