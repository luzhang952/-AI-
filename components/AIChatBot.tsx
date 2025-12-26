
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, X, Send, Trash2, Bot, User, Sparkles, ChevronDown, Wand2, Search, FileText, Zap } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { marked } from "marked";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const COMMON_PROMPTS = [
  { label: '设计规范查询', icon: <Search size={14} />, text: '请帮我查询建筑设计防火规范中关于疏散距离的最新要求。' },
  { label: '文档大纲生成', icon: <FileText size={14} />, text: '请帮我生成一份市政工程项目建议书的大纲。' },
  { label: '方案润色建议', icon: <Wand2 size={14} />, text: '这是我的初步设计方案描述，请从节能环保角度提供优化建议。' },
  { label: '效率工具推荐', icon: <Zap size={14} />, text: '有哪些 AI 工具可以辅助提升参数化建模的效率？' },
];

const MODELS = [
  { id: 'gemini-3-flash-preview', name: '智源极速版 (Flash)', desc: '响应快速，适合日常咨询' },
  { id: 'gemini-3-pro-preview', name: '智源专业版 (Pro)', desc: '深度推理，处理复杂逻辑' },
];

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [showModelSelect, setShowModelSelect] = useState(false);
  
  // Position tracks the bottom-right corner of the button/window as an anchor
  const [position, setPosition] = useState({ x: window.innerWidth - 80, y: window.innerHeight - 80 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartOffset = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen && 
        chatRef.current && 
        !chatRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle Dragging Logic
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    hasMoved.current = false;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    // Calculate offset from the current position state
    dragStartOffset.current = {
      x: clientX - position.x,
      y: clientY - position.y
    };
  };

  const handleMouseMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    let newX = clientX - dragStartOffset.current.x;
    let newY = clientY - dragStartOffset.current.y;

    // Boundary constraints based on state
    if (isOpen) {
      // Window is roughly 400x600. Anchor point is its relative "button" position.
      // Window layout is: left: x - 340, top: y - 620
      // So left edge: x - 340, top edge: y - 620
      newX = Math.max(340, Math.min(window.innerWidth - 60, newX));
      newY = Math.max(620, Math.min(window.innerHeight - 20, newY));
    } else {
      // Button is 64x64. Anchor is top-left of the button.
      newX = Math.max(20, Math.min(window.innerWidth - 84, newX));
      newY = Math.max(20, Math.min(window.innerHeight - 84, newY));
    }

    if (Math.abs(newX - position.x) > 3 || Math.abs(newY - position.y) > 3) {
      hasMoved.current = true;
    }

    setPosition({ x: newX, y: newY });
  }, [isDragging, isOpen, position]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMouseMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const toggleOpen = () => {
    // Only toggle if we didn't just finish a significant drag
    if (!hasMoved.current) {
      setIsOpen(!isOpen);
    }
  };

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: selectedModel.id,
        contents: text,
        config: {
          systemInstruction: "你是一个专业的工程设计辅助AI助手，名叫'智源助手'，来自深圳市四方智源科技有限公司。你擅长建筑协同设计、业档一体、智能设计等领域的知识。请尽可能使用Markdown格式来组织你的回答（例如：使用加粗重点、无序/有序列表、表格、代码块等），以提高内容的可读性。请用专业、客观且友好的态度回答用户的问题。",
        }
      });

      const assistantMessage: Message = {
        role: 'assistant',
        content: response.text || "抱歉，我暂时无法处理您的请求。"
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "连接服务器超时，请检查您的网络连接或稍后再试。" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    if (confirm("确定要清除所有聊天记录吗？")) {
      setMessages([]);
    }
  };

  // Chat window follows the anchor position with offsets
  const chatWindowStyle: React.CSSProperties = {
    left: position.x - 340,
    top: position.y - 620,
    transition: isDragging ? 'none' : 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  return (
    <>
      {/* Floating Button (Draggable) */}
      <button
        ref={buttonRef}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onClick={toggleOpen}
        style={{ left: position.x, top: position.y }}
        className={`fixed w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center z-[100] hover:scale-110 active:scale-95 transition-transform duration-200 group cursor-move select-none ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
      >
        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
        <MessageSquare size={28} />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-500"></span>
        </span>
      </button>

      {/* Chat Window (Draggable via Header) */}
      <div 
        ref={chatRef}
        style={chatWindowStyle}
        className={`fixed w-[400px] max-w-[calc(100vw-40px)] h-[600px] max-h-[calc(100vh-80px)] bg-white rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] z-[110] flex flex-col overflow-hidden transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}`}
      >
        
        {/* Header - Drag Handle */}
        <div 
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          className="bg-slate-900 p-5 text-white flex items-center justify-between cursor-move select-none active:bg-slate-800 transition-colors shrink-0"
        >
          <div className="flex items-center gap-3 pointer-events-none">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Bot size={22} />
            </div>
            <div>
              <h3 className="font-bold text-sm leading-tight">智源助手</h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"></span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">AI Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <button 
              onClick={(e) => { e.stopPropagation(); clearHistory(); }} 
              className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors" 
              title="清除记录"
            >
              <Trash2 size={18} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} 
              className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Model Selector Tool */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 relative shrink-0">
          <button 
            onClick={() => setShowModelSelect(!showModelSelect)}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors py-1 w-full"
          >
            <Sparkles size={14} className="text-blue-500" />
            当前模型: {selectedModel.name}
            <ChevronDown size={14} className={`ml-auto transition-transform ${showModelSelect ? 'rotate-180' : ''}`} />
          </button>
          
          {showModelSelect && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-xl border border-slate-100 rounded-b-2xl z-20 py-1 overflow-hidden animate-in slide-in-from-top-2 duration-200">
              {MODELS.map(model => (
                <button
                  key={model.id}
                  onClick={() => { setSelectedModel(model); setShowModelSelect(false); }}
                  className={`w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex flex-col ${selectedModel.id === model.id ? 'bg-blue-50' : ''}`}
                >
                  <span className={`text-sm font-bold ${selectedModel.id === model.id ? 'text-blue-600' : 'text-slate-700'}`}>{model.name}</span>
                  <span className="text-[10px] text-slate-500">{model.desc}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Chat Body */}
        <div ref={scrollRef} className="flex-grow overflow-y-auto p-5 space-y-4 scroll-smooth bg-[#fdfdfd]">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-400 mb-4">
                <Bot size={32} />
              </div>
              <h4 className="text-slate-900 font-bold mb-2">欢迎使用智源助手</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                我是您的专属 AI 工程顾问，可以帮您查询规范、优化方案或撰写文档。
              </p>
              
              <div className="w-full space-y-2">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-left mb-2 pl-1">常用功能</p>
                {COMMON_PROMPTS.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(p.text)}
                    className="w-full flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-2xl text-left text-sm text-slate-600 hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition-all group"
                  >
                    <div className="p-1.5 bg-slate-50 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      {p.icon}
                    </div>
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                    {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-3.5 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-slate-100 text-slate-700 shadow-sm rounded-tl-none'}`}>
                    {m.role === 'assistant' ? (
                      <div className="prose-ai" dangerouslySetInnerHTML={{ __html: marked.parse(m.content) as string }} />
                    ) : (
                      m.content
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0">
                  <Bot size={16} />
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Input */}
        <div className="p-4 bg-white border-t border-slate-100 shrink-0">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="relative"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="问问智源助手..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className={`absolute right-2 top-1.5 w-9 h-9 flex items-center justify-center rounded-xl transition-all ${input.trim() ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95' : 'bg-slate-200 text-slate-400'}`}
            >
              <Send size={18} />
            </button>
          </form>
          <p className="text-[10px] text-slate-400 text-center mt-3 font-medium">
            由 四方智源 AI 引擎驱动 · 请注意 AI 回复内容的准确性
          </p>
        </div>
      </div>
    </>
  );
};

export default AIChatBot;
