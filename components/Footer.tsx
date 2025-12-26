
import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Company Info - 4 columns wide on large screens */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-tight">四方智源</span>
                <span className="text-xs tracking-wider uppercase opacity-70">Sifang Source</span>
              </div>
            </div>
            <div className="space-y-4 pr-0 lg:pr-12">
              <p className="text-sm leading-relaxed">
                深圳市四方智源科技有限公司，作为专业的协同设计平台生产厂商及建筑协同设计标准的制定者，在国内有客户400+以上，达到国内外领先水平。
              </p>
              <p className="text-xs leading-relaxed opacity-60 font-light">
                Shenzhen Sifang Source of Wisdom Technology Co., Ltd.(SOW), as a professional collaborative design platform manufacturer and a setter of architectural collaborative design standards, has over 400 customers in China and has reached a leading level both domestically and internationally.
              </p>
            </div>
          </div>

          {/* Product Series - 2 columns wide */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6">产品系列</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">智源协同 (Cloud Design)</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">业档一体 (Cloud Archive)</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">智能设计 AI 引擎</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">智源云桌面解决方案</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">数创综合能力展示</a></li>
            </ul>
          </div>

          {/* Customer Support - 2 columns wide */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6">客户支持</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">帮助中心</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">开发者 API 接入</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">培训与认证</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">协同设计标准下载</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">隐私政策</a></li>
            </ul>
          </div>

          {/* Contact Us - 3 columns wide */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white mb-6">联系我们</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                <span>深圳市罗湖区东晓街道布吉路中设广场B座505</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>0755-25608800</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>support@szsow.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={18} className="text-blue-500 shrink-0" />
                <a href="http://www.szsow.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">www.szsow.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 深圳市四方智源科技有限公司 版权所有</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400">法律声明</a>
            <a href="#" className="hover:text-blue-400">粤ICP备12345678号</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
