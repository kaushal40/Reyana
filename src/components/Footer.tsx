import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-indigo text-ivory/70 font-sans">
      {/* Top decorative strip */}
      <div className="h-1 w-full bg-gradient-to-r from-terracotta via-gold to-indigo-light" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display text-xl text-ivory tracking-[0.1em] uppercase mb-2">
              House of Reyana
            </div>
            <div className="font-serif italic text-gold text-sm mb-6">
              Minimalism with a meaning.
            </div>
            <p className="text-xs leading-relaxed text-ivory/50 max-w-xs">
              Contemporary Indian heritage craftsmanship, brought into Western wardrobes.
              Every piece is made by hand, by artisan families across India.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-6">Navigate</p>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/collections', label: 'Collections' },
                { href: '/collections?cat=men', label: "Men's" },
                { href: '/collections?cat=women', label: "Women's" },
                { href: '/signup', label: 'Join the List' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-xs tracking-widest uppercase text-ivory/50 hover:text-gold transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Crafts + Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-6">Our Craft</p>
            <ul className="space-y-3 mb-8">
              {[
                'Hand Block Printing — Jaipur',
                'Chikankari Embroidery — Lucknow',
                'Natural Fabrics — Pan India',
              ].map(c => (
                <li key={c} className="text-xs text-ivory/50">{c}</li>
              ))}
            </ul>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">Contact</p>
            <a href="mailto:hello@houseofreyana.com" className="text-xs text-ivory/50 hover:text-gold transition-colors">
              hello@houseofreyana.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-ivory/30 tracking-wide">
            © {new Date().getFullYear()} House of Reyana. All rights reserved.
          </p>
          <p className="text-[11px] text-ivory/30 tracking-wide text-center">
            Made with care for artisans and the planet.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Returns'].map(t => (
              <span key={t} className="text-[11px] text-ivory/30 tracking-wide cursor-pointer hover:text-gold transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
