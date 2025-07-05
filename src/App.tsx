import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingPage from './components/LoadingPage';
import Homepage from './components/Homepage';

function App() {
  const [showHomePage, setShowHomePage] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Start homepage transition slightly before loading page fully fades
    const homepageTimer = setTimeout(() => {
      setShowHomePage(true);
    }, 2000); // Start homepage fade-in 0.5s before loading completes

    // Mark loading as complete
    const loadingTimer = setTimeout(() => {
      setLoadingComplete(true);
    }, 2200); // Total loading duration: 9 seconds

    return () => {
      clearTimeout(homepageTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!loadingComplete && (
          <LoadingPage key="loading" onComplete={() => setLoadingComplete(true)} />
        )}
      </AnimatePresence>
      
      {showHomePage && (
        <Homepage key="homepage" isVisible={showHomePage} />
      )}
    </div>
  );
}

export default App;
