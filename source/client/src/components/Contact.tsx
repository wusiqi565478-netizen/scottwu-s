// Design: Cupertino Clarity — clean near-white contact section with dark inversion
import { useLang } from '@/contexts/LanguageContext';
import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="bg-[#1D1D1F] py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle geometric accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0066CC]/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#0066CC]/5 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] relative z-10">
          <p className="text-[13px] font-medium text-[#0066CC] tracking-[0.12em] uppercase mb-6">
            {t('联系', 'Contact')}
          </p>
          <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-semibold text-white leading-[1.08] tracking-tight mb-6">
            {t(
              '期待与您合作',
              "Let's build something remarkable."
            )}
          </h2>
          <p className="text-[17px] text-[#86868B] leading-[1.6] mb-12">
            {t(
              '无论是品牌战略咨询、整合营销合作，还是职业机会探讨，欢迎随时联系。',
              'Whether for brand strategy consulting, integrated marketing collaboration, or career opportunities — I would love to connect.'
            )}
          </p>

          <div className="space-y-5">
            <a
              href="mailto:scott904@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#0066CC] transition-colors">
                <Mail size={16} className="text-white" />
              </div>
              <span className="text-[15px] text-[#F5F5F7] group-hover:text-[#0066CC] transition-colors">
                scott904@gmail.com
              </span>
            </a>
            <a
              href="tel:+86202253269"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#0066CC] transition-colors">
                <Phone size={16} className="text-white" />
              </div>
              <span className="text-[15px] text-[#F5F5F7] group-hover:text-[#0066CC] transition-colors">
                +86 (20) 225-3269
              </span>
            </a>
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Linkedin size={16} className="text-white/50" />
              </div>
              <span className="text-[15px] text-[#F5F5F7]/50">
                Scott Wu (Siqi Wu) · LinkedIn
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-[1200px] mx-auto px-6 mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
        <p className="text-[13px] text-[#6E6E73]">
          © 2026 Scott Wu · {t('保留所有权利', 'All rights reserved')}
        </p>
        <p className="text-[13px] text-[#6E6E73]">
          {t('香港城市大学 全球商业管理硕士', 'MSc Global Business Management · City University of Hong Kong (QS 52)')}
        </p>
      </div>
    </section>
  );
}
