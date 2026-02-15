import { 
  GraduationCap, 
  Facebook, 
  Youtube, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Sitemap', href: '#' },
    ],
    resources: [
      { label: 'Blogs', href: '#' },
      { label: 'Resources Center', href: '#' },
      { label: 'Study Materials', href: '#' },
      { label: 'Affiliates', href: '#' },
    ],
    support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Help Center', href: '#' },
      { label: 'Feedback', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="w-full bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a 
              href="#" 
              className="flex items-center gap-2 mb-6"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-poppins font-bold">
                Neuro<span className="text-orange-500">Learn</span>
              </span>
            </a>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              NeuroLearn offers Live, Online 1-1 Personalized Tutoring of Math, 
              English (ELA), Science, Coding and SAT, ACT, AP, Digital SSAT, STAAR, 
              AMC, GCSE, A-level, IGCSE, IB and NAPLAN Classes for students in grades K-12.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:neurolearnn@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">neurolearnn@gmail.com</span>
              </a>
              <a 
                href="tel:+918360528753"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">+91-8360528753</span>
              </a>
              <a 
                href="tel:+918360378385"
                className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">+91-8360378385</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Kesar Bagh, Patiala</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-5">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 text-sm hover:text-orange-400 
                             hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-5">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 text-sm hover:text-orange-400 
                             hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-5">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 text-sm hover:text-orange-400 
                             hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center sm:text-left">
              Copyright © {currentYear} All Rights Reserved{' '}
              <span className="text-orange-500">neurolearnn.com</span>
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 text-sm hover:text-orange-400 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-orange-400 transition-colors">
                Cancellation & Refund
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center
                             hover:bg-orange-500 hover:scale-110 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
