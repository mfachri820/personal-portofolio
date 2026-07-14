'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {
  professionalExperience,
  organizations,
  education,
  certifications,
  TimelineEntry,
} from './data';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ──────────────── SHARED CARD COMPONENT ──────────────── */

function TimelineCard({
  item,
  index,
  variant,
}: {
  item: TimelineEntry;
  index: number;
  variant: 'technical' | 'organization';
}) {
  const isEven = index % 2 === 0;

  const accentColors =
    variant === 'technical'
      ? {
          dateBg: 'bg-navy',
          dateText: 'text-cream',
          orgText: 'text-gold',
          dotBorder: 'border-gold',
          dotHover: 'group-hover:bg-gold',
          bulletBg: 'bg-gold/60',
          tagBg: 'bg-sand/50',
          tagText: 'text-navy-muted',
          iconBg: 'bg-gold/10',
          iconColor: 'text-gold',
        }
      : {
          dateBg: 'bg-navy-muted',
          dateText: 'text-cream',
          orgText: 'text-navy-muted',
          dotBorder: 'border-navy-muted',
          dotHover: 'group-hover:bg-navy-muted',
          bulletBg: 'bg-navy-muted/40',
          tagBg: 'bg-navy/5',
          tagText: 'text-navy-muted',
          iconBg: 'bg-navy/10',
          iconColor: 'text-navy-muted',
        };

  return (
    <div className="relative group">
      {/* Dot */}
      <div className="timeline-dot absolute left-1/2 -translate-x-1/2 z-10">
        <div
          className={`w-4 h-4 rounded-full border-[3px] ${accentColors.dotBorder} bg-cream ${accentColors.dotHover} group-hover:scale-150 transition-all duration-300 shadow-md`}
        />
      </div>

      {/* Card */}
      <div className={`w-full flex ${isEven ? 'justify-start' : 'justify-end'}`}>
        <div
          className={`w-[calc(50%-2.5rem)] timeline-card bg-white border border-sand/60 rounded-2xl p-6 lg:p-8 card-hover`}
        >
          {/* Header row */}
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 ${accentColors.dateBg} ${accentColors.dateText} text-xs font-semibold rounded-full`}>
              {item.date}
            </span>
            <span className="text-xs text-warm-gray-light">{item.duration}</span>
          </div>

          {/* Image */}
          {item.image && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-sand/40">
              <Image
                src={item.image}
                alt={item.title}
                fill
                unoptimized
                className="object-cover object-center"
              />
            </div>
          )}

          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy mb-1 leading-snug">
            {item.title}
          </h3>
          <p className={`text-lg font-semibold mb-1 ${accentColors.orgText}`}>
            {item.organization}
          </p>
          <p className="text-xs text-warm-gray-light mb-4">
            📍 {item.location}
          </p>

          <ul className="space-y-2 mb-4">
            {item.description.map((desc, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-warm-gray leading-relaxed">
                <span className={`w-1.5 h-1.5 rounded-full ${accentColors.bulletBg} shrink-0 mt-2`} />
                <span>{desc}</span>
              </li>
            ))}
          </ul>

          {item.highlights && (
            <div className="flex flex-wrap gap-2">
              {item.highlights.map((h) => (
                <span
                  key={h}
                  className={`px-3 py-1 ${accentColors.tagBg} ${accentColors.tagText} text-xs rounded-full font-medium`}
                >
                  {h}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ──────────────── ORG TIMELINE CARD (Navy theme) ──────────────── */

function OrgTimelineCard({ item, index }: { item: TimelineEntry; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative group">
      {/* Dot */}
      <div className="timeline-dot absolute left-1/2 -translate-x-1/2 z-10">
        <div className="w-4 h-4 rounded-full border-[3px] border-gold/60 bg-navy group-hover:bg-gold group-hover:scale-150 transition-all duration-300 shadow-md" />
      </div>

      {/* Card */}
      <div className={`w-full flex ${isEven ? 'justify-start' : 'justify-end'}`}>
        <div
          className={`w-[calc(50%-2.5rem)] timeline-card bg-navy-light/40 border border-cream/10 rounded-2xl p-6 lg:p-8 card-hover`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-lg bg-cream/10 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-cream/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full">
              {item.date}
            </span>
            <span className="text-xs text-cream/40">{item.duration}</span>
          </div>

          {/* Image */}
          {item.image && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-cream/5">
              <Image
                src={item.image}
                alt={item.title}
                fill
                unoptimized
                className="object-cover object-center"
              />
            </div>
          )}

          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cream mb-1 leading-snug">
            {item.title}
          </h3>
          <p className="text-lg text-gold font-semibold mb-1">{item.organization}</p>
          <p className="text-sm text-cream/40 mb-4">📍 {item.location}</p>

          <ul className="space-y-2 mb-4">
            {item.description.map((desc, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-cream/60 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/40 shrink-0 mt-2" />
                <span>{desc}</span>
              </li>
            ))}
          </ul>

          {item.highlights && (
            <div className="flex flex-wrap gap-2">
              {item.highlights.map((h) => (
                <span key={h} className="px-3 py-1 bg-cream/10 text-cream/70 text-xs rounded-full font-medium">
                  {h}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ──────────────── PAGE ──────────────── */

export default function Journey() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      // ── Hero entrance ──
      gsap.fromTo(
        '.journey-hero',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      // ── Section headings ──
      gsap.utils.toArray<HTMLElement>('.section-heading').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });

      // ── Timeline vertical line grow ──
      gsap.utils.toArray<HTMLElement>('.timeline-line').forEach((line) => {
        gsap.fromTo(line,
          { scaleY: 0, transformOrigin: 'top' },
          {
            scaleY: 1, duration: 1.5, ease: 'power2.out',
            scrollTrigger: { trigger: line, start: 'top 80%', toggleActions: 'play none none none' },
          }
        );
      });

      // ── All timeline cards flow up ──
      gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });

      // ── Timeline dots pop ──
      gsap.utils.toArray<HTMLElement>('.timeline-dot').forEach((dot) => {
        gsap.fromTo(dot,
          { scale: 0 },
          {
            scale: 1, duration: 0.4, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: dot, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });

      // ── Education cards flow up ──
      gsap.utils.toArray<HTMLElement>('.edu-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.7, delay: i * 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });

      // ── Certification cards flow up ──
      gsap.utils.toArray<HTMLElement>('.cert-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' },
          }
        );
      });

      // ── Parallax decorative blobs ──
      gsap.utils.toArray<HTMLElement>('.parallax-blob').forEach((blob) => {
        const speed = parseFloat(blob.dataset.speed || '0.3');
        gsap.to(blob, {
          y: () => -100 * speed,
          ease: 'none',
          scrollTrigger: { trigger: blob, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-cream">
      <Navigation />

      {/* ════════════ HERO ════════════ */}
      <section className="relative journey-hero min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Extended container for full visible image */}
        <div className="absolute -inset-y-16 inset-x-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/journey/Pohon.webp"
            alt="Journey hero background"
            fill
            unoptimized
            className="object-cover object-center scale-125"
            priority
          />
        </div>
        {/* Large decorative elements */}
        <div className="absolute top-16 right-[10%] w-24 h-24 rounded-full border-2 border-gold/20 animate-float" />
        <div className="absolute bottom-24 left-[8%] w-16 h-16 bg-navy/5 rounded-2xl rotate-12 animate-float-slow" />
        <div className="absolute top-1/3 right-[5%] w-12 h-12 bg-gold/10 rounded-full animate-float-delay" />
        <div className="absolute bottom-1/3 left-[15%] w-8 h-8 border-2 border-navy-muted/15 rounded-lg rotate-45 animate-float" />
        
        {/* Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sand/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none parallax-blob" data-speed="0.2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none parallax-blob" data-speed="0.4" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32 relative z-10 text-center"> 
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] mb-6 relative z-10">
            My Experience & Education
          </h1>
          <p className="text-lg text-stone-500 max-w-2xl leading-relaxed relative z-10 mx-auto drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]">
            My professional experience and academic journey.
          </p>
        </div>
      </section>

      {/* ════════════ PROFESSIONAL EXPERIENCE ════════════ */}
      <section className="py-16 lg:py-24 relative">
        {/* Large decorative elements */}
        <div className="absolute top-20 left-[5%] w-20 h-20 rounded-full border-2 border-gold/15 animate-float" />
        <div className="absolute bottom-32 right-[6%] w-14 h-14 bg-navy/5 rounded-xl -rotate-12 animate-float-slow" />
        <div className="absolute top-1/3 right-[3%] w-10 h-10 border-2 border-gold/20 rounded-lg rotate-45 animate-float-delay" />
        <div className="absolute bottom-20 left-[8%] w-16 h-16 bg-sand/30 rounded-full animate-float" />
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="section-heading text-center mb-20">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy">
              Professional Experience
            </h2>
            <p className="text-warm-gray mt-3 max-w-lg mx-auto">
              Software engineering, AI/ML, and data science roles where I built products and solved technical challenges.
            </p>
          </div>

          <div className="relative">
            <div className="timeline-line absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gold/30" />
            <div className="space-y-16">
              {professionalExperience.map((item, index) => (
                <TimelineCard key={item.id} item={item} index={index} variant="technical" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ ORGANIZATIONS ════════════ */}
      <section className="py-16 lg:py-24 bg-navy text-cream relative overflow-hidden">
        {/* Large decorative elements */}
        <div className="absolute top-24 left-[6%] w-28 h-28 rounded-full border-2 border-gold/15 animate-float" />
        <div className="absolute bottom-20 right-[8%] w-20 h-20 bg-cream/5 rounded-2xl rotate-12 animate-float-slow" />
        <div className="absolute top-1/3 right-[4%] w-14 h-14 bg-gold/10 rounded-full animate-float-delay" />
        <div className="absolute bottom-1/3 left-[10%] w-10 h-10 border-2 border-cream/10 rounded-lg -rotate-45 animate-float" />
        {/* Blobs */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-light/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none parallax-blob" data-speed="0.3" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none parallax-blob" data-speed="0.5" />

        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="section-heading text-center mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-3">Leadership</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-cream">
              Organizations
            </h2>
            <p className="text-cream/60 mt-3 max-w-lg mx-auto">
              Leadership, sponsorship, and community engagement roles that shaped my soft skills and professional network.
            </p>
          </div>

          <div className="relative">
            <div className="timeline-line absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-cream/15" />
            <div className="space-y-16">
              {organizations.map((item, index) => (
                <OrgTimelineCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ EDUCATION ════════════ */}
      <section className="py-16 lg:py-24 relative">
        {/* Large decorative elements */}
        <div className="absolute top-16 left-[4%] w-18 h-18 bg-gold/10 rounded-full animate-float" />
        <div className="absolute bottom-24 right-[5%] w-14 h-14 border-2 border-navy-muted/15 rounded-xl rotate-12 animate-float-slow" />
        <div className="absolute top-1/3 right-[6%] w-20 h-20 rounded-full border-2 border-gold/15 animate-float-delay" />
        <div className="absolute bottom-16 left-[10%] w-10 h-10 bg-sand/30 rounded-lg -rotate-12 animate-float" />
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="section-heading text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-3">Academic</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((item) => (
              <div key={item.id} className="edu-card bg-white border border-sand/60 rounded-2xl p-8 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full">
                    Education
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy mb-1">
                  {item.title}
                </h3>
                <p className="text-xl text-gold font-medium mb-1">{item.institution}</p>
                <p className="text-xs text-warm-gray-light mb-4">{item.date}</p>

                {item.description && (
                  <p className="text-sm text-warm-gray leading-relaxed mb-4">{item.description}</p>
                )}

                {item.highlights && (
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span key={h} className="px-3 py-1 bg-sand/50 text-navy-muted text-xs rounded-full font-medium">
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CERTIFICATIONS ════════════ */}
      <section className="py-16 lg:py-24 bg-cream-dark/50 relative">
        {/* Large decorative elements */}
        <div className="absolute top-20 left-[6%] w-22 h-22 rounded-full border-2 border-gold/20 animate-float" />
        <div className="absolute bottom-28 right-[7%] w-16 h-16 bg-navy/5 rounded-2xl rotate-12 animate-float-slow" />
        <div className="absolute top-1/3 left-[4%] w-12 h-12 bg-gold/10 rounded-full animate-float-delay" />
        <div className="absolute bottom-16 right-[10%] w-8 h-8 border-2 border-navy-muted/20 rounded-lg -rotate-45 animate-float" />
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="section-heading text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-3">Achievements</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-navy">
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="cert-card bg-white border border-sand/60 rounded-2xl p-6 card-hover flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy mb-1 leading-snug">{cert.name}</h3>
                  {cert.issuer && <p className="text-xs text-warm-gray">{cert.issuer}</p>}
                  {cert.score && <p className="text-xs text-gold font-semibold mt-1">Score: {cert.score}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
