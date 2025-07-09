
import { ReactNode } from 'react';
import { COLORS } from '@/constants/colors';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: keyof typeof COLORS;
}

export const AnimatedCard = ({ children, className, glowColor }: AnimatedCardProps) => {
  const glowClass = glowColor ? COLORS[glowColor] : '';
  
  return (
    <div
      className={cn(
        'p-8 backdrop-blur-sm rounded-3xl border transition-all duration-500 transform hover:scale-105 group',
        COLORS.cardBackground,
        COLORS.cardBorder,
        `hover:${COLORS.cardBackgroundHover}`,
        `hover:${COLORS.cardBorderHover}`,
        glowClass && `hover:shadow-2xl hover:${glowClass}`,
        'animate-fade-in',
        className
      )}
    >
      {children}
    </div>
  );
};
