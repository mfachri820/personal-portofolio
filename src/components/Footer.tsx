export default function Footer() {
  return (
    <footer className="bg-navy text-cream/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cream mb-3">
              Muhammad Fachri
            </h3>
            <p className="text-sm leading-relaxed text-cream/50 max-w-xs">
              AI &amp; full-stack developer crafting data-driven solutions and meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/50 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-xs text-cream/50 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <p className="text-xs text-cream/30">
            Designed & built with care
          </p>
        </div>
      </div>
    </footer>
  );
}