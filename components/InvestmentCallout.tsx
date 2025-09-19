'use client';

import React from 'react';

const AnimatedIllustration = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 1024"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="investGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(88, 67, 189, 0.1)" />
          <stop offset="100%" stopColor="rgba(88, 67, 189, 0)" />
        </linearGradient>
        <linearGradient id="investGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(129, 114, 211, 0.15)" />
          <stop offset="100%" stopColor="rgba(129, 114, 211, 0)" />
        </linearGradient>
        <style>
          {
            `@keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-30px) rotate(10deg); } }`
          }
        </style>
      </defs>
      <g opacity="0.8">
        <rect x="100" y="800" width="200" height="200" rx="30" fill="url(#investGrad1)" style={{ animation: 'float 12s ease-in-out infinite' }} />
        <circle cx="1300" cy="200" r="250" fill="url(#investGrad2)" style={{ animation: 'float 16s ease-in-out infinite alternate' }} />
        <path d="M -100,200 Q 400,100 800,300 T 1600,200" stroke="rgba(88, 67, 189, 0.1)" strokeWidth="3" fill="none" />
      </g>
    </svg>
  </div>
);

export default function InvestmentCallout() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-white to-primary-100 overflow-hidden">
      <AnimatedIllustration />
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-8">
            <div className="inline-block relative">
              <div className="text-7xl md:text-8xl lg:text-9xl font-black text-primary-500 mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                $66,250+
              </div>
              <div className="absolute inset-0 bg-primary-200 rounded-full blur-3xl opacity-40 -z-10" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Moil's Investment in <span className="text-primary">Pflugerville</span>
          </h2>

          <p className="text-lg md:text-xl text-primary-800 max-w-3xl mx-auto mb-10">
            We're not just sponsoring, we're investing. Moil is proud to commit over $66,250 in software value to empower Pflugerville entrepreneurs.
          </p>

          <div>
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 bg-primary-gradient text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 group relative overflow-hidden transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative z-10">🎁</span>
              <span className="relative z-10">Claim Your Pfest Discount</span>
              <div className="relative z-10 transform transition-transform duration-500 group-hover:translate-x-1">
                →
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
