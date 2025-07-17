import { ReactNode, lazy, Suspense } from 'react';
import { COLORS } from '@/constants/colors';
import { cn } from '@/lib/utils';
import { Camera } from 'lucide-react';

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
  photoCredit?: string;
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
  photoCredit,
}: ContentBlockProps) => {
  return (
    <div className={cn('container mx-auto px-4 pb-20 relative', className)}>
      {/* Subtle side logo accent */}
      <div className="absolute top-10 right-10 opacity-3 pointer-events-none hidden lg:block">
      
      </div>
      
      <div className={cn(
        'grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative z-10',
        reverse && 'lg:grid-flow-col-dense'
      )}>
        {/* Text Content */}
        <div className={cn(
          'space-y-6 animate-fade-in',
          reverse && 'lg:col-start-2'
        )}>
          <div className={cn(
            'inline-flex items-center justify-center w-16 h-16 backdrop-blur-sm rounded-2xl border mb-6',
            COLORS.cardBackground,
            COLORS.cardBorder
          )}>
            {icon}
          </div>
          <h2 className={cn(
            'text-4xl md:text-5xl font-bold leading-tight font-fgdisplay',
            COLORS.textPrimary
          )}>
            {title}
          </h2>
          <h3 className={cn(
            'text-2xl md:text-3xl font-semibold leading-tight mb-4 font-fginterface',
            COLORS.textSecondary
          )}>
            {description}
          </h3>
          <p className={cn(
            'text-lg md:text-xl leading-relaxed font-fginterface',
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
          <div className={cn(
            'absolute inset-0 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100',
            COLORS.glowPrimary
          )}></div>
          <div className={cn(
            'relative backdrop-blur-sm rounded-3xl border overflow-hidden transition-all duration-500 transform hover:scale-105',
            COLORS.cardBackground,
            COLORS.cardBorder,
            `hover:${COLORS.cardBorderHover}`
          )}>
            <Suspense fallback={
              <div className={cn('w-full h-96 animate-pulse rounded-3xl', COLORS.cardBackground)}></div>
            }>
              <LazyImage
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-96 object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Suspense>
          </div>
          
          {/* Photo Credit */}
          {photoCredit && (
            <div className="mt-4 flex items-center justify-center space-x-2">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              <div className="px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                <p className="text-xs text-gray-300 font-fginterface flex items-center space-x-1.5">
                  <Camera className="w-3 h-3 text-white" />
                  <span>{photoCredit}</span>
                </p>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
