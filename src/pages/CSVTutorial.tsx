import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Page de tutoriel détaillé sur l'analyse CSV
 * 
 * Cette page offre un cours complet sur l'analyse des fichiers CSV,
 * expliquant les concepts fondamentaux et les applications en data marketing.
 * 
 * @component
 */
const CSVTutorial: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête du tutoriel */}
        <div className="mb-8">
          <Link to="/tutorials" className="text-indigo-600 hover:text-indigo-800 flex items-center mb-4">
            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Retour aux tutoriels
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Introduction à l'analyse CSV</h1>
          <p className="text-xl text-gray-600 mb-6">
            Un guide complet pour comprendre, manipuler et analyser les fichiers CSV dans un contexte de data marketing
          </p>
        </div>

        {/* Navigation latérale et contenu principal */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation latérale */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Sommaire</h2>
              <nav className="space-y-1">
                <button
                  onClick={() => scrollToSection('intro')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'intro' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Qu'est-ce qu'un fichier CSV ?
                </button>
                <button
                  onClick={() => scrollToSection('delimiters')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'delimiters' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Comprendre les délimiteurs
                </button>
                <button
                  onClick={() => scrollToSection('cleaning')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'cleaning' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Nettoyage des données
                </button>
                <button
                  onClick={() => scrollToSection('software')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'software' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Logiciels d'export CSV
                </button>
                <button
                  onClick={() => scrollToSection('dynamic')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'dynamic' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Rendre les données dynamiques
                </button>
                <button
                  onClick={() => scrollToSection('dashboard')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'dashboard' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Utilisation dans les dashboards
                </button>
                <button
                  onClick={() => scrollToSection('practical')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'practical' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Cas pratiques
                </button>
              </nav>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:w-3/4">
            <div className="space-y-8">
              {/* Introduction aux CSV */}
              <section id="intro" className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce qu'un fichier CSV ?</h2>
                <div className="prose max-w-none">
                  <p>
                    Un fichier CSV (Comma-Separated Values) est un format de fichier simple utilisé pour stocker des données tabulaires (nombres et texte) sous forme de texte brut. Chaque ligne du fichier est un enregistrement de données, et chaque enregistrement se compose d'un ou plusieurs champs, séparés par des virgules.
                  </p>
                  <p>
                    Le format CSV est l'un des formats les plus utilisés pour échanger des données entre différentes applications, en particulier dans le domaine du marketing digital et de l'analyse de données.
                  </p>
                  
                  <h3>Exemple de fichier CSV :</h3>
                  <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                    Date,Campagne,Impressions,Clics,Conversions,Coût<br/>
                    2023-06-01,Google Ads - Marque,12500,840,35,456.78<br/>
                    2023-06-01,Facebook - Remarketing,8750,320,12,225.50<br/>
                    2023-06-02,Google Ads - Marque,13200,910,42,487.32<br/>
                    2023-06-02,Facebook - Remarketing,9100,345,14,240.25
                  </pre>
                  
                  <h3>Avantages des fichiers CSV :</h3>
                  <ul>
                    <li><strong>Simplicité</strong> - Format texte simple qui peut être visualisé et modifié avec n'importe quel éditeur de texte</li>
                    <li><strong>Compatibilité</strong> - Pris en charge par presque tous les logiciels d'analyse et de manipulation de données</li>
                    <li><strong>Légèreté</strong> - Fichiers peu volumineux par rapport à d'autres formats (comme Excel)</li>
                    <li><strong>Flexibilité</strong> - Peut contenir n'importe quel type de données tabulaires</li>
                  </ul>
                  
                  <h3>Utilisations courantes en marketing digital :</h3>
                  <ul>
                    <li>Export de données depuis Google Analytics, Google Ads, Facebook Ads, etc.</li>
                    <li>Import de données dans des outils d'analyse et de visualisation</li>
                    <li>Échange de données entre différentes plateformes marketing</li>
                    <li>Création de rapports automatisés et de dashboards</li>
                  </ul>
                </div>
              </section>

              {/* Les délimiteurs */}
              <section id="delimiters" className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprendre les délimiteurs</h2>
                <div className="prose max-w-none">
                  <p>
                    Bien que "CSV" signifie "valeurs séparées par des virgules", en réalité, différents délimiteurs peuvent être utilisés pour séparer les colonnes de données. Le choix du délimiteur est crucial pour une interprétation correcte des données.
                  </p>
                  
                  <h3>Types de délimiteurs courants :</h3>
                  <ul>
                    <li><strong>Virgule (,)</strong> - Le délimiteur standard des fichiers CSV</li>
                    <li><strong>Point-virgule (;)</strong> - Souvent utilisé dans les pays où la virgule est utilisée comme séparateur décimal</li>
                    <li><strong>Tabulation (\t)</strong> - Utilisé dans les fichiers TSV (Tab-Separated Values)</li>
                    <li><strong>Pipe (|)</strong> - Parfois utilisé quand les données contiennent des virgules</li>
                  </ul>
                  
                  <h3>Exemple avec différents délimiteurs :</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Virgule (,) :</p>
                      <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                        Date,Campagne,Impressions,Clics<br/>
                        2023-06-01,Google Ads,12500,840
                      </pre>
                    </div>
                    
                    <div>
                      <p className="font-medium">Point-virgule (;) :</p>
                      <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                        Date;Campagne;Impressions;Clics<br/>
                        2023-06-01;Google Ads;12500;840
                      </pre>
                    </div>
                    
                    <div>
                      <p className="font-medium">Tabulation (\t) :</p>
                      <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
                        Date    Campagne    Impressions    Clics<br/>
                        2023-06-01    Google Ads    12500    840
                      </pre>
                    </div>
                  </div>
                  
                  <h3>Problèmes liés aux délimiteurs :</h3>
                  <p>
                    Lorsque vos données contiennent le caractère utilisé comme délimiteur, cela peut causer des problèmes d'interprétation. Par exemple, si votre délimiteur est une virgule et que vos données contiennent des virgules (comme dans "San Francisco, CA"), cela pourrait être interprété comme deux champs distincts.
                  </p>
                  
                  <h3>Solutions :</h3>
                  <ul>
                    <li><strong>Guillemets</strong> - Entourer les champs contenant des délimiteurs avec des guillemets : <code>"San Francisco, CA"</code></li>
                    <li><strong>Échappement</strong> - Utiliser un caractère d'échappement avant le délimiteur : <code>San Francisco\, CA</code></li>
                    <li><strong>Délimiteur alternatif</strong> - Utiliser un autre caractère comme délimiteur (comme le point-virgule)</li>
                  </ul>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-indigo-800">
                      <strong>Conseil pratique :</strong> Lorsque vous exportez des données depuis une plateforme marketing, vérifiez les options d'exportation pour choisir le délimiteur approprié, surtout si vos données contiennent des virgules.
                    </p>
                  </div>
                </div>
              </section>

              {/* Nettoyage des données */}
              <section id="cleaning" className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Nettoyage des données CSV</h2>
                <div className="prose max-w-none">
                  <p>
                    Les fichiers CSV exportés depuis différentes plateformes contiennent souvent des imperfections qui nécessitent un nettoyage avant analyse. Un nettoyage approprié des données est essentiel pour obtenir des analyses fiables et précises.
                  </p>
                  
                  <h3>Problèmes courants dans les fichiers CSV :</h3>
                  <ul>
                    <li><strong>Valeurs manquantes</strong> - Cellules vides ou valeurs NULL</li>
                    <li><strong>Formatage incohérent</strong> - Dates dans différents formats, nombres avec différents séparateurs</li>
                    <li><strong>Caractères spéciaux</strong> - Symboles qui peuvent causer des problèmes d'encodage</li>
                    <li><strong>Doublons</strong> - Enregistrements répétés qui peuvent fausser les analyses</li>
                    <li><strong>En-têtes problématiques</strong> - Noms de colonnes avec espaces ou caractères spéciaux</li>
                    <li><strong>Lignes d'information supplémentaires</strong> - Métadonnées ou notes au début du fichier</li>
                  </ul>
                  
                  <h3>Techniques de nettoyage :</h3>
                  
                  <h4>1. Traitement des valeurs manquantes</h4>
                  <p>Plusieurs approches sont possibles :</p>
                  <ul>
                    <li><strong>Suppression</strong> - Éliminer les lignes ou colonnes avec trop de valeurs manquantes</li>
                    <li><strong>Imputation</strong> - Remplacer par la moyenne, la médiane ou une valeur par défaut</li>
                    <li><strong>Marquage</strong> - Ajouter un indicateur pour signaler les valeurs qui étaient initialement manquantes</li>
                  </ul>
                  
                  <div className="bg-gray-100 p-3 rounded overflow-x-auto mb-4">
                    <p className="font-medium">Exemple - Avant nettoyage :</p>
                    <pre>
                      Date,Impressions,Clics,Conversions<br/>
                      2023-06-01,12500,840,<br/>
                      2023-06-02,,345,14<br/>
                      2023-06-03,9800,720,32
                    </pre>
                    
                    <p className="font-medium mt-3">Après nettoyage :</p>
                    <pre>
                      Date,Impressions,Clics,Conversions<br/>
                      2023-06-01,12500,840,0<br/>
                      2023-06-02,9150,345,14<br/>
                      2023-06-03,9800,720,32
                    </pre>
                  </div>
                  
                  <h4>2. Standardisation des formats</h4>
                  <ul>
                    <li><strong>Dates</strong> - Convertir en format standard (AAAA-MM-JJ)</li>
                    <li><strong>Nombres</strong> - Assurer la cohérence des séparateurs décimaux</li>
                    <li><strong>Texte</strong> - Normaliser la casse, supprimer les espaces superflus</li>
                  </ul>
                  
                  <h4>3. Gestion des doublons</h4>
                  <ul>
                    <li>Identifier les doublons à l'aide de clés uniques</li>
                    <li>Décider s'il faut supprimer ou fusionner les entrées en double</li>
                  </ul>
                  
                  <h4>4. Vérification de la cohérence</h4>
                  <ul>
                    <li>S'assurer que les valeurs sont dans les plages attendues</li>
                    <li>Vérifier les relations logiques entre les colonnes</li>
                  </ul>
                  
                  <h3>Outils de nettoyage des CSV :</h3>
                  <ul>
                    <li><strong>Excel / Google Sheets</strong> - Pour le nettoyage manuel et les transformations simples</li>
                    <li><strong>OpenRefine</strong> - Outil spécialisé pour le nettoyage et la transformation des données</li>
                    <li><strong>Python (pandas)</strong> - Pour l'automatisation du nettoyage avec des scripts</li>
                    <li><strong>R (tidyverse)</strong> - Environnement statistique avec d'excellentes capacités de manipulation de données</li>
                  </ul>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-indigo-800">
                      <strong>Conseil pratique :</strong> Conservez toujours une copie de vos données brutes avant de commencer le nettoyage. Documentez chaque étape de transformation pour assurer la traçabilité et la reproductibilité de votre analyse.
                    </p>
                  </div>
                </div>
              </section>

              {/* Logiciels d'export CSV */}
              <section id="software" className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Logiciels et plateformes d'export CSV</h2>
                <div className="prose max-w-none">
                  <p>
                    Dans l'écosystème du marketing digital, de nombreuses plateformes permettent l'export de données au format CSV. Comprendre comment exporter efficacement ces données est essentiel pour une analyse marketing réussie.
                  </p>
                  
                  <h3>Plateformes d'analyse et d'acquisition :</h3>
                  
                  <h4>1. Google Analytics</h4>
                  <p>
                    Google Analytics permet d'exporter pratiquement tous les rapports au format CSV.
                  </p>
                  <ul>
                    <li><strong>Comment exporter :</strong> Dans n'importe quel rapport, cliquez sur "Exporter" en haut à droite, puis sélectionnez "CSV"</li>
                    <li><strong>Données disponibles :</strong> Trafic, comportement, conversions, e-commerce, etc.</li>
                    <li><strong>Particularités :</strong> Les exports standard sont limités à 5 000 lignes. Pour des ensembles plus volumineux, utilisez Data Studio ou l'API</li>
                  </ul>
                  
                  <div className="flex justify-center my-4">
                    <img 
                      src="https://cdn.dribbble.com/users/1526265/screenshots/14667675/media/e62772708ca611ec5bb2869560953906.png" 
                      alt="Export CSV dans Google Analytics" 
                      className="rounded-lg shadow-md max-w-full h-auto"
                      style={{ maxHeight: '300px' }}
                    />
                  </div>
                  
                  <h4>2. Google Ads</h4>
                  <ul>
                    <li><strong>Comment exporter :</strong> Dans la section Rapports, créez un rapport personnalisé, puis cliquez sur le bouton de téléchargement</li>
                    <li><strong>Données disponibles :</strong> Performance des campagnes, mots-clés, annonces, conversions, etc.</li>
                    <li><strong>Particularités :</strong> Permet de planifier des exports réguliers envoyés par email</li>
                  </ul>
                  
                  <h4>3. Facebook Ads Manager</h4>
                  <ul>
                    <li><strong>Comment exporter :</strong> Dans le gestionnaire de publicités, sélectionnez les colonnes désirées, puis cliquez sur "Exporter"</li>
                    <li><strong>Données disponibles :</strong> Impressions, clics, conversions, données démographiques, etc.</li>
                    <li><strong>Particularités :</strong> Propose plusieurs formats, dont CSV et Excel</li>
                  </ul>
                  
                  <h4>4. LinkedIn Campaign Manager</h4>
                  <ul>
                    <li><strong>Comment exporter :</strong> Dans l'onglet Performance, cliquez sur "Exporter" et choisissez "CSV"</li>
                    <li><strong>Données disponibles :</strong> Métriques de performance des campagnes B2B</li>
                    <li><strong>Particularités :</strong> Données démographiques professionnelles détaillées</li>
                  </ul>
                  
                  <h3>Outils CRM et Email Marketing :</h3>
                  
                  <h4>1. Salesforce</h4>
                  <ul>
                    <li><strong>Comment exporter :</strong> Utilisez l'option "Exporter" dans la vue de liste, ou l'outil Data Export pour des extractions plus volumineuses</li>
                    <li><strong>Données disponibles :</strong> Contacts, comptes, opportunités, leads, etc.</li>
                    <li><strong>Particularités :</strong> Exports programmables et personnalisables</li>
                  </ul>
                  
                  <h4>2. Mailchimp</h4>
                  <ul>
                    <li><strong>Comment exporter :</strong> Dans les rapports de campagne, cliquez sur "Exporter" et choisissez le format CSV</li>
                    <li><strong>Données disponibles :</strong> Taux d'ouverture, clics, désabonnements, etc.</li>
                    <li><strong>Particularités :</strong> Permet d'exporter des segments d'audience spécifiques</li>
                  </ul>
                  
                  <h3>Outils d'analyse de médias sociaux :</h3>
                  
                  <h4>1. Hootsuite / Buffer</h4>
                  <ul>
                    <li><strong>Comment exporter :</strong> Dans la section Analytics, générez un rapport et choisissez l'export CSV</li>
                    <li><strong>Données disponibles :</strong> Engagement, portée, croissance de l'audience, etc.</li>
                  </ul>
                  
                  <h3>SEO et analyse de site :</h3>
                  
                  <h4>1. Google Search Console</h4>
                  <ul>
                    <li><strong>Comment exporter :</strong> Dans les rapports de performance, cliquez sur "Exporter" et choisissez CSV</li>
                    <li><strong>Données disponibles :</strong> Impressions, clics, CTR, position moyenne par requête</li>
                    <li><strong>Particularités :</strong> Limited à 1 000 lignes par export dans l'interface (plus via l'API)</li>
                  </ul>
                  
                  <h4>2. SEMrush / Ahrefs / Moz</h4>
                  <ul>
                    <li><strong>Comment exporter :</strong> Option d'export CSV disponible dans la plupart des rapports</li>
                    <li><strong>Données disponibles :</strong> Mots-clés, backlinks, audit technique, etc.</li>
                  </ul>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-indigo-800">
                      <strong>Conseil pratique :</strong> Pour automatiser la collecte de données de plusieurs plateformes, envisagez d'utiliser des outils comme Supermetrics, Funnel.io ou l'API de chaque plateforme. Cela vous permettra de centraliser vos données et de gagner un temps considérable.
                    </p>
                  </div>
                </div>
              </section>

              {/* Rendre les données dynamiques */}
              <section id="dynamic" className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Rendre les données CSV dynamiques</h2>
                <div className="prose max-w-none">
                  <p>
                    L'un des défis majeurs avec les fichiers CSV est qu'ils sont par nature statiques. Pour une analyse marketing efficace, il est souvent nécessaire de rendre ces données dynamiques afin de créer des tableaux de bord interactifs et des rapports automatisés.
                  </p>

                  <h3>Méthodes pour rendre les données CSV dynamiques :</h3>
                  
                  <h4>1. Actualisation automatique des données</h4>
                  <ul>
                    <li><strong>Exports programmés</strong> - Configuration d'exports réguliers depuis les plateformes marketing</li>
                    <li><strong>Scripts d'automatisation</strong> - Utilisation de scripts Python, R ou d'outils ETL pour actualiser les fichiers CSV</li>
                    <li><strong>Webhooks et API</strong> - Configuration de webhooks pour déclencher des mises à jour lorsque de nouvelles données sont disponibles</li>
                  </ul>
                  
                  <h4>2. Intégration avec des bases de données</h4>
                  <p>
                    Pour des analyses plus complexes et dynamiques, il est souvent préférable d'importer les données CSV dans une base de données :
                  </p>
                  <ul>
                    <li><strong>Bases de données SQL</strong> - MySQL, PostgreSQL pour les données structurées</li>
                    <li><strong>Bases NoSQL</strong> - MongoDB pour les données semi-structurées</li>
                    <li><strong>Data warehouses</strong> - BigQuery, Snowflake pour l'analyse de grandes quantités de données</li>
                  </ul>
                  
                  <div className="bg-gray-100 p-3 rounded overflow-x-auto mb-4">
                    <p className="font-medium">Exemple - Import SQL simple :</p>
                    <pre>
                      CREATE TABLE campagne_stats (<br/>
                        date DATE,<br/>
                        campagne VARCHAR(100),<br/>
                        impressions INT,<br/>
                        clics INT,<br/>
                        conversions INT,<br/>
                        cout DECIMAL(10,2)<br/>
                      );<br/>
                      <br/>
                      LOAD DATA INFILE 'chemin/vers/fichier.csv'<br/>
                      INTO TABLE campagne_stats<br/>
                      FIELDS TERMINATED BY ','<br/>
                      ENCLOSED BY '"'<br/>
                      LINES TERMINATED BY '\n'<br/>
                      IGNORE 1 ROWS;
                    </pre>
                  </div>
                  
                  <h4>3. Outils d'automatisation ETL (Extract, Transform, Load)</h4>
                  <p>
                    Ces outils permettent d'extraire des données de diverses sources, de les transformer et de les charger dans un système cible :
                  </p>
                  <ul>
                    <li><strong>Talend</strong> - Outil ETL open source avec interface graphique</li>
                    <li><strong>Apache NiFi</strong> - Pour la gestion de flux de données</li>
                    <li><strong>Alteryx</strong> - Solution ETL commerciale avec fonctionnalités d'analyse avancées</li>
                    <li><strong>Airbyte/Stitch/Fivetran</strong> - Solutions cloud modernes pour l'intégration de données</li>
                  </ul>
                  
                  <h4>4. APIs et connecteurs spécialisés</h4>
                  <ul>
                    <li><strong>Supermetrics</strong> - Connecteurs pour plateformes marketing vers Google Sheets, Data Studio, etc.</li>
                    <li><strong>Funnel.io</strong> - Centralisation et normalisation des données marketing</li>
                    <li><strong>Segment</strong> - Hub de données client pour collecter et router les données</li>
                  </ul>
                  
                  <h3>Bonnes pratiques pour la dynamisation des données :</h3>
                  <ul>
                    <li><strong>Standardisation des noms de champs</strong> - Utiliser des conventions de nommage cohérentes</li>
                    <li><strong>Métadonnées</strong> - Maintenir un dictionnaire de données décrivant le contenu de chaque champ</li>
                    <li><strong>Audit trail</strong> - Conserver des logs des mises à jour et transformations</li>
                    <li><strong>Validation des données</strong> - Mettre en place des contrôles pour s'assurer de l'intégrité des données</li>
                  </ul>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-indigo-800">
                      <strong>Conseil pratique :</strong> Pour les projets à petite échelle, Google Sheets combiné avec des add-ons comme Supermetrics ou OWOX BI peut être une solution simple pour rendre les données CSV dynamiques sans infrastructure complexe. Les données peuvent être actualisées automatiquement et partagées facilement.
                    </p>
                  </div>
                </div>
              </section>

              {/* Utilisation dans les dashboards */}
              <section id="dashboard" className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Utilisation des données CSV dans les dashboards marketing</h2>
                <div className="prose max-w-none">
                  <p>
                    Les dashboards marketing sont essentiels pour visualiser les performances et prendre des décisions basées sur les données. Les fichiers CSV constituent souvent la base de ces tableaux de bord, fournissant les données brutes qui seront transformées en visualisations informatives.
                  </p>
                  
                  <h3>Types de dashboards pour les données marketing :</h3>
                  
                  <h4>1. Dashboards opérationnels</h4>
                  <ul>
                    <li>Suivi quotidien ou hebdomadaire des KPIs</li>
                    <li>Alertes sur les anomalies et écarts significatifs</li>
                    <li>Focus sur les actions immédiates</li>
                  </ul>
                  
                  <h4>2. Dashboards analytiques</h4>
                  <ul>
                    <li>Analyse approfondie des tendances et patterns</li>
                    <li>Segmentation et filtrage avancés</li>
                    <li>Comparaisons historiques</li>
                  </ul>
                  
                  <h4>3. Dashboards stratégiques</h4>
                  <ul>
                    <li>Vue d'ensemble pour la direction</li>
                    <li>Focus sur le ROI et les métriques business</li>
                    <li>Suivi des objectifs à long terme</li>
                  </ul>
                  
                  <h3>Plateformes de visualisation pour données CSV :</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-bold text-gray-800">Google Data Studio (Looker Studio)</h4>
                      <ul>
                        <li><strong>Import CSV :</strong> Direct ou via Google Sheets</li>
                        <li><strong>Points forts :</strong> Gratuit, intégration native avec Google Analytics, Ads</li>
                        <li><strong>Limitations :</strong> Performances limitées avec de grands ensembles de données</li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-bold text-gray-800">Tableau</h4>
                      <ul>
                        <li><strong>Import CSV :</strong> Drag-and-drop, connexion directe</li>
                        <li><strong>Points forts :</strong> Visualisations puissantes, analyse approfondie</li>
                        <li><strong>Limitations :</strong> Coût élevé, courbe d'apprentissage</li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-bold text-gray-800">Power BI</h4>
                      <ul>
                        <li><strong>Import CSV :</strong> Direct ou via Power Query</li>
                        <li><strong>Points forts :</strong> Intégration avec l'écosystème Microsoft, DAX</li>
                        <li><strong>Limitations :</strong> Principalement orienté Windows</li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-bold text-gray-800">Dashboards personnalisés</h4>
                      <ul>
                        <li><strong>Technologies :</strong> D3.js, Chart.js, React, Python (Dash, Streamlit)</li>
                        <li><strong>Points forts :</strong> Personnalisation totale, intégration possible dans des applications existantes</li>
                        <li><strong>Limitations :</strong> Nécessite des compétences techniques</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3>Bonnes pratiques pour les dashboards marketing :</h3>
                  
                  <h4>1. Conception centrée sur l'utilisateur</h4>
                  <ul>
                    <li>Identifier les besoins spécifiques des différentes parties prenantes</li>
                    <li>Organiser les métriques par importance et relation</li>
                    <li>Privilégier la clarté à la complexité</li>
                  </ul>
                  
                  <h4>2. Contextualisation des données</h4>
                  <ul>
                    <li>Inclure des objectifs et des références pour donner du contexte</li>
                    <li>Ajouter des annotations pour expliquer les variations importantes</li>
                    <li>Permettre des comparaisons temporelles (année précédente, mois précédent)</li>
                  </ul>
                  
                  <h4>3. Choix des visualisations adaptées</h4>
                  <p>Sélectionner le type de visualisation en fonction de l'objectif :</p>
                  <ul>
                    <li><strong>Tendances temporelles :</strong> Graphiques linéaires</li>
                    <li><strong>Comparaisons :</strong> Graphiques à barres</li>
                    <li><strong>Proportions :</strong> Camemberts ou treemaps</li>
                    <li><strong>Distributions :</strong> Histogrammes ou box plots</li>
                    <li><strong>Relations :</strong> Graphiques de dispersion</li>
                    <li><strong>KPIs :</strong> Cartes de score ou jauges</li>
                  </ul>
                  
                  <div className="flex justify-center my-4">
                    <img 
                      src="https://cdn.dribbble.com/users/2418107/screenshots/15747806/media/05a42c51d26a0664c9bcfad2de056f1f.png" 
                      alt="Dashboard marketing exemple" 
                      className="rounded-lg shadow-md max-w-full h-auto"
                      style={{ maxHeight: '300px' }}
                    />
                  </div>
                  
                  <h4>4. Actualisation et maintenance</h4>
                  <ul>
                    <li>Établir une fréquence d'actualisation adaptée aux besoins</li>
                    <li>Documenter les sources de données et méthodologies</li>
                    <li>Recueillir régulièrement les retours des utilisateurs</li>
                  </ul>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-indigo-800">
                      <strong>Conseil pratique :</strong> Commencez avec un MVP (Minimum Viable Product) de votre dashboard, puis itérez en fonction des retours utilisateurs. Il est préférable d'avoir un dashboard simple mais utilisé régulièrement qu'un dashboard complexe que personne ne consulte.
                    </p>
                  </div>
                </div>
              </section>

              {/* Cas pratiques */}
              <section id="practical" className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cas pratiques d'utilisation des CSV en data marketing</h2>
                <div className="prose max-w-none">
                  <p>
                    Pour illustrer concrètement l'utilisation des fichiers CSV en marketing digital, voici quelques cas pratiques qui démontrent comment les données peuvent être exploitées pour améliorer les performances marketing.
                  </p>
                  
                  <h3>Cas pratique 1 : Analyse de performance des campagnes publicitaires</h3>
                  
                  <h4>Objectif :</h4>
                  <p>Identifier les campagnes les plus performantes et optimiser l'allocation du budget marketing.</p>
                  
                  <h4>Sources de données CSV :</h4>
                  <ul>
                    <li>Google Ads, Facebook Ads, LinkedIn Ads - métriques de performance</li>
                    <li>Google Analytics - données de conversion et comportement post-clic</li>
                    <li>CRM - données de vente et valeur client</li>
                  </ul>
                  
                  <h4>Processus :</h4>
                  <ol>
                    <li>Export des données de chaque plateforme au format CSV</li>
                    <li>Nettoyage et standardisation des données (noms de campagnes, métriques)</li>
                    <li>Jointure des données sur des identifiants communs (UTM parameters, timestamps)</li>
                    <li>Calcul des métriques d'efficacité (CPA, ROAS, CLV/CAC)</li>
                    <li>Visualisation des performances par canal, campagne, audience</li>
                  </ol>
                  
                  <h4>Résultat :</h4>
                  <p>
                    Un tableau de bord permettant d'identifier les campagnes sous-performantes pour réallocation du budget, détection des opportunités d'optimisation et justification du ROI auprès de la direction.
                  </p>
                  
                  <div className="border-t border-b py-3 my-4">
                    <h3>Cas pratique 2 : Segmentation client et personnalisation marketing</h3>
                    
                    <h4>Objectif :</h4>
                    <p>Créer des segments clients précis pour des communications marketing personnalisées.</p>
                    
                    <h4>Sources de données CSV :</h4>
                    <ul>
                      <li>CRM - données démographiques et historique d'achat</li>
                      <li>Email marketing - taux d'ouverture, clics, engagement</li>
                      <li>Site web - comportement de navigation, abandons de panier</li>
                    </ul>
                    
                    <h4>Processus :</h4>
                    <ol>
                      <li>Extraction des données comportementales et démographiques</li>
                      <li>Nettoyage et préparation des données</li>
                      <li>Analyse exploratoire pour identifier des patterns</li>
                      <li>Application d'algorithmes de clustering (K-means, hierarchical)</li>
                      <li>Caractérisation des segments identifiés</li>
                      <li>Export des segments vers les plateformes marketing</li>
                    </ol>
                    
                    <h4>Résultat :</h4>
                    <p>
                      Identification de 5-7 segments clients avec des préférences et comportements distincts, permettant des campagnes ciblées avec des messages et offres personnalisés par segment.
                    </p>
                  </div>
                  
                  <div className="border-b py-3 mb-4">
                    <h3>Cas pratique 3 : Optimisation du parcours client</h3>
                    
                    <h4>Objectif :</h4>
                    <p>Identifier et éliminer les points de friction dans le parcours d'achat.</p>
                    
                    <h4>Sources de données CSV :</h4>
                    <ul>
                      <li>Google Analytics - chemins de navigation, entonnoirs de conversion</li>
                      <li>Outils de heatmap - données d'interaction sur page</li>
                      <li>Enquêtes client - feedback qualitatif</li>
                    </ul>
                    
                    <h4>Processus :</h4>
                    <ol>
                      <li>Export des données de parcours utilisateur et de conversion</li>
                      <li>Identification des étapes à fort taux d'abandon</li>
                      <li>Analyse des comportements précédant l'abandon</li>
                      <li>Croisement avec les données d'enquête</li>
                      <li>Création de visualisations du parcours client</li>
                    </ol>
                    
                    <h4>Résultat :</h4>
                    <p>
                      Cartographie complète du parcours client révélant les principales sources de friction, permettant d'établir des priorités d'optimisation UX/UI et de mesurer l'impact des améliorations.
                    </p>
                  </div>
                  
                  <h3>Meilleures pratiques tirées des cas pratiques :</h3>
                  <ul>
                    <li><strong>Intégration multi-sources</strong> - Combiner des données de différentes plateformes pour une vue complète</li>
                    <li><strong>Standardisation</strong> - Harmoniser les noms de campagnes et métriques entre les sources</li>
                    <li><strong>Automatisation</strong> - Mettre en place des processus d'extraction et d'actualisation automatiques</li>
                    <li><strong>Documentation</strong> - Maintenir un dictionnaire de données et une documentation des processus</li>
                    <li><strong>Visualisation stratégique</strong> - Adapter les visualisations aux décisions à prendre</li>
                  </ul>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-indigo-800">
                      <strong>Conseil final :</strong> La valeur des données CSV en marketing ne vient pas des données elles-mêmes, mais de votre capacité à les transformer en insights actionnables. Concentrez-vous sur les questions business auxquelles vous voulez répondre, puis déterminez quelles données sont nécessaires et comment les analyser.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion et ressources */}
              <section className="bg-indigo-600 rounded-xl shadow-sm p-6 text-white">
                <h2 className="text-2xl font-bold mb-4">Pour aller plus loin</h2>
                <div className="prose prose-invert max-w-none">
                  <p>
                    Vous avez maintenant une compréhension approfondie des fichiers CSV et de leur application dans le domaine du data marketing. Pour continuer à développer vos compétences, voici quelques ressources utiles :
                  </p>
                  
                  <h3>Ressources d'apprentissage :</h3>
                  <ul>
                    <li>Cours en ligne sur l'analyse de données marketing (Coursera, Udemy)</li>
                    <li>Documentation officielle des plateformes marketing (Google Analytics, Facebook Insights)</li>
                    <li>Tutoriels sur YouTube pour les outils de visualisation (Tableau, Power BI)</li>
                    <li>Communautés en ligne comme Stack Overflow, Reddit r/datascience</li>
                  </ul>
                  
                  <h3>Outils recommandés :</h3>
                  <ul>
                    <li>OpenRefine pour le nettoyage de données</li>
                    <li>Google Sheets avec add-ons pour l'analyse simple</li>
                    <li>Python (pandas, matplotlib) pour l'analyse avancée</li>
                    <li>Tableau/Power BI/Looker Studio pour les visualisations professionnelles</li>
                  </ul>
                  
                  <p className="mt-4">
                    N'hésitez pas à explorer nos autres tutoriels pour approfondir des aspects spécifiques de l'analyse de données marketing !
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSVTutorial; 