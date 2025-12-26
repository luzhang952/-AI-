
import React from 'react';
import { CORE_VALUES } from '../constants';
import { TrendingUp, AlertTriangle, Clock, ArrowUpRight, Database, ShieldCheck } from 'lucide-react';

const Values: React.FC = () => {
  const icons = [TrendingUp, AlertTriangle, Clock];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">产品核心价值</h2>
          <p className="text-lg text-slate-600 font-medium">
            通过全栈 AI 能力深度介入，我们不仅提升了作业速度，更重塑了设计的精度与广度。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {CORE_VALUES.map((v, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-white border border-slate-100 p-8 rounded-3xl h-full shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <div className="text-5xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {v.percentage}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">{v.label}</h4>
                  <p className="text-slate-500 leading-relaxed mb-6 flex-grow">
                    {v.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-blue-600 cursor-pointer group/link">
                    了解技术细节 <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-10 rounded-[40px] border border-blue-100/50 flex flex-col md:flex-row gap-8 items-center hover:shadow-2xl transition-all">
            <div className="w-20 h-20 shrink-0 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
              <Database size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">企业专属知识体系</h3>
              <p className="text-slate-600 leading-relaxed">
                不仅仅是存储，而是将海量合同、制度、图纸转化为可流转的智慧资产，实现经验的高效复用与技术传承。
              </p>
            </div>
          </div>

          <div className="glass-card p-10 rounded-[40px] border border-teal-100/50 flex flex-col md:flex-row gap-8 items-center hover:shadow-2xl transition-all">
            <div className="w-20 h-20 shrink-0 bg-teal-500 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-teal-200">
              <ShieldCheck size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">全流程安全可控</h3>
              <p className="text-slate-600 leading-relaxed">
                深度适配国产化生态体系，提供从数据采集到 AI 推理的全闭环安全防护，确保设计成果与核心数据万无一失。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Values;
