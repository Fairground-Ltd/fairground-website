
export const COLORS = {
  // Official Fairground Brand Colors (v1.1)
  // Primary brand palette - exact hex values from brand guidelines
  brandBlack: '#000000',      // RGB: 0, 0, 0 - Core brand color
  brandPinkOrange: '#FF6648', // RGB: 255, 102, 72 - Primary accent color
  brandMidGray: '#E2E1E0',    // RGB: 226, 225, 224 - Neutral mid-tone
  brandWarmGray: '#F0EFED',   // RGB: 240, 239, 237 - Light neutral
  brandOffWhite: '#F5F5F5',   // RGB: 245, 245, 245 - Softest neutral
  
  // Background gradients - Dark theme with brand alignment
  backgroundGradient: 'from-slate-900 via-black to-slate-900',
  
  // Typography hierarchy - Brand-compliant text colors
  textPrimary: 'text-white',              // Primary headings and important text
  textSecondary: 'text-gray-300',         // Body text and descriptions
  textAccent: 'text-orange-400',          // Brand pink-orange for highlights
  textMuted: 'text-gray-400',             // Subtle text and labels
  
  // Interactive elements - Brand pink-orange primary system
  buttonGradient: 'from-orange-500 to-red-500',    // Primary button gradient
  buttonHover: 'from-orange-600 to-red-600',       // Hover state
  
  // Card system - Glassmorphism with brand consistency
  cardBackground: 'bg-white/5',           // Subtle card background
  cardBackgroundHover: 'bg-white/10',     // Hover state
  cardBorder: 'border-white/10',          // Card borders
  cardBorderHover: 'border-orange-400/30', // Hover border with brand color
  
  // Icon system - Brand-aligned color hierarchy
  iconPrimary: 'bg-orange-500/20',        // Primary icons - brand pink-orange
  iconSecondary: 'bg-gray-500/20',        // Secondary icons - brand mid-gray
  iconTertiary: 'bg-slate-500/20',        // Tertiary icons - brand warm-gray
  iconAccent: 'bg-red-500/20',            // Accent icons - complementary red
  
  // Icon text colors - Matching icon backgrounds
  iconPrimaryText: 'text-orange-400',     // Primary icon text
  iconSecondaryText: 'text-gray-400',     // Secondary icon text
  iconTertiaryText: 'text-slate-400',     // Tertiary icon text
  iconAccentText: 'text-red-400',         // Accent icon text
  
  // Success states - Brand-aligned feedback colors
  successBackground: 'bg-orange-500/20',
  successBorder: 'border-orange-500/30',
  successText: 'text-orange-300',
  
  // Glow effects - Brand-consistent shadow system
  glowPrimary: 'shadow-orange-500/25',    // Primary glow - brand pink-orange
  glowSecondary: 'shadow-gray-500/25',    // Secondary glow - brand mid-gray
  glowAccent: 'shadow-red-500/25',        // Accent glow - complementary red
  
  // Legacy color mapping - For backward compatibility
  // These map old color names to current brand-aligned colors
  iconPurple: 'bg-orange-500/20',         // -> Brand pink-orange
  iconBlue: 'bg-gray-500/20',             // -> Brand mid-gray
  iconIndigo: 'bg-slate-500/20',          // -> Brand warm-gray
  iconGreen: 'bg-red-500/20',             // -> Brand accent red
  
  iconPurpleText: 'text-orange-400',      // -> Brand pink-orange text
  iconBlueText: 'text-gray-400',          // -> Brand mid-gray text
  iconIndigoText: 'text-slate-400',       // -> Brand warm-gray text
  iconGreenText: 'text-red-400',          // -> Brand accent text
  
  glowPurple: 'shadow-orange-500/25',     // -> Brand pink-orange glow
  glowBlue: 'shadow-gray-500/25',         // -> Brand mid-gray glow
  glowIndigo: 'shadow-slate-500/25',      // -> Brand warm-gray glow
} as const;
