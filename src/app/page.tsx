'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PreOrderModal } from '@/components/PreOrderModal';
import { ChikankariCanvas } from '@/components/ChikankariCanvas';
import { products } from '@/data/products';

const featured = products.filter(p => p.tag === 'Bestseller' || p.tag === 'Signature' || p.tag === 'New').slice(0, 4);

export default function HomePage() {
  const [pickedProduct, setPickedProduct] = useState<typeof products[0] | null>(null);
  const [signupEmail, setSignupEmail] = useState('');
  const [signupDone, setSignupDone] = useState(false);

  return (
    <>
      <ChikankariCanvas />
      <Nav />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ivory border-motif">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-width='0.8'%3E%3Cpath d='M50 10 C45 25 35 30 20 35 C35 38 42 48 42 65 C46 50 55 42 72 40 C57 38 52 28 50 10Z'/%3E%3Ccircle cx='50' cy='50' r='6'/%3E%3Ccircle cx='10' cy='10' r='4'/%3E%3Ccircle cx='90' cy='10' r='4'/%3E%3Ccircle cx='10' cy='90' r='4'/%3E%3Ccircle cx='90' cy='90' r='4'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Decorative corner ornaments */}
        <div className="absolute top-24 left-8 md:left-16 text-gold/20 font-serif text-6xl select-none leading-none">✦</div>
        <div className="absolute top-24 right-8 md:right-16 text-gold/20 font-serif text-6xl select-none leading-none">✦</div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="section-label animate-fade-in mb-6">Est. 2024 · India × West</p>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-indigo leading-none tracking-[0.04em] mb-6 animate-slide-up">
            House of<br />
            <span className="italic font-400">Reyana</span>
          </h1>

          <div className="ornament max-w-xs mx-auto my-6 animate-fade-in delay-300">
            <span className="text-gold text-sm">✦</span>
          </div>

          <p className="font-serif italic text-2xl md:text-3xl text-brown/70 mb-10 animate-slide-up delay-200">
            A love letter to our roots
          </p>

          <p className="font-sans text-sm text-brown/50 tracking-wide max-w-md mx-auto mb-12 leading-relaxed animate-fade-in delay-300">
            Indian heritage craftsmanship, reinterpreted for the Western wardrobe.
            Hand block printed. Chikankari embroidered. Naturally made.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-500">
            <Link href="/collections" className="btn-primary">
              Explore Collections
            </Link>
            <Link href="/signup" className="btn-outline">
              Join the List
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500">
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-brown/30">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent" />
        </div>
      </section>

      {/* ── BRAND STORY ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

            <div>
              <p className="section-label mb-6">Our Story</p>
              <blockquote className="font-serif italic text-3xl md:text-4xl text-indigo leading-snug mb-8">
                "Western fashion is saturated.<br />
                <span className="text-terracotta">Indian craftsmanship is undervalued.</span><br />
                We exist in that gap."
              </blockquote>
              <div className="w-12 h-px bg-gold mb-8" />
              <p className="font-sans text-sm text-brown/70 leading-loose mb-4">
                House of Reyana is the first contemporary brand purpose-built to bring Indian
                heritage craftsmanship into Western wardrobes. We reinterpret wardrobe staples —
                the shirt, the tee, the dress — through the lens of India's most treasured textile traditions.
              </p>
              <p className="font-sans text-sm text-brown/70 leading-loose">
                Every thread is worked by artisan families in Lucknow and Jaipur, paid fairly,
                and crafted on natural fibres. No fast fashion. No compromise.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Stat cards */}
              {[
                { num: '3', label: 'Heritage Crafts', sub: 'Block print · Chikankari · Zari' },
                { num: '12+', label: 'Artisan Families', sub: 'Across Lucknow & Jaipur' },
                { num: '100%', label: 'Natural Fabrics', sub: 'Cotton · Linen · Silk blends' },
                { num: '∞', label: 'Generations', sub: 'Of knowledge, passed by hand' },
              ].map(s => (
                <div key={s.label} className="bg-ivory p-6 border border-sand">
                  <div className="font-display text-4xl text-terracotta mb-2">{s.num}</div>
                  <div className="font-sans text-xs tracking-widest uppercase text-indigo mb-1">{s.label}</div>
                  <div className="font-sans text-[11px] text-brown/40">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CRAFT ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-label mb-4">The Art Behind Every Thread</p>
            <h2 className="font-display text-4xl md:text-5xl text-indigo">
              Three crafts, centuries old.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {[
              {
                name: 'Hand Block Printing',
                origin: 'Rajasthan',
                icon: '◈',
                desc: 'Carved wooden blocks, dipped in natural dye, pressed by hand — one impression at a time. Each print is unique, imperfect in the most beautiful way.',
                accent: 'bg-indigo text-white',
                detail: 'Jaipur · Since the 12th century',
              },
              {
                name: 'Chikankari',
                origin: 'Lucknow',
                icon: '❀',
                desc: 'Delicate shadow-work embroidery on fine fabric. Thirty-two distinct stitches, each worked by trained hands in the lanes of old Lucknow.',
                accent: 'bg-terracotta text-white',
                detail: 'Lucknow · Mughal court tradition',
              },
              {
                name: 'Natural Fabrics',
                origin: 'Pan India',
                icon: '◉',
                desc: 'Cotton, linen, silk blends — sourced from mills that respect both the land and the weaver. Materials that breathe, age gracefully, and last for decades.',
                accent: 'bg-sage text-white',
                detail: 'India · Sustainably sourced',
              },
            ].map(craft => (
              <div key={craft.name} className={`${craft.accent} p-10 md:p-12`}>
                <div className="text-4xl mb-6 opacity-80">{craft.icon}</div>
                <p className="font-sans text-xs tracking-[0.25em] uppercase opacity-60 mb-3">{craft.detail}</p>
                <h3 className="font-display text-2xl mb-4">{craft.name}</h3>
                <p className="font-sans text-sm leading-relaxed opacity-80">{craft.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ─────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="section-label mb-3">First Look</p>
              <h2 className="font-display text-4xl md:text-5xl text-indigo">Featured Pieces</h2>
            </div>
            <Link href="/collections" className="hidden md:inline-flex font-sans text-xs tracking-[0.2em] uppercase text-brown/50 hover:text-terracotta transition-colors border-b border-current pb-1">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map(product => (
              <div key={product.id} className="product-card group cursor-pointer" onClick={() => setPickedProduct(product)}>
                {/* Fabric art */}
                <div className={`${product.fabricClass} fabric-art aspect-[3/4] relative overflow-hidden`}>
                  {product.tag && (
                    <span className="absolute top-3 left-3 z-10 text-[10px] font-sans tracking-[0.15em] uppercase bg-ivory/90 text-brown px-2.5 py-1">
                      {product.tag}
                    </span>
                  )}
                  {/* Hover overlay */}
                  <div className="overlay absolute inset-0 bg-indigo/70 flex items-center justify-center">
                    <span className="font-sans text-xs tracking-[0.2em] uppercase text-white border border-white/60 px-5 py-2.5">
                      Pre-Order
                    </span>
                  </div>
                  {/* Craft label on fabric */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className={`font-sans text-[10px] tracking-widest uppercase ${product.labelColor} opacity-50`}>
                      {product.craft}
                    </span>
                  </div>
                </div>
                {/* Product info */}
                <div className="pt-4 pb-2">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-brown/40 mb-1">{product.subtitle}</p>
                  <h3 className="font-display text-base text-indigo mb-1">{product.name}</h3>
                  <p className="font-sans text-sm text-terracotta">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/collections" className="btn-outline">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* ── ARTISAN QUOTE ─────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-indigo relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='20' fill='none' stroke='%23C9A84C' stroke-width='1'/%3E%3Ccircle cx='40' cy='40' r='35' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="text-gold text-5xl font-serif mb-8 opacity-40">"</div>
          <p className="font-serif italic text-2xl md:text-3xl text-ivory leading-relaxed mb-8">
            My grandmother learned this stitch from her grandmother.
            Now I'm learning it from her. When you wear this, you carry
            four generations of our family with you.
          </p>
          <div className="ornament max-w-[200px] mx-auto my-6">
            <span className="text-gold text-sm">✦</span>
          </div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold/60">
            Fatima Bi · Chikankari Artisan · Lucknow, 2024
          </p>
        </div>
      </section>

      {/* ── COLLECTIONS PREVIEW ───────────────────────────────── */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Collections</p>
            <h2 className="font-display text-4xl md:text-5xl text-indigo">
              Crafted for every wardrobe
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-1">
            {/* Men's */}
            <Link href="/collections?cat=men" className="group relative overflow-hidden aspect-[4/5] bg-indigo flex flex-col justify-end p-10">
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='12' y='12' width='14' height='14' transform='rotate(45 19 19)' fill='none' stroke='%23ffffff' stroke-width='0.8'/%3E%3Crect x='34' y='34' width='14' height='14' transform='rotate(45 41 41)' fill='none' stroke='%23ffffff' stroke-width='0.8'/%3E%3Ccircle cx='30' cy='30' r='4' fill='none' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/g%3E")`,
                  backgroundSize: '60px 60px',
                }}
              />
              <div className="relative z-10">
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold/70 mb-3">Men's Collection</p>
                <h3 className="font-display text-4xl md:text-5xl text-ivory mb-4">For Him</h3>
                <p className="font-sans text-sm text-ivory/50 mb-6 leading-relaxed">
                  Chikankari tees, hand block printed shirts, and refined linen. Crafted for a man who values meaning.
                </p>
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold border-b border-gold/50 pb-1 group-hover:border-gold transition-colors">
                  Shop Men's →
                </span>
              </div>
            </Link>

            {/* Women's */}
            <Link href="/collections?cat=women" className="group relative overflow-hidden aspect-[4/5] bg-terracotta flex flex-col justify-end p-10">
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='35' cy='35' rx='14' ry='20' fill='none' stroke='%23ffffff' stroke-width='0.8'/%3E%3Cellipse cx='35' cy='35' rx='20' ry='14' fill='none' stroke='%23ffffff' stroke-width='0.8'/%3E%3Ccircle cx='35' cy='35' r='4' fill='none' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/g%3E")`,
                  backgroundSize: '70px 70px',
                }}
              />
              <div className="relative z-10">
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-ivory/50 mb-3">Women's Collection</p>
                <h3 className="font-display text-4xl md:text-5xl text-ivory mb-4">For Her</h3>
                <p className="font-sans text-sm text-ivory/70 mb-6 leading-relaxed">
                  Midi dresses, wrap silhouettes, flowing kaftans, and co-ords. Each piece a conversation starter.
                </p>
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-ivory/80 border-b border-ivory/40 pb-1 group-hover:border-ivory transition-colors">
                  Shop Women's →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="text-gold text-2xl mb-6">✦</div>
          <p className="section-label mb-4">Early Access</p>
          <h2 className="font-display text-4xl md:text-5xl text-indigo mb-4">
            Be first to know.
          </h2>
          <p className="font-serif italic text-xl text-brown/60 mb-10">
            Join our founding community — limited pre-orders, artisan stories, and the occasional secret.
          </p>

          {signupDone ? (
            <div className="py-6">
              <p className="font-display text-2xl text-terracotta mb-2">Thank you ✦</p>
              <p className="font-sans text-sm text-brown/60">You're on the founding list. We'll be in touch.</p>
            </div>
          ) : (
            <form
              onSubmit={e => { e.preventDefault(); if (signupEmail) setSignupDone(true); }}
              className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={signupEmail}
                onChange={e => setSignupEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-ivory border border-sand border-r-0 px-5 py-4 text-sm font-sans text-brown placeholder-brown/30 focus:outline-none focus:border-gold transition-colors"
              />
              <button type="submit" className="btn-primary py-4 px-8 text-xs whitespace-nowrap border border-terracotta">
                Join the List
              </button>
            </form>
          )}
          <p className="font-sans text-[11px] text-brown/30 mt-4">
            No spam. Unsubscribe anytime. We value your trust.
          </p>
        </div>
      </section>

      <Footer />

      {/* Pre-order modal */}
      {pickedProduct && (
        <PreOrderModal product={pickedProduct} onClose={() => setPickedProduct(null)} />
      )}
    </>
  );
}
