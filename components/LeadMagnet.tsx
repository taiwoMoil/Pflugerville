'use client';

import React, { useState, useEffect } from 'react';

interface LeadMagnetProps {
  autoOpen?: boolean;
}

export const LeadMagnet: React.FC<LeadMagnetProps> = ({ autoOpen = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (autoOpen) {
      // Show after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [autoOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
    setIsOpen(false);
    setEmail('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-slide-in">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-primary mb-2">
            Get Component Updates
          </h3>
          <p className="text-gray-600">
            Subscribe to get notified about new components and design updates.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full btn-primary"
          >
            Subscribe Now
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};
