'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { GSAPAnimationWrapper } from '@/components/GSAPAnimationWrapper';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Home() {
  // refs for parallax hero images
  const heroLowerRef = useRef<HTMLDivElement>(null); // background / sky
  const heroMiddleRef = useRef<HTMLDivElement>(null); // mid layer / mountain
  const heroUpperRef = useRef<HTMLDivElement>(null); // foreground / clouds

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const parallaxConfig = {
      trigger: '#hero-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      ease: 'none',
    } as const;

    // The sky should feel distant and the mountain should carry most of the motion.
    if (heroLowerRef.current) {
      gsap.fromTo(
        heroLowerRef.current,
        { yPercent: 40, scale: 1.1   },
        {
          yPercent: -30,
          scale: 1.15,
          scrollTrigger: parallaxConfig,
        }
      );
    }

    if (heroMiddleRef.current) {
      gsap.fromTo(
        heroMiddleRef.current,
        { yPercent: 20, scale: 1.05 },
        {
          yPercent: -20,
          scale: 1.11,
          scrollTrigger: parallaxConfig,
        }
      );
    }

    if (heroUpperRef.current) {
      gsap.fromTo(
        heroUpperRef.current,
        { yPercent: 0, scale: 1.03 },
        {
          yPercent: -15,
          scale: 1.07,
          scrollTrigger: parallaxConfig,
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <GSAPAnimationWrapper>
      <div className="overflow-x-clip bg-cream">
        <Navigation />

        {/* ── Hero Section ── */}
         <section id="hero-section" className="relative overflow-clip min-h-[130vh] -mt-24 pt-20">
          {/* ── Hero Image - Lower (Foremost) ── */}
          <div className="absolute inset-0 z-40 overflow-hidden [contain:paint]  pointer-events-none">
            <div ref={heroLowerRef} className="absolute inset-0">
              <Image
                src="/images/hero/lower.webp"
                alt="Hero background"
                fill
                unoptimized
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-cream to-75% pointer-events-none"  />
          </div>

          {/* ── Hero Image - Middle (mountain) ── */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden [contain:paint] pointer-events-none">
            <div ref={heroMiddleRef} className="absolute inset-0">
              <Image
                src="/images/hero/middle.webp"
                alt="Hero mountain"
                fill
                unoptimized
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* ── Hero Image - Upper (Sky) ── */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden [contain:paint] pointer-events-none">
            <div ref={heroUpperRef} className="absolute inset-0">
              <Image
                src="/images/hero/upper.webp"
                alt="Hero sky"
                fill
                unoptimized
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* ── Hero content ── */}
          <div className="relative max-w-7xl mx-auto px-6 z-31 lg:px-12 lg:pt-48 lg:pb-12">
            <div className="max-w-3xl">
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8 lg:whitespace-nowrap">
                Muhammad Fachri
              </h1>
              <div className="max-w-xl relative">
                {/* Scrim: solid dark rounded panel behind the text */}
                <div className="absolute -inset-x-4 -inset-y-3 bg-navy/30 rounded-xl -z-10" />
                
                <p className="text-lg md:text-xl text-white max-w-xl leading-relaxed mb-10 relative">
                  Third-year Informatics student at Universitas Padjadjaran, passionate about 
                  AI, data-driven solutions, and building impactful digital experiences.
                </p>
              </div>
              <div className="flex z-31 flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex z-31 items-center gap-2 bg-white text-navy px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-cream transition-colors duration-300"
                >
                  View Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex z-31 items-center gap-2 border-2 border-black/30 text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide bg-black/20 hover:bg-black/40 transition-colors duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Featured Projects ── */}
        <section className="-mt-[30vh] py-5 lg:py-10">
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