import { Music } from "lucide-react";
import { COLORS } from '@/constants/colors';
import { TRANSLATIONS } from '@/constants/translations';
import { cn } from '@/lib/utils';

export const HeroSection = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-in">
          <div className={cn(
            'inline-flex items-center justify-center w-16 h-16 backdrop-blur-sm rounded-2xl mb-6 border transition-all duration-500 hover:scale-110 group',
            COLORS.cardBackground,
            COLORS.cardBorder,
            `hover:${COLORS.glowPurple}`
          )}>
            <Music className={cn('w-8 h-8 transition-colors duration-300 group-hover:text-purple-200', COLORS.textAccent)} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6 animate-fade-in">
            {TRANSLATIONS.hero.title}
          </h1>
        </div>

        {/* Main Headline */}
        <h2 className={cn('text-3xl md:text-4xl font-bold mb-6 leading-tight animate-fade-in', COLORS.textPrimary)}>
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {TRANSLATIONS.hero.comingSoon}
          </span>
        </h2>

        <p className={cn('text-l md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in', COLORS.textSecondary)}>
          {TRANSLATIONS.hero.description}
        </p>

       

        {/* Social Proof */}
        <p className={cn('mb-16 animate-fade-in', COLORS.textMuted)}>
          {TRANSLATIONS.hero.socialProof}
        </p>
      </div>
    </div>
  );
};
