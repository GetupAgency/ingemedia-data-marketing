import { Link } from 'react-router-dom';
import {
  Terminal,
  BookOpen,
  PlayCircle,
  Wrench,
  BookMarked,
  Github,
  Linkedin,
  Mail,
  Code,
  Cpu,
  Database,
  Zap
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/learn', label: 'Formation', icon: BookOpen },
    { to: '/tutorials', label: 'Tutoriels', icon: PlayCircle },
    { to: '/tools', label: 'Outils', icon: Wrench },
    { to: '/glossary', label: 'Lexique', icon: BookMarked },
  ];

  return (
    <footer className="relative bg-dark-900 border-t border-dark-700/50 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-400/30 to-transparent" />

      {/* Decorative circuit lines */}
      <div className="absolute top-0 left-10 w-px h-20 bg-gradient-to-b from-cyber-400/20 to-transparent" />
      <div className="absolute top-0 right-10 w-px h-32 bg-gradient-to-b from-neon-purple/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyber-400 to-neon-purple rounded-lg flex items-center justify-center mr-3 group-hover:shadow-neon transition-all duration-300">
                <Terminal className="w-5 h-5 text-dark-900" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono font-bold text-lg text-gradient">
                  &lt;Genius/&gt;
                </span>
                <span className="text-xs text-dark-400 font-mono tracking-wider">
                  DATA_MARKETING
                </span>
              </div>
            </Link>

            <p className="text-dark-400 text-sm leading-relaxed max-w-xs">
              Plateforme pédagogique pour maîtriser l'art du data marketing.
              <span className="text-cyber-400 font-mono"> while(true) {'{'} learn(); {'}'}</span>
            </p>

            {/* Tech Stack Icons */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1 text-xs text-dark-500">
                <Code className="w-3 h-3 text-neon-green" />
                <span className="font-mono">React</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-dark-500">
                <Database className="w-3 h-3 text-cyber-400" />
                <span className="font-mono">TypeScript</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-dark-500">
                <Zap className="w-3 h-3 text-neon-yellow" />
                <span className="font-mono">Vite</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono font-semibold text-dark-200 mb-4 flex items-center gap-2">
              <span className="text-cyber-400">//</span> Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => {
                const Icon = link.icon;
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="flex items-center text-dark-400 hover:text-cyber-400 transition-colors group"
                    >
                      <Icon className="w-4 h-4 mr-2 text-dark-600 group-hover:text-cyber-400 transition-colors" />
                      <span className="font-mono text-sm">{link.label}</span>
                      <span className="ml-auto text-dark-700 group-hover:text-cyber-400 transition-colors font-mono text-xs">
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Terminal Style Info */}
          <div>
            <h3 className="font-mono font-semibold text-dark-200 mb-4 flex items-center gap-2">
              <span className="text-neon-green">//</span> System.info
            </h3>

            <div className="bg-dark-950 rounded-lg border border-dark-700 p-4 font-mono text-xs">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-dark-700">
                <div className="w-2.5 h-2.5 rounded-full bg-neon-pink" />
                <div className="w-2.5 h-2.5 rounded-full bg-neon-yellow" />
                <div className="w-2.5 h-2.5 rounded-full bg-neon-green" />
                <span className="text-dark-500 ml-2">terminal</span>
              </div>

              <div className="space-y-1.5 text-dark-400">
                <p><span className="text-neon-green">$</span> version --check</p>
                <p className="text-dark-500 pl-2">→ v2.0.0 <span className="text-cyber-400">"Cyber Edition"</span></p>

                <p><span className="text-neon-green">$</span> last-update</p>
                <p className="text-dark-500 pl-2">→ 19/01/2026</p>

                <p><span className="text-neon-green">$</span> author</p>
                <p className="text-dark-500 pl-2">→ Adrien Cerdan @ Ingemedia</p>

                <p><span className="text-neon-green">$</span> status</p>
                <p className="pl-2">
                  <span className="text-neon-green">● ONLINE</span>
                  <span className="animate-pulse"> _</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-2 text-dark-500 text-sm font-mono">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyber-400" />
                <span>© {currentYear} Genius Data Marketing</span>
              </div>
              <span className="hidden md:inline text-dark-700">|</span>
              <span className="text-dark-400">
                Conçu par <span className="text-cyber-400">Adrien Cerdan</span> pour les étudiants <span className="text-neon-purple">Ingemedia</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@cmd-marketing.fr"
                className="p-2 rounded-lg bg-dark-800/50 text-dark-400 hover:text-cyber-400 hover:bg-dark-800 transition-all duration-200 hover:shadow-neon"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-800/50 text-dark-400 hover:text-cyber-400 hover:bg-dark-800 transition-all duration-200 hover:shadow-neon"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-800/50 text-dark-400 hover:text-cyber-400 hover:bg-dark-800 transition-all duration-200 hover:shadow-neon"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Easter Egg - Hidden Message */}
        <div className="mt-8 text-center">
          <p className="text-dark-800 text-xs font-mono hover:text-dark-600 transition-colors cursor-default select-none">
            /* Ctrl+Shift+I pour voir la magie opérer */
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
