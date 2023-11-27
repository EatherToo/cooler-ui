import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Cooler UI',
  description: 'a cooler components ui library of vue',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        text: 'Guide',
        link: '/guide',
      },
      {
        text: 'Components',
        link: '/components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Radio', link: '/components/radio' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Select', link: '/components/select' },
          { text: 'Slider', link: '/components/slider' },
          { text: 'DatePicker', link: '/components/date-picker' },
          { text: 'TimePicker', link: '/components/time-picker' },
          { text: 'Upload', link: '/components/upload' },
          { text: 'Form', link: '/components/form' },
          { text: 'Table', link: '/components/table' },
          { text: 'Modal', link: '/components/modal' },
          { text: 'Tooltip', link: '/components/tooltip' },
          { text: 'Popover', link: '/components/popover' },
          { text: 'Menu', link: '/components/menu' },
          { text: 'Tabs', link: '/components/tabs' },
          { text: 'Pagination', link: '/components/pagination' },
          { text: 'Tag', link: '/components/tag' },
          { text: 'Alert', link: '/components/alert' },
          { text: 'Message', link: '/components/message' },
          { text: 'Notification', link: '/components/notification' },
          { text: 'Progress', link: '/components/progress' },
          { text: 'Tree', link: '/components/tree' },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
