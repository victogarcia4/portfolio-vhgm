export interface Project {
  title: string;
  description: string;
  url?: string;
  tags: string[];
  category: "education" | "healthcare" | "productivity" | "ai";
  image?: string;
}

export interface FeaturedWork {
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
}

export interface MiniApp {
  title: string;
  description: string;
  url: string;
}

export interface Experience {
  role: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
}

export interface Certification {
  name: string;
  year?: string;
}

export const biography = {
  name: "Dr. Victor Garcia M",
  titles: [
    "MSN, FNP-C, RN",
    "Anatomy & Physiology Faculty",
    "Family Nurse Practitioner",
    "Digital Curator & AI Expert",
    "International Medical Graduate",
  ],
  email: "vhgarcia100@gmail.com",
  phone: "+1 (786) 281-6237",
  address: "Conroe, TX 77384",
  languages: ["English", "Spanish"],
  profileImage: "/VHGM  foto.jpg",
  fullBio: `International Medical Graduate, licensed Family Nurse Practitioner (FNP-C, RN), digital curator, and AI expert with 30+ years of combined clinical, academic, and technology experience. Currently serving as Biology Faculty at Lone Star College-North Harris while also leading AI-native ventures through 48hours.live and Edunexia. Expertise spans general medicine, OB/GYN, pediatric and adolescent gynecology, perioperative nursing, educational technology, and high-velocity AI product delivery.

Pedagogy is grounded in Clinical Spotlighting - linking anatomical and physiological concepts to real clinical scenarios - combined with virtual anatomy platforms, LMS tools, formative assessment loops, and bilingual student support. The result is a clinician-educator portfolio built around practical reasoning, instructional clarity, and modern learning systems.`,
  teachingPhilosophy:
    "My pedagogy centers on constructivist, clinically anchored instruction. In A&P courses populated primarily by nursing-track and first-generation students, I bridge anatomical content to bedside contexts through Clinical Spotlighting. Each physiological system is presented through patient-centered scenarios, such as connecting cardiac output concepts to a CHF case. I use virtual anatomy tools as cognitive scaffolds, not substitutes for critical thinking, and deploy formative assessment cycles aligned with Bloom's Taxonomy to track conceptual mastery before summative evaluation.",
  achievements: [
    "30+ years of combined clinical, academic, and instructional technology experience.",
    "22 peer-reviewed publications across medical and health science topics.",
    "BIOL 2401, BIOL 2402, and BIOL 1408 instruction for nursing-track and allied health students.",
    "CEO of 48hours.live and Edunexia, building rapid AI-powered web systems.",
    "Digital curator and AI expert practice launched in January 2026.",
    "Bilingual English/Spanish support for diverse and first-generation student populations.",
  ],
};

export const techStack = [
  {
    category: "Virtual Labs",
    items: [
      "Visible Body",
      "Anatomage Table",
      "PhysioEx",
      "ADInstruments LabChart",
      "McGraw-Hill Connect",
      "OpenStax A&P",
    ],
  },
  {
    category: "LMS & Digital Tools",
    items: [
      "D2L Brightspace",
      "SoftChalk Cloud",
      "TechSmith Camtasia/Snagit",
      "Canvas LMS",
      "Teams/Zoom/Webex",
    ],
  },
  {
    category: "Development & AI",
    items: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Claude API",
      "Python",
      "Supabase",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "CEO",
    institution: "48hours.live",
    location: "Houston, Texas / Remote",
    period: "01/2026 - Present",
    highlights: [
      "Lead a rapid-delivery studio focused on launching production-ready websites, AI tools, and custom SaaS systems within compressed execution windows.",
      "Direct client strategy, product architecture, AI workflow design, and delivery operations for small businesses, educators, and clinical entrepreneurs.",
      "Position 48hours.live as a practical bridge between business needs, automation strategy, and polished digital execution.",
    ],
  },
  {
    role: "CEO",
    institution: "Edunexia",
    location: "Houston, Texas / Remote",
    period: "01/2026 - Present",
    highlights: [
      "Build AI-enhanced education systems for health science, Anatomy & Physiology, and skills-based learning environments.",
      "Translate clinical pedagogy into digital learning products, assessment workflows, and student support tools.",
      "Guide Edunexia's product direction across tutoring, content design, curriculum intelligence, and learner analytics.",
    ],
  },
  {
    role: "Digital Curator & AI Expert",
    institution: "Independent Practice",
    location: "Houston, Texas / Remote",
    period: "01/2026 - Present",
    highlights: [
      "Curate AI tools, educational systems, and digital workflows for clinicians, educators, founders, and small teams.",
      "Design practical AI implementation paths that connect domain expertise, brand positioning, automation, and measurable user outcomes.",
      "Blend clinical reasoning, instructional design, and modern software patterns into usable digital experiences.",
    ],
  },
  {
    role: "Biology Faculty (Associate Professor)",
    institution: "Lone Star College - North Harris",
    location: "Houston, Texas",
    period: "08/2023 - Present",
    highlights: [
      "Deliver BIOL 2401, BIOL 2402, and BIOL 1408 to 90+ nursing-track and pre-health students per semester; maintain strong course completion across consecutive semesters.",
      "Implement Clinical Spotlighting methodology by bridging anatomical and physiological concepts to bedside clinical scenarios.",
      "Integrate Visible Body and Anatomage Table virtual labs for remote and hybrid sections; authored interactive modules via SoftChalk Cloud.",
      "Active participant in Faculty Mentoring Program (Spring 2026); developed a Safe-to-Guess verbal engagement strategy adopted departmentally.",
      "Provide bilingual English/Spanish instruction and advising support for a diverse first-generation student population.",
    ],
  },
  {
    role: "Clinical Nurse III - Med-Surg / Day Surgery / Endoscopy",
    institution: "St. Joseph Medical Center (Steward Health)",
    location: "Houston, Texas",
    period: "05/2022 - 07/2023",
    highlights: [
      "Delivered direct patient care in high-acuity med-surg, ambulatory surgery, and endoscopy units.",
      "Completed Nursing Residency Program and Certificate of Mastery Perioperatory 101; applied perioperative knowledge to A&P curriculum development.",
    ],
  },
  {
    role: "Adjunct Faculty - Biology (Anatomy & Physiology)",
    institution: "Lone Star College - North Harris",
    location: "Houston, Texas",
    period: "03/2021 - 08/2023",
    highlights: [
      "Taught BIOL 2401 and BIOL 2402 in in-person and hybrid formats; developed lab practicals using virtual anatomy tools.",
      "Awarded fully funded SSII Research Proposal: 'Models for Anatomy and Physiology II Lab' (2019), implemented at LSC-East Aldine Center.",
    ],
  },
  {
    role: "Adjunct Biology Instructor",
    institution: "Prairie View A&M University",
    location: "Prairie View, Texas",
    period: "02/2021 - 02/2022",
    highlights: [
      "Instructed Biology and A&P courses at an HBCU serving nursing and allied health students.",
    ],
  },
  {
    role: "Adjunct Faculty - Biology (Anatomy & Physiology)",
    institution: "San Jacinto College - South Campus",
    location: "Houston, Texas",
    period: "03/2021 - 09/2021",
    highlights: [
      "Taught anatomy and physiology lecture and lab sections for nursing prerequisite curriculum.",
    ],
  },
  {
    role: "Faculty (70% FTE) - Biology Department",
    institution: "Lone Star College - NH & East Aldine Center",
    location: "Houston, Texas",
    period: "01/2019 - 03/2021",
    highlights: [
      "Designed and delivered A&P I and II across two campuses; trained in D2L Brightspace, SoftChalk Cloud, TechSmith, and Anatomage Table.",
      "Co-developed laboratory curriculum models for LSC-East Aldine nursing gateway courses.",
    ],
  },
  {
    role: "Gynecologic Laser Trainer",
    institution: "DEKA / Echo Data Medical Systems",
    location: "Peru & Colombia",
    period: "01/2016 - 11/2017",
    highlights: [
      "Certified international trainer for minimally invasive gynecologic laser technology, including Nd:YAG and CO2 systems; conducted CME workshops for OB/GYN specialists.",
    ],
  },
  {
    role: "Pediatrics & Adolescent Gynecology Surgeon Specialist",
    institution: "Fundacion Hospital de Especialidades Pediatricas",
    location: "Venezuela",
    period: "2007 - 2012",
    highlights: [
      "Specialized in surgical intervention and pediatric clinical consulting.",
    ],
  },
  {
    role: "Anatomy, Physiology, Microbiology & Biostatistics Instructor",
    institution: "Instituto Universitario de Tecnologia UNIR / Universidad del Zulia",
    location: "Maracaibo, Venezuela",
    period: "1998 - 2006",
    highlights: [
      "Delivered university-level instruction in Anatomy, Physiology, Microbiology, and Biostatistics; established the foundation for current pedagogy model.",
    ],
  },
];

export const educationList: Education[] = [
  {
    degree: "MSN - Family Nurse Practitioner",
    institution: "Miami Regional University",
    location: "Miami Springs, Florida",
  },
  {
    degree: "ASN - Associate of Science in Nursing",
    institution: "Azure College",
    location: "Fort Lauderdale, Florida",
  },
  {
    degree: "AAS - Computer Programming Specialist (Magna Cum Laude)",
    institution: "Lone Star College",
    location: "Houston, Texas",
  },
  {
    degree: "Specialist - Pediatrics & Adolescent Gynecology",
    institution: "Central University of Venezuela (UCV)",
    location: "Caracas, Venezuela",
  },
  {
    degree: "Specialist - Obstetrics & Gynecology",
    institution: "University of Zulia (LUZ)",
    location: "Maracaibo, Venezuela",
  },
  {
    degree: "MD - Medical Surgeon (General Practitioner)",
    institution: "University of Zulia (LUZ)",
    location: "Maracaibo, Venezuela",
  },
];

export const certifications: Certification[] = [
  { name: "Faculty Mentoring Program, Spring 2026 - LSC-North Harris" },
  { name: "New Faculty Institute Certification Program - Lone Star College System (2025)" },
  { name: "Nursing Residency Program (Med-Surg/Day Surgery/Endoscopy) - St. Joseph Medical Center" },
  { name: "Certificate of Mastery Perioperatory 101 - OR Evaluation & Final Exam (2022)" },
  { name: "SSII Funded Research Proposal: 'Models for A&P II Lab' - LSC-East Aldine Center (2019)" },
  { name: "Adjunct Certification Program - Faculty Institute, LSC-Greenspoint (2019)" },
  { name: "Online Teaching Certificate - Lone Star College (2019)" },
  { name: "Computer Programming Certificate - Lone Star College Montgomery (2019)" },
  { name: "Medical Assistant Certification - HPRUS (2015)" },
  { name: "Phlebotomist Certification - HPRUS (2018)" },
  { name: "Graduate Diploma - Dermato-Aesthetics Laser Applications (FUNDACELAC) (2012)" },
  { name: "22 peer-reviewed publications" },
];

export const projects: Project[] = [
  {
    title: "48-Hour Studio",
    description:
      "Disruptive web agency delivering fully complete, functional websites and custom SaaS applications within 48 hours using lean delivery cycles and advanced AI pipelines.",
    url: "https://www.48hours.live/",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "AI Workflows"],
    category: "ai",
    image: "/48hours studio home.png",
  },
  {
    title: "Vitruvian Tutor",
    description:
      "AI-powered contextual tutor for Anatomy & Physiology students, providing personalized explanations and study guidance aligned with syllabus outcomes.",
    url: "https://vitruvianeduhub.netlify.app/",
    tags: ["React", "Claude API", "Supabase", "Netlify"],
    category: "education",
  },
  {
    title: "LSC A&P Game Hub",
    description:
      "Gamified Anatomy & Physiology learning application created for Lone Star College students to strengthen engagement and retention of complex anatomical structures.",
    url: "https://lsc-a-p-game-hub.vercel.app/",
    tags: ["React", "Tailwind CSS", "Vercel", "Gamification"],
    category: "education",
  },
  {
    title: "VozFlow",
    description:
      "High-performance speech-to-text Windows app for clinical documentation, optimized for medical terminology using Whisper and PyQt6 for hands-free charting.",
    url: "https://github.com/victogarcia4/vozflow.git",
    tags: ["Python", "Groq Whisper API", "PyQt6", "Medical Dictation"],
    category: "healthcare",
  },
  {
    title: "Vitruvian Mastery",
    description:
      "Advanced A&P question bank and exam simulator designed for mastery tracking, nursing preparation, and student assessment.",
    url: "https://vitruvianmastery.lovable.app",
    tags: ["React", "Lovable.app", "Tailwind CSS"],
    category: "education",
  },
  {
    title: "CV Go",
    description:
      "Intelligent ATS resume builder and CV enhancer helping professionals optimize credentials with structured keyword algorithms.",
    url: "https://cv-go.lovable.app",
    tags: ["React", "Tailwind CSS", "ATS Parsing"],
    category: "productivity",
  },
];

export const selectedWorksUrl = "https://dr-victor-garcia-apps.manus.space";

export const featuredWorks: FeaturedWork[] = [
  {
    title: "Saile Montilla Fitness",
    description:
      "Personal trainer web experience with service navigation, visual transformation storytelling, and booking-oriented presentation.",
    url: selectedWorksUrl,
    image: "/project-previews/saile-montilla.png",
    tags: ["Fitness", "Landing Page", "Responsive UI"],
  },
  {
    title: "BrightTone AI",
    description:
      "Audience-aware AI messaging assistant for D2L communication workflows and education-ready tone adaptation.",
    url: selectedWorksUrl,
    image: "/project-previews/brighttone-ia.png",
    tags: ["AI Messaging", "Education", "Lovable"],
  },
  {
    title: "Konfetti Event Hub",
    description:
      "Live social photo hub for events, designed around real-time participation, guest sharing, and celebration media.",
    url: selectedWorksUrl,
    image: "/project-previews/konfetti-event-hub.png",
    tags: ["Events", "Social Photos", "Lovable"],
  },
  {
    title: "DoseGennie",
    description:
      "Medication-oriented landing experience with a clean product narrative and health workflow positioning.",
    url: selectedWorksUrl,
    image: "/project-previews/dose-gennie.png",
    tags: ["Health Tech", "Landing Page", "Base44"],
  },
  {
    title: "Kairosy",
    description:
      "Daily planning miniapp focused on time clarity, task rhythm, and accessible personal productivity.",
    url: selectedWorksUrl,
    image: "/project-previews/kairosy.png",
    tags: ["Planning", "Miniapp", "Netlify"],
  },
  {
    title: "NotebookLM Workshop Content",
    description:
      "Learning content experience for a NotebookLM workshop, moving class materials into structured AI-assisted study workflows.",
    url: selectedWorksUrl,
    image: "/project-previews/notebooklm-content.png",
    tags: ["NotebookLM", "Workshop", "Lovable"],
  },
  {
    title: "Vitruvian EduHub",
    description:
      "Free Anatomy & Physiology tutoring hub with student-centered explanations, study support, and guided learning access.",
    url: selectedWorksUrl,
    image: "/project-previews/vitruvian-eduhub.png",
    tags: ["A&P", "Tutoring", "Netlify"],
  },
  {
    title: "Gaby Neuropedia",
    description:
      "Professional neurology and health consulting portfolio for Dra. Maria Gabriela Jimenez.",
    url: selectedWorksUrl,
    image: "/project-previews/gaby-neuropedia.png",
    tags: ["Healthcare", "Portfolio", "Vercel"],
  },
  {
    title: "Van's Bakery TX",
    description:
      "Premium bakery and academy website with catalog navigation, custom cake positioning, and artisan brand presentation.",
    url: selectedWorksUrl,
    image: "/project-previews/vans-bakery.png",
    tags: ["Bakery", "Catalog", "Netlify"],
  },
  {
    title: "Victor Garcia Portfolio",
    description:
      "Entertainment writing and film expertise portfolio with editorial positioning and a polished professional presence.",
    url: selectedWorksUrl,
    image: "/project-previews/victor-garcia-portfolio.png",
    tags: ["Portfolio", "Writing", "Vercel"],
  },
  {
    title: "Vitruvius Duo",
    description:
      "Gamified generative AI micro-learning app designed for fast bilingual concept practice and learner engagement.",
    url: selectedWorksUrl,
    image: "/project-previews/vitruvius-duo.png",
    tags: ["AI Learning", "Gamified", "Vercel"],
  },
];

export const freeMiniApps: MiniApp[] = [
  {
    title: "Kairosy",
    description: "Daily planner for organizing time and priorities.",
    url: "https://kairosy.netlify.app/",
  },
  {
    title: "NotebookLM Workshop",
    description: "Class workshop for moving learning content from paper to NotebookLM.",
    url: "https://notebooklm-workshop-class.netlify.app/",
  },
  {
    title: "CV Go Anthropic",
    description: "ATS-style CV optimizer and resume support tool.",
    url: "https://cv-go-anthropic.netlify.app/",
  },
  {
    title: "Lab Practical Timer",
    description: "Practical timer for lab stations and academic assessment flow.",
    url: "https://labpracticaltimer.netlify.app/",
  },
  {
    title: "Vitruvian EduHub",
    description: "Free A&P tutoring and learning support hub.",
    url: "https://vitruvianeduhub.netlify.app/",
  },
  {
    title: "HESI A2 Review",
    description: "Interactive prep and review resource for nursing entrance examination.",
    url: "https://hesia2.netlify.app/",
  },
  {
    title: "BIOL 1408 Review",
    description: "Comprehensive biology review hub for non-science majors.",
    url: "https://biol1408-review.netlify.app/",
  },
  {
    title: "AI Attribution Scorer",
    description: "Diagnostic scoring utility for evaluating AI generation and content credit.",
    url: "https://ai-attribution-scorer.netlify.app/",
  },
  {
    title: "AI Attribution Toolkit",
    description: "Free toolkit for AI attribution practices and responsible content crediting.",
    url: "https://aiattribution.github.io/",
  },
  {
    title: "Vitruvius Duo",
    description: "Free gamified micro-learning app for generative AI practice.",
    url: "https://vitruvius-duo.vercel.app/",
  },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/skintima/?hl=en",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-h-garcia-martinez/",
  },
];

export const references = [
  {
    name: "Dr. Juan Gutierrez",
    role: "Biology Dept. Chair",
    institution: "Lone Star College-NH",
    contact: "(281) 961-5614",
    email: "Juan.C.Gutierrez@lonestar.edu",
  },
  {
    name: "Dr. Anupma Gupta",
    role: "Assoc. Professor, Biology",
    institution: "Lone Star College-NH",
    contact: "(832) 766-4921",
    email: "Anupma.Gupta@lonestar.edu",
  },
  {
    name: "Katrina Gaskin, RN",
    role: "Endoscopy Dept.",
    institution: "St. Joseph Medical Center",
    contact: "(352) 257-1090",
    email: "katryna.gaskin@steward.org",
  },
];
