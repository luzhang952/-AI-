
import React from 'react';
import { 
  Database, 
  Search, 
  PenTool, 
  ShieldCheck, 
  BarChart3, 
  MessageSquareShare, 
  Cpu, 
  Network, 
  Layers, 
  Zap,
  Globe,
  Settings,
  RefreshCw,
  Rocket
} from 'lucide-react';

export const NAV_LINKS = [
  { label: '首页', href: '#' },
  { 
    label: '产品中心', 
    href: '#',
    children: [
      { label: '智源协同', href: '#zhiyuan' },
      { label: '业档一体', href: '#' },
      { label: '智能设计', href: '#' },
      { label: '数创综合', href: '#' }
    ]
  },
  { label: '客户案例', href: '#' },
  { label: '解决方案', href: '#' },
  { label: '关于我们', href: '#' },
  { label: '联系我们', href: '#' }
];

export const SCENARIOS = [
  {
    title: '智能知识管理',
    description: '构建企业专属知识门户，全周期管理生产业务知识沉淀。',
    icon: 'Database',
    features: ['支持合同、制度、图纸、资料各类文件上传与分类', '实现文档 AI 识别与自动生成', '毫秒级语义检索与智能推荐']
  },
  {
    title: '辅助设计与建模',
    description: 'AI 驱动的可视化方案生成与参数化建模，提升设计效率。',
    icon: 'PenTool',
    features: ['快速生成各类型工程项目高清效果图方案', '依托 AI 算法实现精准参数化建模', '智能推荐设计素材与知识关联调用']
  },
  {
    title: '智能校审与质检',
    description: '精准识别设计错误与合规问题，确保设计一致性. ',
    icon: 'ShieldCheck',
    features: ['识别图纸与文档中的设计错误，减少 40% 错误率', '高效比对设计版本差异，降低返工成本', '支持多场景校审，全程留痕可追溯']
  },
  {
    title: '业务管理与数据分析',
    description: '实时监控设计进度，为决策提供精准数据支撑。',
    icon: 'BarChart3',
    features: ['实时监控设计进度并生成分析报告', '数据可视化展示核心业务指标', '基于历史数据的交付周期预测']
  },
  {
    title: '高效协同与交互',
    description: '自然语言驱动的智能办公，重塑人机交互体验。',
    icon: 'MessageSquareShare',
    features: ['智能生成投标文件、讲话稿等各类文档', '搭载智能语音助手，支持语音指令操作', '个性化入口与智能推荐，适配多岗位需求']
  }
];

export const CORE_VALUES = [
  { percentage: '35%', label: '效率提升', description: '通过自动化处理与智能推荐，大幅减少重复劳动' },
  { percentage: '40%', label: '错误率降低', description: '智能校审精准识别潜在问题，保障设计质量' },
  { percentage: '25%', label: '周期缩短', description: '优化设计流程，加速协同效率，提升交付速度' }
];

export const HIGHLIGHTS = [
  { title: '全流程自动化', description: '覆盖从设计、校审到分析的全流程 AI 赋能', icon: 'Rocket' },
  { title: '低门槛适配', description: '无需复杂培训，贴合设计师既有使用习惯', icon: 'Settings' },
  { title: '定制化支持', description: '支持按需配置与开发，适配不同行业场景', icon: 'Globe' },
  { title: '持续迭代优化', description: '紧跟技术趋势，定期更新模型保持领先性', icon: 'RefreshCw' }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Database: <Database className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  PenTool: <PenTool className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  MessageSquareShare: <MessageSquareShare className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Network: <Network className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Globe: <Globe className="w-5 h-5" />,
  Settings: <Settings className="w-5 h-5" />,
  RefreshCw: <RefreshCw className="w-5 h-5" />,
  Rocket: <Rocket className="w-5 h-5" />
};
