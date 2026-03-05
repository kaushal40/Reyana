'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PreOrderModal } from '@/components/PreOrderModal';
import { products, type Product } from '@/data/products';

type Filter = 'all' | 'men' | 'women';

function CollectionsContent() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState<Filter>('all');
  const [picked, setPicked] = useState<Product | null>(null);

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat === 'men' || cat === 'women') setFilter(cat);
  }, [searchParams]);

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <>
      <Nav />

      {/* Page header */}
      <section className="pt-32 md:pt-40 pb-16 bg-cream relative overflow-hidden border-motif">
        {/* Decorative background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 C36 22 28 28 14 32 C28 34 34 42 34 58 C38 44 46 38 62 36 C48 34 44 26 40 10Z' fill='none' stroke='%23C9A84C' stroke-width='0.7'/%3E%3Ccircle cx='40' cy='40' r='5' fill='none' stroke='%23C9A84C' stroke-width='0.7'/%3E%3C/g%3E")`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="section-label mb-4">Inaugural Collection</p>
          <h1 className="font-display text-5xl md:text-6xl text-indigo mb-6">
            All Pieces
          </h1>
          <p className="font-serif italic text-xl text-brown/60 max-w-lg mx-auto">
            Each piece is a pre-order. Each piece is made by hand, only for you.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-ivory sticky top-[64px] md:top-[80px] z-30 border-b border-sand">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-0">
            {(['all', 'men', 'women'] as Filter[]).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-8 py-4 text-xs font-sans tracking-[0.2em] uppercase transition-all duration-200 border-b-2 ${
                  filter === f
                    ? 'border-terracotta text-terracotta'
                    : 'border-transparent text-brown/40 hover:text-brown'
                }`}
              >
                {f === 'all' ? 'All' : f === 'men' ? "Men's" : "Women's"}
                <span className="ml-2 text-[10px] opacity-50">
                  ({f === 'all' ? products.length : products.filter(p => p.category === f).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
            {filtered.map(product => (
              <article key={product.id} className="product-card group">
                {/* Fabric art */}
                <div
                  className={`${product.fabricClass} fabric-art aspect-[3/4] relative overflow-hidden cursor-pointer`}
                  onClick={() => setPicked(product)}
                >
                  {product.tag && (
                    <span className="absolute top-3 left-3 z-10 text-[10px] font-sans tracking-[0.15em] uppercase bg-ivory/90 text-brown px-2.5 py-1">
                      {product.tag}
                    </span>
                  )}
                  <span className={`absolute top-3 right-3 z-10 text-[10px] font-sans tracking-[0.15em] uppercase px-2 py-1 ${
                    product.category === 'men' ? 'bg-indigo/80 text-ivory' : 'bg-terracotta/80 text-ivory'
                  }`}>
                    {product.category === 'men' ? 'Men' : 'Women'}
                  </span>
                  {/* Hover overlay */}
                  <div className="overlay absolute inset-0 bg-indigo/70 flex items-center justify-center">
                    <span className="font-sans text-xs tracking-[0.2em] uppercase text-white border border-white/60 px-5 py-2.5">
                      Pre-Order
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/20 to-transparent">
                    <p className={`font-sans text-[10px] tracking-widest uppercase ${product.labelColor} opacity-60`}>
                      {product.origin}
                    </p>
                  </div>
                </div>

                {/* Product details */}
                <div className="pt-4">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-brown/40 mb-1">{product.subtitle}</p>
                  <h3
                    className="font-display text-lg text-indigo mb-1 cursor-pointer hover:text-terracotta transition-colors"
                    onClick={() => setPicked(product)}
                  >
                    {product.name}
                  </h3>
                  <p className="font-sans text-xs text-brown/50 mb-2 leading-snug">{product.fabric}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg text-terracotta">${product.price}</span>
                    <button
                      onClick={() => setPicked(product)}
                      className="font-sans text-[11px] tracking-[0.15em] uppercase text-brown/40 hover:text-terracotta transition-colors border-b border-current pb-px"
                    >
                      Pre-Order
                    </button>
                  </div>
                  <p className="font-sans text-[11px] text-brown/30 mt-1">{product.deliveryEstimate}</p>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-sans text-sm text-brown/40">No pieces found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Craft note */}
      <section className="py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="ornament max-w-xs mx-auto mb-8">
            <span className="text-gold text-sm">✦</span>
          </div>
          <p className="font-serif italic text-xl text-brown/60 leading-relaxed">
            Every piece in this collection is a pre-order. We make nothing in advance.
            Your garment is crafted specifically for you, by the artisan family whose name
            is attached to the craft.
          </p>
        </div>
      </section>

      <Footer />

      {picked && <PreOrderModal product={picked} onClose={() => setPicked(null)} />}
    </>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense>
      <CollectionsContent />
    </Suspense>
  );
}
