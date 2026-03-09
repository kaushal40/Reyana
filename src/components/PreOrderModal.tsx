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
  const [activeImg, setActiveImg] = useState(0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!size) { setError('Please select a size.'); return; }
    if (!name.trim() || !email.trim()) { setError('Please fill in all fields.'); return; }
    setSubmitted(true);
  }

  return (
    /* Backdrop — tap anywhere outside to close */
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-brown/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal panel — stop click propagation so tapping inside doesn't close */}
      <div
        className="bg-ivory w-full sm:max-w-2xl sm:mx-4 max-h-[95vh] overflow-y-auto relative
                   rounded-t-2xl sm:rounded-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Top accent strip */}
        <div className="h-1 bg-gradient-to-r from-terracotta via-gold to-indigo rounded-t-2xl sm:rounded-t-2xl" />

        {/* Mobile drag handle + Close bar */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          {/* Drag indicator (decorative) */}
          <div className="w-10 h-1 bg-sand rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-3" />
          {/* Spacer */}
          <div />
          {/* Close button — large tap target */}
          <button
            onClick={onClose}
            className="ml-auto flex items-center justify-center w-10 h-10 rounded-full bg-sand/60 hover:bg-sand text-brown/60 hover:text-brown text-xl transition-all duration-200"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Product images */}
        {product.images && product.images.length > 0 && (
          <div className="flex gap-1 px-1">
            {/* Main image — full portrait, object-contain so nothing is cropped */}
            <div className="relative flex-1 bg-cream overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="w-full h-full object-contain transition-opacity duration-300"
              />
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex flex-col gap-1 w-16 sm:w-20">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative overflow-hidden border-2 transition-all duration-200 ${
                      activeImg === i ? 'border-gold' : 'border-transparent opacity-50 hover:opacity-90'
                    }`}
                    style={{ aspectRatio: '3/4' }}
                  >
                    <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-contain bg-cream" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="px-5 sm:px-8 py-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✦</div>
              <h3 className="font-display text-2xl text-indigo mb-3">You're on the list.</h3>
              <p className="font-serif italic text-gold text-lg mb-6">"Good things take time."</p>
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
              <div className="mb-6 pb-5 border-b border-sand">
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

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Size */}
                <div>
                  <p className="text-xs font-sans tracking-[0.15em] uppercase text-brown/70 mb-3">Select Size</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSize(s)}
                        className={`w-12 h-11 text-xs font-sans font-medium tracking-wider border transition-all duration-200 ${
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

                <input
                  className="field"
                  placeholder="Your full name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <input
                  type="email"
                  className="field"
                  placeholder="Email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />

                {error && <p className="text-xs text-terracotta font-sans">{error}</p>}

                <p className="text-xs font-sans text-brown/40 leading-relaxed">
                  No payment required today. We'll contact you with payment details before your piece enters production.
                </p>

                <button type="submit" className="btn-primary w-full py-4">
                  Reserve My Piece
                </button>

                {/* Extra bottom padding for mobile safe area */}
                <div className="h-4 sm:h-0" />
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
