import { Music } from "lucide-react";
import { COLORS } from '@/constants/colors';
import { TRANSLATIONS } from '@/constants/translations';
import { cn } from '@/lib/utils';
import { WaitlistModal } from './WaitlistModal';

export const HeroSection = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 py-20">
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Main Content with Fairground Logo */}
        <div className="mb-8 animate-fade-in">
          <div className={cn(
            'inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 backdrop-blur-sm rounded-2xl mb-6 border transition-all duration-500 hover:scale-110 group',
            COLORS.cardBackground,
            COLORS.cardBorder,
            `hover:${COLORS.glowPrimary}`
          )}>
            <img 
              src="/images/fairground-logo-white.svg" 
              alt="Fairground"
              className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 group-hover:scale-110"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent mb-6 animate-fade-in font-fgled">
            {TRANSLATIONS.hero.title}
          </h1>
        </div>

        {/* Main Headline */}
        <h2 className={cn(
          'text-3xl md:text-4xl font-bold mb-6 leading-tight animate-fade-in font-fgdisplay',
          COLORS.textPrimary
        )}>
          <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
            {TRANSLATIONS.hero.comingSoon}
          </span>
        </h2>

        <p className={cn(
          'text-l md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in font-fginterface',
          COLORS.textSecondary
        )}>
          {TRANSLATIONS.hero.description}
        </p>

        {/* Waitlist Signup Modal */}
        <div className="max-w-lg mx-auto mb-8 animate-fade-in">
          <WaitlistModal />
        </div>

        {/* Social Proof */}
        <p className={cn(
          'mb-16 animate-fade-in font-fginterface',
          COLORS.textMuted
        )}>
          {TRANSLATIONS.hero.socialProof}
        </p>
      </div>
    </div>
  );
};
