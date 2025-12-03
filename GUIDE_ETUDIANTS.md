# 🎓 Guide des Étudiants - Espace de Travail Data Marketing

## Bienvenue dans votre laboratoire d'analyse !

Félicitations ! Vous avez maintenant accès au code source complet de cette plateforme d'apprentissage. **Votre mission** : utiliser Cursor (IA) pour analyser des données marketing réelles et créer vos propres analyses dans l'espace étudiant.

---

## 🚀 Votre zone de travail : `/student-space`

### **Accès :**
- **URL directe :** `http://localhost:5174/student-space`
- **Bouton :** "Espace Étudiant" dans la navbar (bleu, en haut à droite)

### **Ce que vous y trouverez :**
- **2 graphiques de base** : ROAS et CPA par canal (Google Ads vs Meta Ads)
- **Données CSV** : 42 lignes de performances marketing sur 7 jours
- **Zone libre** : Espace pour vos propres créations
- **Guide Cursor** : Comment collaborer avec l'IA pour développer

---

## 📊 Données à votre disposition

### **Fichier principal :** `marketing_performance_data.csv`
- **Période :** 15-21 janvier 2024 (7 jours)
- **Canaux :** Google Ads (Search Brand, Search Generic, Shopping) + Meta Ads (Facebook, Instagram, Retargeting)
- **Métriques :** Impressions, Clics, Coût, Conversions, Chiffre d'affaires, Appareil, Cible démographique

### **Colonnes disponibles :**
```
Date, Canal, Campagne, Impressions, Clics, Cout_EUR, Conversions, 
Chiffre_Affaires_EUR, Appareil, Age_Cible, Genre_Cible
```

### **KPIs que vous pouvez calculer :**
- **CTR** = Clics ÷ Impressions × 100
- **CPC** = Coût ÷ Clics  
- **ROAS** = CA ÷ Coût
- **CPA** = Coût ÷ Conversions
- **Taux de conversion** = Conversions ÷ Clics × 100

---

## 🤖 Travailler avec Cursor (votre IA assistant)

### **Commandes de base :**

#### **Pour analyser les données :**
```
"Analyse le fichier marketing_performance_data.csv et dis-moi quel canal performe le mieux"
"Calcule le CTR pour chaque type de campagne"
"Compare les performances Google Ads vs Meta Ads"
```

#### **Pour créer des graphiques :**
```
"Crée un graphique en barres du CTR par campagne"
"Ajoute un graphique ligne de l'évolution du CPC par jour"
"Fais un diagramme circulaire de la répartition du budget par canal"
```

#### **Pour développer des composants :**
```
"Ajoute un nouveau composant d'analyse des performances"
"Crée un tableau détaillé des KPIs calculés"
"Développe une section de recommandations basée sur les données"
```

### **Exemples d'interactions réussies :**

**Étudiant :** "Cursor, analyse ce CSV et trouve-moi le problème principal"

**Cursor :** *Analyse les données et révèle que Meta Ads a un ROAS 2x plus faible*

**Étudiant :** "Crée un graphique qui montre clairement cette différence"

**Cursor :** *Génère un composant avec graphique comparatif*

**Étudiant :** "Maintenant ajoute tes recommandations pour améliorer Meta Ads"

**Cursor :** *Développe une section avec 3 recommandations chiffrées*

---

## ⚠️ Règles importantes

### **✅ Ce que vous POUVEZ faire :**
- **Modifier entièrement** la page `/student-space`
- **Créer de nouveaux composants** dans `src/components/` (préfixés "Student")
- **Ajouter des analyses** et graphiques personnalisés
- **Expérimenter** avec les données CSV
- **Collaborer** avec Cursor pour développer vos idées

### **❌ Ce que vous devez ÉVITER :**
- **Ne touchez PAS** aux autres onglets (Learn, Quiz, Tools, Glossary)
- **Ne modifiez PAS** la navbar principale, le footer ou le dashboard
- **Ne cassez PAS** les routes existantes
- **Ne supprimez PAS** de fichiers du cours

### **🛡️ Protection automatique :**
Le fichier `cursorrules.json` guide automatiquement Cursor :
- **Détection** quand vous travaillez dans l'espace étudiant → Encouragement
- **Alerte** si vous touchez aux composants principaux → Redirection
- **Conseils** spécifiques pour l'analyse de données marketing

---

## 🎯 Missions suggérées (par ordre de difficulté)

### **🥉 Niveau 1 - Découverte**
1. **Explorez les données** : Demandez à Cursor de vous expliquer le contenu du CSV
2. **Calculez des KPIs** : CTR, CPC, ROAS pour chaque canal
3. **Créez un tableau** : Synthèse des performances par canal

### **🥈 Niveau 2 - Analyse**
4. **Segmentez par appareil** : Desktop vs Mobile, qui performe mieux ?
5. **Analysez par type de campagne** : Search Brand vs Prospection vs Retargeting
6. **Identifiez le problème** : Pourquoi Meta Ads sous-performe ?

### **🥇 Niveau 3 - Recommandations**
7. **Proposez un plan d'action** : 3 recommandations chiffrées pour améliorer Meta Ads
8. **Créez un dashboard** : Interface complète avec vos analyses
9. **Développez une présentation** : Synthèse exécutive pour un CMO fictif

### **🏆 Niveau Expert - Innovation**
10. **Prédictions** : Que se passerait-il avec +50% budget sur Google Ads ?
11. **Optimisation** : Quel mix budget optimal entre canaux ?
12. **Créativité** : Quelle analyse originale ces données permettent-elles ?

---

## 💡 Conseils pour réussir

### **Collaboration efficace avec Cursor :**
- **Soyez spécifiques** : "Crée un graphique en barres du ROAS" plutôt que "fais un graphique"
- **Itérez progressivement** : Commencez simple puis améliorez étape par étape
- **Posez des questions** : "Que révèlent ces données ?" "Comment interpréter ce résultat ?"
- **Demandez des explications** : "Explique-moi pourquoi ce KPI est important"

### **Bonnes pratiques data marketing :**
- **Commencez par explorer** les données avant de conclure
- **Calculez plusieurs KPIs** pour avoir une vision complète
- **Cherchez les causes** derrière les chiffres
- **Proposez toujours des actions** concrètes

### **Développement avec Cursor :**
- **Testez vos modifications** régulièrement
- **Gardez le code propre** et commenté
- **Utilisez TypeScript** pour éviter les erreurs
- **Respectez la charte graphique** existante (Tailwind CSS)

---

## 🎯 Objectifs pédagogiques

À la fin de cet exercice, vous devriez savoir :

### **Compétences techniques :**
- ✅ Charger et parser des données CSV en JavaScript
- ✅ Créer des graphiques interactifs avec Chart.js
- ✅ Calculer des KPIs marketing essentiels
- ✅ Développer des composants React avec TypeScript

### **Compétences analytiques :**
- ✅ Identifier des patterns dans les données
- ✅ Comparer les performances entre canaux
- ✅ Diagnostiquer des problèmes de performance
- ✅ Formuler des recommandations actionnables

### **Compétences collaboratives :**
- ✅ Travailler efficacement avec une IA (Cursor)
- ✅ Itérer et améliorer progressivement
- ✅ Documenter et expliquer vos analyses
- ✅ Présenter des résultats de façon claire

---

## 🆘 En cas de problème

### **Si quelque chose ne fonctionne pas :**
1. **Vérifiez la console** du navigateur (F12) pour les erreurs
2. **Demandez à Cursor** : "Il y a une erreur, peux-tu la corriger ?"
3. **Revenez à une version stable** si nécessaire
4. **Contactez votre formateur** en dernier recours

### **Si vous êtes bloqués :**
- **Reformulez votre demande** à Cursor différemment
- **Divisez en étapes plus petites** : "D'abord charge les données, puis crée le graphique"
- **Regardez les exemples** dans les autres composants du projet
- **Inspirez-vous** du dashboard principal (`ComprehensiveDashboard.tsx`)

---

## 🏆 Showcase final

À la fin du TP, votre espace étudiant devrait contenir :
- **5-10 graphiques** d'analyse des données CSV
- **Tableau de synthèse** des KPIs calculés
- **Section de recommandations** avec 3-5 actions concrètes
- **Interface claire** et professionnelle

**Bonne analyse et bon développement !** 🚀

*Souvenez-vous : en entreprise, personne ne vous donnera des analyses toutes faites. Vous devrez créer vos propres insights à partir de données brutes. Cet exercice vous y prépare parfaitement !*
