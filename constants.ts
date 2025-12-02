import { MembershipTier, ProgramSection, ServiceItem } from './types';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Programs', path: '/programs' },
  { label: 'Memberships', path: '/memberships' },
  { label: 'Contacts', path: '/contact' },
  { label: 'Apply Now', path: '/apply', isCta: true },
];

export const CORE_VALUES = [
  { title: 'Integrity', description: 'We uphold honesty, transparency, and ethical standards in all our operations.' },
  { title: 'Excellence', description: 'We deliver top-quality research, education, and consultancy services.' },
  { title: 'Innovation', description: 'We embrace creative and forward-thinking approaches to solve complex global challenges.' },
  { title: 'Professionalism', description: 'We maintain high professional standards in training, research, and corporate engagement.' },
  { title: 'Sustainability', description: 'We promote responsible practices that protect the environment and future generations.' },
  { title: 'Security Consciousness', description: 'We reinforce proactive and strategic thinking in security and risk management.' },
  { title: 'Safety First', description: 'We prioritize the health, safety, and well-being of people in every sector.' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Strategic Research & Policy Development',
    description: 'Our research informs policy-making, institutional planning, and sustainable solutions.',
    items: [
      'Environmental Management', 'Climate Change & Adaptation', 'Waste Management',
      'National & Corporate Security', 'Terrorism & Intelligence Studies',
      'Disaster Risk Reduction', 'Public Safety & Community Resilience',
      'Government Policy & Regulatory Systems'
    ]
  },
  {
    title: 'Professional Training & Certification Programs',
    description: 'All programs are delivered by certified experts with practical field experience.',
    items: [
      'Health, Safety & Environment (HSE Levels 1–3)', 'Environmental Management Systems (EMS)',
      'Workplace Safety & Compliance', 'Industrial Safety', 'Disaster & Emergency Management',
      'Security Risk Assessment', 'Intelligence & Security Operations',
      'Environmental Impact Assessment (EIA)', 'Waste Recycling & Sustainable Waste Management',
      'Corporate Governance & Safety Leadership'
    ]
  },
  {
    title: 'Consultancy Services',
    description: 'Expert advisory services to public and private organizations.',
    items: [
      'Safety Compliance Consulting', 'Security System Design & Assessment',
      'Environmental Audit & Impact Assessment', 'Emergency Preparedness & Response Planning',
      'Risk Management Consulting', 'Corporate Environmental Sustainability Strategy',
      'Workplace Hazard Analysis', 'Business Continuity & Disaster Recovery Planning'
    ]
  },
  {
    title: 'Capacity Building for Institutions',
    description: 'Our trainings strengthen institutional efficiency and improve compliance with global standards.',
    items: [
      'Government agencies', 'Corporate organizations', 'Manufacturing companies',
      'NGOs', 'Educational institutions', 'International development bodies'
    ]
  },
  {
    title: 'Research Publications & Knowledge Hub',
    description: 'We host webinars, conferences, and academic symposiums.',
    items: [
      'Journals', 'Policy briefs', 'Research papers', 'Technical reports', 'Industry guidelines'
    ]
  }
];

export const PROGRAM_SECTIONS: ProgramSection[] = [
  {
    id: 'A',
    title: 'Environment & Sustainability Programmes',
    courses: [
      'Professional Certificate in Environmental Management',
      'Professional Certificate in Environmental Pollution, protection & regulations',
      'Professional Certificate in Pollution science: air, water, soil & waste management',
      'Professional Certificate in Environmental Management Systems (EMS) - For Corporate bodies',
      'Professional Certificate in Environmental Governance & Policy',
      'Professional Certificate in Local & international environmental laws',
      'Professional Certificate in Environmental Field Sampling, Data analysis & reporting'
    ]
  },
  {
    id: 'B',
    title: 'Safety & Occupational Health Programmes',
    courses: [
      'Professional Certificate in Occupational Health & Safety Management',
      'Professional Certificate in Fire Safety & Disaster Prevention',
      'Professional Certificate in Industrial Hygiene & Toxicology',
      'Professional Certificate in Road & Transport Management',
      'Professional Certificate in Food Process, Hygiene and Quality Control',
      'Professional Certificate in Waste Recycling Process & Management'
    ]
  },
  {
    id: 'C',
    title: 'Security & Intelligence Programmes',
    courses: [
      'Professional Certificate in Security Risk Analysis and management',
      'Professional Certificate in Corporate Security and Control Management',
      'Professional Certificate in Security Operations & Patrol Management',
      'Professional Certificate in Human & Digital Security intelligence',
      'Professional Certificate in Crime Detection and Investigation Management',
      'Professional Certificate in Cyber Security and Control Management'
    ]
  },
  {
    id: 'D',
    title: 'Disaster, Emergency & Crisis Management',
    courses: [
      'Professional Certificate in Emergency Response & Crisis Management',
      'Professional Certificate in Disaster Risk Reduction & Resilience',
      'Professional Certificate in Business Continuity & Disaster Recovery',
      'Professional Certificate in Strategic Risk Management - (For Corporate bodies)',
      'Professional Certificate in Enterprise Risk Management',
      'Professional Certificate in Leadership, Governance, Ethics & Compliance Management'
    ]
  },
  {
    id: 'E',
    title: 'Research, Data & Technology Programmes',
    courses: [
      'Professional Certificate in Research & Policy Analysis',
      'Professional Certificate in Environmental & Security Data Analytics',
      'Professional Certificate in GIS & Remote Sensing Operations'
    ]
  }
];

export const CERTIFICATION_CATEGORIES = [
  'Certified Professional Certifications',
  'Professional Diploma',
  'Advance Professional Diploma',
  'Professional Graduate Diploma',
  'Mini MBA'
];

export const MEMBERSHIPS: MembershipTier[] = [
  {
    title: 'Student Member',
    description: 'Excellent membership level for students or fresh graduates aspiring for a career in management.',
    fee: 'N40,000',
    criteria: ['WASSCE, NECO, GCE or equivalence.', 'Undergraduate of any recognized Institution']
  },
  {
    title: 'Graduate Member',
    description: 'Excellent for young professionals seeking to explore opportunities in management consulting.',
    fee: 'N100,000',
    criteria: ['BSc, HND or equivalence.', 'Proof of certification/competence.', '2 - 5 years work experience.']
  },
  {
    title: 'Associate Member',
    description: 'Elevate your professional status to new height with our excellent membership program.',
    fee: 'N150,000',
    criteria: ['Degree, HND or equivalence.', 'Proof of certification/competence.', '5 - 9 years work experience.']
  },
  {
    title: 'Full Member',
    description: 'Elevate your professional status to new height with our excellent membership program.',
    fee: 'N200,000',
    criteria: ['Degree, HND or equivalence.', 'Proof of certification/competence.', '9 - 14 years work experience.']
  },
  {
    title: 'Fellow Member',
    description: 'Attain the pinnacle of professional recognition in management profession with Fellow award.',
    fee: 'N250,000',
    criteria: ['MSc or equivalence.', 'Proof of certification/competence.', '15 years work experience.']
  },
  {
    title: 'Senior Fellow Member',
    description: 'Attain the pinnacle of professional recognition in management profession with Fellow award.',
    fee: 'N300,000',
    criteria: ['MSc or equivalence.', 'Proof of certification/competence.', '15 years work experience or 5 years fellow member.']
  },
  {
    title: 'Doctorate Fellow Member',
    description: 'Showcase your high-level professional commitment and achievement with a Doctoral Fellow.',
    fee: 'N750,000',
    criteria: ['PhD or equivalence.', 'Minimum 5 publications', '20 years relevant experience or Fellow for 10 years.']
  },
  {
    title: 'Corporate Member',
    description: 'Showcase your high-level professional commitment and achievement for your organization.',
    fee: 'N1,150,000',
    criteria: ['CAC Certificate of 10years above.', 'Board Resolution Document', 'Company Memart']
  }
];

export const CONTACT_INFO = {
  address: 'No 2, Martins Street, off Teju-Osho Market, Oju-Elegba Road, Surulere, Lagos, Nigeria',
  phones: ['+2348034012264', '+2349044185445', '+2349061777789', '+2349060234049'],
  emails: [
    'info.isressm@gmail.com',
    'president@isressm.org.ng',
    'registrar@isressm.org.ng',
    'hr@isressm.org.ng',
    'trainings@isresm.org.ng',
    'memberships@isressm.org.ng'
  ],
  website: 'www.isressm.org.ng'
};