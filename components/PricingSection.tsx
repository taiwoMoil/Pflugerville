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
        <linearGradient id="pricingGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 102, 51, 0.07)" />
          <stop offset="100%" stopColor="rgba(255, 102, 51, 0)" />
        </linearGradient>
        <linearGradient id="pricingGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(251, 146, 60, 0.12)" />
          <stop offset="100%" stopColor="rgba(251, 146, 60, 0)" />
        </linearGradient>
        <style>
          {
            `@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }`
          }
        </style>
      </defs>
      <g opacity="0.9">
        <circle cx="150" cy="800" r="300" fill="url(#pricingGrad1)" style={{ animation: 'float 10s ease-in-out infinite alternate' }} />
        <circle cx="1250" cy="150" r="350" fill="url(#pricingGrad2)" style={{ animation: 'float 15s ease-in-out infinite' }} />
        <path d="M 0,300 C 400,200 800,400 1440,300" stroke="rgba(255, 102, 51, 0.1)" strokeWidth="2" fill="none" />
      </g>
    </svg>
  </div>
);

const pricingTiers = [
  {
    name: 'Standard',
    price: '$50',
    originalPrice: '$475',
    features: ['Full Platform Access', 'AI-Powered Market Insights', 'Competitor Analysis'],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '$150',
    originalPrice: '$1,275',
    features: ['Everything in Standard', 'Advanced AI Analytics', '1-on-1 Onboarding Session'],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    originalPrice: "Let's Talk",
    features: ['Everything in Pro', 'Dedicated Account Manager', 'Custom Integrations'],
    isPopular: false,
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
  </svg>
);

export default function PricingSection() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-white to-orange-100 overflow-hidden" id="pricing">
      <AnimatedIllustration />
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-orange-200/80 px-5 py-2 rounded-full mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-semibold tracking-wider uppercase text-accent-600">
              Special Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Event-Only Pricing
          </h2>
          <p className="text-lg md:text-xl text-accent-800 max-w-3xl mx-auto">
            Exclusive pricing tiers designed specifically for Pflugerville Venture Pfest attendees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.name}
              className={`bg-white/70 backdrop-blur-lg rounded-3xl p-8 border transition-all duration-300 flex flex-col ${tier.isPopular ? 'shadow-2xl -translate-y-4 border-accent-300' : 'shadow-lg border-white/50 hover:shadow-xl'}`}>
              {tier.isPopular && (
                <div className="absolute top-0 right-8 -mt-4">
                  <span className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">Most Popular</span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.name}</h3>
              <p className={`text-5xl font-extrabold mb-2 ${tier.name === 'Enterprise' ? 'text-4xl' : ''}`}>
                <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">{tier.price}</span>
              </p>
              <p className="text-gray-500 line-through mb-6 h-6">{tier.name !== 'Enterprise' && tier.originalPrice}</p>
              
              <ul className="space-y-4 mb-8 text-left grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-full font-semibold text-white transition-all duration-300 group relative overflow-hidden shadow-lg ${tier.isPopular ? 'bg-accent-gradient hover:shadow-accent' : 'bg-gray-700 hover:bg-gray-800'}`}>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative z-10">{tier.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
