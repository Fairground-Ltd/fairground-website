import { COLORS } from '@/constants/colors';
import { TRANSLATIONS } from '@/constants/translations';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import WaitlistSignup from './WaitlistSignup';

interface WaitlistModalProps {
  triggerText?: string;
  triggerClassName?: string;
}

export const WaitlistModal = ({ 
  triggerText = TRANSLATIONS.hero.joinWaitlist,
  triggerClassName 
}: WaitlistModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size="lg" 
          className={cn(
            'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-fginterface font-semibold px-12 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl',
            'border border-orange-500/50 hover:border-orange-400/70',
            'hover:shadow-orange-500/25',
            triggerClassName
          )}
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className={cn(
        'rounded-2xl border max-w-md mx-auto backdrop-blur-sm',
        COLORS.cardBackground,
        COLORS.cardBorder,
        'shadow-2xl [&>button]:text-white [&>button]:hover:text-gray-300'
      )}>
        <DialogHeader>
          <DialogTitle className={cn('text-2xl font-bold text-center mb-4 font-fgdisplay', COLORS.textPrimary)}>
            Join the Waitlist
          </DialogTitle>
          <p className={cn('text-m text-center mb-4 font-fginterface', COLORS.textSecondary)}>
            Be there from day one. Help build the future of independent music.
          </p>
        </DialogHeader>
        <WaitlistSignup />
      </DialogContent>
    </Dialog>
  );
};
