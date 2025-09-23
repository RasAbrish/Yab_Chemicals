import { Link, useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, Send, Facebook } from "lucide-react";
import logo from "/favicon.png";
const Footer = () => {
  const naviation = useNavigate();
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <img src={logo} alt="log" />
              </div>
              <span className="text-xl font-bold">YAB Chemicals</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Leading chemical supplier in Ethiopia, connecting global markets
              with local industries through quality products, safety, and
              innovation.
            </p>
            <div className="flex space-x-4">
              <Link
                to="https://t.me/yabchemical"
                target="_blank"
                className="text-background/80 hover:text-primary"
              >
                <Send className="h-5 w-5" />
              </Link>
              <Link
                to="https://www.facebook.com/share/1EZTDPtsfz/"
                target="_blank"
                className="text-background/80 hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">
                  +251-911949466,
                  <br />
                  +251-930470891/92/93
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">
                  yabchemicals@gmail.com
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">
                  www.yabchemicals.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} YAB Chemicals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
