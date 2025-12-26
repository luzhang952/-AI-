
import React from 'react';
import { ICON_MAP } from '../constants';

const Capabilities: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="capabilities">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">核心 AI 能力框架</h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            基于领先的底层技术底座与全栈赋能架构，提供从数据处理到机器学习的闭环支持。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Layer 1: 底层技术底座 */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                {ICON_MAP.Layers}
              </div>
              <h3 className="text-2xl font-semibold">底层技术底座</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CapabilityCard 
                title="多模型融合" 
                content="基于 Deepseek、Qwen 等基础大模型，支持模型微调与推理加速。"
              />
              <CapabilityCard 
                title="多模态支持" 
                content="覆盖文本、图像、表格，具备 OCR 与核心识别能力。"
              />
              <CapabilityCard 
                title="数据处理体系" 
                content="适配结构化与非结构化数据，构建高质量特征向量集。"
              />
              <CapabilityCard 
                title="高效存储检索" 
                content="依托向量库实现毫秒级语义检索与生成式关联检索。"
              />
            </div>
          </div>

          {/* Layer 2: 核心技术架构 */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400">
                {ICON_MAP.Network}
              </div>
              <h3 className="text-2xl font-semibold">核心技术架构</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CapabilityCard 
                title="知识图谱" 
                content="行业知识关联与图谱建模，支撑智能推荐与推理分析。"
              />
              <CapabilityCard 
                title="Agent 智能体" 
                content="任务编排、多轮对话与意图分析，适配复杂业务。"
              />
              <CapabilityCard 
                title="RAG 应用框架" 
                content="Prompt 工程与语料标注，实现知识提炼与问答。"
              />
              <CapabilityCard 
                title="机器学习支撑" 
                content="参数调优与模型评估，持续优化 AI 性能效果。"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CapabilityCard: React.FC<{title: string, content: string}> = ({ title, content }) => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
    <h4 className="text-lg font-bold mb-2 text-white">{title}</h4>
    <p className="text-sm text-slate-400 leading-relaxed">{content}</p>
  </div>
);

export default Capabilities;
