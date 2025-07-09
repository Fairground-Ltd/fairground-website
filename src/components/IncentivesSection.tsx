
import { Gift, Clock, Crown } from "lucide-react";
import { AnimatedCard } from './AnimatedCard';
import { COLORS } from '@/constants/colors';
import { TRANSLATIONS } from '@/constants/translations';
import { cn } from '@/lib/utils';

const iconMap = {
  gift: Gift,
  clock: Clock,
  crown: Crown,
};

export const IncentivesSection = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 py-16">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className={cn(
          'text-4xl md:text-5xl font-bold mb-6 animate-fade-in',
          COLORS.textPrimary
        )}>
          {TRANSLATIONS.incentives.title}
        </h2>
        <p className={cn(
          'text-xl animate-fade-in',
          COLORS.textSecondary
        )}>
          {TRANSLATIONS.incentives.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {TRANSLATIONS.incentives.benefits.map((benefit, index) => {
          const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
          return (
            <AnimatedCard key={index} className="text-center" glowColor="glowPurple">
              <div className={cn(
                'inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6',
                COLORS.iconPurple
              )}>
                <IconComponent className={cn('w-8 h-8', COLORS.iconPurpleText)} />
              </div>
              <h3 className={cn('text-2xl font-bold mb-4', COLORS.textPrimary)}>
                {benefit.title}
              </h3>
              <p className={cn('leading-relaxed', COLORS.textSecondary)}>
                {benefit.description}
              </p>
            </AnimatedCard>
          );
        })}
      </div>
    </div>
  );
};
