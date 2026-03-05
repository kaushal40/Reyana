'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/collections', label: 'Collections' },
    { href: '/signup', label: 'Join the List' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-sand/60' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link href="/" className="flex flex-col items-start leading-none">
          <span className="font-display text-base md:text-lg font-semibold text-indigo tracking-[0.12em] uppercase">
            House of Reyana
          </span>
          <span className="font-serif italic text-[10px] text-gold tracking-widest hidden sm:block">
            A love letter to our roots
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-sans text-xs tracking-[0.18em] uppercase transition-colors duration-200 ${
                pathname === l.href ? 'text-terracotta' : 'text-brown/70 hover:text-indigo'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/collections" className="btn-primary py-2.5 px-6 text-xs">
            Pre-Order Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-brown transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-brown transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-brown transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ivory border-t border-sand px-6 py-8 flex flex-col gap-6">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm tracking-[0.2em] uppercase text-brown"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/collections" onClick={() => setMenuOpen(false)} className="btn-primary text-xs mt-2 w-fit">
            Pre-Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
