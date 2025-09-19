'use client';

import React from 'react';

// Sophisticated Custom SVG Icon Components
const IconBookOpen = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--accent-100)" />
        <stop offset="100%" stopColor="var(--accent-200)" />
      </linearGradient>
    </defs>
    <path d="M3 4C3 3.44772 3.44772 3 4 3H11C11.5523 3 12 3.44772 12 4V20C12 20.5523 11.5523 21 11 21H4C3.44772 21 3 20.5523 3 20V4Z" fill="url(#bookGrad)" stroke="var(--accent)" strokeWidth="1.2"/>
    <path d="M21 4C21 3.44772 20.5523 3 20 3H13C12.4477 3 12 3.44772 12 4V20C12 20.5523 12.4477 21 13 21H20C20.5523 21 21 20.5523 21 20V4Z" fill="var(--accent-50)" stroke="var(--accent)" strokeWidth="1.2"/>
    <path d="M6 7H9M6 10H9M6 13H9" stroke="var(--accent-600)" strokeWidth="0.8" strokeLinecap="round"/>
    <path d="M15 7H18M15 10H18M15 13H18" stroke="var(--accent-500)" strokeWidth="0.8" strokeLinecap="round"/>
    <circle cx="12" cy="2" r="1" fill="var(--accent)" opacity="0.6"/>
  </svg>
);

const IconTarget = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="targetGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--primary-50)" />
        <stop offset="100%" stopColor="var(--primary-100)" />
      </radialGradient>
    </defs>
    <circle cx="12" cy="12" r="9" fill="url(#targetGrad)" stroke="var(--primary-200)" strokeWidth="1.2" opacity="0.8"/>
    <circle cx="12" cy="12" r="6" fill="var(--primary-100)" stroke="var(--primary)" strokeWidth="1.5" opacity="0.9"/>
    <circle cx="12" cy="12" r="3" fill="var(--primary-200)" stroke="var(--primary)" strokeWidth="1.2"/>
    <circle cx="12" cy="12" r="1" fill="var(--primary)"/>
    <path d="M12 3V5M12 19V21M3 12H5M19 12H21" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
  </svg>
);

const IconLanguages = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--accent-50)" />
        <stop offset="100%" stopColor="var(--accent-100)" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="8.5" fill="url(#globeGrad)" stroke="var(--accent)" strokeWidth="1.2"/>
    <ellipse cx="12" cy="12" rx="3.5" ry="8.5" fill="none" stroke="var(--accent)" strokeWidth="1.2" opacity="0.8"/>
    <path d="M4 12H20" stroke="var(--accent)" strokeWidth="1.2"/>
    <path d="M7 8C8.5 8.8 10.2 9.2 12 9.2S15.5 8.8 17 8" stroke="var(--accent-500)" strokeWidth="1" strokeLinecap="round" opacity="0.9"/>
    <path d="M7 16C8.5 15.2 10.2 14.8 12 14.8S15.5 15.2 17 16" stroke="var(--accent-500)" strokeWidth="1" strokeLinecap="round" opacity="0.9"/>
    <circle cx="12" cy="6" r="0.8" fill="var(--accent)" opacity="0.6"/>
    <circle cx="12" cy="18" r="0.8" fill="var(--accent)" opacity="0.6"/>
  </svg>
);

const IconFileText = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--accent-50)" />
        <stop offset="100%" stopColor="var(--accent-100)" />
      </linearGradient>
    </defs>
    <path d="M14.5 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V7.5L14.5 2Z" fill="url(#docGrad)" stroke="var(--accent)" strokeWidth="1.2"/>
    <path d="M14.5 2V7.5H20" fill="var(--accent-200)" stroke="var(--accent)" strokeWidth="1.2" strokeLinejoin="round"/>
    <path d="M7 11H17M7 14H17M7 17H13" stroke="var(--accent-600)" strokeWidth="0.9" strokeLinecap="round"/>
    <circle cx="17" cy="8" r="1" fill="var(--accent)" opacity="0.5"/>
  </svg>
);

const IconBriefcase = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="briefGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--accent-100)" />
        <stop offset="100%" stopColor="var(--accent-200)" />
      </linearGradient>
    </defs>
    <rect x="3" y="8" width="18" height="11" rx="2.5" fill="url(#briefGrad)" stroke="var(--accent)" strokeWidth="1.2"/>
    <rect x="8.5" y="4.5" width="7" height="3.5" rx="1" fill="var(--accent-50)" stroke="var(--accent)" strokeWidth="1.1"/>
    <rect x="10" y="12" width="4" height="1.5" rx="0.75" fill="var(--accent-300)"/>
    <path d="M3 13H7M17 13H21" stroke="var(--accent-400)" strokeWidth="0.8" strokeLinecap="round" opacity="0.7"/>
    <circle cx="12" cy="6" r="0.7" fill="var(--accent)" opacity="0.6"/>
  </svg>
);

const IconBrainCircuit = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="brainGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--accent-50)" />
        <stop offset="100%" stopColor="var(--accent-100)" />
      </radialGradient>
    </defs>
    <ellipse cx="12" cy="12" rx="7" ry="8" fill="url(#brainGrad)" stroke="var(--accent)" strokeWidth="1.2"/>
    <circle cx="12" cy="12" r="2.5" fill="var(--accent-200)" stroke="var(--accent)" strokeWidth="1.1"/>
    <path d="M12 9.5V7M12 14.5V17" stroke="var(--accent-500)" strokeWidth="1" strokeLinecap="round"/>
    <path d="M14.5 12H17M9.5 12H7" stroke="var(--accent-500)" strokeWidth="1" strokeLinecap="round"/>
    <circle cx="12" cy="7" r="0.8" fill="var(--accent)" opacity="0.8"/>
    <circle cx="12" cy="17" r="0.8" fill="var(--accent)" opacity="0.8"/>
    <circle cx="17" cy="12" r="0.8" fill="var(--accent)" opacity="0.8"/>
    <circle cx="7" cy="12" r="0.8" fill="var(--accent)" opacity="0.8"/>
  </svg>
);

const IconQuote = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="quoteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--primary-100)" />
        <stop offset="100%" stopColor="var(--primary-200)" />
      </linearGradient>
    </defs>
    <path d="M3 8C3 6.89543 3.89543 6 5 6H8C9.10457 6 10 6.89543 10 8V14C10 15.1046 9.10457 16 8 16H5C3.89543 16 3 15.1046 3 14V8Z" fill="url(#quoteGrad)" stroke="var(--primary)" strokeWidth="1.2"/>
    <path d="M14 8C14 6.89543 14.8954 6 16 6H19C20.1046 6 21 6.89543 21 8V14C21 15.1046 20.1046 16 19 16H16C14.8954 16 14 15.1046 14 14V8Z" fill="var(--primary-50)" stroke="var(--primary)" strokeWidth="1.2"/>
    <path d="M6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10Z" fill="var(--primary-400)"/>
    <path d="M17 10C17 9.44772 17.4477 9 18 9C18.5523 9 19 9.44772 19 10C19 10.5523 18.5523 11 18 11C17.4477 11 17 10.5523 17 10Z" fill="var(--primary-300)"/>
  </svg>
);

const IconBuilding2 = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--primary-50)" />
        <stop offset="100%" stopColor="var(--primary-100)" />
      </linearGradient>
    </defs>
    <rect x="7" y="3" width="10" height="19" rx="1.5" fill="url(#buildingGrad)" stroke="var(--primary)" strokeWidth="1.2"/>
    <rect x="2" y="9" width="5" height="13" rx="1" fill="var(--primary-100)" stroke="var(--primary-300)" strokeWidth="1" opacity="0.9"/>
    <rect x="17" y="9" width="5" height="13" rx="1" fill="var(--primary-100)" stroke="var(--primary-300)" strokeWidth="1" opacity="0.9"/>
    <rect x="9" y="7" width="1.5" height="1.5" rx="0.3" fill="var(--primary-400)"/>
    <rect x="13.5" y="7" width="1.5" height="1.5" rx="0.3" fill="var(--primary-400)"/>
    <rect x="9" y="11" width="1.5" height="1.5" rx="0.3" fill="var(--primary-400)"/>
    <rect x="13.5" y="11" width="1.5" height="1.5" rx="0.3" fill="var(--primary-400)"/>
    <rect x="9" y="15" width="1.5" height="1.5" rx="0.3" fill="var(--primary-400)"/>
    <rect x="13.5" y="15" width="1.5" height="1.5" rx="0.3" fill="var(--primary-400)"/>
    <rect x="10.5" y="18" width="3" height="4" rx="0.5" fill="var(--primary-300)"/>
  </svg>
);

const IconUsers = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="userGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--primary-100)" />
        <stop offset="100%" stopColor="var(--primary-200)" />
      </radialGradient>
    </defs>
    <circle cx="8" cy="7" r="2.5" fill="url(#userGrad)" stroke="var(--primary)" strokeWidth="1.2"/>
    <circle cx="16" cy="7" r="2.5" fill="var(--primary-50)" stroke="var(--primary-300)" strokeWidth="1.2" opacity="0.9"/>
    <path d="M2 20V18.5C2 16.567 3.567 15 5.5 15H10.5C12.433 15 14 16.567 14 18.5V20" fill="var(--primary-100)" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M14 20V18.5C14 17.119 15.119 16 16.5 16H19.5C20.881 16 22 17.119 22 18.5V20" fill="var(--primary-50)" stroke="var(--primary-300)" strokeWidth="1.2" strokeLinecap="round" opacity="0.9"/>
  </svg>
);

const IconPresentation = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--primary-50)" />
        <stop offset="100%" stopColor="var(--primary-100)" />
      </linearGradient>
    </defs>
    <rect x="3" y="4" width="18" height="11" rx="2" fill="url(#screenGrad)" stroke="var(--primary)" strokeWidth="1.2"/>
    <path d="M12 15L9 19H15L12 15Z" fill="var(--primary-200)" stroke="var(--primary)" strokeWidth="1.1" strokeLinejoin="round"/>
    <path d="M12 19V21" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M8 8L12 11L16 8" stroke="var(--primary-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7" cy="9" r="0.7" fill="var(--primary-400)" opacity="0.8"/>
    <circle cx="17" cy="9" r="0.7" fill="var(--primary-400)" opacity="0.8"/>
  </svg>
);

const IconGraduationCap = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--primary-100)" />
        <stop offset="100%" stopColor="var(--primary-200)" />
      </linearGradient>
    </defs>
    <path d="M2 10L12 5.5L22 10L12 14.5L2 10Z" fill="url(#capGrad)" stroke="var(--primary)" strokeWidth="1.2" strokeLinejoin="round"/>
    <path d="M6 12V16.5C6 18.157 8.686 19.5 12 19.5C15.314 19.5 18 18.157 18 16.5V12" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M21 10V15" stroke="var(--primary-400)" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
    <circle cx="21" cy="15" r="0.8" fill="var(--primary)" opacity="0.8"/>
    <circle cx="12" cy="10" r="0.8" fill="var(--primary-300)" opacity="0.7"/>
  </svg>
);

const IconHandshake = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="handGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--primary-50)" />
        <stop offset="100%" stopColor="var(--primary-100)" />
      </linearGradient>
    </defs>
    <path d="M3 12C3 11.448 3.448 11 4 11H7L10.5 14.5L13.5 11.5L17 11H20C20.552 11 21 11.448 21 12V15C21 15.552 20.552 16 20 16H17L13.5 12.5L10.5 15.5L7 16H4C3.448 16 3 15.552 3 15V12Z" fill="url(#handGrad)" stroke="var(--primary)" strokeWidth="1.2"/>
    <ellipse cx="8" cy="9" rx="1.5" ry="2" fill="var(--primary-200)" stroke="var(--primary)" strokeWidth="1" opacity="0.9"/>
    <ellipse cx="16" cy="9" rx="1.5" ry="2" fill="var(--primary-200)" stroke="var(--primary)" strokeWidth="1" opacity="0.9"/>
    <circle cx="9" cy="13.5" r="0.7" fill="var(--primary-400)" opacity="0.8"/>
    <circle cx="15" cy="13.5" r="0.7" fill="var(--primary-400)" opacity="0.8"/>
  </svg>
);

const IconRocket = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--primary-50)" />
        <stop offset="100%" stopColor="var(--primary-100)" />
      </linearGradient>
    </defs>
    <path d="M12 2.5C12 2.5 17.5 6.5 17.5 12C17.5 13.105 16.895 14 16 14H8C7.105 14 6.5 13.105 6.5 12C6.5 6.5 12 2.5 12 2.5Z" fill="url(#rocketGrad)" stroke="var(--primary)" strokeWidth="1.2"/>
    <ellipse cx="12" cy="8.5" rx="1.8" ry="2.5" fill="var(--primary-200)" opacity="0.8"/>
    <circle cx="12" cy="8" r="1.2" fill="var(--primary-400)"/>
    <path d="M8 14L6.5 17.5L8 19L12 15.5L16 19L17.5 17.5L16 14" fill="var(--primary-200)" stroke="var(--primary)" strokeWidth="1.1" strokeLinejoin="round"/>
    <path d="M10.5 19V21M13.5 19V21" stroke="var(--primary-500)" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
    <circle cx="12" cy="8" r="0.6" fill="var(--primary)" opacity="0.9"/>
  </svg>
);

const AnimatedIllustration = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 1200"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--mpurple)" />
        </linearGradient>
      </defs>
      {/* Layer 1: Deep Background Elements */}
      <g className="layer-1" opacity="0.3">
        <path d="M-100 800 C 300 600, 500 600, 900 800 S 1300 1000, 1700 800" stroke="var(--primary-200)" fill="none" strokeWidth="2" />
        <path d="M-100 900 C 300 700, 500 700, 900 900 S 1300 1100, 1700 900" stroke="var(--primary-200)" fill="none" strokeWidth="2" />
      </g>
      {/* Layer 2: Neural Network */}
      <g className="layer-2" opacity="0.5">
        <path d="M100,100 L300,300 L100,500 L300,700 L100,900" stroke="url(#line-grad)" fill="none" strokeWidth="1" className="draw-path" />
        <path d="M1340,200 L1140,400 L1340,600 L1140,800" stroke="url(#line-grad)" fill="none" strokeWidth="1" className="draw-path" style={{ animationDelay: '1s' }} />
        <circle cx="300" cy="300" r="3" fill="var(--accent)" className="pulse" />
        <circle cx="1140" cy="800" r="3" fill="var(--mpurple)" className="pulse" style={{ animationDelay: '0.5s' }} />
      </g>
      {/* Layer 3: Foreground Elements */}
      <g className="layer-3" opacity="0.4">
        <path d="M-50,1100 L1490,100" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 8" className="dash-path" />
      </g>
    </svg>
  </div>
);

export default function CompanySection() {
  const statsData = [
    { icon: IconBuilding2, number: '500+', label: 'Businesses Served' },
    { icon: IconUsers, number: '5,000+', label: 'Candidates on Platform' },
    { icon: IconPresentation, number: '100+', label: 'Businesses Coached' },
    { icon: IconGraduationCap, number: '4,000+', label: 'People Educated' },
    { icon: IconHandshake, number: 'Multi-State', label: 'EDC Partnerships' },
    { icon: IconRocket, number: '2023', label: 'Founding Year' }
  ];

  const features = [
    {
      icon: IconLanguages,
      title: 'Bilingual, voice- and text-accessible',
      description: 'tools designed for speed and inclusivity'
    },
    {
      icon: IconFileText,
      title: 'Instant ATS-compatible resumes',
      description: 'with interview prep and candidate matching'
    },
    {
      icon: IconBriefcase,
      title: 'Rapid job postings',
      description: 'with automatic candidate matching technology'
    },
    {
      icon: IconBrainCircuit,
      title: 'AI-driven business insights',
      description: 'that help small businesses grow and compete'
    }
  ];

  return (
    <section
      className="relative py-8 md:py-12 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, white 0%, var(--primary-50) 100%)' }}
      id="about-moil"
    >
      <AnimatedIllustration />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto animate-fade-in">
          {/* Section Header */}
          <div className="text-center mb-8 animate-slide-up">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-primary-200 px-6 py-3 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">
                Company Profile
              </span>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-navy leading-tight">
              Meet{' '}
              <span className="text-primary-gradient">
                Moil
              </span>
            </h2>
            <p className="text-2xl md:text-3xl font-light text-muted max-w-4xl mx-auto leading-relaxed">
              Your Partner in Data-Driven Growth
            </p>
          </div>

          {/* Company Introduction */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl px-8 pt-0 pb-6 md:px-12 md:pt-0 md:pb-12 border border-white/50 shadow-xl">
              <p className="text-xl md:text-2xl leading-relaxed text-center max-w-5xl mx-auto text-navy font-light">
                <strong className="font-bold text-navy">Andres F. Urrego</strong> is the solo Founder and CEO of{' '}
                <strong className="font-bold text-accent">Moil</strong>, an AI-powered platform transforming how small businesses and job seekers connect, grow, and thrive. A serial entrepreneur, business coach, and consultant, Andres has supported more than 100 businesses in launching, saving money, and scaling—while also contributing to the entrepreneurial ecosystem in Buda, Texas.
              </p>
            </div>
          </div>

          {/* Story & Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-8">
            {/* Story */}
            <div
              className="group animate-slide-up"
              style={{ animationDelay: '200ms' }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <IconBookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Our Story</h3>
                </div>
                <p className="text-lg text-muted leading-relaxed">
                  With over a decade of success in sales and leadership, Andres bootstrapped Moil in 2023. By 2025, the platform served <strong className="text-accent font-semibold">over 5,000 candidates and 500 businesses</strong>. Instead of marketing, he partnered with nonprofits to <strong className="text-accent font-semibold">educate over 4,000 people at no cost</strong>, focusing on tech and future-of-work skills.
                </p>
              </div>
            </div>
            {/* Mission */}
            <div
              className="group animate-slide-up"
              style={{ animationDelay: '300ms' }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <IconTarget className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Our Mission</h3>
                </div>
                <p className="text-lg text-muted leading-relaxed">
                  Making AI work for people first—empowering entrepreneurs, SMBs, and workers by removing barriers of language, education, and technology. We're sponsoring Pfest to invest in the communities we serve, from Austin to San Antonio.
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div
            className="my-16 animate-slide-up"
            style={{ animationDelay: '400ms' }}
          >
            <div className="text-center mb-8">
              <h3 className="text-4xl md:text-5xl font-bold text-navy mb-4">The Moil Difference</h3>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Cutting-edge solutions designed for the modern workforce
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-3 text-navy group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-lg text-muted leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div
            className="mb-24 animate-slide-up"
            style={{ animationDelay: '500ms' }}
          >
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 md:p-16 border border-primary/10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                  <IconQuote className="w-12 h-12" />
                </div>
                <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8 text-navy max-w-4xl mx-auto">
                  "A Colombian immigrant, husband, and father of two, I bring my story of resilience and my vision of making AI work for people first... This is just the beginning—Moil will continue building tools that bridge gaps and expand opportunity."
                </blockquote>
                <div className="border-t border-primary/20 pt-8">
                  <div className="font-bold text-2xl mb-2 text-navy">Andres F. Urrego</div>
                  <div className="text-lg text-primary font-semibold mb-2">Founder & CEO</div>
                  <p className="text-muted">Colombian immigrant • Husband & Father of Two • Serial Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="animate-slide-up" style={{ animationDelay: '600ms' }}>
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-navy mb-4">Our Progress So Far</h3>
              <p className="text-xl text-muted">Measurable impact across communities</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm text-center p-8 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                    <stat.icon className="w-9 h-9 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black mb-2 text-navy">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-muted leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .layer-1 {
          animation: parallax-slow 20s ease-in-out infinite alternate;
        }
        .layer-2 {
          animation: parallax-fast 20s ease-in-out infinite alternate;
        }
        .layer-3 {
          animation: parallax-fast 25s ease-in-out infinite alternate;
        }
        .pulse {
          animation: pulse-opacity 5s ease-in-out infinite alternate;
        }
        .draw-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 10s ease-in-out infinite alternate;
        }
        .dash-path {
          animation: dash-move 30s linear infinite;
        }

        @keyframes parallax-slow {
          from { transform: translate(-20px, -10px); }
          to { transform: translate(20px, 10px); }
        }
        @keyframes parallax-fast {
          from { transform: translate(-50px, -25px); }
          to { transform: translate(50px, 25px); }
        }
        @keyframes pulse-opacity {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes dash-move {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 1000; }
        }
      `}</style>
    </section>
  );
}
