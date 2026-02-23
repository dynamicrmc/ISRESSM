import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Leaf, HardHat, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="ISRESSM delivers strategic research, elite training, and consultancy that advance environment, safety, and security management across Africa." 
        image={{
          url: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=1600&auto=format&fit=crop',
          alt: 'ISRESSM professionals celebrating certification'
        }}
      />
      
      {/* Hero Section - Background Image */}
      <section 
        className="relative text-white overflow-hidden min-h-[90vh] flex items-center py-8 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://i.ibb.co/R4jphyFg/ISRESSM-1.jpg)',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-secondary-900/70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center">
            
            {/* Left Column: Text */}
            <div className="w-full lg:w-3/5 mb-6 lg:mb-0 relative z-20 pt-2 lg:pt-0">
              
              <div className="flex items-center mb-6 lg:mb-8">
                <h2 className="text-xs lg:text-sm font-bold tracking-[0.15em] text-gray-300">
                  Welcome to the Institute of Strategic Research on Environment, Security and Safety Management
                </h2>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white mb-6 lg:mb-8 tracking-tight max-w-4xl">
                Building Knowledge, Enhancing Safety, Protecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Environment.</span>
              </h1>

              <p className="text-gray-200 text-base md:text-lg max-w-xl mb-4 lg:mb-10 leading-relaxed">
                A premier institute dedicated to world-class research, high-impact training, 
                policy development, and professional capacity building.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-6 w-full sm:w-auto">
                {/* Desktop Buttons */}
                <Link 
                  to="/programs" 
                  className="hidden sm:inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-900 font-bold py-4 px-8 uppercase tracking-widest transition-all transform hover:-translate-y-1 rounded-sm text-center"
                >
                  View Programs
                </Link>

                <Link 
                  to="/apply" 
                  className="hidden sm:inline-block bg-brand-gold hover:bg-[#8a5205] text-white font-bold py-4 px-10 uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-lg shadow-black/30 rounded-sm text-center"
                >
                  Apply Now
                </Link>

                {/* Mobile Buttons */}
                <Link 
                  to="/about" 
                  className="sm:hidden w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-900 font-bold py-3 px-6 uppercase tracking-widest transition-all rounded-sm text-center text-xs"
                >
                  About Us
                </Link>

                <Link 
                  to="/contact" 
                  className="sm:hidden w-full bg-brand-gold hover:bg-[#8a5205] text-white font-bold py-3 px-6 uppercase tracking-widest transition-all shadow-lg shadow-black/30 rounded-sm text-center text-xs"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Column: Empty (image now in background) */}
            <div className="w-full lg:w-2/5 relative hidden lg:flex justify-center lg:justify-end h-full mt-6 lg:mt-0">
              {/* Decorative "ISRESSM" Text */}
              <div className="relative z-10 lg:-mr-32 xl:-mr-48 opacity-10">
                <span className="text-[8rem] lg:text-[12rem] font-black text-white writing-mode-vertical rotate-90 hidden lg:block">
                  ISRESSM
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4 lg:mb-6">
                Your Trusted Partner for <span className="text-primary-600">Strategic Research</span>
              </h2>
              <div className="prose prose-sm lg:prose-lg text-gray-600">
                <p className="mb-4">
                  In an era of rising environmental concerns, security threats, and workplace safety challenges, 
                  ISRESSM provides the knowledge, tools, and expertise needed to strengthen institutions, 
                  safeguard communities, and advance sustainable development across Africa and beyond.
                </p>
                <p>
                  Whether you are a student, professional, organization, or government agency, 
                  we are your trusted partner for cutting-edge research, practical solutions, 
                  and globally competitive training.
                </p>
              </div>
              <Link to="/about" className="inline-block mt-6 lg:mt-8 text-primary-600 font-semibold hover:text-primary-700 flex items-center group text-sm lg:text-base">
                Learn more about our mission <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6">
               <div className="relative rounded-lg overflow-hidden shadow-xl h-64 lg:h-auto border border-gray-100">
                 <div className="absolute inset-0 bg-primary-900/10 hover:bg-transparent transition-colors"></div>
                 <img src="https://i.ibb.co/KjhNbShx/Gemini-Generated-Image-4m41j04m41j04m41.png" alt="Research" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section - Unified Colors (Gold/Dark) */}
      <section className="py-10 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900">Our Core Pillars</h2>
            <p className="mt-2 lg:mt-4 text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">Bridging the gap between theory, policy, and real-life implementation through our specialized focus areas.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-primary-600 group">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Leaf size={24} className="lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-secondary-900 mb-2 lg:mb-3">Environment</h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Promoting sustainable practices, waste management, and environmental governance to protect future generations.
              </p>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-secondary-900 group">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-100 text-secondary-900 rounded-lg flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-secondary-900 group-hover:text-white transition-colors">
                <ShieldCheck size={24} className="lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-secondary-900 mb-2 lg:mb-3">Security</h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Reinforcing proactive strategic thinking in security intelligence, risk assessment, and national safety.
              </p>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-primary-600 group">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <HardHat size={24} className="lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-secondary-900 mb-2 lg:mb-3">Safety Management</h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Prioritizing the health, safety, and well-being of people across industries through compliance and training.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 relative overflow-hidden text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
            <img 
                src="https://i.ibb.co/S4WP3Pzd/Gemini-Generated-Image-ihs35tihs35tihs3-1.png" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover"
            />
            {/* Unified Dark Overlay */}
            <div className="absolute inset-0 bg-secondary-900/60"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Future?</h2>
          <p className="text-xl mb-10 text-gray-200">
            Join thousands of professionals enhancing their careers with our certifications.
          </p>
          <Link to="/apply" className="inline-block bg-primary-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-black/50">
            Start Your Application
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;