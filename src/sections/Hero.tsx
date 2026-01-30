import { useEffect, useRef, useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StatProps {
  value: string;
  label: string;
  suffix?: string;
}

const Stat = ({ value, label, suffix = '' }: StatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  return (
    <div ref={statRef} className="text-center animate-slide-up">
      <div className="text-3xl sm:text-4xl font-poppins font-bold text-gray-900">
        {count}
        <span className="text-orange-500">{suffix}</span>
      </div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
};

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-orange-50 via-white to-orange-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6 animate-fade-in">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                Rated 4.9/5 by 15,000+ students
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-gray-900 leading-tight mb-6">
              NeuroLearn offers{' '}
              <span className="text-orange-500">Live, Online 1-1</span>{' '}
              Personalized Tutoring
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-6 animate-slide-up animation-delay-200">
              <span className="font-semibold text-gray-800">
                Math, English (ELA), Science, Coding
              </span>{' '}
              and{' '}
              <span className="font-semibold text-gray-800">
                SAT, ACT, AP, Digital SSAT, STAAR, AMC, GCSE, A-level, IGCSE, IB
              </span>{' '}
              and NAPLAN Classes for students in grades K-12. These programs are
              specifically designed to accelerate your child's academic progress{' '}
              <span className="text-orange-500 font-bold">GUARANTEED</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-8 p-4 sm:p-6 bg-white rounded-2xl shadow-card">
              <Stat value="15" label="Applications" suffix="K+" />
              <Stat value="100" label="On Time Delivery" suffix="%" />
              <Stat value="5" label="Years Experience" suffix="+" />
            </div>

            {/* CTA Button */}
            <Button
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-4 h-auto animate-float"
            >
              Book 1 Week Free Class
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative perspective-1000">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-200 rounded-full opacity-50 blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-300 rounded-full opacity-40 blur-2xl" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/hero-image.jpg"
                  alt="Online tutoring session"
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Expert Tutors</div>
                      <div className="text-sm text-gray-500">500+ Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
