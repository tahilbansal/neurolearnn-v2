import { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  User,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
const emailjs = await import('@emailjs/browser');

const subjects = [
  'SAT',
  'ACT',
  'AP',
  'AMC',
  'A-Levels',
  'IGCSE/GCSE',
  'IB',
  'NAPLAN',
  'Mathematics',
  'Science',
  'English (ELA)',
  'Coding',
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    grade: '',
    message: '',
  });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
    const to_email = import.meta.env.VITE_EMAILJS_TO_EMAIL as string | undefined;

    if (!serviceId || !templateId || !publicKey || !to_email) {
      setSubmitError('Email service is not configured yet.');
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: to_email,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          grade: formData.grade,
          subject: formData.subject,
          message: formData.message || 'N/A',
        },
        publicKey
      );

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          grade: '',
          message: '',
        });
      }, 3000);
    } catch (error) {
      setSubmitError('Failed to send. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Kesar Bagh, Patiala'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91-8360528753', '+91-8360378385'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['neurolearnn@gmail.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 8AM - 10PM', 'Sat - Sun: 9AM - 8PM'],
    },
  ];

  return (
    <section id="contact" className="w-full bg-orange-50 py-16 sm:py-20 lg:py-24" ref={sectionRef}>
      <div className="section-container">
        {/* Section Header */}
        <div
          className={`text-center mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-4">
            Book a <span className="text-orange-500">Free Trial Session</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a free trial session to experience our personalized tutoring 
            approach and see the difference for yourself.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 space-y-6 ${
              isVisible ? 'animate-slide-up animation-delay-200' : 'opacity-0'
            }`}
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-card 
                           hover:shadow-card-hover transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-card mt-8">
              <img
                src="/students-image.jpg"
                alt="Students learning"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 shadow-card ${
              isVisible ? 'animate-slide-up animation-delay-300' : 'opacity-0'
            }`}
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-scale-in">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  We have received your request. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="pl-10 h-12"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="pl-10 h-12"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">
                      Phone Number *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91-XXXXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="pl-10 h-12"
                        required
                      />
                    </div>
                  </div>

                  {/* Grade */}
                  <div className="space-y-2">
                    <Label htmlFor="grade" className="text-gray-700">
                      Grade/Level *
                    </Label>
                    <Select
                      value={formData.grade}
                      onValueChange={(value) => handleChange('grade', value)}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(12)].map((_, i) => (
                          <SelectItem key={i} value={`Grade ${i + 1}`}>
                            Grade {i + 1}
                          </SelectItem>
                        ))}
                        <SelectItem value="College">College</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700">
                    Subject of Interest *
                  </Label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => handleChange('subject', value)}
                    >
                      <SelectTrigger className="h-12 pl-10">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">
                    Message (Optional)
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Textarea
                      id="message"
                      placeholder="Tell us about your learning goals..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="pl-10 min-h-[120px] resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full btn-primary text-lg py-4 h-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Book a Free Trial Session'}
                  <Send className="w-5 h-5 ml-2" />
                </Button>

                {submitError && (
                  <p className="text-center text-sm text-red-500">
                    {submitError}
                  </p>
                )}

                <p className="text-center text-sm text-gray-500">
                  By submitting, you agree to our{' '}
                  <a href="#" className="text-orange-500 hover:underline">
                    Terms & Conditions
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-orange-500 hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
