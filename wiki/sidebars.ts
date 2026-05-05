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
        'strategies/landing-techniques',
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
            'references/综述/综述',
            'references/神经影像学/神经影像学',
            'references/机制/机制',
            'references/症状/症状',
            'references/治疗/治疗',
            'references/流行病学/流行病学',
            'references/量表/量表',
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
