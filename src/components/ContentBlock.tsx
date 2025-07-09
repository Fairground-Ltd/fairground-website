
import { ReactNode, lazy, Suspense } from 'react';
import { COLORS } from '@/constants/colors';
import { cn } from '@/lib/utils';

const LazyImage = lazy(() => import('./LazyImage'));

interface ContentBlockProps {
  title: string;
  description: string;
  subDescription: string;
  imageSrc: string;
  imageAlt: string;
  icon: ReactNode;
  reverse?: boolean;
  className?: string;
}

export const ContentBlock = ({
  title,
  description,
  subDescription,
  imageSrc,
  imageAlt,
  icon,
  reverse = false,
  className,
}: ContentBlockProps) => {
  return (
    <div className={cn('container mx-auto px-4 pb-20', className)}>
      <div className={cn(
        'grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto',
        reverse && 'lg:grid-flow-col-dense'
      )}>
        {/* Text Content */}
        <div className={cn(
          'space-y-6 animate-fade-in',
          reverse && 'lg:col-start-2'
        )}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-6">
            {icon}
          </div>
          <h2 className={cn(
            'text-4xl md:text-5xl font-bold leading-tight',
            COLORS.textPrimary
          )}>
            {title}
          </h2>
          <h3 className={cn(
            'text-2xl md:text-3xl font-semibold leading-tight mb-4',
            COLORS.textSecondary
          )}>
            {description}
          </h3>
          <p className={cn(
            'text-lg md:text-xl leading-relaxed',
            COLORS.textMuted
          )}>
            {subDescription}
          </p>
        </div>

        {/* Image */}
        <div className={cn(
          'relative group animate-fade-in',
          reverse && 'lg:col-start-1'
        )}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100"></div>
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 transform hover:scale-105">
            <Suspense fallback={
              <div className="w-full h-96 bg-white/5 animate-pulse rounded-3xl"></div>
            }>
              <LazyImage
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-96 object-cover"
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
