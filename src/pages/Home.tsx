import React from 'react';
import { Link } from 'react-router-dom';

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
      title: 'Formation complète',
      description: 'Suivez un parcours structuré et progressif pour maîtriser toutes les compétences du data marketing.',
      icon: (
        <svg className="w-12 h-12 text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: '/learn'
    },
    {
      title: 'Testez vos connaissances',
      description: 'Des quiz interactifs pour valider votre progression et identifier vos points forts.',
      icon: (
        <svg className="w-12 h-12 text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: '/quizzes'
    },
    {
      title: 'Outils d\'analyse',
      description: 'Manipulez de vraies données avec nos outils d\'analyse professionnels.',
      icon: (
        <svg className="w-12 h-12 text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 14V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H12M20 14H12M20 14L17 11M20 14L17 17M8 9H16M8 13H10M8 17H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: '/tools'
    },
    {
      title: 'Lexique',
      description: 'Tous les termes techniques expliqués simplement pour ne plus être perdu.',
      icon: (
        <svg className="w-12 h-12 text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: '/glossary'
    }
  ];

  // Fonctionnalités principales de l'application
  const features = [
    {
      title: 'Une progression à votre rythme',
      description: 'Apprenez quand vous voulez, sans pression. Chaque module est conçu pour être accessible et pratique.',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Des exercices concrets',
      description: 'Pas de théorie abstraite ici ! Vous manipulerez de vraies données pour comprendre comment ça marche vraiment.',
      color: 'bg-amber-50 border-amber-200'
    },
    {
      title: 'Des quiz pour valider',
      description: 'Vérifiez que vous avez bien compris avec des quiz qui vous donnent un retour immédiat (et bienveillant).',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Un lexique toujours dispo',
      description: 'Un terme vous échappe ? Pas de panique, notre lexique est là pour traduire le jargon marketing en français simple.',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Des outils pros à portée de clic',
      description: 'Découvrez les mêmes outils que les pros du marketing utilisent au quotidien.',
      color: 'bg-pink-50 border-pink-200'
    },
    {
      title: 'Un environnement sécurisé',
      description: 'Ici, vous êtes libre d\'expérimenter et de vous tromper. C\'est comme ça qu\'on apprend le mieux !',
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
                Bienvenue sur votre <span className="text-orange-400">Plateforme Data Marketing</span>
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-lg mx-auto md:mx-0">
                Un espace pensé pour vous accompagner dans votre apprentissage du marketing digital. 
                Ici, vous apprendrez à analyser des données comme un pro, à votre rythme, avec des exercices concrets et des outils pratiques.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/learn" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition shadow-lg hover:shadow-xl flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3V7M3 5H7M6 17V21M4 19H8M13 3L15.2857 9.85714L21 12L15.2857 14.1429L13 21L10.7143 14.1429L5 12L10.7143 9.85714L13 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Commencer ma formation
                </Link>
                <Link to="/tools" className="px-6 py-3 bg-white hover:bg-gray-100 text-indigo-700 font-medium rounded-lg transition flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7519 11.1679L11.5547 9.03647M11.5547 9.03647L12.6751 5.50679M11.5547 9.03647L9.34399 12.6059M9.55399 8.01679L7.52308 4.65099L3.92767 5.59384L4.9927 9.14384L9.55399 8.01679ZM18.0473 8.62329L20.0782 5.25749L16.4818 4.23749L14.3977 7.69299L18.0473 8.62329ZM19.1063 16.2503L18.0413 12.7003L14.4449 13.7203L15.6166 17.1926L19.1063 16.2503ZM5.9694 16.6358L9.52948 15.5153L8.46566 12.0648L4.90559 13.1853L5.9694 16.6358Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Découvrir les outils
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
        Section d'introduction à la plateforme
        Explique clairement l'objectif et l'approche de la plateforme
      */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Qu'est-ce que cette plateforme ?</h2>
            <div className="text-lg text-gray-700 space-y-4 text-left">
              <p>
                Cette plateforme est votre <strong>compagnon d'apprentissage</strong> pour maîtriser le data marketing. 
                Que vous soyez débutant ou que vous souhaitiez approfondir vos connaissances, vous trouverez ici 
                des modules progressifs, des exercices pratiques et des outils concrets.
              </p>
              <p>
                <strong>Notre philosophie ?</strong> Apprendre en faisant. Pas de long discours théorique, 
                mais des mises en situation réelles avec des données marketing authentiques. 
                Vous allez comprendre comment fonctionnent Google Analytics, les fichiers CSV, 
                les KPIs... bref, tout ce dont vous aurez besoin dans votre vie professionnelle.
              </p>
              <p>
                Et surtout, <strong>pas de stress</strong> ! Vous progressez à votre rythme, vous pouvez recommencer 
                les exercices autant de fois que nécessaire, et chaque quiz vous explique pourquoi une réponse 
                est bonne ou non. On est là pour apprendre, pas pour juger. 😊
              </p>
            </div>
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
          <h2 className="section-title text-center mx-auto">Comment ça marche ?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Votre parcours d'apprentissage en 4 étapes simples. Commencez par où vous voulez, explorez à votre rythme.
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mx-auto">Ce qui vous attend ici</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
            Une plateforme pensée pour vous faciliter la vie. Tout est là pour que vous appreniez sereinement et efficacement.
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
          <h2 className="text-3xl font-bold mb-6">Prêt à devenir un pro du data marketing ?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Lancez-vous ! La première étape est souvent la plus simple. Et vous allez voir, c'est plutôt cool.
          </p>
          <Link to="/learn" className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition shadow-lg hover:shadow-xl text-lg">
            C'est parti ! 🚀
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;