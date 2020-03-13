module.exports = {
  base: '/whitepaper/',
  title: 'Bifrost Whitepaper',
  description: "A parachain designed for staking's liquidity. 为 Staking 提供流动性的跨链网络。",
  markdown: {
    lineNumbers: true,
  },
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon_icon.png' }]
  ],
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'Bifrost Whitepaper',
      description: "A parachain designed for staking's liquidity",
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Bifrost Whitepaper',
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
          {text: 'Home', link: 'https://bifrost.codes'},
          {
            text: 'Documentation',
            items: [
              {text: 'Developer', link: 'https://docs.bifrost.codes/developer'},
              {
                text: 'Whitepaper',
                link: 'https://docs.bifrost.codes/whitepaper',
              },
            ],
          },
          {text: 'GitHub', link: 'https://github.com/bifrost-codes'},
        ],
        sidebar: [
          {
            title: 'Getting Started',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/en/getting_started/01_marketing.md', 'Marketing'],
              ['/en/getting_started/02_overview.md', 'Overview'],
            ],
          },
          {
            title: 'Economic',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/en/economic/01_bnc_economic.md', 'BNC Economic'],
              ['/en/economic/02_three_pools_valuation_model.md', 'Valuation Model'],
              ['/en/economic/03_staking_gain_mechanism.md', 'Staking Gain Mechanism'],
              ['/en/economic/04_stake_proxy_node.md', 'Stake Proxy Node'],
            ],
          },
          {
            title: 'System Structure',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/en/system_structure/01_system_structure.md', 'Structure'],
              ['/en/system_structure/02_consensus.md', 'Consensus'],
              ['/en/system_structure/03_node.md', 'Node'],
              ['/en/system_structure/04_runtime_environment.md', 'Runtime Environment'],
              ['/en/system_structure/05_offchain_worker.md', 'Off-Chain Worker'],
              ['/en/system_structure/06_security.md', 'Security'],
              ['/en/system_structure/07_account_system.md', 'Account System'],
            ],
          },
          {
            title: 'Cross Chain',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/en/cross_chain/01_cross_chain_mode.md', 'Technology'],
              ['/en/cross_chain/02_interoperate_bridge.md', 'Bridge'],
              ['/en/cross_chain/03_cross_chain_assets.md', 'Assets'],
            ],
          },
          {
            title: 'Progress',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/en/progress/01_roadmap.md', 'Roadmap'],
              ['/en/progress/02_participants.md', 'Participants'],
            ],
          },
          {
            title: 'Conclusion',
            collapsable: false,
            path: '/en/conclusion.md',
            sidebarDepth: 0,
          },
          {
            title: 'Disclaimer',
            collapsable: false,
            path: '/en/DISCLAIMER.md',
            sidebarDepth: 0,
          },
          {
            title: 'Change Log',
            collapsable: false,
            path: '/en/CHANGELOG.md',
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
          {text: '首页', link: 'https://bifrost.codes'},
          {
            text: '文档',
            items: [
              {text: '开发文档', link: 'https://docs.bifrost.codes/developer'},
              {text: '白皮书', link: 'https://docs.bifrost.codes/whitepaper'},
            ],
          },
          {text: 'GitHub', link: 'https://github.com/bifrost-codes'},
        ],
        sidebar: [
          {
            title: '前言',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/getting_started/01_marketing.md', '市场'],
              ['/zh/getting_started/02_overview.md', '概述'],
            ],
          },
          {
            title: '经济',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/economic/01_bnc_economic.md', 'BNC 经济'],
              ['/zh/economic/02_three_pools_valuation_model.md', '三池估值模型'],
              ['/zh/economic/03_staking_gain_mechanism.md', 'Staking 增益机制'],
              ['/zh/economic/04_stake_proxy_node.md', 'Stake 代理节点'],
            ],
          },
          {
            title: '架构',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/system_structure/01_system_structure.md', '架构图'],
              ['/zh/system_structure/02_consensus.md', '共识算法'],
              ['/zh/system_structure/03_node.md', '节点'],
              ['/zh/system_structure/04_runtime_environment.md', '运行时环境'],
              ['/zh/system_structure/05_offchain_worker.md', 'Off-Chain Worker'],
              ['/zh/system_structure/06_security.md', '安全机制'],
              ['/zh/system_structure/07_account_system.md', '账户系统'],
            ],
          },
          {
            title: '跨链',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/cross_chain/01_cross_chain_mode.md', '跨链模式'],
              ['/zh/cross_chain/02_interoperate_bridge.md', '互操作转接桥'],
              ['/zh/cross_chain/03_cross_chain_assets.md', '资产跨链'],
            ],
          },
          {
            title: '进展',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/progress/01_roadmap.md', '路线图'],
              ['/zh/progress/02_participants.md', '参与方'],
            ],
          },
          {
            title: '结论',
            collapsable: false,
            path: '/zh/conclusion.md',
            sidebarDepth: 0,
          },
          {
            title: '免责申明',
            collapsable: false,
            path: '/zh/DISCLAIMER.md',
            sidebarDepth: 0,
          },
          {
            title: '更新日志',
            collapsable: false,
            path: '/zh/CHANGELOG.md',
            sidebarDepth: 0,
          }
        ],
      },
    },
  },
};