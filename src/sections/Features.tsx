import { useEffect, useRef, useState } from 'react';
import { 
  Users, 
  DollarSign, 
  UserCheck, 
  TrendingUp, 
  ClipboardList, 
  Video, 
  Users2, 
  BookOpen 
} from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Users,
    title: '1:1 Dedicated Classes',
    description: 'Personalized attention with individual tutoring sessions tailored to your learning pace and style.',
  },
  {
    icon: DollarSign,
    title: 'Lowest Cost Per Class',
    description: 'Affordable pricing without compromising on quality. Get the best value for your investment.',
  },
  {
    icon: UserCheck,
    title: 'Master Teachers',
    description: 'Learn from certified expert tutors with years of experience and proven track records.',
  },
  {
    icon: TrendingUp,
    title: '1 Grade Ahead',
    description: 'Our advanced curriculum helps students stay ahead and excel beyond their grade level.',
  },
  {
    icon: ClipboardList,
    title: 'Regular Test Series',
    description: 'Frequent assessments and mock tests to track progress and identify improvement areas.',
  },
  {
    icon: Video,
    title: 'Recording Access',
    description: 'Access to recorded sessions for revision and review anytime, anywhere.',
  },
  {
    icon: Users2,
    title: 'PTM (Parents Teacher Meeting)',
    description: 'Regular parent-teacher meetings to discuss progress and address concerns.',
  },
  {
    icon: BookOpen,
    title: 'School Homework Help',
    description: 'Comprehensive assistance with school assignments and homework support.',
  },
];

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = feature.icon;

  return (
    <div
      ref={cardRef}
      className={`group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover 
                 transition-all duration-300 hover:-translate-y-1 border border-gray-100
                 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl 
                   flex items-center justify-center mb-4 
                   group-hover:scale-110 group-hover:rotate-6 transition-all duration-300
                   shadow-lg shadow-orange-200"
      >
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="w-full bg-white py-16 sm:py-20 lg:py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className={`lg:sticky lg:top-32 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Main <span className="text-orange-500">Features</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At NeuroLearn, we provide a comprehensive learning experience designed 
              to help students achieve their academic goals. Our features are carefully 
              crafted to ensure personalized attention, quality education, and measurable results.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-50 rounded-xl p-5">
                <div className="text-3xl font-poppins font-bold text-orange-500 mb-1">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-orange-50 rounded-xl p-5">
                <div className="text-3xl font-poppins font-bold text-orange-500 mb-1">500+</div>
                <div className="text-sm text-gray-600">Expert Tutors</div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
