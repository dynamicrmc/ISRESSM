import React from 'react';
import SEO from '../components/SEO';
import { PROGRAM_SECTIONS, MEMBERSHIPS, CERTIFICATION_CATEGORIES } from '../constants';

const Apply: React.FC = () => {
  return (
    <>
      <SEO 
        title="Apply Now" 
        description="Apply for ISRESSM programs and memberships. Start your professional journey today." 
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
          <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight">Apply Now</h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-200 max-w-3xl">
            Complete the form below to enroll in our programs or join our membership network.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="bg-white p-6 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            {/* 
               NOTE: To make this form functional, replace the action URL with your specific Formspree ID.
               e.g. action="https://formspree.io/f/xyzaqwer"
            */}
                    <form action="https://formspree.io/f/mzznggly" method="POST" className="space-y-6 lg:space-y-8">
                        {/* Redirect to thank-you page after successful Formspree submit */}
                        <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}#/thank-you` : '/#/thank-you'} />
            
            {/* Personal Details */}
            <div className="space-y-4 lg:space-y-6">
                <h3 className="text-lg font-bold text-secondary-900 border-b pb-2">Personal Information</h3>
                
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-600 font-bold">*</span></label>
                    <input type="text" name="name" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm lg:text-base" placeholder="John Doe" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth <span className="text-red-600 font-bold">*</span></label>
                        <input type="date" name="dob" id="dob" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm lg:text-base" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender <span className="text-red-600 font-bold">*</span></label>
                        <div className="flex gap-6 mt-3">
                            <label className="flex items-center">
                                <input type="radio" name="gender" value="Male" required className="w-4 h-4 text-primary-600 focus:ring-primary-500" />
                                <span className="ml-2 text-gray-700 text-sm lg:text-base">Male</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="gender" value="Female" required className="w-4 h-4 text-primary-600 focus:ring-primary-500" />
                                <span className="ml-2 text-gray-700 text-sm lg:text-base">Female</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    <div>
                        <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">Nationality <span className="text-red-600 font-bold">*</span></label>
                        <input type="text" name="nationality" id="nationality" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
                    </div>
                    <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State of Origin <span className="text-red-600 font-bold">*</span></label>
                        <input type="text" name="state" id="state" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
                    </div>
                    <div>
                        <label htmlFor="lga" className="block text-sm font-medium text-gray-700 mb-1">LGA <span className="text-red-600 font-bold">*</span></label>
                        <input type="text" name="lga" id="lga" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
                    </div>
                </div>

                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Residential Address <span className="text-red-600 font-bold">*</span></label>
                    <textarea name="address" id="address" rows={3} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" placeholder="Enter your full address"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-600 font-bold">*</span></label>
                        <input type="email" name="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" placeholder="you@example.com" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-600 font-bold">*</span></label>
                        <input type="tel" name="phone" id="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" placeholder="+234..." />
                    </div>
                </div>
            </div>

            {/* Selections */}
            <div className="space-y-4 lg:space-y-6">
                <h3 className="text-lg font-bold text-secondary-900 border-b pb-2">Program Selection</h3>

                <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Select Program <span className="text-red-600 font-bold">*</span></label>
                    <select name="program" id="program" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none bg-white text-sm lg:text-base">
                        <option value="">-- Select a Program --</option>
                        {PROGRAM_SECTIONS.flatMap(s => s.courses.map(c => (
                            <option key={c} value={c}>{c}</option>
                        )))}
                    </select>
                </div>

                <div>
                    <label htmlFor="membership" className="block text-sm font-medium text-gray-700 mb-1">Select Membership <span className="text-red-600 font-bold">*</span></label>
                    <select name="membership" id="membership" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none bg-white text-sm lg:text-base">
                        <option value="">-- Select Membership Tier --</option>
                        {MEMBERSHIPS.map(m => (
                            <option key={m.title} value={m.title}>{m.title} ({m.fee})</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="certification" className="block text-sm font-medium text-gray-700 mb-1">Select Certification Level <span className="text-red-600 font-bold">*</span></label>
                    <select name="certification" id="certification" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none bg-white text-sm lg:text-base">
                        <option value="">-- Select Category --</option>
                        {CERTIFICATION_CATEGORIES.map(c => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Educational Background */}
            <div className="space-y-4 lg:space-y-6">
                <h3 className="text-lg font-bold text-secondary-900 border-b pb-2">Educational Background</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                        <label htmlFor="highest_qualification" className="block text-sm font-medium text-gray-700 mb-1">Highest Qualification</label>
                        <input type="text" name="highest_qualification" id="highest_qualification" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
                    </div>
                    <div>
                        <label htmlFor="institution_attended" className="block text-sm font-medium text-gray-700 mb-1">Institution Attended</label>
                        <input type="text" name="institution_attended" id="institution_attended" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                        <label htmlFor="course_of_study" className="block text-sm font-medium text-gray-700 mb-1">Course of Study</label>
                        <input type="text" name="course_of_study" id="course_of_study" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
                    </div>
                    <div>
                        <label htmlFor="year_of_graduation" className="block text-sm font-medium text-gray-700 mb-1">Year of Graduation</label>
                        <input type="text" name="year_of_graduation" id="year_of_graduation" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                        <label htmlFor="professional_qualifications" className="block text-sm font-medium text-gray-700 mb-1">Professional Qualifications</label>
                        <input type="text" name="professional_qualifications" id="professional_qualifications" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
                    </div>
                    <div>
                        <label htmlFor="professional_institution" className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                        <input type="text" name="professional_institution" id="professional_institution" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
                    </div>
                </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-4 lg:space-y-6">
                <h3 className="text-lg font-bold text-secondary-900 border-b pb-2">Work Experience</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                        <label htmlFor="current_employer" className="block text-sm font-medium text-gray-700 mb-1">Current Employer</label>
                        <input type="text" name="current_employer" id="current_employer" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
                    </div>
                    <div>
                        <label htmlFor="position_held" className="block text-sm font-medium text-gray-700 mb-1">Position Held</label>
                        <input type="text" name="position_held" id="position_held" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                        <label htmlFor="years_of_experience" className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                        <input type="text" name="years_of_experience" id="years_of_experience" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
                    </div>
                    <div>
                        <label htmlFor="date_of_employment" className="block text-sm font-medium text-gray-700 mb-1">Date of Employment</label>
                        <input type="date" name="date_of_employment" id="date_of_employment" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
                    </div>
                </div>

                <div className="text-center mt-3">
                    <p className="text-sm font-semibold">Note: Send Proof of Payment to: <span className="text-primary-600">08034012264</span></p>
                </div>
            </div>

            {/* Bank Account Details */}
            <div className="bg-secondary-50 border-l-4 border-primary-600 p-6 lg:p-8 rounded-lg">
                <h3 className="text-lg font-bold text-secondary-900 mb-4">Institute Account Details for Payment</h3>
                <div className="space-y-3 text-sm lg:text-base">
                    <div className="flex flex-col sm:flex-row gap-2">
                        <span className="font-semibold text-gray-700 min-w-[120px]">A/C Number:</span>
                        <span className="text-gray-600 font-mono">2047768976</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <span className="font-semibold text-gray-700 min-w-[120px]">A/C Name:</span>
                        <span className="text-gray-600">Inst of Strategic Research on Env Sec And Safety Mgt.</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <span className="font-semibold text-gray-700 min-w-[120px]">Bank Name:</span>
                        <span className="text-gray-600">First Bank</span>
                    </div>
                </div>
            </div>

            <div className="pt-4">
                <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 lg:py-4 rounded-lg shadow-md transition-all text-base lg:text-lg">
                    Submit Application
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Apply;