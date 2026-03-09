'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PreOrderModal } from '@/components/PreOrderModal';
import { ChikankariCanvas } from '@/components/ChikankariCanvas';
import { products } from '@/data/products';

// All 3 products are featured (1 men + 2 women)
const featured = products;

export default function HomePage() {
  const [pickedProduct, setPickedProduct] = useState<typeof products[0] | null>(null);
  const [signupEmail, setSignupEmail] = useState('');
  const [signupDone, setSignupDone] = useState(false);

  return (
    <>
      <ChikankariCanvas />
      <Nav />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-motif"
        style={{
          background: 'radial-gradient(ellipse 110% 90% at 50% 48%, #FDFCFB 15%, #EAF5F0 60%, #C8DDD6 100%)',
        }}
      >
        {/* Decorative corner ornaments */}
        <div className="absolute top-24 left-8 md:left-16 text-gold/20 font-serif text-6xl select-none leading-none">✦</div>
        <div className="absolute top-24 right-8 md:right-16 text-gold/20 font-serif text-6xl select-none leading-none">✦</div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <img
              src="/logo.png"
              alt="House of Reyana"
              className="h-24 w-24 md:h-28 md:w-28 rounded-2xl object-cover"
              style={{
                boxShadow: '0 0 0 1.5px #B8A87C, 0 8px 36px rgba(30, 57, 53, 0.22)',
              }}
            />
          </div>

          <p className="section-label animate-fade-in mb-6">India × West</p>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-indigo leading-none tracking-[0.04em] mb-6 animate-slide-up">
            House of<br />
            <span className="italic font-400">Reyana</span>
          </h1>

          <div className="ornament max-w-xs mx-auto my-6 animate-fade-in delay-300">
            <span className="text-gold text-sm">✦</span>
          </div>

          <p className="font-serif italic text-2xl md:text-3xl text-brown/70 mb-10 animate-slide-up delay-200">
            Minimalism with a meaning.
          </p>

          <p className="font-sans text-sm text-brown/50 tracking-wide max-w-md mx-auto mb-12 leading-relaxed animate-fade-in delay-300">
            Elevated Western silhouettes infused with authentic Indian textile artistry.
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500 z-10">
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
                "Global fashion is saturated.<br />
                <span className="text-terracotta">Indian craftsmanship is undervalued.</span><br />
                We exist in that gap."
              </blockquote>
              <div className="w-12 h-px bg-gold mb-8" />
              <p className="font-sans text-sm text-brown/70 leading-loose mb-4">
                House of Reyana was born from two sisters — <strong>Shreya</strong> and <strong>Krina</strong> — who grew up between worlds.
                One a physician pursuing an MBA at Ivey, the other a tech consultant at Deloitte. Together, they built a brand
                to bridge what they always felt was missing: authentic Indian soul in the Western everyday wardrobe.
              </p>
              <p className="font-sans text-sm text-brown/70 leading-loose">
                Every thread is worked by artisan families in Lucknow and Jaipur, paid fairly,
                and crafted on natural fibres. No fast fashion. No compromise.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '3', label: 'Heritage Crafts', sub: 'Block print · Chikankari · Zari' },
                { num: '12+', label: 'Artisan Families', sub: 'Across Lucknow & Jaipur' },
                { num: '100%', label: 'Natural Fabrics', sub: 'Cotton · Linen · Silk blends' },
                { num: '65%', label: 'Target Margin', sub: 'Direct-to-consumer, zero middlemen' },
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

      {/* ── THE FOUNDERS ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="section-label mb-4">The Founders</p>
            <h2 className="font-display text-4xl md:text-5xl text-indigo">
              Two sisters, one vision.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-1 max-w-3xl mx-auto">
            {[
              {
                initials: 'K',
                name: 'Krina',
                role: 'Co-founder & CEO',
                background: 'B.Tech · Ex-Deloitte',
                desc: 'Operational discipline and strategic rigor. Krina brings tech consulting and business acumen to every decision, ensuring Reyana scales with integrity.',
                bg: 'bg-indigo',
              },
              {
                initials: 'S',
                name: 'Shreya',
                role: 'Co-founder & CMO',
                background: 'MD · MBA Candidate, Ivey Business School',
                desc: 'Story and soul. Shreya shapes the brand voice, community, and creative vision — rooted in cultural authenticity and a deep love for Indian craft.',
                bg: 'bg-terracotta',
              },
            ].map(f => (
              <div key={f.name} className={`${f.bg} p-10 md:p-12 text-white`}>
                <div className="font-logo italic text-5xl font-bold text-white/20 mb-6 select-none">{f.initials}</div>
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-white/50 mb-2">{f.role}</p>
                <h3 className="font-display text-2xl mb-1">{f.name}</h3>
                <p className="font-sans text-xs text-white/50 mb-4">{f.background}</p>
                <p className="font-sans text-sm leading-relaxed text-white/75">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE CRAFT ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-cream">
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
                icon: '◈',
                desc: 'Carved wooden blocks, dipped in natural dye, pressed by hand — one impression at a time. Each print is unique, imperfect in the most beautiful way.',
                accent: 'bg-indigo text-white',
                detail: 'Jaipur · Since the 12th century',
              },
              {
                name: 'Chikankari',
                icon: '❀',
                desc: 'Delicate shadow-work embroidery on fine fabric. Thirty-two distinct stitches, each worked by trained hands in the lanes of old Lucknow.',
                accent: 'bg-terracotta text-white',
                detail: 'Lucknow · Mughal court tradition',
              },
              {
                name: 'Natural Fabrics',
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
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="section-label mb-3">MVP Collection</p>
              <h2 className="font-display text-4xl md:text-5xl text-indigo">First Capsule</h2>
            </div>
            <Link href="/collections" className="hidden md:inline-flex font-sans text-xs tracking-[0.2em] uppercase text-brown/50 hover:text-terracotta transition-colors border-b border-current pb-1">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {featured.map(product => (
              <div key={product.id} className="product-card group cursor-pointer" onClick={() => setPickedProduct(product)}>
                {/* Product visual */}
                <div className={`${product.images ? '' : product.fabricClass} fabric-art aspect-[3/4] relative overflow-hidden`}>
                  {product.images && (
                    <>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      {product.images[1] && (
                        <img
                          src={product.images[1]}
                          alt={`${product.name} detail`}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                      )}
                    </>
                  )}
                  {product.tag && (
                    <span className="absolute top-3 left-3 z-10 text-[10px] font-sans tracking-[0.15em] uppercase bg-ivory/90 text-brown px-2.5 py-1">
                      {product.tag}
                    </span>
                  )}
                  <span className={`absolute top-3 right-3 z-10 text-[10px] font-sans tracking-[0.12em] uppercase px-2 py-1 ${
                    product.category === 'men' ? 'bg-indigo/80 text-ivory' : 'bg-terracotta/80 text-ivory'
                  }`}>
                    {product.category === 'men' ? "Men's" : "Women's"}
                  </span>
                  {/* Hover overlay */}
                  <div className="overlay absolute inset-0 bg-indigo/70 flex items-center justify-center">
                    <span className="font-sans text-xs tracking-[0.2em] uppercase text-white border border-white/60 px-5 py-2.5">
                      Pre-Order
                    </span>
                  </div>
                  {/* Craft label */}
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='20' fill='none' stroke='%23B8A87C' stroke-width='1'/%3E%3Ccircle cx='40' cy='40' r='35' fill='none' stroke='%23B8A87C' stroke-width='0.5'/%3E%3C/svg%3E")`,
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
      <section className="py-24 md:py-32 bg-cream">
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
              {/* Cutout — pops on hover */}
              <img
                src="/men_cutout.png"
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-[88%] w-auto object-contain object-bottom pointer-events-none
                           transition-transform duration-500 ease-out
                           group-hover:scale-105 group-hover:-translate-y-2"
                style={{ transformOrigin: 'bottom right' }}
              />
              {/* Gradient so text stays readable over the cutout */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo/90 via-indigo/60 to-transparent" />
              <div className="relative z-10 max-w-[55%]">
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold/70 mb-3">Men's Collection</p>
                <h3 className="font-display text-4xl md:text-5xl text-ivory mb-4">For Him</h3>
                <p className="font-sans text-sm text-ivory/60 mb-6 leading-relaxed">
                  Chikankari tees crafted for the man who values quiet luxury and meaningful clothing.
                </p>
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold border-b border-gold/50 pb-1 group-hover:border-gold transition-colors">
                  Shop Men's →
                </span>
              </div>
            </Link>

            {/* Women's */}
            <Link href="/collections?cat=women" className="group relative overflow-hidden aspect-[4/5] bg-terracotta flex flex-col justify-end p-10">
              {/* Cutout — pops on hover */}
              <img
                src="/women_cutout.png"
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-[92%] w-auto object-contain object-bottom pointer-events-none
                           transition-transform duration-500 ease-out
                           group-hover:scale-105 group-hover:-translate-y-2"
                style={{ transformOrigin: 'bottom right' }}
              />
              {/* Gradient so text stays readable over the cutout */}
              <div className="absolute inset-0 bg-gradient-to-r from-terracotta/95 via-terracotta/65 to-transparent" />
              <div className="relative z-10 max-w-[55%]">
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-ivory/50 mb-3">Women's Collection</p>
                <h3 className="font-display text-4xl md:text-5xl text-ivory mb-4">For Her</h3>
                <p className="font-sans text-sm text-ivory/70 mb-6 leading-relaxed">
                  Midi dresses and wrap silhouettes. Modern forms, rooted in centuries of artisan tradition.
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
      <section className="py-24 md:py-32 bg-ivory">
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
                className="flex-1 bg-cream border border-sand border-r-0 px-5 py-4 text-sm font-sans text-brown placeholder-brown/30 focus:outline-none focus:border-gold transition-colors"
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
