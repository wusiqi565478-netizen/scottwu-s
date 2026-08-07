// Design: Cupertino Clarity — full-width timeline layout, career in reverse chronological order
import { useEffect, useRef } from 'react';
import { useLang } from '@/contexts/LanguageContext';

function useScrollReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

// Reverse chronological order — most recent first
const experiences = [
  {
    company: { zh: '自由顾问 & 香港城市大学硕士', en: 'Freelance Consultant & CityU HK Master\'s Studies' },
    role: { zh: '独立营销顾问', en: 'Independent Marketing Consultant' },
    period: 'Jun 2024 – Jun 2026',
    desc: {
      zh: '为 IM Motors、浙江源安利服装产业园等品牌提供整合营销策略咨询。同期就读香港城市大学全球商业管理硕士（QS 52，GPA 3.7，优秀），系统提升国际商业战略与跨文化领导力。',
      en: 'Delivered IMC strategies for IM Motors and Zhejiang Yuan\'anli Apparel Industrial Park. Concurrently completed MSc Global Business Management at City University of Hong Kong (QS 52, GPA 3.7, Distinction) — transitioning from marketing specialist to strategic leader.',
    },
  },
  {
    company: { zh: '合创汽车科技（广州）', en: 'HYCAN Intelligent Technology (Guangzhou)' },
    role: { zh: '品牌规划专家（副总监级）', en: 'Brand Planning Expert (Deputy Director Level)' },
    period: 'Jun 2021 – May 2024',
    desc: {
      zh: '主导品牌"中高端"重新定位，品牌认知度从 50% 以下提升至 65.1%。领导 0-1 海外品牌基础设施建设，支持进入欧洲、土耳其及东南亚市场。',
      en: 'Led "mid-to-high-end" brand repositioning, lifting brand awareness from under 50% to 65.1%. Spearheaded 0-to-1 overseas brand infrastructure, supporting market entry into Europe, Turkey, and Southeast Asia.',
    },
  },
  {
    company: { zh: '蓝标传媒（上海）', en: 'Hylink (Shanghai)' },
    role: { zh: '社交策略副总监', en: 'Associate Director — Social Strategy' },
    period: 'May 2020 – Jun 2021',
    desc: {
      zh: '统领 5 人社交团队，覆盖微信、抖音、小红书、微博全平台。主导五菱宏光 MINIEV 马卡龙上市整合传播，助力 45,000 个大定订单。策划"五菱口罩春晚"事件，话题冲上微博热搜前三。',
      en: 'Orchestrated the viral Wuling Macaron launch (45,000 pre-orders) and created the "Wuling Masks at Spring Festival Gala" PR event — top-3 trending on Weibo. Led a 5-person social team across WeChat, Douyin, Xiaohongshu, and Weibo.',
    },
  },
  {
    company: { zh: '蓝色光标（上海）', en: 'BlueFocus (Shanghai)' },
    role: { zh: '高级创意文案', en: 'Senior Creative Copywriter' },
    period: 'Aug 2017 – May 2020',
    desc: {
      zh: '服务 Jeep、戴森等国际品牌，主导 20+ 次提案，赢得安踏、星巴克（抖音运营）、戴森等顶级客户。主导上海车展"大电影"创意概念，荣获 IAI 创意营销金奖。',
      en: 'Served Jeep and Dyson as long-term strategic partner. Spearheaded 20+ pitches, winning Anta, Starbucks (Douyin), and Dyson. Led the Shanghai Auto Show "Epic Film" concept — IAI Creative Marketing Gold Award.',
    },
  },
  {
    company: { zh: '阳狮集团（上海）', en: 'Publicis Groupe (Shanghai)' },
    role: { zh: '社区经理', en: 'Community Manager' },
    period: 'Mar 2015 – Aug 2017',
    desc: {
      zh: '管理保乐力加（绝对伏特加、马爹利）传播服务，每周向国际团队进行英文汇报。构建 CRM 会员社区，核心用户转化率提升 5%。',
      en: "Managed Pernod Ricard (Absolut Vodka, Martell) communications with weekly English reporting to the international team. Built integrated CRM community, lifting core user conversion by 5%.",
    },
  },
];

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="bg-[#F5F5F7] py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div
          className="mb-16"
          ref={useScrollReveal(0)}
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)' }}
        >
          <p className="text-[13px] font-medium text-[#0066CC] tracking-[0.12em] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC] inline-block" />
            {t('关于我', 'About')}
          </p>
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-semibold text-[#1D1D1F] leading-[1.08] tracking-tight max-w-[700px]">
            {t(
              '用洞察驱动创意，用策略创造商业价值',
              'Insight-driven creativity. Strategy that creates commercial value.'
            )}
          </h2>
        </div>

        {/* Bio text */}
        <div
          className="max-w-[820px] mb-16"
          ref={useScrollReveal(100)}
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s 0.1s cubic-bezier(0.23,1,0.32,1), transform 0.6s 0.1s cubic-bezier(0.23,1,0.32,1)' }}
        >
          <p className="text-[17px] lg:text-[18px] text-[#1D1D1F] leading-[1.75] mb-5">
            {t(
              '我是吴思琦（Scott Wu），拥有超过 10 年跨顶级 4A 广告公司与品牌方的整合营销经验。我的工作横跨品牌架构、整合营销策略与创意执行，擅长将创意叙事与商业增长有机连接。',
              "I'm Scott Wu — an Integrated Marketing Expert with 10+ years of cross-functional experience across top-tier 4A agencies and corporate brand management. My work bridges brand architecture, integrated marketing strategy, and creative execution, consistently connecting storytelling with commercial growth."
            )}
          </p>
          <p className="text-[17px] text-[#6E6E73] leading-[1.75]">
            {t(
              '目前就读于香港城市大学全球商业管理硕士（GPA 3.7，优秀），以系统化的全球视野和跨文化领导力，致力于推动品牌价值与市场扩张。',
              'I hold a Master of Global Business Management from City University of Hong Kong (QS 52, GPA 3.7, Distinction), equipping me with a systematic global perspective and cross-cultural leadership to drive brand value and international market expansion.'
            )}
          </p>
        </div>

        {/* Career Timeline — full width, vertical */}
        <div
          ref={useScrollReveal(200)}
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s 0.2s cubic-bezier(0.23,1,0.32,1), transform 0.6s 0.2s cubic-bezier(0.23,1,0.32,1)' }}
        >
          <p className="text-[12px] font-semibold text-[#6E6E73] tracking-[0.12em] uppercase mb-8">
            {t('职业经历', 'Career')}
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#D2D2D7]" />

            <div className="space-y-0">
              {experiences.map((exp, i) => (
                <div key={i} className="flex gap-6 pb-10 last:pb-0">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 mt-1.5 relative z-10">
                    <div className="w-[15px] h-[15px] rounded-full bg-white border-2 border-[#0066CC] flex items-center justify-center">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#0066CC]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-1 lg:gap-8 pb-2">
                    {/* Date + company */}
                    <div>
                      <p className="text-[11px] text-[#6E6E73] tracking-wide uppercase mb-1 font-medium">{exp.period}</p>
                      <p className="text-[13px] text-[#0066CC] font-medium leading-snug">{t(exp.company.zh, exp.company.en)}</p>
                    </div>
                    {/* Role + description */}
                    <div>
                      <p className="text-[15px] font-semibold text-[#1D1D1F] mb-2 leading-snug">{t(exp.role.zh, exp.role.en)}</p>
                      <p className="text-[14px] text-[#6E6E73] leading-[1.65]">{t(exp.desc.zh, exp.desc.en)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
