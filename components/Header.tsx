import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Component Showcase
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero-section" className="text-gray-600 hover:text-primary transition-colors">
              Components
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          {/* CTA Button */}
          <button className="btn-primary hidden md:block">
            Get Started
          </button>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
