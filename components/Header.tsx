
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>四方智源</span>
              <span className={`text-[10px] tracking-widest uppercase opacity-80 ${isScrolled ? 'text-slate-600' : 'text-slate-600 md:text-blue-100'}`}>Sifang Source</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.label} 
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 flex items-center gap-1 py-2 ${
                    isScrolled ? 'text-slate-600' : 'text-slate-700 md:text-white'
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                </a>

                {/* Dropdown Menu */}
                {link.children && (
                  <div className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 transition-all duration-200 origin-top transform ${
                    activeDropdown === link.label ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}>
                    {link.children.map((child) => (
                      <a 
                        key={child.label} 
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all transform hover:scale-105">
              立即咨询
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-4 flex flex-col gap-2 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="flex flex-col">
              <div 
                className="flex items-center justify-between py-2 px-4 text-slate-900 font-medium hover:bg-slate-50 rounded-lg cursor-pointer"
                onClick={() => link.children ? setActiveDropdown(activeDropdown === link.label ? null : link.label) : setMobileMenuOpen(false)}
              >
                <a href={link.children ? undefined : link.href}>{link.label}</a>
                {link.children && <ChevronDown size={16} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
              </div>
              
              {link.children && activeDropdown === link.label && (
                <div className="ml-4 flex flex-col gap-1 border-l-2 border-slate-100 pl-4 py-1">
                  {link.children.map((child) => (
                    <a 
                      key={child.label} 
                      href={child.href}
                      className="text-slate-500 text-sm py-2 px-4 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 px-4 pb-4">
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">
              立即咨询
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
