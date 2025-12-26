
import React from 'react';
import { SCENARIOS, ICON_MAP } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Scenarios: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="zhiyuan">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">核心应用场景</h2>
          <p className="text-lg text-slate-600">全流程覆盖，智绘设计新体验。为建筑、交通等 20+ 行业提供全方位智能化赋能。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SCENARIOS.map((s, idx) => (
            <div 
              key={idx} 
              className="group p-8 border border-slate-100 rounded-3xl hover:shadow-xl hover:border-blue-100 transition-all bg-slate-50/30"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {ICON_MAP[s.icon]}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {s.description}
              </p>
              <ul className="space-y-3">
                {s.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-500">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="p-8 bg-blue-600 rounded-3xl flex flex-col justify-center items-center text-center text-white space-y-6">
            <h3 className="text-2xl font-bold">获取您的定制化方案</h3>
            <p className="opacity-90">针对您的特定业务场景，我们的 AI 专家提供免费咨询服务。</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
              立即预约
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scenarios;
