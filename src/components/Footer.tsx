import React from 'react';
import { NavPage } from '../types';
import { BUSINESS_FACTS } from '../data/restaurantData';
import { Flame, Phone, MapPin, Clock, Instagram, ExternalLink, Star } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenOrderModal }) => {
  return (
    <footer className="bg-[#0C0C0C] text-[#F5F2ED]/70 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#D94A38] flex items-center justify-center text-[#D94A38]">
                <Flame className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-serif font-normal text-xl text-[#F5F2ED] tracking-tight">
                  GRILL TO CHILL
                </h3>
                <p className="text-xs text-[#D94A38] font-medium tracking-widest uppercase">
                  {BUSINESS_FACTS.bengaliName}
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-[#F5F2ED]/60 font-sans">
              Rooted in Indian grill traditions, bringing flame-roasted kebabs, rich curries, and relaxed dining to Uttarpara, West Bengal.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/10 text-xs text-[#F5F2ED]">
                <Star className="w-3.5 h-3.5 fill-[#D94A38] text-[#D94A38]" />
                <span className="font-semibold">{BUSINESS_FACTS.rating}★</span>
                <span className="opacity-60">({BUSINESS_FACTS.reviewCount.toLocaleString()} reviews)</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold text-[#F5F2ED] tracking-widest uppercase border-l-2 border-[#D94A38] pl-3">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-medium">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#D94A38] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#D94A38] transition-colors"
                >
                  Our Menu (Food & Drinks)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D94A38] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('visit')}
                  className="hover:text-[#D94A38] transition-colors"
                >
                  Visit & Directions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenOrderModal}
                  className="text-[#D94A38] hover:underline font-bold"
                >
                  Order Online →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold text-[#F5F2ED] tracking-widest uppercase border-l-2 border-[#D94A38] pl-3">
              Location & Hours
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D94A38] shrink-0 mt-0.5" />
                <span className="text-[#F5F2ED]/80">{BUSINESS_FACTS.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D94A38] shrink-0" />
                <a
                  href={BUSINESS_FACTS.phoneRaw}
                  className="text-[#F5F2ED] hover:text-[#D94A38] font-mono transition-colors"
                >
                  {BUSINESS_FACTS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D94A38] shrink-0" />
                <span className="text-[#F5F2ED]/80">{BUSINESS_FACTS.hoursText}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Services & Social */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold text-[#F5F2ED] tracking-widest uppercase border-l-2 border-[#D94A38] pl-3">
              Service & Connect
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-[#F5F2ED]/50 uppercase tracking-wider text-[10px]">Available Options:</p>
              <div className="flex flex-wrap gap-1.5">
                {BUSINESS_FACTS.serviceOptions.map((opt, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 border border-white/10 text-xs text-[#F5F2ED]/80"
                  >
                    {opt}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={BUSINESS_FACTS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#D94A38]/50 text-xs font-bold text-[#F5F2ED] uppercase tracking-widest hover:bg-[#D94A38] hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4 text-[#D94A38]" />
                <span>Follow @_grill_to_chill</span>
                <ExternalLink className="w-3 h-3 text-[#F5F2ED]/50" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F2ED]/50 font-sans">
          <p>© {new Date().getFullYear()} Grill to Chill (গ্রিল টু চিল). All rights reserved.</p>
          <p className="text-center sm:text-right">
            Price Range: <span className="text-[#F5F2ED] font-medium">{BUSINESS_FACTS.priceRange}</span> • Uttarpara, West Bengal
          </p>
        </div>
      </div>
    </footer>
  );
};
