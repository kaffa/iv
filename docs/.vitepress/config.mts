import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iv",
  description: "invest",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'markdown参考', link: '/markdown-examples' },
      { text: 'api参考', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: '技术分析',
        items: [
          { text: 'MA', link: '/ta/ma' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kaffa/iv' }
    ]
  }
})
