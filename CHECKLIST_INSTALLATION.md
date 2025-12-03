# ✅ Checklist d'installation - Data Marketing App

## 🎯 Prérequis

### Logiciels nécessaires
- [ ] **Node.js** version 18 ou supérieure
  ```bash
  node --version  # Doit afficher v18.x.x ou plus
  ```
- [ ] **npm** (inclus avec Node.js)
  ```bash
  npm --version   # Doit afficher 8.x.x ou plus
  ```
- [ ] **Git** (optionnel, pour cloner le projet)
  ```bash
  git --version
  ```

## 🚀 Installation étape par étape

### 1. Récupération du projet
- [ ] Télécharger le code source (ZIP ou git clone)
- [ ] Extraire dans un dossier de votre choix
- [ ] Ouvrir un terminal dans le dossier du projet

### 2. Installation des dépendances
```bash
# Dans le dossier du projet
npm install
```
- [ ] La commande s'exécute sans erreur
- [ ] Le dossier `node_modules/` est créé
- [ ] Aucun message d'erreur critique

### 3. Test de l'application
```bash
# Lancer en mode développement
npm run dev
```
- [ ] Le serveur démarre sur `http://localhost:5173`
- [ ] La page d'accueil s'affiche correctement
- [ ] Le graphique SEO est visible et interactif

### 4. Test du build étudiant
```bash
# Arrêter le serveur (Ctrl+C) puis :
npm run build-student
npm run preview
```
- [ ] Le build se termine sans erreur
- [ ] Le serveur de preview démarre sur `http://localhost:4173`
- [ ] L'application fonctionne identiquement

## 🔍 Vérifications fonctionnelles

### Page d'accueil (Dashboard)
- [ ] Le graphique SEO principal s'affiche
- [ ] Les 5 onglets sont cliquables : Vue d'ensemble, Distribution, Catégories, Matrice, Tableau
- [ ] Le bouton "👁️ Voir correction" fonctionne
- [ ] Les graphiques sont interactifs (tooltips au survol)

### Navigation
- [ ] Tous les liens de navigation fonctionnent
- [ ] La page `/rank-tracker-analysis` s'ouvre
- [ ] Les autres pages se chargent sans erreur 404

### Données
- [ ] Les graphiques affichent des données réelles
- [ ] Le tableau des mots-clés est rempli
- [ ] Les statistiques sont cohérentes (484 mots-clés, 52.8% en position >20)

## 🛠️ Résolution de problèmes courants

### ❌ Erreur "Module not found"
```bash
rm -rf node_modules/
npm install
```

### ❌ Port déjà utilisé
```bash
# Changer de port
npm run dev -- --port 3000
```

### ❌ Erreurs de build
```bash
# Utiliser le build silencieux
npm run build-silent
```

### ❌ Application blanche
- Vérifier la console du navigateur (F12)
- S'assurer que JavaScript est activé
- Tester avec un autre navigateur

## 📊 Points de contrôle des données

### Graphique principal
- [ ] **16 mots-clés** affichés dans le scatter plot
- [ ] **6 catégories** de positions (1-3, 4-6, 7-10, 11-15, 16-20, >20)
- [ ] **Couleurs cohérentes** : Vert (bon), Jaune (moyen), Rouge (critique)

### Statistiques clés
- [ ] **484 mots-clés** au total
- [ ] **256 mots-clés** en position >20 (52.8%)
- [ ] **Position moyenne géolocalisés** : 6.8
- [ ] **Position moyenne carports** : 8.7

### Exercices
- [ ] **4 questions** d'analyse avec niveaux de difficulté
- [ ] **Réponses détaillées** disponibles avec le toggle
- [ ] **Lien vers l'exercice complet** fonctionnel

## 🎓 Validation pédagogique

### Pour l'enseignant
- [ ] L'application démarre rapidement (< 30 secondes)
- [ ] Aucun warning visible pour les étudiants
- [ ] Les données sont réalistes et exploitables
- [ ] Les exercices couvrent les objectifs pédagogiques

### Pour les étudiants
- [ ] Interface intuitive et claire
- [ ] Graphiques interactifs et engageants
- [ ] Questions progressives en difficulté
- [ ] Corrections pédagogiques et détaillées

## 📞 Support

Si un point de cette checklist échoue :

1. **Vérifier les prérequis** (Node.js, npm)
2. **Consulter les guides** (`README_ETUDIANTS.md`, `BUILD_GUIDE.md`)
3. **Réinstaller les dépendances** (`rm -rf node_modules && npm install`)
4. **Contacter le formateur** avec le message d'erreur exact

---

**✅ Si tous les points sont validés, l'application est prête pour l'enseignement !**

*Checklist version 1.0 - Data Marketing App*


