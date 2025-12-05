import { list } from '@vercel/blob';
import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * API Route Vercel pour lister tous les résultats d'examen
 * GET /api/list-exam-results?password=xxx
 */
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Accepter uniquement les requêtes GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Vérification du mot de passe enseignant
    const password = req.query.password as string;
    const teacherPassword = 'Grosac4Ever!'; // Même mot de passe que le mode enseignant
    
    if (password !== teacherPassword) {
      return res.status(401).json({ error: 'Mot de passe incorrect' });
    }

    // Lister tous les fichiers dans le dossier exams-results
    const { blobs } = await list({
      prefix: 'exams-results/',
    });

    // Retourner la liste avec métadonnées
    const results = blobs.map(blob => ({
      url: blob.url,
      pathname: blob.pathname,
      uploadedAt: blob.uploadedAt,
      size: blob.size
    }));

    return res.status(200).json({
      success: true,
      count: results.length,
      results: results.sort((a, b) => 
        new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
      )
    });

  } catch (error) {
    console.error('Erreur liste résultats:', error);
    return res.status(500).json({
      error: 'Erreur lors de la récupération des résultats',
      details: error instanceof Error ? error.message : 'Erreur inconnue'
    });
  }
}

