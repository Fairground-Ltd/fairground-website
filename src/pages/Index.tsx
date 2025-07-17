import { Headphones, Users, Mic, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSection } from '@/components/HeroSection';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { IncentivesSection } from '@/components/IncentivesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContentBlock } from '@/components/ContentBlock';
import { WaitlistModal } from '@/components/WaitlistModal';
import { Footer } from '@/components/Footer';
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
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-red-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-orange-600/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Hero Section */}
      <HeroSection />

      {/* Content Blocks */}
      <div className="relative z-10">
        <ContentBlock
          title={TRANSLATIONS.contentBlocks.aiDiscovery.title}
          description={TRANSLATIONS.contentBlocks.aiDiscovery.description}
          subDescription={TRANSLATIONS.contentBlocks.aiDiscovery.subDescription}
          imageSrc="images/fairground-hero.png"
          imageAlt="AI Music Discovery"
          icon={<Headphones className={cn('w-8 h-8', COLORS.iconPrimaryText)} />}
          photoCredit="Photo by Lucas Eveleigh"
        />
      </div>

      

      <IncentivesSection />
     <div className="relative z-10 py-20">
  <div className="container mx-auto px-4">
    {/* Background Logo Watermark */}
    <div 
      className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-5 pointer-events-none"
      style={{
        backgroundImage: 'url(/images/fairground-logo-white.svg)',
        backgroundSize: '300px',
        backgroundPosition: 'center'
      }}
    />
    <div className="text-center mb-16 relative z-10">
      <h2 className={cn('text-3xl md:text-5xl font-bold mb-4 font-fgdisplay', COLORS.textPrimary)}>
        {TRANSLATIONS.whatYoullBePartOf.title}
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {TRANSLATIONS.whatYoullBePartOf.features.map((feature, index) => (
        <div 
          key={index}
          className={cn(
            'backdrop-blur-sm rounded-2xl border p-8 transition-all duration-300 hover:scale-105 bg-black/20 relative overflow-hidden',
            COLORS.cardBackground,
            COLORS.cardBorder
          )}
        >
          {/* Subtle corner logo accent - positioned on left side */}
          <div className="absolute top-2 left-2 opacity-10 pointer-events-none">
            <img 
              src="/images/fairground-logo-white.svg" 
              alt="Fairground"
              className="w-6 h-6"
            />
          </div>
          
          <h3 className={cn('text-xl md:text-2xl font-bold mb-4 font-fgdisplay', COLORS.textPrimary)}>
            {feature.title}
          </h3>
          <p className={cn('text-base md:text-lg leading-relaxed font-fginterface', COLORS.textSecondary)}>
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
    {/* Floating logo elements */}
    <div className="absolute top-20 left-10 opacity-5 pointer-events-none hidden md:block">
      <img 
        src="/images/fairground-logo-white.svg" 
        alt="Fairground"
        className="w-16 h-16 animate-pulse"
      />
    </div>
    <div className="absolute bottom-20 right-10 opacity-5 pointer-events-none hidden md:block">
      <img 
        src="/images/fairground-logo-white.svg" 
        alt="Fairground"
        className="w-12 h-12 animate-pulse"
        style={{ animationDelay: '1s' }}
      />
    </div>
    
    <div className={cn(
      'rounded-3xl border p-16 text-center max-w-4xl mx-auto transition-all duration-300 relative z-10',
      COLORS.cardBackground,
      COLORS.cardBorder,
      'bg-gradient-to-br from-orange-900/20 to-red-900/20'
    )}>
      <h2 className={cn('text-3xl md:text-5xl font-bold mb-6 font-fgdisplay', COLORS.textPrimary)}>
        {TRANSLATIONS.waitlistBanner.title}
      </h2>
      <p className={cn('text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-fginterface', COLORS.textSecondary)}>
        {TRANSLATIONS.waitlistBanner.description}
      </p>
      <WaitlistModal 
        triggerText="Join Waitlist"
        triggerClassName="text-xl px-16 py-5"
      />
    </div>
  </div>
</div>


      {/* Add new sections here */}

      <Footer />
    </div>
  );
};

export default Index;
