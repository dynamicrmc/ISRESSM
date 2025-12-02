import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SERVICES } from '../constants';
import { CalendarCheck, ClipboardList, FileText, Mail, Phone, User } from 'lucide-react';

const FORM_ENDPOINT = 'https://formspree.io/f/xwpgbbdk';

const ServiceBooking: React.FC = () => {
  const [serviceIndex, setServiceIndex] = useState(0);

  const selectedService = useMemo(() => SERVICES[serviceIndex], [serviceIndex]);

  return (
    <>
      <SEO
        title="Service Booking"
        description="Book ISRESSM consultancy, research, or training services with tailored requirements."
      />

      <div className="relative bg-secondary-900 text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co/WWrpsq3J/2148950544-1.jpg"
            alt="Service booking background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary-900/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="uppercase tracking-[0.6em] text-xs text-gray-400 mb-4">Consultancy | Training | Advisory</p>
          <h1 className="text-3xl lg:text-5xl font-black">Book a Service</h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-200 max-w-3xl">
            Tell us about your organization, timelines, and preferred service areas. Our team will reach out with a
            tailored proposal within 24 hours.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          {/* Left column */}
          <div className="space-y-6">
            <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                <ClipboardList size={22} className="text-primary-600" />
                Booking Summary
              </h2>
              <p className="text-sm text-gray-600">
                Select a service category to see all focus areas available. You can include specific deliverables or
                KPIs inside the brief to help us design the engagement.
              </p>
              <div className="mt-6 space-y-3">
                {SERVICES.map((service, idx) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setServiceIndex(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      idx === serviceIndex
                        ? 'border-primary-600 bg-primary-50 text-secondary-900 shadow'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-primary-200 hover:bg-primary-50/40'
                    }`}
                  >
                    <p className="text-sm font-semibold">{service.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-secondary-900 text-white rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <CalendarCheck size={20} />
                Need support choosing?
              </h3>
              <p className="text-sm text-gray-200">
                Email <a href="mailto:info.isressm@gmail.com" className="underline">info.isressm@gmail.com</a> and the
                engagements unit will suggest the best track for your organization.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full bg-white text-secondary-900 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Talk to us
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white shadow-xl border border-gray-100 rounded-3xl p-6 md:p-10">
            <form action={FORM_ENDPOINT} method="POST" className="space-y-10">
              <input type="hidden" name="selected_service" value={selectedService.title} />

              <section className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-secondary-900 flex items-center gap-2">
                    <User size={20} className="text-primary-600" />
                    Contact Information
                  </h2>
                  <p className="text-sm text-gray-500">We respond within 24 hours.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="full_name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Organization / Company</label>
                    <input
                      type="text"
                      name="organization"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                      placeholder="Acme Industries"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2">
                      <Mail size={16} className="text-primary-500" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2">
                      <Phone size={16} className="text-primary-500" />
                      Phone (incl. country code)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                      placeholder="+234..."
                    />
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-secondary-900 flex items-center gap-2">
                    <FileText size={20} className="text-primary-600" />
                    Service Requirements
                  </h2>
                  <p className="text-sm text-gray-500">Describe timelines, KPIs, locations, and expected deliverables.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Service Category</label>
                    <select
                      name="service_category"
                      value={serviceIndex}
                      onChange={(event) => setServiceIndex(Number(event.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none bg-white"
                    >
                      {SERVICES.map((service, idx) => (
                        <option key={service.title} value={idx}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Start Window</label>
                    <input
                      type="text"
                      name="timeline"
                      placeholder="e.g. Q1 2026 / ASAP"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Focus Areas (select all that apply)
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedService.items.map((item) => (
                      <label
                        key={item}
                        className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50/40 cursor-pointer text-sm text-gray-700"
                      >
                        <input type="checkbox" name="focus_areas[]" value={item} className="mt-1 accent-primary-600" />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Project Brief</label>
                  <textarea
                    name="project_brief"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                    placeholder="Summarize your objectives, locations, team size, and expected outcomes."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Estimated Budget (optional)</label>
                    <input
                      type="text"
                      name="budget"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                      placeholder="₦10M – ₦20M / $15K – $20K"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Engagement Model</label>
                    <select
                      name="engagement_model"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none bg-white"
                    >
                      <option value="">Select model</option>
                      <option value="on-site">On-site deployment</option>
                      <option value="virtual">Virtual / hybrid delivery</option>
                      <option value="workshop">Workshop / bootcamp intensive</option>
                      <option value="retainer">Retainer-based advisory</option>
                    </select>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <label className="flex items-start gap-3 text-sm text-gray-600">
                  <input type="checkbox" name="nda_required" value="yes" className="mt-1 accent-primary-600" />
                  My organization requires a non-disclosure agreement (NDA).
                </label>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-2xl text-base shadow-lg shadow-primary-900/20 transition-transform hover:-translate-y-0.5"
                >
                  Submit Booking Request
                </button>
              </section>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceBooking;

