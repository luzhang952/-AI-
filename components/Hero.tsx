
import React from 'react';
import { Sparkles, Cpu, Brain, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden hero-bg">
      {/* Decorative AI Elements */}
      <div className="absolute top-20 left-10 text-blue-500/10 float" style={{ animationDelay: '0s' }}>
        <Cpu size={120} />
      </div>
      <div className="absolute bottom-10 right-10 text-teal-500/10 float" style={{ animationDelay: '2s' }}>
        <Brain size={150} />
      </div>
      
      {/* Dynamic Background Particles */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full pulse-soft"></div>
      <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-teal-400 rounded-full pulse-soft" style={{ animationDelay: '2.5s' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur border border-blue-100 rounded-full text-blue-600 text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom duration-700 shadow-sm">
            <Zap size={14} className="fill-current" />
            <span>全新一代 AI 智能辅助设计应用现已发布</span>
          </div>
          
          <div className="relative inline-block mb-8">
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-tight tracking-tighter">
              四方智源<span className="gradient-text block mt-2">AI辅助设计应用</span>
            </h1>
            
            {/* Repositioned Badge: Integrated near the title */}
            <div className="hidden lg:flex absolute -right-24 -bottom-4 glass-card p-5 rounded-3xl shadow-2xl items-center gap-4 animate-float border border-blue-200/50 ai-glow rotate-6 hover:rotate-0 transition-transform cursor-default">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-400 rounded-2xl flex items-center justify-center text-white shadow-lg transform -rotate-6">
                <Sparkles size={24} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mb-1">交付周期</p>
                <p className="text-2xl font-black text-slate-900 tracking-tighter">缩短 25%</p>
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-3xl text-slate-600 mb-0 leading-relaxed max-w-4xl mx-auto font-medium">
            数智驱动，智创未来。深度赋能工程设计全流程，<br className="hidden md:block" />
            助力 <span className="text-blue-600 font-bold px-1 underline decoration-blue-200 underline-offset-8">20+</span> 细分行业实现跨越式数字化转型。
          </p>

          {/* Mobile version of the badge */}
          <div className="lg:hidden mt-8 flex justify-center">
             <div className="glass-card p-4 rounded-2xl shadow-lg flex items-center gap-3 border border-blue-100">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Sparkles size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">交付周期</p>
                  <p className="text-xl font-black text-slate-900">缩短 25%</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
