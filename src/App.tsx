import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import SupportChat from './components/SupportChat';

// Wrapper to handle exit animations properly
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ui-bg text-ui-text font-sans selection:bg-white selection:text-black flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        {/* FOOTER */}
        <footer className="py-12 px-6 bg-ui-bg border-t border-ui-border text-center">
          <p className="font-mono text-xs font-medium text-ui-muted mb-2">Built for CPIS3XX — Workplace Skills · Assignment 4</p>
          <p className="text-sm font-medium text-ui-text mb-6">Abdulellah Mojalled · UID: 2339058 · King Abdulaziz University</p>
          <p className="text-xs text-ui-muted">
            Based on: Maslach & Leiter (2016) · WHO ICD-11 (2019) · Salvagioni et al. (2021) · Leiter & Maslach (2009)
          </p>
        </footer>

        {/* AI CHATBOT */}
        <SupportChat />
      </div>
    </BrowserRouter>
  );
}
