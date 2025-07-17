import { Building, MapPin, Clock, X, CheckCircle2, Circle } from "lucide-react";
import { COLORS } from '@/constants/colors';
import { cn } from '@/lib/utils';
import { Job } from '@/data/jobs';

interface JobDetailsModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

const JobDetailsModal = ({ job, isOpen, onClose }: JobDetailsModalProps) => {
  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={cn(
        'relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border',
        COLORS.cardBackground,
        COLORS.cardBorder,
        'backdrop-blur-sm'
      )}>
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <div className={cn(
              'p-3 rounded-full',
              COLORS.iconPrimary
            )}>
              <Building className={cn('w-6 h-6', COLORS.iconPrimaryText)} />
            </div>
            <div>
              <h1 className={cn('text-2xl font-bold', COLORS.textPrimary)}>
                {job.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <span className={cn('px-3 py-1 rounded-full text-sm', COLORS.iconPurple, COLORS.iconPurpleText)}>
                  {job.department}
                </span>
                <div className={cn('flex items-center space-x-1 text-sm', COLORS.textMuted)}>
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className={cn('flex items-center space-x-1 text-sm', COLORS.textMuted)}>
                  <Clock className="w-4 h-4" />
                  <span>{job.type}</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className={cn(
              'p-2 rounded-full transition-colors',
              COLORS.textMuted,
              'hover:bg-white/10'
            )}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Description */}
          <section>
            <h2 className={cn('text-xl font-semibold mb-4', COLORS.textPrimary)}>
              About this role
            </h2>
            <div
              className={cn('text-lg leading-relaxed', COLORS.textSecondary)}
              dangerouslySetInnerHTML={{ __html: job.description || "" }}
            />
          </section>

          {/* About Us */}
          {job.aboutUs && (
            <section>
              <h2 className={cn('text-xl font-semibold mb-4', COLORS.textPrimary)}>
                About Us
              </h2>
              <p className={cn('text-lg leading-relaxed', COLORS.textSecondary)}>
                {job.aboutUs}
              </p>
            </section>
          )}


          {/* Key Responsibilities */}
          {job.keyResponsibilities && (
            <section>
              <h2 className={cn('text-xl font-semibold mb-4', COLORS.textPrimary)}>
                Key Responsibilities
              </h2>
              <ul className={cn('space-y-3', COLORS.textSecondary)}>
                {job.keyResponsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className={cn('w-5 h-5 mt-0.5 flex-shrink-0', COLORS.iconPrimaryText)} />
                    <span className="text-lg">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Essential Skills */}
          {job.essentialSkills && (
            <section>
              <h2 className={cn('text-xl font-semibold mb-4', COLORS.textPrimary)}>
                Skills & Experience – Essential
              </h2>
              <ul className={cn('space-y-3', COLORS.textSecondary)}>
                {job.essentialSkills.map((skill, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Circle className={cn('w-5 h-5 mt-0.5 flex-shrink-0', COLORS.iconPrimaryText)} />
                    <span className="text-lg">{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Desirable Skills */}
          {job.desirableSkills && (
            <section>
              <h2 className={cn('text-xl font-semibold mb-4', COLORS.textPrimary)}>
                Desirable Skills
              </h2>
              <ul className={cn('space-y-3', COLORS.textSecondary)}>
                {job.desirableSkills.map((skill, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Circle className={cn('w-5 h-5 mt-0.5 flex-shrink-0', COLORS.iconSecondaryText)} />
                    <span className="text-lg">{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Why Join Us */}
          {job.whyJoinUs && (
            <section>
              <h2 className={cn('text-xl font-semibold mb-4', COLORS.textPrimary)}>
                Why Join Us
              </h2>
              <ul className={cn('space-y-3', COLORS.textSecondary)}>
                {job.whyJoinUs.map((reason, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className={cn('w-5 h-5 mt-0.5 flex-shrink-0', COLORS.iconPrimaryText)} />
                    <span className="text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Apply Button */}
          <div className="sticky bottom-0 pt-4 bg-gradient-to-t from-black/80 to-transparent">
            <a
              href={job.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'w-full block py-4 rounded-xl font-semibold text-lg transition-all duration-300 bg-gradient-to-r text-center',
                COLORS.buttonGradient,
                `hover:${COLORS.buttonHover}`,
                'transform hover:scale-[1.02]'
              )}
            >
              Apply for this position
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;
