import React, { useState, useEffect } from 'react';
import { NavPage } from '../types';
import { BUSINESS_FACTS } from '../data/restaurantData';
import { Flame, Menu as MenuIcon, X, Phone, ShoppingBag, MapPin, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenOrderModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About Us' },
    { id: 'visit', label: 'Visit Us' },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Bar for Quick Info */}
      <div className="bg-[#0C0C0C] border-b border-white/10 text-xs text-[#F5F2ED]/60 py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#D94A38] font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#D94A38] animate-pulse"></span>
              {BUSINESS_FACTS.hoursText}
            </span>
            <span className="hidden sm:inline opacity-20">|</span>
            <span className="hidden sm:flex items-center gap-1.5 opacity-80">
              <MapPin className="w-3.5 h-3.5 text-[#D94A38]" />
              Kotrung, Uttarpara
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-1 text-[#F5F2ED]">
              <Star className="w-3.5 h-3.5 fill-[#D94A38] text-[#D94A38]" />
              <span className="font-semibold">{BUSINESS_FACTS.rating}★</span>
              <span className="opacity-60">({BUSINESS_FACTS.reviewCount.toLocaleString()} reviews)</span>
            </div>
            <a
              href={BUSINESS_FACTS.phoneRaw}
              className="flex items-center gap-1.5 text-[#F5F2ED] hover:text-[#D94A38] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D94A38]" />
              <span className="font-mono text-xs">{BUSINESS_FACTS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0C0C0C]/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl'
            : 'bg-[#0C0C0C] py-5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Branding */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="w-9 h-9 border border-[#D94A38] flex items-center justify-center text-[#D94A38] group-hover:bg-[#D94A38] group-hover:text-white transition-all">
              <Flame className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl tracking-tight font-normal text-[#F5F2ED] group-hover:text-[#D94A38] transition-colors">
                  GRILL TO CHILL
                </span>
                <span className="text-xs font-serif italic text-[#F5F2ED]/50 hidden sm:inline">
                  {BUSINESS_FACTS.bengaliName}
                </span>
              </div>
              <p className="text-[10px] font-sans text-[#F5F2ED]/40 tracking-[0.25em] uppercase">
                Indian Grill • Uttarpara
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 border border-white/10 px-2 py-1 rounded-full bg-[#151515]/60 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`relative px-5 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest transition-all duration-200 ${
                    isActive
                      ? 'text-[#F5F2ED] bg-white/10'
                      : 'text-[#F5F2ED]/60 hover:text-[#F5F2ED] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 border border-[#D94A38]/60 rounded-full pointer-events-none"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenOrderModal}
              id="header-order-online-btn"
              className="relative inline-flex items-center gap-2 px-5 py-2 border border-[#D94A38] text-[#D94A38] hover:bg-[#D94A38] hover:text-white text-xs font-bold uppercase tracking-widest transition-all active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Order Online</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="md:hidden p-2 border border-white/10 text-[#F5F2ED] hover:border-white/30 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden sticky top-[69px] z-30 bg-[#0C0C0C] border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      id={`mobile-nav-${item.id}`}
                      className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-between border ${
                        isActive
                          ? 'border-[#D94A38] text-[#D94A38] bg-[#D94A38]/10'
                          : 'border-white/5 text-[#F5F2ED]/70 hover:border-white/20'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#D94A38]" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrderModal();
                  }}
                  id="mobile-order-btn"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#D94A38] text-white font-bold text-xs uppercase tracking-widest shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order Online Now
                </button>

                <a
                  href={BUSINESS_FACTS.phoneRaw}
                  className="w-full flex items-center justify-center gap-2 py-3 border border-white/20 text-[#F5F2ED] text-xs font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D94A38]" />
                  Call {BUSINESS_FACTS.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
