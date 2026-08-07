// Design: Cupertino Clarity — full case study modal with Background/Insight/Action/Result
import { useEffect } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import type { CaseStudy } from '@/data/cases';
import { X } from 'lucide-react';

interface Props {
  caseStudy: CaseStudy;
  open: boolean;
  onClose: () => void;
}

const sections = [
  { key: 'background', zh: '背景', en: 'Background' },
  { key: 'insight', zh: '洞察', en: 'Insight' },
  { key: 'action', zh: '行动', en: 'Action' },
  { key: 'result', zh: '结果', en: 'Result' },
] as const;

export default function CaseModal({ caseStudy, open, onClose }: Props) {
  const { t } = useLang();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-[800px] mx-4 my-8 bg-white rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] max-h-[90vh] overflow-y-auto">
        {/* Hero image */}
        <div className="relative aspect-[16/7] overflow-hidden">
          <img
            src={caseStudy.image}
            alt={t(caseStudy.title.zh, caseStudy.title.en)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
          >
            <X size={16} />
          </button>
          {/* Title overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-[12px] font-medium text-white/70 tracking-wide uppercase mb-2">
              {caseStudy.client}
            </p>
            <h2 className="text-[24px] md:text-[28px] font-semibold text-white leading-[1.2]">
              {t(caseStudy.title.zh, caseStudy.title.en)}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Awards */}
          {caseStudy.awards.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {caseStudy.awards.map(award => (
                <span
                  key={award}
                  className="px-3 py-1.5 bg-[#1D1D1F] text-white text-[12px] font-medium rounded-full"
                >
                  {award}
                </span>
              ))}
            </div>
          )}

          {/* Metrics */}
          {caseStudy.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mb-10 p-5 bg-[#F5F5F7] rounded-xl">
              {caseStudy.metrics.map(m => (
                <div key={m.value} className="text-center">
                  <p className="text-[28px] font-semibold text-[#1D1D1F] leading-none mb-1">{m.value}</p>
                  <p className="text-[12px] text-[#6E6E73]">{t(m.label.zh, m.label.en)}</p>
                </div>
              ))}
            </div>
          )}

          {/* BIAR sections */}
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={section.key} className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F5F5F7] flex items-center justify-center">
                  <span className="text-[11px] font-semibold text-[#0066CC]">0{i + 1}</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-[13px] font-semibold text-[#0066CC] tracking-wide uppercase mb-3">
                    {t(section.zh, section.en)}
                  </h3>
                  <p className="text-[15px] text-[#1D1D1F] leading-[1.7]">
                    {t(
                      (caseStudy as any)[section.key].zh,
                      (caseStudy as any)[section.key].en
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
