'use client';

import { useState, useEffect, useRef } from 'react';

// Animated Grid Background Component
interface Dot {
  id: string;
  x: number;
  y: number;
  scale: number;
  opacity: number;
}

function AnimatedGridBackground() {
  const gridRef = useRef(null);
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const createDots = () => {
      const dotsArray = [];
      const cols = 20;
      const rows = 15;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          dotsArray.push({
            id: `${i}-${j}`,
            x: j * 60,
            y: i * 60,
            scale: 1,
            opacity: 0.3
          });
        }
      }
      setDots(dotsArray);
    };

    createDots();
  }, []);

  const handleDotHover = (hoveredId: string) => {
    const [row, col] = hoveredId.split('-').map(Number);

    setDots(prevDots =>
      prevDots.map(dot => {
        const [dotRow, dotCol] = dot.id.split('-').map(Number);
        const distance = Math.sqrt(Math.pow(row - dotRow, 2) + Math.pow(col - dotCol, 2));

        if (distance <= 3) {
          const intensity = Math.max(0, 1 - distance / 3);
          return {
            ...dot,
            scale: 1 + intensity * 2,
            opacity: 0.3 + intensity * 0.7
          };
        }
        return { ...dot, scale: 1, opacity: 0.3 };
      })
    );
  };

  const handleMouseLeave = () => {
    setDots(prevDots =>
      prevDots.map(dot => ({ ...dot, scale: 1, opacity: 0.3 }))
    );
  };

  return (
    <div
      ref={gridRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ background: '#5843BD' }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ minWidth: '1200px', minHeight: '900px' }}
      >
        {dots.map((dot) => (
          <circle
            key={dot.id}
            cx={dot.x}
            cy={dot.y}
            r="2"
            fill="rgba(255, 255, 255, 0.4)"
            className="pointer-events-auto cursor-pointer transition-all duration-300 ease-out"
            style={{
              transform: `scale(${dot.scale})`,
              opacity: dot.opacity
            }}
            onMouseEnter={() => handleDotHover(dot.id)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </svg>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(88, 67, 189, 0.9) 0%, rgba(88, 67, 189, 0.7) 50%, rgba(255, 102, 51, 0.3) 100%)'
        }}
      />
    </div>
  );
}

// Countdown Component
function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the date we're counting down to (Sept 29, 2025)
    const countDownDate = new Date('Sep 29, 2025 09:00:00').getTime();

    const timer = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state
      setTimeLeft({ days, hours, minutes, seconds });

      // If the count down is over, clear the interval
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Background Elements */}
      <div className="absolute inset-0 -m-4">
        <div 
          className="absolute top-0 left-1/4 w-32 h-32 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ backgroundColor: '#FF6633' }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ backgroundColor: '#5843BD', animationDelay: '1s' }}
        />
      </div>

      {/* Main Container */}
      <div 
        className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
        }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#FF6633] animate-pulse" />
            <span className="text-sm font-semibold text-white/70 uppercase tracking-widest">
              Event Starts In
            </span>
            <div className="w-2 h-2 rounded-full bg-[#FF6633] animate-pulse" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Pflugerville Venture Pfest 2025
          </h3>
          <p className="text-sm text-white/60">September 29, 2025 • 9:00 AM</p>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: timeLeft.days, label: 'Days', color: '#FF6633' },
            { value: timeLeft.hours, label: 'Hours', color: '#5843BD' },
            { value: timeLeft.minutes, label: 'Minutes', color: '#FF6633' },
            { value: timeLeft.seconds, label: 'Seconds', color: '#5843BD' }
          ].map((item, index) => (
            <div
              key={item.label}
              className="group relative text-center"
            >
              {/* Card Background */}
              <div 
                className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transition-all duration-300 group-hover:scale-105 group-hover:bg-white/15"
                style={{
                  boxShadow: `0 8px 32px rgba(${item.color === '#FF6633' ? '255, 102, 51' : '88, 67, 189'}, 0.15)`
                }}
              >
                {/* Accent Border */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-50"
                  style={{
                    background: `linear-gradient(135deg, transparent, ${item.color}20, transparent)`,
                    border: `1px solid ${item.color}30`
                  }}
                />
                
                {/* Number */}
                <div className="relative z-10 mb-3">
                  <span 
                    className="text-white text-3xl md:text-4xl font-black leading-none transition-all duration-300 group-hover:scale-110"
                  >
                    {item.value.toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Label */}
                <div className="relative z-10">
                  <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {

  return (
    <section
      className="relative min-h-screen flex items-center py-8 justify-center overflow-hidden"
      style={{ background: '#5843BD' }}
    >
      {/* Animated Grid Background */}
      <AnimatedGridBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Brand Partnership */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div
              className="px-4 py-2 rounded-xl font-semibold text-xs tracking-wide backdrop-blur-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <span className="text-white">MOIL BUSINESS INSIGHTS</span>
            </div>
            <span
              className="text-2xl font-bold animate-pulse"
              style={{ color: '#FF6633' }}
            >
              ×
            </span>
            <div
              className="px-6 py-3 rounded-xl font-semibold text-sm tracking-wide backdrop-blur-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <span className="text-white">PFLUGERVILLE VENTURE PFEST</span>
            </div>
            <div
              className="px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-lg border transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <span className="text-white">Sept 29 – Oct 3</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#fff] font-extrabold mb-6 leading-tight">
            Unlock Growth with Moil Business Insights at Pflugerville Venture Pfest
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
            First <span className="font-bold" style={{ color: '#FF6633' }}>50 attendees</span> get free access.
            Everyone else pays <span className="font-bold" style={{ color: '#FF6633' }}>$50</span>
            <span className="text-white/70"> (regularly </span>
            <span className="line-through text-white/50">$375</span>
            <span className="text-white/70">)</span>
          </p>

          {/* Countdown */}
          <div>
            <Countdown />
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex flex-col items-center gap-6">
            {/* Main CTA Button */}
            <div className="relative group">
              {/* Background Glow */}
              <div 
                className="absolute -inset-1 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, #FF6633, #5843BD, #FF6633)',
                  animation: 'pulse 3s ease-in-out infinite'
                }}
              />
              
              {/* Button Container */}
              <div className="relative">
                <a
                  href="https://business.moilapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  {/* Main Button */}
                  <div 
                    className="relative px-12 py-6 rounded-3xl backdrop-blur-xl border border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:border-white/40 overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    {/* Animated Background */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 102, 51, 0.1), rgba(88, 67, 189, 0.1))'
                      }}
                    />

                    {/* Shimmer Effect */}
                    <div 
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)'
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-center gap-4">
                      {/* Icon */}
                      <div className="relative">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{
                            background: 'linear-gradient(135deg, #FF6633, #FF8A4C)',
                            boxShadow: '0 8px 20px rgba(255, 102, 51, 0.4)'
                          }}
                        >
                          <span className="text-white text-xl font-bold">🚀</span>
                        </div>
                        {/* Icon Glow */}
                        <div 
                          className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                          style={{ background: '#FF6633' }}
                        />
                      </div>

                      {/* Text Content */}
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-1 group-hover:text-[#FF6633] transition-colors duration-300">
                          Claim Your Spot
                        </div>
                        <div className="text-sm text-white/70 font-medium">
                          Join the first 50 for FREE access
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="relative">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-2"
                          style={{
                            background: 'linear-gradient(135deg, #5843BD, #7C3AED)',
                            boxShadow: '0 8px 20px rgba(88, 67, 189, 0.4)'
                          }}
                        >
                          <span className="text-white text-lg font-bold">→</span>
                        </div>
                        {/* Arrow Glow */}
                        <div 
                          className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                          style={{ background: '#5843BD' }}
                        />
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl"
                      style={{
                        background: 'linear-gradient(90deg, #FF6633, #5843BD, #FF6633)'
                      }}
                    />
                  </div>
                </a>
              </div>
            </div>

            {/* Secondary Info */}
            <div className="text-center">
              <p className="text-white/60 text-sm mb-2">
                🔒 Secure registration • No credit card required
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-white/50">
                <span>✓ Instant access</span>
                <span>•</span>
                <span>✓ Premium insights</span>
                <span>•</span>
                <span>✓ Networking opportunities</span>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 right-20 hidden lg:block animate-bounce">
            <div
              className="w-20 h-20 rounded-2xl opacity-20 blur-sm"
              style={{ background: 'linear-gradient(135deg, #FF6633, #FF8A4C)' }}
            ></div>
          </div>
          <div className="absolute bottom-32 left-20 hidden lg:block animate-pulse">
            <div
              className="w-16 h-16 rounded-full opacity-20 blur-sm"
              style={{ background: 'linear-gradient(135deg, #5843BD, #7C3AED)' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
