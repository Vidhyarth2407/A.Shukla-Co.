import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="A. Shukla & Co. Logo" className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            <div>
              <h2 className="text-xl font-bold uppercase tracking-tighter text-white">
                A. Shukla <span className="text-primary">& Co.</span>
              </h2>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Leading high-tension electrical contracting firm providing specialized solutions for critical industrial infrastructure across India.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-secondary-light rounded hover:bg-primary hover:text-secondary transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="p-2 bg-secondary-light rounded hover:bg-primary hover:text-secondary transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="p-2 bg-secondary-light rounded hover:bg-primary hover:text-secondary transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Our Services</Link></li>
            <li><Link to="/projects" className="text-gray-400 hover:text-primary transition-colors text-sm">Case Studies</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            <li><Link to="/location/kolkata" className="text-gray-400 hover:text-primary transition-colors text-sm">Kolkata Services</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Expertise</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>High-Tension Systems</li>
            <li>Transformer Infrastructure</li>
            <li>Industrial Distribution</li>
            <li>Safety Compliance Audits</li>
            <li>Electrical Panel Design</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Get In Touch</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-gray-400">
              <MapPin className="text-primary shrink-0" size={18} />
              <span>123, Industrial Estate, Sector V, Salt Lake, Kolkata, West Bengal</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-400">
              <Phone className="text-primary shrink-0" size={18} />
              <a href="tel:+91XXXXXXXXXX" className="hover:text-primary transition-colors">+91 XXXXX XXXXX</a>
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-400">
              <Mail className="text-primary shrink-0" size={18} />
              <a href="mailto:info@ashukla.com" className="hover:text-primary transition-colors">info@ashukla.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center">
        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} A. Shukla & Co. All Rights Reserved. Designed for Industrial Excellence.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
