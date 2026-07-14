'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { GSAPAnimationWrapper } from '@/components/GSAPAnimationWrapper';

export default function About() {
  const skills = [
    {
      title: 'AI & Data Science',
      items: ['Machine Learning (XGBoost, BERT, Random Forest)', 'NLP & Sentiment Analysis', 'Data Mining & Feature Engineering', 'Python / Scikit-learn / TensorFlow'],
    },
    {
      title: 'Web Development',
      items: ['React & Next.js', 'TypeScript', 'FastAPI & Microservices', 'Elementor & Custom JavaScript'],
    },
    {
      title: 'Tools & Platforms',
      items: ['PostgreSQL / pgvector', 'Google Gemini / RAG Pipelines', 'AWS Educate', 'Git / Docker / Figma'],
    },
  ];

  const timeline = [
    { year: '2023', event: 'Started Bachelor\'s in Informatics Engineering at Universitas Padjadjaran, specializing in AI & Data.' },
    { year: '2024', event: 'Led sponsorship at IFEST, securing IDR 19M+ in revenue. Became Sales Executive at AIESEC in Unpad.' },
    { year: '2025', event: 'DBS Foundation AI Engineer track graduate. Built Fingo (99% accuracy) and became GEMASTIK Data Mining finalist.' },
    { year: '2026', event: 'Selected for NUS Young Fellows Programme (YFP). Serving as Social Media & Web Management Supervisor at Unpad International Office. Contributed to TEDxPadjadjaran frontend team.' },
  ];

  return (
    <GSAPAnimationWrapper>
      <div className="bg-cream">
        <Navigation />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sand/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 lg:pt-36 lg:pb-24">
            <div className="flex items-center gap-4 mb-3">
              <span className="w-24 h-[2px] bg-gold" />
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-navy leading-tight mb-6">
              The person behind
              <br />
              <span className="text-navy-muted italic">the code.</span>
            </h1>
            <p className="text-lg text-warm-gray max-w-2xl leading-relaxed">
              I&apos;m Muhammad Fachri — a third-year Informatics Engineering student at Universitas Padjadjaran 
              with a passion for AI, data-driven solutions, and building things that matter.
            </p>
          </div>
        </section>

        {/* ── Story + Photo ── */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="bg-sand/60 rounded-3xl w-full aspect-[4/5] relative overflow-hidden border border-sand-dark/30">
                  <Image
                    src="/images/profile/profile.jpg"
                    alt="Muhammad Fachri"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-2xl pointer-events-none" />
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy mb-6">
                  My Journey
                </h2>
                <div className="space-y-4 text-warm-gray leading-relaxed">
                  <p>
                    I&apos;m a third-year Informatics Engineering student at Universitas Padjadjaran, 
                    specializing in <strong>AI and Data Science</strong>. My passion lies at the intersection of 
                    machine learning, web development, and data-driven problem solving. I was selected 
                    for the <strong>NUS Young Fellowship Programme</strong> and was a <strong>GEMASTIK finalist in Data Mining</strong>.
                  </p>
                  <p>
                    From building NLP models with BERT to developing FastAPI microservices with RAG pipelines, 
                    I love tackling complex technical challenges. I&apos;ve led teams of 8+ at Unpad International 
                    Office and secured <strong>IDR 19M+</strong> in sponsorships at <strong>IFEST</strong>.
                  </p>
                  <p>
                    I also serve as the <strong>Social Media &amp; Web Management Supervisor</strong> at Unpad 
                    International Office, overseeing the university&apos;s digital presence. Outside of 
                    tech, I enjoy exploring leadership opportunities through <strong>AIESEC</strong>, presenting 
                    research at <strong>international conferences</strong> like <strong>ISCAAS</strong>, and contributing to the 
                    university community as an <strong>AI Lab Assistant</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-16 lg:py-24 bg-navy text-cream relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-light/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
            <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-3">
              Timeline
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-12">
              Key Milestones
            </h2>
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-8 items-start border-t border-cream/10 py-8 first:border-t-0">
                  <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-gold shrink-0 w-20">
                    {item.year}
                  </span>
                  <p className="text-cream/70 leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-3">
                Expertise
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy">
                Skills & Technologies
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((category) => (
                <div
                  key={category.title}
                  className="bg-white border border-sand/60 rounded-2xl p-8 card-hover"
                >
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy mb-6">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((skill) => (
                      <li key={skill} className="flex items-center gap-3 text-warm-gray text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </GSAPAnimationWrapper>
  );
}