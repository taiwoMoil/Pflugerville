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
        <linearGradient id="chatGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 102, 51, 0.08)" />
          <stop offset="100%" stopColor="rgba(255, 102, 51, 0)" />
        </linearGradient>
        <linearGradient id="chatGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(251, 146, 60, 0.12)" />
          <stop offset="100%" stopColor="rgba(251, 146, 60, 0)" />
        </linearGradient>
        <style>
          {
            `@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-18px); } }`
          }
        </style>
      </defs>
      <g opacity="0.85">
        <circle cx="180" cy="820" r="260" fill="url(#chatGrad1)" style={{ animation: 'float 12s ease-in-out infinite' }} />
        <circle cx="1220" cy="180" r="320" fill="url(#chatGrad2)" style={{ animation: 'float 18s ease-in-out infinite alternate' }} />
        <path d="M 0,360 C 360,260 720,420 1440,360" stroke="rgba(255, 102, 51, 0.08)" strokeWidth="2" fill="none" />
        <path d="M 0,540 C 360,620 720,480 1440,540" stroke="rgba(251, 146, 60, 0.08)" strokeWidth="2" fill="none" />
      </g>
    </svg>
  </div>
);

export default function ChatSection() {
  const openChat = () => {
    const chatModal = document.getElementById('chatModal');
    if (chatModal) chatModal.classList.add('active');
  };

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-white to-orange-100 overflow-hidden" id="faq">
      <AnimatedIllustration />
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Questions? Ask Our AI Assistant!
          </h2>
          <p className="text-lg md:text-xl text-accent-800 mb-8">
            Get instant answers about the Pfest offer, Moil's platform, and how to get started.
          </p>

          <button
            onClick={openChat}
            className="inline-flex items-center gap-3 bg-accent text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10">🚀</span>
            <span className="relative z-10">Launch AI Assistant</span>
            <span className="relative z-10 transform transition-transform duration-500 group-hover:translate-x-1">→</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </button>

          <p className="text-sm text-accent-800/80 mt-4">
            💡 Or click the floating rocket in the bottom right anytime!
          </p>
        </div>
      </div>
    </section>
  );
}
