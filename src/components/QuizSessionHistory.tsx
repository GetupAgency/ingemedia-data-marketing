import React, { useState, useEffect } from 'react';
import { quizSessionService, QuizSession } from '../services/QuizSessionService';

const QuizSessionHistory: React.FC = () => {
  const [sessions, setSessions] = useState<QuizSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<QuizSession | null>(null);

  useEffect(() => {
    setSessions(quizSessionService.getAllSessions());
  }, []);

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleString('fr-FR');
  };

  const getSessionDuration = (session: QuizSession) => {
    if (!session.endTime) return 'En cours';
    const start = new Date(session.startTime);
    const end = new Date(session.endTime);
    const duration = Math.round((end.getTime() - start.getTime()) / 1000 / 60);
    return `${duration} min`;
  };

  if (sessions.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-lg p-8 text-center">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Aucune session enregistrée</h3>
        <p className="text-slate-600 text-sm">Les résultats des quiz apparaîtront ici après les sessions.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Liste des sessions */}
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Historique des sessions</h3>
            <button
              onClick={() => quizSessionService.exportAllSessions()}
              className="text-sm bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-700 transition-colors"
            >
              📥 Exporter tout
            </button>
          </div>
        </div>
        
        <div className="divide-y divide-slate-200">
          {sessions.map((session, index) => (
            <div key={session.id} className="p-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-slate-900">{session.sessionName}</h4>
                  <div className="text-sm text-slate-600 mt-1">
                    <span>Démarré : {formatDate(session.startTime)}</span>
                    <span className="mx-2">•</span>
                    <span>Durée : {getSessionDuration(session)}</span>
                    <span className="mx-2">•</span>
                    <span>{session.teams.length} équipes</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    session.status === 'completed' ? 'bg-green-100 text-green-800' :
                    session.status === 'active' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {session.status === 'completed' ? 'Terminé' : 
                     session.status === 'active' ? 'En cours' : 'Pausé'}
                  </div>
                  
                  <button
                    onClick={() => setSelectedSession(selectedSession?.id === session.id ? null : session)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Aperçu des équipes */}
              <div className="mt-3 flex space-x-2">
                {session.teams.map((team, teamIndex) => (
                  <div key={teamIndex} className={`${team.color} text-white px-2 py-1 rounded text-xs`}>
                    {team.name}: {team.score}pts
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Détails de session sélectionnée */}
      {selectedSession && (
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">
              Détails : {selectedSession.sessionName}
            </h3>
            <button
              onClick={() => setSelectedSession(null)}
              className="text-slate-400 hover:text-slate-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedSession.teams.map((team, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-4">
                <div className={`${team.color} text-white px-3 py-2 rounded-lg text-center mb-4`}>
                  <div className="font-bold text-lg">{team.name}</div>
                  <div className="text-2xl font-bold">{team.score} points</div>
                </div>
                
                {team.answers && team.answers.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-900 text-sm">Réponses détaillées :</h4>
                    <div className="max-h-32 overflow-y-auto space-y-1">
                      {team.answers.map((answer, answerIndex) => (
                        <div key={answerIndex} className={`p-2 rounded text-xs ${
                          answer.isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                        }`}>
                          <div className="font-medium">{answer.question}</div>
                          <div className="flex justify-between mt-1">
                            <span>{answer.answer}</span>
                            <span>{answer.isCorrect ? `+${answer.points}pts` : '0pt'}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizSessionHistory;






