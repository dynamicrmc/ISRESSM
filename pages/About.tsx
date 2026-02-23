import React from 'react';
import { CORE_VALUES } from '../constants';
import SEO from '../components/SEO';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about ISRESSM's mission, vision, and core values in environmental, security, and safety management." 
      />
      
      {/* Header with Hero Image */}
      <div className="relative bg-secondary-900 text-white py-16 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://i.ibb.co/R4jphyFg/ISRESSM-1.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary-900/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight">About Us</h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
            Advancing knowledge, strengthening policy, and promoting sustainable solutions across Africa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">
              The Institute of Strategic Research on Environment, Security and Safety Management (ISRESSM) is a private 
              and independent professional body committed to advancing knowledge. We address the increasing need 
              for strategic research, professional development, and capacity-building that bridges the gap between 
              theory, policy, and real-life implementation in Nigeria and Africa at large.
            </p>
            
            <h3 className="text-xl font-bold text-secondary-900 mb-4">What We Do</h3>
            <ul className="space-y-3">
              {[
                'Generate evidence-based research to guide decision-making.',
                'Train individuals and organizations on global best practices.',
                'Provide consultancy services improving safety & security.',
                'Promote international standards and responsible leadership.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-600 text-sm lg:text-base">
                  <CheckCircle2 className="text-primary-600 mr-2 shrink-0 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8">
            <div className="bg-primary-50 p-6 lg:p-8 rounded-xl border border-primary-100">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Our Mission</h3>
              <p className="text-gray-700 text-sm lg:text-base">
                To provide high-quality research, training, and professional development that promote 
                environmental sustainability, strengthen security systems, and enhance safety management 
                across Africa and the global community.
              </p>
            </div>
            
            <div className="bg-secondary-50 p-6 lg:p-8 rounded-xl border border-secondary-100">
              <h3 className="text-xl font-bold text-secondary-800 mb-3">Our Vision</h3>
              <p className="text-gray-700 text-sm lg:text-base">
                To become Africa’s leading institute for strategic research, policy development, 
                and professional training in environment, security, and safety management — 
                driving innovation and inspiring sustainable solutions worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <h2 className="text-3xl font-bold text-center text-secondary-900 mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CORE_VALUES.map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-primary-100 mb-4">0{idx + 1}</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;