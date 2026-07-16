'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { GSAPAnimationWrapper } from '@/components/GSAPAnimationWrapper';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
  const projectsLowerRef = useRef<HTMLDivElement>(null);
  const projectsUpperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxConfig = {
      trigger: '#projects-hero-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      ease: 'none',
    } as const;

    if (projectsLowerRef.current) {
      gsap.fromTo(
        projectsLowerRef.current,
        { yPercent: 40, scale: 1.1 },
        { yPercent: -20, scale: 1.1, scrollTrigger: parallaxConfig }
      );
    }
    if (projectsUpperRef.current) {
      gsap.fromTo(
        projectsUpperRef.current,
        { yPercent: 0, scale: 1.15 },
        { yPercent: -0, scale: 1.15, scrollTrigger: parallaxConfig }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
  const projects = [
    {
      id: 1,
      title: 'Fingo — Financial Impulsiveness Detector',
      description: 'NLP model using fine-tuned BERT achieving 85% accuracy in classifying financial sentiment and detecting impulsive spending patterns. Built during DBS Foundation AI Engineer track.',
      technologies: ['Python', 'BERT', 'NLP', 'FastAPI'],
      category: 'AI / NLP',
      image: '/images/projects/fingo.jpg',
      url: 'https://github.com/mfachri820/impulsive-money-detector',
    },
    {
      id: 2,
      title: 'Yellowfin Tuna Fishing Zone Prediction',
      description: 'GEMASTIK Winning ML model correlating complex oceanographic data (SST, Chlorophyll-a) with fishing activity logs using Random Forest algorithms on large-scale gridded datasets.',
      technologies: ['Python', 'Random Forest', 'GeoSpatial', 'Pandas'],
      category: 'Data Science',
      image: '/images/projects/yellowfin-tuna.jpg',
      url: 'https://drive.google.com/drive/u/1/folders/1_qr2s09jZNEzIEQynz7uuwS7fqshs74j',
    },
    {
      id: 3,
      title: 'Credit Risk Prediction Model',
      description: 'ID/X Partners x Rakamin Intership Project - XGBoost-based risk classification achieving 97% accuracy through feature engineering, hyperparameter tuning, and a robust data cleaning pipeline.',
      technologies: ['Python', 'XGBoost', 'Scikit-learn', 'Feature Eng.'],
      category: 'Machine Learning',
      image: '/images/projects/credit-risk.jpg',
      url: '',
    },
    {
      id: 4,
      title: 'Sentiment Analysis — Chinese Automotive Market',
      description: 'Custom BERT model for advanced sentiment analysis classifying public perception from large-scale text data across the Chinese automotive market.',
      technologies: ['Python', 'BERT', 'Transformers', 'NLP'],
      category: 'AI Research',
      image: '/images/projects/sentiment-china.jpg',
      url: 'https://drive.google.com/drive/folders/1ON9DHAzupaBjDdAOCh0PjLRHm37YQvv3?usp=drive_link',
    },
    {
      id: 5,
      title: 'Prabu 2025 Orientation Portal',
      description: 'Responsive, mobile-friendly frontend for Unpad\'s freshman orientation portal serving 8,000+ concurrent users, translated from Figma to pixel-perfect components.',
      technologies: ['Next.js', 'JavaScript', 'Figma', 'Tailwind'],
      category: 'Frontend',
      image: '/images/projects/prabu-2025.jpg',
      url: '',
    },
    {
      id: 6,
      title: 'Unpad International Office Web',
      description: 'Designed and developed 20+ responsive web pages with embedded PDFs, dynamic content, and improved navigation, boosting online presence and engagement.',
      technologies: ['Elementor', 'JavaScript', 'HTML/CSS', 'WordPress'],
      category: 'Web Development',
      image: '/images/projects/unpad-io.jpg',
      url: 'https://international.unpad.ac.id',
    },
    {
      id: 7,
      title: 'SuaraUnpad - PPL',
      description: 'Speech recognition system for Indonesian language, leveraging deep learning models to transcribe audio from university lectures.',
      technologies: ['Python', 'TensorFlow', 'SpeechRecognition'],
      category: 'AI / Speech',
      image: '/images/projects/suaraunpad.jpg',
      url: 'https://github.com/mfachri820/SuaraUnpad-PPL',
    },
    {
      id: 8,
      title: 'Data Warehouse - Olist',
      description: 'End‑to‑end data‑warehouse pipeline for the Olist e‑commerce dataset, including ETL, modeling, and BI dashboards.',
      technologies: ['PostgreSQL', 'dbt', 'Airflow', 'PowerBI'],
      category: 'Data Engineering',
      image: '/images/projects/olist-warehouse.jpg',
      url: 'https://github.com/mfachri820/DataWarehouse-Olist',
    },
    {
      id: 9,
      title: 'TutorAI - AI Powered for Unpad Master Students',
      description: 'AI‑powered tutoring platform that generates personalized explanations and practice problems using large language models.',
      technologies: ['Next.js', 'OpenAI API', 'Tailwind', 'TypeScript'],
      category: 'AI / Education',
      image: '/images/projects/tutorai.jpg',
      url: 'https://github.com/pipptutorai/TutorAI-Final',
    },
    {
      id: 10,
      title: 'RobotikaFaceRecognition',
      description: 'Robotics project integrating face recognition for autonomous navigation and interaction.',
      technologies: ['Python', 'OpenCV', 'ROS', 'TensorFlow'],
      category: 'Robotics / Vision',
      image: '/images/projects/robotika-face.jpg',
      url: 'https://drive.google.com/drive/folders/1fIPijy-yBJpXSpyHHGpE7iihWCsdOMS_?usp=drive_link',
    },
  ];

  return (
    <GSAPAnimationWrapper>
      <div className="bg-cream">
        <Navigation />

        {/* ── Hero ── */}
        <section id="projects-hero-section" className="relative overflow-hidden min-h-[130vh] -mt-24 pt-20">
          {/* ── Lower (background) ── */}
          <div className="absolute inset-0 z-40 overflow-hidden [contain:paint] pointer-events-none">
            <div ref={projectsLowerRef} className="absolute inset-0">
              <Image
                src="/images/projects/lower.webp"
                alt="Projects hero background"
                fill
                unoptimized
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-cream to-75% pointer-events-none" />
          </div>

          {/* ── Upper (foreground) ── */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden [contain:paint]">
            <div ref={projectsUpperRef} className="absolute inset-0">
              <Image
                src="/images/projects/upper.webp"
                alt="Projects hero foreground"
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
              Selected
              <br />
              <span className="italic">works.</span>
            </h1>
            <div className="max-w-2xl relative">
              <div className="absolute -inset-x-4 -inset-y-3 bg-navy/30 rounded-xl -z-10" />
              <p className="text-lg text-white leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]">
                A selection of projects spanning AI research, machine learning, frontend development, 
                and data science.
              </p>
            </div>
          </div>
        </section>

        {/* ── Projects Grid ── */}
        <section className="-mt-64 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-sand/60 card-hover"
                >
                  {/* Image */}
                  <div className="h-64 bg-sand/40 relative overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-cream via-sand to-cream opacity-70" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block text-xs uppercase tracking-[0.15em] text-gold font-semibold px-3 py-1 bg-gold/10 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy mb-3 group-hover:text-navy-light transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-warm-gray text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium text-navy-muted bg-sand/50 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors duration-300 link-underline"
                      >
                        View Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-warm-gray/40 cursor-default">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 lg:py-24 bg-navy text-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4">
              Like what you see?
            </h2>
            <p className="text-cream/50 max-w-xl mx-auto mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-light transition-colors duration-300"
            >
              Get In Touch
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