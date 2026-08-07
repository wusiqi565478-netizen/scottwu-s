// Design: Cupertino Clarity — minimal case card with hover reveal
// State is lifted to Cases parent; card only fires onOpen callback
import { useLang } from '@/contexts/LanguageContext';
import type { CaseStudy } from '@/data/cases';

interface Props {
  caseStudy: CaseStudy;
  index: number;
  featured?: boolean;
  onOpen: () => void;
}

export default function CaseCard({ caseStudy, index, featured = false, onOpen }: Props) {
  const { t } = useLang();

  return (
    <article
      className="case-card cursor-pointer group"
      onClick={onOpen}
      style={{ animationDelay: `${index * 80}ms` }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}
      aria-label={`View case: ${t(caseStudy.title.zh, caseStudy.title.en)}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden rounded-2xl bg-[#F5F5F7] mb-6 ${featured ? 'aspect-[21/9]' : 'aspect-[16/9]'}`}>
        <img
          src={caseStudy.image}
          alt={t(caseStudy.title.zh, caseStudy.title.en)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Awards */}
        {caseStudy.awards.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {caseStudy.awards.slice(0, 2).map(award => (
              <span
                key={award}
                className="px-2 py-1 bg-[#1D1D1F]/80 backdrop-blur-sm text-white text-[11px] font-medium rounded-md"
              >
                {award}
              </span>
            ))}
          </div>
        )}

        {/* View hint */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <span className="px-3 py-1.5 bg-white text-[#1D1D1F] text-[12px] font-medium rounded-full shadow-sm">
            {t('查看详情', 'View Case')} →
          </span>
        </div>
      </div>

      {/* Meta */}
      <p className="text-[11px] font-semibold text-[#0066CC] tracking-[0.1em] uppercase mb-2 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC] inline-block" />
        {caseStudy.client}
      </p>
      <h3 className={`font-semibold text-[#1D1D1F] leading-[1.3] mb-2 group-hover:text-[#0066CC] transition-colors duration-200 ${featured ? 'text-[26px]' : 'text-[20px]'}`}>
        {t(caseStudy.title.zh, caseStudy.title.en)}
      </h3>
      <p className="text-[14px] text-[#6E6E73] leading-[1.5] mb-4">
        {t(caseStudy.tagline.zh, caseStudy.tagline.en)}
      </p>

      {/* Metrics */}
      {caseStudy.metrics.length > 0 && (
        <div className="flex gap-6 pt-4 border-t border-[#D2D2D7]">
          {caseStudy.metrics.slice(0, 3).map(m => (
            <div key={m.value}>
              <p className="text-[18px] font-semibold text-[#1D1D1F]">{m.value}</p>
              <p className="text-[11px] text-[#6E6E73]">{t(m.label.zh, m.label.en)}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

