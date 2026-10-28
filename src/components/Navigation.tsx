'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    let heroId = 'hero-section';
    if (pathname === '/about') heroId = 'about-hero-section';
    else if (pathname === '/projects') heroId = 'projects-hero-section';

    const heroSection = document.getElementById(heroId);

    if (!heroSection) {
      setIsHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, [pathname]);

  const transparentNav = isHeroVisible;

  const links: { href: string; label: string; hideOnHero?: boolean }[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/journey', label: 'Journey' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        transparentNav
          ? 'border-transparent bg-transparent'
          : 'border-sand bg-cream/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Brand */}
          <Link href="/" className="group flex items-center gap-2">
            <span
              className={`font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight transition-colors duration-300 ${
                transparentNav ? 'text-cream' : 'text-navy'
              }`}
            >
              Fachri
            </span>
            <span className="w-2 h-2 rounded-full bg-gold group-hover:scale-125 transition-transform duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              if (link.hideOnHero && transparentNav) return null;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-5 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300
                    ${isActive
                      ? 'bg-navy text-cream'
                      : transparentNav
                        ? 'text-cream/90 hover:text-cream hover:bg-cream/10'
                        : 'text-navy-muted hover:text-navy hover:bg-sand/60'
                    }
                  `}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${
              transparentNav ? 'hover:bg-cream/10' : 'hover:bg-sand/50'
            }`}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${transparentNav ? 'bg-cream' : 'bg-navy'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${transparentNav ? 'bg-cream' : 'bg-navy'} ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${transparentNav ? 'bg-cream' : 'bg-navy'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className={`px-6 pb-6 pt-2 space-y-1 border-t ${transparentNav ? 'bg-navy/90 border-white/10' : 'bg-cream border-sand'}`}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            if (link.hideOnHero && transparentNav) return null;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  block px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-all duration-200
                  ${isActive
                    ? 'bg-navy text-cream'
                    : transparentNav
                      ? 'text-cream/90 hover:bg-cream/10 hover:text-cream'
                      : 'text-navy-muted hover:bg-sand/50 hover:text-navy'
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}