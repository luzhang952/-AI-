
import React from 'react';
import { HIGHLIGHTS, ICON_MAP } from '../constants';

const Highlights: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">特色功能亮点</h2>
          <p className="text-slate-500">为什么选择智源协同？我们不仅仅是工具，更是您的 AI 设计合伙人。</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((h, idx) => (
            <div key={idx} className="p-6 text-center border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {ICON_MAP[h.icon]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{h.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{h.description}</p>
            </div>
          ))}
        </div>

        {/* Closing Banner */}
        <div className="mt-24 p-8 md:p-20 bg-slate-900 rounded-[50px] text-white overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-slate-900 to-teal-500/10 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">准备好开启<br/><span className="text-blue-400">数智化设计新纪元</span>了吗？</h2>
              <p className="text-slate-300 text-xl font-medium">先进企业，让 AI 成为您的设计加速器。</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all text-xl shadow-2xl shadow-blue-600/30 transform hover:-translate-y-1 active:scale-95">
                申请免费试用
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
