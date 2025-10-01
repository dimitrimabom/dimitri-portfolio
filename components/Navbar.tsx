'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Effet pour marquer le composant comme monté côté client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Effet pour gérer le défilement uniquement après le montage côté client
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Calculer la progression du défilement
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${(scrollPx / winHeightPx) * 100}`;
      setScrollProgress(parseFloat(scrolled));
    };

    // Appeler handleScroll une fois au montage pour initialiser la valeur
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: '#' }
  ];

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .slide-down {
          animation: slideDown 0.5s ease-out;
        }

        .backdrop-blur-custom {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 slide-down ${
          isScrolled 
            ? 'bg-[#0d1117]/90 backdrop-blur-custom border-b border-gray-800/50 shadow-lg shadow-cyan-500/5' 
            : 'bg-[#0d1117]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo / Name */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded flex items-center justify-center font-bold text-[#0d1117] transition-transform duration-300 group-hover:scale-110">
                  <Code2 size={20} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0d1117] animate-pulse" />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">
                  Dimitri <span className="text-cyan-400">Mabom</span>
                </div>
                <div className="text-gray-500 text-xs font-mono">
                  &lt;Frontend Dev /&gt;
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-4 py-2 font-mono text-sm transition-all duration-300 ${
                    activeTab === item.id
                      ? 'text-cyan-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeTab === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                  {activeTab !== item.id && (
                    <div className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 group-hover:left-0 group-hover:right-0 opacity-0 hover:opacity-100" />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop Social Links & CTA */}
            <div className="hidden md:flex items-center gap-4">
              {/* Social Icons */}
              <div className="flex items-center gap-2 mr-2">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded border border-transparent hover:border-cyan-400/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <button className="group relative px-5 py-2 bg-cyan-400 text-[#0d1117] font-mono text-sm font-semibold rounded overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50">
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
                <div className="absolute inset-0 bg-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-1 border-t border-gray-800/50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 font-mono text-sm transition-all duration-300 rounded ${
                    activeTab === item.id
                      ? 'text-cyan-400 bg-cyan-400/10 border-l-2 border-cyan-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center gap-3 px-4 pt-4 border-t border-gray-800/50 mt-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="flex-1 h-10 flex items-center justify-center text-gray-400 hover:text-cyan-400 bg-white/5 hover:bg-cyan-400/10 rounded border border-gray-800 hover:border-cyan-400/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <button className="w-full mt-4 px-5 py-3 bg-cyan-400 text-[#0d1117] font-mono text-sm font-semibold rounded hover:bg-cyan-300 transition-all duration-300">
                Hire Me →
              </button>
            </div>
          </div>
        </div>

        {/* Progress bar (optional - shows scroll progress) */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-800">
          {isMounted && (
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
              style={{ 
                width: `${scrollProgress}%` 
              }}
            />
          )}
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;