
import { Star, Quote } from "lucide-react";
import { AnimatedCard } from './AnimatedCard';
import { COLORS } from '@/constants/colors';
import { TRANSLATIONS } from '@/constants/translations';
import { cn } from '@/lib/utils';

export const TestimonialsSection = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 py-20">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className={cn(
          'text-4xl md:text-5xl font-bold mb-6 animate-fade-in',
          COLORS.textPrimary
        )}>
          {TRANSLATIONS.testimonials.title}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {TRANSLATIONS.testimonials.reviews.map((review, index) => (
          <AnimatedCard key={index} className="relative" glowColor="glowBlue">
            <div className={cn(
              'absolute top-4 right-4 p-2 rounded-lg',
              COLORS.iconBlue
            )}>
              <Quote className={cn('w-5 h-5', COLORS.iconBlueText)} />
            </div>
            
            <div className="flex mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  className={cn('w-5 h-5 fill-current', COLORS.iconBlueText)}
                />
              ))}
            </div>
            
            <p className={cn('text-lg mb-6 leading-relaxed', COLORS.textSecondary)}>
              "{review.content}"
            </p>
            
            <div className="border-t border-white/10 pt-4">
              <h4 className={cn('font-semibold text-lg', COLORS.textPrimary)}>
                {review.name}
              </h4>
              <p className={cn('text-sm', COLORS.textMuted)}>
                {review.role}
              </p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
};
