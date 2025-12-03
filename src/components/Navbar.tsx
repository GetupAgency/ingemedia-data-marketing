import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Import du logo React SVG par défaut car nous n'avons pas le logo personnalisé
import logo from '../assets/react.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Surveiller le défilement pour ajouter un effet de fond à la navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Liens de navigation améliorés avec des icônes
  const navLinks = [
    { 
      to: '/', 
      label: 'Accueil',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      to: '/learn', 
      label: 'Apprendre',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      to: '/tutorials',
      label: 'Tutoriels',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14L20.5 14M12 14L15 17M12 14L15 11M12 4L3.5 4M12 4L9 7M12 4L9 1M3.5 10H5.25C5.66421 10 6 10.3358 6 10.75V19.25C6 19.6642 5.66421 20 5.25 20H3.5C3.08579 20 2.75 19.6642 2.75 19.25V10.75C2.75 10.3358 3.08579 10 3.5 10ZM11 10H12.75C13.1642 10 13.5 10.3358 13.5 10.75V19.25C13.5 19.6642 13.1642 20 12.75 20H11C10.5858 20 10.25 19.6642 10.25 19.25V10.75C10.25 10.3358 10.5858 10 11 10ZM18.5 10H20.25C20.6642 10 21 10.3358 21 10.75V19.25C21 19.6642 20.6642 20 20.25 20H18.5C18.0858 20 17.75 19.6642 17.75 19.25V10.75C17.75 10.3358 18.0858 10 18.5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      to: '/quizzes', 
      label: 'Quiz',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 9H9.01M12 9H12.01M15 9H15.01M9 13H9.01M12 13H12.01M15 13H15.01M9 17H9.01M12 17H12.01M15 17H15.01M7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V7C5 5.89543 5.89543 5 7 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      to: '/tools', 
      label: 'Outils',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 6H13.5M10.5 18H13.5M6 10.5V13.5M18 10.5V13.5M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      to: '/glossary', 
      label: 'Lexique',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];
  
  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-white/70 shadow-md backdrop-blur-md read-the-docs'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center py-2" onClick={closeMenu}>
              <img src={logo} alt="Logo Data Marketing" className="h-8 w-auto mr-2" />
              <span className={`font-display font-bold text-xl ${scrolled ? 'text-indigo-800' : 'text-indigo-800'}`}>
                <span className="text-orange-500">CMD</span> Ingemedia
              </span>
            </Link>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1 flex-wrap justify-end">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center px-2 py-2 rounded-md text-sm font-medium group transition-colors duration-200 relative ${
                  location.pathname === link.to
                    ? 'text-indigo-600 bg-indigo-50'
                    : scrolled ? 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50' : 'text-indigo-800 hover:text-indigo-800 hover:bg-indigo-700/50'
                }`}
              >
                <span className="flex items-center">
                  {link.icon && <span className="mr-1">{link.icon}</span>}
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
          
          {/* Bouton espace étudiant */}
          <div className="hidden md:flex items-center ml-2">
            <Link 
              to="/student-space"
              className="flex items-center px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium shadow-sm whitespace-nowrap"
            >
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19.128C15.853 19.3757 16.7368 19.5009 17.625 19.5C19.0534 19.5021 20.4633 19.1764 21.746 18.548C21.7421 15.1125 19.7922 12.1256 16.8555 11.0208C17.5923 10.0417 17.9999 8.83244 18 7.5C18 4.6005 15.7649 2.18493 12.9438 2.01266C11.1812 1.90682 9.55035 2.67163 8.47299 4.00244C7.39563 5.33325 7.00006 7.08769 7.35512 8.80092C7.71017 10.5141 8.76072 11.9716 10.2364 12.7983C7.29289 13.8937 5.33541 16.8971 5.33541 20.3469C5.33541 20.4716 5.34663 20.595 5.36776 20.7167C6.6467 21.3402 8.0495 21.6663 9.47059 21.6669C10.3991 21.6666 11.3221 21.5274 12.2083 21.253" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.7142 14.5C15.8357 14.5 16.8274 15.0795 17.4077 16.0028C18.0507 17.0471 18.123 18.3466 17.6743 19.4826" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Espace Étudiant
            </Link>
          </div>
          
          {/* Mobile nav button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
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
      
      {/* Mobile nav dropdown */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg rounded-b-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center px-3 py-2 rounded-md text-base font-medium relative ${
                location.pathname === link.to
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
              }`}
              onClick={closeMenu}
            >
              <span className="flex items-center">
                {link.icon && <span className="mr-2">{link.icon}</span>}
                {link.label}
              </span>
            </Link>
          ))}
          
          <Link
            to="/student-space"
            className="flex items-center w-full px-3 py-2 mt-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            onClick={closeMenu}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19.128C15.853 19.3757 16.7368 19.5009 17.625 19.5C19.0534 19.5021 20.4633 19.1764 21.746 18.548C21.7421 15.1125 19.7922 12.1256 16.8555 11.0208C17.5923 10.0417 17.9999 8.83244 18 7.5C18 4.6005 15.7649 2.18493 12.9438 2.01266C11.1812 1.90682 9.55035 2.67163 8.47299 4.00244C7.39563 5.33325 7.00006 7.08769 7.35512 8.80092C7.71017 10.5141 8.76072 11.9716 10.2364 12.7983C7.29289 13.8937 5.33541 16.8971 5.33541 20.3469C5.33541 20.4716 5.34663 20.595 5.36776 20.7167C6.6467 21.3402 8.0495 21.6663 9.47059 21.6669C10.3991 21.6666 11.3221 21.5274 12.2083 21.253" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.7142 14.5C15.8357 14.5 16.8274 15.0795 17.4077 16.0028C18.0507 17.0471 18.123 18.3466 17.6743 19.4826" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Espace Étudiant
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 