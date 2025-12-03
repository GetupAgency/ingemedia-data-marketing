/**
 * Interface pour définir la structure d'un tutoriel
 */
export interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  category: string;
  image?: string;
  content: TutorialContent[];
}

/**
 * Interface pour définir une section de contenu du tutoriel
 */
export interface TutorialContent {
  type: 'heading' | 'paragraph' | 'image' | 'list' | 'code' | 'quote' | 'note' | 'tip' | 'warning' | 'steps';
  content: string | string[] | StepItem[];
  caption?: string;
  level?: 1 | 2 | 3; // Pour les titres (h1, h2, h3)
}

/**
 * Interface pour définir un élément d'étape
 */
export interface StepItem {
  title: string;
  description: string;
  image?: string;
}

/**
 * Données des tutoriels disponibles
 */
export const tutorials: Tutorial[] = [
  // Tutoriel sur l'optimisation SEO avec Search Console
  {
    id: 'seo-search-console',
    title: 'Optimisation SEO avec Google Search Console',
    description: 'Apprenez à utiliser Google Search Console pour améliorer le référencement naturel de votre site web et augmenter votre visibilité dans les résultats de recherche',
    duration: '30 minutes',
    difficulty: 'Intermédiaire',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'heading',
        content: 'Introduction à Google Search Console',
        level: 1
      },
      {
        type: 'paragraph',
        content: 'Google Search Console (anciennement Google Webmaster Tools) est un outil gratuit proposé par Google qui permet aux propriétaires de sites web de surveiller, d\'entretenir et d\'améliorer la présence de leur site dans les résultats de recherche Google. Cet outil offre des informations précieuses sur la façon dont Google voit votre site et vous aide à identifier les problèmes qui pourraient affecter votre classement.'
      },
      {
        type: 'paragraph',
        content: 'Dans ce tutoriel, nous allons explorer les fonctionnalités clés de Google Search Console et vous montrer comment les utiliser pour optimiser votre référencement naturel (SEO).'
      },
      {
        type: 'heading',
        content: 'Configuration de Google Search Console',
        level: 2
      },
      {
        type: 'steps',
        content: [
          {
            title: 'Accéder à Google Search Console',
            description: 'Rendez-vous sur https://search.google.com/search-console et connectez-vous avec votre compte Google.'
          },
          {
            title: 'Ajouter une propriété',
            description: 'Cliquez sur "Ajouter une propriété" et choisissez entre "Domaine" (recommandé) ou "Préfixe d\'URL". L\'option Domaine couvre toutes les versions de votre site (www, non-www, http, https).'
          },
          {
            title: 'Vérifier la propriété',
            description: 'Pour la vérification du domaine, vous devrez ajouter un enregistrement DNS chez votre fournisseur d\'hébergement. Pour la vérification par préfixe d\'URL, plusieurs méthodes sont proposées : fichier HTML, balise meta, Google Analytics, Google Tag Manager, etc.'
          }
        ]
      },
      {
        type: 'tip',
        content: 'La vérification au niveau du domaine est préférable car elle couvre toutes les variantes de votre site, y compris les sous-domaines, ce qui vous donne une vue plus complète de votre présence dans les résultats de recherche.'
      },
      {
        type: 'heading',
        content: 'Analyse des performances',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Le rapport de performance est l\'une des fonctionnalités les plus utiles de Google Search Console. Il vous montre comment votre site se comporte dans les résultats de recherche Google.'
      },
      {
        type: 'list',
        content: [
          'Impressions : nombre de fois où votre site est apparu dans les résultats de recherche',
          'Clics : nombre de fois où les utilisateurs ont cliqué sur votre site depuis les résultats de recherche',
          'CTR (Click-Through Rate) : pourcentage de clics par rapport aux impressions',
          'Position moyenne : classement moyen de votre site dans les résultats de recherche'
        ]
      },
      {
        type: 'paragraph',
        content: 'Ce rapport vous permet également de filtrer les données par requête, page, pays, appareil et date, ce qui vous aide à identifier les opportunités d\'amélioration.'
      },
      {
        type: 'heading',
        content: 'Optimisation des mots-clés',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'L\'onglet "Requêtes" du rapport de performance vous montre les termes de recherche pour lesquels votre site apparaît dans les résultats de Google. Ces informations sont précieuses pour optimiser votre contenu.'
      },
      {
        type: 'steps',
        content: [
          {
            title: 'Identifier les mots-clés à fort potentiel',
            description: 'Recherchez les requêtes avec un nombre élevé d\'impressions mais peu de clics, ou une position moyenne supérieure à 10. Ces mots-clés représentent des opportunités d\'amélioration.'
          },
          {
            title: 'Améliorer le contenu existant',
            description: 'Mettez à jour vos pages pour mieux cibler ces mots-clés en optimisant les titres, les balises meta, les sous-titres et le contenu lui-même.'
          },
          {
            title: 'Créer du nouveau contenu',
            description: 'Développez du contenu spécifique pour les mots-clés pertinents découverts dans Search Console qui ne sont pas encore bien couverts sur votre site.'
          }
        ]
      },
      {
        type: 'note',
        content: 'Une bonne pratique consiste à exporter régulièrement ces données pour suivre l\'évolution de vos performances sur les mots-clés clés au fil du temps.'
      },
      {
        type: 'heading',
        content: 'Correction des problèmes techniques',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Google Search Console vous aide à identifier et à résoudre divers problèmes techniques qui peuvent affecter le référencement de votre site.'
      },
      {
        type: 'list',
        content: [
          'Index de couverture : indique si Google peut indexer correctement vos pages',
          'Expérience utilisateur mobile : évalue la convivialité de votre site sur mobile',
          'Vitesse : mesure les performances de chargement de vos pages',
          'Sécurité et problèmes manuels : signale les problèmes de sécurité ou les pénalités'
        ]
      },
      {
        type: 'warning',
        content: 'Les problèmes d\'indexation doivent être traités en priorité, car si Google ne peut pas indexer vos pages, elles n\'apparaîtront pas dans les résultats de recherche, quelles que soient leurs qualités.'
      },
      {
        type: 'heading',
        content: 'Soumission de sitemap',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Un fichier sitemap répertorie toutes les pages de votre site web et aide Google à les découvrir et à les indexer plus efficacement. Search Console vous permet de soumettre facilement votre sitemap à Google.'
      },
      {
        type: 'steps',
        content: [
          {
            title: 'Créer un sitemap',
            description: 'Utilisez un générateur de sitemap ou un plugin de votre CMS (comme Yoast SEO pour WordPress) pour créer un fichier sitemap.xml.'
          },
          {
            title: 'Soumettre le sitemap',
            description: 'Dans Search Console, allez dans l\'onglet "Sitemaps", entrez l\'URL de votre sitemap (généralement example.com/sitemap.xml) et cliquez sur "Envoyer".'
          },
          {
            title: 'Vérifier l\'état du sitemap',
            description: 'Search Console vous indiquera combien d\'URLs ont été découvertes et indexées grâce à votre sitemap. Surveillez ces chiffres régulièrement.'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Optimisation des liens internes et externes',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'La section "Liens" de Search Console vous montre quels sites web pointent vers le vôtre (backlinks) et comment vos pages sont liées entre elles (liens internes).'
      },
      {
        type: 'list',
        content: [
          'Liens externes : vous permet d\'identifier les sites qui créent des liens vers vous',
          'Texte d\'ancrage populaire : montre les textes utilisés pour créer des liens vers votre site',
          'Pages les plus liées : identifie vos pages qui reçoivent le plus de liens',
          'Liens internes : vous aide à comprendre comment vos pages sont liées entre elles'
        ]
      },
      {
        type: 'tip',
        content: 'Utilisez ces données pour identifier les opportunités d\'améliorer votre structure de liens internes et pour repérer les backlinks de qualité que vous pourriez développer davantage.'
      },
      {
        type: 'heading',
        content: 'Utilisation de l\'outil URL Inspection',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'L\'outil URL Inspection vous permet de vérifier comment Google voit une page spécifique de votre site. Vous pouvez l\'utiliser pour diagnostiquer des problèmes d\'indexation et demander à Google de réindexer une page après des modifications.'
      },
      {
        type: 'steps',
        content: [
          {
            title: 'Inspecter une URL',
            description: 'Entrez l\'URL complète de la page que vous souhaitez examiner dans la barre de recherche en haut de Search Console.'
          },
          {
            title: 'Analyser les résultats',
            description: 'Vérifiez si la page est indexée, si elle contient des erreurs, et examinez comment Googlebot la voit.'
          },
          {
            title: 'Demander l\'indexation',
            description: 'Si vous avez récemment mis à jour une page, cliquez sur "Demander l\'indexation" pour que Google prenne en compte vos modifications plus rapidement.'
          }
        ]
      },
      {
        type: 'warning',
        content: 'L\'outil de demande d\'indexation a des limites quotidiennes. Utilisez-le principalement pour vos pages les plus importantes qui ont été récemment modifiées.'
      },
      {
        type: 'heading',
        content: 'Bonnes pratiques et analyses périodiques',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Pour tirer le meilleur parti de Google Search Console, établissez une routine d\'analyse régulière.'
      },
      {
        type: 'list',
        content: [
          'Vérifiez hebdomadairement les performances et l\'index de couverture',
          'Analysez mensuellement les tendances de vos mots-clés et backlinks',
          'Examinez trimestriellement les problèmes techniques et l\'expérience utilisateur',
          'Exportez régulièrement vos données pour les analyser hors ligne',
          'Créez des rapports personnalisés pour suivre vos KPIs SEO'
        ]
      },
      {
        type: 'paragraph',
        content: 'En suivant ces bonnes pratiques et en utilisant efficacement Google Search Console, vous pourrez améliorer considérablement la visibilité de votre site dans les résultats de recherche et attirer un trafic plus qualifié.'
      },
      {
        type: 'heading',
        content: 'Conclusion et ressources supplémentaires',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Google Search Console est un outil essentiel pour tout propriétaire de site web soucieux d\'améliorer son référencement naturel. Elle vous fournit des données directement de Google, vous permettant d\'optimiser votre site en fonction de ce que le moteur de recherche considère comme important.'
      },
      {
        type: 'paragraph',
        content: 'Pour approfondir vos connaissances, nous vous recommandons de consulter la documentation officielle de Google Search Console et de vous tenir informé des dernières tendances SEO.'
      },
      {
        type: 'list',
        content: [
          'Documentation Google Search Console : https://support.google.com/webmasters/',
          'Blog Google Search Central : https://developers.google.com/search/blog',
          'Guides du référencement Google : https://developers.google.com/search/docs'
        ]
      },
      {
        type: 'quote',
        content: 'L\'optimisation SEO n\'est pas un événement unique mais un processus continu. Utilisez Search Console comme votre tableau de bord pour naviguer dans ce voyage et ajuster votre stratégie en fonction des données réelles.'
      }
    ]
  }
]; 