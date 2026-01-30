import { Mail, Phone, Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-2.5">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          {/* Contact Info */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="mailto:info@neurolearnn.com" 
              className="flex items-center gap-2 hover:text-orange-400 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@neurolearnn.com</span>
            </a>
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-2 hover:text-orange-400 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+1 (555) 123-4567</span>
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 hidden md:inline">Follow us:</span>
            <div className="flex items-center gap-2">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center 
                         hover:bg-orange-500 hover:scale-110 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center 
                         hover:bg-orange-500 hover:scale-110 transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center 
                         hover:bg-orange-500 hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center 
                         hover:bg-orange-500 hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
