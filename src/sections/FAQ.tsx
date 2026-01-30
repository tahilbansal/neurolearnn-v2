import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'How can I access NeuroLearn on the mobile app for Android or iPhone?',
    answer: 'To access NeuroLearn on your mobile device, simply install the NeuroLearn app on either Android or iOS. Log in using the same email address you provided to us. This way, you can attend live classes on your phone while traveling or when a desktop is not available. However, we recommend using a desktop for the best experience.',
  },
  {
    question: 'Does NeuroLearn provide tutoring for Test Prep (SAT, ACT, AP, etc.)?',
    answer: 'Yes, NeuroLearn offers Test Prep tutoring for SAT, ACT, AP, AMC, and more, using a 3-step process: Diagnostic Test followed by Personalized Tutoring, and finally tips to maximize scores.',
  },
  {
    question: 'How are weekly classes and schedules managed at NeuroLearn?',
    answer: 'At NeuroLearn, we understand that every student\'s availability is unique. We aim to create a mutually convenient schedule for the student and instructor. Once the schedule is set, live 1:1 Zoom classes are conducted on time. Also, recordings are available year-round, and assignments are provided via the portal and worksheets.',
  },
  {
    question: 'How is homework assigned to students?',
    answer: 'Homework at NeuroLearn is assigned in two ways: via our dedicated class portal or through various technologies. On the portal, we upload worksheets, questions, and discussions, enabling direct interaction. Additionally, we use platforms like IXL, DeltaMath, Quizizz, SaveMyExams, Twinkl, and CorbettMaths based on student needs.',
  },
  {
    question: 'Which subscription plan is best for my child to enroll in multiple subjects?',
    answer: 'It depends on whether you\'re enrolling your child for multiple subjects or a single subject. For multiple subjects, we recommend a 75-hour or 100-hour subscription. For a single subject, a 25-hour or 50-hour subscription is ideal.',
  },
  {
    question: 'How many classes are conducted per week for each subject and class timings?',
    answer: 'At NeuroLearn, we value your convenience and recognize your busy schedule. Classes can be arranged once, twice, thrice a week, or more, depending on your preference. We are open 24/7, so regardless of your location in the world, classes can be scheduled according to student time zone and availability.',
  },
  {
    question: 'Can we pause classes for vacations or time off?',
    answer: 'Absolutely! You can pause your classes anytime if you\'re planning a vacation or taking leave. Our subscriptions are lifetime, meaning they last until you\'ve consumed all your hours, so you won\'t lose any time. All we ask is that you inform us at least a day in advance, so we can adjust your classes accordingly. And don\'t worry—there will be no charges during your break!',
  },
  {
    question: 'How Can I Pay for the Classes?',
    answer: 'No need to worry about payments. First, explore demo classes in multiple subjects to get an idea. Then, choose a subscription (25, 50, 75, or 100 hours) for all subjects. We\'ll share the bank details, and you can use various payment methods. Once done, send a screenshot for verification.',
  },
];

const FAQAccordionItem = ({
  item,
  isOpen,
  onToggle,
  index,
  isVisible,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  isVisible: boolean;
}) => {
  return (
    <div
      className={`border border-gray-200 rounded-xl overflow-hidden bg-white
                 transition-all duration-300 ${isOpen ? 'shadow-card' : ''}
                 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left 
                 hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-poppins font-medium text-gray-900 pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 pt-0 text-gray-600 leading-relaxed">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-16 sm:py-20 lg:py-24" ref={sectionRef}>
      <div className="section-container">
        {/* Section Header */}
        <div
          className={`text-center mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">(FAQ)</p>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-4" />
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
