import { Suspense, lazy, useState } from 'react';
import { motion } from 'motion/react';
import Quiz from '../components/Quiz';
import { FileText, MonitorPlay } from 'lucide-react';

const PrintablePDF = lazy(() => import('../components/PrintablePDF'));

export default function QuizPage() {
  const [activeTab, setActiveTab] = useState<'interactive' | 'printable'>('interactive');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start py-8 md:py-12 px-4 sm:px-6 bg-ui-bg"
    >
      <div className="w-full max-w-3xl mb-8 flex justify-center">
        <div className="flex flex-wrap sm:flex-nowrap gap-1.5 bg-ui-warm p-1.5 rounded-xl border border-ui-border shadow-sm w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('interactive')}
            className={`flex-1 sm:flex-none justify-center flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-bold transition-colors min-h-11 ${
              activeTab === 'interactive' 
                ? 'bg-ui-text text-ui-bg shadow-sm' 
                : 'text-clay-silver hover:text-ui-text'
            }`}
          >
            <MonitorPlay size={16} />
            Interactive
          </button>
          <button
            onClick={() => setActiveTab('printable')}
            className={`flex-1 sm:flex-none justify-center flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-bold transition-colors min-h-11 ${
              activeTab === 'printable' 
                ? 'bg-ui-text text-ui-bg shadow-sm' 
                : 'text-clay-silver hover:text-ui-text'
            }`}
          >
            <FileText size={16} />
            Printable (PDF)
          </button>
        </div>
      </div>

      <div className="w-full max-w-3xl">
        {activeTab === 'interactive' ? (
          <Quiz />
        ) : (
          <Suspense
            fallback={
              <div className="w-full bg-ui-warm border-2 border-ui-border rounded-3xl p-10 text-center shadow-clay-card">
                <p className="text-clay-charcoal">Loading printable view...</p>
              </div>
            }
          >
            <PrintablePDF />
          </Suspense>
        )}
      </div>
    </motion.div>
  );
}
