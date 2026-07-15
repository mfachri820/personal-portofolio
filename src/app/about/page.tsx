'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { GSAPAnimationWrapper } from '@/components/GSAPAnimationWrapper';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const aboutLowerRef = useRef<HTMLDivElement>(null);
  const aboutMiddleRef = useRef<HTMLDivElement>(null);
  const aboutUpperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxConfig = {
      trigger: '#about-hero-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      ease: 'none',
    } as const;

    if (aboutLowerRef.current) {
      gsap.fromTo(
        aboutLowerRef.current,
        { yPercent: 40, scale: 1.05 },
        { yPercent: -30, scale: 1.05, scrollTrigger: parallaxConfig }
      );
    }
    if (aboutMiddleRef.current) {
      gsap.fromTo(
        aboutMiddleRef.current,
        { yPercent: 20, scale: 1.05},
        { yPercent: -20, scale: 1.05, scrollTrigger: parallaxConfig }
      );
    }
    if (aboutUpperRef.current) {
      gsap.fromTo(
        aboutUpperRef.current,
        { yPercent: 10, scale: 1.05},
        { yPercent: -15, scale: 1.05, scrollTrigger: parallaxConfig }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
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
        <section id="about-hero-section" className="relative overflow-hidden min-h-[130vh] -mt-20 pt-20">
          {/* ── Lower (background) ── */}
          <div className="absolute inset-0 z-40 overflow-hidden [contain:paint] pointer-events-none">
            <div ref={aboutLowerRef} className="absolute inset-0">
              <Image
                src="/images/about/lower-about.webp"
                alt="About hero background"
                fill
                unoptimized
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-cream to-75% pointer-events-none" />
          </div>

          {/* ── Middle ── */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden [contain:paint]">
            <div ref={aboutMiddleRef} className="absolute inset-0">
              <Image
                src="/images/about/middle-about.webp"
                alt="About hero middle"
                fill
                unoptimized
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* ── Upper (foreground) ── */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden [contain:paint]">
            <div ref={aboutUpperRef} className="absolute inset-0">
              <Image
                src="/images/about/upper-about.webp"
                alt="About hero foreground"
                fill
                unoptimized
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* ── Hero content ── */}
          <div className="relative max-w-7xl mx-auto px-6 z-31 lg:px-12 lg:pt-48 lg:pb-12 text-center flex flex-col items-center">
            <div className="flex items-center gap-4 mb-3">
              <span className="w-24 h-[2px] bg-gold" />
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              The person behind 
              <span className="italic"> the code.</span>
            </h1>
            <div className="max-w-2xl relative">
              <div className="absolute -inset-x-4 -inset-y-3 bg-navy/30 rounded-xl -z-10" />
              <p className="text-lg text-white leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]">
                I&apos;m Muhammad Fachri — a third-year Informatics Engineering student at Universitas Padjadjaran 
                with a passion for AI and data-driven solutions.
              </p>
            </div>
          </div>
        </section>

        {/* ── Story + Photo ── */}
        <section className="-mt-64 py-16 lg:py-24">
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
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-4xl font-bold text-navy mb-6">
                  My Journey
                </h2>
                <div className="space-y-4 text-lg text-warm-gray leading-relaxed">
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
                  <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gold shrink-0 w-20">
                    {item.year}
                  </span>
                  <p className="text-cream/70 text-lg leading-relaxed">{item.event}</p>
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
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy mb-6">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((skill) => (
                      <li key={skill} className="flex items-center gap-3 text-warm-gray text-lg">
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