import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Simple component that redirects to static HTML
const App = () => {
  // Redirect to the static HTML files
  window.location.href = '/index.html';
  return null;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);