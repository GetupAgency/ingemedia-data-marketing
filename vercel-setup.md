# 🚀 Configuration Vercel pour l'Examen

## ⚙️ Configuration Blob Storage

Pour que la sauvegarde des résultats fonctionne sur Vercel, vous devez activer Vercel Blob Storage :

### 1. Activer Blob Storage dans Vercel

1. Allez sur votre projet Vercel
2. Onglet **Storage** → **Create Database**
3. Sélectionnez **Blob** (gratuit jusqu'à 100 MB)
4. Cliquez sur **Create**

### 2. Variables d'environnement (automatiques)

Vercel configure automatiquement ces variables :
- `BLOB_READ_WRITE_TOKEN` (généré automatiquement)

**Rien à faire manuellement !** ✅

### 3. Déploiement

```bash
# Depuis votre terminal
vercel --prod

# Ou via GitHub
git push origin main
```

---

## 📁 Où sont stockés les résultats ?

### Sur Vercel Blob Storage
- **Chemin** : `exams-results/{Nom}-{Prenom}-{timestamp}.json`
- **Accès** : Public (URL directe)
- **Limite** : 100 MB gratuit (largement suffisant pour des milliers d'examens)

### Exemple
```
https://blob.vercel-storage.com/exams-results/Dupont-Marie-1733412738456.json
```

---

## 👨‍🏫 Accès Enseignant

### URL pour consulter les résultats
```
https://votre-domaine.com/exam-results-teacher-2025
```

**Mot de passe :** `Grosac4Ever!`

### Fonctionnalités
- ✅ Liste de tous les examens passés
- ✅ Voir le détail de chaque étudiant
- ✅ Télécharger tous les résultats en JSON
- ✅ Exporter en CSV pour Excel
- ✅ Actualisation en temps réel

---

## 🎓 URLs de l'examen

### Pour les étudiants (examen)
```
https://votre-domaine.com/exam-2025-ingemedia
```

### Pour vous (résultats)
```
https://votre-domaine.com/exam-results-teacher-2025
```

---

## ✅ Checklist de déploiement

Avant de lancer l'examen :

- [ ] Déployer sur Vercel
- [ ] Activer Blob Storage dans Vercel Dashboard
- [ ] Tester l'examen vous-même
- [ ] Vérifier que le JSON est bien sauvegardé
- [ ] Tester la page enseignant
- [ ] Vérifier l'export CSV

---

## 🔧 En cas de problème

### Erreur "Blob storage not configured"
→ Activez Blob Storage dans Vercel Dashboard (Storage → Create → Blob)

### Les résultats n'apparaissent pas
→ Vérifiez les logs Vercel (Functions tab)
→ Vérifiez que le token Blob est bien configuré

### Page enseignant vide
→ Mot de passe : `Grosac4Ever!`
→ Vérifiez que des examens ont bien été passés

---

## 💾 Backup local

En plus de la sauvegarde serveur, le système **télécharge également le JSON localement** comme backup de sécurité.

**Double sécurité :** Serveur + Local ! ✅

---

Tout est prêt pour Vercel ! 🎉

