
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Github, FileText, Briefcase, Mail, Info, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/SoftGlitchSolutions/", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/soft-glitch-solutions/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/soft-glitch-solutions", label: "GitHub" },
  ];

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Soft Glitch Solutions</h3>
            <p className="text-gray-300">Innovation with Purpose</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" onClick={handleLinkClick} className="hover:text-primary transition-colors flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" onClick={handleLinkClick} className="hover:text-primary transition-colors flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick} className="hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/website-services" onClick={handleLinkClick} className="hover:text-primary transition-colors flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Website Services
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={handleLinkClick} className="hover:text-primary transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/documentation" onClick={handleLinkClick} className="hover:text-primary transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/support" onClick={handleLinkClick} className="hover:text-primary transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© 2025 Soft Glitch Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
