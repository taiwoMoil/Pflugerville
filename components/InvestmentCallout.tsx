'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
  const sectionRef = useRef<HTMLElement>(null);
  const amountRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const amountInView = useInView(amountRef, { once: true, margin: "-50px" });
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const descInView = useInView(descRef, { once: true, margin: "-50px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-br from-white to-primary-100 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatedIllustration />
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div 
            ref={amountRef}
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={amountInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 50 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            <div className="inline-block relative">
              <div className="text-7xl md:text-8xl lg:text-9xl font-black text-primary-500 mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                $50,000+
              </div>
              <div className="absolute inset-0 bg-primary-200 rounded-full blur-3xl opacity-40 -z-10" />
            </div>
          </motion.div>

          <motion.h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Moil's Investment in <span className="text-primary">Pflugerville</span>
          </motion.h2>

          <motion.p 
            ref={descRef}
            className="text-lg md:text-xl text-primary-800 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={descInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We're not just sponsoring, we're investing. Moil is proud to commit over $50,000 in software value to empower Pflugerville entrepreneurs.
          </motion.p>

          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={ctaInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            <motion.a
              href="#pricing"
              className="inline-flex items-center gap-3 bg-primary-gradient text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 group relative overflow-hidden transform hover:-translate-y-1"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative z-10">🎁</span>
              <span className="relative z-10">Claim Your Pfest Discount</span>
              <div className="relative z-10 transform transition-transform duration-500 group-hover:translate-x-1">
                →
              </div>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
