import { ArrowLeft, MapPin, Clock, Users, Award, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { COLORS } from '@/constants/colors';
import { cn } from '@/lib/utils';
import JobDetailsModal from '@/components/JobDetailsModal';

const Jobs = () => {
  const [openPositions, setOpenPositions] = useState<any[]>([]);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://fairground-music.pinpointhq.com/postings.json")
      .then(res => res.json())
      .then(data => {
        const jobs = (data.data || []).map((posting: any) => ({
          id: posting.id,
          title: posting.title,
          department: posting.job?.department?.name || '',
          location: posting.location?.name || '',
          type: posting.employment_type_text || posting.employment_type || '',
          description: posting.description,
          aboutUs: '', // Not provided in API
          roleOverview: posting.description,
          essentialSkills: extractSkills(posting.skills_knowledge_expertise, 'Essential'),
          desirableSkills: extractSkills(posting.skills_knowledge_expertise, 'Desirable'),
          keyResponsibilities: extractList(posting.key_responsibilities),
          applicationRequirements: [], // Not provided in API
          whyJoinUs: extractList(posting.benefits),
          url: posting.url
        }));
        setOpenPositions(jobs);
      });
  }, []);

  function extractList(html: string | undefined) {
    if (!html) return [];
    const matches = html.match(/<li[^>]*>(.*?)<\/li>/g) || [];
    return matches.map(item => item.replace(/<[^>]+>/g, '').trim());
  }

  function extractSkills(html: string | undefined, section: 'Essential' | 'Desirable') {
    if (!html) return [];
    // Find the section header
    const sectionRegex = new RegExp(`<strong>${section}<\/strong><\/h3>.*?<ul>([\s\S]*?)<\/ul>`, 'i');
    const sectionMatch = html.match(sectionRegex);
    if (!sectionMatch) return [];
    const ulContent = sectionMatch[1];
    const matches = ulContent.match(/<li[^>]*>(.*?)<\/li>/g) || [];
    return matches.map(item => item.replace(/<[^>]+>/g, '').trim());
  }

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Flexible Work",
      description: "Remote-first culture with flexible working hours"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Growth Opportunities",
      description: "Professional development and learning budget"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Great Team",
      description: "Work with passionate, talented individuals"
    }
  ];

  const handleJobClick = (job: any) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className={cn('min-h-screen bg-gradient-to-br text-white', COLORS.backgroundGradient)}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='60' cy='60' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className={cn(
            'inline-flex items-center space-x-2 transition-colors duration-200',
            COLORS.textSecondary,
            `hover:${COLORS.textPrimary}`
          )}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={cn('text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent')}>
            Join Our Team
          </h1>
          <p className={cn('text-xl md:text-2xl mb-8 leading-relaxed', COLORS.textSecondary)}>
            Help us revolutionize how people discover and share music. We're building the future of social music experiences.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <h2 className={cn('text-3xl md:text-4xl font-bold text-center mb-12', COLORS.textPrimary)}>
          Open Positions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {openPositions.map((position, index) => (
            <div
              key={position.id || index}
              onClick={() => handleJobClick(position)}
              className={cn(
                'p-6 backdrop-blur-sm rounded-2xl border transition-all duration-300 hover:scale-105 cursor-pointer group',
                COLORS.cardBackground,
                COLORS.cardBorder,
                `hover:${COLORS.cardBackgroundHover}`,
                `hover:${COLORS.cardBorderHover}`
              )}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className={cn('text-xl font-semibold mb-2 md:mb-0', COLORS.textPrimary)}>
                  {position.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className={cn('px-3 py-1 rounded-full text-sm', COLORS.iconPurple, COLORS.iconPurpleText)}>
                    {position.department}
                  </span>
                  <div className={cn('flex items-center space-x-1 text-sm', COLORS.textMuted)}>
                    <MapPin className="w-4 h-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className={cn('flex items-center space-x-1 text-sm', COLORS.textMuted)}>
                    <Clock className="w-4 h-4" />
                    <span>{position.type}</span>
                  </div>
                </div>
              </div>
              <div className={cn('leading-relaxed', COLORS.textSecondary)}
                dangerouslySetInnerHTML={{
                  __html: (position.description || '').replace(/<[^>]+>/g, '').slice(0, 200) + (position.description && position.description.replace(/<[^>]+>/g, '').length > 200 ? '...' : '')
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Company Culture */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={cn('text-3xl md:text-4xl font-bold mb-8', COLORS.textPrimary)}>
            Why Work With Us?
          </h2>
          <p className={cn('text-lg mb-12 leading-relaxed', COLORS.textSecondary)}>
            We're a passionate team of music lovers and technology enthusiasts building something revolutionary. 
            Join us in creating the next generation of music discovery and social listening experiences.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <h2 className={cn('text-3xl md:text-4xl font-bold text-center mb-12', COLORS.textPrimary)}>
          Benefits & Perks
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={cn(
                'text-center p-6 backdrop-blur-sm rounded-2xl border transition-all duration-300 hover:scale-105',
                COLORS.cardBackground,
                COLORS.cardBorder,
                `hover:${COLORS.cardBackgroundHover}`
              )}
            >
              <div className={cn(
                'inline-flex items-center justify-center w-12 h-12 rounded-full mb-4',
                COLORS.iconPurple,
                COLORS.iconPurpleText
              )}>
                {benefit.icon}
              </div>
              <h3 className={cn('text-lg font-semibold mb-2', COLORS.textPrimary)}>
                {benefit.title}
              </h3>
              <p className={cn('text-sm', COLORS.textSecondary)}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className={cn(
          'max-w-2xl mx-auto text-center p-8 backdrop-blur-sm rounded-3xl border',
          COLORS.cardBackground,
          COLORS.cardBorder
        )}>
          <h2 className={cn('text-2xl md:text-3xl font-bold mb-4', COLORS.textPrimary)}>
            Don't See Your Role?
          </h2>
          <p className={cn('mb-6', COLORS.textSecondary)}>
            We're always looking for talented individuals to join our team. 
            Send us your resume and tell us how you'd like to contribute to Deaku.
          </p>
          <button className={cn(
            'px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r',
            COLORS.buttonGradient,
            `hover:${COLORS.buttonHover}`,
            'transform hover:scale-105'
          )}>
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className={cn('text-center', COLORS.textMuted)}>
            <p>&copy; 2024 Deaku. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Job Details Modal */}
      <JobDetailsModal 
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Jobs;
