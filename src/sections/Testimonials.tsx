import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Anchal got Full marks in her Physics exam. So thanks for tutoring. Really made lot of impact.",
    author: "Anchal's Parents",
    role: "Parent",
    rating: 5,
  },
  {
    quote: "Shreya scored 1390/1440 in PSAT with very little prep. The score was 99 percentile at national level.",
    author: "Shreya's Parents",
    role: "Parent",
    rating: 5,
  },
  {
    quote: "We like your teaching and matches our frequency, will wait for your availability. We can start coding & Math together.",
    author: "Dhaitiri's Mom",
    role: "Parent",
    rating: 5,
  },
  {
    quote: "I got my Digital SAT scores today. I scored 1530. 750 in English and 780 in Math. Thank you so much NeuroLearn.",
    author: "Shyam",
    role: "Student",
    rating: 5,
  },
  {
    quote: "I just wanted to say thank you for tutoring Sophia. I am very impress with the way you teach and communicate.",
    author: "Sophia's Mom",
    role: "Parent",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="testimonials"
      className="w-full bg-orange-50 py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Floating Quote Marks */}
      <div className="absolute top-10 left-10 text-orange-200 opacity-20 animate-float">
        <Quote className="w-32 h-32" />
      </div>
      <div className="absolute bottom-10 right-10 text-orange-200 opacity-20 animate-float animation-delay-500">
        <Quote className="w-32 h-32 rotate-180" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-4">
            <span className="text-orange-500">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600">Parents and students love us!</p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <div
              className={`bg-white rounded-3xl p-8 sm:p-12 shadow-card-hover ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl text-gray-700 text-center font-medium mb-8 leading-relaxed">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="font-poppins font-semibold text-gray-900 text-lg">
                  {testimonials[activeIndex].author}
                </div>
                <div className="text-gray-500">{testimonials[activeIndex].role}</div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12
                       w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center
                       hover:bg-orange-500 hover:text-white transition-all duration-300
                       hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12
                       w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center
                       hover:bg-orange-500 hover:text-white transition-all duration-300
                       hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-orange-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4 h-auto animate-float"
          >
            Book 1 Week Free Class
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
