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
            'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-12 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl',
            'border border-purple-500/50',
            triggerClassName
          )}
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className={cn(
        'rounded-2xl border max-w-md mx-auto bg-gray-900 border-gray-700',
        'shadow-2xl [&>button]:text-white [&>button]:hover:text-gray-300'
      )}>
        <DialogHeader>
          <DialogTitle className={cn('text-2xl font-bold text-center mb-4', COLORS.textPrimary)}>
            Join the Waitlist
          </DialogTitle>
          <p className={cn('text-m text-center mb-4', COLORS.textSecondary)}>Be there from day one. Help build the future of independent music.</p>
        </DialogHeader>
        <WaitlistSignup />
      </DialogContent>
    </Dialog>
  );
}; 