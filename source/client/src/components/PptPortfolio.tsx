import { cases } from "@/data/cases";

const portrait =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663338382315/rLhOZusYtucyAeIu.webp";

const [hycan, jeepFilm, jeepCovid, wuling, anta, jeepSuv, dyson] = cases;

const short = (copy: string, limit: number) =>
  copy.length > limit ? `${copy.slice(0, limit).trim()}…` : copy;

function SlideChrome({
  label,
  context,
  children,
  dark = false,
  className = "",
}: {
  label: string;
  context?: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section className={`ppt-slide ${dark ? "ppt-slide--dark" : ""} ${className}`}>
      <header className="ppt-slide__header" aria-label={label}>
        <span className="ppt-slide__section"><i />{label}</span>
        {context && <span className="ppt-slide__context">{context}</span>}
      </header>
      {children}
    </section>
  );
}

function AwardTag({ children }: { children: React.ReactNode }) {
  return <span className="ppt-award-tag">{children}</span>;
}

function Narrative({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <article className="ppt-narrative">
      <div className="ppt-narrative__label"><b>{index}</b>{label}</div>
      <p>{children}</p>
    </article>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="ppt-metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Media({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <img className={`ppt-media ${className}`} src={src} alt={alt} loading="lazy" />;
}

export default function PptPortfolio() {
  return (
    <main className="ppt-portfolio">
      <SlideChrome label="INTEGRATED MARKETING PORTFOLIO" dark className="ppt-cover">
        <section className="ppt-cover__copy">
          <h1>Scott Wu</h1>
          <p className="ppt-cover__chinese">吴思期</p>
          <span className="ppt-cover__blue-rule" />
          <h2>Selected Work</h2>
          <p className="ppt-cover__subline">Senior Creative Copywriter &amp; Storyteller · 10+ Years Across Top 4A Agencies &amp; Corporate Brand</p>
          <div className="ppt-cover__proofs">
            <div><b>IAI Gold</b><span>Creative Marketing</span></div>
            <div><b>MSc · GPA 3.7</b><span>City University of Hong Kong</span></div>
            <div><b>10+ Years</b><span>Leading 4A &amp; Corporate Brand</span></div>
          </div>
        </section>
        <aside className="ppt-cover__portrait">
          <Media src={portrait} alt="Scott Wu professional portrait" />
        </aside>
        <footer className="ppt-cover__footer">
          <span>EXPERTISE</span><span>Brand Strategy</span><span>Integrated Marketing Communications</span><span>Cross-Industry Partnership Marketing</span><span>Content &amp; Visual Creative Direction</span><span>Cross-Cultural Team &amp; Agency Management</span>
        </footer>
      </SlideChrome>

      <SlideChrome label="ABOUT" context="Scott Wu · Selected Work" className="ppt-about">
        <section className="ppt-about__intro">
          <h2>Senior Creative Copywriter<br />&amp; Storyteller</h2>
          <p>Scott Wu is a seasoned creative copywriter and integrated marketing professional with over 10 years of cross-functional experience spanning top-tier 4A agencies (Publicis, BlueFocus, Hylink) and corporate brand management at HYCAN. A "dot-line-plane" creative: from writing compelling copy and crafting Big Ideas (dot), to orchestrating cross-media campaign narratives (line), to managing brand strategy and cross-functional collaboration at scale (plane).</p>
          <div className="ppt-about__proofs">
            <div><b>IAI Gold Award</b><span>Creative Marketing</span></div>
            <div><b>MSc · GPA 3.7 · Distinction</b><span>City University of Hong Kong (QS 52)</span></div>
            <div><b>10+ Years</b><span>4A Agencies &amp; Corporate Brand</span></div>
          </div>
        </section>
        <aside className="ppt-about__expertise">
          <p className="ppt-small-heading">CORE EXPERTISE</p>
          {[
            "Creative Copywriting & Storytelling",
            "Big Idea Conceptualization",
            "Consumer Insight Mining",
            "Cross-Media Content Production",
            "Brand Strategy & Repositioning",
            "Cross-Functional & Agency Management",
          ].map((item) => <p className="ppt-expertise-item" key={item}><i />{item}</p>)}
          <div className="ppt-about__clients"><b>KEY CLIENTS</b><span>Jeep · Dyson · Anta · Wuling · HYCAN · Starbucks · Pernod Ricard</span></div>
        </aside>
      </SlideChrome>

      <SlideChrome label="SELECTED WORK" context="Scott Wu · Selected Work" className="ppt-overview">
        <h2>7 Cases Across Automotive, Lifestyle &amp; E-Commerce</h2>
        <div className="ppt-overview__table">
          <div className="ppt-overview__head"><span>#</span><span>CLIENT</span><span>CAMPAIGN</span><span>KEY RESULT</span></div>
          {cases.map((item, index) => (
            <article className="ppt-overview__row" key={item.id}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <span>{item.client.replace(" × ", " × ")}</span>
              <div><strong>{item.title.en}</strong><small>{item.tags.slice(0, 3).join(" · ")}</small></div>
              <div className="ppt-overview__result"><strong>{item.metrics[0]?.value ?? "—"}</strong><small>{item.metrics[0]?.label.en ?? ""}</small></div>
            </article>
          ))}
        </div>
      </SlideChrome>

      <SlideChrome label="CASE 01" context="HYCAN Intelligent Technology · Gen Z IP Marketing" className="ppt-case ppt-case--hycan">
        <section className="ppt-case__left">
          <h2>HYCAN × Ling Cage<br />Deep Cross-Over Integrated Marketing</h2>
          <p className="ppt-case__tagline">Building a distinctive Gen Z cross-over campaign anchored in Chinese animation IP</p>
          <div className="ppt-grid-two">
            <Narrative index="01" label="BACKGROUND">{short(hycan.background.en, 220)}</Narrative>
            <Narrative index="02" label="INSIGHT">{short(hycan.insight.en, 215)}</Narrative>
            <Narrative index="03" label="ACTION">{short(hycan.action.en, 280)}</Narrative>
            <Narrative index="04" label="RESULT">{short(hycan.result.en, 220)}</Narrative>
          </div>
        </section>
        <div className="ppt-case__art ppt-case__art--tall"><Media src={hycan.image} alt={hycan.title.en} /></div>
        <footer className="ppt-metric-bar ppt-metric-bar--three">{hycan.metrics.map((m) => <Metric key={m.value} value={m.value} label={m.label.en} />)}</footer>
      </SlideChrome>

      <SlideChrome label="Case 02" context="Jeep × GAC · Shanghai Auto Show" className="ppt-case ppt-case--film">
        <div className="ppt-case__awards-top"><AwardTag>IAI Gold · Creative Marketing</AwardTag><AwardTag>IAI Silver · Content Marketing</AwardTag></div>
        <section className="ppt-case__left ppt-case__left--narrative">
          <h2>A Film for 10,000,000<br />Jeeepers Worldwide</h2>
          <Narrative index="" label="BACKGROUND">{short(jeepFilm.background.en, 255)}</Narrative>
          <Narrative index="" label="INSIGHT">{short(jeepFilm.insight.en, 255)}</Narrative>
          <Narrative index="" label="ACTION">{short(jeepFilm.action.en, 300)}</Narrative>
          <Narrative index="" label="RESULT">{short(jeepFilm.result.en, 260)}</Narrative>
        </section>
        <section className="ppt-case__right ppt-case__right--film">
          <div className="ppt-case__art"><Media src={jeepFilm.image} alt={jeepFilm.title.en} /></div>
          <div className="ppt-metric-row">{jeepFilm.metrics.map((m) => <Metric key={m.value} value={m.value} label={m.label.en} />)}</div>
          <div className="ppt-case__award-bottom"><AwardTag>IAI Gold · Creative Marketing</AwardTag><AwardTag>IAI Silver · Content Marketing</AwardTag><AwardTag>Jin Xuan · Brand Innovation</AwardTag></div>
        </section>
      </SlideChrome>

      <SlideChrome label="CASE 03" context="Jeep × GAC · Jeep Fights the Pandemic" className="ppt-case ppt-case--covid">
        <div className="ppt-case__awards-top"><AwardTag>MAD Modern Ad Award · Integrated Marketing</AwardTag></div>
        <section className="ppt-covid__media"><Media src={jeepCovid.image} alt={jeepCovid.title.en} /><div>{jeepCovid.title.en}</div></section>
        <section className="ppt-covid__content">
          <p className="ppt-covid__quote">“Brand responsibility and community resilience in a crisis”</p>
          <div className="ppt-grid-two">
            <Narrative index="01" label="BACKGROUND">{short(jeepCovid.background.en, 235)}</Narrative>
            <Narrative index="02" label="INSIGHT">{short(jeepCovid.insight.en, 235)}</Narrative>
            <Narrative index="03" label="ACTION">{short(jeepCovid.action.en, 255)}</Narrative>
            <Narrative index="04" label="RESULT">{short(jeepCovid.result.en, 240)}</Narrative>
          </div>
        </section>
        <footer className="ppt-covid__metrics"><Metric value="3" label="Strategic Goals Met" /><Metric value="MAD" label="Industry Award Won" /><Metric value="Crisis → Asset" label="Brand Image Strengthened" /></footer>
      </SlideChrome>

      <SlideChrome label="CASE 04" context="Wuling × PANTONE UNIVERSE × ELLE" className="ppt-case ppt-case--wuling">
        <section className="ppt-wuling__media"><Media src={wuling.image} alt={wuling.title.en} /></section>
        <section className="ppt-wuling__content">
          <h2>Wuling MINI EV Macaron<br />Integrated Launch Campaign</h2>
          <p className="ppt-case__tagline">Redefining the micro-car through the language of color</p>
          <div className="ppt-grid-two">
            <Narrative index="01" label="BACKGROUND">{short(wuling.background.en, 230)}</Narrative>
            <Narrative index="02" label="INSIGHT">{short(wuling.insight.en, 230)}</Narrative>
            <Narrative index="03" label="ACTION">{short(wuling.action.en, 270)}</Narrative>
            <Narrative index="04" label="RESULT">{short(wuling.result.en, 240)}</Narrative>
          </div>
        </section>
        <footer className="ppt-wuling__metrics"><Metric value="45,000" label="FIRM PRE-ORDERS" /><Metric value="3" label="CROSS-BRAND PARTNERS" /><div className="ppt-wordmarks"><span>PANTONE</span><span>ELLE</span><span>Celebrity Endorsement</span></div></footer>
      </SlideChrome>

      <SlideChrome label="CASE 05 · ANTA × TMALL 11.11" context="Scott Wu · Selected Work" className="ppt-case ppt-case--anta">
        <section className="ppt-anta__copy">
          <h2>Anta&apos;s 11.11 Weather Station</h2>
          <p className="ppt-case__tagline">One creative concept, seven IPs, one explosive 11.11</p>
          <div className="ppt-chip-row"><span>E-Commerce Marketing</span><span>IP Co-branding</span><span>Social Media</span></div>
          <Narrative index="" label="BACKGROUND">{short(anta.background.en, 250)}</Narrative>
          <Narrative index="" label="INSIGHT">{short(anta.insight.en, 240)}</Narrative>
          <Narrative index="" label="ACTION">{short(anta.action.en, 280)}</Narrative>
          <Narrative index="" label="RESULT">{short(anta.result.en, 250)}</Narrative>
        </section>
        <section className="ppt-anta__side"><div className="ppt-case__art"><Media src={anta.image} alt={anta.title.en} /></div><div className="ppt-metric-row">{anta.metrics.map((m) => <Metric key={m.value} value={m.value} label={m.label.en} />)}</div></section>
      </SlideChrome>

      <SlideChrome label="CASE 06" context="Jeep × GAC · Experiential Product Launch" className="ppt-case ppt-case--suv">
        <div className="ppt-case__awards-top"><AwardTag>IAI Silver · Creative Marketing</AwardTag></div>
        <section className="ppt-suv__hero"><Media src={jeepSuv.image} alt={jeepSuv.title.en} /><div className="ppt-suv__overlay"><h2>Jeep Professional SUV Evolution<br />— WHAT&apos;S NEW</h2><p>Fitness pop-up × product launch — making engine performance tangible</p></div></section>
        <section className="ppt-suv__columns">
          <Narrative index="01" label="BACKGROUND">{short(jeepSuv.background.en, 220)}</Narrative>
          <Narrative index="02" label="INSIGHT">{short(jeepSuv.insight.en, 220)}</Narrative>
          <Narrative index="03" label="ACTION">{short(jeepSuv.action.en, 240)}</Narrative>
          <Narrative index="04" label="RESULT">{short(jeepSuv.result.en, 220)}</Narrative>
        </section>
        <footer className="ppt-suv__metrics"><Metric value="IAI Silver" label="CREATIVE MARKETING AWARD" /><Metric value="2" label="CORE PRODUCTS LAUNCHED" /><Metric value="Compass GSE-T4 · Grand Commander PHEV" label="PRODUCTS FEATURED" /><em>“A benchmark for experiential automotive marketing.”</em></footer>
      </SlideChrome>

      <SlideChrome label="CASE 07 · DYSON" context="Scott Wu · Selected Work" className="ppt-case ppt-case--dyson">
        <section className="ppt-dyson__copy">
          <h2>Dyson Hair Science Museum</h2>
          <p className="ppt-case__tagline">Reimagining the annual PR event — where technology meets life narrative</p>
          <div className="ppt-chip-row"><span>PR Event</span><span>KOL Marketing</span><span>Experiential</span><span>Beauty Tech</span></div>
          <Narrative index="01" label="BACKGROUND">{short(dyson.background.en, 245)}</Narrative>
          <Narrative index="02" label="INSIGHT">{short(dyson.insight.en, 260)}</Narrative>
          <Narrative index="03" label="ACTION">{short(dyson.action.en, 250)}</Narrative>
          <Narrative index="04" label="RESULT">{short(dyson.result.en, 245)}</Narrative>
        </section>
        <section className="ppt-dyson__side"><div className="ppt-case__art"><Media src={dyson.image} alt={dyson.title.en} /></div><div className="ppt-metric-row"><Metric value="5+" label="PLATFORMS COVERED" /><Metric value="10+" label="CELEBRITY STYLISTS" /><Metric value="Authority" label="HAIR TECH POSITIONING" /></div></section>
      </SlideChrome>

      <SlideChrome label="GET IN TOUCH" dark className="ppt-closing">
        <section className="ppt-closing__copy">
          <h2>Let&apos;s Build<br />Something<br />Remarkable.</h2>
          <p>Whether for brand strategy consulting, integrated marketing collaboration, or career opportunities — open to meaningful conversations.</p>
          <div className="ppt-closing__contact"><div><b>EMAIL</b><a href="mailto:wusiqi565478@gmail.com">wusiqi565478@gmail.com</a></div><div><b>PHONE</b><a href="tel:+8613162312285">+86 131-6231-2285</a></div><div><b>LINKEDIN</b><span>Scott Wu · 吴思期</span></div></div>
        </section>
        <span className="ppt-closing__monogram">SW</span>
        <footer className="ppt-closing__footer"><em>“Great marketing doesn&apos;t just sell products — it creates culture.”</em><span>SCOTT WU · SELECTED WORK · 2026</span></footer>
      </SlideChrome>
    </main>
  );
}
