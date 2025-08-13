import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import kigemeLogo from "@/assets/kigeme-logo.jpg";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Academic Programs", href: "#programs" },
    { name: "Admissions", href: "#admissions" },
    { name: "News & Events", href: "#news" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" }
  ];

  const importantLinks = [
    { name: "School Calendar", href: "#" },
    { name: "Student Portal", href: "#" },
    { name: "Parent Resources", href: "#" },
    { name: "Alumni Network", href: "#" },
    { name: "Career Opportunities", href: "#" },
    { name: "School Policies", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Twitter, name: "Twitter", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={kigemeLogo}
                alt="GS KIGEME A Logo"
                className="h-12 w-12"
              />
              <div>
                <h3 className="font-playfair font-bold text-xl">GS KIGEME A</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Empowering minds, building futures
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              For over 50 years, GS KIGEME A has been committed to providing 
              quality education that prepares students for success in an 
              ever-changing world.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    GS KIGEME A<br />
                    Nyamagabe District, Southern Province<br />
                    Rwanda
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:+250788123456"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  +250 788 123 456
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@kigemeschool.rw"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  info@kigemeschool.rw
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <h5 className="font-semibold mb-3">Stay Updated</h5>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-primary-foreground/10 border border-primary-foreground/20 rounded-[var(--radius)] text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
                <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-[var(--radius)] hover:bg-secondary/90 transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2025 GS KIGEME A. All rights reserved. | Designed by Devperfection.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;