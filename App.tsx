import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Programs from './pages/Programs';
import Memberships from './pages/Memberships';
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import ServiceBooking from './pages/ServiceBooking';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="programs" element={<Programs />} />
          <Route path="memberships" element={<Memberships />} />
          <Route path="apply" element={<Apply />} />
          <Route path="service-booking" element={<ServiceBooking />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;