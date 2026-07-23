import React from 'react';
import { NavPage } from '../types';
import { BUSINESS_FACTS, ambianceImage } from '../data/restaurantData';
import {
  Flame,
  Star,
  MapPin,
  UtensilsCrossed,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Award,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenOrderModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenOrderModal }) => {
  const pillars = [
    {
      title: "Quality Ingredients",
      desc: "Fresh meats, locally sourced paneer, and authentic whole spices roasted daily for deep tandoori flavor.",
      icon: Sparkles,
    },
    {
      title: "Warm Hospitality",
      desc: "Welcoming ambiance designed for comfortable dine-in meals with family, friends, and colleagues.",
      icon: HeartHandshake,
    },
    {
      title: "Consistent Flavor",
      desc: "Precision clay oven roasting and traditional recipes maintained consistently across dine-in, takeaway, and delivery.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Banner */}
      <section className="relative py-20 bg-[#0C0C0C] border-b border-white/10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#D94A38] text-xs font-bold text-[#D94A38] uppercase tracking-widest">
            <Flame className="w-4 h-4 fill-current" />
            <span>About Grill to Chill</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#F5F2ED] tracking-tight">
            {BUSINESS_FACTS.name} ({BUSINESS_FACTS.bengaliName})
          </h1>
          <p className="text-sm sm:text-base text-[#F5F2ED]/70 font-sans uppercase tracking-wider max-w-2xl mx-auto">
            A trusted Indian restaurant on GT Road in Kotrung, Uttarpara — bringing rich grill traditions, warm service, and authentic flavors to every meal.
          </p>
        </div>
      </section>

      {/* Main Narrative & Ambiance Image */}
      <section className="py-24 bg-[#0C0C0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Narrative */}
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#D94A38] uppercase">
                Our Foundation
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F2ED] tracking-tight">
                Authentic Indian Cuisine in the Heart of Uttarpara
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#F5F2ED]/70 leading-relaxed font-sans">
                <p>
                  Located at 45 New GT Road in Kotrung, <strong className="text-[#F5F2ED] font-bold">Grill to Chill</strong> has earned its place as a favorite dining destination in Uttarpara. Rated <strong className="text-[#D94A38] font-bold">{BUSINESS_FACTS.rating}★ by over {BUSINESS_FACTS.reviewCount.toLocaleString()} guests</strong>, we take pride in serving high-quality Indian charcoal grills, aromatic biryanis, and rich curries.
                </p>
                <p>
                  Whether you are sitting down for a relaxed evening meal in our ambient dining room, picking up a quick takeaway on your way home, or enjoying no-contact delivery, our focus remains straightforward: honest cooking, generous portions, and great value ranging between ₹200–600 per person.
                </p>
              </div>

              {/* Verified Facts Counter */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="bg-[#0C0C0C] p-5 border border-white/10">
                  <div className="text-2xl font-serif text-[#D94A38]">3.9★</div>
                  <div className="text-[10px] text-[#F5F2ED]/50 uppercase tracking-widest mt-1">Rating ({BUSINESS_FACTS.reviewCount.toLocaleString()}+ reviews)</div>
                </div>
                <div className="bg-[#0C0C0C] p-5 border border-white/10">
                  <div className="text-xl font-serif text-[#F5F2ED]">₹200–600</div>
                  <div className="text-[10px] text-[#F5F2ED]/50 uppercase tracking-widest mt-1">Per Person Value</div>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-[#0C0C0C] p-5 border border-white/10">
                  <div className="text-xl font-serif text-[#F5F2ED]">Daily</div>
                  <div className="text-[10px] text-[#F5F2ED]/50 uppercase tracking-widest mt-1">Open until 10:30 PM</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative border border-white/10 bg-[#151515]">
              <img
                src={ambianceImage}
                alt="Grill to Chill Restaurant Interior Ambiance"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] lg:h-[500px] object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 border border-white/20 bg-[#0C0C0C]/80 backdrop-blur-md text-xs text-[#D94A38] font-bold uppercase tracking-widest">
                📍 45, New, GT Rd, Kotrung, Uttarpara, West Bengal 712258
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Values / Pillars Section */}
      <section className="py-24 bg-[#0C0C0C] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#D94A38] uppercase">
              Our Core Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F2ED] tracking-tight">
              Built on Quality & Warmth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[#0C0C0C] border border-white/10 p-8 space-y-4 hover:border-[#D94A38] transition-all duration-300"
                >
                  <div className="w-10 h-10 border border-[#D94A38] flex items-center justify-center text-[#D94A38]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-[#F5F2ED]">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#F5F2ED]/60 leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTAs Footer Strip */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F5F2ED]">
            Ready to taste authentic Indian grill?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('menu')}
              id="about-see-menu-btn"
              className="px-8 py-3.5 bg-[#D94A38] hover:bg-[#b83828] text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>See Our Menu</span>
            </button>

            <button
              onClick={() => onNavigate('visit')}
              id="about-visit-us-btn"
              className="px-8 py-3.5 border border-white/20 text-[#F5F2ED] hover:border-white/50 font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#D94A38]" />
              <span>Visit Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
