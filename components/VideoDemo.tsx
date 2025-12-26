
import React, { useState, useRef } from 'react';
import { Play, Pause, Maximize, Volume2, Sparkles, Database, Terminal, Shield } from 'lucide-react';

const VideoDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative" id="demo">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border border-blue-100">
            <Sparkles size={14} className="animate-spin-slow" />
            <span>AI Interaction Demo</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">AI 智能操作演示</h2>
          <p className="text-lg text-slate-600">
            沉浸式体验 AI 如何在毫秒间理解您的设计意图，并为您提供精准的方案建议与自动化校审。
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-teal-400/20 rounded-full blur-3xl animate-pulse"></div>

          {/* Video Container with Scanning Line */}
          <div className="relative rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-slate-200 bg-slate-950 group scanline">
            <video 
              ref={videoRef}
              className="w-full h-auto aspect-video object-cover transition-transform duration-700 group-hover:scale-[1.01] opacity-90"
              poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-animation-3136-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Controls Overlay */}
            <div className={`absolute inset-0 bg-slate-950/40 transition-opacity duration-500 flex items-center justify-center z-20 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
              <button 
                onClick={togglePlay}
                className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:bg-white/20 active:scale-95 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                {isPlaying ? <Pause size={40} fill="currentColor" /> : <Play size={40} fill="currentColor" className="ml-2" />}
              </button>
            </div>

            {/* Floating Info Labels */}
            {!isPlaying && (
              <>
                <div className="absolute top-10 right-10 z-10 flex flex-col gap-3 pointer-events-none">
                  <div className="bg-slate-900/80 backdrop-blur border border-blue-500/30 p-3 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-right duration-500">
                    <Terminal size={16} className="text-blue-400" />
                    <div className="text-[10px] text-white font-mono">CODE GEN ACTIVE</div>
                  </div>
                  <div className="bg-slate-900/80 backdrop-blur border border-teal-500/30 p-3 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-right delay-200 duration-500">
                    <Database size={16} className="text-teal-400" />
                    <div className="text-[10px] text-white font-mono">SYNERGY READY</div>
                  </div>
                </div>

                <div className="absolute top-10 left-10 pointer-events-none space-y-3 hidden md:block z-10">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 animate-in fade-in slide-in-from-left duration-700">
                    <div className="flex items-center gap-2 text-xs text-blue-300 font-bold uppercase mb-1">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
                      AI 正在分析...
                    </div>
                    <div className="text-white text-sm">识别到 42 个设计图层</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 animate-in fade-in slide-in-from-left delay-300 duration-700">
                    <div className="flex items-center gap-2 text-xs text-teal-300 font-bold uppercase mb-1">
                      <Shield size={12} />
                      安全校验中
                    </div>
                    <div className="text-white text-sm font-medium">合规性 100% 通过</div>
                  </div>
                </div>
              </>
            )}

            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950/90 to-transparent flex items-center justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono opacity-70 tracking-widest">SYSTEM_LIVE</span>
                <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-blue-500 animate-pulse"></div>
                </div>
              </div>
              <div className="flex gap-4">
                <Volume2 size={18} className="cursor-pointer hover:text-blue-400 transition-colors" />
                <Maximize size={18} className="cursor-pointer hover:text-blue-400 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
