import { JSX } from 'react';

/* ──────────────── TYPES ──────────────── */

export interface TimelineEntry {
  id: number;
  title: string;
  organization: string;
  location: string;
  date: string;
  duration: string;
  description: (string | JSX.Element)[];
  highlights?: string[];
  image?: string;
}

export interface EducationItem {
  id: number;
  title: string;
  institution: string;
  date: string;
  description?: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: number;
  name: string;
  issuer?: string;
  score?: string;
}

/* ──────────────── PROFESSIONAL EXPERIENCE (Technical) ──────────────── */

export const professionalExperience: TimelineEntry[] = [
  {
    id: 1,
    title: 'Front-End Developer',
    organization: 'TEDxPadjadjaran',
    location: 'Universitas Padjadjaran',
    date: 'Apr 2026',
    duration: '4 months',
    description: [
      <>Building responsive web interfaces for TEDxPadjadjaran, serving <strong>500+ attendees</strong> at Universitas Padjadjaran\'s flagship TEDx event.</>,
      <>Developing reusable React components that reduced UI inconsistencies across <strong>5+ event pages</strong>.</>,
      <>Collaborating with a cross-functional team of <strong>6 designers and developers</strong> to deliver on tight deadlines.</>,
    ],
    highlights: ['React', 'Next.js', 'Frontend Development'],
    image: '/images/journey/tedx-name-image.png',
  },
  {
    id: 2,
    title: 'Artificial Intelligence Lab Assistant',
    organization: 'Universitas Padjadjaran',
    location: 'Sumedang',
    date: 'Feb 2026',
    duration: '6 months',
    description: [
      <>Guiding <strong>40+ students</strong> through hands-on AI lab sessions covering neural networks, computer vision, and NLP.</>,
      <>Grading and providing detailed feedback on <strong>200+ lab assignments</strong> per semester.</>,
      <>Developing supplementary tutorial materials that improved average lab scores by <strong>15%</strong>.</>,
    ],
    highlights: ['AI', 'Machine Learning', 'Teaching'],
    image: '/images/journey/ai-lab-name-image.png',
  },
  {
    id: 3,
    title: 'AI Engineer',
    organization: 'Coding Camp powered by DBS Foundation',
    location: 'Jakarta, Indonesia',
    date: 'Feb 2026',
    duration: '6 months',
    description: [
      <>Built "Fingo," a financial impulsiveness detector that achieved <strong>99% model accuracy</strong> with <strong>sub-500ms</strong> inference time.</>,
      <>Developed an NLP model using fine-tuned BERT, reaching <strong>85% accuracy</strong> on a custom organic dataset.</>,
      <>Deployed end-to-end ML pipelines on cloud infrastructure, completing the <strong>top-tier DBS AI Engineer track</strong>.</>,
    ],
    highlights: ['Machine Learning', 'BERT', 'NLP', '99% Accuracy'],
    image: '/images/journey/dbs-name-image.png',
  },
  {
    id: 4,
    title: 'Supervisor of Social Media & Web Management',
    organization: 'Unpad International Office',
    location: 'Sumedang',
    date: 'Nov 2025',
    duration: '8 months',
    description: [
      <>Leading a <strong>team of 8</strong> to manage Unpad International Office\'s digital presence across <strong>3 platforms</strong>.</>,
      <>Increased social media engagement by <strong>35%</strong> through data-driven content strategies and A/B testing.</>,
      <>Overseeing website updates and content pipelines serving <strong>1,000+ monthly visitors</strong>.</>,
    ],
    highlights: ['Team Leadership', 'Digital Strategy', '+35% Engagement'],
    image: '/images/journey/unpad-io-name-image.png',
  },
  {
    id: 5,
    title: 'Social Media & Web Management',
    organization: 'Unpad International Office',
    location: 'Jatinangor',
    date: 'Apr 2025',
    duration: '8 months',
    description: [
      <>Designed and developed <strong>10+ responsive web pages</strong> using Elementor and JavaScript, boosting Unpad IO\'s online traffic by <strong>25%</strong>.</>,
      <>Created <strong>60+ cross-platform content pieces</strong>, growing follower count by <strong>500+</strong> across Instagram and LinkedIn.</>,
      <>Supported <strong>3 international events</strong>, coordinating logistics for <strong>200+ international students</strong> and partners.</>,
    ],
    highlights: ['Web Development', 'Elementor', 'JavaScript', 'Content Creation'],
    image: '/images/journey/unpad-io-web-name-image.png',
  },
  {
    id: 6,
    title: 'Database System II Teaching Assistant',
    organization: 'Universitas Padjadjaran',
    location: 'Jatinangor, West Java',
    date: 'Aug 2025',
    duration: '5 months',
    description: [
      <>Supported <strong>45+ students</strong> in advanced database topics including query optimization and transaction management.</>,
      <>Conducted <strong>10+ hands-on PostgreSQL lab sessions</strong>, improving student proficiency in complex SQL by <strong>20%</strong>.</>,
      <>Co-designed <strong>3 new practical assignments</strong> adopted by the faculty for future semesters.</>,
    ],
    highlights: ['PostgreSQL', 'Teaching', 'Query Optimization'],
    image: '/images/journey/db-ta-name-image.png',
  },
  {
    id: 7,
    title: 'Backend Developer — CTLI',
    organization: 'Universitas Padjadjaran',
    location: 'Jatinangor',
    date: 'Jul 2025',
    duration: '6 months',
    description: [
      <>Developed RESTful APIs powering educational tools used by <strong>2,000+ students</strong> and <strong>100+ faculty members</strong>.</>,
      <>Reduced API response times by <strong>40%</strong> through database query optimization and caching strategies.</>,
      <>Built authentication and role-based access control systems securing <strong>5,000+ daily requests</strong>.</>,
    ],
    highlights: ['Backend Development', 'API Design', 'Performance Optimization'],
    image: '/images/journey/ctli-name-image.png',
  },
  {
    id: 8,
    title: 'Frontend Developer — Prabu 2025',
    organization: 'Universitas Padjadjaran',
    location: 'Sumedang',
    date: 'Jun 2025',
    duration: '3 months',
    description: [
      <>Built the Prabu 2025 freshman orientation portal, serving <strong>8,000+ new students</strong> across mobile and desktop.</>,
      <>Translated <strong>15+ Figma screens</strong> into pixel-perfect React components with full accessibility compliance.</>,
      <>Achieved a Lighthouse performance score of <strong>95+</strong> through code-splitting and lazy loading techniques.</>,
    ],
    highlights: ['React', 'UI/UX', '8,000+ Users', '95+ Lighthouse'],
    image: '/images/journey/prabu-name-image.png',
  },
  {
    id: 9,
    title: 'Database System Teaching Assistant',
    organization: 'Universitas Padjadjaran',
    location: 'Jatinangor, West Java',
    date: 'Feb 2025',
    duration: '6 months',
    description: [
      <>Mentored <strong>50+ students</strong> in relational database design, ER modeling, and SQL query writing.</>,
      <>Answered <strong>100+ student queries</strong> per month and reviewed <strong>300+ assignments</strong> across 2 semesters.</>,
      <>Increased average exam scores by <strong>12%</strong> through targeted review sessions and study guides.</>,
    ],
    highlights: ['Database Design', 'ER Diagrams', '50+ Students Mentored'],
  },
  {
    id: 10,
    title: 'Project-Based Virtual Intern — Data Scientist',
    organization: 'ID/X Partners x Rakamin Academy',
    location: 'Jatinangor, West Java',
    date: 'Jan 2025',
    duration: '2 months',
    description: [
      <>Developed a credit risk prediction model achieving <strong>97% accuracy</strong> using XGBoost and logistic regression.</>,
      <>Engineered <strong>20+ features</strong> from raw financial data, reducing model error by <strong>18%</strong>.</>,
      <>Earned Excellent Student Certificate for ranking in the <strong>top 5%</strong> of 200+ participants.</>,
    ],
    highlights: ['97% Accuracy', 'Credit Risk Prediction', 'Top 5%'],
    image: '/images/journey/idx-name-image.png',
  },
];

/* ──────────────── ORGANIZATIONS (Leadership & Community) ──────────────── */

export const organizations: TimelineEntry[] = [
    {
    id: 1,
    title: 'Project Supervisor',
    organization: 'IFEST UNPAD',
    location: 'Bandung, West Java',
    date: 'Apr 2025',
    duration: '7 months',
    description: [
      <>Supervised <strong>3 divisions</strong> and managed <strong>10+ MoUs</strong> with external partners from drafting to final approval.</>,
      <>Improved inter-team communication efficiency by <strong>40%</strong> through structured reporting and standardized workflows.</>,
      <>Provided strategic input in weekly leadership meetings, enhancing partnership outcomes by <strong>25%</strong>.</>,
    ],
    highlights: ['10+ MoUs', '+40% Efficiency', '3 Divisions Supervised'],
    image: '/images/journey/ifest-supervisor-name-image.png',
  },
  {
    id: 2,
    title: 'Head of Marketing & Sponsorship',
    organization: 'IFEST UNPAD',
    location: 'Jatinangor, West Java',
    date: 'Jun 2024',
    duration: '5 months',
    description: [
      <>Led a team of <strong>5</strong> to secure <strong>IDR 19M+</strong> in sponsorship revenue for a national-scale festival with <strong>400+ attendees</strong>.</>,
      <>Negotiated and closed partnerships with <strong>15+ companies</strong>, delivering custom sponsorship packages.</>,
      <>Coordinated a Company Expo that attracted <strong>10+ participating companies</strong> and <strong>300+ student visitors</strong>.</>,
    ],
    highlights: ['IDR 19M+ Revenue', 'Team Leadership', '15+ Sponsors'],
    image: '/images/journey/ifest-marketing-name-image.png',
  },
  {
    id: 3,
    title: 'Sales Executive',
    organization: 'AIESEC in Universitas Padjadjaran',
    location: 'Jatinangor, West Java',
    date: 'Jan 2024',
    duration: '1 year 3 months',
    description: [
      <>Contacted <strong>100+ companies</strong> and secured <strong>5+ sponsorship deals</strong> for AIESEC national and local events.</>,
      <>Drafted and processed <strong>6+ Letters of Agreement (LoA)</strong>, formalizing partnerships worth <strong>IDR 8M+ total</strong>.</>,
      <>Maintained a <strong>90% sponsor retention rate</strong> through consistent follow-ups and relationship management.</>,
    ],
    highlights: ['100+ Companies', 'IDR 8M+ Partnerships', '90% Retention'],
    image: '/images/journey/aiesec-sales-name-image.png',
  },
  {
    id: 4,
    title: 'OC Assessor — Youth Today x Join AIESEC',
    organization: 'AIESEC',
    location: 'Sumedang, West Java',
    date: 'Aug 2024',
    duration: '3 months',
    description: [
      <>Interviewed <strong>5 candidates</strong> for leadership roles, assessing cultural fit and behavioral competencies.</>,
      <>Facilitated <strong>3 Leaderless Group Discussion (LGD) sessions</strong> evaluating teamwork across <strong>15 participants</strong>.</>,
      <>Contributed to a structured evaluation framework adopted for future <strong>AIESEC recruitment cycles</strong>.</>,
    ],
    highlights: ['Interviewing', 'LGD Facilitation', '15 Participants Assessed'],
  },
  {
    id: 5,
    title: 'Business Development Intern',
    organization: 'AIESEC',
    location: 'Jatinangor, West Java',
    date: 'Aug 2023',
    duration: '6 months',
    description: [
      <>Conducted market research and competitor analysis covering <strong>10+ industry players</strong> to inform growth strategies.</>,
      <>Identified <strong>5 new partnership opportunities</strong> that increased potential revenue channels by <strong>20%</strong>.</>,
      <>Presented findings and strategic recommendations to a team of <strong>8</strong> in weekly business review meetings.</>,
    ],
    highlights: ['Market Research', 'Competitor Analysis', '5 New Opportunities'],
    image: '/images/journey/aiesec-bd-name-image.png',
  },
  {
    id: 6,
    title: 'Staff of External Relations',
    organization: 'Himatif FMIPA Unpad',
    location: 'Jatinangor, West Java',
    date: 'Feb 2024',
    duration: '1 year 11 months',
    description: [
      <>Managed communications with <strong>20+ external partners</strong> and media outlets, ensuring <strong>95% response rate</strong> within 24 hours.</>,
      <>Built and maintained a contacts database of <strong>100+ organizations</strong> for future collaborations.</>,
      <>Coordinated <strong>5 cross-organization events</strong>, facilitating partnerships between the department and industry.</>,
    ],
    highlights: ['20+ Partners', '100+ Contacts', '5 Events Coordinated'],
    image: '/images/journey/himatif-name-image.png',
  },
];

/* ──────────────── EDUCATION ──────────────── */

export const education: EducationItem[] = [
  {
    id: 1,
    title: 'Fellowship — Artificial Intelligence and Research',
    institution: 'National University of Singapore (NUS)',
    date: 'Jun 2026 — Jul 2026',
    description: 'Selected for the prestigious NUS Young Fellows Programme (YFP), engaging in cutting-edge AI research and collaborating with peers across Asia.',
    highlights: ['Artificial Intelligence', 'Research', 'International'],
  },
  {
    id: 2,
    title: "Bachelor's degree, Computer Science",
    institution: 'Universitas Padjadjaran',
    date: '2023 — Present',
    description: 'Third-year Informatics Engineering student specializing in AI & Data Science. Active as an AI Lab Assistant, Teaching Assistant, and contributor to multiple university tech projects.',
    highlights: ['AI & Data Science', 'Software Engineering', 'Teaching'],
  },
];

/* ──────────────── CERTIFICATIONS ──────────────── */

export const certifications: CertificationItem[] = [
  { id: 1, name: 'EF SET English Certificate — C2 Proficient', issuer: 'EF SET', score: '90/100' },
  { id: 2, name: 'Belajar Fundamental Deep Learning', issuer: 'Dicoding Indonesia' },
  { id: 3, name: 'Belajar Machine Learning untuk Pemula', issuer: 'Dicoding Indonesia' },
  { id: 4, name: 'AWS Educate — Introduction to Cloud 101', issuer: 'Amazon Web Services' },
  { id: 5, name: 'Belajar Dasar Visualisasi Data', issuer: 'Dicoding Indonesia' },
];
