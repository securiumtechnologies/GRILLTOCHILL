import React from 'react';
import { BUSINESS_FACTS } from '../data/restaurantData';
import { InstagramGrid } from '../components/InstagramGrid';
import {
  MapPin,
  Phone,
  Clock,
  ShoppingBag,
  UtensilsCrossed,
  ShieldCheck,
  ExternalLink,
  Flame,
  Star,
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';

interface VisitPageProps {
  onOpenOrderModal: () => void;
}

export const VisitPage: React.FC<VisitPageProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="relative py-20 bg-[#0C0C0C] border-b border-white/10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#D94A38] text-xs font-bold text-[#D94A38] uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            <span>Visit Us</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#F5F2ED] tracking-tight">
            Location, Hours & Directions
          </h1>
          <p className="text-xs text-[#F5F2ED]/60 font-sans uppercase tracking-widest">
            Find us on GT Road in Kotrung, Uttarpara. Dine in, pick up takeaway, or enjoy delivery.
          </p>
        </div>
      </section>

      {/* Main Info Cards & Embedded Map */}
      <section className="py-24 bg-[#0C0C0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Col: Contact & Location Card */}
            <div className="bg-[#0C0C0C] border border-white/10 p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 border border-[#D94A38] flex items-center justify-center text-[#D94A38]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#F5F2ED]">
                    Address & Phone
                  </h3>
                  <p className="text-[10px] text-[#D94A38] font-bold uppercase tracking-widest">
                    Kotrung, Uttarpara
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-[#F5F2ED]/70 font-sans">
                <div>
                  <strong className="block text-[#F5F2ED] font-bold uppercase tracking-wider mb-1">
                    Full Address:
                  </strong>
                  <p className="leading-relaxed">{BUSINESS_FACTS.address}</p>
                </div>

                <div>
                  <strong className="block text-[#F5F2ED] font-bold uppercase tracking-wider mb-1">
                    Phone (Tap-to-Call):
                  </strong>
                  <a
                    href={BUSINESS_FACTS.phoneRaw}
                    className="text-sm font-mono font-bold text-[#D94A38] hover:underline flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{BUSINESS_FACTS.phone}</span>
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    href={BUSINESS_FACTS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="visit-get-directions-btn"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#D94A38] hover:bg-[#b83828] text-white text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Directions on Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Col: Hours & Service Options */}
            <div className="bg-[#0C0C0C] border border-white/10 p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 border border-[#D94A38] flex items-center justify-center text-[#D94A38]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#F5F2ED]">
                    Hours & Service
                  </h3>
                  <p className="text-[10px] text-[#D94A38] font-bold uppercase tracking-widest">
                    Open Daily
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-[#F5F2ED]/70 font-sans">
                <div>
                  <strong className="block text-[#F5F2ED] font-bold uppercase tracking-wider mb-2">
                    Opening Hours:
                  </strong>
                  <div className="p-3 border border-white/10 text-xs text-[#F5F2ED] font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D94A38] animate-pulse"></span>
                    <span>{BUSINESS_FACTS.hoursText}</span>
                  </div>
                </div>

                <div>
                  <strong className="block text-[#F5F2ED] font-bold uppercase tracking-wider mb-2">
                    Available Service Options:
                  </strong>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 p-2.5 border border-white/10 bg-[#0C0C0C]">
                      <UtensilsCrossed className="w-4 h-4 text-[#D94A38]" />
                      <span className="font-bold uppercase tracking-wider text-[#F5F2ED] text-[11px]">Dine-in</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 border border-white/10 bg-[#0C0C0C]">
                      <ShoppingBag className="w-4 h-4 text-[#D94A38]" />
                      <span className="font-bold uppercase tracking-wider text-[#F5F2ED] text-[11px]">Takeaway</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 border border-white/10 bg-[#0C0C0C]">
                      <ShieldCheck className="w-4 h-4 text-[#D94A38]" />
                      <span className="font-bold uppercase tracking-wider text-[#F5F2ED] text-[11px]">No-contact Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Rating & Online Ordering CTA */}
            <div className="bg-[#0C0C0C] border border-white/10 p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 border border-[#D94A38] flex items-center justify-center text-[#D94A38]">
                    <Star className="w-5 h-5 fill-[#D94A38]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-normal text-[#F5F2ED]">
                      Guest Rating
                    </h3>
                    <p className="text-[10px] text-[#F5F2ED]/50 uppercase tracking-widest">Google Reviews</p>
                  </div>
                </div>

                <div className="text-center p-5 border border-white/10 space-y-1">
                  <div className="text-3xl font-serif text-[#D94A38]">
                    3.9 ★
                  </div>
                  <div className="text-xs text-[#F5F2ED]/70 font-sans">
                    Based on {BUSINESS_FACTS.reviewCount.toLocaleString()} reviews
                  </div>
                  <div className="text-[10px] text-[#F5F2ED]/50 uppercase tracking-widest">Price: ₹200–600 / person</div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <button
                  onClick={onOpenOrderModal}
                  id="visit-order-online-btn"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#D94A38] hover:bg-[#b83828] text-white text-xs font-bold uppercase tracking-widest transition-all active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order Online Now</span>
                </button>
              </div>
            </div>
          </div>

          {/* Embedded Full Width Interactive Map Frame */}
          <div className="bg-[#0C0C0C] border border-white/10 p-6 space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <h3 className="font-serif text-2xl font-normal text-[#F5F2ED]">
                Map Location: 45 New GT Rd, Uttarpara
              </h3>
              <a
                href={BUSINESS_FACTS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#D94A38] font-bold uppercase tracking-widest hover:underline flex items-center gap-1"
              >
                Open in Google Maps App ↗
              </a>
            </div>

            <div className="relative w-full h-80 sm:h-96 border border-white/10 bg-[#151515]">
              <iframe
                title="Grill to Chill Interactive Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.012571285608!2d88.3425!3d22.6531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8832a2a0a22a3%3A0x8e826b68a8b12345!2sGrill%20To%20Chill!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECOND PLACEMENT OF INSTAGRAM GRID ON VISIT US PAGE (per specific mandate) */}
      <InstagramGrid />
    </div>
  );
};
