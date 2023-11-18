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
    navigationStyle: 'default',
    disableScroll: true
  },
  tabBar: {
    backgroundColor: "@tabBgColor",
    borderStyle: "@tabBorderStyle",
    color: "@tabFontColor",
    selectedColor: "@tabSelectedColor",
    list: [
      {
        "pagePath": "pages/album",
        "text": "相册",
      },
      {
        "pagePath": "pages/find",
        "text": "发现",
      },
      {
        "pagePath": "pages/me",
        "text": "我的",
      }
    ]
  },
  debug: true
})
