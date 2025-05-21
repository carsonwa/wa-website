'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' && !activeSection;
    }
    if (href === '/contact') {
      return pathname === '/contact';
    }
    if (href.startsWith('#')) {
      return activeSection === href.substring(1);
    }
    return false;
  };

  const getLinkClasses = (href: string) => {
    const baseClasses = "nav-link inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";
    const activeClasses = "border-indigo-500 text-gray-900";
    const inactiveClasses = "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700";
    
    return `${baseClasses} ${isActive(href) ? activeClasses : inactiveClasses}`;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      // If we're on the contact page, first navigate to home
      if (pathname === '/contact') {
        router.push('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // If we're already on home, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // For page navigation, use Next.js router
      router.push(href);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Wealthy Affiliate SVG Logo */}
              <svg className="h-8 w-auto" viewBox="0 10 40 20" width="40px" height="24px">
                <path d="M3.87284225,11.0508922 L3.87284225,22.8476101 C3.87284225,22.8476101 4.73976477,24.4268902 6.85288271,24.4268903 C8.96600065,24.4268903 9.76107955,22.8476098 9.76107955,22.8476098 L9.76107955,22.8476098 L9.76107946,11.0508922 L13.6758483,11.0508922 L13.6758483,22.8476096 C13.6758483,22.8476096 14.2820432,24.4268908 16.628079,24.4268903 C18.9741149,24.4268898 19.6393438,22.8476096 19.6393438,22.8476096 L19.6393438,22.8476096 L19.6393438,18.4799515 L23.3735128,18.4799515 L23.3735128,18.4799515 L23.3735133,23.4299957 C23.3735128,25.7512885 20.1323029,27.5770265 16.628079,27.5770275 C14.5060733,27.5770282 12.3776369,26.3681307 11.6163631,26.3681312 C10.8550892,26.3681317 10.2732033,27.6034284 6.85288271,27.5770275 C0.342644043,27.5267761 0.0171321975,23.3037027 0.000856609645,22.881521 L6.03961325e-14,11.0508922 L3.87284225,11.0508922 Z M19.7111838,11.1167243 C19.7111838,11.1167243 22.373803,10.5801817 26.6891388,11.8077737 C33.9607062,13.8763306 39.400906,26.6569775 39.6858791,27.337141 L39.6976245,27.3653275 L34.9513779,27.3653275 C34.9513779,27.3653275 33.5331158,21.2215333 28.2981971,16.3798598 C26.0263824,14.278703 23.3465438,14.5700984 23.3465438,14.5700984 L23.3465438,14.5700984 L23.3465439,16.9097978 L19.7111838,16.9097977 Z M26.9469434,18.2699506 C28.1504695,18.2699506 29.1261201,19.2313602 29.1261201,20.417319 C29.1261201,21.6032779 28.1504695,22.5646875 26.9469434,22.5646875 C25.7434173,22.5646875 24.7677666,21.6032779 24.7677666,20.417319 C24.7677666,19.2313602 25.7434173,18.2699506 26.9469434,18.2699506 Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="/" className={getLinkClasses('/')} onClick={(e) => handleNavClick(e, '/')}>
                Home
              </a>
              <a href="#how-it-works" className={getLinkClasses('#how-it-works')} onClick={(e) => handleNavClick(e, '#how-it-works')}>
                How It Works
              </a>
              <a href="#tools" className={getLinkClasses('#tools')} onClick={(e) => handleNavClick(e, '#tools')}>
                Tools
              </a>
              <a href="#platform" className={getLinkClasses('#platform')} onClick={(e) => handleNavClick(e, '#platform')}>
                Platform
              </a>
              <a href="#support" className={getLinkClasses('#support')} onClick={(e) => handleNavClick(e, '#support')}>
                Support
              </a>
              <a href="#testimonials" className={getLinkClasses('#testimonials')} onClick={(e) => handleNavClick(e, '#testimonials')}>
                Stories
              </a>
              <a href="#faqs" className={getLinkClasses('#faqs')} onClick={(e) => handleNavClick(e, '#faqs')}>
                FAQs
              </a>
              <a href="/contact" className={getLinkClasses('/contact')} onClick={(e) => handleNavClick(e, '/contact')}>
                Contact
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a
              href="https://my.wealthyaffiliate.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Member Login
            </a>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <a href="/" className={`nav-link block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('/') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}`} onClick={(e) => handleNavClick(e, '/')}>
            Home
          </a>
          <a href="#how-it-works" className={`nav-link block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('#how-it-works') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}`} onClick={(e) => handleNavClick(e, '#how-it-works')}>
            How It Works
          </a>
          <a href="#tools" className={`nav-link block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('#tools') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}`} onClick={(e) => handleNavClick(e, '#tools')}>
            Tools
          </a>
          <a href="#platform" className={`nav-link block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('#platform') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}`} onClick={(e) => handleNavClick(e, '#platform')}>
            Platform
          </a>
          <a href="#support" className={`nav-link block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('#support') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}`} onClick={(e) => handleNavClick(e, '#support')}>
            Support
          </a>
          <a href="#testimonials" className={`nav-link block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('#testimonials') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}`} onClick={(e) => handleNavClick(e, '#testimonials')}>
            Stories
          </a>
          <a href="#faqs" className={`nav-link block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('#faqs') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}`} onClick={(e) => handleNavClick(e, '#faqs')}>
            FAQs
          </a>
          <a href="/contact" className={`nav-link block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('/contact') ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}`} onClick={(e) => handleNavClick(e, '/contact')}>
            Contact
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <a
              href="https://my.wealthyaffiliate.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full text-center"
            >
              Member Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 