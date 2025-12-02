import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import SEO from '../components/SEO';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <>
      <SEO 
        title="Our Services" 
        description="ISRESSM offers strategic research, professional training, consultancy, and capacity building services." 
      />

      {/* Header with Hero Image */}
      <div className="relative bg-secondary-900 text-white py-16 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=1000&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary-900/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="border-l-4 border-primary-600 pl-6">
             <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight">Our Services</h1>
             <p className="mt-4 text-lg lg:text-xl text-gray-300 max-w-2xl">
                Delivering excellence through strategic research, professional training, and expert consultancy.
             </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 lg:space-y-16">
            {SERVICES.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row">
                  
                  {/* Left Panel: Info & CTA */}
                  <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-between relative bg-white">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                       <span className="text-9xl font-black text-secondary-900">0{index + 1}</span>
                    </div>

                    <div>
                      <div className="inline-flex items-center space-x-2 text-primary-600 font-bold tracking-wider text-sm uppercase mb-4">
                         <Layers size={16} />
                         <span>Service Category 0{index + 1}</span>
                      </div>
                      
                      <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4 lg:mb-6 leading-tight">
                        {service.title}
                      </h2>
                      
                      <p className="text-gray-600 leading-relaxed text-base lg:text-lg mb-8">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4">
                      <Link 
                        to="/apply" 
                        className="inline-flex items-center gap-3 bg-primary-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 group-hover:translate-x-2 shadow-lg shadow-gray-200 text-sm lg:text-base"
                      >
                        <span>Book This Service</span>
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Panel: Items List */}
                  <div className="lg:w-3/5 bg-gray-50 p-8 md:p-12 border-l border-gray-100">
                    <h3 className="text-lg font-bold text-secondary-900 mb-6 flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Key Focus Areas
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.items.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start p-3 lg:p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-primary-200 hover:shadow-md transition-all duration-200"
                        >
                          <CheckCircle2 size={18} className="text-secondary-900 mt-0.5 mr-3 shrink-0" />
                          <span className="text-gray-700 text-xs lg:text-sm font-medium leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;