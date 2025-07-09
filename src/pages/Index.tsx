import { Headphones} from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSection } from '@/components/HeroSection';
import { IncentivesSection } from '@/components/IncentivesSection';
import { ContentBlock } from '@/components/ContentBlock';
import { COLORS } from '@/constants/colors';
import { TRANSLATIONS } from '@/constants/translations';
import { cn } from '@/lib/utils';

const Index = () => {
  return (
    <div className={cn('min-h-screen bg-gradient-to-br text-white overflow-hidden', COLORS.backgroundGradient)}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='60' cy='60' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Hero Section */}
      <HeroSection />

      {/* Content Blocks */}
      <div className="relative z-10">
        <ContentBlock
          title={TRANSLATIONS.contentBlocks.aiDiscovery.title}
          description={TRANSLATIONS.contentBlocks.aiDiscovery.description}
          subDescription={TRANSLATIONS.contentBlocks.aiDiscovery.subDescription}
          imageSrc="/images/fairground-hero.png"
          imageAlt="AI Music Discovery"
          icon={<Headphones className={cn('w-8 h-8', COLORS.iconPurpleText)} />}
        />
      </div>

      

      {/* Exclusive Incentives Section */}
      <IncentivesSection />
      {/* <TestimonialsSection /> */}

      {/* What You'll Be Part Of Section */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={cn('text-3xl md:text-5xl font-bold mb-4', COLORS.textPrimary)}>
              {TRANSLATIONS.whatYoullBePartOf.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TRANSLATIONS.whatYoullBePartOf.features.map((feature, index) => (
              <div 
                key={index}
                className={cn(
                  'backdrop-blur-sm rounded-2xl border p-8 transition-all duration-300 hover:scale-105 bg-black/20',
                  COLORS.cardBackground,
                  COLORS.cardBorder
                )}
              >
                <h3 className={cn('text-xl md:text-2xl font-bold mb-4', COLORS.textPrimary)}>
                  {feature.title}
                </h3>
                <p className={cn('text-base md:text-lg leading-relaxed', COLORS.textSecondary)}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Waitlist Banner */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className={cn(
            'rounded-3xl border p-16 text-center max-w-4xl mx-auto transition-all duration-300',
            COLORS.cardBackground,
            COLORS.cardBorder,
            'bg-gradient-to-br from-purple-900/20 to-blue-900/20'
          )}>
            <h2 className={cn('text-3xl md:text-5xl font-bold mb-6', COLORS.textPrimary)}>
              {TRANSLATIONS.waitlistBanner.title}
            </h2>
            <p className={cn('text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed', COLORS.textSecondary)}>
              {TRANSLATIONS.waitlistBanner.description}
            </p>
           
          </div>
        </div>
      </div>

      {/* Add new sections here */}

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={cn('text-center md:text-left', COLORS.textMuted)}>
              <p>{TRANSLATIONS.footer.copyright}</p>
            </div>
            <nav className="flex space-x-6">
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
    </div>
  );
};

export default Index;
