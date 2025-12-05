import { put } from '@vercel/blob';
import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * API Route Vercel pour sauvegarder les résultats d'examen
 * POST /api/save-exam-result
 */
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Accepter uniquement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { etudiant, examen, detail_reponses, analyse_thematiques } = req.body;

    // Validation des données
    if (!etudiant?.nom || !etudiant?.prenom || !examen) {
      return res.status(400).json({ error: 'Données invalides' });
    }

    // Créer le nom du fichier
    const fileName = `${etudiant.nom}-${etudiant.prenom}-${Date.now()}.json`;
    
    // Préparer les données complètes
    const results = {
      etudiant,
      examen,
      detail_reponses,
      analyse_thematiques
    };

    // Sauvegarder dans Vercel Blob Storage
    const blob = await put(
      `exams-results/${fileName}`,
      JSON.stringify(results, null, 2),
      {
        access: 'public',
        contentType: 'application/json',
      }
    );

    return res.status(200).json({
      success: true,
      message: 'Résultats sauvegardés avec succès',
      url: blob.url,
      fileName
    });

  } catch (error) {
    console.error('Erreur sauvegarde résultats:', error);
    return res.status(500).json({
      error: 'Erreur lors de la sauvegarde',
      details: error instanceof Error ? error.message : 'Erreur inconnue'
    });
  }
}

