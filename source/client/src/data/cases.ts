// Design: Cupertino Clarity — Apple-inspired minimalism
// All case study data for Scott Wu's portfolio

export interface CaseStudy {
  id: string;
  client: string;
  title: { zh: string; en: string };
  tagline: { zh: string; en: string };
  awards: string[];
  image: string;
  background: { zh: string; en: string };
  insight: { zh: string; en: string };
  action: { zh: string; en: string };
  result: { zh: string; en: string };
  metrics: Array<{ value: string; label: { zh: string; en: string } }>;
  tags: string[];
}

export const cases: CaseStudy[] = [
  {
    id: 'jeep-trailhawk-selec-speed',
    client: 'Jeep × GAC',
    title: {
      zh: 'Jeep 自由光 Trailhawk® — 智能攀岩模式',
      en: 'Jeep Cherokee Trailhawk® — Selec-Speed Campaign',
    },
    tagline: {
      zh: '降低消费者对越野驾驶复杂度的心理认知门槛',
      en: 'Lowering the psychological barrier to professional off-roading',
    },
    awards: [],
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663338382315/uQGHBhEqYEVTsWoa.jpg',
    background: {
      zh: '越野常被视为专业玩家的“高门槛运动”：既需要复杂的车辆操控，也要求驾驶者具备丰富经验。对于普通驾驶者而言，越野的技术难度与操作压力，往往会阻碍他们尝试这一体验。',
      en: 'Off-roading is often perceived as an exclusive sport with a high barrier to entry, requiring complex vehicle handling and extensive driving experience. For average drivers, the technical difficulty and operational pressure often deter them from attempting the experience.',
    },
    insight: {
      zh: '用户并非不向往越野的自由与挑战，而是害怕“不会操作”“驾驭不了”。如果能够将复杂的越野驾驶流程简化，让用户把注意力集中在最核心的方向控制上，专业越野能力便能变得更易感知、更愿尝试。',
      en: 'Consumers do not lack the desire for the freedom and challenge of off-roading; rather, they fear "not knowing how to operate" or "losing control." If the complex off-road driving process could be simplified, allowing users to focus purely on steering, professional off-road capabilities would become far more accessible and appealing.',
    },
    action: {
      zh: '围绕全新自由光 Trailhawk® 的 Selec-Speed 智能攀岩模式，提出“今天起，‘傻瓜’也能越野了”的传播主张，通过视频创意将专业越野能力转化为直观操作体验。只需按下 4WD LOW、开启攀岩模式、设定爬坡速度，车辆即可辅助驾驶者完成攀爬脱困，用户只需专注把控方向盘。',
      en: 'Centering on the Selec-Speed Crawl Control of the new Jeep Cherokee Trailhawk®, we launched the campaign "From Today, Even a \'Fool\' Can Off-Road." Through creative video content, we translated professional off-road capabilities into an intuitive, effortless operation: simply engage 4WD LOW, activate Selec-Speed, set the crawl speed, and steer — the vehicle automatically manages throttle and braking to conquer complex terrains.',
    },
    result: {
      zh: '案例通过“傻瓜式操作”的反差表达，降低了消费者对越野驾驶复杂度的心理认知门槛，并将 Selec-Speed 智能攀岩模式的产品优势转译为“轻松实现专业越野”的用户价值。',
      en: 'By leveraging the contrast of "foolproof operation," the campaign successfully lowered the perceived psychological barrier to off-road driving, translating the technical superiority of the Selec-Speed system into the clear consumer value of "effortless professional off-roading."',
    },
    metrics: [
      { value: '"Foolproof"', label: { zh: '核心创意主张', en: 'Core Creative Concept' } },
      { value: 'Selec-Speed', label: { zh: '智能攀岩模式', en: 'Crawl Control' } },
      { value: 'Effortless', label: { zh: '越野体验降维', en: 'Off-Road Experience' } },
    ],
    tags: ['产品营销', '视频创意', '汽车'],
  },
  {
    id: 'hycan-lingcage',
    client: 'HYCAN 合创汽车',
    title: {
      zh: '合创汽车 × 灵笼 深度跨界整合营销',
      en: "HYCAN × Ling Cage — Deep Cross-Over Integrated Marketing",
    },
    tagline: {
      zh: '以国漫 IP 为核心，打造 Gen Z 沉浸式跨界营销',
      en: 'Building an immersive Gen Z cross-over campaign anchored in Chinese animation IP',
    },
    awards: [],
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663338382315/phtZWenaGuYelYYo.png',
    background: {
      zh: '为塑造年轻、先锋的 Gen Z 品牌形象，合创汽车携手现象级国漫 IP《灵笼》，以内容共创为核心，打造贯穿线上与线下的沉浸式跨界营销。我主导本次跨界营销联动的整体推进，全权负责从合作资源对接、商务洽谈与合同签署，到整合营销活动策划、跨部门协同与落地执行把控的全流程工作。',
      en: 'To build a young, forward-looking brand image for Gen Z, HYCAN partnered with the hit Chinese animation IP Ling Cage, creating an immersive cross-over campaign spanning both online and offline touchpoints, with content co-creation at its core. I led the overall delivery of this cross-over campaign — taking full ownership from partnership coordination and commercial negotiations to integrated campaign planning, cross-functional collaboration, and execution control.',
    },
    insight: {
      zh: '《灵笼》拥有高度忠诚的年轻粉丝群体，其世界观与合创汽车的科技感、未来感高度契合。IP 情绪价值可以直接转化为品牌好感度，而非单纯的流量借用。',
      en: "Ling Cage commands a deeply loyal young fanbase whose futuristic worldview aligns naturally with HYCAN's tech-forward identity. IP emotional value can translate directly into brand favorability — not merely borrowed traffic.",
    },
    action: {
      zh: '① 剧情共创：围绕《灵笼》番外剧情共创及新一季预热，将汽车产品深度植入 IP 世界观，相关视频在 B 站获得百万级播放与互动。② 虚拟偶像代言：首次邀请虚拟偶像担任车型代言人，并在广州车展通过直播技术实现虚拟偶像与现场媒体的实时互动，微博直播内容播放量达 76.4 万。③ 同款潮改：推出《灵笼》同款潮改车型及改装配件，将 IP 情绪价值延展至产品体验，完成从"追内容"到"拥有同款"的转化闭环。',
      en: '① Story Co-creation: Embedded HYCAN vehicles into Ling Cage spin-off storylines and season previews; related Bilibili content earned millions of views and engagements. ② Virtual Idol Endorsement: First-ever virtual idol brand ambassador, with a live auto-show interaction between the virtual character and media at Guangzhou Auto Show — Weibo livestream reached 764,000 views. ③ Customization Products: Launched Ling Cage-themed custom car models and accessories, extending IP passion into product ownership and closing the conversion loop.',
    },
    result: {
      zh: '通过剧情共创、虚拟代言、车展互动与潮改产品的整合营销，合创成功深化了与 Z 世代年轻人之间的情感连接，品牌好感度提升至 90.1%。',
      en: 'Through an integrated approach combining story-driven co-creation, virtual endorsement, auto-show interaction, and customized products, HYCAN successfully deepened its emotional connection with Gen Z consumers, raising brand favorability to 90.1%.',
    },
    metrics: [
      { value: '1M+', label: { zh: 'B站播放与互动', en: 'Bilibili Views & Engagements' } },
      { value: '764K', label: { zh: '微博直播播放量', en: 'Weibo Livestream Views' } },
      { value: '90.1%', label: { zh: 'Gen Z 品牌好感度', en: 'Gen Z Brand Favorability' } },
    ],
    tags: ['Gen Z营销', 'IP跨界', '内容共创', '汽车'],
  },
  {
    id: 'jeep-film',
    client: 'Jeep × GAC',
    title: {
      zh: '献给全世界 10,000,000 Jeeper 的电影',
      en: 'A Film for 10,000,000 Jeeepers Worldwide',
    },
    tagline: {
      zh: '上海车展创意营销，让每一位 Jeeper 成为主角',
      en: 'Shanghai Auto Show — making every Jeeper the star',
    },
    awards: ['IAI Gold · Creative Marketing', 'IAI Silver · Content Marketing', 'Jin Xuan · Brand Innovation'],
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663338382315/QvcVFAoPZpgotgcJ.jpg',
    background: {
      zh: '在上海国际车展之际，Jeep 需要突破传统发布会形式，打造一场具有创新性的品牌体验，同时在竞争激烈的车展环境中脱颖而出，传递品牌独特的 Jeeper 文化与情感温度。',
      en: 'At the Shanghai International Auto Show, Jeep needed to break away from conventional launch formats and create an innovative brand experience — standing out in a fiercely competitive environment while communicating the unique Jeeper culture and emotional warmth.',
    },
    insight: {
      zh: '对于 Jeep 而言，每一位车主的故事和经历都是独一无二的，他们是品牌态度和情怀最真实的体现。如果 Jeep 是一部电影，那么每一位 Jeeper 都是主角——这种情感共鸣是最强大的品牌资产。',
      en: "Every Jeep owner's story is unique — they are the most authentic embodiment of the brand's attitude and spirit. If Jeep were a movie, every Jeeper would be the lead. This emotional resonance is the brand's most powerful asset.",
    },
    action: {
      zh: '提出"大电影"概念，在车展进行高频度的社交话题烘托，将 Jeep 众多国产车主的故事以电影语言呈现。邀请 KOL 作为发布会主持人，串讲三部 Jeep 大电影，从品牌、车主、产品三个维度传达品牌主张，并通过话题矩阵进行立体传播。',
      en: 'We conceived the "Epic Film" concept — building high-frequency social buzz around the Auto Show, presenting Jeep owners\' stories through cinematic language. KOLs served as hosts, narrating three Jeep films across brand, owner, and product dimensions, amplified through a coordinated topic matrix.',
    },
    result: {
      zh: '车展现场 Jeep 展台媒体云集，车展前始终保持总体声量领先。内容矩阵产出 22,409 篇，触达人群覆盖 1.5 亿，荣获 IAI 国际广告奖创意营销类金奖。',
      en: 'Jeep\'s booth attracted overwhelming media coverage throughout the show. The content matrix generated 22,409 pieces of content, reaching 150 million people — earning the IAI International Advertising Awards Gold in Creative Marketing.',
    },
    metrics: [
      { value: '22,409', label: { zh: '内容产出篇数', en: 'Content Pieces' } },
      { value: '150M', label: { zh: '人群覆盖', en: 'Audience Reach' } },
      { value: '3', label: { zh: '国际大奖', en: 'Industry Awards' } },
    ],
    tags: ['整合营销', '内容营销', '社交媒体', '汽车'],
  },
  {
    id: 'jeep-covid',
    client: 'Jeep × GAC',
    title: {
      zh: 'Jeep 全面战"疫"',
      en: 'Jeep Fights the Pandemic — All In',
    },
    tagline: {
      zh: '疫情逆势下的品牌责任与消费者凝聚',
      en: 'Brand responsibility and community resilience in a crisis',
    },
    awards: ['MAD Modern Ad Award · Integrated Marketing'],
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663338382315/abpqfoSVgXpTldxd.jpg',
    background: {
      zh: '新冠疫情爆发，对汽车消费市场产生巨大冲击。Jeep 在疫情逆势下，如何全面应对市场竞争？品牌需要同时在品牌形象、消费者凝聚力和销售机会三个层面找到突破口。',
      en: 'The COVID-19 outbreak dealt a severe blow to the automotive consumer market. How could Jeep respond comprehensively in the face of adversity? The brand needed breakthroughs simultaneously across brand image, consumer cohesion, and sales opportunities.',
    },
    insight: {
      zh: '危机时刻，消费者对品牌的期待从"功能价值"转向"情感支撑"。Jeep 的品牌基因中本就有"不畏艰险、全力以赴"的精神内核，这与抗疫精神高度契合。全面战"疫"不只是口号，更是品牌与消费者共同面对困境的姿态。',
      en: 'In a crisis, consumer expectations shift from functional value to emotional support. Jeep\'s brand DNA — fearless, all-in — aligns perfectly with the spirit of fighting the pandemic. "All In" was not just a slogan but a shared posture between brand and consumer.',
    },
    action: {
      zh: '借节日节点表达战"疫"心声：从元宵节、三八妇女节到植树节，结合每个时间节点特点，持续输出情感内容。同时以实际物资捐助驰援一线，彰显 Jeep 品牌力量。国内疫情缓解后，率先关注意大利疫情，展现国际化的品牌担当，收获市场口碑。',
      en: 'We leveraged key festival dates — Lantern Festival, Women\'s Day, Arbor Day — to deliver emotionally resonant content. Simultaneously, Jeep donated supplies to frontline workers. As China\'s situation improved, Jeep was among the first to spotlight Italy\'s outbreak, demonstrating global brand responsibility.',
    },
    result: {
      zh: '在疫情最严峻的时期，Jeep 建立了消费者心中负责任的品牌形象，有效凝聚了品牌社群，并在低迷市场中找到了新的传播机会点。荣获 MAD 现代广告奖整合营销类优秀奖。',
      en: 'At the height of the pandemic, Jeep established a responsible brand image, effectively rallied its community, and identified new communication opportunities in a depressed market — earning the MAD Modern Advertising Award for Integrated Marketing.',
    },
    metrics: [
      { value: '3', label: { zh: '战略目标全达成', en: 'Strategic Goals Met' } },
      { value: '1', label: { zh: '行业大奖', en: 'Industry Award' } },
    ],
    tags: ['整合营销', '危机公关', '品牌建设', '汽车'],
  },
  {
    id: 'wuling-miniev',
    client: '五菱宏光 × PANTONE × ELLE',
    title: {
      zh: '五菱宏光 MINIEV 马卡龙新车发布整合营销',
      en: 'Wuling MINI EV Macaron — Integrated Launch Campaign',
    },
    tagline: {
      zh: '用色彩重新定义微型车的时尚语言',
      en: 'Redefining the micro-car through the language of color',
    },
    awards: [],
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663338382315/vvPMhDBkolOBbuIc.png',
    background: {
      zh: '宏光 MINIEV 马卡龙新车上市，需要打破微型车仅强调功能与性价比的传统认知，建立更鲜明的时尚、潮流与个性化产品形象，同时打破五菱单纯为劳动人民造车的实用主义品牌印象。',
      en: 'The Wuling MINI EV Macaron needed to break the conventional perception of micro-cars as purely functional and value-driven — establishing a bold, fashionable, and personalized product identity while shedding the utilitarian brand image.',
    },
    insight: {
      zh: '对年轻消费者而言，汽车不只是出行工具，更是表达审美、情绪和个人风格的"移动配饰"。色彩是最低门槛、最直观的时尚语言。将车身色彩延展到穿搭、美妆等高频生活场景，才能让"马卡龙"真正成为一种可参与的潮流。',
      en: 'For young consumers, a car is not just transportation — it is a "mobile accessory" that expresses aesthetics, emotion, and personal style. Color is the most accessible fashion language. Extending the car\'s palette into beauty and lifestyle contexts would transform "Macaron" into a participatory trend.',
    },
    action: {
      zh: '联合 PANTONE UNIVERSE 发布"五菱春色"——白桃粉、柠檬黄、牛油果绿，将汽车新品转译为春日潮流色彩发布。携手 ELLE 将三种车身色延展为彩妆、化妆刷及春日礼盒等创意单品。邀请任敏、马伯骞演绎春夏时尚大片，借助 ELLE 时尚媒体语境强化品牌想象。',
      en: 'We partnered with PANTONE UNIVERSE to launch "Wuling Spring Colors" — Peach Pink, Lemon Yellow, and Avocado Green — translating the car launch into a spring trend color event. With ELLE, we extended the palette into makeup, brushes, and gift sets. Celebrities Ren Min and Ma Boquian starred in a fashion editorial, amplified through ELLE\'s media ecosystem.',
    },
    result: {
      zh: '五菱完成了从"车型配色发布"到"春日潮流生活方式事件"的内容升级，通过 PANTONE 权威背书、明星演绎与 ELLE 跨界合作，强化了宏光 MINIEV 马卡龙的时尚辨识度，最终助力新车上市期间锁定 45,000 个大定订单。',
      en: 'Wuling successfully elevated from a "color launch" to a "spring lifestyle event." PANTONE authority, celebrity endorsement, and ELLE cross-collaboration reinforced the Macaron\'s fashion identity — ultimately securing 45,000 firm orders during the launch period.',
    },
    metrics: [
      { value: '45,000', label: { zh: '大定订单', en: 'Firm Orders' } },
      { value: '3', label: { zh: '跨界合作品牌', en: 'Cross-brand Partners' } },
    ],
    tags: ['新车上市', '跨界营销', '时尚', '汽车'],
  },
  {
    id: 'anta-1111',
    client: '安踏 × 天猫双十一',
    title: {
      zh: '安踏 第11.11号气象台',
      en: "Anta's 11.11 Weather Station",
    },
    tagline: {
      zh: '用一个创意概念融合七大 IP，引爆双十一电商销售',
      en: 'One creative concept, seven IPs, one explosive 11.11',
    },
    awards: [],
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663338382315/BsieYYMHvSxstahS.jpg',
    background: {
      zh: '天猫双十一在即，安踏希望将与七龙珠、漫威、可口可乐等众多 IP 联名推出的系列进行整合营销传播，引导双十一电商销售。核心挑战是如何用一个统一概念将各具特色的 IP 融合成一，并在没有额外流量的情况下找到流量池。',
      en: "With 11.11 approaching, Anta needed to integrate its co-branded collections with Dragon Ball, Marvel, Coca-Cola and other IPs into a unified campaign to drive e-commerce sales. The core challenge: unifying diverse IPs under one concept and finding traffic without extra media spend.",
    },
    insight: {
      zh: '每个 IP 都是独立个体，有着独特的个性气质——就像不同的天气现象。"气象台"可以融合各种气象，成为统一各 IP 的创意图腾。同时，双十一的数字"11.11"天然契合"气象台频道号"的概念，让创意与电商节点无缝融合。',
      en: 'Each IP has a distinct personality — like different weather phenomena. A "Weather Station" could unify all of them under one creative totem. Moreover, the date "11.11" naturally maps to a "channel number," seamlessly merging the creative idea with the shopping festival.',
    },
    action: {
      zh: '围绕"第11.11号气象台"创意主题，邀请飞宇拍摄特殊气象来袭的 TVC，大风吹散了安踏天猫旗舰店的关注。双十一前两天推出"想买播单"视频进行产品推荐，并推出飞宇宇宙款 look，为最后的预售定量锚定。全链路覆盖双微一抖平台。',
      en: 'Centered on the "11.11 Weather Station" concept, we produced a TVC featuring a special weather event sweeping through Anta\'s Tmall flagship. Two days before 11.11, a "wish-list" video recommended products, and a special "cosmic look" anchored final pre-sale quantities. The campaign covered Weibo, WeChat, and Douyin end-to-end.',
    },
    result: {
      zh: '双微一抖平台发布内容累计覆盖超 6,200 万粉丝，浏览/播放量达到 780 万，安踏集团电商双十一整体水位增长 63%。',
      en: 'Content across Weibo, WeChat, and Douyin reached over 62 million followers, with 7.8 million views and plays. Anta Group\'s overall e-commerce sales index grew 63% during 11.11.',
    },
    metrics: [
      { value: '62M+', label: { zh: '粉丝覆盖', en: 'Followers Reached' } },
      { value: '7.8M', label: { zh: '浏览/播放量', en: 'Views & Plays' } },
      { value: '+63%', label: { zh: '电商水位增长', en: 'E-commerce Growth' } },
    ],
    tags: ['电商营销', 'IP联名', '社交媒体', '运动品牌'],
  },
  {
    id: 'jeep-suv',
    client: 'Jeep × GAC',
    title: {
      zh: 'Jeep 专业 SUV 再进化 — WHAT\'S NEW',
      en: "Jeep Professional SUV Evolution — WHAT'S NEW",
    },
    tagline: {
      zh: '健身快闪 × 产品发布，让发动机性能可感可知',
      en: 'Fitness pop-up × product launch — making engine performance tangible',
    },
    awards: ['IAI Silver · Creative Marketing'],
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663338382315/OqaZQDySgFfunTPa.jpg',
    background: {
      zh: '贴墨指南者 GSE-T4 1.3T 发动机和大指挥官 PHEV 版上市，需要产出创新传播方案。核心挑战是如何采用体验式活动形式，使产品性能直观化，加深媒体对核心信息的理解，同时在场地布置中传递 Jeep Your Life 的品牌格调。',
      en: 'The launch of the Compass GSE-T4 1.3T engine and Grand Commander PHEV required an innovative communication plan. The challenge: how to make product performance tangible through experiential formats, deepen media understanding, and convey the Jeep Your Life brand ethos throughout the event.',
    },
    insight: {
      zh: '行驶中的车就像运动状态下的人体，发动机正如心脏——一颗强大的心脏可以调动全身肌肉，持续爆发力量，发挥更加出色。这个类比将冰冷的技术参数转化为每个人都能感受到的身体体验。',
      en: 'A car in motion is like the human body in action — the engine is the heart. A powerful heart mobilizes every muscle, sustaining explosive output. This analogy transforms cold technical specs into a visceral, universally relatable experience.',
    },
    action: {
      zh: '打造 Jeep × 健身快闪店，将健身体验与发动机产品结合。通过讲解和体验相结合的方式传递产品力，线上产出趣铃薯潮流内容、活动招募 H5，线下设置健身房玻璃展示区、众多封面拍照区等沉浸式物料，全方位调动媒体参与感。',
      en: 'We created a Jeep × Fitness Pop-Up, fusing workout experiences with engine storytelling. Online content included trendy fitness videos and a recruitment H5. Offline, immersive gym-glass displays and photo zones created a fully engaging media event.',
    },
    result: {
      zh: '活动引发媒体广泛报道，产品核心信息得到深度传递，品牌格调获得高度认可。荣获 IAI 国际广告奖创意营销类银奖，成为汽车行业体验式营销的标杆案例。',
      en: 'The event generated extensive media coverage, deeply communicating product core messages and earning strong brand recognition. It won the IAI International Advertising Awards Silver in Creative Marketing — a benchmark for experiential automotive marketing.',
    },
    metrics: [
      { value: 'IAI', label: { zh: '银奖', en: 'Silver Award' } },
      { value: '2', label: { zh: '核心产品成功发布', en: 'Products Launched' } },
    ],
    tags: ['体验营销', '产品发布', '媒体公关', '汽车'],
  },
  {
    id: 'dyson-hair',
    client: 'Dyson',
    title: {
      zh: 'Dyson 头发科学博物馆',
      en: 'Dyson Hair Science Museum',
    },
    tagline: {
      zh: '重新定义年度公关活动，让科技走进生活叙事',
      en: 'Reimagining the annual PR event — where technology meets life narrative',
    },
    awards: [],
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663338382315/cqSvbdsOFbepViCF.jpg',
    background: {
      zh: '每年一度的戴森头发课堂如期举办，需要找到符合当下并契合戴森产品科技点的主题，同时通过有效的公关活动形式，让更多人了解本次活动和戴森新品。',
      en: "Dyson's annual hair masterclass needed a fresh theme aligned with current culture and product technology — and an effective PR format to maximize awareness of the event and new products.",
    },
    insight: {
      zh: '2020 年突如其来的疫情打乱了原本的生活，就像头发会出现的各种问题一样会让造型失去控制。人们渴望让生活重回掌控，而戴森可以扮演的角色是：先一步让头发重回掌控。这个洞察将产品功能与时代情绪精准连接。',
      en: "The 2020 pandemic disrupted life just as hair problems disrupt style — both create a loss of control. People craved regaining control of their lives. Dyson's role: be the first step in reclaiming control, starting with your hair. This insight precisely connected product function with the zeitgeist.",
    },
    action: {
      zh: '区别于往年的"课堂"概念，打造"头发科学博物馆"的全新概念，将线下公关活动包装成沉浸式体验空间。同时通过 KOL 多平台直播，联合明星造型师进行联合直播，全方位传递活动内容和新品科技点。',
      en: 'Breaking from the "classroom" format, we created the "Hair Science Museum" — an immersive experiential space. Multi-platform KOL live-streaming, co-hosted with celebrity stylists, delivered event content and product technology points to a wide audience.',
    },
    result: {
      zh: '活动成功建立了戴森"头发科技专家"的品牌认知，新品科技点得到广泛传播，KOL 直播带动大量消费者互动与产品讨论，有效提升了品牌在目标人群中的影响力。',
      en: "The event successfully established Dyson's positioning as a hair technology authority. New product features were widely communicated, KOL live-streams drove significant consumer engagement and product discussion, effectively elevating brand influence among target audiences.",
    },
    metrics: [
      { value: '5+', label: { zh: 'KOL 直播覆盖', en: 'Platforms Covered' } },
      { value: '10+', label: { zh: '造型师联合背书', en: 'Celebrity Stylists' } },
    ],
    tags: ['公关活动', 'KOL营销', '美妆科技', '体验营销'],
  },
];
