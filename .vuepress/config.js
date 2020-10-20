module.exports = {
  base: '/',
  title: 'Bifrost Finance Whitepaper',
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
              ['/en/maketing_overview/01_marketing.md', 'Marketing'],
              ['/en/maketing_overview/02_Conflicts_between_Staking_and_DeFi_rewards.md', 'Competition between Staking and DeFi rewards'],
              ['/en/maketing_overview/03_Conflicts_between_Liquidity_and_Security_in_PoS.md', 'Conflicts between Liquidity and Security in PoS'],
              ['/en/maketing_overview/04_Conflicts_between_Liquidity_and_Security_in_PoS.md', 'Conflicts between Liquidity and Security in PoS'],
            ],
          },
          {
            title: 'Project',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/en/Project_introduction/01_Project Introduction.md', 'Project Introduction'],
              ['/en/Project_introduction/02_Implementation_Plan.md', 'Implementation Plan'],
              ['/en/Project_introduction/03_Business - Staking.md', 'Business - Staking'],
              ['/en/Project_introduction/04_Business - IPO.md', 'Buiness - IPO'],
            ],
          },
          {
            title: 'Economic',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/en/economic/01_Economic_Objectives.md', 'Economic Objectives'],
              ['/en/economic/02_Voucher_Token_(vToken).md', 'Voucher Token (vToken)'],
              ['/en/economic/03_Staking_Derivatives.md', 'Staking Derivatives'],
              ['/en/economic/04_reward_settlement_forms.md', 'Reward Settlement Forms'],
              ['/en/economic/05_Reward_Generation.md', 'Reward Generation'],
              ['/en/economic/06_retain_governance_right.md', 'Retain Governance Right'],
              ['/en/economic/07_Impossible_Triangle_of_Derivatives.md', 'Impossible Triangle of Derivatives'],
              ['/en/economic/08_vtokenmint_incentives.md', 'vTokenmint Incentives'],
              ['/en/economic/09_vTokenmint_Channel_Funds.md', 'vTokenmint Channel Funds'],
              ['/en/economic/10_Risk_Control.md', 'Risk Control'],
              ['/en/economic/11_Bifrost_Native_Token(BNC).md', 'Bifrost Native Token (BNC)'],
              ['/en/economic/12_Value_Capture.md', 'Value Capture'],
              ['/en/economic/13_Incentive_Model.md', 'Retain Governance Right'],
              ['/en/economic/14_Participants.md', 'Participants'],
            ],
          },
          {
            title: 'Token Structure',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/en/system_structure/01_Token_Distribution.md', 'Token Distribution'],
              ['/en/system_structure/02_BNC_Stracture.md', 'BNC Structure'],
              ['/en/system_structure/03_Ecosystem.md', 'Ecosystem'],
              ['/en/system_structure/04_vToken_Holding_Incentives.md', 'vToken Holding Incentives'],
              ['/en/system_structure/05_Initial_Parallel_Chain_Offering_(IPO).md', 'Initial Parallel Chain Offering (IPO)'],
              ['/en/system_structure/06_Collator.md', 'Collator'],
              ['/en/system_structure/07_Slash_Insurance_Fund.md', 'Slash Insurance Fund'],
              ['/en/system_structure/08_The_Unlocking_Period.md', 'The Unlocking Period'],
            ],
          },
          {
            title: 'Risk Control',
            collapsable: false,
            path: '/en/Risk_Control.md',
            sidebarDepth: 0,
          },
          {
            title: 'Roadmap & Milestone',
            collapsable: false,
            path: '/en/ROAD MAP.md',
            sidebarDepth: 0,
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
              ['/zh/marketing_overview/01_background.md', '背景'],
              ['/zh/marketing_overview/02_Conflicts_between_Staking_and_DeFi_rewards.md', 'Staking 和 DeFi 收益竞争问题'],
              ['/zh/marketing_overview/03_Conflicts_between_Liquidity_and_Security_in_PoS.md', 'PoS 网络流动性和安全性互斥问题'],
              ['/zh/marketing_overview/04_Conflicts_between_Liquidity_and_Security_in_PoS.md', 'PoS 网络流动性和安全性互斥问题'],
            ],
          },
          {
            title: '项目',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/Project_Introduction/01_Project_Introduction.md', '项目简介'],
              ['/zh/Project_Introduction/02_Implementation_Plan.md', '实施方案'],
              ['/zh/Project_Introduction/03_Business - Staking.md', '典型业务-Staking'],
              ['/zh/Project_Introduction/04_Business - IPO.md', '典型业务 - IPO'],
            ],
          },
          {
            title: '经济模型',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/economic/01_Economic_Objectives.md', '经济模型设计目标'],
              ['/zh/economic/02_Voucher_Token_(vToken)', 'Voucher Token(vToken)'],
              ['/zh/economic/03_Staking_Derivatives', 'Staking 衍生品'],
              ['/zh/economic/04_reward_settlement_forms.md', '收益结算方式'],
              ['/zh/economic/05_Reward_Generation.md', '收益产生方式'],
              ['/zh/economic/06_Retain_Governance_Right.md', '保留治理权'],
              ['/zh/economic/07_Impossible_Trangle.md', '衍生品不可能三角'],
              ['/zh/economic/08_vTokenmint_Incentives', 'vToken 铸币挖矿'],
              ['/zh/economic/09_vTokenmint_Channel_Funds.md', 'vToken 铸币渠道金'],
              ['/zh/economic/10_Risk_Control', '风险控制'],
              ['/zh/economic/11_Bifrost_Native_Token.md', 'Bifrost Native Token（BNC）'],
              ['/zh/economic/12_Value_Capture', '价值捕获'],
              ['/zh/economic/13_Incentive_Mode.md', '激励模型'],
              ['/zh/economic/14_Participants', '参与角色'],
            ],
          },
          {
            title: '代币模型',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/system_structure/01_BNC_release.md', '代币分发'],
              ['/zh/system_structure/02_structure.md', 'BNC 代币结构'],
              ['/zh/system_structure/03_Ecosystem.md', '生态系统'],
              ['/zh/system_structure/04_vToken_holding_incentives.md', 'vToken 持币激励'],
              ['/zh/system_structure/05_initial_parachain_offering(IPO).md', '首次平行链发行（IPO）'],
              ['/zh/system_structure/06_Collater', 'Collater'],
              ['/zh/system_structure/07_slash_insurance_fund', 'Slash Insurance Fund'],
              ['/zh/system_structure/08_unlock_period.md', '解锁期'],
            ],
          },
          {
            title: '风险控制',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/risk_control/risk_control.md', '风险控制'],
            ],
          },
          {
            title: 'Roadmap & Milestone',
            collapsable: false,
            path: '/zh/roadmap_milestone/roadmap.md',
            sidebarDepth: 0,
          },
          {
            title: '结论',
            collapsable: false,
            path: '/zh/conclusion/conclusion.md',
            sidebarDepth: 0,
          }
        ],
      },
    },
  },
};