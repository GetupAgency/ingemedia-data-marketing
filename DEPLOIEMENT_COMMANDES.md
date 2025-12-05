# 🚀 COMMANDES DE DÉPLOIEMENT VERCEL

## 📋 MÉTHODE SANS INSTALLATION GLOBALE (RECOMMANDÉ)

Vous pouvez utiliser `npx` pour exécuter Vercel sans l'installer globalement :

```bash
# 1. Se connecter à Vercel
npx vercel login

# 2. Lier le projet
npx vercel link

# 3. Déployer en production
npx vercel --prod
```

**Avantage :** Pas besoin de permissions admin ! ✅

---

## 📋 MÉTHODE AVEC INSTALLATION GLOBALE (ALTERNATIVE)

Si vous voulez installer Vercel CLI globalement :

### Option A : Avec sudo (nécessite votre mot de passe Mac)

```bash
sudo npm install -g vercel
```
→ Entrez votre mot de passe Mac quand demandé

### Option B : Sans sudo (installation dans votre dossier utilisateur)

```bash
# Configurer npm pour installer dans votre home
npm config set prefix ~/.npm-global

# Ajouter au PATH (une seule fois)
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc

# Installer Vercel
npm install -g vercel
```

---

## ⚡ COMMANDES RAPIDES (COPIER-COLLER)

### 🎯 Si vous utilisez npx (PAS D'INSTALLATION NÉCESSAIRE)

```bash
cd /Users/adriencerdan/Projets/cmd-marketing-app

# Se connecter (votre navigateur va s'ouvrir)
npx vercel login

# Lier le projet
npx vercel link

# DÉPLOYER !
npx vercel --prod
```

---

## 🎯 OU Installer puis déployer

```bash
# Installer Vercel avec sudo (entrez votre mot de passe Mac)
sudo npm install -g vercel

# Puis utiliser vercel directement
cd /Users/adriencerdan/Projets/cmd-marketing-app
vercel login
vercel link
vercel --prod
```

---

## 📊 CE QUI VA SE PASSER

### 1. `npx vercel login`
```
Vercel CLI 33.0.1
? Log in to Vercel
> Continue with GitHub
  Continue with GitLab
  Continue with Email
```
→ Sélectionnez votre méthode → Navigateur s'ouvre → Autorisez

### 2. `npx vercel link`
```
? Set up "~/Projets/cmd-marketing-app"? [Y/n] Y
? Which scope should contain your project? [Votre compte]
? Link to existing project? [Y/n] Y (si existe) ou N (si nouveau)
? What's your project's name? cmd-marketing-app
✅ Linked to xxx/cmd-marketing-app
```

### 3. `npx vercel --prod`
```
🔍 Inspect: https://vercel.com/xxx/cmd-marketing-app/xxx
✅ Production: https://cmd-marketing-app.vercel.app [3m 24s]
```

---

## ✅ APRÈS LE DÉPLOIEMENT

**Vous recevrez l'URL de production :**
```
https://cmd-marketing-app.vercel.app
```

**OU avec domaine personnalisé :**
```
https://votre-domaine.com
```

**Testez immédiatement :**
1. `/exam-2025-ingemedia` → Examen
2. `/exam-results-teacher-2025` → Résultats (mdp: Grosac4Ever!)

---

## 🎓 N'OUBLIEZ PAS !

**AVANT de déployer, activez Blob Storage :**
1. https://vercel.com/dashboard
2. Votre projet → **Storage** → **Create Database** → **Blob**

Sinon les résultats ne seront pas sauvegardés sur le serveur ! ⚠️

---

**Prêt ? Copiez les commandes ci-dessus ! 🚀**

