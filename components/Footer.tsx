import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FooterIllustration = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="footerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(88, 67, 189, 0.08)" />
          <stop offset="100%" stopColor="rgba(88, 67, 189, 0)" />
        </linearGradient>
        <linearGradient id="footerGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 102, 51, 0.08)" />
          <stop offset="100%" stopColor="rgba(255, 102, 51, 0)" />
        </linearGradient>
      </defs>
      <g opacity="0.9">
        <circle cx="200" cy="500" r="260" fill="url(#footerGrad1)" />
        <circle cx="1240" cy="100" r="300" fill="url(#footerGrad2)" />
        <path d="M 0,400 C 360,340 720,440 1440,380" stroke="rgba(88, 67, 189, 0.08)" strokeWidth="2" fill="none" />
      </g>
    </svg>
  </div>
);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const footerInView = useInView(footerRef, { once: true, margin: "-100px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-50px" });

  return (
    <motion.footer 
      ref={footerRef}
      className="relative overflow-hidden bg-gradient-to-br from-white to-primary-100"
      initial={{ opacity: 0 }}
      animate={footerInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <FooterIllustration />
      <motion.div 
        ref={contentRef}
        className="relative z-10 container mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand Partnership */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-white/60 text-sm font-semibold text-primary-800">
                MOIL BUSINESS INSIGHTS
              </div>
              <span className="text-accent text-xl">×</span>
              <div className="px-3 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-white/60 text-sm font-semibold text-primary-800">
                PFLUGERVILLE VENTURE PFEST
              </div>
            </div>
            <p className="text-primary-800/80">© 2025 Moil. All rights reserved.</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-primary-900 mb-3">Contact</h4>
            <p className="text-primary-800/80">
              Email: <a href="mailto:hello@moilapp.com" className="text-accent hover:underline">hello@moilapp.com</a>
            </p>
            <p className="text-primary-800/80">
              Support: <a href="tel:+1-512-555-0123" className="text-accent hover:underline">+1 (512) 555-0123</a>
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold text-primary-900 mb-3">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm border border-white/60 flex items-center justify-center text-primary-700 hover:text-accent transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm border border-white/60 flex items-center justify-center text-primary-700 hover:text-accent transition-colors" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm border border-white/60 flex items-center justify-center text-primary-700 hover:text-accent transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm border border-white/60 flex items-center justify-center text-primary-700 hover:text-accent transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/60 text-center">
          <p className="text-primary-800/80 flex flex-wrap justify-center gap-6">
            <a href="#" className="text-accent hover:underline">Privacy Policy</a>
            <a href="#" className="text-accent hover:underline">Terms of Service</a>
            <a href="#" className="text-accent hover:underline">Contact Support</a>
          </p>
        </div>
      </motion.div>
    </motion.footer>
  );
}
