'use client';

import React, { useRef, useState } from 'react';
import ContactModal from './ContactModal';
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
    name: 'First 50',
    price: '$0',
    originalPrice: 'FREE',
    features: ['Full Access to Moil for 3 months', 'Up to 3 job posts per month for 3 Months', 'Complete Market Research', 'Competitor Analysis', '1 Click Business Plan Download'],
    isPopular: true,
  },
  {
    name: '51-150',
    price: '$50',
    originalPrice: '$375 ($325 discount)',
    features: ['Up to 3 job posts per month for 3 Months', 'Complete Market Research', 'Competitor Analysis', '1 Click Business Plan Download'],
    isPopular: false,
  },
  {
    name: 'PFEST SPECIAL',
    price: '$500',
    originalPrice: '$1500 Value! Just $500 - 10 Businesses only',
    features: ['Hiring', 'Market Research', 'SEO Research Backed converting Landing Page with Conversion bot', '$500 - 1 Week turnaround'],
    isPopular: false,
    badge: 'PFEST ONLY SPECIAL',
    contactRequired: true
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
  </svg>
);

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const badgeInView = useInView(badgeRef, { once: true, margin: "-50px" });
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const descInView = useInView(descRef, { once: true, margin: "-50px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-50px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-br from-white to-orange-100 overflow-hidden" 
      id="pricing"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatedIllustration />
      <div className="relative z-10 container mx-auto px-6">
        <motion.div 
          ref={headerRef}
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            ref={badgeRef}
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-orange-200/80 px-5 py-2 rounded-full mb-6 shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={badgeInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-semibold tracking-wider uppercase text-accent-600">
              Special Pricing
            </span>
          </motion.div>
          <motion.h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Event-Only Pricing
          </motion.h2>
          <motion.p 
            ref={descRef}
            className="text-lg md:text-xl text-accent-800 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={descInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Exclusive pricing tiers for Day 3 - Growth, Capital & The Future of Innovation.<br/>
            <span className="text-sm text-gray-600 mt-2 block">4000+ people educated at no cost</span>
          </motion.p>
        </motion.div>

        <motion.div 
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={cardsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div 
              key={tier.name}
              className={`bg-white/70 backdrop-blur-lg rounded-3xl p-8 border transition-all duration-300 flex flex-col relative ${tier.isPopular ? 'shadow-2xl -translate-y-4 border-accent-300' : 'shadow-lg border-white/50 hover:shadow-xl'}`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={cardsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.7 + (index * 0.1),
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-8 -mt-4">
                  <span className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">Most Popular</span>
                </div>
              )}
              {tier.badge && (
                <div className="absolute top-0 left-8 -mt-4">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">{tier.badge}</span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.name}</h3>
              <p className={`text-5xl font-extrabold mb-2 ${tier.name === 'Enterprise' ? 'text-4xl' : ''}`}>
                <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">{tier.price}</span>
              </p>
              <p className="text-gray-500 mb-6 h-6 text-sm">{tier.originalPrice}</p>
              
              <ul className="space-y-4 mb-8 text-left grow">
                {tier.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.8 + (index * 0.1) + (featureIndex * 0.1)
                    }}
                  >
                    <CheckIcon />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {tier.contactRequired ? (
                <motion.button 
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full py-3 px-6 rounded-full font-semibold text-white transition-all duration-300 group relative overflow-hidden shadow-lg ${tier.isPopular ? 'bg-accent-gradient hover:shadow-accent' : 'bg-gray-700 hover:bg-gray-800'}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span className="relative z-10">Contact Us</span>
                </motion.button>
              ) : (
                <a href="https://employer-beta.moilapp.com?ref=pflug135EV@AJAST" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <motion.button 
                    className={`w-full py-3 px-6 rounded-full font-semibold text-white transition-all duration-300 group relative overflow-hidden shadow-lg ${tier.isPopular ? 'bg-accent-gradient hover:shadow-accent' : 'bg-gray-700 hover:bg-gray-800'}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <span className="relative z-10">Get Started</span>
                  </motion.button>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
          <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.section>
  );
}
