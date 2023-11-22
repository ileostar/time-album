import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [],
  globalStyle: {
    backgroundColor: '@bgColor',
    backgroundColorBottom: '@bgColorBottom',
    backgroundColorTop: '@bgColorTop',
    backgroundTextStyle: '@bgTxtStyle',
    navigationBarBackgroundColor: '@navBgColor',
    navigationBarTextStyle: '@navTxtStyle',
    navigationBarTitleText: '流年集锦',
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: 'pages/index',
        text: '照片',
      },
      {
        pagePath: 'pages/album',
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
