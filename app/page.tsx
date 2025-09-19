import Hero from '../components/Hero';
import AboutPfest from '../components/AboutPfest';
import CompanySection from '../components/CompanySection';
import FeaturedSpeaker from '../components/FeaturedSpeaker';
import PricingSection from '../components/PricingSection';
import SuccessProtocol from '../components/SuccessProtocol';
import InvestmentCallout from '../components/InvestmentCallout';
import ChatSection from '../components/ChatSection';
import ChatWidget from '../components/ChatWidget';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Component Showcase Header */}
      {/* <section className="bg-gradient-to-br from-[#5843BD] to-[#FF6633] py-16 text-white">
        <div className="container-padding">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Component Showcase
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            Explore our beautifully designed components with the new color scheme featuring 
            <span className="font-semibold"> #5843BD</span> (primary) and 
            <span className="font-semibold"> #FF6633</span> (accent) colors.
          </p>
        </div>
      </section> */}

      {/* Component Sections */}
      <div className="">
        {/* Hero Section */}
        <section id="hero-section" className="relative">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about-section" className="relative bg-gray-50">
          <AboutPfest />
        </section>

        {/* Company Section */}
        <section id="company-section" className="relative">
          <CompanySection />
        </section>

        {/* Featured Speaker */}
        <section id="speaker-section" className="relative bg-gray-50">
          <FeaturedSpeaker />
        </section>

        {/* Success Protocol */}
        <section id="protocol-section" className="relative">
    
          <SuccessProtocol />
        </section>

        {/* Pricing Section */}
        <section id="pricing-section" className="relative bg-gray-50">
          <PricingSection />
        </section>

        {/* Investment Callout */}
        <section id="investment-section" className="relative">

          <InvestmentCallout />
        </section>

        {/* Chat Section */}
        <section id="chat-section" className="relative bg-gray-50">
          <ChatSection />
        </section>
      </div>
        {/* Floating Chat Widget */}
        <ChatWidget />
    </div>
  );
}