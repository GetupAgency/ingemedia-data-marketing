const Services = () => {
  const services = [
    {
      id: 1,
      title: "SEO & Référencement",
      description: "Optimisez votre visibilité sur les moteurs de recherche et augmentez votre trafic organique.",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Publicité en ligne",
      description: "Campagnes publicitaires ciblées sur Google, Facebook, Instagram et autres plateformes.",
      icon: "📢"
    },
    {
      id: 3,
      title: "Content Marketing",
      description: "Création de contenu engageant pour votre site web, blog et réseaux sociaux.",
      icon: "✍️"
    },
    {
      id: 4,
      title: "Email Marketing",
      description: "Stratégies d'email marketing personnalisées pour convertir et fidéliser vos clients.",
      icon: "📧"
    },
    {
      id: 5,
      title: "Médias Sociaux",
      description: "Gestion professionnelle de vos comptes sociaux pour développer votre communauté.",
      icon: "👥"
    },
    {
      id: 6,
      title: "Analyse & Reporting",
      description: "Suivi détaillé des performances de vos campagnes marketing avec rapports personnalisés.",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Nos Services</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Nous proposons une gamme complète de services de marketing digital pour aider votre entreprise à se développer en ligne.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Prêt à booster votre présence en ligne?</h2>
          <p className="text-center mb-8">Contactez-nous dès aujourd'hui pour une consultation gratuite</p>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 