import { cn } from '@/lib/utils';
import { COLORS } from '@/constants/colors';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/Footer';

export default function TermsAndConditions() {
  return (
    <div className={cn('min-h-screen bg-gradient-to-br text-white', COLORS.backgroundGradient)}>
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <Link 
          to="/" 
          className={cn(
            'inline-flex items-center space-x-2 transition-colors duration-200 mb-8 font-fginterface',
            COLORS.textSecondary,
            `hover:${COLORS.textPrimary}`
          )}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
        <h1 className={cn('text-4xl font-bold mb-8 font-fgdisplay', COLORS.textPrimary)}>
          Terms and Conditions
        </h1>
        <div className={cn('text-lg leading-relaxed font-fginterface', COLORS.textSecondary)}>
          <p>Welcome to <strong>Fairground</strong> ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of the Fairground website and mobile application (collectively referred to as the "Platform"). By accessing or using our Platform, you agree to be bound by these Terms. If you do not agree with these Terms, you may not use the Platform.</p>
          <h2 className="mt-8 mb-2 text-2xl font-semibold font-fgdisplay">1. Use of the Platform</h2>
          <p className="mb-4"><strong>1.1. Eligibility</strong><br/>
            You must be at least 18 years of age to use Fairground. By using the Platform, you represent and warrant that you are of legal age and have the right, authority, and capacity to enter into this agreement and comply with these Terms.
          </p>
          <p className="mb-4"><strong>1.2. Account Registration</strong><br/>
            To use certain features of Fairground, you may need to create an account. You are responsible for maintaining the confidentiality of your account and any activities that occur under your account. You agree to provide accurate and complete information during the registration process and to update such information as needed.
          </p>
          <h2 className="mt-8 mb-2 text-2xl font-semibold font-fgdisplay">2. Content and Intellectual Property</h2>
          <p className="mb-4"><strong>2.1. User-Generated Content</strong><br/>
            Fairground allows you to create, upload, and share content, including, but not limited to, music, comments, and posts ("User Content"). You retain all rights to your User Content but grant Fairground a worldwide, non-exclusive, royalty-free license to use, display, and distribute your User Content on the Platform.
          </p>
          <p className="mb-4"><strong>2.2. Fairground Content</strong><br/>
            All content provided by Fairground, including, but not limited to, the website design, logos, text, and multimedia, is the intellectual property of Fairground or its licensors. You may not use, copy, modify, or distribute any of the Fairground content without prior written consent.
          </p>
          <h2 className="mt-8 mb-2 text-2xl font-semibold font-fgdisplay">3. In-App Purchases and Ticket Sales</h2>
          <p className="mb-4"><strong>3.1. In-App Purchases</strong><br/>
            Fairground may offer digital products or services for purchase. All purchases are final, and we do not offer refunds except as required by law.
          </p>
          <p className="mb-4"><strong>3.2. Ticket Sales</strong><br/>
            Fairground may provide a platform for purchasing event tickets. Fairground is not responsible for event cancellations or refunds unless otherwise stated. Ticket purchases are subject to additional terms provided during the purchase process.
          </p>
          <h2 className="mt-8 mb-2 text-2xl font-semibold font-fgdisplay">4. Prohibited Activities</h2>
          <p className="mb-2">You agree not to engage in the following activities while using the Platform:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Uploading or sharing unlawful, defamatory, or abusive content.</li>
            <li>Using the Platform for illegal activities or promoting such activities.</li>
            <li>Attempting to hack or interfere with the security or functionality of the Platform.</li>
          </ul>
          <h2 className="mt-8 mb-2 text-2xl font-semibold font-fgdisplay">5. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, Fairground, its affiliates, and its licensors shall not be liable for any indirect, incidental, or consequential damages, including loss of data, profits, or business, arising from your use of the Platform.
          </p>
          <p className="mb-4">
            Our liability shall be limited to the amount of six months of service fees, if applicable. We will not be liable for any failure or delay due to force majeure events, including but not limited to natural disasters, war, or technical failures.
          </p>
          <h2 className="mt-8 mb-2 text-2xl font-semibold font-fgdisplay">6. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your access to the Platform at any time, without prior notice or liability, for any reason, including, but not limited to, your violation of these Terms.
          </p>
          <h2 className="mt-8 mb-2 text-2xl font-semibold font-fgdisplay">7. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of Jersey Channel Islands, without regard to its conflict of law principles.
          </p>
          <h2 className="mt-8 mb-2 text-2xl font-semibold font-fgdisplay">8. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to update these Terms at any time. We will notify you of significant changes by posting the new Terms on the Platform or by other reasonable means. Your continued use of the Platform after such changes will constitute your acceptance of the new Terms.
          </p>
          <h2 className="mt-8 mb-2 text-2xl font-semibold font-fgdisplay">9. Contact Us</h2>
          <p className="mb-4">If you have any questions or concerns about these Terms, please contact us at <a href="mailto:support@fairground.music" className="underline">support@fairground.music</a>.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}