import { useEffect, useRef, useState } from 'react';
import { Check, TrendingUp, Award, Target, Users } from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    text: '200-300+ point improvements in SAT scores',
  },
  {
    icon: Award,
    text: '35+ in ACT, 5 out of 5 in AP exams',
  },
  {
    icon: Target,
    text: 'Significant GPA improvements guaranteed',
  },
  {
    icon: Users,
    text: 'Students advance one grade level ahead',
  },
];

const WhyChooseUs = () => {
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

  return (
    <section id="about" className="w-full bg-white py-16 sm:py-20 lg:py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div
            className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
          >
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-orange-100 rounded-full opacity-50" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-200 rounded-full opacity-40" />

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/why-choose-bg.jpg"
                alt="Why choose NeuroLearn"
                className="w-full h-auto object-cover"
              />

              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-gray-900 text-lg">
                      15+ Years
                    </div>
                    <div className="text-gray-600 text-sm">
                      Combined Teaching Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={isVisible ? 'animate-slide-up animation-delay-200' : 'opacity-0'}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Why the <span className="text-orange-500">NeuroLearn?</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              NeuroLearn offers personalized, one-on-one tutoring with a track 
              record of success. Our specialized approach ensures each child excels 
              academically and is well-prepared for college admissions.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-4 ${
                      isVisible ? 'animate-slide-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(index + 2) * 150}ms` }}
                  >
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center text-orange-500 font-semibold 
                       hover:text-orange-600 transition-colors group"
            >
              Start Your Journey Today
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
