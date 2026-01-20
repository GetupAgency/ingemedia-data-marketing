import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  BookOpen,
  PlayCircle,
  HelpCircle,
  Wrench,
  BookMarked,
  Trophy,
  GraduationCap,
  Menu,
  X,
  Terminal,
  Cpu
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const location = useLocation();

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

  // Easter egg : Triple clic sur le logo/titre pour accéder à l'examen
  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);

    setTimeout(() => {
      setClickCount(0);
    }, 2000);
  };

  useEffect(() => {
    if (clickCount === 3) {
      window.location.href = '/exam-2025-ingemedia';
    }
  }, [clickCount]);

  const navLinks = [
    { to: '/', label: 'Accueil', icon: Home },
    { to: '/learn', label: 'Apprendre', icon: BookOpen },
    { to: '/tutorials', label: 'Tutoriels', icon: PlayCircle },
    { to: '/quizzes', label: 'Quiz', icon: HelpCircle },
    { to: '/tools', label: 'Outils', icon: Wrench },
    { to: '/glossary', label: 'Lexique', icon: BookMarked },
    { to: '/olympiades', label: 'Olympiades', icon: Trophy }
  ];

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-dark-900/95 backdrop-blur-xl border-b border-cyber-400/20 shadow-lg shadow-cyber-400/5'
        : 'bg-dark-900/80 backdrop-blur-lg border-b border-dark-700/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center py-2 group"
              onClick={(e) => {
                closeMenu();
                handleLogoClick();
              }}
            >
              {/* Logo Icon avec effet néon */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyber-400 to-neon-purple rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-all duration-300 shadow-neon">
                  <Terminal className="w-5 h-5 text-dark-900" />
                </div>
                {/* Pulse effect */}
                <div className="absolute inset-0 w-10 h-10 bg-cyber-400/30 rounded-lg animate-ping opacity-0 group-hover:opacity-100" />
              </div>

              <div className="flex flex-col">
                <span className="font-mono font-bold text-lg leading-tight text-gradient">
                  &lt;Genius/&gt;
                </span>
                <span className="text-xs text-dark-400 font-mono leading-tight tracking-wider">
                  DATA_MARKETING
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map(link => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative flex items-center px-4 py-2 rounded-lg text-sm font-medium group transition-all duration-200 ${
                    isActive
                      ? 'text-cyber-400 bg-cyber-400/10'
                      : 'text-dark-300 hover:text-cyber-400 hover:bg-dark-800/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 mr-2 transition-all duration-200 ${
                    isActive ? 'text-cyber-400' : 'text-dark-500 group-hover:text-cyber-400'
                  }`} />
                  <span className="font-mono">{link.label}</span>

                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyber-400 rounded-full shadow-neon" />
                  )}

                  {/* Hover underline effect */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyber-400 to-neon-purple rounded-full transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Bouton Espace Étudiant */}
          <div className="hidden lg:flex items-center ml-4">
            <Link
              to="/student-space"
              className="group relative flex items-center px-5 py-2.5 overflow-hidden rounded-lg font-semibold text-sm transition-all duration-300"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-500 to-neon-purple opacity-100 group-hover:opacity-90 transition-opacity" />

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              {/* Content */}
              <div className="relative flex items-center text-dark-900">
                <GraduationCap className="w-4 h-4 mr-2" />
                <span className="font-mono">Espace_Étudiant</span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-dark-300 hover:text-cyber-400 hover:bg-dark-800/50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen
          ? 'max-h-screen opacity-100'
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-dark-900/98 backdrop-blur-xl border-t border-dark-700/50 px-4 pt-4 pb-6 space-y-2">
          {navLinks.map(link => {
            const Icon = link.icon;
            const isActive = location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-cyber-400 bg-cyber-400/10 border-l-2 border-cyber-400'
                    : 'text-dark-300 hover:text-cyber-400 hover:bg-dark-800/50'
                }`}
                onClick={closeMenu}
              >
                <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-cyber-400' : 'text-dark-500'}`} />
                <span className="font-mono">{link.label}</span>
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <Link
            to="/student-space"
            className="flex items-center justify-center w-full mt-4 px-4 py-3 bg-gradient-to-r from-cyber-500 to-neon-purple text-dark-900 rounded-lg font-semibold transition-all duration-200 hover:shadow-neon"
            onClick={closeMenu}
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            <span className="font-mono">Espace_Étudiant</span>
          </Link>
        </div>
      </div>

      {/* Ligne décorative animée en bas de la navbar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-400/50 to-transparent" />
    </nav>
  );
};

export default Navbar;
