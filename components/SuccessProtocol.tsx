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
        <linearGradient id="protoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(88, 67, 189, 0.05)" />
          <stop offset="100%" stopColor="rgba(88, 67, 189, 0)" />
        </linearGradient>
        <linearGradient id="protoGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(129, 114, 211, 0.1)" />
          <stop offset="100%" stopColor="rgba(129, 114, 211, 0)" />
        </linearGradient>
        <style>
          {
            `@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25px); } }`
          }
          {
            `@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }`
          }
        </style>
      </defs>
      <g opacity="0.7">
        <rect x="100" y="100" width="150" height="150" rx="20" fill="url(#protoGrad1)" style={{ animation: 'float 10s ease-in-out infinite' }} />
        <circle cx="1250" cy="850" r="200" fill="url(#protoGrad2)" style={{ animation: 'float 14s ease-in-out infinite alternate' }} />
        <path d="M 50,800 L 450,400 L 850,700 L 1250,300" stroke="rgba(88, 67, 189, 0.1)" strokeWidth="3" fill="none" strokeDasharray="10 10" />
        <path d="M 200,900 L 600,500 L 1000,800 L 1400,400" stroke="rgba(129, 114, 211, 0.08)" strokeWidth="2" fill="none" />
      </g>
    </svg>
  </div>
);

const steps = [
  { title: 'Business Profile Setup', time: '5 minutes', icon: '✓' },
  { title: 'Market Analysis', time: '10 minutes', icon: '✓' },
  { title: 'Competitor Insights', time: '5 minutes', icon: '✓' },
  { title: 'Customer Personas', time: '5 minutes', icon: '✓' },
];

export default function SuccessProtocol() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-white to-primary-100 overflow-hidden" id="protocol">
      <AnimatedIllustration />
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Your Guaranteed Success Protocol
          </h2>
          <p className="text-lg md:text-xl text-primary-700 mb-8 max-w-3xl mx-auto">
            <strong>For $50 Pfest Pricing:</strong> Complete your business profile and first market insights session within <strong>24 hours</strong> of account creation to secure your $425 discount.
          </p>

          <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-12 border border-white/70 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-primary-900 mb-2">Why 24 Hours?</h3>
            <p className="text-gray-700 leading-relaxed">
              Our data shows that entrepreneurs who complete their setup within the first day have a <strong>94% higher success rate</strong> and see actionable insights immediately. This isn't just a discount condition—it's our proven method for ensuring you get maximum value from day one.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-8">What You'll Complete in Under 25 Minutes:</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/60 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.icon}
                </div>
                <h4 className="font-bold text-primary-900 mb-1">{step.title}</h4>
                <p className="text-sm text-primary-700 font-medium">{step.time}</p>
              </div>
            ))}
          </div>

          <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Can't complete in 24 hours? No problem—you'll still have access to all features, just at regular pricing. We believe our platform is worth every penny, but we want to reward entrepreneurs who dive in immediately.
          </p>
        </div>
      </div>
    </section>
  );
}
