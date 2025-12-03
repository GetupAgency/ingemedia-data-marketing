import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='53' cy='7' r='2'/%3E%3Ccircle cx='30' cy='7' r='2'/%3E%3Ccircle cx='7' cy='30' r='2'/%3E%3Ccircle cx='53' cy='30' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='7' cy='53' r='2'/%3E%3Ccircle cx='53' cy='53' r='2'/%3E%3Ccircle cx='30' cy='53' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative">
        {/* Section principale */}
        <div className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Marque et mission */}
              <div className="col-span-1 lg:col-span-5">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="font-bold text-2xl">
                    <span className="text-orange-500">CMD</span> Ingemedia
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  Plateforme d'apprentissage data marketing
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Formation interactive complète pour maîtriser le data marketing moderne. 
                  De la théorie aux outils professionnels, développez les compétences 
                  recherchées par les entreprises.
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                    <div className="text-2xl font-bold text-orange-500">6</div>
                    <div className="text-xs text-slate-400">Modules</div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                    <div className="text-2xl font-bold text-blue-400">58</div>
                    <div className="text-xs text-slate-400">Questions</div>
                  </div>
                </div>
              </div>
              
              {/* Navigation organisée */}
              <div className="col-span-1 lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* Apprentissage */}
                  <div>
                    <h4 className="font-semibold text-white mb-6 flex items-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      Apprentissage
                    </h4>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/learn" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                          <svg className="w-4 h-4 mr-3 text-indigo-400 group-hover:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.332 18.477 18.747 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          <span className="text-sm">Formation interactive</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/tutorials" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                          <svg className="w-4 h-4 mr-3 text-green-400 group-hover:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                          <span className="text-sm">Tutoriels pratiques</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/quizzes" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                          <svg className="w-4 h-4 mr-3 text-orange-400 group-hover:text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">Quiz adaptatifs</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/student-space" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                          <svg className="w-4 h-4 mr-3 text-purple-400 group-hover:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          <span className="text-sm">Espace étudiant</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Ressources */}
                  <div>
                    <h4 className="font-semibold text-white mb-6 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Ressources
                    </h4>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/tools" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                          <svg className="w-4 h-4 mr-3 text-blue-400 group-hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          </svg>
                          <span className="text-sm">Écosystème d'outils</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/glossary" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                          <svg className="w-4 h-4 mr-3 text-yellow-400 group-hover:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.332 18.477 18.747 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          <span className="text-sm">Lexique complet</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                          <svg className="w-4 h-4 mr-3 text-cyan-400 group-hover:text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" />
                          </svg>
                          <span className="text-sm">Dashboard analytique</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Informations */}
                  <div>
                    <h4 className="font-semibold text-white mb-6 flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Informations
                    </h4>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/about" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                          <svg className="w-4 h-4 mr-3 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">À propos du projet</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                          <svg className="w-4 h-4 mr-3 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm">Contact</span>
                        </Link>
                      </li>
                    </ul>
                    
                    {/* Badges de compétences */}
                    <div className="mt-8 space-y-3">
                      <h5 className="text-sm font-medium text-slate-300">Compétences développées</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-indigo-900 text-indigo-200 rounded-full text-xs">Google Analytics</span>
                        <span className="px-2 py-1 bg-green-900 text-green-200 rounded-full text-xs">KPIs Marketing</span>
                        <span className="px-2 py-1 bg-purple-900 text-purple-200 rounded-full text-xs">Data Viz</span>
                        <span className="px-2 py-1 bg-orange-900 text-orange-200 rounded-full text-xs">ROI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action section */}
        <div className="border-t border-slate-700 bg-slate-800/50 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Prêt à maîtriser le data marketing ?
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Rejoignez des milliers d'étudiants qui transforment les données en décisions business.
                </p>
              </div>
              <div className="mt-6 lg:mt-0 lg:shrink-0">
                <Link 
                  to="/learn"
                  className="inline-flex items-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  Commencer la formation
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-slate-700">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex items-center space-x-6">
                <p className="text-sm text-slate-400">
                  © {currentYear} Adrien Cerdan
                </p>
                <span className="hidden md:block text-slate-600">•</span>
                <span className="text-xs text-slate-500">
                  Plateforme pédagogique data marketing
                </span>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <span className="text-xs text-slate-500">
                  Conçu pour l'excellence pédagogique
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-slate-400">Version en cours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;