import { useEffect, useRef, useState } from 'react';
import { Play, FileQuestion, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Step {
  icon: React.ElementType;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Play,
    number: '01',
    title: 'Explanation',
    description:
      'We explore the topics and strategies using a combination of videos, diagrams, and interactive examples. Our tutors break down complex concepts into easy-to-understand explanations.',
  },
  {
    icon: FileQuestion,
    number: '02',
    title: 'Organized Practice Test',
    description:
      'Use 10 to 20 appropriate practice questions to evaluate your knowledge and abilities. Regular practice tests help identify strengths and areas for improvement.',
  },
  {
    icon: Lightbulb,
    number: '03',
    title: 'Examine Your Mistakes',
    description:
      'Learn from your errors with our comprehensive, detailed instructions. Our tutors provide constructive feedback to help you avoid similar mistakes in the future.',
  },
];

const LiveClasses = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="live-classes"
      className="w-full bg-orange-50 py-16 sm:py-20 lg:py-24"
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={isVisible ? 'animate-slide-up' : 'opacity-0'}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Use <span className="text-orange-500">Live Classes</span> to Learn
            </h2>
            <div className="w-20 h-1 bg-orange-500 rounded-full mb-6" />
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              To help you prepare for each area of the test, we categorized the 
              ACT, SAT, and AP into 52 specific skills. Our structured approach 
              ensures comprehensive coverage of all topics with personalized attention.
            </p>
            <Button onClick={scrollToContact} className="btn-primary text-lg px-8 py-4 h-auto">
              Book 1 Week Free Class
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Right Steps */}
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 via-orange-500 to-orange-300 hidden sm:block" />

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className={`relative flex gap-6 ${
                      isVisible ? 'animate-slide-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    {/* Step Number & Icon */}
                    <div className="relative flex-shrink-0">
                      <div
                        className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center 
                                   shadow-lg shadow-orange-200 z-10 relative
                                   animate-pulse-glow"
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full 
                                   flex items-center justify-center text-xs font-bold text-white"
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-xl p-5 shadow-card flex-1 hover:shadow-card-hover transition-shadow">
                      <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveClasses;
