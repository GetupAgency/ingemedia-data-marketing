import React from 'react';
import { Link } from 'react-router-dom';
import RankTrackerChart from '../components/RankTrackerChart';

/**
 * Page d'accueil de l'application Data Marketing
 * 
 * Cette application est conçue comme un outil éducatif privé pour les étudiants
 * en marketing. Elle permet d'apprendre l'analyse de données marketing à travers
 * des tutoriels interactifs, des outils d'analyse et des quiz.
 * 
 * @component
 * @returns {JSX.Element} - La page d'accueil de l'application
 */
const Home: React.FC = () => {
  // Définition des parcours d'apprentissage disponibles dans l'application
  const learningPaths = [
    {
      title: 'Fondamentaux du Data Marketing',
      description: 'Comprendre les bases de l\'analyse de données marketing et son importance dans la stratégie digitale.',
      icon: (
        <svg className="w-12 h-12 text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: '/learn/fundamentals'
    },
    {
      title: 'Analyse de données CSV',
      description: 'Apprendre à importer, analyser et interpréter des données marketing provenant de fichiers CSV.',
      icon: (
        <svg className="w-12 h-12 text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 14V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H12M20 14H12M20 14L17 11M20 14L17 17M8 9H16M8 13H10M8 17H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: '/csv-analysis'
    },
    {
      title: 'Google Analytics',
      description: 'Maîtriser l\'utilisation de Google Analytics pour suivre et analyser le comportement des utilisateurs.',
      icon: (
        <svg className="w-12 h-12 text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: '/google-analytics'
    },
    {
      title: 'Tests et Défis',
      description: 'Mettre en pratique vos connaissances avec des quiz et des exercices pratiques.',
      icon: (
        <svg className="w-12 h-12 text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: '/quiz'
    }
  ];

  // Fonctionnalités principales de l'application
  const features = [
    {
      title: 'Analyse CSV interactive',
      description: 'Importez vos fichiers de données marketing et visualisez les résultats instantanément',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Intégration Google Analytics',
      description: 'Connectez-vous à vos comptes pour analyser vos données en temps réel',
      color: 'bg-amber-50 border-amber-200'
    },
    {
      title: 'Quiz et Évaluations',
      description: 'Testez vos connaissances et suivez votre progression',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Lexique Data Marketing',
      description: 'Accédez à une base de connaissances complète des termes techniques',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Outils d\'exploration',
      description: 'Découvrez et expérimentez avec différents outils d\'analyse',
      color: 'bg-pink-50 border-pink-200'
    },
    {
      title: 'Environnement d\'apprentissage',
      description: 'Apprenez à votre rythme dans un cadre éducatif interactif',
      color: 'bg-indigo-50 border-indigo-200'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 
        Section Hero
        Cette section présente le titre principal et les boutons d'action
        La partie pt-28/pt-36 crée l'espace nécessaire pour éviter 
        la superposition avec la navbar fixe
      */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-700 opacity-90 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Apprenez le <span className="text-orange-400">Data Marketing</span> par la pratique
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-lg mx-auto md:mx-0">
                Plateforme éducative pour les étudiants en marketing. Maîtrisez l'analyse de données marketing à travers des exercices pratiques et interactifs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/learn" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition shadow-lg hover:shadow-xl flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3V7M3 5H7M6 17V21M4 19H8M13 3L15.2857 9.85714L21 12L15.2857 14.1429L13 21L10.7143 14.1429L5 12L10.7143 9.85714L13 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Commencer à apprendre
                </Link>
                <Link to="/tools" className="px-6 py-3 bg-white hover:bg-gray-100 text-indigo-700 font-medium rounded-lg transition flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7519 11.1679L11.5547 9.03647M11.5547 9.03647L12.6751 5.50679M11.5547 9.03647L9.34399 12.6059M9.55399 8.01679L7.52308 4.65099L3.92767 5.59384L4.9927 9.14384L9.55399 8.01679ZM18.0473 8.62329L20.0782 5.25749L16.4818 4.23749L14.3977 7.69299L18.0473 8.62329ZM19.1063 16.2503L18.0413 12.7003L14.4449 13.7203L15.6166 17.1926L19.1063 16.2503ZM5.9694 16.6358L9.52948 15.5153L8.46566 12.0648L4.90559 13.1853L5.9694 16.6358Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Explorer les outils
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Data Marketing Dashboard" 
                className="rounded-xl shadow-2xl w-full max-w-md mx-auto" 
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      </section>

      {/* 
        Section du graphique d'introduction
        Présente un exemple concret d'analyse de données marketing
        pour introduire la méthodologie d'analyse
      */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Exemple d'analyse : Données SEO réelles</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Découvrez comment analyser des données marketing avec cet exemple basé sur le suivi de positions SEO. 
              Ce graphique vous montre la méthodologie que vous apprendrez à maîtriser.
            </p>
          </div>
          <RankTrackerChart />
          <div className="mt-8 text-center">
            <Link 
              to="/csv-analysis" 
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19C-2 19 -2 5 9 5C20 5 20 19 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12L15 6L21 12L15 18L9 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Analyser vos propres données
            </Link>
          </div>
        </div>
      </section>

      {/* 
        Section des parcours d'apprentissage
        Présente les différentes voies d'apprentissage disponibles
        dans l'application sous forme de cartes cliquables
      */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mx-auto">Parcours d'apprentissage</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Programme structuré pour maîtriser tous les aspects du Data Marketing, de la théorie à la pratique.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningPaths.map((path, index) => (
              <Link to={path.link} key={index} className="card hover:translate-y-[-8px] transition-transform duration-300">
                <div className="p-6">
                  <div className="mb-4">{path.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{path.title}</h3>
                  <p className="text-gray-600 mb-4">{path.description}</p>
                  <span className="text-indigo-600 font-medium flex items-center">
                    Commencer
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 
        Section des fonctionnalités
        Présente les outils et fonctionnalités disponibles dans l'application
        Chaque carte a une couleur de bordure différente selon le type de fonctionnalité
      */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Fonctionnalités principales</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Notre application combine des outils d'analyse puissants et des ressources pédagogiques pour une expérience d'apprentissage complète.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className={`card p-6 border-l-4 ${feature.color}`}>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        Section d'appel à l'action (CTA)
        Invite les étudiants à commencer leur parcours d'apprentissage
      */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Commencez à explorer les données marketing</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Accédez aux tutoriels guidés et aux outils d'analyse pour améliorer vos compétences.
          </p>
          <Link to="/tutorials" className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition shadow-lg hover:shadow-xl text-lg">
            Accéder aux tutoriels
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;