import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { CheckCircle } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <>
      <SEO title="Thank You" description="Application received — thank you for applying." />

      <section className="min-h-[70vh] flex items-center py-16 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex flex-col justify-center gap-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-50 text-primary-600">
                  <CheckCircle size={48} />
                </div>

                <h1 className="text-2xl md:text-3xl font-extrabold text-secondary-900">Thank you — your application is received</h1>

                <p className="text-gray-600 leading-relaxed">We have successfully received your application. Our admissions team will review your submission and contact you via email or phone within 3–5 business days with the next steps.</p>

                <ul className="text-sm text-gray-600 space-y-2">
                  <li>- Keep an eye on your inbox (check spam)</li>
                  <li>- Save this reference: <span className="font-mono text-gray-800">ISR-{new Date().getFullYear()}-{Math.floor(Math.random() * 90000 + 10000)}</span></li>
                </ul>

                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <Link to="/" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition">Back to Home</Link>
                  <Link to="/programs" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200 text-secondary-900 hover:bg-gray-50 transition">Explore Programs</Link>
                </div>
              </div>

              <div className="hidden lg:block bg-[url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center">
                <div className="h-full w-full bg-gradient-to-t from-white/0 to-white/70" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
