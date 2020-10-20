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
              ['/en/maketing_overview/02_conflicts_between_staking_and_defi_rewards.md', 'Competition between Staking and DeFi rewards'],
              ['/en/maketing_overview/03_conflicts_between_liquidity_and_security_in_pos.md', 'Conflicts between Liquidity and Security in PoS'],
              ['/en/maketing_overview/04_conflicts_between_liquidity_and_security_in_pos.md', 'Conflicts between Liquidity and Security in PoS'],
            ],
          },
          {
            title: 'Project',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/en/Project_introduction/01_project_introduction.md', 'Project Introduction'],
              ['/en/Project_introduction/02_implementation_plan.md', 'Implementation Plan'],
              ['/en/Project_introduction/03_business_staking.md', 'Business - Staking'],
              ['/en/Project_introduction/04_business_ipo.md', 'Buiness - IPO'],
            ],
          },
          {
            title: 'Economic',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/en/economic/01_economic_objectives.md', 'Economic Objectives'],
              ['/en/economic/02_voucher_token_(vtoken).md', 'Voucher Token (vToken)'],
              ['/en/economic/03_staking_derivatives.md', 'Staking Derivatives'],
              ['/en/economic/04_reward_settlement_forms.md', 'Reward Settlement Forms'],
              ['/en/economic/05_reward_generation.md', 'Reward Generation'],
              ['/en/economic/06_retain_governance_right.md', 'Retain Governance Right'],
              ['/en/economic/07_impossible_triangle_of_derivatives.md', 'Impossible Triangle of Derivatives'],
              ['/en/economic/08_vtokenmint_incentives.md', 'vTokenmint Incentives'],
              ['/en/economic/09_vtokenmint_channel_funds.md', 'vTokenmint Channel Funds'],
              ['/en/economic/10_risk_control.md', 'Risk Control'],
              ['/en/economic/11_bifrost_native_token(bnc).md', 'Bifrost Native Token (BNC)'],
              ['/en/economic/12_value_capture.md', 'Value Capture'],
              ['/en/economic/13_incentive_model.md', 'Retain Governance Right'],
              ['/en/economic/14_participants.md', 'Participants'],
            ],
          },
          {
            title: 'Token Structure',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/en/system_structure/01_token_distribution.md', 'Token Distribution'],
              ['/en/system_structure/02_bnc_stracture.md', 'BNC Structure'],
              ['/en/system_structure/03_ecosystem.md', 'Ecosystem'],
              ['/en/system_structure/04_vtoken_holding_incentives.md', 'vToken Holding Incentives'],
              ['/en/system_structure/05_initial_parallel_chain_offering_(ipo).md', 'Initial Parallel Chain Offering (IPO)'],
              ['/en/system_structure/06_collator.md', 'Collator'],
              ['/en/system_structure/07_slash_insurance_fund.md', 'Slash Insurance Fund'],
              ['/en/system_structure/08_the_unlocking_period.md', 'The Unlocking Period'],
            ],
          },
          {
            title: 'Risk Control',
            collapsable: false,
            path: '/en/risk_control.md',
            sidebarDepth: 0,
          },
          {
            title: 'Roadmap & Milestone',
            collapsable: false,
            path: '/en/road_map.md',
            sidebarDepth: 0,
          },
          {
            title: 'Conclusion',
            collapsable: false,
            path: '/en/conclusion.md',
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
              ['/zh/marketing_overview/02_conflicts_between_staking_and_defi_rewards.md', 'Staking 和 DeFi 收益竞争问题'],
              ['/zh/marketing_overview/03_conflicts_between_liquidity_and_security_in_pos.md', 'PoS 网络流动性和安全性互斥问题'],
              ['/zh/marketing_overview/04_conflicts_between_liquidity_and_security_in_pos.md', 'PoS 网络流动性和安全性互斥问题'],
            ],
          },
          {
            title: '项目',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/Project_Introduction/01_project_introduction.md', '项目简介'],
              ['/zh/Project_Introduction/02_implementation_plan.md', '实施方案'],
              ['/zh/Project_Introduction/03_business_staking.md', '典型业务-Staking'],
              ['/zh/Project_Introduction/04_business_ipo.md', '典型业务 - IPO'],
            ],
          },
          {
            title: '经济模型',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/economic/01_economic_objectives.md', '经济模型设计目标'],
              ['/zh/economic/02_voucher_token_(vtoken)', 'Voucher Token(vToken)'],
              ['/zh/economic/03_staking_derivatives', 'Staking 衍生品'],
              ['/zh/economic/04_reward_settlement_forms.md', '收益结算方式'],
              ['/zh/economic/05_reward_generation.md', '收益产生方式'],
              ['/zh/economic/06_retain_governance_right.md', '保留治理权'],
              ['/zh/economic/07_impossible_trangle.md', '衍生品不可能三角'],
              ['/zh/economic/08_vtokenmint_incentives', 'vToken 铸币挖矿'],
              ['/zh/economic/09_vtokenmint_channel_funds.md', 'vToken 铸币渠道金'],
              ['/zh/economic/10_risk_control', '风险控制'],
              ['/zh/economic/11_bifrost_native_Token.md', 'Bifrost Native Token（BNC）'],
              ['/zh/economic/12_value_capture', '价值捕获'],
              ['/zh/economic/13_incentive_mode.md', '激励模型'],
              ['/zh/economic/14_participants', '参与角色'],
            ],
          },
          {
            title: '代币模型',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/system_structure/01_bnc_release.md', '代币分发'],
              ['/zh/system_structure/02_structure.md', 'BNC 代币结构'],
              ['/zh/system_structure/03_ecosystem.md', '生态系统'],
              ['/zh/system_structure/04_vtoken_holding_incentives.md', 'vToken 持币激励'],
              ['/zh/system_structure/05_initial_parachain_offering(ipo).md', '首次平行链发行（IPO）'],
              ['/zh/system_structure/06_collater', 'Collater'],
              ['/zh/system_structure/07_slash_insurance_fund', 'Slash Insurance Fund'],
              ['/zh/system_structure/08_unlock_period.md', '解锁期'],
            ],
          },
          {
            title: '风险控制',
            collapsable: false,
            path: '/zh/risk_control/risk_control.md',
            sidebarDepth: 0,
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