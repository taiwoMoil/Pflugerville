'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedIllustration = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 500"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#E9E5FF" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" opacity="0.4" />

      <g className="layer-1">
        <path d="M-200 450 C 200 250, 400 250, 800 450 S 1200 650, 1600 450" stroke="#5843BD" fill="none" strokeWidth="1" opacity="0.3" />
      </g>
      <g className="layer-2">
        <path d="M-100 100 C 300 300, 500 300, 900 100 S 1300 -100, 1700 100" stroke="#5843BD" fill="none" strokeWidth="1" opacity="0.3" />
      </g>
    </svg>
  </div>
);

export default function AboutPfest() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const badgeInView = useInView(badgeRef, { once: true, margin: "-50px" });
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const descInView = useInView(descRef, { once: true, margin: "-50px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, white 0%, var(--primary-50) 100%)' }}
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatedIllustration />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            ref={badgeRef}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary-200 px-4 py-2 rounded-full mb-8 shadow-sm"
            initial={{ opacity: 0, y: -30 }}
            animate={badgeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-700 uppercase tracking-wider">
              Event Details
            </span>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            ref={titleRef}
            className="text-4xl md:text-6xl font-black mb-6 leading-tight text-navy"
            initial={{ opacity: 0, y: 50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            About The
            <br />
            <span className="text-[#5843BD]">
              Pflugerville Venture Pfest
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            ref={descRef}
            className="text-xl text-muted mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={descInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Venture Pfest is a five-day celebration of entrepreneurship with panels, 
            workshops, and networking across Pflugerville. 
            <span className="block mt-2 font-semibold text-navy">
              Join us Sept 29 – Oct 3.
            </span>
          </motion.p>

          {/* CTA Button */}
          <motion.a
            ref={ctaRef}
            href="https://pflugervillepfest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#5843BD] text-white font-bold px-8 py-4 rounded-full shadow-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform-gpu"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore the Official Pfest Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        .layer-1 {
          animation: parallax-slow 15s ease-in-out infinite alternate;
        }
        .layer-2 {
          animation: parallax-fast 15s ease-in-out infinite alternate;
        }
        .pulse {
          animation: pulse-opacity 4s ease-in-out infinite alternate;
        }

        @keyframes parallax-slow {
          from { transform: translateX(-20px); }
          to { transform: translateX(20px); }
        }

        @keyframes parallax-fast {
          from { transform: translateX(-40px); }
          to { transform: translateX(40px); }
        }

        @keyframes pulse-opacity {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </motion.section>
  );
}