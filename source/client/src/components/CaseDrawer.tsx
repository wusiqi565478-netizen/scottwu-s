// Design: Cupertino Clarity — right-side panel (desktop) + bottom sheet (mobile)
// UX: Always-visible close, prev/next navigation, background remains visible
import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import type { CaseStudy } from '@/data/cases';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface Props {
  cases: CaseStudy[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const BIAR = [
  { key: 'background', label: 'Background', color: '#0066CC' },
  { key: 'insight', label: 'Insight', color: '#5856D6' },
  { key: 'action', label: 'Action', color: '#34C759' },
  { key: 'result', label: 'Result', color: '#FF9500' },
] as const;

export default function CaseDrawer({ cases, activeIndex, onClose, onNavigate }: Props) {
  const { t } = useLang();
  const isOpen = activeIndex !== null;
  const caseStudy = activeIndex !== null ? cases[activeIndex] : null;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Scroll to top when case changes
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [activeIndex]);

  // Lock body scroll on mobile when open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, isMobile]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && activeIndex !== null && activeIndex < cases.length - 1) {
        onNavigate(activeIndex + 1);
      }
      if (e.key === 'ArrowLeft' && activeIndex !== null && activeIndex > 0) {
        onNavigate(activeIndex - 1);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, activeIndex, cases.length, onClose, onNavigate]);

  if (!caseStudy) return null;

  const hasPrev = activeIndex !== null && activeIndex > 0;
  const hasNext = activeIndex !== null && activeIndex < cases.length - 1;

  // ── MOBILE: bottom sheet ──────────────────────────────────────────────────
  if (isMobile) {
    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
          style={{
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: isOpen ? 'auto' : 'none',
          }}
          onClick={onClose}
        />

        {/* Bottom sheet */}
        <div
          className="fixed bottom-0 left-0 right-0 z-[100] bg-white rounded-t-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.2)]"
          style={{
            height: '92dvh',
            transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        >
          {/* Drag handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 rounded-full bg-[#D2D2D7]" />
          </div>

          {/* Header bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#F5F5F7]">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 text-[#0066CC] text-[15px] font-medium active:opacity-60 transition-opacity"
            >
              <ArrowLeft size={18} />
              Back
            </button>
            <p className="text-[13px] text-[#6E6E73] font-medium">{caseStudy.client}</p>
            {/* Prev/Next */}
            <div className="flex gap-2">
              <button
                onClick={() => hasPrev && activeIndex !== null && onNavigate(activeIndex - 1)}
                disabled={!hasPrev}
                className="w-8 h-8 rounded-full bg-[#F5F5F7] flex items-center justify-center disabled:opacity-30 active:scale-95 transition-transform"
              >
                <ChevronLeft size={16} className="text-[#1D1D1F]" />
              </button>
              <button
                onClick={() => hasNext && activeIndex !== null && onNavigate(activeIndex + 1)}
                disabled={!hasNext}
                className="w-8 h-8 rounded-full bg-[#F5F5F7] flex items-center justify-center disabled:opacity-30 active:scale-95 transition-transform"
              >
                <ChevronRight size={16} className="text-[#1D1D1F]" />
              </button>
            </div>
          </div>

          {/* Scrollable content */}
          <div ref={scrollRef} className="overflow-y-auto h-[calc(100%-88px)] overscroll-contain">
            {/* Hero image */}
            <div className="relative aspect-[16/8] overflow-hidden">
              <img
                src={caseStudy.image}
                alt={t(caseStudy.title.zh, caseStudy.title.en)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <h2 className="text-[20px] font-semibold text-white leading-[1.25]">
                  {t(caseStudy.title.zh, caseStudy.title.en)}
                </h2>
              </div>
            </div>

            <div className="px-5 py-6">
              {/* Awards */}
              {caseStudy.awards.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudy.awards.map(award => (
                    <span key={award} className="px-3 py-1.5 bg-[#1D1D1F] text-white text-[11px] font-medium rounded-full">
                      {award}
                    </span>
                  ))}
                </div>
              )}

              {/* Metrics */}
              {caseStudy.metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mb-8 p-4 bg-[#F5F5F7] rounded-2xl">
                  {caseStudy.metrics.map(m => (
                    <div key={m.value} className="text-center">
                      <p className="text-[22px] font-semibold text-[#1D1D1F] leading-none mb-1">{m.value}</p>
                      <p className="text-[11px] text-[#6E6E73] leading-tight">{t(m.label.zh, m.label.en)}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* BIAR sections */}
              <div className="space-y-7">
                {BIAR.map((section) => (
                  <div key={section.key}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: section.color }} />
                      <h3 className="text-[12px] font-semibold tracking-[0.1em] uppercase" style={{ color: section.color }}>
                        {section.label}
                      </h3>
                    </div>
                    <p className="text-[15px] text-[#1D1D1F] leading-[1.7]">
                      {t((caseStudy as any)[section.key].zh, (caseStudy as any)[section.key].en)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Case counter */}
              <div className="mt-10 pt-6 border-t border-[#F5F5F7] flex items-center justify-between">
                <p className="text-[13px] text-[#6E6E73]">
                  Case {(activeIndex ?? 0) + 1} of {cases.length}
                </p>
                {hasNext && (
                  <button
                    onClick={() => activeIndex !== null && onNavigate(activeIndex + 1)}
                    className="flex items-center gap-2 text-[#0066CC] text-[14px] font-medium active:opacity-60 transition-opacity"
                  >
                    Next case <ChevronRight size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ── DESKTOP: right-side panel ─────────────────────────────────────────────
  return (
    <>
      {/* Dim overlay — click to close, but background remains visible */}
      <div
        className="fixed inset-0 z-[90]"
        style={{
          background: 'rgba(0,0,0,0.25)',
          backdropFilter: 'blur(2px)',
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.35s ease',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        onClick={onClose}
      />

      {/* Side panel */}
      <div
        className="fixed top-0 right-0 bottom-0 z-[100] bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.15)]"
        style={{
          width: 'min(560px, 100vw)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-xl border-b border-[#F5F5F7]">
          <div className="flex items-center justify-between px-8 py-4">
            {/* Close */}
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-[#6E6E73] hover:text-[#1D1D1F] transition-colors group"
            >
              <div className="w-7 h-7 rounded-full bg-[#F5F5F7] group-hover:bg-[#E5E5EA] flex items-center justify-center transition-colors">
                <X size={14} />
              </div>
              <span className="text-[13px] font-medium">Close</span>
            </button>

            {/* Case navigation */}
            <div className="flex items-center gap-3">
              <span className="text-[12px] text-[#6E6E73]">
                {(activeIndex ?? 0) + 1} / {cases.length}
              </span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => hasPrev && activeIndex !== null && onNavigate(activeIndex - 1)}
                  disabled={!hasPrev}
                  className="w-7 h-7 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] flex items-center justify-center disabled:opacity-30 transition-colors active:scale-95"
                  title="Previous case (←)"
                >
                  <ChevronLeft size={14} className="text-[#1D1D1F]" />
                </button>
                <button
                  onClick={() => hasNext && activeIndex !== null && onNavigate(activeIndex + 1)}
                  disabled={!hasNext}
                  className="w-7 h-7 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] flex items-center justify-center disabled:opacity-30 transition-colors active:scale-95"
                  title="Next case (→)"
                >
                  <ChevronRight size={14} className="text-[#1D1D1F]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div ref={scrollRef} className="overflow-y-auto h-[calc(100vh-57px)] overscroll-contain">
          {/* Hero image */}
          <div className="relative aspect-[16/8] overflow-hidden">
            <img
              src={caseStudy.image}
              alt={t(caseStudy.title.zh, caseStudy.title.en)}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
            <div className="absolute bottom-6 left-8 right-8">
              <p className="text-[11px] font-medium text-white/60 tracking-[0.1em] uppercase mb-2">
                {caseStudy.client}
              </p>
              <h2 className="text-[26px] font-semibold text-white leading-[1.2]">
                {t(caseStudy.title.zh, caseStudy.title.en)}
              </h2>
              <p className="text-[14px] text-white/70 mt-2 leading-[1.5]">
                {t(caseStudy.tagline.zh, caseStudy.tagline.en)}
              </p>
            </div>
          </div>

          <div className="px-8 py-8">
            {/* Awards */}
            {caseStudy.awards.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {caseStudy.awards.map(award => (
                  <span key={award} className="px-3 py-1.5 bg-[#1D1D1F] text-white text-[11px] font-medium rounded-full">
                    {award}
                  </span>
                ))}
              </div>
            )}

            {/* Metrics */}
            {caseStudy.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mb-10 p-5 bg-[#F5F5F7] rounded-2xl">
                {caseStudy.metrics.map(m => (
                  <div key={m.value} className="text-center">
                    <p className="text-[28px] font-semibold text-[#1D1D1F] leading-none mb-1.5">{m.value}</p>
                    <p className="text-[11px] text-[#6E6E73] leading-tight">{t(m.label.zh, m.label.en)}</p>
                  </div>
                ))}
              </div>
            )}

            {/* BIAR sections */}
            <div className="space-y-8">
              {BIAR.map((section, i) => (
                <div key={section.key} className="group">
                  <div className="flex items-start gap-5">
                    {/* Number + color bar */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-0.5">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-semibold"
                        style={{ background: section.color }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-[12px] font-semibold tracking-[0.12em] uppercase mb-3"
                        style={{ color: section.color }}
                      >
                        {section.label}
                      </h3>
                      <p className="text-[15px] text-[#1D1D1F] leading-[1.75]">
                        {t((caseStudy as any)[section.key].zh, (caseStudy as any)[section.key].en)}
                      </p>
                    </div>
                  </div>
                  {i < BIAR.length - 1 && (
                    <div className="ml-[52px] mt-6 border-t border-[#F5F5F7]" />
                  )}
                </div>
              ))}
            </div>

            {/* Next case CTA */}
            {hasNext && (
              <div className="mt-12 pt-8 border-t border-[#E5E5EA]">
                <p className="text-[11px] text-[#6E6E73] tracking-wide uppercase mb-3">Next Case</p>
                <button
                  onClick={() => activeIndex !== null && onNavigate(activeIndex + 1)}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#F5F5F7] hover:bg-[#E5E5EA] transition-colors group active:scale-[0.99]"
                >
                  <div className="text-left">
                    <p className="text-[11px] text-[#0066CC] font-medium tracking-wide uppercase mb-1">
                      {cases[activeIndex! + 1].client}
                    </p>
                    <p className="text-[15px] font-semibold text-[#1D1D1F] leading-[1.3]">
                      {t(cases[activeIndex! + 1].title.zh, cases[activeIndex! + 1].title.en)}
                    </p>
                  </div>
                  <ChevronRight size={20} className="text-[#6E6E73] group-hover:text-[#0066CC] transition-colors flex-shrink-0 ml-4" />
                </button>
              </div>
            )}

            {/* Bottom padding */}
            <div className="h-12" />
          </div>
        </div>
      </div>
    </>
  );
}
