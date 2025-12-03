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
          <form action="https://formspree.io/f/mzznggly" method="POST" encType="multipart/form-data" className="space-y-6 lg:space-y-8">
            
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

            {/* Uploads */}
            <div className="space-y-4 lg:space-y-6">
                <h3 className="text-lg font-bold text-secondary-900 border-b pb-2">Documents</h3>
                
                <div>
                    <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">Upload CV (PDF/Doc) <span className="text-red-600 font-bold">*</span></label>
                    <input type="file" name="cv" id="cv" accept=".pdf,.doc,.docx" required className="w-full text-xs lg:text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs lg:file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100" />
                </div>

                <div>
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">Upload Passport Photograph <span className="text-red-600 font-bold">*</span></label>
                    <input type="file" name="photo" id="photo" accept="image/*" required className="w-full text-xs lg:text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs lg:file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100" />
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