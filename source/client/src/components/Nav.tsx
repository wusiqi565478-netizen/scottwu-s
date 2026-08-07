// Design: Cupertino Clarity — Apple-inspired nav with blur backdrop, language toggle, and mobile menu
import { useEffect, useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { X, Menu } from 'lucide-react';

export default function Nav() {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navItems = [
    { id: 'about', zh: '关于', en: 'About Me' },
    { id: 'cases', zh: '案例', en: 'Work' },
    { id: 'contact', zh: '联系', en: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-white/95 backdrop-blur-xl border-b border-[#D2D2D7]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
          {/* Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-0.5 group"
            aria-label="Scott Wu"
          >
            <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4 C2 2 4 1 6 1 L10 1 C12 1 13 2.5 12 4.5 L9 10 C8 12 9 13.5 11 13.5 L14 13.5 C16 13.5 17 15 16 17 L14 21" stroke="#1D1D1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#0066CC] transition-colors"/>
              <path d="M16 1 L20 14 L24 6 L28 14 L32 1" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[14px] text-[#1D1D1F] hover:text-[#0066CC] transition-colors font-medium"
              >
                {t(item.zh, item.en)}
              </button>
            ))}
          </nav>

          {/* Right: Language toggle + mobile menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="text-[13px] font-medium text-[#6E6E73] hover:text-[#0066CC] transition-colors px-2 py-1 rounded-md hover:bg-[#F5F5F7]"
            >
              {lang === 'zh' ? 'EN' : '中文'}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F5F5F7] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} className="text-[#1D1D1F]" /> : <Menu size={18} className="text-[#1D1D1F]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className="fixed inset-0 z-40 bg-white flex flex-col pt-14 md:hidden"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
      >
        <nav className="flex flex-col px-8 pt-12 gap-1">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-[32px] font-semibold text-[#1D1D1F] py-4 border-b border-[#F5F5F7] hover:text-[#0066CC] transition-colors active:opacity-60"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {t(item.zh, item.en)}
            </button>
          ))}
        </nav>
        <div className="px-8 mt-auto pb-12">
          <p className="text-[13px] text-[#6E6E73]">Scott Wu · Brand Marketing Expert</p>
          <p className="text-[13px] text-[#6E6E73] mt-1">scott904@gmail.com</p>
        </div>
      </div>
    </>
  );
}
