import React from 'react';
import { Link } from 'react-router-dom';
import { PROGRAM_SECTIONS, CERTIFICATION_CATEGORIES } from '../constants';
import SEO from '../components/SEO';
import { BookOpen, Award, ArrowRight, CheckCircle2, GraduationCap } from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <>
      <SEO 
        title="Our Programs" 
        description="Professional certifications and diplomas in Environment, Safety, Security, and Disaster Management." 
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
              <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight">Professional Programs</h1>
              <p className="mt-4 text-lg lg:text-xl text-gray-300 max-w-3xl">
                Explore our comprehensive range of certifications designed to elevate your career and professional standing.
              </p>
           </div>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Certification Categories */}
          <div className="mb-10 lg:mb-20 text-center">
              <span className="text-primary-600 font-bold tracking-widest uppercase text-xs lg:text-sm mb-2 block">Pathways to Excellence</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-8">Certification Categories</h2>
              <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
                  {CERTIFICATION_CATEGORIES.map((cat, idx) => (
                      <div key={idx} className="flex items-center bg-white px-4 py-2 lg:px-6 lg:py-3 rounded-full shadow-sm border border-gray-200 hover:border-primary-600 hover:shadow-md transition-all group cursor-default">
                          <Award size={16} className="text-secondary-900 mr-2 group-hover:scale-110 transition-transform lg:w-5 lg:h-5" />
                          <span className="text-gray-700 text-xs lg:text-sm font-medium group-hover:text-secondary-900">{cat}</span>
                      </div>
                  ))}
              </div>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {PROGRAM_SECTIONS.map((section, index) => (
              <div 
                key={section.id} 
                id={`section-${section.id.toLowerCase()}`} 
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Section Header */}
                <div className="bg-secondary-900 p-6 lg:p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <GraduationCap size={100} className="lg:w-[120px] lg:h-[120px]" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                       <span className="bg-primary-600 text-white text-[10px] lg:text-xs font-black px-3 py-1 rounded uppercase tracking-wider">
                         Section {section.id}
                       </span>
                    </div>
                    <h2 className="text-xl lg:text-3xl font-bold">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Courses Grid */}
                <div className="p-6 lg:p-10 flex-grow">
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-4 lg:gap-y-6">
                    {section.courses.map((course, idx) => (
                      <div key={idx} className="flex items-start group">
                        <div className="bg-gray-100 p-2 rounded-lg text-secondary-900 mt-1 mr-4 group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                           <BookOpen size={16} className="lg:w-[18px] lg:h-[18px]" />
                        </div>
                        <span className="text-gray-700 text-sm lg:text-base leading-relaxed group-hover:text-gray-900 transition-colors">
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="bg-gray-50 px-6 py-4 lg:px-8 lg:py-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center text-gray-500 text-xs lg:text-sm">
                    <CheckCircle2 size={16} className="text-primary-600 mr-2" />
                    <span>Certified by industry experts</span>
                  </div>
                  
                  <Link 
                    to="/apply" 
                    className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 lg:px-8 lg:py-3 rounded-lg font-bold transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg text-sm lg:text-base"
                  >
                    <span>Apply for Program</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 lg:mt-24 bg-secondary-900 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">Take the Next Step in Your Career</h3>
                <p className="text-gray-400 mb-6 lg:mb-8 max-w-2xl mx-auto text-base lg:text-lg">
                  Join thousands of professionals who have advanced their skills with ISRESSM certifications.
                </p>
                <Link to="/apply" className="inline-block bg-white text-secondary-900 text-base lg:text-lg font-bold px-8 py-3 lg:px-10 lg:py-4 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                    Start Your Application Now
                </Link>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;