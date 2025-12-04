const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Section principale épurée */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Logo et titre */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                CMD Ingemedia
              </span>
              <div className="text-xs text-gray-500">Plateforme Data Marketing</div>
            </div>
          </div>

          {/* Navigation simple */}
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <a href="/learn" className="hover:text-indigo-600 transition-colors">Formation</a>
            <a href="/tutorials" className="hover:text-indigo-600 transition-colors">Tutoriels</a>
            <a href="/tools" className="hover:text-indigo-600 transition-colors">Outils</a>
            <a href="/glossary" className="hover:text-indigo-600 transition-colors">Lexique</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © 2024 Adrien Cerdan
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-200 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 space-y-2 md:space-y-0">
            <div>
              Plateforme pédagogique pour l'apprentissage du data marketing moderne
            </div>
            <div className="flex items-center space-x-4">
              <span>V1.21</span>
              <span>•</span>
              <span>Dernier update : 04/12/2025 14h14</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;