import { useEffect, useRef, useState } from 'react';
import { 
  Calculator, 
  BookOpen, 
  Award, 
  Brain, 
  GraduationCap, 
  School, 
  Globe, 
  FileCheck,
  FunctionSquare,
  FlaskConical,
  Languages,
  Code
} from 'lucide-react';

interface Program {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const programs: Program[] = [
  {
    icon: Calculator,
    title: 'Digital SAT',
    description: '1500+ Score Mastery: Go ahead with NeuroLearn, which provides the best Digital SAT tutor for SAT prep with comprehensive knowledge to help you succeed in your exam.',
    color: 'bg-blue-500',
  },
  {
    icon: BookOpen,
    title: 'ACT',
    description: 'It is a standardized test for college admissions in the US and Canada. Join NeuroLearn to achieve top scores with an online ACT tutor, 35+ Score Mastery.',
    color: 'bg-green-500',
  },
  {
    icon: Award,
    title: 'AP',
    description: 'We offer the best online Advanced Placement courses to help students achieve high marks and exceptional results. With our experts, you can unlock a 5/5 score.',
    color: 'bg-purple-500',
  },
  {
    icon: Brain,
    title: 'AMC',
    description: 'Prepare for the AMC exam with NeuroLearn. We help students to pursue postgraduate studies with comprehensive plans and our expert tutors.',
    color: 'bg-red-500',
  },
  {
    icon: GraduationCap,
    title: 'A-Levels',
    description: 'NeuroLearn can help you reach your full A-level potential. You can succeed on tests with our individualized coaching and methodical approach.',
    color: 'bg-indigo-500',
  },
  {
    icon: School,
    title: 'IGCSE/GCSE',
    description: 'With the help of NeuroLearn, students completely master the IGCSE/GCSE. Our dedicated preparation tools ensure that you will produce outcomes for future success.',
    color: 'bg-teal-500',
  },
  {
    icon: Globe,
    title: 'IB',
    description: 'NeuroLearn offers the best preparation for the IB (International Baccalaureate) exam. Our experts advise and complete study techniques to help you achieve good marks.',
    color: 'bg-cyan-500',
  },
  {
    icon: FileCheck,
    title: 'NAPLAN',
    description: 'Boost your NAPLAN exam performance with NeuroLearn. Our tutors help you to be well-prepared for exams and achieve good results.',
    color: 'bg-amber-500',
  },
  {
    icon: FunctionSquare,
    title: 'MATH',
    description: 'NeuroLearn provides comprehensive knowledge and unique learning experiences for middle and high school math with a deeper understanding of mathematical concepts.',
    color: 'bg-orange-500',
  },
  {
    icon: FlaskConical,
    title: 'SCIENCE',
    description: 'Our NeuroLearn provides the best guidance in learning science subjects. We provide innovative study material and learning journeys with experts.',
    color: 'bg-emerald-500',
  },
  {
    icon: Languages,
    title: 'ENGLISH (ELA)',
    description: 'Improve your ELA skills with expert teachers, live classes, and engaging activities. Our NeuroLearn curriculum increases confidence in reading, writing, grammar, and literature analysis.',
    color: 'bg-pink-500',
  },
  {
    icon: Code,
    title: 'CODING',
    description: 'Through NeuroLearn, enhance your career with basic to advanced coding courses. We provide master languages like Python and Java and more programming skills.',
    color: 'bg-violet-500',
  },
];

const ProgramCard = ({ program, index }: { program: Program; index: number }) => {
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

  const Icon = program.icon;

  return (
    <div
      ref={cardRef}
      className={`group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover 
                 transition-all duration-300 hover:-translate-y-2 border border-gray-100
                 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center 
                   mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-3">
        {program.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {program.description}
      </p>

      {/* Learn More Link */}
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="inline-flex items-center text-orange-500 font-medium text-sm 
                 hover:text-orange-600 transition-colors group/link"
      >
        Learn More
        <svg
          className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  );
};

const Programs = () => {
  return (
    <section id="programs" className="w-full bg-orange-50 py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-4">
            Our 1-1 Programs For{' '}
            <span className="text-orange-500">Grades K-12</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
