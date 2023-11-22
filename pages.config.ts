import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [],
  globalStyle: {
    backgroundColor: '@bgColor',
    backgroundColorBottom: '@bgColorBottom',
    backgroundColorTop: '@bgColorTop',
    backgroundTextStyle: '@bgTxtStyle',
    navigationBarBackgroundColor: '#000000',
    navigationBarTextStyle: '@navTxtStyle',
    navigationBarTitleText: '流年集锦',
  },
  tabBar: {
    backgroundColor: '@tabBgColor',
    borderStyle: '@tabBorderStyle',
    color: '@tabFontColor',
    selectedColor: '@tabSelectedColor',
    list: [
      {
        pagePath: 'pages/index',
        text: '相册',
      },
      {
        pagePath: 'pages/find',
        text: '发现',
      },
      {
        pagePath: 'pages/me',
        text: '我的',
      },
    ],
  },
  debug: true,
  easycom: {
    autoscan: true,
    custom: {
      '^nut-(.*)?-(.*)': 'nutui-uniapp/components/$1$2/$1$2.vue',
      '^nut-(.*)': 'nutui-uniapp/components/$1/$1.vue',
    },
  },
})
