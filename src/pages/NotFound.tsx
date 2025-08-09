import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-6">Oops! Page not found</p>
        <Link to="/" className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)]">Return to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
