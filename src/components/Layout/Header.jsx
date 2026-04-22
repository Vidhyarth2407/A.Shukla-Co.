import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img src={logo} alt="A. Shukla & Co." className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="flex flex-col">
            <h1 className={`text-xl md:text-2xl font-black uppercase tracking-tighter leading-none transition-colors duration-300 ${isScrolled ? 'text-secondary' : 'text-white'}`}>
              A. Shukla <span className="text-primary italic">& Co.</span>
            </h1>
            <p className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase opacity-80 leading-none mt-1">High-Tension Specialist</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-primary relative group ${isActive(link.path) ? 'text-primary' : (isScrolled ? 'text-secondary' : 'text-white')}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          <a href="tel:+91XXXXXXXXXX" className="btn-primary flex items-center gap-2 scale-90 origin-right">
            <Phone size={16} />
            <span>Call Now</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className={`lg:hidden p-2 hover:bg-black/5 rounded-full transition-colors ${isScrolled ? 'text-secondary' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-secondary flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <button className="absolute top-8 right-8 text-white p-4" onClick={() => setIsOpen(false)}>
          <X size={40} />
        </button>
        {navLinks.map((link, i) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-3xl font-black uppercase tracking-tighter transition-all hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-white'} ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <a href="tel:+91XXXXXXXXXX" className={`btn-primary mt-8 py-5 px-12 text-lg transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '500ms' }} onClick={() => setIsOpen(false)}>
          <Phone size={24} />
          <span>Speak to Expert</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
