import React from 'react';
import { Link } from 'react-router-dom';
import { MEMBERSHIPS } from '../constants';
import SEO from '../components/SEO';
import { Check } from 'lucide-react';

const Memberships: React.FC = () => {
  return (
    <>
      <SEO 
        title="Memberships" 
        description="Join ISRESSM as a Student, Graduate, Associate, or Fellow member. View fees and eligibility." 
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
          <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight">Membership Plans</h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-200 max-w-3xl">
            Elevate your professional status. Choose the membership that fits your career stage.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {MEMBERSHIPS.map((tier, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-primary-600 transition-all duration-300 relative overflow-hidden">
              <div className="p-6 lg:p-8 flex-grow">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{tier.title}</h3>
                <p className="text-xs lg:text-sm text-gray-500 mb-6 min-h-[40px]">{tier.description}</p>
                <div className="flex items-baseline mb-6">
                    <span className="text-2xl lg:text-3xl font-extrabold text-primary-600">{tier.fee}</span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Eligibility Criteria</p>
                  <ul className="space-y-3">
                    {tier.criteria.map((req, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <Check size={16} className="text-primary-600 mr-2 mt-0.5 shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-4 lg:p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                <Link to="/apply" className="block w-full text-center bg-white border border-secondary-200 text-secondary-900 font-bold py-2 lg:py-3 rounded-lg hover:bg-secondary-900 hover:text-white transition-colors text-sm lg:text-base">
                  Join as {tier.title.split(' ')[0]}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 bg-primary-50 p-6 lg:p-8 rounded-xl text-center">
            <p className="text-secondary-900 font-medium text-sm lg:text-base">International candidates are welcome to apply for all membership categories.</p>
        </div>
      </div>
    </>
  );
};

export default Memberships;