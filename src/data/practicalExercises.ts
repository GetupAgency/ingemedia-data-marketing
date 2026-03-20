export interface PracticalExercise {
  id: string;
  number: number;
  title: string;
  scenario: string;
  level: 'debutant' | 'intermediaire' | 'avance';
  duration: string;
  concept: string;
  source: string;
  tasks: string[];
  dataset: {
    name: string;
    description: string;
    url?: string;
    file?: string;
    columns: string;
    rows: string;
  };
  teacherCorrection: string;
}

export const practicalExercises: PracticalExercise[] = [
  {
    id: 'rfm-segmentation',
    number: 1,
    title: 'Le Sherlock des Clients',
    scenario: 'Vous etes data analyst chez un caviste en ligne. Le directeur en a marre d\'envoyer le meme email a ses 2 240 clients. "Je sais que certains sont des VIP et d\'autres n\'ont achete qu\'une fois, mais je ne sais pas lesquels." Votre mission : segmenter sa base client avec la methode RFM.',
    level: 'debutant',
    duration: '1h30',
    concept: 'Segmentation RFM (Recence, Frequence, Montant)',
    source: 'Keyrus - Cas 1 : Recrutement et fidelisation client',
    tasks: [
      'Telecharger le dataset et l\'explorer : combien de clients, quelles colonnes, quelles valeurs ?',
      'Calculer les 3 scores RFM pour chaque client : jours depuis dernier achat (R), nombre d\'achats (F), total depense (M)',
      'Creer 5 segments : VIP (RFM eleves), Fideles (F et M eleves, R moyen), A risque (bon historique mais R eleve), Nouveaux (R faible, F faible), Perdus (tout faible)',
      'Visualiser avec un scatter plot : Frequence en X, Montant en Y, couleur = segment. Chaque point = un client.',
      'Pour chaque segment, proposer UNE action marketing concrete (type de message, canal, offre)',
    ],
    dataset: {
      name: 'Marketing Campaign Dataset',
      description: '2 240 clients d\'un commerce avec historique d\'achats, revenus, et reponses aux campagnes',
      url: 'https://www.kaggle.com/datasets/rodsaldanha/arketing-campaign',
      columns: 'ID, Year_Birth, Education, Marital_Status, Income, Dt_Customer, Recency, MntWines, MntFruits, MntMeatProducts, MntFishProducts, MntSweetProducts, MntGoldProds, NumDealsPurchases, NumWebPurchases, NumCatalogPurchases, NumStorePurchases, NumWebVisitsMonth',
      rows: '2 240 clients',
    },
    teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">Segmentation RFM attendue</h2>
  <div class="value-type">
    <h3 class="value-title">Comment calculer les scores</h3>
    <ul class="correction-list">
      <li><strong>Recence (R) :</strong> Colonne "Recency" deja presente dans le dataset (jours depuis dernier achat). Plus c'est bas, mieux c'est.</li>
      <li><strong>Frequence (F) :</strong> Somme de NumWebPurchases + NumCatalogPurchases + NumStorePurchases + NumDealsPurchases</li>
      <li><strong>Montant (M) :</strong> Somme de MntWines + MntFruits + MntMeatProducts + MntFishProducts + MntSweetProducts + MntGoldProds</li>
    </ul>
  </div>
  <div class="value-type">
    <h3 class="value-title">Segmentation type (par quartiles)</h3>
    <ul class="correction-list">
      <li><strong>VIP (~10%) :</strong> R < 20j, F > 20 achats, M > 1 200 EUR. Action : programme VIP exclusif, avant-premieres, livraison offerte</li>
      <li><strong>Fideles (~25%) :</strong> F > 10, M > 500 EUR. Action : programme de fidelite a points, cross-sell</li>
      <li><strong>A risque (~15%) :</strong> Bon historique MAIS R > 60j. Action : email de reactivation avec offre personnalisee "Vous nous manquez"</li>
      <li><strong>Nouveaux (~20%) :</strong> R < 30j, F < 5. Action : sequence de bienvenue, decouverte des categories</li>
      <li><strong>Perdus (~30%) :</strong> R > 90j, F < 5, M < 200 EUR. Action : derniere tentative avec grosse promo, sinon desabonnement</li>
    </ul>
  </div>
  <div class="example-box">
    <strong>Insight cle :</strong> Les VIP representent ~10% des clients mais souvent 40-50% du CA. C'est la regle de Pareto appliquee au marketing. Si le caviste ne fait qu'une seule action, ce doit etre de choyer ses VIP, pas de courir apres les perdus.
  </div>
</div>`,
  },
  {
    id: 'churn-prediction',
    number: 2,
    title: 'Le Devin du Churn',
    scenario: 'Vous travaillez chez un operateur telecom. Chaque mois, 26% des clients reslient. Chaque client perdu coute 500 EUR a remplacer (pub + promo d\'acquisition). Le directeur commercial vous demande : "Qui va partir le mois prochain ? Et combien ca me coute si je ne fais rien ?"',
    level: 'intermediaire',
    duration: '2h',
    concept: 'Prediction d\'attrition (churn) et Customer Lifetime Value',
    source: 'Keyrus - Cas 2 : Fidelisation et lifetime value',
    tasks: [
      'Explorer le dataset : combien de clients, taux de churn actuel, quelles variables disponibles ?',
      'Comparer visuellement les churners vs non-churners sur chaque variable (bar charts). Quelles variables semblent liees au depart ?',
      'Demander a Claude de construire un arbre de decision simple pour predire le churn. Quels criteres l\'arbre utilise-t-il ?',
      'Interpreter : si un client a > 4 appels au support ET anciennete < 12 mois, quelle est sa probabilite de churn ?',
      'Calculer l\'impact financier : sur 7 000 clients, combien vont partir ? A 500 EUR/client perdu, quel est le cout ? Si on retient 20% des churners identifies, combien economise-t-on ?',
    ],
    dataset: {
      name: 'Telecom Customer Churn',
      description: '7 043 clients d\'un operateur telecom avec donnees de contrat, usage, et statut churn',
      url: 'https://www.kaggle.com/datasets/blastchar/telco-customer-churn',
      columns: 'customerID, gender, SeniorCitizen, Partner, Dependents, tenure, PhoneService, InternetService, Contract, MonthlyCharges, TotalCharges, Churn',
      rows: '7 043 clients',
    },
    teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">Analyse du churn attendue</h2>
  <div class="value-type">
    <h3 class="value-title">Variables les plus predictives</h3>
    <ul class="correction-list">
      <li><strong>Type de contrat :</strong> Les clients en contrat mensuel churnent 3-4x plus que ceux en contrat 2 ans. C'est la variable n1.</li>
      <li><strong>Anciennete (tenure) :</strong> Les clients de moins de 12 mois sont les plus a risque. Apres 24 mois, le churn chute drastiquement.</li>
      <li><strong>Facture mensuelle :</strong> Les clients avec factures > 70 EUR/mois churnent plus (perception de prix eleve).</li>
      <li><strong>Support technique :</strong> > 3 appels au support = signal fort de mecontentement.</li>
      <li><strong>Fibre optique :</strong> Contre-intuitivement, les clients fibre churnent plus que les DSL (attentes plus elevees, plus de concurrence).</li>
    </ul>
  </div>
  <div class="value-type">
    <h3 class="value-title">Chiffrage financier</h3>
    <ul class="correction-list">
      <li><strong>Taux de churn :</strong> ~26% = ~1 830 clients/an</li>
      <li><strong>Cout total :</strong> 1 830 x 500 EUR = <strong>915 000 EUR/an</strong> de cout de remplacement</li>
      <li><strong>Si on retient 20% des churners :</strong> 366 clients retenus x 500 EUR = <strong>183 000 EUR economises</strong></li>
      <li><strong>Cout de retention :</strong> Si on offre 2 mois gratuits (140 EUR) aux 1 830 identifies, cout = 256 200 EUR. ROI positif si taux de retention > 28%.</li>
    </ul>
  </div>
  <div class="example-box">
    <strong>Le saut conceptuel :</strong> Passer de "26% partent" (constat) a "CEUX-LA vont partir" (prediction) change tout. On ne gaspille plus le budget retention sur des clients qui seraient restes de toute facon. C'est la difference entre le marketing de masse et le data marketing.
  </div>
</div>`,
  },
  {
    id: 'ab-test',
    number: 3,
    title: 'Le Juge de l\'A/B Test',
    scenario: 'L\'equipe marketing a teste 2 versions d\'une landing page pendant 14 jours. Version A : bouton vert "Decouvrir nos offres". Version B : bouton orange "Profiter maintenant -20%". 5 000 visiteurs par version. Le designer est CONVAINCU que B est meilleure. Le dev pense que c\'est du bruit statistique. Le directeur vous demande de trancher.',
    level: 'debutant',
    duration: '1h',
    concept: 'A/B Testing et significativite statistique',
    source: 'Maetva - Techniques d\'experimentation marketing',
    tasks: [
      'Explorer les resultats jour par jour : quelle version semble gagner les premiers jours ? Et a la fin ?',
      'Calculer le taux de conversion global de chaque version (clics / visiteurs)',
      'Visualiser l\'evolution du taux de conversion jour par jour (line chart). Observer comment les resultats se stabilisent.',
      'Demander a Claude si l\'ecart est statistiquement significatif (avec les donnees exactes)',
      'Rediger votre verdict en 3 phrases : deployer B, continuer le test, ou abandonner ? Justifier.',
    ],
    dataset: {
      name: 'Resultats A/B Test Landing Page',
      description: 'Resultats jour par jour de 2 versions de landing page sur 14 jours',
      file: 'ab-test-landing-page.csv',
      columns: 'jour, version, visiteurs, clics, conversions, taux_conversion',
      rows: '28 lignes (14 jours x 2 versions)',
    },
    teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">Analyse de l'A/B test</h2>
  <div class="value-type">
    <h3 class="value-title">Resultats globaux</h3>
    <ul class="correction-list">
      <li><strong>Version A :</strong> 5 000 visiteurs, 178 conversions = 3.56%</li>
      <li><strong>Version B :</strong> 5 000 visiteurs, 221 conversions = 4.42%</li>
      <li><strong>Ecart :</strong> +0.86 points, soit +24% de performance relative</li>
    </ul>
  </div>
  <div class="value-type">
    <h3 class="value-title">Le piege des premiers jours</h3>
    <ul class="correction-list">
      <li><strong>Jour 1-3 :</strong> A gagne (4.2% vs 3.8%). Beaucoup d'etudiants concluent trop vite que A est meilleur.</li>
      <li><strong>Jour 4-7 :</strong> B rattrape et depasse A. L'ecart commence a se stabiliser.</li>
      <li><strong>Jour 8-14 :</strong> B est systematiquement devant. L'ecart se confirme.</li>
      <li><strong>Lecon :</strong> Les premiers jours sont domines par le bruit statistique. Il faut attendre suffisamment de donnees (en general 1 000+ conversions par version) pour conclure.</li>
    </ul>
  </div>
  <div class="example-box">
    <strong>Verdict :</strong> Avec 10 000 visiteurs et un ecart de +24%, le test est statistiquement significatif (p-value < 0.05). On peut deployer la version B. Impact estime : si le site recoit 50 000 visiteurs/mois, on passe de 1 780 a 2 210 conversions/mois, soit +430 conversions. A 50 EUR de panier moyen = +21 500 EUR/mois.
  </div>
</div>`,
  },
  {
    id: 'market-basket',
    number: 4,
    title: 'Le Panier Magique',
    scenario: 'Vous travaillez pour une chaine de magasins bio. Le directeur veut savoir quels produits placer cote a cote en rayon et quoi recommander a la caisse. "Je suis sur que ceux qui achetent du houmous achetent aussi des crackers, mais j\'ai aucune preuve." Vous avez 50 000 tickets de caisse.',
    level: 'intermediaire',
    duration: '1h30',
    concept: 'Market Basket Analysis / Cross-selling / Moteur de recommandation',
    source: 'Keyrus - Cas 4 : Moteurs de recommandation',
    tasks: [
      'Explorer le dataset : combien de transactions, combien de produits uniques, panier moyen ?',
      'Identifier les 10 produits les plus vendus (bar chart). Sont-ils surprenants ?',
      'Demander a Claude d\'appliquer les regles d\'association : quels produits sont achetes ensemble ? (support, confiance, lift)',
      'Interpreter les resultats : quelles associations sont fortes (lift > 2) ? Lesquelles sont evidentes vs surprenantes ?',
      'Proposer 3 actions concretes : placement en rayon, offre bundle, email de cross-sell. Estimer l\'impact si le panier moyen augmente de 2 EUR sur 30% des transactions.',
    ],
    dataset: {
      name: 'Groceries Market Basket Dataset',
      description: 'Transactions d\'un supermarche avec les produits achetes par ticket',
      url: 'https://www.kaggle.com/datasets/heeraldedhia/groceries-dataset',
      columns: 'Member_number, Date, itemDescription',
      rows: '~38 000 transactions',
    },
    teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">Associations produits cles</h2>
  <div class="value-type">
    <h3 class="value-title">Metriques a comprendre</h3>
    <ul class="correction-list">
      <li><strong>Support :</strong> Frequence d'apparition de l'association. Ex: "pain + beurre" apparait dans 8% des paniers = support 0.08</li>
      <li><strong>Confiance :</strong> Probabilite conditionnelle. Si quelqu'un achete du pain, a 65% il achete aussi du beurre = confiance 0.65</li>
      <li><strong>Lift :</strong> L'association est-elle plus forte que le hasard ? Lift > 1 = oui. Lift > 2 = association forte. Lift = 1 = independants.</li>
    </ul>
  </div>
  <div class="value-type">
    <h3 class="value-title">Associations typiques</h3>
    <ul class="correction-list">
      <li><strong>Evidentes :</strong> Legumes entiers -> herbes fraiches (lift ~3.5), yaourt -> fruits (lift ~2.8)</li>
      <li><strong>Surprenantes :</strong> Couches -> biere (classique du data mining, decouverte par Walmart dans les annees 90), vin -> fromage premium (lift ~4.2)</li>
      <li><strong>Saisonnieres :</strong> Charbon -> marinade -> sauces BBQ (ete), chocolat chaud -> guimauves (hiver)</li>
    </ul>
  </div>
  <div class="example-box">
    <strong>Calcul d'impact :</strong> 38 000 transactions/mois. Si le cross-sell augmente le panier de 2 EUR sur 30% des transactions : 38 000 x 30% x 2 EUR = <strong>22 800 EUR/mois de CA supplementaire</strong>. Cout de mise en oeuvre : quasi nul (placement en rayon + email automatise).
  </div>
</div>`,
  },
  {
    id: 'weather-forecast',
    number: 5,
    title: 'Meteo = Argent',
    scenario: 'Vous etes chez un grand distributeur de bricolage. Le responsable logistique a remarque que les ventes de barbecues explosent certaines semaines et s\'effondrent d\'autres, mais il n\'arrive pas a anticiper les stocks. "Si seulement je pouvais savoir a l\'avance..." Votre mission : prouver que la meteo predit les ventes.',
    level: 'avance',
    duration: '2h',
    concept: 'Prevision de ventes avec donnees externes (croisement de sources)',
    source: 'Keyrus - Cas 3 : Prevision des ventes (Forecast)',
    tasks: [
      'Explorer les 2 fichiers : ventes hebdomadaires par categorie + donnees meteo. Les fusionner par semaine.',
      'Creer des scatter plots pour chaque categorie x meteo : temperature vs barbecues, pluie vs parapluies, etc.',
      'Identifier les correlations fortes ET les correlations surprenantes (Keyrus cite les batteries de voiture)',
      'Demander a Claude de construire un modele de regression simple : ventes_barbecues = f(temperature, ensoleillement)',
      'Prevoir les ventes de la semaine prochaine avec les previsions meteo. Calculer le gain de stock optimise (reduction du surstockage et des ruptures).',
    ],
    dataset: {
      name: 'Ventes Retail + Meteo',
      description: 'Ventes hebdomadaires de 8 categories de produits + donnees meteo sur 52 semaines',
      file: 'ventes-meteo-retail.csv',
      columns: 'semaine, temperature_moy, pluie_mm, ensoleillement_h, vent_kmh, ventes_barbecues, ventes_parasols, ventes_peinture, ventes_chauffage, ventes_outillage, ventes_jardinage, ventes_piscine, ventes_isolation',
      rows: '52 semaines',
    },
    teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">Correlations meteo-ventes</h2>
  <div class="value-type">
    <h3 class="value-title">Correlations fortes (evidentes)</h3>
    <ul class="correction-list">
      <li><strong>Temperature vs Barbecues :</strong> Correlation ~0.89. Au-dessus de 22 degres, les ventes explosent (+180%).</li>
      <li><strong>Temperature vs Piscine :</strong> Correlation ~0.85. Seuil a 25 degres.</li>
      <li><strong>Ensoleillement vs Parasols :</strong> Correlation ~0.78.</li>
      <li><strong>Temperature basse vs Chauffage :</strong> Correlation inverse ~-0.82. En dessous de 10 degres, les ventes de chauffage triplent.</li>
    </ul>
  </div>
  <div class="value-type">
    <h3 class="value-title">Correlations surprenantes</h3>
    <ul class="correction-list">
      <li><strong>Pluie vs Peinture interieure :</strong> Correlation ~0.45. Quand il pleut, les gens bricolent a l'interieur.</li>
      <li><strong>Vent vs Outillage :</strong> Correlation ~0.35 avec un decalage d'une semaine. Apres les tempetes, les gens reparent.</li>
      <li><strong>Ensoleillement printemps vs Jardinage :</strong> L'effet est maximal en mars-avril, pas en ete (les gens preparent les jardins au printemps).</li>
    </ul>
  </div>
  <div class="example-box">
    <strong>Impact business :</strong> Sans prevision, le magasin commande en moyenne 100 barbecues/semaine toute l'annee. Avec la prevision meteo, il commande 20 en hiver et 250 quand une vague de chaleur est annoncee. Gain estime : -40% de surstockage (cout de stockage) et -60% de ruptures (ventes perdues). Sur un rayon a 500K EUR/an de CA, l'optimisation vaut 30-50K EUR.
  </div>
</div>`,
  },
  {
    id: 'budget-optimization',
    number: 6,
    title: 'Le Budget du Directeur',
    scenario: 'Le directeur marketing vous convoque. "J\'ai 100 000 EUR de budget annuel repartis sur 5 canaux : Google Ads, Facebook, Instagram, Email et SEO. Je n\'ai aucune idee si c\'est bien reparti. Certains canaux me coutent une fortune pour pas grand chose. D\'autres marchent peut-etre tres bien mais je les sous-alimente. Aidez-moi a redistribuer intelligemment."',
    level: 'avance',
    duration: '2h',
    concept: 'Optimisation de budget multi-canal (ROAS, CPA, CAC, attribution)',
    source: 'Maetva - Approche omnicanal et ROI marketing',
    tasks: [
      'Analyser les performances par canal : cout, impressions, clics, conversions, CA genere. Calculer ROAS, CPA et CAC.',
      'Identifier le canal "gouffre" (ROAS le plus faible) et le canal "pepite" (ROAS le plus eleve mais sous-finance)',
      'Simuler 3 scenarios de reallocation : (A) couper le gouffre, (B) doubler la pepite, (C) equilibrer selon le ROAS. Estimer l\'impact CA de chaque scenario.',
      'Integrer la notion de CLV : un canal peut avoir un CPA eleve mais generer des clients a forte valeur long terme',
      'Pitcher votre recommandation en 3 minutes au "directeur" (le prof) : quel scenario et pourquoi ?',
    ],
    dataset: {
      name: 'Marketing Campaign Performance',
      description: 'Performance mensuelle de 5 canaux marketing sur 12 mois avec budget, conversions et CA',
      url: 'https://www.kaggle.com/datasets/manishabhatt22/marketing-campaign-performance-dataset',
      columns: 'Month, Channel, Budget, Impressions, Clicks, Conversions, Revenue, CTR, CPC, ROAS',
      rows: '60 lignes (12 mois x 5 canaux)',
    },
    teacherCorrection: `<div class="correction-content">
  <h2 class="correction-title">Optimisation du budget marketing</h2>
  <div class="value-type">
    <h3 class="value-title">Analyse type par canal</h3>
    <ul class="correction-list">
      <li><strong>Google Ads :</strong> ROAS ~4:1. Le cheval de bataille. Budget actuel 35K. Maintenir.</li>
      <li><strong>Facebook :</strong> ROAS ~2.5:1. Correct mais pas extraordinaire. Budget actuel 25K. Reduire a 15K.</li>
      <li><strong>Instagram :</strong> ROAS ~6:1. La pepite sous-financee. Budget actuel 10K. Doubler a 20K.</li>
      <li><strong>Email :</strong> ROAS ~12:1. Le meilleur ROI de tous, mais plafonne rapidement (taille de la base). Budget actuel 5K. Augmenter a 10K.</li>
      <li><strong>SEO :</strong> ROAS ~8:1 a long terme. Investissement qui se cumule. Budget actuel 25K. Maintenir.</li>
    </ul>
  </div>
  <div class="value-type">
    <h3 class="value-title">Scenario recommande (C : equilibrer selon le ROAS)</h3>
    <ul class="correction-list">
      <li><strong>Reallocation :</strong> Google 35K (=), Facebook 15K (-10K), Instagram 20K (+10K), Email 10K (+5K), SEO 20K (-5K)</li>
      <li><strong>CA actuel estime :</strong> ~450K EUR</li>
      <li><strong>CA apres reallocation :</strong> ~520K EUR (+15.5%)</li>
      <li><strong>Gain :</strong> +70K EUR de CA pour le meme budget de 100K EUR</li>
    </ul>
  </div>
  <div class="example-box">
    <strong>Le piege a eviter :</strong> Ne pas confondre ROAS et impact absolu. L'email a le meilleur ROAS (12:1) mais on ne peut pas y mettre 50K EUR car la base email est limitee. A l'inverse, Google Ads a un ROAS "moyen" (4:1) mais peut absorber beaucoup de budget sans saturer. L'optimisation est un equilibre entre ROAS unitaire et capacite de scaling.
  </div>
</div>`,
  },
];
