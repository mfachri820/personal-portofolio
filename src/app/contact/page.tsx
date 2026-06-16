'use client';

import Navigation from '@/components/Navigation';
import { GSAPAnimationWrapper } from '@/components/GSAPAnimationWrapper';

export default function Contact() {
  return (
    <GSAPAnimationWrapper>
      <div className="bg-cream">
        <Navigation />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sand/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 lg:pt-36 lg:pb-24">
            <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-3">
              Contact
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-navy leading-tight mb-6">
              Let&apos;s start
              <br />
              <span className="text-navy-muted italic">something great.</span>
            </h1>
            <p className="text-lg text-warm-gray max-w-2xl leading-relaxed">
              Have a project in mind or just want to say hello? I&apos;d love to hear from you. 
              Fill out the form or reach out through any of the channels below.
            </p>
          </div>
        </section>

        {/* ── Form + Info ── */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        ),
                        label: 'Email',
                        value: 'fachricollege@gmail.com',
                      },
                      {
                        icon: (
                          <>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </>
                        ),
                        label: 'Location',
                        value: 'Sumedang, West Java, Indonesia',
                      },
                      {
                        icon: (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        ),
                        label: 'Availability',
                        value: 'Open to opportunities',
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {item.icon}
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-warm-gray-light font-medium mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-navy font-medium text-sm">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-warm-gray-light font-semibold mb-4">
                    Connect
                  </h4>
                  <div className="flex gap-3">
                    {[
                      { label: 'in', href: 'https://www.linkedin.com/in/muhammad-fachri-cl' },
                      { label: 'GH', href: '#' },
                      { label: 'X', href: '#' },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-sand-dark/40 flex items-center justify-center text-xs font-medium text-warm-gray hover:border-gold hover:text-gold transition-all duration-300"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <form className="bg-white border border-sand/60 rounded-2xl p-8 lg:p-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wider text-warm-gray-light font-semibold mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-cream border border-sand rounded-xl text-navy text-sm placeholder:text-warm-gray-light/60 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-warm-gray-light font-semibold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-cream border border-sand rounded-xl text-navy text-sm placeholder:text-warm-gray-light/60 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-warm-gray-light font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-cream border border-sand rounded-xl text-navy text-sm placeholder:text-warm-gray-light/60 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider text-warm-gray-light font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-cream border border-sand rounded-xl text-navy text-sm placeholder:text-warm-gray-light/60 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-navy text-cream py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-navy-light transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </GSAPAnimationWrapper>
  );
}