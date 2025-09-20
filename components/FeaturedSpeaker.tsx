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
        <linearGradient id="speakerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 102, 51, 0.05)" />
          <stop offset="100%" stopColor="rgba(255, 102, 51, 0)" />
        </linearGradient>
        <linearGradient id="speakerGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(251, 146, 60, 0.1)" />
          <stop offset="100%" stopColor="rgba(251, 146, 60, 0)" />
        </linearGradient>
        <style>
          {
            `@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }`
          }
        </style>
      </defs>
      <g opacity="0.8">
        <circle cx="100" cy="100" r="250" fill="url(#speakerGrad1)" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <circle cx="1300" cy="900" r="350" fill="url(#speakerGrad2)" style={{ animation: 'float 12s ease-in-out infinite alternate' }} />
        <path d="M -100,500 Q 400,400 800,600 T 1600,500" stroke="rgba(251, 146, 60, 0.1)" strokeWidth="2" fill="none" />
        <path d="M -100,700 Q 500,800 900,600 T 1700,700" stroke="rgba(255, 102, 51, 0.08)" strokeWidth="2" fill="none" />
      </g>
    </svg>
  </div>
);

export default function FeaturedSpeaker() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const cardInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-br from-white to-orange-100 overflow-hidden" 
      id="speaker"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatedIllustration />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div 
            ref={headerRef}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-orange-200/80 px-5 py-2 rounded-full mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold tracking-wider uppercase text-accent-600">
                Keynote Speaker
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
              Featured{' '}
              <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">
                Speaker
              </span>
            </h2>
          </motion.div>

          {/* Speaker Card */}
          <motion.div 
            ref={cardRef}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 transition-all duration-300 hover:shadow-2xl hover:border-white"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            whileHover={{ 
              y: -8,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
            }}
          >
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
              {/* Avatar */}
              <div className="flex justify-center md:justify-start transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-accent to-amber-400 rounded-full blur-lg opacity-60 animate-pulse" />
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center text-white text-5xl font-bold relative z-10 bg-gradient-to-br from-accent-500 to-amber-600 shadow-lg border-4 border-white/80">
                    AU
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-2 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-1 text-gray-900">
                  Andres F. Urrego
                </h3>
                <p className="text-lg font-bold mb-4 text-accent-600">
                  Founder & CEO, Moil
                </p>
                
                <div className="bg-orange-50/50 rounded-2xl p-4 mb-6 border border-orange-100/80">
                  <p className="font-semibold text-gray-700">
                    <strong>Session:</strong> "AI-Powered Growth: Building Tools That Bridge Gaps and Expand Opportunity"
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-600 mb-6">
                  A Colombian immigrant, serial entrepreneur, and business coach who has supported over 1,000 entrepreneurs. Andres is passionate about leveraging AI to create innovative solutions that foster growth and inclusivity.
                </p>

                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.388 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.47 1.344h2.94v8.59H3.535v-8.59z" clipRule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
