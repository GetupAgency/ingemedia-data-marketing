const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">À propos de nous</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Notre mission</h2>
          <p className="text-gray-700 mb-6">
            Notre agence de marketing digital a pour mission d'aider les entreprises à développer 
            leur présence en ligne et à atteindre leurs objectifs commerciaux grâce à des 
            stratégies marketing innovantes et efficaces.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Notre équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-center">Jean Dupont</h3>
              <p className="text-gray-600 text-center">Directeur Marketing</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-center">Marie Martin</h3>
              <p className="text-gray-600 text-center">Experte SEO</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-center">Pierre Durand</h3>
              <p className="text-gray-600 text-center">Spécialiste Médias Sociaux</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Nos valeurs</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Innovation constante dans nos approches</li>
            <li>Transparence totale avec nos clients</li>
            <li>Résultats mesurables et concrets</li>
            <li>Adaptation aux évolutions du marché digital</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About; 