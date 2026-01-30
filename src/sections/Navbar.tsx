import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      label: 'Test Preparation',
      href: '#programs',
      dropdown: ['SAT', 'ACT', 'AP', 'AMC', 'A-Levels', 'IGCSE/GCSE', 'IB', 'NAPLAN'],
    },
    {
      label: 'Academic Tutoring',
      href: '#programs',
      dropdown: ['Mathematics', 'Science', 'English (ELA)', 'Coding'],
    },
    { label: 'About Us', href: '#about' },
    { label: 'Student Corner', href: '#testimonials' },
    { label: 'Book Trial', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3'
          : 'bg-white py-4'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center 
                          group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-poppins font-bold text-gray-900">
              Neuro<span className="text-orange-500">Learn</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="flex items-center gap-1 text-gray-700 font-medium 
                           hover:text-orange-500 transition-colors duration-200 link-underline py-2"
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-card 
                             border border-gray-100 overflow-hidden animate-fade-in"
                    style={{ animationDuration: '200ms' }}
                  >
                    {link.dropdown.map((item, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 
                                 hover:text-orange-500 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              className="btn-primary"
              onClick={() => scrollToSection('#contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 animate-slide-up">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="w-full text-left px-4 py-3 text-gray-700 font-medium 
                             hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                  {link.dropdown && (
                    <div className="pl-8">
                      {link.dropdown.map((item, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(link.href);
                          }}
                          className="block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button 
                className="btn-primary mt-4 mx-4"
                onClick={() => scrollToSection('#contact')}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
