import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Pillars from './components/Pillars/Pillars'
import MobileSidebar from './components/MobileSidebar/MobileSidebar';
import AuthPage from './pages/AuthPage/AuthPage';

import './styles/main.scss'

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert" style={{ padding: '20px', color: 'red' }}>
      <h2>Oops, something went wrong!</h2>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{error.message}</pre>
    </div>
  );
}

function App() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(prevState => !prevState);
    document.body.style.overflow = isMobileSidebarOpen ? 'unset' : 'hidden';
  };

  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <div className="app">
            <Navbar onMobileMenuToggle={toggleMobileSidebar} />
            <MobileSidebar isOpen={isMobileSidebarOpen} onClose={toggleMobileSidebar} />
            {isMobileSidebarOpen && <div className="overlay" onClick={toggleMobileSidebar}></div>}

            <Routes>
              <Route path="/" element={
                <main className="main-content">
                  <Hero />
                  <Pillars />
                  <div className="container">
                    {/* Other sections will go here */}
                  </div>
                </main>
              } />
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App
