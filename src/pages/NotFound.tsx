import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from '@/components/Footer';
import { COLORS } from '@/constants/colors';
import { cn } from '@/lib/utils';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={cn('min-h-screen bg-gradient-to-br text-white', COLORS.backgroundGradient)}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className={cn('text-4xl font-bold mb-4 font-fgdisplay', COLORS.textPrimary)}>404</h1>
          <p className={cn('text-xl mb-4 font-fginterface', COLORS.textSecondary)}>Oops! Page not found</p>
          <a href="/" className={cn('hover:underline font-fginterface', COLORS.textAccent)}>
            Return to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
