import { ArrowDownRight, Award, Sparkles } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const EXPERTISE = [
  'Brand Strategy',
  'Integrated Marketing',
  'Cultural Partnerships',
  'Creative Direction',
];

const PORTRAIT_URL = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663338382315/uLgUzSxnKNgZMYLR.png';

export default function Hero() {
  const { t } = useLang();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#FBFBFC] pt-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_10%_18%,rgba(0,102,204,0.12),transparent_34%),radial-gradient(circle_at_87%_12%,rgba(29,29,31,0.10),transparent_30%)]" />
      <div className="pointer-events-none absolute bottom-0 left-[46%] h-px w-[70vw] bg-gradient-to-r from-transparent via-[#D2D2D7] to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-[1200px] items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div className="order-2 lg:order-1">
          <div className="animate-fade-up flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0066CC]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0066CC]" />
            {t('品牌策略 · 整合营销 · 创意领导力', 'Brand strategy · Integrated marketing · Creative leadership')}
          </div>

          <h1 className="animate-fade-up delay-100 mt-7 max-w-[720px] text-[clamp(3.2rem,7vw,6.25rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-[#1D1D1F]">
            Scott Wu
            <span className="mt-3 block font-display text-[0.54em] font-normal italic tracking-[-0.03em] text-[#0066CC]">吴思期</span>
          </h1>

          <p className="animate-fade-up delay-150 mt-8 max-w-[600px] text-[clamp(1.35rem,2.2vw,1.9rem)] font-medium leading-[1.28] tracking-[-0.035em] text-[#1D1D1F]">
            {t('让洞察成为文化，让创意创造商业价值。', 'Turning insight into culture — and creativity into commercial value.')}
          </p>

          <p className="animate-fade-up delay-200 mt-5 max-w-[570px] text-[15px] leading-[1.8] text-[#515158] lg:text-[16px]">
            {t(
              '十余年横跨 4A 广告公司与品牌方，连接品牌战略、整合营销与创意执行。专注为汽车、消费与生活方式品牌打造能被看见、被感知、也能转化的增长叙事。',
              'With 10+ years across leading 4A agencies and in-house brand teams, I connect brand strategy, integrated marketing and creative delivery to create growth stories people can see, feel and act on.'
            )}
          </p>

          <div className="animate-fade-up delay-300 mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo('cases')}
              className="group inline-flex items-center gap-3 rounded-full bg-[#1D1D1F] px-5 py-3.5 text-[14px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0066CC] active:scale-[0.97]"
            >
              {t('查看精选作品', 'Explore selected work')}
              <ArrowDownRight size={16} className="transition-transform duration-200 group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-full border border-[#D2D2D7] bg-white/70 px-5 py-3.5 text-[14px] font-medium text-[#1D1D1F] transition-all duration-200 hover:border-[#0066CC] hover:text-[#0066CC] active:scale-[0.97]"
            >
              {t('开始对话', 'Start a conversation')}
            </button>
          </div>

          <div className="animate-fade-up delay-400 mt-12 grid max-w-[560px] grid-cols-3 border-t border-[#D2D2D7] pt-5">
            <Proof value="10+" label={t('行业经验', 'Years in marketing')} />
            <Proof value="7" label={t('代表案例', 'Signature cases')} />
            <Proof value="IAI" label={t('创意营销金奖', 'Gold in creative marketing')} />
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-[500px] lg:order-2 lg:ml-auto lg:mr-0">
          <div className="animate-fade-up delay-100 relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#15171A] shadow-[0_28px_80px_-30px_rgba(0,0,0,0.45)]">
            <img
              className="h-full w-full object-cover object-top opacity-95"
              src={PORTRAIT_URL}
              alt="Scott Wu"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/82 via-transparent to-[#0066CC]/10" />

            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">Selected Work / 2026</p>
                <p className="mt-2 max-w-[240px] font-display text-[26px] leading-[1.05] text-white sm:text-[31px]">
                  {t('构建品牌的下一段增长叙事', 'Building the next growth story')}
                </p>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#1D1D1F] shadow-lg">
                <Sparkles size={17} />
              </div>
            </div>
          </div>

          <div className="relative z-10 -mt-8 ml-5 max-w-[390px] rounded-2xl border border-white/70 bg-white/92 p-4 shadow-[0_14px_38px_rgba(0,0,0,0.12)] backdrop-blur sm:ml-8 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#0066CC]">
                <Award size={17} />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.11em] text-[#6E6E73]">IAI International Advertising Awards</p>
                <p className="mt-1 text-[15px] font-semibold text-[#1D1D1F]">Gold · Creative Marketing</p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 px-1">
            {EXPERTISE.map((item) => (
              <span key={item} className="rounded-full border border-[#D2D2D7] bg-white px-3 py-1.5 text-[11px] font-medium text-[#3A3A3C]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Proof({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-r border-[#D2D2D7] px-4 first:pl-0 last:border-r-0 last:pr-0">
      <p className="text-[21px] font-semibold tracking-[-0.04em] text-[#1D1D1F] sm:text-[25px]">{value}</p>
      <p className="mt-1 text-[10px] leading-[1.35] text-[#6E6E73] sm:text-[11px]">{label}</p>
    </div>
  );
}
