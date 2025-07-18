
import { Music, Users, Sparkles } from "lucide-react";
import { AnimatedCard } from './AnimatedCard';
import { COLORS } from '@/constants/colors';
import { TRANSLATIONS } from '@/constants/translations';
import { cn } from '@/lib/utils';

export const FeaturesGrid = () => {
  const features = [
    {
      icon: <Music className={cn('w-8 h-8 text-white')} />,
      title: TRANSLATIONS.features.discover.title,
      description: TRANSLATIONS.features.discover.description,
      iconBg: 'bg-gray-900 border border-gray-700',
      glowColor: "glowPrimary" as keyof typeof COLORS,
    },
    {
      icon: <Sparkles className={cn('w-8 h-8 text-white')} />,
      title: TRANSLATIONS.features.playlists.title,
      description: TRANSLATIONS.features.playlists.description,
      iconBg: 'bg-gray-900 border border-gray-700',
      glowColor: "glowSecondary" as keyof typeof COLORS,
    },
    {
      icon: <Users className={cn('w-8 h-8 text-white')} />,
      title: TRANSLATIONS.features.community.title,
      description: TRANSLATIONS.features.community.description,
      iconBg: 'bg-gray-900 border border-gray-700',
      glowColor: "glowAccent" as keyof typeof COLORS,
    },
  ];  return (
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
