'use client';

import { useState } from 'react';
import type { Product } from '@/data/products';

interface Props {
  product: Product;
  onClose: () => void;
}

export function PreOrderModal({ product, onClose }: Props) {
  const [size, setSize] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!size) { setError('Please select a size.'); return; }
    if (!name.trim() || !email.trim()) { setError('Please fill in all fields.'); return; }
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brown/60 backdrop-blur-sm">
      <div className="bg-ivory w-full max-w-lg max-h-[92vh] overflow-y-auto relative">

        {/* Top accent strip */}
        <div className="h-1 bg-gradient-to-r from-terracotta via-gold to-sage" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-brown/40 hover:text-brown text-2xl leading-none transition-colors"
        >
          ×
        </button>

        <div className="px-8 py-10">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✦</div>
              <h3 className="font-display text-2xl text-indigo mb-3">You're on the list.</h3>
              <p className="font-serif italic text-gold text-lg mb-6">
                "Good things take time."
              </p>
              <p className="font-sans text-sm text-brown/70 leading-relaxed mb-2">
                We've reserved <strong>{product.name}</strong> in size <strong>{size}</strong> for{' '}
                <strong>{name}</strong>.
              </p>
              <p className="font-sans text-xs text-brown/50 mb-8">
                Confirmation sent to <span className="text-indigo">{email}</span>.{' '}
                {product.deliveryEstimate}.
              </p>
              <button onClick={onClose} className="btn-primary text-xs px-10">
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Product info */}
              <div className="mb-8 pb-6 border-b border-sand">
                <p className="section-label mb-2">Pre-Order</p>
                <h3 className="font-display text-2xl text-indigo mb-1">{product.name}</h3>
                <p className="font-sans text-sm text-brown/60 mb-3">{product.subtitle}</p>
                <div className="flex items-center gap-4">
                  <span className="font-display text-xl text-terracotta">${product.price}</span>
                  <span className="text-xs text-brown/40 font-sans">·</span>
                  <span className="text-xs font-sans text-brown/50">{product.deliveryEstimate}</span>
                </div>
                <p className="font-sans text-xs text-brown/50 mt-1">{product.fabric} — {product.craft}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Size */}
                <div>
                  <p className="text-xs font-sans tracking-[0.15em] uppercase text-brown/70 mb-3">Select Size</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSize(s)}
                        className={`w-12 h-10 text-xs font-sans font-medium tracking-wider border transition-all duration-200 ${
                          size === s
                            ? 'bg-indigo text-ivory border-indigo'
                            : 'bg-transparent text-brown border-sand hover:border-indigo'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <input
                    className="field"
                    placeholder="Your full name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    className="field"
                    placeholder="Email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>

                {error && <p className="text-xs text-terracotta font-sans">{error}</p>}

                <p className="text-xs font-sans text-brown/40 leading-relaxed">
                  No payment required today. We'll contact you with payment details before your piece enters production.
                </p>

                <button type="submit" className="btn-primary w-full">
                  Reserve My Piece
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
