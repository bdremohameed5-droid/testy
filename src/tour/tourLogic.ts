export type TourLang = 'en' | 'ar';
export type TourMode = 'welcome' | 'touring' | 'minimized' | 'completed';
export type CharacterPresetId = 'puffer-twin' | 'blender-hoodie' | 'creative-suit' | 'cyber-artist';

export interface TourChapter {
  id: string;
  number: number;
  targetSelector: string;
  pose: 'wave' | 'talk' | 'point' | 'celebrate';
  title: {
    en: string;
    ar: string;
  };
  lines: {
    en: string[];
    ar: string[];
  };
}

export interface HiddenCoinSpec {
  id: string;
  index: number;
  anchorSelector: string;
  positionHint: {
    en: string;
    ar: string;
  };
}

export interface CharacterPreset {
  id: CharacterPresetId;
  name: {
    en: string;
    ar: string;
  };
  exeLabel: string;
  jacketColor: string;
  shirtColor: string;
  hairColor: string;
  glassesColor: string;
  accentColor: string;
}

export interface TourState {
  mode: TourMode;
  lang: TourLang;
  chapterIndex: number; // 0 to 11
  lineIndex: number;
  collectedCoins: string[]; // array of coin IDs (max 8)
  visitedChapters: number[]; // indices 0..11
  muted: boolean;
  characterPreset: CharacterPresetId;
  customCharacterUrl: string;
}

export const TOTAL_COINS = 8;

export const CHARACTER_PRESETS: CharacterPreset[] = [
  {
    id: 'puffer-twin',
    name: {
      en: 'Pixel Twin (Orange Puffer & Shades)',
      ar: 'بيكسل بدر (جاكيت برتقالي ونظارة)'
    },
    exeLabel: 'BADR.EXE',
    jacketColor: '#F97316',
    shirtColor: '#1E293B',
    hairColor: '#27170E',
    glassesColor: '#38BDF8',
    accentColor: '#FACC15'
  },
  {
    id: 'blender-hoodie',
    name: {
      en: '3D Artist (Gold & Black Hoodie)',
      ar: 'فنان 3D (هودي أسود وذهبي)'
    },
    exeLabel: 'BADR_3D.EXE',
    jacketColor: '#D4AF37',
    shirtColor: '#0F172A',
    hairColor: '#1C1917',
    glassesColor: '#F59E0B',
    accentColor: '#F59E0B'
  },
  {
    id: 'creative-suit',
    name: {
      en: 'Art Director (Emerald & Espresso)',
      ar: 'مخرج فني (كلاسيك زمردي)'
    },
    exeLabel: 'DIRECTOR.EXE',
    jacketColor: '#10B981',
    shirtColor: '#18181B',
    hairColor: '#292524',
    glassesColor: '#A7F3D0',
    accentColor: '#34D399'
  },
  {
    id: 'cyber-artist',
    name: {
      en: 'Neon Synth (Violet & Cyan)',
      ar: 'نيون كريتيف (بنفسجي وسماوي)'
    },
    exeLabel: 'CYBER_BADR.EXE',
    jacketColor: '#8B5CF6',
    shirtColor: '#090D16',
    hairColor: '#1E1B4B',
    glassesColor: '#22D3EE',
    accentColor: '#A855F7'
  }
];

export const TOUR_CHAPTERS: TourChapter[] = [
  {
    id: 'hero-intro',
    number: 1,
    targetSelector: '#hero',
    pose: 'wave',
    title: {
      en: 'Meet Badr Ibraheem',
      ar: 'تعرف على بدر إبراهيم'
    },
    lines: {
      en: [
        'Welcome! I am Badr Ibraheem — Graphic Designer, 3D Artist, and Web Developer from Faiyum, Egypt.',
        'I merge brand identity, photorealistic 3D modeling in Blender, and interactive web engineering. Watch each section light up as we go!'
      ],
      ar: [
        'أهلاً بيك! أنا بدر إبراهيم — مصمم جرافيك، فنان 3D ومطور ويب من الفيوم، مصر.',
        'بدمج بين تصميم الهوية البصرية، النمذجة ثلاثية الأبعاد في Blender، وتطوير المواقع التفاعلية. يلا نكتشف الموقع سكشن سكشن!'
      ]
    }
  },
  {
    id: 'hero-showcase',
    number: 2,
    targetSelector: '#hero-image-container',
    pose: 'point',
    title: {
      en: 'Visual Art Direction',
      ar: 'الإخراج البصري والـ 3D'
    },
    lines: {
      en: [
        'Every visual frame is crafted with cinematic lighting, clean composition, and attention to the smallest pixel.',
        'You can also switch between Dark and Light themes at any time from the top navigation bar.'
      ],
      ar: [
        'كل تفصيلة بصرية هنا متصممة بإضاءة سينمائية وتكوين دقيق لحد آخر بيكسل.',
        'وتقدر تبدل بين الوضع الليلي والنهاري في أي وقت من الشريط العلوي.'
      ]
    }
  },
  {
    id: 'hero-store-cta',
    number: 3,
    targetSelector: '#hero-ctas',
    pose: 'talk',
    title: {
      en: 'Digital Store & Quick Actions',
      ar: 'المتجر الرقمي وأهم الروابط'
    },
    lines: {
      en: [
        'Looking for ready-to-use 3D models, design templates, or premium creative assets? My built-in Digital Store has you covered.',
        'You can jump straight to my portfolio work or browse the store with a single click.'
      ],
      ar: [
        'بتدور على قوالب 3D جاهزة، ملفات تصميم، أو أدوات رقمية؟ المتجر الرقمي الخاص بي بيجمعلك كل ده في مكان واحد.',
        'تقدر تتصفح أعمالي مباشرة أو تدخل المتجر بضغطة زر.'
      ]
    }
  },
  {
    id: 'skills-overview',
    number: 4,
    targetSelector: '#skills',
    pose: 'point',
    title: {
      en: 'Core Competencies',
      ar: 'المهارات الأساسية'
    },
    lines: {
      en: [
        'Here is my creative toolkit: Branding & Visual Identity (Illustrator, Photoshop, InDesign) and UI/UX Design in Figma.',
        'Every brand system starts with strategy and scales cleanly across print and digital touchpoints.'
      ],
      ar: [
        'هنا خلاصة أدواتي الإبداعية: تصميم الهوية البصرية والشعارات، وتصميم واجهات وتجربة المستخدم UI/UX على Figma.',
        'كل هوية بصرية بتبدأ بفكرة مدروسة وتتنفذ بأعلى جودة للطباعة والديجيتال.'
      ]
    }
  },
  {
    id: 'skills-3d-web',
    number: 5,
    targetSelector: '#skills',
    pose: 'celebrate',
    title: {
      en: '3D Modeling & Web Engineering',
      ar: 'الـ 3D وتطوير الويب'
    },
    lines: {
      en: [
        'Beyond 2D graphics, I build 3D environments and product renders in Blender, plus responsive front-end experiences with HTML, Tailwind CSS, and JavaScript.',
        'Combining design and code means nothing gets lost in translation between mockup and production!'
      ],
      ar: [
        'مش بس جرافيك 2D — أنا بصمم مجسمات وبيئات ثلاثية الأبعاد على Blender، وببرمج واجهات ويب تفاعلية بـ HTML وTailwind وJavaScript.',
        'الجمع بين التصميم والكود بيخلي النتيجة النهائية مطابقة للخيال بدون أي تنازلات!'
      ]
    }
  },
  {
    id: 'experience-timeline',
    number: 6,
    targetSelector: '#experience',
    pose: 'talk',
    title: {
      en: 'Professional Journey',
      ar: 'الخبرات والرحلة المهنية'
    },
    lines: {
      en: [
        'Currently serving as Graphic Designer & E-Marketer at Gedar (Jedar) Decor Exhibition in Egypt.',
        'Previously trained in Hotel Marketing, Adobe Graphic Design in Nasr City, and EgyptAir inflight service standards.'
      ],
      ar: [
        'حالياً بشتغل مصمم جرافيك ومسوق إلكتروني في معرض جدار للديكور.',
        'وكمان مريت بتدريبات عملية في التسويق الفندقي، وكورسات تصميم الجرافيك من Adobe، ومعايير الضيافة الجوية بالتعاون مع مصر للطيران.'
      ]
    }
  },
  {
    id: 'education-languages',
    number: 7,
    targetSelector: '#education',
    pose: 'point',
    title: {
      en: 'Education & Languages',
      ar: 'التعليم واللغات'
    },
    lines: {
      en: [
        'Graduated in June 2025 with a Bachelor of Tourism and Hotels (Hospitality Management Department) from the Higher Institute of Tourism and Hotels, 6th of October.',
        'Hospitality taught me how to craft memorable guest and user experiences!'
      ],
      ar: [
        'حاصل على بكالوريوس السياحة والفنادق (قسم إدارة الضيافة) دفعة يونيو 2025 من المعهد العالي للسياحة والفنادق بـ 6 أكتوبر.',
        'دراسة الضيافة علمتني إزاي أصنع تجربة استثنائية لأي عميل أو زائر!'
      ]
    }
  },
  {
    id: 'certificates-showcase',
    number: 8,
    targetSelector: '#certificates',
    pose: 'celebrate',
    title: {
      en: 'Certificates & Recognition',
      ar: 'الشهادات والتكريمات'
    },
    lines: {
      en: [
        'Take a look through my verified certificates and training awards using the interactive 3D card slider.',
        'Click any certificate to inspect it in full-screen high resolution.'
      ],
      ar: [
        'تقدر تقلب في الشهادات والتكريمات المعتمدة من خلال السلايدر التفاعلي.',
        'اضغط على أي شهادة عشان تشوفها بحجمها الكامل وبأعلى دقة.'
      ]
    }
  },
  {
    id: 'projects-gallery',
    number: 9,
    targetSelector: '#projects',
    pose: 'point',
    title: {
      en: 'Featured Portfolio Projects',
      ar: 'معرض المشاريع والأعمال'
    },
    lines: {
      en: [
        'This is where the magic lives! Filter my work by category — 3D Architecture, Branding, Commercial Posters, or Web UI.',
        'Click any project card to open the full case study, tools used, and multi-image gallery.'
      ],
      ar: [
        'هنا بقى خلاصة شغلي! تقدر تصفي المشاريع حسب التخصص — تصميمات 3D، هويات بصرية، سوشيال ميديا، أو واجهات مواقع.',
        'اضغط على أي مشروع عشان تفتح تفاصيله الكاملة ومعرض الصور الخاص بيه.'
      ]
    }
  },
  {
    id: 'blog-articles',
    number: 10,
    targetSelector: '#blog',
    pose: 'talk',
    title: {
      en: 'Articles & Creative Insights',
      ar: 'المقالات والمدونة'
    },
    lines: {
      en: [
        'I regularly share articles, tutorials, and behind-the-scenes breakdowns on 3D rendering, design systems, and AI tools.',
        'Each article includes estimated reading time and related recommendations.'
      ],
      ar: [
        'بشارك هنا مقالات وشروحات وتجارب عملية في عالم الجرافيك والـ 3D وأحدث أدوات التصميم.',
        'كل مقال بيعرض وقت القراءة ومقالات مقترحة تكمل بيها الفائدة.'
      ]
    }
  },
  {
    id: 'testimonials-coins',
    number: 11,
    targetSelector: '#testimonials',
    pose: 'wave',
    title: {
      en: 'Client Reviews & Secret Side Quest!',
      ar: 'آراء العملاء ومهمة العملات المخفية!'
    },
    lines: {
      en: [
        'Read real feedback from clients and visitors — or leave your own rating and comment right below!',
        'Psst... 8 hidden gold coins are scattered around the site. Find and click them all like a game!'
      ],
      ar: [
        'اقرأ آراء العملاء والزوار الحقيقية — وتقدر كمان تسيب تقييمك وتعليقك مباشرة!',
        'سر صغير... فيه 8 عملات ذهبية مستخبية في أنحاء الموقع! دور عليهم واجمعهم زي اللعبة!'
      ]
    }
  },
  {
    id: 'cta-contact',
    number: 12,
    targetSelector: '#cta',
    pose: 'celebrate',
    title: {
      en: "Let's Build Something Great!",
      ar: 'يلا نشتغل سوا ونبني حاجة عظيمة!'
    },
    lines: {
      en: [
        'We made it to the end of the tour! Have a brand, 3D scene, or website idea? I usually reply within 24 hours.',
        'Click "Let\'s Talk" or the contact button to reach me on WhatsApp or Email. Thanks for hanging out!'
      ],
      ar: [
        'وصلنا لآخر محطة في جولتنا! عندك فكرة مشروع، هوية بصرية، أو تصميم 3D؟ برد دايماً خلال 24 ساعة.',
        'اضغط على زر التواصل عشان تكلمني واتساب أو إيميل فوراً. نورت موقعي!'
      ]
    }
  }
];

export const HIDDEN_COINS: HiddenCoinSpec[] = [
  {
    id: 'coin-1',
    index: 1,
    anchorSelector: '#hero-image-container',
    positionHint: {
      en: 'Near the top Hero Cover Banner',
      ar: 'بجانب غلاف الصفحة الرئيسية في الأعلى'
    }
  },
  {
    id: 'coin-2',
    index: 2,
    anchorSelector: '#hero-socials',
    positionHint: {
      en: 'Next to the Social Links in the Hero section',
      ar: 'بجانب أيقونات التواصل في قسم البداية'
    }
  },
  {
    id: 'coin-3',
    index: 3,
    anchorSelector: '#skills',
    positionHint: {
      en: 'Hidden inside the Core Competencies section',
      ar: 'مخفية داخل قسم المهارات الأساسية'
    }
  },
  {
    id: 'coin-4',
    index: 4,
    anchorSelector: '#experience',
    positionHint: {
      en: 'Along the Experience & Training timeline',
      ar: 'بجوار الخط الزمني للخبرات والتدريب'
    }
  },
  {
    id: 'coin-5',
    index: 5,
    anchorSelector: '#education',
    positionHint: {
      en: 'Inside the Education & Languages section',
      ar: 'في قسم التعليم واللغات'
    }
  },
  {
    id: 'coin-6',
    index: 6,
    anchorSelector: '#certificates',
    positionHint: {
      en: 'Guarding the Certificates & Awards slider',
      ar: 'بالقرب من سلايدر الشهادات والتكريمات'
    }
  },
  {
    id: 'coin-7',
    index: 7,
    anchorSelector: '#projects',
    positionHint: {
      en: 'Tucked near the Featured Projects header',
      ar: 'مخبأة عند عنوان معرض المشاريع'
    }
  },
  {
    id: 'coin-8',
    index: 8,
    anchorSelector: '#cta',
    positionHint: {
      en: 'Waiting at the bottom Contact CTA box',
      ar: 'عند صندوق التواصل في نهاية الصفحة'
    }
  }
];

export function createInitialTourState(lang: TourLang = 'ar', autostart = false): TourState {
  return {
    mode: autostart ? 'touring' : 'welcome',
    lang,
    chapterIndex: 0,
    lineIndex: 0,
    collectedCoins: [],
    visitedChapters: autostart ? [0] : [],
    muted: false,
    characterPreset: 'puffer-twin',
    customCharacterUrl: ''
  };
}

export function getGreetingByHour(hour: number, lang: TourLang): string {
  if (lang === 'ar') {
    if (hour >= 5 && hour < 12) return 'صباح الخير!';
    if (hour >= 12 && hour < 17) return 'مساء النور!';
    return 'مساء الخير!';
  }
  if (hour >= 5 && hour < 12) return 'Good morning!';
  if (hour >= 12 && hour < 17) return 'Good afternoon!';
  return 'Good evening!';
}

export function startGuidedTour(state: TourState): TourState {
  const visited = state.visitedChapters.includes(0)
    ? state.visitedChapters
    : [...state.visitedChapters, 0];
  return {
    ...state,
    mode: 'touring',
    chapterIndex: 0,
    lineIndex: 0,
    visitedChapters: visited
  };
}

export function dismissTourToExplore(state: TourState): TourState {
  return {
    ...state,
    mode: 'minimized'
  };
}

export function advanceTourStep(state: TourState): TourState {
  const currentChapter = TOUR_CHAPTERS[state.chapterIndex];
  if (!currentChapter) return state;

  const linesForLang = currentChapter.lines[state.lang] || currentChapter.lines.en;
  if (state.lineIndex + 1 < linesForLang.length) {
    return {
      ...state,
      lineIndex: state.lineIndex + 1
    };
  }

  return goToChapter(state, state.chapterIndex + 1);
}

export function goToChapter(state: TourState, nextChapterIndex: number): TourState {
  if (nextChapterIndex >= TOUR_CHAPTERS.length) {
    return {
      ...state,
      mode: 'completed',
      chapterIndex: TOUR_CHAPTERS.length - 1,
      lineIndex: 0
    };
  }

  const clampedIndex = Math.max(0, Math.min(TOUR_CHAPTERS.length - 1, nextChapterIndex));
  const visited = state.visitedChapters.includes(clampedIndex)
    ? state.visitedChapters
    : [...state.visitedChapters, clampedIndex];

  return {
    ...state,
    mode: 'touring',
    chapterIndex: clampedIndex,
    lineIndex: 0,
    visitedChapters: visited
  };
}

export function prevTourChapter(state: TourState): TourState {
  if (state.lineIndex > 0) {
    return {
      ...state,
      lineIndex: state.lineIndex - 1
    };
  }
  if (state.chapterIndex <= 0) {
    return {
      ...state,
      chapterIndex: 0,
      lineIndex: 0
    };
  }
  return goToChapter(state, state.chapterIndex - 1);
}

export function collectCoin(state: TourState, coinId: string): {
  state: TourState;
  newlyCollected: boolean;
  allCollected: boolean;
} {
  const validCoin = HIDDEN_COINS.some(c => c.id === coinId);
  if (!validCoin || state.collectedCoins.includes(coinId)) {
    return {
      state,
      newlyCollected: false,
      allCollected: state.collectedCoins.length >= TOTAL_COINS
    };
  }

  const updatedCoins = [...state.collectedCoins, coinId];
  return {
    state: {
      ...state,
      collectedCoins: updatedCoins
    },
    newlyCollected: true,
    allCollected: updatedCoins.length >= TOTAL_COINS
  };
}

export function getNextUncollectedCoin(state: TourState): HiddenCoinSpec | null {
  return HIDDEN_COINS.find(c => !state.collectedCoins.includes(c.id)) || null;
}

export function formatChapterCounter(chapterIndex: number): string {
  const num = String(Math.min(TOUR_CHAPTERS.length, Math.max(1, chapterIndex + 1))).padStart(2, '0');
  const total = String(TOUR_CHAPTERS.length).padStart(2, '0');
  return `${num}/${total}`;
}

export function setCharacterAppearance(
  state: TourState,
  presetId: CharacterPresetId,
  customUrl = ''
): TourState {
  const validPreset = CHARACTER_PRESETS.some(p => p.id === presetId) ? presetId : 'puffer-twin';
  return {
    ...state,
    characterPreset: validPreset,
    customCharacterUrl: customUrl.trim()
  };
}
