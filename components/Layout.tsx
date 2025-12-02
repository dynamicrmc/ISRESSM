import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail, ChevronRight, Home, Info, Briefcase, BookOpen, Users, Send, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  const getIcon = (label: string) => {
    switch (label) {
      case 'Home': return <Home size={20} />;
      case 'About Us': return <Info size={20} />;
      case 'Services': return <Briefcase size={20} />;
      case 'Programs': return <BookOpen size={20} />;
      case 'Memberships': return <Users size={20} />;
      case 'Contacts': return <Phone size={20} />;
      case 'Apply Now': return <Send size={20} />;
      default: return <ChevronRight size={20} />;
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 lg:h-20 transition-all duration-300">
            <div className="flex items-center">
              <NavLink to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
                <div className="flex items-center justify-center">
                   <img 
                     src="https://i.ibb.co/5hFxQ1KB/logo.png" 
                     alt="ISRESSM Logo" 
                     className="h-8 w-auto object-contain lg:h-12" 
                   />
                </div>
                <div className="hidden md:flex flex-col">
                  <span className="text-xl font-bold text-brand-gold leading-tight">ISRESSM</span>
                  <span className="text-xs text-secondary-600 tracking-wider">ENV. SAFETY. SECURITY.</span>
                </div>
                {/* Mobile text logo version */}
                <div className="flex md:hidden flex-col">
                  <span className="text-base font-bold text-brand-gold leading-tight">ISRESSM</span>
                </div>
              </NavLink>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      item.isCta
                        ? 'bg-primary-600 text-white hover:bg-primary-700 ml-4 shadow-md hover:shadow-lg'
                        : isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-secondary-900 hover:text-primary-600 hover:bg-gray-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-md text-secondary-900 hover:text-primary-600 hover:bg-gray-100 focus:outline-none transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-secondary-900/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`} 
          onClick={closeMenu}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[300px] bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-2">
                    <img 
                      src="https://i.ibb.co/5hFxQ1KB/logo.png" 
                      alt="ISRESSM Logo" 
                      className="h-8 w-auto object-contain" 
                    />
                    <span className="font-bold text-sm text-brand-gold tracking-tight">ISRESSM</span>
                </div>
                <button 
                    onClick={closeMenu}
                    className="p-1.5 rounded-full bg-white text-gray-500 hover:bg-primary-50 hover:text-primary-600 shadow-sm border border-gray-100 transition-all"
                    aria-label="Close menu"
                >
                    <X size={18} />
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {NAV_ITEMS.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `flex items-center p-3 rounded-lg transition-all duration-200 group relative overflow-hidden ${
                                item.isCta 
                                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/20 mt-6 justify-center' 
                                    : isActive 
                                        ? 'bg-primary-50 text-primary-600 font-bold' 
                                        : 'text-secondary-900 hover:bg-gray-50 hover:text-primary-600'
                            }`
                        }
                    >
                        {({ isActive }) => (
                          <>
                            {!item.isCta && (
                                <div className={`mr-3 p-1.5 rounded-md transition-colors ${
                                    isActive ? 'bg-white text-primary-600 shadow-sm' : 'bg-gray-100 text-secondary-900 group-hover:bg-white group-hover:text-primary-600 group-hover:shadow-sm'
                                }`}>
                                    {getIcon(item.label)}
                                </div>
                            )}
                            
                            <span className={`${item.isCta ? 'flex items-center gap-2 font-bold uppercase tracking-wider text-xs' : 'text-xs font-medium'}`}>
                                {item.isCta && <Send size={16} />}
                                {item.label}
                            </span>

                             {!item.isCta && (
                                <ChevronRight size={14} className={`ml-auto transition-all ${
                                    isActive ? 'text-primary-600' : 'text-gray-300 group-hover:text-primary-400 group-hover:translate-x-1'
                                }`} />
                             )}
                          </>
                        )}
                    </NavLink>
                ))}
            </div>
            
            {/* Menu Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-100">
                <div className="flex justify-center space-x-4 mb-3">
                     <a href={`tel:${CONTACT_INFO.phones[0]}`} className="p-2 bg-white rounded-full text-secondary-900 shadow-sm hover:text-primary-600 hover:shadow-md transition-all">
                        <Phone size={16} />
                     </a>
                     <a href={`mailto:${CONTACT_INFO.emails[0]}`} className="p-2 bg-white rounded-full text-secondary-900 shadow-sm hover:text-primary-600 hover:shadow-md transition-all">
                        <Mail size={16} />
                     </a>
                </div>
                <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">
                    &copy; ISRESSM {new Date().getFullYear()}
                </p>
            </div>
        </div>
      </div>
    </>
  );
};

const MobileStickyFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] lg:hidden pb-safe">
      <div className="grid grid-cols-4 items-center h-16 px-1">
        
        {/* Home */}
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex flex-col items-center justify-center gap-1 h-full w-full transition-all duration-300 ${
              isActive ? 'text-primary-600' : 'text-gray-400 hover:text-secondary-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`p-1.5 rounded-xl transition-all ${isActive ? 'bg-primary-50' : ''}`}>
                 <Home size={22} className={isActive ? 'text-primary-600 fill-current' : ''} />
              </div>
              <span className={`text-[10px] font-medium ${isActive ? 'text-primary-600' : 'text-secondary-900'}`}>Home</span>
            </>
          )}
        </NavLink>

        {/* Programmes */}
        <NavLink 
          to="/programs" 
          className={({ isActive }) => 
            `flex flex-col items-center justify-center gap-1 h-full w-full transition-all duration-300 ${
              isActive ? 'text-primary-600' : 'text-gray-400 hover:text-secondary-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
               <div className={`p-1.5 rounded-xl transition-all ${isActive ? 'bg-primary-50' : ''}`}>
                 <BookOpen size={22} className={isActive ? 'text-primary-600 fill-current' : ''} />
               </div>
              <span className={`text-[10px] font-medium ${isActive ? 'text-primary-600' : 'text-secondary-900'}`}>Programmes</span>
            </>
          )}
        </NavLink>

        {/* Apply */}
        <NavLink 
          to="/apply" 
          className={({ isActive }) => 
            `flex flex-col items-center justify-center gap-1 h-full w-full transition-all duration-300 ${
              isActive ? 'text-primary-600' : 'text-gray-400 hover:text-secondary-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
               <div className={`p-1.5 rounded-xl transition-all ${isActive ? 'bg-primary-50' : ''}`}>
                  <Send size={22} className={isActive ? 'text-primary-600 fill-current' : ''} />
               </div>
              <span className={`text-[10px] font-bold ${isActive ? 'text-primary-600' : 'text-secondary-900'}`}>Apply</span>
            </>
          )}
        </NavLink>

        {/* Whatsapp - Uses Primary Accent Color #B3660C */}
        <a 
          href={`https://wa.me/${CONTACT_INFO.phones[0].replace(/\+/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 h-full w-full text-gray-400 hover:text-primary-600 transition-all duration-300 group"
        >
          <div className="p-1.5 rounded-xl group-hover:bg-primary-50 transition-all">
             <MessageCircle size={22} className="text-secondary-900 group-hover:text-primary-600" />
          </div>
          <span className="text-[10px] font-bold text-secondary-900 group-hover:text-primary-600">Whatsapp</span>
        </a>

      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-gray-300 mb-16 lg:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <img 
                src="https://i.ibb.co/5hFxQ1KB/logo.png" 
                alt="ISRESSM Logo" 
                className="h-16 lg:h-20 w-auto object-contain" 
              />
              <span className="text-brand-gold">ISRESSM</span>
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              Building Knowledge. Enhancing Safety. Protecting the Environment.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.filter(i => !i.isCta).map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className="text-sm hover:text-primary-600 hover:pl-1 transition-all flex items-center text-gray-400">
                    <ChevronRight size={14} className="mr-1" /> {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-600 mr-2 mt-1 shrink-0" />
                <span className="text-gray-400">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-primary-600 mr-2 mt-1 shrink-0" />
                <div className="flex flex-col text-gray-400">
                  {CONTACT_INFO.phones.slice(0, 2).map(phone => (
                    <span key={phone}>{phone}</span>
                  ))}
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-primary-600 mr-2 mt-1 shrink-0" />
                <span className="text-gray-400">{CONTACT_INFO.emails[0]}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Certifications</h3>
            <p className="text-sm mb-4 text-gray-400">
              Enhance your career with our globally competitive professional courses and workshops.
            </p>
            <NavLink to="/programs" className="inline-block bg-primary-600 text-white px-4 py-2 rounded text-sm hover:bg-primary-700 transition-colors">
              View Programs
            </NavLink>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ISRESSM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      {/* Added padding bottom for mobile to account for sticky footer */}
      <main className="flex-grow pb-16 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyFooter />
    </div>
  );
};

export default Layout;