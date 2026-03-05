'use client';

import { useState } from 'react';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

const interests = [
  "Men's Collection",
  "Women's Collection",
  'Chikankari Embroidery',
  'Hand Block Printing',
  'Co-ord Sets',
  'Behind the Craft stories',
  'Launch day early access',
  'Artisan collaborations',
];

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function toggleInterest(item: string) {
    setSelected(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) { setError('Please fill in your name and email.'); return; }
    setSubmitted(true);
  }

  return (
    <>
      <Nav />

      <div className="min-h-screen pt-20 bg-ivory flex flex-col">
        <div className="flex-1 grid md:grid-cols-2">

          {/* Left — brand panel */}
          <div className="hidden md:flex flex-col justify-between bg-indigo p-12 lg:p-20 relative overflow-hidden">
            {/* Pattern */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 8 C36 20 28 26 12 30 C28 32 34 42 34 56 C38 42 48 36 66 32 C50 30 44 22 40 8Z' fill='none' stroke='%23C9A84C' stroke-width='0.8'/%3E%3Ccircle cx='40' cy='40' r='6' fill='none' stroke='%23C9A84C' stroke-width='0.8'/%3E%3C/g%3E")`,
                backgroundSize: '80px 80px',
              }}
            />

            <div className="relative z-10">
              <div className="font-display text-2xl text-ivory tracking-[0.1em] uppercase mb-2">
                House of Reyana
              </div>
              <div className="font-serif italic text-gold text-base">
                A love letter to our roots
              </div>
            </div>

            <div className="relative z-10">
              <div className="text-gold text-5xl font-serif mb-6 opacity-40">"</div>
              <p className="font-serif italic text-2xl text-ivory leading-relaxed mb-8">
                Wear something that carries meaning.
                Something made with patience,
                precision, and pride.
              </p>
              <div className="ornament max-w-[160px] mb-8">
                <span className="text-gold text-sm">✦</span>
              </div>
              <div className="space-y-4">
                {[
                  { icon: '◈', text: 'Early access to our launch collection' },
                  { icon: '❀', text: 'Behind-the-craft stories from our artisans' },
                  { icon: '◉', text: 'Pre-order priority — before the public' },
                ].map(item => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-gold text-lg mt-0.5 shrink-0">{item.icon}</span>
                    <span className="font-sans text-sm text-ivory/70">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <p className="font-sans text-xs text-ivory/30 tracking-wide">
                Joining 1,200+ founding members from 18 countries
              </p>
            </div>
          </div>

          {/* Right — form panel */}
          <div className="flex flex-col justify-center px-8 md:px-12 lg:px-20 py-16">
            {submitted ? (
              <div className="text-center max-w-sm mx-auto">
                <div className="text-gold text-5xl mb-6">✦</div>
                <h2 className="font-display text-3xl text-indigo mb-3">
                  Welcome, {name.split(' ')[0]}.
                </h2>
                <p className="font-serif italic text-gold text-xl mb-6">
                  You're part of something beautiful.
                </p>
                <p className="font-sans text-sm text-brown/60 leading-relaxed mb-8">
                  We've added you to our founding list. You'll be the first to know when
                  pre-orders open, and we'll share stories from our artisans along the way.
                </p>
                <Link href="/collections" className="btn-primary w-full text-xs">
                  Explore Collections
                </Link>
              </div>
            ) : (
              <div className="max-w-sm mx-auto w-full">
                <p className="section-label mb-4">Join the List</p>
                <h2 className="font-display text-3xl md:text-4xl text-indigo mb-2">
                  Be first to know.
                </h2>
                <p className="font-sans text-sm text-brown/50 mb-10 leading-relaxed">
                  Join our founding community for early access and artisan stories.
                </p>

                <form onSubmit={handleSubmit} className="space-y-7">
                  <div>
                    <label className="text-[11px] font-sans tracking-[0.2em] uppercase text-brown/50 block mb-2">
                      Your Name
                    </label>
                    <input
                      className="field"
                      placeholder="First & last name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-sans tracking-[0.2em] uppercase text-brown/50 block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="field"
                      placeholder="you@example.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-sans tracking-[0.2em] uppercase text-brown/50 block mb-4">
                      I'm interested in (optional)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map(item => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleInterest(item)}
                          className={`px-3 py-1.5 text-[11px] font-sans tracking-wide border transition-all duration-200 ${
                            selected.includes(item)
                              ? 'bg-indigo text-ivory border-indigo'
                              : 'bg-transparent text-brown/60 border-sand hover:border-indigo/40'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {error && <p className="text-xs text-terracotta font-sans">{error}</p>}

                  <button type="submit" className="btn-primary w-full">
                    Join the Founding List
                  </button>

                  <p className="font-sans text-[11px] text-brown/30 text-center leading-relaxed">
                    No spam, ever. We respect your inbox as much as we respect our craft.
                    Unsubscribe at any time.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
