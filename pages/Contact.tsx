import React from 'react';
import { CONTACT_INFO } from '../constants';
import SEO from '../components/SEO';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with ISRESSM for admissions, partnerships, and training inquiries." 
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
          <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight">Contact Us</h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-300">
            We are available to assist you with inquiries on admissions, partnerships, and services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8 lg:space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm lg:text-base">Our Address</h3>
                    <p className="text-gray-600 text-sm lg:text-base">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm lg:text-base">Phone Numbers</h3>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1">
                        {CONTACT_INFO.phones.map(p => (
                            <a key={p} href={`tel:${p}`} className="text-gray-600 hover:text-primary-600 block text-sm lg:text-base">{p}</a>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm lg:text-base">Email Addresses</h3>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1">
                        {CONTACT_INFO.emails.map(e => (
                            <a key={e} href={`mailto:${e}`} className="text-gray-600 hover:text-primary-600 block text-xs lg:text-sm">{e}</a>
                        ))}
                    </div>
                  </div>
                </div>
                
                 <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm lg:text-base">Website</h3>
                    <p className="text-gray-600 text-sm lg:text-base">{CONTACT_INFO.website}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 h-64 rounded-xl flex items-center justify-center text-gray-400 border border-gray-200">
               {/* In a real app, embed Google Map iframe here */}
               <div className="text-center">
                 <MapPin size={48} className="mx-auto mb-2" />
                 <p className="text-sm lg:text-base">Map View Placeholder</p>
                 <p className="text-xs lg:text-sm">Surulere, Lagos, Nigeria</p>
               </div>
            </div>
          </div>

          <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Send a Message</h2>
            <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-4 lg:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" name="subject" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none text-sm lg:text-base"></textarea>
              </div>
              <button type="submit" className="w-full bg-secondary-900 hover:bg-secondary-800 text-white font-bold py-3 rounded-lg transition-colors text-sm lg:text-base">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;