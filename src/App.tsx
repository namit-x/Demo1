import { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import HomePage from './components/Homepage';

function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    // Show homepage after loading animation completes
    const timer = setTimeout(() => {
      setShowHomePage(true);
    }, 9000); // Total loading duration: 9 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showHomePage && <LoadingPage />}
      {showHomePage && <HomePage />}
    </>
  );
}

export default App;