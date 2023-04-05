import myNav from './nav.js'
import mySidebar from './sidebar.js'
export default {
  title: 'yueran',
  description: 'Just playing around.',
  author: 'yueran',
  base: '/yueran-doc/',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  lang: 'en-US',
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ]
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  themeConfig: {
    nav: myNav, //导航栏配置
    sidebar: mySidebar, //侧边栏配置
    author: 'yueran',
    lastUpdatedText: '上次更新时间', //最后更新时间文本
    // logo: "/img/avatar.jpg", //导航栏左侧头像
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yueran-z' },
    ],
    docFooter: { //上下篇文本
      prev: '上一篇',
      next: '下一篇'
    },
    editLink: {
      pattern: 'https://github.com/yueran-z/yueran-doc/edit/master/docs/:path'
    },
    footer: {
      message: '热爱生活，喜好美食，追求未来！',
      copyright: 'Copyright © 2023-present 焕然一新组合出版'
    }
  }
}