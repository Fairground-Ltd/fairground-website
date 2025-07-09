import { cn } from '@/lib/utils';
import { COLORS } from '@/constants/colors';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className={cn('min-h-screen bg-gradient-to-br text-white', COLORS.backgroundGradient)}>
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <Link 
          to="/" 
          className={cn(
            'inline-flex items-center space-x-2 transition-colors duration-200 mb-8',
            COLORS.textSecondary,
            `hover:${COLORS.textPrimary}`
          )}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
        <h1 className={cn('text-4xl font-bold mb-8', COLORS.textPrimary)}>
          Privacy Policy
        </h1>
        <div className={cn('text-lg leading-relaxed', COLORS.textSecondary)}>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">1. Information We Collect</h3>
            <div className="mb-4">
              <h4 className="font-semibold mb-1">1.1. Information You Provide</h4>
              <p>
                When you create an account or use certain features on the Platform, we may collect personal information, such as your name, email address, and other contact details.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-1">1.2. Automatically Collected Information</h4>
              <p>
                When you use the Platform, we may collect certain information automatically, including your IP address, browser type, operating system, and usage data. This information helps us understand how you use the Platform and improve your experience.
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h3>
            <div className="mb-4">
              <p>We use your personal information to:</p>
              <ul className="list-disc list-inside">
                <li>Provide access to the Platform and its features.</li>
                <li>Communicate with you about updates, offers, and relevant information.</li>
                <li>Improve our Platform and tailor the user experience.</li>
                <li>Comply with legal obligations and enforce our Terms and Conditions.</li>
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">3. Sharing Your Information</h3>
            <p>
              We will not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who help us operate the Platform, provided that they agree to keep this information confidential.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">4. Data Security</h3>
            <p>
              We take appropriate measures to protect your personal information from unauthorised access, alteration, or disclosure. However, please note that no method of data transmission over the internet is 100% secure.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">5. Your Rights</h3>
            <p>
              You have the right to access, update, or delete the personal information we hold about you. If you wish to exercise these rights, please contact us at <a href="mailto:support@fairground.com" className="underline">support@fairground.com</a>.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">6. Changes to This Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of the Platform after such changes will constitute your acceptance of the updated policy.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">7. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at <a href="mailto:support@fairground.com" className="underline">support@fairground.com</a>.
            </p>
          </div>
        </div>
      </div>
      <footer className="relative z-10 border-t border-white/10 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={cn('text-center md:text-left', COLORS.textMuted)}>
              <p>&copy; 2024 Fairground. All rights reserved.</p>
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
} 