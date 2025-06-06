import { defineConfig } from 'vitepress'
import dns from 'node:dns'
import fetch from 'node-fetch'

dns.setDefaultResultOrder('verbatim')

function org() {
  return {
    title: 'diagmindtw',
    description: '醫學國考知識庫',
    lang: 'zh-TW',
    server: {
      cors: {
        origin: ['sip.diagmindtw.com', 'http://localhost:5173'],
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type']
      },
      allowedHosts: ['sip.diagmindtw.com', 'localhost']
    },
    themeConfig: {
      nav: [
        { text: 'Home', link: 'diagmindtw.com' },
        { text: 'Examples', link: '/markdown-examples' }
      ],
      sidebar: [
        {
          "text": "1.md",
          "link": "/1.md"
        },
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    }
  };
}

const config = org();
export default defineConfig(config);

