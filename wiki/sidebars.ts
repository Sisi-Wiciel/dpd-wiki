import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '欢迎',
    },
    {
      type: 'category',
      label: '症状与诊断',
      collapsed: false,
      items: [
        'symptoms/depersonalization',
        'symptoms/derealization',
        'symptoms/diagnostic-criteria',
        'symptoms/common-triggers',
      ],
    },
    {
      type: 'category',
      label: '应对策略',
      collapsed: false,
      items: [
        'strategies/grounding-techniques',
        'strategies/therapy-approaches',
        'strategies/emergency-support',
        'strategies/daily-management',
      ],
    },
    {
      type: 'category',
      label: '参考文献',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: '文献分类',
          collapsed: false,
          items: [
            'references/dpdr',
            'references/symptoms',
            'references/treatment',
            'references/mechanisms',
            'references/epidemiology',
            'references/scales',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '资源',
      collapsed: true,
      items: [
        'resources/reading-list',
        'resources/professional-help',
        'resources/online-communities',
      ],
    },
    {
      type: 'doc',
      id: 'disclaimer',
      label: '免责声明',
    },
    {
      type: 'doc',
      id: 'about',
      label: '关于本站',
    },
  ],
};

export default sidebars;
