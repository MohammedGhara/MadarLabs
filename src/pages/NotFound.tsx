import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-section-muted px-4">
      <div className="w-full max-w-md text-center card-premium p-10 sm:p-12 border border-border/60 shadow-elevated animate-scale-in">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Error 404</p>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-foreground tracking-tight mb-3">Page not found</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <Link
          to="/"
          className="btn-primary inline-flex w-full sm:w-auto justify-center gap-2 px-8"
        >
          <Home className="w-4 h-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
