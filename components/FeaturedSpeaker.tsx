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
              {/* Video */}
              <div className="flex justify-center md:justify-start transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-accent to-amber-400 rounded-full blur-lg opacity-60 animate-pulse" />
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden relative z-10 shadow-lg border-4 border-white/80">
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/Andres.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
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
                    <strong>Day 3 Session:</strong> "Blueprints for Success: AI-Powered Business Plans & SEO for Growth"<br/>
                    <span className="text-sm text-gray-600">12:00 PM – 12:35 PM + 10 min Questions</span>
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-600 mb-6">
                  A Colombian immigrant, serial entrepreneur, and business coach who has supported over 1,000 entrepreneurs. Andres is passionate about leveraging AI to create innovative solutions that foster growth and inclusivity.
                </p>

                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="https://www.facebook.com/AIbyAndres" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                  </a>
                  <a href="https://www.instagram.com/AIbyAndres" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.012.388a6.605 6.605 0 0 0-2.356 1.537A6.606 6.606 0 0 0 1.119 4.281c-.184.508-.306 1.082-.34 2.029C.748 7.258.735 7.665.735 11.286c0 3.62.013 4.027.048 4.975.034.947.156 1.521.34 2.029a6.605 6.605 0 0 0 1.537 2.356 6.605 6.605 0 0 0 2.356 1.537c.508.184 1.082.306 2.029.34.948.035 1.355.048 4.976.048 3.62 0 4.027-.013 4.975-.048.947-.034 1.521-.156 2.029-.34a6.605 6.605 0 0 0 2.356-1.537 6.605 6.605 0 0 0 1.537-2.356c.184-.508.306-1.082.34-2.029.035-.948.048-1.355.048-4.976 0-3.62-.013-4.027-.048-4.975-.034-.947-.156-1.521-.34-2.029a6.605 6.605 0 0 0-1.537-2.356A6.605 6.605 0 0 0 16.281 1.119c-.508-.184-1.082-.306-2.029-.34C13.304.748 12.897.735 12.276.735h-.259zm-.022 1.957c3.499 0 3.91.013 4.846.048.853.034 1.318.158 1.627.263.409.159.7.349 1.006.655.306.306.496.597.655 1.006.105.309.229.774.263 1.627.035.936.048 1.347.048 4.846 0 3.499-.013 3.91-.048 4.846-.034.853-.158 1.318-.263 1.627-.159.409-.349.7-.655 1.006a2.7 2.7 0 0 1-1.006.655c-.309.105-.774.229-1.627.263-.936.035-1.347.048-4.846.048-3.499 0-3.91-.013-4.846-.048-.853-.034-1.318-.158-1.627-.263a2.7 2.7 0 0 1-1.006-.655 2.7 2.7 0 0 1-.655-1.006c-.105-.309-.229-.774-.263-1.627-.035-.936-.048-1.347-.048-4.846 0-3.499.013-3.91.048-4.846.034-.853.158-1.318.263-1.627.159-.409.349-.7.655-1.006a2.7 2.7 0 0 1 1.006-.655c.309-.105.774-.229 1.627-.263.936-.035 1.347-.048 4.846-.048zm0 3.318a5.017 5.017 0 1 0 0 10.034 5.017 5.017 0 0 0 0-10.034zm0 8.276a3.259 3.259 0 1 1 0-6.518 3.259 3.259 0 0 1 0 6.518zm6.406-8.477a1.17 1.17 0 1 1-2.34 0 1.17 1.17 0 0 1 2.34 0z" clipRule="evenodd"></path></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/andres-urregom/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
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
