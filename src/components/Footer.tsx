import { Link } from "react-router-dom";
import { COLORS } from '@/constants/colors';
import { TRANSLATIONS } from '@/constants/translations';
import { cn } from '@/lib/utils';

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className={cn('text-center md:text-left flex items-center space-x-4', COLORS.textMuted)}>
            <img 
              src="/images/fairground-logo-white.svg" 
              alt="Fairground"
              className="w-6 h-6 md:w-8 md:h-8 opacity-80"
            />
            <p className="font-fginterface">{TRANSLATIONS.footer.copyright}</p>
          </div>
          <nav className="flex space-x-6 font-fginterface">
            <Link 
              to="/jobs" 
              className={cn(
                'transition-colors duration-200',
                COLORS.textMuted,
                `hover:${COLORS.textPrimary}`
              )}
            >
              Careers
            </Link>
            <Link 
              to="/terms-and-conditions" 
              className={cn(
                'transition-colors duration-200',
                COLORS.textMuted,
                `hover:${COLORS.textPrimary}`
              )}
            >
              Terms and Conditions
            </Link>
            <Link 
              to="/privacy-policy" 
              className={cn(
                'transition-colors duration-200',
                COLORS.textMuted,
                `hover:${COLORS.textPrimary}`
              )}
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
