/**
 * ============================================================================
 * BADR STUDIO GUIDE — Modern Interactive Tour & 8 Hidden 3D Gold Coins Quest
 * ============================================================================
 * 💡 إزاي تبدل الكاركتر الافتراضي بالكاركتر الخاص بيك؟
 * 1) من الكود مباشرة: حط رابط صورة الكاركتر بتاعك (PNG / GIF / WebP / SVG) في
 *    `customCharacterUrl` تحت هنا، أو
 * 2) من الموقع مباشرة: اضغط على زر "🎨 الكاركتر" في الشريط العلوي واختار أو ارفع
 *    صورة الكاركتر بتاعك من جهازك وهيتحفظ تلقائياً!
 * ============================================================================
 */
window.BADR_PIXEL_TWIN_CONFIG = {
  // ضع رابط صورة الكاركتر الخاص بك هنا (مثلاً: 'images/my-character.png' أو اتركه فارغاً لاستخدام الكاركتر الموديرن التفاعلي)
  customCharacterUrl: '',
  defaultPreset: 'puffer-twin', // الخيارات: 'puffer-twin' | 'blender-hoodie' | 'creative-suit' | 'cyber-artist'
  exeName: '✦ BADR STUDIO',
  totalCoins: 8
};

(function () {
  const STORAGE_KEY = 'badr_pixel_tour_state_v1';

  const CHARACTER_PRESETS = [
    {
      id: 'puffer-twin',
      name: {
        en: 'Creative Designer (Amber Studio Jacket)',
        ar: 'كريتيف ديزاينر (جاكيت ستوديو برتقالي)'
      },
      exeLabel: '✦ BADR STUDIO',
      jacketColor: '#F97316',
      jacketShade: '#C2410C',
      shirtColor: '#0F172A',
      hairColor: '#1E1B18',
      hairHighlight: '#44403C',
      skinColor: '#FDBA74',
      skinShade: '#F59E0B',
      glassesFrame: '#0F172A',
      glassesLensStart: '#38BDF8',
      glassesLensEnd: '#0284C7',
      accentColor: '#FACC15',
      pantsColor: '#1E293B'
    },
    {
      id: 'blender-hoodie',
      name: {
        en: '3D Artist (Gold & Obsidian Hoodie)',
        ar: 'فنان 3D (هودي أسود وذهبي موديرن)'
      },
      exeLabel: '✦ BADR 3D ART',
      jacketColor: '#EAB308',
      jacketShade: '#A16207',
      shirtColor: '#090D16',
      hairColor: '#18181B',
      hairHighlight: '#3F3F46',
      skinColor: '#FDBA74',
      skinShade: '#EA580C',
      glassesFrame: '#18181B',
      glassesLensStart: '#FDE047',
      glassesLensEnd: '#D97706',
      accentColor: '#FDE047',
      pantsColor: '#111827'
    },
    {
      id: 'creative-suit',
      name: {
        en: 'Art Director (Emerald Blazer)',
        ar: 'مخرج فني (بليزر زمردي عصري)'
      },
      exeLabel: '✦ ART DIRECTOR',
      jacketColor: '#10B981',
      jacketShade: '#047857',
      shirtColor: '#0F172A',
      hairColor: '#1C1917',
      hairHighlight: '#44403C',
      skinColor: '#FDBA74',
      skinShade: '#EA580C',
      glassesFrame: '#064E3B',
      glassesLensStart: '#6EE7B7',
      glassesLensEnd: '#059669',
      accentColor: '#34D399',
      pantsColor: '#0F172A'
    },
    {
      id: 'cyber-artist',
      name: {
        en: 'UI/Web Architect (Violet & Cyan)',
        ar: 'مطور ومصمم واجهات (بنفسجي وسماوي)'
      },
      exeLabel: '✦ CREATIVE DEV',
      jacketColor: '#8B5CF6',
      jacketShade: '#5B21B6',
      shirtColor: '#090D16',
      hairColor: '#1E1B4B',
      hairHighlight: '#4338CA',
      skinColor: '#FDBA74',
      skinShade: '#EA580C',
      glassesFrame: '#0F172A',
      glassesLensStart: '#22D3EE',
      glassesLensEnd: '#6366F1',
      accentColor: '#C084FC',
      pantsColor: '#1E1B4B'
    }
  ];

  const TOUR_CHAPTERS = [
    {
      id: 'hero-intro',
      number: 1,
      targetSelector: '#hero',
      pose: 'wave',
      shortLabel: { en: 'Who I Am', ar: 'أنا مين' },
      title: { en: 'Meet Badr Ibraheem', ar: 'تعرف على بدر إبراهيم' },
      lines: {
        en: [
          "Welcome! I'm Badr Ibraheem — Graphic Designer, 3D Artist & Web Developer from Faiyum, Egypt. Let me take you on an interactive tour across my portfolio!",
          'I blend brand identity, photorealistic 3D modeling in Blender, and modern web engineering into one cohesive craft.'
        ],
        ar: [
          'أهلاً بيك! أنا بدر إبراهيم — مصمم جرافيك، فنان 3D ومطور ويب من الفيوم، مصر. هلف معاك الموقع سكشن سكشن وأشرحلك كل تفصيلة بنفسي!',
          'بجمع بين تصميم الهوية البصرية، النمذجة ثلاثية الأبعاد في Blender، وتطوير واجهات الويب التفاعلية.'
        ]
      }
    },
    {
      id: 'hero-showcase',
      number: 2,
      targetSelector: '#hero-image-container',
      pose: 'point',
      shortLabel: { en: 'Visual Cover', ar: 'الإخراج البصري' },
      title: { en: 'Visual Art Direction', ar: 'الغلاف والإخراج البصري' },
      lines: {
        en: [
          'Every artwork and cover frame is composed with cinematic lighting, clean geometry, and refined visual balance.',
          'Pro tip: You can switch between Dark and Light mode anytime from the top header bar!'
        ],
        ar: [
          'كل كادر بصري هنا متصمم بإضاءة سينمائية وتكوين فني دقيق يعكس الهوية الإبداعية.',
          'نصيحة سريعة: تقدر تبدل بين الوضع الليلي والنهاري في أي وقت من الشريط العلوي!'
        ]
      }
    },
    {
      id: 'hero-store-cta',
      number: 3,
      targetSelector: '#hero-ctas',
      pose: 'talk',
      shortLabel: { en: 'Digital Store', ar: 'متجر التصاميم' },
      title: { en: 'Digital Store & Quick Actions', ar: 'متجر التصاميم والقوالب الرقمية' },
      lines: {
        en: [
          'Need ready-to-use 3D models, design templates, or creative subscriptions? My built-in Digital Store is one click away.',
          'You can jump straight into my portfolio works or open the Store from these action buttons.'
        ],
        ar: [
          'محتاج قوالب 3D جاهزة، ملفات تصميم، أو أدوات رقمية؟ المتجر الرقمي الخاص بي متاح بضغطة زر واحدة.',
          'من هنا تقدر تستعرض أعمالي مباشرة أو تفتح المتجر وتتصفح المنتجات.'
        ]
      }
    },
    {
      id: 'skills-branding',
      number: 4,
      targetSelector: '#skills',
      pose: 'point',
      shortLabel: { en: 'Branding & UI/UX', ar: 'الهوية و UI/UX' },
      title: { en: 'Branding & UI/UX Craft', ar: 'الهوية البصرية وتصميم الواجهات' },
      lines: {
        en: [
          'Here are my core competencies: Branding & Identity using Illustrator, Photoshop, and InDesign, plus UI/UX Prototyping in Figma.',
          'Every visual identity is engineered to stay memorable across both print and digital platforms.'
        ],
        ar: [
          'هنا مهاراتي الأساسية: بناء الهويات البصرية والشعارات الاحترافية، وتصميم تجربة وواجهات المستخدم UI/UX باستخدام Figma.',
          'كل هوية بصرية بتتبني عشان تسيب بصمة قوية سواء في المطبوعات أو الديجيتال.'
        ]
      }
    },
    {
      id: 'skills-3d-web',
      number: 5,
      targetSelector: '#skills',
      pose: 'celebrate',
      shortLabel: { en: '3D & Web Code', ar: 'الـ 3D والبرمجة' },
      title: { en: '3D Modeling & Web Development', ar: 'نمذجة 3D وتطوير الويب' },
      lines: {
        en: [
          'I also build 3D models, architectural renders, and product visualizations in Blender — and code interactive web layouts with HTML, Tailwind CSS, and JavaScript.',
          'Designing and coding under one roof means zero gap between concept and reality!'
        ],
        ar: [
          'كمان بصمم مجسمات ومشاهد ثلاثية الأبعاد واقعية على Blender، وببرمج مواقع تفاعلية بـ HTML وTailwind CSS وJavaScript.',
          'لما المصمم يكون هو نفسه المبرمج، الخيال بيتحول لواقع بنفس الدقة!'
        ]
      }
    },
    {
      id: 'experience-timeline',
      number: 6,
      targetSelector: '#experience',
      pose: 'talk',
      shortLabel: { en: 'Key Moments', ar: 'أهم اللحظات والخبرات' },
      title: { en: 'Professional Experience', ar: 'رحلتي المهنية وأهم المحطات' },
      lines: {
        en: [
          'Currently working as Graphic Designer & E-Marketer at Gedar (Jedar) Decor Exhibition in Egypt (2025 – Present).',
          'My journey also includes Hotel Marketing in 6th of October City, Adobe Graphic Design training in Nasr City, and EgyptAir inflight service certification.'
        ],
        ar: [
          'حالياً بشتغل مصمم جرافيك ومسوق إلكتروني في معرض جدار للديكور (2025 - الآن).',
          'ومريت بمحطات مهمة زي التسويق الفندقي بـ 6 أكتوبر، وتدريب التصميم الجرافيكي في Adobe بمدينة نصر، ومعايير الضيافة الجوية بالتعاون مع مصر للطيران.'
        ]
      }
    },
    {
      id: 'education-languages',
      number: 7,
      targetSelector: '#education',
      pose: 'point',
      shortLabel: { en: 'Education', ar: 'التعليم واللغات' },
      title: { en: 'Academic Background & Languages', ar: 'التعليم الأكاديمي واللغات' },
      lines: {
        en: [
          'I earned my Bachelor of Tourism and Hotels (Hospitality Management) in June 2025 from the Higher Institute of Tourism and Hotels.',
          'Studying hospitality shaped how I treat every client project: with warmth, precision, and on-time delivery.'
        ],
        ar: [
          'حصلت على بكالوريوس السياحة والفنادق (قسم إدارة الضيافة) في يونيو 2025 من المعهد العالي للسياحة والفنادق بـ 6 أكتوبر.',
          'دراسة الضيافة علمتني إن نجاح أي تصميم بيبدأ من فهم العميل وتقديم تجربة مريحة والتزام تام بالمواعيد.'
        ]
      }
    },
    {
      id: 'certificates-showcase',
      number: 8,
      targetSelector: '#certificates',
      pose: 'celebrate',
      shortLabel: { en: 'Certificates', ar: 'الشهادات والتكريمات' },
      title: { en: 'Certificates & Recognitions', ar: 'الشهادات والجوائز المعتمدة' },
      lines: {
        en: [
          'Here is my interactive certificate showcase. Use the arrows or swipe to flip through my verified credentials.',
          'Click any certificate card to inspect it in full-screen high resolution!'
        ],
        ar: [
          'ده معرض الشهادات والتكريمات اللي حصلت عليها. تقدر تقلب بينهم بالسلايدر التفاعلي.',
          'اضغط على أي شهادة عشان تفتحها وتفحصها بالشاشة الكاملة!'
        ]
      }
    },
    {
      id: 'projects-gallery',
      number: 9,
      targetSelector: '#projects',
      pose: 'point',
      shortLabel: { en: 'My Projects', ar: 'مشاريعي' },
      title: { en: 'Featured Portfolio Projects', ar: 'معرض مشاريعي وأعمالي' },
      lines: {
        en: [
          'Welcome to my portfolio gallery! Filter projects by category — 3D Scenes, Interior & Doors, Branding, or Social Media Campaigns.',
          'Click any card to read the full story, tools used, and browse high-res project galleries.'
        ],
        ar: [
          'أهلاً بيك في معرض أعمالي! تقدر تفلتر المشاريع حسب القسم — مشاهد 3D، ديكور، هويات بصرية، أو تصميمات سوشيال ميديا.',
          'اضغط على أي كارت عشان تشوف تفاصيل المشروع الكاملة وكل الصور بجودة عالية.'
        ]
      }
    },
    {
      id: 'blog-articles',
      number: 10,
      targetSelector: '#blog',
      pose: 'talk',
      shortLabel: { en: 'Blog & Tutorials', ar: 'المقالات والشروحات' },
      title: { en: 'From the Blog', ar: 'المدونة والمقالات الفنية' },
      lines: {
        en: [
          'I love sharing what I learn! Here you will find articles and tutorials on 3D workflows, design thinking, and creative technology.',
          'Click any article to read it with a live reading-progress bar and smart search.'
        ],
        ar: [
          'بحب دايماً أشارك خبراتي! هتلاقي هنا مقالات وشروحات عن الـ 3D، التفكير التصميمي، وأحدث أدوات التكنولوجيا الإبداعية.',
          'تقدر تقرأ أي مقال بسهولة مع مؤشر تقدم القراءة ومقترحات لمقالات مشابهة.'
        ]
      }
    },
    {
      id: 'testimonials-coins',
      number: 11,
      targetSelector: '#testimonials',
      pose: 'wave',
      shortLabel: { en: 'Reviews & Quest', ar: 'آراء العملاء والعملات' },
      title: { en: 'Client Testimonials & Hidden Coins!', ar: 'آراء العملاء ومهمة الـ 8 عملات الذهبية!' },
      lines: {
        en: [
          'See what clients and collaborators say about working together — and feel free to leave your own star review below!',
          'SIDE QUEST: 8 modern 3D gold coins are hidden across this page! Click them as you scroll to collect all 8/8!'
        ],
        ar: [
          'شوف آراء وتقييمات العملاء والزوار — وتقدر كمان تكتب تعليقك وتقييمك بالنجوم تحت السلايدر مباشرة!',
          'مهمة جانبية: فيه 8 عملات ذهبية ثلاثية الأبعاد مستخبية في السكاشن! دور عليهم واجمعهم كلهم 8/8!'
        ]
      }
    },
    {
      id: 'cta-contact',
      number: 12,
      targetSelector: '#cta',
      pose: 'celebrate',
      shortLabel: { en: 'Work With Me', ar: 'تواصل معي' },
      title: { en: "Let's Build Something Great!", ar: 'يلا نبدأ مشروعك القادم!' },
      lines: {
        en: [
          "That's the full 12-chapter tour! Have a brand, 3D visualization, or website idea? I usually reply within 24 hours.",
          'Click FINISH to celebrate — or hit the Contact button anytime to message me on WhatsApp or Email!'
        ],
        ar: [
          'كده وصلنا للمحطة الـ 12 والأخيرة! عندك فكرة مشروع، هوية بصرية، أو تصميم 3D؟ برد دايماً خلال 24 ساعة.',
          'اضغط "إنهاء الجولة" عشان نحتفل — أو اضغط على الصندوق ده عشان تكلمني واتساب أو إيميل فوراً!'
        ]
      }
    }
  ];

  const HIDDEN_COINS = [
    { id: 'coin-1', index: 1, selector: '#hero-image-container', style: 'position:absolute; top:16px; right:18px;', hint: { en: 'Top-right corner of the Hero cover banner', ar: 'أعلى يمين صورة الغلاف الرئيسية' } },
    { id: 'coin-2', index: 2, selector: '#hero-ctas', style: 'position:relative; margin-inline-start:6px;', hint: { en: 'Right next to the View My Work & Store buttons', ar: 'بجانب أزرار تصفح الأعمال والمتجر في الأعلى' } },
    { id: 'coin-3', index: 3, selector: '#skills', style: 'position:absolute; top:28px; right:8%;', hint: { en: 'Floating near the Core Competencies section header', ar: 'عند بداية قسم المهارات الأساسية' } },
    { id: 'coin-4', index: 4, selector: '#experience', style: 'position:absolute; top:28px; left:8%;', hint: { en: 'Beside the Experience & Training section', ar: 'بجوار قسم الخبرات والتدريب' } },
    { id: 'coin-5', index: 5, selector: '#education', style: 'position:absolute; top:28px; right:10%;', hint: { en: 'Inside the Education & Languages section', ar: 'في قسم التعليم واللغات' } },
    { id: 'coin-6', index: 6, selector: '#certificates', style: 'position:relative; margin: 8px auto 0; display:flex;', hint: { en: 'Under the Certificates & Awards heading', ar: 'تحت عنوان الشهادات والتكريمات' } },
    { id: 'coin-7', index: 7, selector: '#projects', style: 'position:absolute; top:24px; left:10%;', hint: { en: 'Near the Featured Projects section top', ar: 'أعلى قسم معرض المشاريع' } },
    { id: 'coin-8', index: 8, selector: '#cta', style: 'position:relative; margin: 12px auto 0; display:flex;', hint: { en: 'At the bottom "Interested in working together?" CTA card', ar: 'عند صندوق التواصل في نهاية الموقع' } }
  ];

  function detectInitialLang() {
    const htmlDir = document.documentElement.getAttribute('dir');
    if (htmlDir === 'rtl') return 'ar';
    const match = document.cookie.match(/(?:^|;\s*)selected_language=([^;]*)/);
    if (match && match[1] === 'ar') return 'ar';
    return 'ar';
  }

  function loadSavedState() {
    const params = new URLSearchParams(window.location.search);
    const autostart = params.get('autostart') === '1' || params.get('tour') === '1' || params.get('autostart') === 'true';
    const defaultState = {
      mode: autostart ? 'touring' : 'welcome',
      lang: detectInitialLang(),
      chapterIndex: 0,
      lineIndex: 0,
      collectedCoins: [],
      visitedChapters: autostart ? [0] : [],
      muted: false,
      characterPreset: window.BADR_PIXEL_TWIN_CONFIG?.defaultPreset || 'puffer-twin',
      customCharacterUrl: window.BADR_PIXEL_TWIN_CONFIG?.customCharacterUrl || '',
      welcomeOptionIndex: 0
    };

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState;
      const parsed = JSON.parse(raw);
      return {
        ...defaultState,
        collectedCoins: Array.isArray(parsed.collectedCoins) ? parsed.collectedCoins : [],
        visitedChapters: Array.isArray(parsed.visitedChapters) ? parsed.visitedChapters : defaultState.visitedChapters,
        muted: Boolean(parsed.muted),
        characterPreset: parsed.characterPreset || defaultState.characterPreset,
        customCharacterUrl: parsed.customCharacterUrl ?? defaultState.customCharacterUrl,
        lang: parsed.lang || defaultState.lang,
        mode: autostart ? 'touring' : 'welcome'
      };
    } catch (_) {
      return defaultState;
    }
  }

  let state = loadSavedState();
  let typewriterTimer = null;
  let isTyping = false;
  let currentFullText = '';
  let sideQuestToastTimer = null;

  function saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          collectedCoins: state.collectedCoins,
          visitedChapters: state.visitedChapters,
          muted: state.muted,
          characterPreset: state.characterPreset,
          customCharacterUrl: state.customCharacterUrl,
          lang: state.lang
        })
      );
    } catch (_) {}
  }

  // Modern Smooth Harmonic Web Audio Synthesizer
  let audioCtx = null;
  function getAudioCtx() {
    if (state.muted) return null;
    try {
      if (!audioCtx) {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (Ctx) audioCtx = new Ctx();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
      }
      return audioCtx;
    } catch (_) {
      return null;
    }
  }

  function playModernTone(freq = 560, duration = 0.045, type = 'sine', vol = 0.03) {
    const ctx = getAudioCtx();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (_) {}
  }

  function playCoinChime() {
    playModernTone(880, 0.12, 'triangle', 0.075); // A5
    setTimeout(() => playModernTone(1318.51, 0.28, 'sine', 0.085), 65); // E6
  }

  function playVictoryFanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((n, i) => {
      setTimeout(() => playModernTone(n, 0.22, 'triangle', 0.07), i * 105);
    });
  }

  function getActivePreset() {
    return (
      CHARACTER_PRESETS.find(p => p.id === state.characterPreset) ||
      CHARACTER_PRESETS[0]
    );
  }

  // Modern 3D Metallic Gold Coin SVG (Smooth vector 3D coin with bevels, star emblem, & specular shine)
  function renderModernCoinSvg(coinNumber = '', size = 42, uid = 'c') {
    const gradId = `modernCoinGrad_${uid}_${coinNumber}`;
    const rimId = `modernCoinRim_${uid}_${coinNumber}`;
    const innerId = `modernCoinInner_${uid}_${coinNumber}`;
    return `
      <svg viewBox="0 0 64 64" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display:block;">
        <defs>
          <linearGradient id="${rimId}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFFBEB" />
            <stop offset="28%" stop-color="#FDE047" />
            <stop offset="65%" stop-color="#F59E0B" />
            <stop offset="100%" stop-color="#92400E" />
          </linearGradient>
          <radialGradient id="${gradId}" cx="32%" cy="28%" r="72%">
            <stop offset="0%" stop-color="#FEF9C3" />
            <stop offset="40%" stop-color="#FACC15" />
            <stop offset="78%" stop-color="#D97706" />
            <stop offset="100%" stop-color="#78350F" />
          </radialGradient>
          <linearGradient id="${innerId}" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#B45309" />
            <stop offset="50%" stop-color="#F59E0B" />
            <stop offset="100%" stop-color="#FEF08A" />
          </linearGradient>
        </defs>
        <!-- Outer 3D Metallic Bevel Ring -->
        <circle cx="32" cy="32" r="29" fill="url(#${rimId})" stroke="#FEF08A" stroke-width="1.2" />
        <!-- Coin Face -->
        <circle cx="32" cy="32" r="24" fill="url(#${gradId})" />
        <!-- Recessed Inner Metallic Ring -->
        <circle cx="32" cy="32" r="20.5" fill="none" stroke="url(#${innerId})" stroke-width="2" opacity="0.9" />
        <!-- Subtle 4-Point Modern Star / Gem Emblem -->
        <path d="M32 13 L35.2 24.8 L47 28 L35.2 31.2 L32 43 L28.8 31.2 L17 28 L28.8 24.8 Z" fill="#FFFBEB" opacity="0.32" />
        <!-- Specular Diagonal Light Sweep -->
        <path d="M16 18 C22 11, 34 10, 43 15 C35 14, 23 19, 17 29 C14 25, 14 21, 16 18 Z" fill="#FFFFFF" opacity="0.65" />
        ${
          coinNumber
            ? `<text x="32" y="37" text-anchor="middle" fill="#451A03" font-family="'Plus Jakarta Sans', 'Cairo', sans-serif" font-weight="800" font-size="16" style="filter: drop-shadow(0 1px 0 rgba(255,255,255,0.6));">${coinNumber}</text>`
            : `<path d="M32 17 L34.8 27.2 L45 30 L34.8 32.8 L32 43 L29.2 32.8 L19 30 L29.2 27.2 Z" fill="#FFFBEB" opacity="0.9" />`
        }
      </svg>
    `;
  }

  // Modern 3D-Stylized Vector Character Illustration (Smooth curves, soft gradients, designer glasses & studio jacket)
  function renderCharacterMarkup(pose = 'wave') {
    const customUrl = (state.customCharacterUrl || window.BADR_PIXEL_TWIN_CONFIG?.customCharacterUrl || '').trim();
    if (customUrl) {
      return `<img src="${customUrl}" alt="Badr Interactive Guide" class="custom-char-img" referrerpolicy="no-referrer" onerror="this.style.display='none'" />`;
    }

    const p = getActivePreset();
    const isWaving = pose === 'wave' || pose === 'celebrate';
    const isPointing = pose === 'point';
    const mouthOpen = isTyping || pose === 'celebrate';
    const uid = p.id;

    return `
      <svg viewBox="0 0 120 144" width="102" height="122" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="skinGrad_${uid}" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stop-color="#FED7AA" />
            <stop offset="65%" stop-color="${p.skinColor}" />
            <stop offset="100%" stop-color="${p.skinShade}" />
          </linearGradient>
          <linearGradient id="jacketGrad_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${p.jacketColor}" />
            <stop offset="100%" stop-color="${p.jacketShade}" />
          </linearGradient>
          <linearGradient id="hairGrad_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${p.hairHighlight}" />
            <stop offset="100%" stop-color="${p.hairColor}" />
          </linearGradient>
          <linearGradient id="lensGrad_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${p.glassesLensStart}" />
            <stop offset="100%" stop-color="${p.glassesLensEnd}" />
          </linearGradient>
        </defs>

        <!-- Soft Ground Shadow -->
        <ellipse cx="60" cy="136" rx="30" ry="5" fill="rgba(0,0,0,0.42)" />

        <!-- Back Hair Volume -->
        <path d="M32 42 C28 20, 44 10, 62 10 C82 10, 92 22, 88 42 Z" fill="url(#hairGrad_${uid})" />

        <!-- Left Arm (Waving or Relaxed) -->
        ${
          isWaving
            ? `<g>
                 <path d="M34 82 C20 74, 15 58, 19 44" fill="none" stroke="url(#jacketGrad_${uid})" stroke-width="13" stroke-linecap="round" />
                 <circle cx="19" cy="41" r="7" fill="url(#skinGrad_${uid})" />
               </g>`
            : `<g>
                 <path d="M35 80 C25 90, 24 102, 27 110" fill="none" stroke="url(#jacketGrad_${uid})" stroke-width="13" stroke-linecap="round" />
                 <circle cx="27" cy="112" r="6.5" fill="url(#skinGrad_${uid})" />
               </g>`
        }

        <!-- Right Arm (Pointing or Relaxed) -->
        ${
          isPointing
            ? `<g>
                 <path d="M86 82 C98 76, 105 66, 108 56" fill="none" stroke="url(#jacketGrad_${uid})" stroke-width="13" stroke-linecap="round" />
                 <circle cx="109" cy="53" r="7" fill="url(#skinGrad_${uid})" />
               </g>`
            : `<g>
                 <path d="M85 80 C95 90, 96 102, 93 110" fill="none" stroke="url(#jacketGrad_${uid})" stroke-width="13" stroke-linecap="round" />
                 <circle cx="93" cy="112" r="6.5" fill="url(#skinGrad_${uid})" />
               </g>`
        }

        <!-- Modern Trousers / Legs -->
        <rect x="42" y="108" width="14" height="22" rx="7" fill="${p.pantsColor}" />
        <rect x="64" y="108" width="14" height="22" rx="7" fill="${p.pantsColor}" />

        <!-- Modern Designer Sneakers -->
        <rect x="38" y="124" width="20" height="9" rx="4.5" fill="#F8FAFC" />
        <path d="M40 128 H56" stroke="${p.jacketColor}" stroke-width="2.5" stroke-linecap="round" />
        <rect x="62" y="124" width="20" height="9" rx="4.5" fill="#F8FAFC" />
        <path d="M64 128 H80" stroke="${p.jacketColor}" stroke-width="2.5" stroke-linecap="round" />

        <!-- Torso / Modern Layered Studio Jacket -->
        <rect x="32" y="72" width="56" height="42" rx="18" fill="url(#jacketGrad_${uid})" />
        <!-- Inner Studio Shirt -->
        <path d="M48 72 L60 94 L72 72 Z" fill="${p.shirtColor}" />
        <rect x="52" y="72" width="16" height="40" rx="4" fill="${p.shirtColor}" />
        <!-- Glowing Studio Badge / Lanyard Accent -->
        <rect x="56" y="84" width="8" height="11" rx="2.5" fill="${p.accentColor}" />
        <!-- Jacket Collar Lapels -->
        <path d="M38 72 L50 88 L46 72 Z" fill="${p.jacketShade}" opacity="0.7" />
        <path d="M82 72 L70 88 L74 72 Z" fill="${p.jacketShade}" opacity="0.7" />

        <!-- Neck -->
        <rect x="52" y="62" width="16" height="14" rx="6" fill="url(#skinGrad_${uid})" />

        <!-- Ears -->
        <circle cx="33" cy="46" r="6" fill="url(#skinGrad_${uid})" />
        <circle cx="87" cy="46" r="6" fill="url(#skinGrad_${uid})" />

        <!-- 3D Rounded Head -->
        <rect x="35" y="22" width="50" height="46" rx="22" fill="url(#skinGrad_${uid})" />

        <!-- Modern Styled Swept Hair -->
        <path d="M33 38 C32 20, 45 11, 63 12 C79 12, 90 21, 87 38 C83 28, 73 24, 58 25 C46 26, 38 30, 33 38 Z" fill="url(#hairGrad_${uid})" />
        <path d="M44 18 C54 14, 68 15, 76 21" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2.5" stroke-linecap="round" />

        <!-- Eyebrows -->
        <path d="M43 35 Q49 32 55 35" fill="none" stroke="${p.hairColor}" stroke-width="2.4" stroke-linecap="round" />
        <path d="M65 35 Q71 32 77 35" fill="none" stroke="${p.hairColor}" stroke-width="2.4" stroke-linecap="round" />

        <!-- Sleek Modern Designer Glasses -->
        <rect x="39" y="38" width="19" height="13" rx="5" fill="url(#lensGrad_${uid})" stroke="${p.glassesFrame}" stroke-width="2.4" />
        <rect x="62" y="38" width="19" height="13" rx="5" fill="url(#lensGrad_${uid})" stroke="${p.glassesFrame}" stroke-width="2.4" />
        <path d="M58 43 H62" stroke="${p.glassesFrame}" stroke-width="2.4" stroke-linecap="round" />
        <!-- Lens Glare Highlights -->
        <path d="M43 41 L48 48" stroke="rgba(255,255,255,0.65)" stroke-width="2" stroke-linecap="round" />
        <path d="M66 41 L71 48" stroke="rgba(255,255,255,0.65)" stroke-width="2" stroke-linecap="round" />

        <!-- Subtle Designer Stubble & Smile / Talking Expression -->
        ${
          mouthOpen
            ? `<rect x="53" y="55" width="14" height="7" rx="3.5" fill="#1E1B18" />
               <path d="M56 60 Q60 57 64 60" fill="none" stroke="#F87171" stroke-width="2.2" stroke-linecap="round" />`
            : `<path d="M53 57 Q60 63 67 57" fill="none" stroke="#1E1B18" stroke-width="2.6" stroke-linecap="round" />`
        }
      </svg>
    `;
  }

  function getGreeting(lang) {
    const hour = new Date().getHours();
    if (lang === 'ar') {
      if (hour >= 5 && hour < 12) return 'صباح الخير!';
      if (hour >= 12 && hour < 17) return 'مساء النور!';
      return 'مساء الخير!';
    }
    if (hour >= 5 && hour < 12) return 'Good morning!';
    if (hour >= 12 && hour < 17) return 'Good afternoon!';
    return 'Good evening!';
  }

  // Create DOM Elements
  function mountTourUI() {
    if (document.getElementById('badr-pixel-hud-bar')) return;

    // 1. Spotlight frame
    const spotlight = document.createElement('div');
    spotlight.id = 'badr-tour-spotlight';
    spotlight.setAttribute('data-chapter-tag', '✦ CHAPTER 01/12');
    document.body.appendChild(spotlight);

    // 2. Floating HUD status bar (TOUR 01/12 + COINS 0/8 + Character Customizer)
    const hudBar = document.createElement('div');
    hudBar.id = 'badr-pixel-hud-bar';
    hudBar.setAttribute('role', 'region');
    hudBar.setAttribute('aria-label', 'Interactive Portfolio Tour & Coin Quest');
    document.body.appendChild(hudBar);

    // 3. Welcome Prompt Modal
    const welcomeBackdrop = document.createElement('div');
    welcomeBackdrop.id = 'badr-tour-welcome-backdrop';
    document.body.appendChild(welcomeBackdrop);

    // 4. Active Tour Bottom Dock
    const tourDock = document.createElement('div');
    tourDock.id = 'badr-tour-dock';
    document.body.appendChild(tourDock);

    // 5. Side Quest Coin Toast
    const sideQuestToast = document.createElement('div');
    sideQuestToast.id = 'badr-sidequest-toast';
    document.body.appendChild(sideQuestToast);

    // 6. Tour Complete Modal
    const completeModal = document.createElement('div');
    completeModal.id = 'badr-tour-complete-modal';
    document.body.appendChild(completeModal);

    // 7. Drawer Modal (for 12-Chapter Checklist & Character Customizer)
    const drawerModal = document.createElement('div');
    drawerModal.id = 'badr-drawer-modal';
    document.body.appendChild(drawerModal);

    // 8. Confetti Canvas
    const confettiCanvas = document.createElement('canvas');
    confettiCanvas.id = 'badr-pixel-confetti';
    document.body.appendChild(confettiCanvas);

    // 9. Mount 8 Hidden 3D Gold Coins across sections
    mountHiddenCoins();

    // Global Keyboard Shortcuts
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('scroll', updateSpotlightPosition, { passive: true });
    window.addEventListener('resize', updateSpotlightPosition, { passive: true });

    renderAll();
  }

  function mountHiddenCoins() {
    HIDDEN_COINS.forEach(coin => {
      const container = document.querySelector(coin.selector);
      if (!container) return;
      const computed = window.getComputedStyle(container);
      if (computed.position === 'static') {
        container.style.position = 'relative';
      }

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.id = `badr-${coin.id}`;
      btn.dataset.coinId = coin.id;
      btn.dataset.testid = `hidden-${coin.id}`;
      btn.className = `badr-hidden-coin-btn ${state.collectedCoins.includes(coin.id) ? 'collected' : ''}`;
      btn.style.cssText = coin.style;
      btn.setAttribute('aria-label', `Collect Hidden Gold Coin ${coin.index} of 8`);
      btn.title = state.lang === 'ar' ? `عملة ذهبية (${coin.index}/8) — اضغط لجمعها!` : `Gold Coin (${coin.index}/8) — Click to collect!`;
      btn.innerHTML = renderModernCoinSvg(coin.index, 42, 'sec');

      btn.addEventListener('click', e => {
        e.stopPropagation();
        handleCollectCoin(coin.id);
      });

      container.appendChild(btn);
    });
  }

  function handleCollectCoin(coinId) {
    if (state.collectedCoins.includes(coinId)) return;
    state.collectedCoins.push(coinId);
    saveState();

    const btn = document.getElementById(`badr-${coinId}`);
    if (btn) btn.classList.add('collected');

    if (state.collectedCoins.length >= 8) {
      playVictoryFanfare();
      launchModernConfetti();
    } else {
      playCoinChime();
    }

    renderHudBar();
    showSideQuestToast();
  }

  function showSideQuestToast() {
    const toast = document.getElementById('badr-sidequest-toast');
    if (!toast) return;

    const count = state.collectedCoins.length;
    const isAr = state.lang === 'ar';
    const slotsHtml = HIDDEN_COINS.map(c => {
      const filled = state.collectedCoins.includes(c.id);
      return `<div class="badr-coin-slot ${filled ? 'filled' : ''}" title="${c.id}">${filled ? renderModernCoinSvg('', 20, `slot_${c.index}`) : ''}</div>`;
    }).join('');

    toast.innerHTML = `
      <div class="badr-sidequest-ribbon">✦ SIDE QUEST</div>
      <div class="badr-coins-slot-row">${slotsHtml}</div>
      <div style="font-family:'JetBrains Mono','Cairo',sans-serif; font-weight:800; color:#FDE047; font-size:0.98rem;">
        COINS ${count}/8
      </div>
      <div style="font-family:'Cairo','Plus Jakarta Sans',sans-serif; font-size:0.85rem; color:#E2E8F0; margin-top:4px;">
        ${
          count >= 8
            ? isAr
              ? '🎉 مبروك! جمعت كل الـ 8 عملات الذهبية في الموقع!'
              : '🎉 Awesome! You found all 8 gold coins across the site!'
            : isAr
            ? `عاش! فاضلك ${8 - count} عملات ذهبية في الموقع ✨`
            : `Nice find! ${8 - count} more gold coins scattered around the site ✨`
        }
      </div>
    `;

    toast.classList.add('visible');
    if (sideQuestToastTimer) clearTimeout(sideQuestToastTimer);
    sideQuestToastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 3400);
  }

  function formatChapterNum(idx) {
    return String(Math.min(12, Math.max(1, idx + 1))).padStart(2, '0') + '/12';
  }

  function renderHudBar() {
    const hudBar = document.getElementById('badr-pixel-hud-bar');
    if (!hudBar) return;

    const isAr = state.lang === 'ar';
    const chapterStr = formatChapterNum(state.chapterIndex);
    const coinsCount = state.collectedCoins.length;

    hudBar.innerHTML = `
      <button type="button" class="pixel-hud-pill-btn" id="badr-hud-tour-btn" data-testid="hud-tour-btn" title="${isAr ? 'افتح قائمة الـ 12 فصل أو ابدأ الجولة' : 'Open 12-Chapter Tour Menu'}">
        <span>🧭 ${isAr ? 'الجولة' : 'TOUR'}</span>
        <span class="pixel-accent">${chapterStr}</span>
      </button>
      <button type="button" class="pixel-hud-pill-btn" id="badr-hud-coins-btn" data-testid="hud-coins-btn" title="${isAr ? 'مهمة العملات الذهبية' : 'Gold Coins Side Quest'}">
        <span style="display:inline-flex;align-items:center;">${renderModernCoinSvg('', 18, 'hud')}</span>
        <span class="pixel-accent" data-testid="hud-coins-count">${coinsCount}/8</span>
      </button>
      <button type="button" class="pixel-hud-pill-btn" id="badr-hud-char-btn" data-testid="hud-char-btn" title="${isAr ? 'تغيير الكاركتر' : 'Customize Character'}">
        <span>✨</span>
        <span class="hidden sm:inline">${isAr ? 'الكاركتر' : 'Avatar'}</span>
      </button>
    `;

    document.getElementById('badr-hud-tour-btn')?.addEventListener('click', () => {
      playModernTone(620, 0.045);
      if (state.mode === 'minimized' || state.mode === 'touring') {
        openChapterChecklistModal();
      } else {
        startTour();
      }
    });

    document.getElementById('badr-hud-coins-btn')?.addEventListener('click', () => {
      playModernTone(740, 0.045);
      openCoinsModal();
    });

    document.getElementById('badr-hud-char-btn')?.addEventListener('click', () => {
      playModernTone(540, 0.045);
      openCharacterCustomizerModal();
    });
  }

  function renderWelcomeModal() {
    const backdrop = document.getElementById('badr-tour-welcome-backdrop');
    if (!backdrop) return;

    if (state.mode !== 'welcome') {
      backdrop.classList.remove('visible');
      return;
    }

    const isAr = state.lang === 'ar';
    const preset = getActivePreset();
    const greeting = getGreeting(state.lang);

    backdrop.innerHTML = `
      <div class="badr-pixel-dialog-wrap" dir="${isAr ? 'rtl' : 'ltr'}">
        <div class="badr-pixel-char-stage">
          <div class="badr-pixel-hello-bubble">${isAr ? 'أهلاً بيك! 👋' : 'Welcome! 👋'}</div>
          <div class="badr-pixel-avatar-box" id="badr-welcome-avatar" title="${isAr ? 'اضغط لتغيير الكاركتر' : 'Click to customize character'}">
            ${renderCharacterMarkup('wave')}
          </div>
        </div>
        <div class="badr-pixel-card">
          <div class="badr-exe-tag">${preset.exeLabel}</div>
          <div class="badr-dialog-body" style="min-height:auto; margin-top:0.35rem; cursor:default;">
            ${
              isAr
                ? `${greeting} 👋 أنا المرشد التفاعلي لموقع <strong>بدر إبراهيم</strong> ✨ تحب تستكشف الموقع بنفسك، ولا آخدك في جولة سريعة على أهم أعمالي ومشاريعي؟`
                : `${greeting} 👋 I'm <strong>Badr's Interactive Guide</strong> ✨ Want to explore the portfolio on your own, or should I take you on a quick guided tour?`
            }
          </div>
          <div class="badr-pixel-btn-row">
            <button type="button" id="badr-start-tour-btn" data-testid="start-tour-btn" data-start="true" class="badr-pixel-btn badr-pixel-btn-primary ${state.welcomeOptionIndex === 0 ? 'kb-selected' : ''}">
              <span>▶ ${isAr ? 'ابدأ الجولة التفاعلية 🧭' : 'Start Guided Tour 🧭'}</span>
            </button>
            <button type="button" id="badr-explore-self-btn" data-testid="explore-myself-btn" class="badr-pixel-btn badr-pixel-btn-secondary ${state.welcomeOptionIndex === 1 ? 'kb-selected' : ''}">
              <span>${isAr ? 'أتصفح بنفسي 😎' : "I'll explore myself 😎"}</span>
            </button>
            <button type="button" id="badr-welcome-lang-btn" data-testid="welcome-lang-btn" class="badr-tour-util-btn" style="margin-inline-start:auto;">
              🌐 ${isAr ? 'ENG' : 'عربي'}
            </button>
          </div>
          <div class="badr-pixel-kbd-hint">← → · ENTER</div>
        </div>
      </div>
    `;

    backdrop.classList.add('visible');

    document.getElementById('badr-start-tour-btn')?.addEventListener('click', () => {
      playCoinChime();
      startTour();
    });

    document.getElementById('badr-explore-self-btn')?.addEventListener('click', () => {
      playModernTone(420, 0.045);
      dismissToExplore();
    });

    document.getElementById('badr-welcome-lang-btn')?.addEventListener('click', () => {
      toggleTourLanguage();
    });

    document.getElementById('badr-welcome-avatar')?.addEventListener('click', () => {
      openCharacterCustomizerModal();
    });
  }

  function ensureHomeViewVisible() {
    if (window.location.hash && !['#hero', '#skills', '#experience', '#education', '#certificates', '#projects', '#blog', '#testimonials', '#cta'].includes(window.location.hash)) {
      window.location.hash = '';
    }
  }

  function scrollToCurrentChapterTarget() {
    const chapter = TOUR_CHAPTERS[state.chapterIndex];
    if (!chapter) return;
    ensureHomeViewVisible();

    const target = document.querySelector(chapter.targetSelector);
    if (!target) return;

    const htmlEl = document.documentElement;
    const prevScrollBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = 'auto';

    const rect = target.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;
    const offset = Math.max(0, absoluteTop - 110);
    window.scrollTo(0, offset);

    requestAnimationFrame(() => {
      htmlEl.style.scrollBehavior = prevScrollBehavior;
      updateSpotlightPosition();
    });
    setTimeout(updateSpotlightPosition, 120);
  }

  function updateSpotlightPosition() {
    const spotlight = document.getElementById('badr-tour-spotlight');
    if (!spotlight) return;

    if (state.mode !== 'touring') {
      spotlight.classList.remove('active');
      return;
    }

    const chapter = TOUR_CHAPTERS[state.chapterIndex];
    const target = chapter ? document.querySelector(chapter.targetSelector) : null;
    if (!target) {
      spotlight.classList.remove('active');
      return;
    }

    const rect = target.getBoundingClientRect();
    const pad = 10;
    const top = Math.max(8, rect.top - pad);
    const left = Math.max(8, rect.left - pad);
    const width = Math.min(window.innerWidth - 16, rect.width + pad * 2);
    const height = Math.min(window.innerHeight - 160, Math.max(120, rect.height + pad * 2));

    spotlight.style.top = `${top}px`;
    spotlight.style.left = `${left}px`;
    spotlight.style.width = `${width}px`;
    spotlight.style.height = `${height}px`;
    spotlight.setAttribute('data-chapter-tag', `✦ CHAPTER ${formatChapterNum(state.chapterIndex)}`);
    spotlight.classList.add('active');
  }

  function renderTourDock() {
    const dock = document.getElementById('badr-tour-dock');
    if (!dock) return;

    if (state.mode !== 'touring') {
      dock.classList.remove('visible');
      updateSpotlightPosition();
      return;
    }

    dock.classList.add('visible');
    const isAr = state.lang === 'ar';
    const chapter = TOUR_CHAPTERS[state.chapterIndex] || TOUR_CHAPTERS[0];
    const preset = getActivePreset();
    const lines = chapter.lines[state.lang] || chapter.lines.en;
    const lineText = lines[state.lineIndex] || lines[0];

    const pipsHtml = TOUR_CHAPTERS.map((ch, idx) => {
      const isCurrent = idx === state.chapterIndex;
      const isVisited = state.visitedChapters.includes(idx);
      return `<button type="button" class="badr-tour-pip ${isCurrent ? 'active' : isVisited ? 'visited' : ''}" data-jump-chapter="${idx}" title="${ch.number}. ${ch.title[state.lang]}"></button>`;
    }).join('');

    dock.innerHTML = `
      <div class="badr-pixel-dialog-wrap" dir="${isAr ? 'rtl' : 'ltr'}">
        <div class="badr-pixel-char-stage">
          <div class="badr-pixel-hello-bubble">${chapter.shortLabel[state.lang]}</div>
          <div class="badr-pixel-avatar-box" id="badr-dock-avatar" title="${isAr ? 'اضغط لتغيير الكاركتر' : 'Click to customize character'}">
            ${renderCharacterMarkup(chapter.pose)}
          </div>
        </div>
        <div class="badr-pixel-card">
          <div class="badr-exe-tag">${preset.exeLabel}</div>
          <div class="badr-dialog-header">
            <div class="badr-dialog-title" data-testid="tour-chapter-title">${chapter.title[state.lang]}</div>
            <div class="badr-dialog-chapter-badge" data-testid="tour-chapter-counter">CHAPTER ${chapter.number}/12</div>
          </div>
          <div class="badr-dialog-body" id="badr-typewriter-box" data-testid="tour-dialog-text" title="${isAr ? 'اضغط لإظهار النص بالكامل' : 'Click to complete line'}">
            <span id="badr-typewriter-span"></span><span class="badr-typewriter-cursor"></span>
          </div>
          <div class="badr-tour-controls-bar">
            <div class="flex items-center gap-2">
              <div class="badr-tour-pips">${pipsHtml}</div>
              <span style="font-family:'JetBrains Mono',monospace; font-size:0.72rem; color:#94A3B8;">
                ${state.lineIndex + 1}/${lines.length}
              </span>
              <button type="button" id="badr-open-chapters-btn" data-testid="tour-chapters-list-btn" class="badr-tour-util-btn">
                ☰ ${isAr ? 'الفصول' : 'CHAPTERS'}
              </button>
            </div>

            <div class="flex items-center gap-1.5 flex-wrap">
              <button type="button" id="badr-mute-btn" data-testid="tour-mute-btn" class="badr-tour-util-btn" aria-label="Toggle tour sound">
                ${state.muted ? '🔇' : '🔊'}
              </button>
              <button type="button" id="badr-lang-btn" data-testid="tour-lang-btn" class="badr-tour-util-btn">
                🌐 ${isAr ? 'ENG' : 'عربي'}
              </button>
              <button type="button" id="badr-skip-section-btn" data-testid="tour-skip-btn" class="badr-tour-util-btn">
                ${isAr ? 'تخطي ⏭' : 'SKIP ⏭'}
              </button>
              <button type="button" id="badr-prev-btn" data-testid="tour-back-btn" class="badr-pixel-btn badr-pixel-btn-secondary !py-1.5 !px-3.5 !text-xs" ${state.chapterIndex === 0 && state.lineIndex === 0 ? 'disabled style="opacity:0.45;cursor:not-allowed;"' : ''}>
                ${isAr ? '◀ السابق' : '◀ BACK'}
              </button>
              <button type="button" id="badr-next-btn" data-testid="tour-next-btn" class="badr-pixel-btn badr-pixel-btn-primary !py-1.5 !px-4 !text-xs">
                ${
                  state.chapterIndex === TOUR_CHAPTERS.length - 1 && state.lineIndex === lines.length - 1
                    ? isAr
                      ? 'إنهاء الجولة 🎉'
                      : 'FINISH 🎉'
                    : isAr
                    ? 'التالي ▶'
                    : 'NEXT ▶'
                }
              </button>
              <button type="button" id="badr-close-tour-btn" data-testid="tour-close-btn" class="badr-tour-util-btn" title="${isAr ? 'إغلاق الجولة' : 'Exit tour'}">
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    startTypewriter(lineText);

    document.getElementById('badr-typewriter-box')?.addEventListener('click', () => {
      if (isTyping) {
        finishTypewriterImmediately();
      } else {
        handleNextStep();
      }
    });

    document.getElementById('badr-next-btn')?.addEventListener('click', () => {
      if (isTyping) {
        finishTypewriterImmediately();
        return;
      }
      playModernTone(580, 0.045);
      handleNextStep();
    });

    document.getElementById('badr-prev-btn')?.addEventListener('click', () => {
      playModernTone(440, 0.045);
      handlePrevStep();
    });

    document.getElementById('badr-skip-section-btn')?.addEventListener('click', () => {
      playModernTone(660, 0.045);
      jumpToChapter(state.chapterIndex + 1);
    });

    document.getElementById('badr-mute-btn')?.addEventListener('click', () => {
      state.muted = !state.muted;
      saveState();
      renderTourDock();
    });

    document.getElementById('badr-lang-btn')?.addEventListener('click', () => {
      toggleTourLanguage();
    });

    document.getElementById('badr-open-chapters-btn')?.addEventListener('click', () => {
      openChapterChecklistModal();
    });

    document.getElementById('badr-close-tour-btn')?.addEventListener('click', () => {
      dismissToExplore();
    });

    document.getElementById('badr-dock-avatar')?.addEventListener('click', () => {
      openCharacterCustomizerModal();
    });

    dock.querySelectorAll('[data-jump-chapter]').forEach(btn => {
      btn.addEventListener('click', e => {
        const idx = Number(e.currentTarget.getAttribute('data-jump-chapter'));
        jumpToChapter(idx);
      });
    });

    updateSpotlightPosition();
  }

  function startTypewriter(text) {
    if (typewriterTimer) clearInterval(typewriterTimer);
    currentFullText = text;
    isTyping = true;
    const span = document.getElementById('badr-typewriter-span');
    if (!span) return;
    span.textContent = '';

    let i = 0;
    typewriterTimer = setInterval(() => {
      if (i < currentFullText.length) {
        span.textContent += currentFullText.charAt(i);
        if (i % 4 === 0) {
          playModernTone(500 + (i % 5) * 28, 0.016, 'sine', 0.012);
        }
        i++;
      } else {
        finishTypewriterImmediately();
      }
    }, 18);
  }

  function finishTypewriterImmediately() {
    if (typewriterTimer) {
      clearInterval(typewriterTimer);
      typewriterTimer = null;
    }
    isTyping = false;
    const span = document.getElementById('badr-typewriter-span');
    if (span) span.textContent = currentFullText;
  }

  function startTour() {
    state.mode = 'touring';
    state.chapterIndex = 0;
    state.lineIndex = 0;
    if (!state.visitedChapters.includes(0)) state.visitedChapters.push(0);
    document.body.dataset.state = 'playing';
    saveState();
    renderAll();
    scrollToCurrentChapterTarget();
  }

  function dismissToExplore() {
    finishTypewriterImmediately();
    state.mode = 'minimized';
    document.body.dataset.state = 'exploring';
    saveState();
    renderAll();
  }

  function handleNextStep() {
    const chapter = TOUR_CHAPTERS[state.chapterIndex];
    if (!chapter) return;
    const lines = chapter.lines[state.lang] || chapter.lines.en;
    if (state.lineIndex + 1 < lines.length) {
      state.lineIndex += 1;
      renderTourDock();
      return;
    }
    jumpToChapter(state.chapterIndex + 1);
  }

  function handlePrevStep() {
    if (state.lineIndex > 0) {
      state.lineIndex -= 1;
      renderTourDock();
      return;
    }
    if (state.chapterIndex > 0) {
      jumpToChapter(state.chapterIndex - 1);
    }
  }

  function jumpToChapter(nextIdx) {
    finishTypewriterImmediately();
    if (nextIdx >= TOUR_CHAPTERS.length) {
      state.mode = 'completed';
      document.body.dataset.state = 'completed';
      saveState();
      playVictoryFanfare();
      launchModernConfetti();
      renderAll();
      return;
    }

    const clamped = Math.max(0, Math.min(TOUR_CHAPTERS.length - 1, nextIdx));
    state.mode = 'touring';
    state.chapterIndex = clamped;
    state.lineIndex = 0;
    if (!state.visitedChapters.includes(clamped)) {
      state.visitedChapters.push(clamped);
    }
    saveState();
    renderAll();
    scrollToCurrentChapterTarget();
  }

  function renderTourCompleteModal() {
    const modal = document.getElementById('badr-tour-complete-modal');
    if (!modal) return;

    if (state.mode !== 'completed') {
      modal.classList.remove('visible');
      return;
    }

    const isAr = state.lang === 'ar';
    const preset = getActivePreset();
    const coinsCount = state.collectedCoins.length;

    modal.innerHTML = `
      <div class="badr-pixel-card" style="max-width:560px; width:100%; text-align:center;" dir="${isAr ? 'rtl' : 'ltr'}">
        <div class="badr-exe-tag">${preset.exeLabel}</div>
        <div class="badr-complete-banner" data-testid="tour-complete-banner">
          ${isAr ? '🎉 اكتملت الجولة التفاعلية!' : '🎉 TOUR COMPLETE!'}
        </div>
        <div style="display:flex; justify-content:center; margin-bottom:0.75rem;">
          <div class="badr-pixel-avatar-box" style="height:110px;">
            ${renderCharacterMarkup('celebrate')}
          </div>
        </div>
        <p style="font-family:'Cairo','Plus Jakarta Sans',sans-serif; font-size:1rem; color:#E2E8F0; line-height:1.7; margin-bottom:1.25rem;">
          ${
            isAr
              ? `كده خلصنا الجولة بالكامل! مبسوط جداً إنك لفيت معايا في البورتفوليو 🙌 جمعت لحد دلوقتي <strong style="color:#FDE047;">${coinsCount}/8 عملات ذهبية</strong>. تحب تكلمني نبدأ مشروعك ولا تكمل تجميع العملات؟`
              : `That's the grand tour! Thanks for exploring my portfolio 🙌 You've collected <strong style="color:#FDE047;">${coinsCount}/8 gold coins</strong> so far. Ready to start a project together or hunt the remaining coins?`
          }
        </p>
        <div class="badr-pixel-btn-row" style="justify-content:center;">
          <button type="button" id="badr-complete-contact-btn" data-testid="complete-contact-btn" class="badr-pixel-btn badr-pixel-btn-primary">
            ✉️ ${isAr ? 'تواصل معي الآن' : "Let's Talk / Contact"}
          </button>
          <button type="button" id="badr-complete-coins-btn" data-testid="complete-coins-btn" class="badr-pixel-btn badr-pixel-btn-secondary">
            <span style="display:inline-flex;align-items:center;">${renderModernCoinSvg('', 18, 'comp')}</span>
            <span>${isAr ? `العملات الذهبية (${coinsCount}/8)` : `Gold Coins (${coinsCount}/8)`}</span>
          </button>
          <button type="button" id="badr-complete-restart-btn" data-testid="complete-restart-btn" class="badr-tour-util-btn">
            🔄 ${isAr ? 'إعادة الجولة' : 'Restart Tour'}
          </button>
          <button type="button" id="badr-complete-close-btn" data-testid="complete-close-btn" class="badr-tour-util-btn">
            ✕ ${isAr ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    `;

    modal.classList.add('visible');

    document.getElementById('badr-complete-contact-btn')?.addEventListener('click', () => {
      dismissToExplore();
      const contactModal = document.getElementById('contact-modal');
      if (contactModal) {
        contactModal.classList.remove('modal-hidden');
      } else {
        document.getElementById('contact-fab-btn')?.click();
      }
    });

    document.getElementById('badr-complete-coins-btn')?.addEventListener('click', () => {
      dismissToExplore();
      openCoinsModal();
    });

    document.getElementById('badr-complete-restart-btn')?.addEventListener('click', () => {
      startTour();
    });

    document.getElementById('badr-complete-close-btn')?.addEventListener('click', () => {
      dismissToExplore();
    });
  }

  // 12-Chapter Interactive Checklist Modal
  function openChapterChecklistModal() {
    const modal = document.getElementById('badr-drawer-modal');
    if (!modal) return;
    const isAr = state.lang === 'ar';

    const listHtml = TOUR_CHAPTERS.map((ch, idx) => {
      const done = state.visitedChapters.includes(idx);
      const isCurrent = state.mode === 'touring' && idx === state.chapterIndex;
      return `
        <button type="button" class="badr-chapter-item-btn ${isCurrent ? 'current' : ''}" data-select-chapter="${idx}">
          <div style="display:flex; align-items:center; gap:0.7rem;">
            <span class="badr-chapter-check ${done ? 'done' : ''}">${done ? '✓' : ''}</span>
            <span>${String(ch.number).padStart(2, '0')}. ${ch.title[state.lang]}</span>
          </div>
          <span style="font-size:0.76rem; color:#FDE047; font-weight:700;">${ch.shortLabel[state.lang]}</span>
        </button>
      `;
    }).join('');

    modal.innerHTML = `
      <div class="badr-drawer-card" dir="${isAr ? 'rtl' : 'ltr'}">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <h3 style="font-family:'Cairo','Plus Jakarta Sans',sans-serif; font-weight:800; font-size:1.15rem; color:#FDE047;">
            🧭 ${isAr ? 'خريطة الجولة التفاعلية (12 فصل)' : 'Interactive Tour Chapters (12/12)'}
          </h3>
          <button type="button" id="badr-close-drawer-btn" class="badr-tour-util-btn">✕</button>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.48rem; margin-bottom:1.1rem;">
          ${listHtml}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <button type="button" id="badr-drawer-start-beginning" class="badr-pixel-btn badr-pixel-btn-primary !py-2 !px-4 !text-xs">
            ▶ ${isAr ? 'ابدأ من الفصل الأول' : 'Start from Chapter 1'}
          </button>
          <button type="button" id="badr-drawer-close-2" class="badr-tour-util-btn">
            ${isAr ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    `;

    modal.classList.add('visible');

    const closeDrawer = () => modal.classList.remove('visible');
    document.getElementById('badr-close-drawer-btn')?.addEventListener('click', closeDrawer);
    document.getElementById('badr-drawer-close-2')?.addEventListener('click', closeDrawer);
    document.getElementById('badr-drawer-start-beginning')?.addEventListener('click', () => {
      closeDrawer();
      startTour();
    });

    modal.querySelectorAll('[data-select-chapter]').forEach(btn => {
      btn.addEventListener('click', e => {
        const idx = Number(e.currentTarget.getAttribute('data-select-chapter'));
        closeDrawer();
        jumpToChapter(idx);
      });
    });
  }

  // Hidden Coins Side Quest Modal with Hint & Auto-Scroll to Uncollected Coin
  function openCoinsModal() {
    const modal = document.getElementById('badr-drawer-modal');
    if (!modal) return;
    const isAr = state.lang === 'ar';
    const count = state.collectedCoins.length;
    const nextCoin = HIDDEN_COINS.find(c => !state.collectedCoins.includes(c.id));

    const coinsListHtml = HIDDEN_COINS.map(c => {
      const found = state.collectedCoins.includes(c.id);
      return `
        <div style="display:flex; align-items:center; justify-content:space-between; padding:0.65rem 0.9rem; background:rgba(30,41,59,0.65); border:1px solid ${found ? 'rgba(250,204,21,0.6)' : 'rgba(255,255,255,0.08)'}; border-radius:14px;">
          <div style="display:flex; align-items:center; gap:0.65rem; font-family:'Cairo','Plus Jakarta Sans',sans-serif; font-size:0.9rem;">
            <span style="display:inline-flex;align-items:center;">${found ? renderModernCoinSvg(c.index, 24, 'list') : '🔒'}</span>
            <span style="color:${found ? '#FDE047' : '#E2E8F0'}; font-weight:${found ? '700' : '500'};">
              ${isAr ? `العملة #${c.index}: ` : `Coin #${c.index}: `}${c.hint[state.lang]}
            </span>
          </div>
          <span style="font-family:'JetBrains Mono','Cairo',sans-serif; font-size:0.74rem; font-weight:700; color:${found ? '#4ADE80' : '#94A3B8'};">
            ${found ? (isAr ? 'تم جمعها ✓' : 'FOUND ✓') : isAr ? 'مخفية' : 'HIDDEN'}
          </span>
        </div>
      `;
    }).join('');

    modal.innerHTML = `
      <div class="badr-drawer-card" dir="${isAr ? 'rtl' : 'ltr'}">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem;">
          <div class="badr-sidequest-ribbon" style="margin-bottom:0;">✦ SIDE QUEST · COINS ${count}/8</div>
          <button type="button" id="badr-close-drawer-btn" class="badr-tour-util-btn">✕</button>
        </div>
        <p style="font-family:'Cairo','Plus Jakarta Sans',sans-serif; font-size:0.92rem; color:#CBD5E1; margin-bottom:0.95rem;">
          ${
            isAr
              ? 'توجد 8 عملات ذهبية ثلاثية الأبعاد موزعة في أقسام الموقع! اضغط على أي عملة ذهبية لامعة لجمعها، أو استخدم زر التوجيه للوصول للعملة التالية.'
              : '8 modern 3D gold coins are scattered across the portfolio! Click any glowing gold coin on the page to collect it, or jump to the next coin below.'
          }
        </p>
        <div style="display:flex; flex-direction:column; gap:0.45rem; margin-bottom:1.1rem;">
          ${coinsListHtml}
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:0.6rem; justify-content:space-between; align-items:center;">
          ${
            nextCoin
              ? `<button type="button" id="badr-locate-next-coin-btn" data-testid="locate-next-coin-btn" class="badr-pixel-btn badr-pixel-btn-primary !py-2 !px-4 !text-xs">
                   🧭 ${isAr ? `وديني عند العملة #${nextCoin.index}` : `Go to Coin #${nextCoin.index}`}
                 </button>`
              : `<span style="color:#4ADE80; font-family:'Cairo',sans-serif; font-weight:800;">🎉 ${isAr ? 'جمعت كل العملات 8/8!' : 'All 8/8 Coins Collected!'}</span>`
          }
          <button type="button" id="badr-reset-coins-btn" class="badr-tour-util-btn">
            🔄 ${isAr ? 'إعادة ضبط العملات' : 'Reset Coins'}
          </button>
        </div>
      </div>
    `;

    modal.classList.add('visible');

    const closeDrawer = () => modal.classList.remove('visible');
    document.getElementById('badr-close-drawer-btn')?.addEventListener('click', closeDrawer);

    document.getElementById('badr-locate-next-coin-btn')?.addEventListener('click', () => {
      closeDrawer();
      if (!nextCoin) return;
      ensureHomeViewVisible();
      const el = document.getElementById(`badr-${nextCoin.id}`) || document.querySelector(nextCoin.selector);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    document.getElementById('badr-reset-coins-btn')?.addEventListener('click', () => {
      state.collectedCoins = [];
      saveState();
      document.querySelectorAll('.badr-hidden-coin-btn').forEach(b => b.classList.remove('collected'));
      renderHudBar();
      openCoinsModal();
    });
  }

  // Character Customizer Modal (Allows Badr to pick a modern preset OR paste/upload his own character image!)
  function openCharacterCustomizerModal() {
    const modal = document.getElementById('badr-drawer-modal');
    if (!modal) return;
    const isAr = state.lang === 'ar';

    const presetsHtml = CHARACTER_PRESETS.map(p => {
      const selected = state.characterPreset === p.id && !state.customCharacterUrl;
      return `
        <button type="button" class="badr-chapter-item-btn ${selected ? 'current' : ''}" data-preset-id="${p.id}">
          <span>${p.name[state.lang]}</span>
          <span style="font-family:'Plus Jakarta Sans',sans-serif; font-size:0.72rem; font-weight:800; color:#FDE047;">${p.exeLabel}</span>
        </button>
      `;
    }).join('');

    modal.innerHTML = `
      <div class="badr-drawer-card" dir="${isAr ? 'rtl' : 'ltr'}">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.9rem;">
          <h3 style="font-family:'Cairo','Plus Jakarta Sans',sans-serif; font-weight:800; font-size:1.15rem; color:#FDE047;">
            ✨ ${isAr ? 'تخصيص وتبديل الكاركتر الموديرن' : 'Customize / Replace Modern Character'}
          </h3>
          <button type="button" id="badr-close-drawer-btn" class="badr-tour-util-btn">✕</button>
        </div>

        <div style="display:flex; flex-direction:column; gap:0.48rem; margin-bottom:1.15rem;">
          <label style="font-size:0.82rem; color:#94A3B8; font-family:'Cairo',sans-serif;">
            ${isAr ? '1. اختر ستايل موديرن جاهز:' : '1. Choose a Built-in Modern Style:'}
          </label>
          ${presetsHtml}
        </div>

        <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:1rem; margin-bottom:1.1rem;">
          <label for="badr-custom-char-input" style="display:block; font-size:0.86rem; font-weight:700; color:#F8FAFC; margin-bottom:0.45rem; font-family:'Cairo',sans-serif;">
            ${isAr ? '2. أو ضع رابط صورة الكاركتر الخاص بك أو ارفعها من جهازك (PNG / GIF / WebP / SVG):' : '2. Or Paste / Upload Your Own Character Image (PNG / GIF / WebP / SVG):'}
          </label>
          <div style="display:flex; gap:0.55rem; align-items:center;">
            <input
              type="url"
              id="badr-custom-char-input"
              data-testid="custom-char-url-input"
              value="${state.customCharacterUrl || ''}"
              placeholder="https://.../my-character.png"
              style="flex:1; padding:0.6rem 0.85rem; background:rgba(15,23,42,0.85); border:1px solid rgba(255,255,255,0.18); color:#fff; font-size:0.85rem; border-radius:12px;"
            />
            <label style="padding:0.6rem 0.95rem; background:rgba(245,158,11,0.15); border:1px solid rgba(245,158,11,0.6); color:#FDE047; font-size:0.82rem; font-weight:700; border-radius:12px; cursor:pointer; white-space:nowrap; font-family:'Cairo',sans-serif;">
              📁 ${isAr ? 'رفع صورة' : 'Upload File'}
              <input type="file" id="badr-custom-char-file" accept="image/*" style="display:none;" />
            </label>
          </div>
          <p style="font-size:0.76rem; color:#94A3B8; margin-top:0.4rem; font-family:'Cairo',sans-serif;">
            ${
              isAr
                ? '💡 يمكنك أيضاً تعديل المتغير customCharacterUrl في أعلى ملف tour-feature.js ليظهر لجميع الزوار دائماً.'
                : '💡 You can also set customCharacterUrl at the top of tour-feature.js to make it permanent for all visitors.'
            }
          </p>
        </div>

        <div style="display:flex; justify-content:flex-end; gap:0.6rem;">
          <button type="button" id="badr-save-custom-char-btn" data-testid="save-custom-char-btn" class="badr-pixel-btn badr-pixel-btn-primary !py-2 !px-4 !text-xs">
            ${isAr ? 'حفظ الكاركتر ✓' : 'Save Character ✓'}
          </button>
        </div>
      </div>
    `;

    modal.classList.add('visible');

    const closeDrawer = () => modal.classList.remove('visible');
    document.getElementById('badr-close-drawer-btn')?.addEventListener('click', closeDrawer);

    modal.querySelectorAll('[data-preset-id]').forEach(btn => {
      btn.addEventListener('click', e => {
        const presetId = e.currentTarget.getAttribute('data-preset-id');
        state.characterPreset = presetId;
        state.customCharacterUrl = '';
        saveState();
        closeDrawer();
        renderAll();
      });
    });

    const fileInput = document.getElementById('badr-custom-char-file');
    const urlInput = document.getElementById('badr-custom-char-input');
    fileInput?.addEventListener('change', e => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        const dataUrl = String(ev.target?.result || '');
        if (urlInput) urlInput.value = dataUrl;
        state.customCharacterUrl = dataUrl;
        saveState();
        closeDrawer();
        renderAll();
      };
      reader.readAsDataURL(file);
    });

    document.getElementById('badr-save-custom-char-btn')?.addEventListener('click', () => {
      state.customCharacterUrl = urlInput ? urlInput.value.trim() : '';
      saveState();
      closeDrawer();
      renderAll();
    });
  }

  function toggleTourLanguage() {
    state.lang = state.lang === 'ar' ? 'en' : 'ar';
    saveState();
    const langLink = document.querySelector(`.language-option[data-lang="${state.lang}"]`);
    if (langLink) {
      langLink.click();
    }
    renderAll();
  }

  function handleKeydown(e) {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) {
      return;
    }

    if (state.mode === 'welcome') {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        state.welcomeOptionIndex = state.welcomeOptionIndex === 0 ? 1 : 0;
        renderWelcomeModal();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (state.welcomeOptionIndex === 0) {
          startTour();
        } else {
          dismissToExplore();
        }
      } else if (e.key === 'Escape') {
        dismissToExplore();
      }
    } else if (state.mode === 'touring') {
      if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
        if (e.key === ' ') e.preventDefault();
        if (isTyping) {
          finishTypewriterImmediately();
        } else {
          handleNextStep();
        }
      } else if (e.key === 'ArrowLeft') {
        handlePrevStep();
      } else if (e.key === 'Escape') {
        dismissToExplore();
      }
    }
  }

  // Smooth Modern Confetti Celebration (Circles & Rounded Ribbons)
  function launchModernConfetti() {
    const canvas = document.getElementById('badr-pixel-confetti');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#FDE047', '#F59E0B', '#38BDF8', '#34D399', '#A855F7', '#FB7185'];
    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height * 0.4,
      r: 4 + Math.random() * 5,
      vx: (Math.random() - 0.5) * 4.2,
      vy: 2.5 + Math.random() * 4.2,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.15,
      isCircle: Math.random() > 0.45,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    let frame = 0;
    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = p.color;
        if (p.isCircle) {
          ctx.beginPath();
          ctx.arc(0, 0, p.r, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.roundRect(-p.r, -p.r * 0.55, p.r * 2.2, p.r * 1.1, 3);
          ctx.fill();
        }
        ctx.restore();
      });
      frame++;
      if (frame < 160) {
        requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    requestAnimationFrame(tick);
  }

  function renderAll() {
    renderHudBar();
    renderWelcomeModal();
    renderTourDock();
    renderTourCompleteModal();
  }

  window.BadrPixelTwin = {
    startTour,
    jumpToChapter,
    dismissToExplore,
    openCharacterCustomizerModal,
    openCoinsModal,
    openChapterChecklistModal,
    getState: () => state
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountTourUI);
  } else {
    mountTourUI();
  }
})();
