/**
 * Interface pour une question de quiz
 */
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

/**
 * Interface pour un quiz complet
 */
export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  difficulty: string;
  duration: string;
  category: string;
  image: string;
} 