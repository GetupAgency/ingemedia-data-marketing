/**
 * Service de gestion des sessions de quiz et sauvegarde des résultats
 */

export interface TeamScore {
  name: string;
  score: number;
  color: string;
  answers: Array<{
    questionId: string;
    question: string;
    answer: string;
    isCorrect: boolean;
    points: number;
    timestamp: string;
  }>;
}

export interface QuizSession {
  id: string;
  sessionName: string;
  startTime: string;
  endTime?: string;
  teams: TeamScore[];
  currentRound: string;
  currentQuestionIndex: number;
  status: 'active' | 'completed' | 'paused';
  totalQuestions: number;
}

class QuizSessionService {
  private currentSession: QuizSession | null = null;
  private readonly STORAGE_KEY = 'cmd_quiz_sessions';

  /**
   * Créer une nouvelle session de quiz
   */
  createSession(sessionName: string, teams: Omit<TeamScore, 'score' | 'answers'>[]): QuizSession {
    const sessionId = `quiz_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    this.currentSession = {
      id: sessionId,
      sessionName,
      startTime: new Date().toISOString(),
      teams: teams.map(team => ({
        ...team,
        score: 0,
        answers: []
      })),
      currentRound: 'round1',
      currentQuestionIndex: 0,
      status: 'active',
      totalQuestions: 0
    };

    this.saveSession();
    return this.currentSession;
  }

  /**
   * Mettre à jour le score d'une équipe
   */
  updateTeamScore(teamIndex: number, questionId: string, question: string, answer: string, isCorrect: boolean, points: number): void {
    if (!this.currentSession) return;

    const team = this.currentSession.teams[teamIndex];
    if (!team) return;

    // Ajouter la réponse à l'historique
    team.answers.push({
      questionId,
      question,
      answer,
      isCorrect,
      points: isCorrect ? points : 0,
      timestamp: new Date().toISOString()
    });

    // Mettre à jour le score total
    if (isCorrect) {
      team.score += points;
    }

    this.saveSession();
  }

  /**
   * Mettre à jour l'état de la session
   */
  updateSessionState(round: string, questionIndex: number): void {
    if (!this.currentSession) return;

    this.currentSession.currentRound = round;
    this.currentSession.currentQuestionIndex = questionIndex;
    this.saveSession();
  }

  /**
   * Terminer la session
   */
  completeSession(): void {
    if (!this.currentSession) return;

    this.currentSession.status = 'completed';
    this.currentSession.endTime = new Date().toISOString();
    this.saveSession();
  }

  /**
   * Sauvegarder la session dans localStorage et générer JSON
   */
  private saveSession(): void {
    if (!this.currentSession) return;

    // Sauvegarde locale
    localStorage.setItem(`${this.STORAGE_KEY}_current`, JSON.stringify(this.currentSession));

    // Sauvegarde historique
    const allSessions = this.getAllSessions();
    const existingIndex = allSessions.findIndex(s => s.id === this.currentSession!.id);
    
    if (existingIndex >= 0) {
      allSessions[existingIndex] = this.currentSession;
    } else {
      allSessions.push(this.currentSession);
    }

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(allSessions));

    // Générer le fichier JSON téléchargeable
    this.generateDownloadableJSON();
  }

  /**
   * Générer un fichier JSON téléchargeable
   */
  private generateDownloadableJSON(): void {
    if (!this.currentSession) return;

    const jsonData = {
      ...this.currentSession,
      exportedAt: new Date().toISOString(),
      summary: {
        winner: this.getWinner(),
        totalQuestionsAnswered: this.currentSession.teams.reduce((sum, team) => sum + team.answers.length, 0),
        averageScore: this.currentSession.teams.reduce((sum, team) => sum + team.score, 0) / this.currentSession.teams.length,
        sessionDuration: this.getSessionDuration()
      }
    };

    // Créer un lien de téléchargement
    const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Stocker l'URL pour téléchargement ultérieur
    sessionStorage.setItem('quiz_download_url', url);
    sessionStorage.setItem('quiz_filename', `quiz_${this.currentSession.sessionName}_${new Date().toISOString().split('T')[0]}.json`);
  }

  /**
   * Télécharger les résultats en JSON
   */
  downloadResults(): void {
    const url = sessionStorage.getItem('quiz_download_url');
    const filename = sessionStorage.getItem('quiz_filename');
    
    if (url && filename) {
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }

  /**
   * Obtenir la session actuelle
   */
  getCurrentSession(): QuizSession | null {
    if (this.currentSession) return this.currentSession;

    const stored = localStorage.getItem(`${this.STORAGE_KEY}_current`);
    if (stored) {
      this.currentSession = JSON.parse(stored);
      return this.currentSession;
    }

    return null;
  }

  /**
   * Obtenir toutes les sessions
   */
  getAllSessions(): QuizSession[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  /**
   * Obtenir l'équipe gagnante
   */
  getWinner(): TeamScore | null {
    if (!this.currentSession) return null;
    
    return this.currentSession.teams.reduce((winner, current) => 
      current.score > winner.score ? current : winner
    );
  }

  /**
   * Obtenir la durée de la session
   */
  private getSessionDuration(): string {
    if (!this.currentSession || !this.currentSession.endTime) return 'En cours';
    
    const start = new Date(this.currentSession.startTime);
    const end = new Date(this.currentSession.endTime);
    const duration = Math.round((end.getTime() - start.getTime()) / 1000 / 60); // en minutes
    
    return `${duration} minutes`;
  }

  /**
   * Réinitialiser la session actuelle
   */
  resetCurrentSession(): void {
    this.currentSession = null;
    localStorage.removeItem(`${this.STORAGE_KEY}_current`);
  }

  /**
   * Obtenir les statistiques globales
   */
  getGlobalStats() {
    const allSessions = this.getAllSessions();
    
    return {
      totalSessions: allSessions.length,
      totalTeams: allSessions.reduce((sum, session) => sum + session.teams.length, 0),
      averageSessionDuration: allSessions
        .filter(s => s.endTime)
        .map(s => {
          const start = new Date(s.startTime);
          const end = new Date(s.endTime!);
          return (end.getTime() - start.getTime()) / 1000 / 60;
        })
        .reduce((sum, duration, _, arr) => sum + duration / arr.length, 0),
      mostActiveTeamColor: this.getMostActiveTeamColor(allSessions)
    };
  }

  private getMostActiveTeamColor(sessions: QuizSession[]): string {
    const colorCounts: { [key: string]: number } = {};
    
    sessions.forEach(session => {
      session.teams.forEach(team => {
        colorCounts[team.color] = (colorCounts[team.color] || 0) + 1;
      });
    });

    return Object.entries(colorCounts)
      .sort(([,a], [,b]) => b - a)[0]?.[0] || 'bg-blue-500';
  }

  /**
   * Exporter toutes les sessions vers JSON
   */
  exportAllSessions(): void {
    const allSessions = this.getAllSessions();
    const exportData = {
      exportedAt: new Date().toISOString(),
      platform: 'CMD Ingemedia - Data Marketing',
      totalSessions: allSessions.length,
      sessions: allSessions,
      globalStats: this.getGlobalStats()
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz_sessions_export_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

export const quizSessionService = new QuizSessionService();






