
import { Music, Users, Sparkles } from "lucide-react";
import { AnimatedCard } from './AnimatedCard';
import { COLORS } from '@/constants/colors';
import { TRANSLATIONS } from '@/constants/translations';
import { cn } from '@/lib/utils';

export const FeaturesGrid = () => {
  const features = [
    {
      icon: <Music className={cn('w-8 h-8', COLORS.iconPrimaryText)} />,
      title: TRANSLATIONS.features.discover.title,
      description: TRANSLATIONS.features.discover.description,
      iconBg: COLORS.iconPrimary,
      glowColor: 'glowPrimary' as const,
    },
    {
      icon: <Sparkles className={cn('w-8 h-8', COLORS.iconSecondaryText)} />,
      title: TRANSLATIONS.features.playlists.title,
      description: TRANSLATIONS.features.playlists.description,
      iconBg: COLORS.iconSecondary,
      glowColor: 'glowSecondary' as const,
    },
    {
      icon: <Users className={cn('w-8 h-8', COLORS.iconTertiaryText)} />,
      title: TRANSLATIONS.features.community.title,
      description: TRANSLATIONS.features.community.description,
      iconBg: COLORS.iconTertiary,
      glowColor: 'glowPrimary' as const,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
      {features.map((feature, index) => (
        <AnimatedCard key={index} className="text-center" glowColor={feature.glowColor}>
          <div className={cn('inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6', feature.iconBg)}>
            {feature.icon}
          </div>
          <h3 className={cn('text-2xl font-bold mb-4 font-fgdisplay', COLORS.textPrimary)}>{feature.title}</h3>
          <p className={cn('leading-relaxed font-fginterface', COLORS.textSecondary)}>
            {feature.description}
          </p>
        </AnimatedCard>
      ))}
    </div>
  );
};
