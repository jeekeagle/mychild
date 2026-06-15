import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// 《五只小鸭去游泳》侧栏
// 每篇故事 = 顶级页面（docs/stories/{NN}-{slug}/index.md → id = "story-NN-slug/index"）
// Docusaurus 默认从文件名生成 id：会自动去前导数字，所以是 "story-01-xxx/index"
const sidebars: SidebarsConfig = {
  storiesSidebar: [
    {
      type: 'category',
      label: '📚 所有故事',
      collapsed: false,
      items: [

        'stories/01/index',

        'stories/02/index',

        'stories/03/index',

        'stories/04/index',

      ],
    },
  ],
};

export default sidebars;
