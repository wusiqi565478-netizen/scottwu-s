// Design: Cupertino Clarity — case studies grid with centralized drawer state
import { useEffect, useRef, useState, useMemo } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { cases } from '@/data/cases';
import CaseCard from './CaseCard';
import CaseDrawer from './CaseDrawer';

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-fade-up');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Cases() {
  const { t } = useLang();
  const headerRef = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Extract unique industry/category tags
  const filters = useMemo(() => {
    const allTags = cases.flatMap(c => c.tags);
    const uniqueTags = Array.from(new Set(allTags));
    // Prioritize key categories requested: Auto, E-commerce, PR
    const priority = ['汽车', '电商营销', '公关活动'];
    const sorted = uniqueTags.sort((a, b) => {
      const idxA = priority.indexOf(a);
      const idxB = priority.indexOf(b);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.localeCompare(b);
    });
    return ['All', ...sorted.slice(0, 5)]; // Keep it clean with top 5 tags
  }, []);

  const filteredCases = useMemo(() => {
    if (activeFilter === 'All') return cases;
    return cases.filter(c => c.tags.includes(activeFilter));
  }, [activeFilter]);

  // When opening a case, we need to map the filtered index back to the global cases array
  // because CaseDrawer expects the global index and full cases array for navigation.
  const handleOpenCase = (filteredIndex: number) => {
    const targetCase = filteredCases[filteredIndex];
    const globalIndex = cases.findIndex(c => c.id === targetCase.id);
    setActiveIndex(globalIndex);
  };

  return (
    <section id="cases" className="bg-white py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 opacity-0">
          <p className="text-[13px] font-medium text-[#0066CC] tracking-[0.12em] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC] inline-block" />
            {t('精选案例', 'Selected Work')}
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-[48px] font-semibold text-[#1D1D1F] leading-[1.08] tracking-tight">
              {t('让品牌被记住', 'Ideas That Move Markets')}
            </h2>
            <div className="flex flex-col items-start md:items-end gap-4">
              <p className="text-[15px] text-[#6E6E73] max-w-[320px] md:text-right">
                {t(
                  '点击任意案例，查看完整的背景、洞察、行动与结果。',
                  'Click any case to explore the full Background, Insight, Action & Result.'
                )}
              </p>
              
              {/* Filter pills */}
              <div className="flex flex-wrap gap-2">
                {filters.map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors ${
                      activeFilter === filter 
                        ? 'bg-[#1D1D1F] text-white' 
                        : 'bg-[#F5F5F7] text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#E5E5EA]'
                    }`}
                  >
                    {filter === 'All' ? t('全部', 'All Work') : filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cases grid */}
        {filteredCases.length > 0 ? (
          <div className="space-y-16">
            {/* First case is featured (full width) */}
            <div className="animate-fade-up" key={`featured-${filteredCases[0].id}`}>
              <CaseCard 
                caseStudy={filteredCases[0]} 
                index={0} 
                featured 
                onOpen={() => handleOpenCase(0)} 
              />
            </div>

            {/* 2-column grid for the rest */}
            {filteredCases.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {filteredCases.slice(1).map((c, i) => (
                  <div key={`grid-${c.id}`} className="animate-fade-up" style={{ animationDelay: `${(i % 4) * 100}ms` }}>
                    <CaseCard 
                      caseStudy={c} 
                      index={i + 1} 
                      onOpen={() => handleOpenCase(i + 1)} 
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-[#6E6E73]">{t('没有找到符合该标签的案例。', 'No cases found for this filter.')}</p>
          </div>
        )}
      </div>

      {/* Centralized drawer — renders outside the grid */}
      <CaseDrawer
        cases={cases}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
