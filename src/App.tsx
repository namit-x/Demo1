import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router";
import LoadingPage from './components/LoadingPage'
import Homepage from './pages/Homepage'

const queryClient = new QueryClient();

const App = () => {
  const [showHomePage, setShowHomePage] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Start homepage transition slightly before loading page fully fades
    const homepageTimer = setTimeout(() => {
      setShowHomePage(true);
    }, 100); // Start homepage fade-in

    // Mark loading as complete
    const loadingTimer = setTimeout(() => {
      setLoadingComplete(true);
    }, 1500); // Total loading duration

    return () => {
      clearTimeout(homepageTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative bg-charcoal-950">
          <AnimatePresence mode="wait">
            {!loadingComplete && (
              <LoadingPage key="loading" onComplete={() => setLoadingComplete(true)} />
            )}
          </AnimatePresence>
          
          {showHomePage && (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Homepage isVisible={showHomePage} />} />
              </Routes>
            </BrowserRouter>
          )}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
