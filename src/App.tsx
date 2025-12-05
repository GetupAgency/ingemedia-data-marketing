import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CSVAnalysis from './pages/CSVAnalysis';
import GoogleAnalyticsPage from './pages/GoogleAnalyticsPage';
import Tutorials from './pages/Tutorials';
import TutorialDetail from './pages/TutorialDetail';
import QuizList from './pages/QuizList';
import QuizDetail from './pages/QuizDetail';
import CSVTutorial from './pages/CSVTutorial';
import Dashboard from './pages/Dashboard';
import Glossary from './pages/Glossary';
import Learn from './pages/Learn';
import Tools from './pages/Tools';
import StudentSpace from './pages/StudentSpace';
import RankTrackerAnalysis from './pages/RankTrackerAnalysis';
import ExamQuiz from './pages/ExamQuiz';
import ExamResults from './pages/ExamResults';
import Olympiades from './pages/Olympiades';
import './App.css';

/**
 * Composant principal de l'application
 * 
 * Configure le routeur et définit toutes les routes disponibles dans l'application.
 * Ce composant est le point d'entrée principal pour la navigation entre les différentes pages.
 * 
 * @returns {JSX.Element} L'application avec toutes ses routes
 */
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Barre de navigation présente sur toutes les pages */}
        <Navbar />
        
        {/* Contenu principal qui change en fonction de la route */}
        <main className="flex-grow">
          <Routes>
            {/* Routes de base - Le Dashboard est maintenant la page d'accueil */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Routes d'analyse de données */}
            <Route path="/csv-analysis" element={<CSVAnalysis />} />
            <Route path="/google-analytics" element={<GoogleAnalyticsPage />} />
            <Route path="/rank-tracker-analysis" element={<RankTrackerAnalysis />} />
            
            {/* Routes de tutoriels - Note: la route spécifique doit être avant la route dynamique */}
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/tutorial/csv-analysis" element={<CSVTutorial />} />
            <Route path="/tutorial/:id" element={<TutorialDetail />} />
            
            {/* Routes de quiz */}
            <Route path="/quizzes" element={<QuizList />} />
            <Route path="/quiz/:quizId" element={<QuizDetail />} />
            
            {/* Route secrète : Examen final (URL non listée publiquement) */}
            <Route path="/exam-2025-ingemedia" element={<ExamQuiz />} />
            
            {/* Route secrète : Résultats examen pour enseignant */}
            <Route path="/exam-results-teacher-2025" element={<ExamResults />} />
            
            {/* Route du lexique */}
            <Route path="/glossary" element={<Glossary />} />
            
            {/* Nouvelles routes */}
            <Route path="/learn" element={<Learn />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/student-space" element={<StudentSpace />} />
            <Route path="/olympiades" element={<Olympiades />} />
          </Routes>
        </main>
        
        {/* Pied de page présent sur toutes les pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
