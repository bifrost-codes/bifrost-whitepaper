module.exports = {
  base: '/',
  title: 'Bifrost Finance Whitepaper',
  description: "A parachain designed for staking's liquidity. 为 Staking 提供流动性的跨链网络。",
  plugins: [
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.my-wrapper .my-img',
        delay: 1000,
        options: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
        },
      },
    ],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon_icon.png' }]
  ],
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'Bifrost Finance Whitepaper',
      description: "A parachain designed for staking's liquidity",
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Bifrost Finance Whitepaper',
      description: '为 Staking 提供流动性的跨链网络',
    },
  },
  themeConfig: {
    displayAllHeaders: true,
    search: true,
    locales: {
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit Page',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        nav: [
          {text: 'Home', link: 'https://bifrost.finance'},
          {
            text: 'Translate',
            link: 'http://whitepaper-translate.bifrost.finance/',
          },
          {
            text: 'Documentation',
            items: [
              {text: 'Developer', link: 'https://developer.bifrost.finance'},
              {text: 'Whitepaper',  link: 'https://whitepaper.bifrost.finance'},
              {text: 'Wiki', link: 'https://wiki.bifrost.finance'},
            ],
          },
          {text: 'GitHub', link: 'https://github.com/bifrost-finance'},
        ],
        sidebar: [
          {
            title: 'Marketing Overview',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/en/marketing_overview/01_marketing.md', 'Marketing'],
              ['/en/marketing_overview/02_conflicts_between_staking_and_defi_rewards.md', 'Competition between Staking and DeFi rewards'],
              ['/en/marketing_overview/03_conflicts_between_liquidity_and_security_in_pos.md', 'Conflicts between Liquidity and Security in PoS'],
              ['/en/marketing_overview/04_staking_and_cross_chain_conflict.md', 'Staking and Cross-chain Conflict'],
            ],
          },
          {
            title: 'Project',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/en/project/01_project_introduction.md', 'Project Introduction'],
              ['/en/project/02_implementation_plan.md', 'Implementation Plan'],
              ['/en/project/03_business_staking.md', 'Business - Staking Liquidity'],
              ['/en/project/04_business_ipo.md', 'Buiness - PLO Liquidity'],
            ],
          },
          {
            title: 'Economic',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/en/economic/01_economic_objectives.md', 'Economic Objectives'],
              ['/en/economic/02_voucher_token_(vtoken).md', 'Voucher Token (vToken)'],
              ['/en/economic/03_bifrost_native_token.md', 'Bifrost Native Token (BNC)'],
              ['/en/economic/04_token_distribution.md', 'Token Distribution'],
              ['/en/economic/05_risk_control.md', 'Risk Control'],
            ],
          },
          {
            title: 'Roadmap & Milestone',
            collapsable: false,
            path: '/en/road_map/road_map.md',
            sidebarDepth: 0,
          },
          {
            title: 'Conclusion',
            collapsable: false,
            path: '/en/conclusion/conclusion.md',
            sidebarDepth: 0,
          },
          {
            title: 'References',
            collapsable: false,
            path: '/en/references/references.md',
            sidebarDepth: 0,
          }
        ],
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '编辑此页',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用。',
            buttonText: '刷新',
          },
        },
        nav: [
          {text: '首页', link: 'https://bifrost.finance'},
          {
            text: '翻译',
            link: 'http://whitepaper-translate.bifrost.finance/',
          },
          {
            text: '文档',
            items: [
              {text: 'Developer', link: 'https://developer.bifrost.finance'},
              {text: 'Whitepaper', link: 'https://whitepaper.bifrost.finance'},
              {text: 'Wiki', link: 'https://wiki.bifrost.finance'},
            ],
          },
          {text: 'GitHub', link: 'https://github.com/bifrost-finance'},
        ],
        sidebar: [
          {
            title: '市场概述',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/marketing_overview/01_marketing.md', '背景'],
              ['/zh/marketing_overview/02_conflicts_between_staking_and_defi_rewards.md', 'Staking 和 DeFi 收益竞争'],
              ['/zh/marketing_overview/03_conflicts_between_liquidity_and_security_in_pos.md', 'PoS 网络流动性和安全性互斥'],
              ['/zh/marketing_overview/04_staking_and_cross_chain_conflict.md', '跨链场景下 Staking 收益'],
            ],
          },
          {
            title: '项目',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/project/01_project_introduction.md', '项目简介'],
              ['/zh/project/02_implementation_plan.md', '实施方案'],
              ['/zh/project/03_business_staking.md', '典型业务 - Staking Liquidity'],
              ['/zh/project/04_business_ipo.md', '典型业务 - PLO Liquidity'],
            ],
          },
          {
            title: '经济模型',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/economic/01_economic_objectives.md', '经济模型设计目标'],
              ['/zh/economic/02_voucher_token_(vtoken).md', 'Voucher Token (vToken)'],
              ['/zh/economic/03_bifrost_native_token.md', 'Bifrost Native Token (BNC)'],
              ['/zh/economic/04_token_distribution.md', '代币分发'],
              ['/zh/economic/05_risk_control.md', '风险控制'],
            ],
          },
          {
            title: 'Roadmap & Milestone',
            collapsable: false,
            path: '/zh/road_map/road_map.md',
            sidebarDepth: 0,
          },
          {
            title: '结论',
            collapsable: false,
            path: '/zh/conclusion/conclusion.md',
            sidebarDepth: 0,
          },
          {
            title: '参考文献',
            collapsable: false,
            path: '/zh/references/references.md',
            sidebarDepth: 0,
          }
        ],
      },
    },
  },
};