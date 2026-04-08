import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-ui-bg/95 backdrop-blur-md border-b border-ui-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-xl bg-clay-lemon-500 flex items-center justify-center shadow-clay-card group-hover:rotate-12 transition-transform text-lg">
            🧠
          </div>
          <span className="font-bold tracking-tight text-ui-text text-base sm:text-lg">Burnout Compass</span>
        </Link>

        <div className="flex items-center gap-5 md:gap-8">
          <Link 
            to="/" 
            className={`text-[14px] sm:text-[15px] font-bold transition-colors ${location.pathname === '/' ? 'text-clay-lemon-500 underline underline-offset-8 decoration-2 decoration-clay-lemon-500/60' : 'text-ui-muted hover:text-ui-text'}`}
          >
            Learn
          </Link>
          <Link 
            to="/quiz" 
            className={`text-[14px] sm:text-[15px] font-bold transition-colors flex items-center gap-2 ${location.pathname === '/quiz' ? 'text-clay-pomegranate-400 underline underline-offset-8 decoration-2 decoration-clay-pomegranate-400/60' : 'text-ui-muted hover:text-ui-text'}`}
          >
            Quiz
          </Link>
          <Link 
            to="/quiz"
            className="hidden sm:inline-flex px-5 py-2.5 bg-clay-matcha-600 text-white rounded-xl text-sm font-bold tracking-wider hover-brutalist-sm focus-dashed border border-clay-matcha-800"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
}
