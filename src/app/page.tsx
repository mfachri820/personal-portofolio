'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { GSAPAnimationWrapper } from '@/components/GSAPAnimationWrapper';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Home() {
  // refs for each parallax layer (back → front)
  const layer1Ref = useRef<HTMLDivElement>(null); // slowest
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const layer4Ref = useRef<HTMLDivElement>(null); // fastest

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const layers = [
      { ref: layer1Ref.current, y: '-20%' },
      { ref: layer2Ref.current, y: '-50%' },
      { ref: layer3Ref.current, y: '-80%' },
      { ref: layer4Ref.current, y: '-120%' },
    ];

    layers.forEach(({ ref, y }) => {
      if (!ref) return;
      gsap.to(ref, {
        y,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <GSAPAnimationWrapper>
      <div className="bg-cream">
        <Navigation />

        {/* ── Hero Section ── */}
        <section id="hero-section" className="relative overflow-hidden h-screen">
          {/* ── Layer 1 (slowest) – large ring outlines ── */}
          <div ref={layer1Ref} className="absolute inset-0" aria-hidden="true">
            <div className="absolute -top-20 -right-20 w-[1000px] h-[1000px] rounded-full border-[4px] border-navy/10" />
            <div className="absolute -bottom-10 -left-10 w-[700px] h-[700px] rounded-full border-[3px] border-gold/15" />
          </div>

          {/* ── Layer 2 – mid-ground blobs & ring ── */}
          <div ref={layer2Ref} className="absolute inset-0" aria-hidden="true">
            {/* large navy blob top-left */}
            <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-navy/15 rounded-full blur-[60px]" />
            {/* gold ring mid-right */}
            <div className="absolute top-1/4 right-[8%] w-[280px] h-[280px] rounded-full border-[6px] border-gold/40 rotate-12" />
            {/* sand pill shape */}
            <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[180px] bg-sand/50 rounded-[90px] blur-[30px] -rotate-6" />
          </div>

          {/* ── Layer 3 – foreground circles & lines ── */}
          <div ref={layer3Ref} className="absolute inset-0" aria-hidden="true">
            {/* navy circle */}
            <div className="absolute top-[15%] right-[22%] w-[200px] h-[200px] bg-navy/25 rounded-full blur-xl" />
            {/* gold circle */}
            <div className="absolute bottom-[20%] right-[12%] w-[160px] h-[160px] bg-gold/40 rounded-full blur-lg" />
            {/* small navy dot */}
            <div className="absolute top-[55%] left-[6%] w-[100px] h-[100px] bg-navy/30 rounded-full blur-md" />
            {/* diagonal line accent */}
            <div className="absolute top-[38%] right-[4%] w-[240px] h-[4px] bg-gold/35 rotate-[30deg] rounded-full" />
            <div className="absolute top-[43%] right-[2%] w-[180px] h-[3px] bg-navy/20 rotate-[30deg] rounded-full" />
          </div>

          {/* ── Layer 4 (fastest) – sharp detail shapes ── */}
          <div ref={layer4Ref} className="absolute inset-0" aria-hidden="true">
            {/* gold dot cluster */}
            <div className="absolute top-[18%] left-[28%] w-[36px] h-[36px] bg-gold/70 rounded-full" />
            <div className="absolute top-[21%] left-[32%] w-[20px] h-[20px] bg-gold/50 rounded-full" />
            {/* navy square (rotated) */}
            <div className="absolute bottom-[28%] left-[38%] w-[56px] h-[56px] bg-navy/30 rounded-xl rotate-45" />
            {/* gold diamond */}
            <div className="absolute top-[52%] right-[28%] w-[64px] h-[64px] bg-gold/35 rounded-tl-[32px] rounded-br-[32px] rotate-12" />
            {/* small ring */}
            <div className="absolute top-[68%] right-[38%] w-[72px] h-[72px] rounded-full border-[3px] border-navy/25" />
            {/* sand dot */}
            <div className="absolute top-[33%] left-[58%] w-[28px] h-[28px] bg-sand/70 rounded-full" />
          </div>

          {/* ── Hero content ── */}
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-20 lg:pt-36 lg:pb-28">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-6">
                AI & Full-Stack Developer
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold text-navy leading-[1.05] mb-8">
                Muhammad
                <br />
                <span className="text-navy-muted italic">Fachri.</span>
              </h1>
              <p className="text-lg md:text-xl text-warm-gray max-w-xl leading-relaxed mb-10">
                Third-year Informatics student at Universitas Padjadjaran, passionate about 
                AI, data-driven solutions, and building impactful digital experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-navy text-cream px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-navy-light transition-colors duration-300"
                >
                  View Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-navy/20 text-navy px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:border-navy/50 transition-colors duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Featured Projects ── */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-3">
                  Selected Work
                </p>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-navy">
                  Featured Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-sm font-medium text-navy-muted hover:text-navy link-underline transition-colors"
              >
                View all projects →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { num: 1, title: 'Fingo — Financial Impulsiveness Detector', desc: 'AI-powered NLP model using fine-tuned BERT achieving 85% accuracy in classifying financial sentiment.', tag: 'AI / NLP', image: '/images/projects/fingo.jpg' },
                { num: 2, title: 'Yellowfin Tuna Fishing Zone Prediction', desc: 'Machine learning model correlating oceanographic data (SST, Chlorophyll-a) with fishing activity logs.', tag: 'Data Science', image: '/images/projects/yellowfin-tuna.jpg' },
                { num: 3, title: 'Credit Risk Prediction Model', desc: 'XGBoost-based risk classification achieving 97% accuracy through feature engineering and hyperparameter tuning.', tag: 'Machine Learning', image: '/images/projects/credit-risk.jpg' },
              ].map((project) => (
                <div
                  key={project.num}
                  className="group bg-white rounded-2xl overflow-hidden card-hover border border-sand/60"
                >
                  <div className="h-56 bg-sand/40 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute bottom-4 left-4 font-[family-name:var(--font-playfair)] text-sm font-bold text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      0{project.num}
                    </span>
                  </div>
                  <div className="p-7">
                    <span className="inline-block text-xs uppercase tracking-[0.15em] text-gold font-semibold mb-3">
                      {project.tag}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy mb-2 group-hover:text-navy-light transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About Teaser ── */}
        <section className="py-20 lg:py-28 bg-navy text-cream relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-navy-light/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-3">
                  About Me
                </p>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Driven by curiosity,{' '}
                  <span className="text-gold italic">refined by craft.</span>
                </h2>
                <p className="text-cream/60 leading-relaxed mb-8 max-w-lg">
                  I&apos;m Muhammad Fachri — a third-year Informatics Engineering student at Universitas Padjadjaran 
                  specializing in AI &amp; Data. Currently supervising web management at Unpad International Office 
                  and building AI-powered solutions that make a real impact.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border-2 border-cream/30 text-cream px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:border-gold hover:text-gold transition-all duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: '3.93', label: 'GPA / 4.00' },
                  { num: '10+', label: 'Projects Built' },
                  { num: '8', label: 'Leadership Roles' },
                  { num: '2', label: 'Int. Programs' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-navy-light/40 border border-cream/10 rounded-2xl p-6 text-center">
                    <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gold mb-1">
                      {stat.num}
                    </p>
                    <p className="text-xs text-cream/40 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-3">
              Let&apos;s Connect
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-navy mb-6">
              Have a project in mind?
            </h2>
            <p className="text-warm-gray text-lg max-w-xl mx-auto mb-10">
              I&apos;d love to hear about your vision and explore how we can bring it to life together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-cream px-10 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-navy-light transition-colors duration-300"
            >
              Start a Conversation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </GSAPAnimationWrapper>
  );
}