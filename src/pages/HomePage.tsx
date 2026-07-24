import React from 'react';
import { NavPage } from '../types';
import { BUSINESS_FACTS, MENU_ITEMS, heroDishImage } from '../data/restaurantData';
import { InstagramGrid } from '../components/InstagramGrid';
import { FoodPhotoGallery } from '../components/FoodPhotoGallery';
import {
  Flame,
  Star,
  ShoppingBag,
  UtensilsCrossed,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onOpenOrderModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenOrderModal }) => {
  const featuredDishes = MENU_ITEMS.filter((item) => item.isFeatured).slice(0, 6);

  const highlights = [
    {
      title: "Dine-in Hospitality",
      desc: "Warm ambient seating, perfect for friends & family gatherings on GT Road.",
      icon: UtensilsCrossed,
    },
    {
      title: "Takeaway Service",
      desc: "Fresh, hot charcoal grills packaged securely for home enjoyment.",
      icon: ShoppingBag,
    },
    {
      title: "No-contact Delivery",
      desc: "Hygienic, sealed delivery straight from our tandoor to your doorstep.",
      icon: ShieldCheck,
    },
    {
      title: "Great Value Dining",
      desc: "Generous portions of authentic Indian dishes at ₹200–600 per person.",
      icon: Award,
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0C0C0C]">
        {/* Background Hero Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroDishImage}
            alt="Grill to Chill Tandoori Kebab Hero"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/70 to-[#0C0C0C]/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0C0C0C_90%)]" />
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          {/* Subtle Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[#D94A38] text-xs sm:text-sm bg-[#0C0C0C]/80 backdrop-blur-md"
          >
            <div className="flex items-center gap-1 text-[#D94A38] font-bold">
              <Star className="w-3.5 h-3.5 fill-[#D94A38]" />
              <span>{BUSINESS_FACTS.rating}★</span>
            </div>
            <span className="opacity-20">|</span>
            <span className="text-[#F5F2ED]/80 uppercase tracking-widest text-xs font-sans">
              Over <strong className="text-white">{BUSINESS_FACTS.reviewCount.toLocaleString()}</strong> Reviews in Uttarpara
            </span>
          </motion.div>

          {/* Main Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="font-sans text-xs sm:text-sm font-bold tracking-[0.3em] text-[#D94A38] uppercase">
              {BUSINESS_FACTS.bengaliName} • Authentic Indian Charcoal Grill
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F5F2ED] tracking-tight leading-tight sm:leading-tight">
              Flame-Kissed Indian Flavors & Chill Vibes
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#F5F2ED]/70 font-sans font-normal leading-relaxed uppercase tracking-wider">
              Experience charcoal-roasted tandoori kebabs, rich butter curries, and aromatic biryanis in Kotrung, Uttarpara.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => onNavigate('menu')}
              id="hero-view-menu-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-[#F5F2ED] hover:border-white/50 text-xs font-bold uppercase tracking-widest transition-all duration-200 group bg-[#0C0C0C]/60"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#D94A38]" />
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenOrderModal}
              id="hero-order-online-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D94A38] hover:bg-[#b83828] text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Online Now</span>
            </button>
          </motion.div>

          {/* Business quick specs bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#F5F2ED]/50 uppercase tracking-widest font-sans"
          >
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D94A38]" />
              <span>{BUSINESS_FACTS.hoursText}</span>
            </div>
            <span className="opacity-20">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D94A38]" />
              <span>GT Road, Uttarpara</span>
            </div>
            <span className="opacity-20">•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D94A38]" />
              <span>{BUSINESS_FACTS.priceRange}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO / STORY STRIP */}
      <section className="py-20 bg-[#0C0C0C] border-t border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-10 h-10 mx-auto border border-[#D94A38] flex items-center justify-center text-[#D94A38]">
            <Flame className="w-5 h-5 fill-current" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F5F2ED] tracking-tight">
            Rooted in Indian Grill Traditions
          </h2>
          <p className="text-base sm:text-lg text-[#F5F2ED]/80 leading-relaxed font-serif text-balance">
            At <span className="text-[#F5F2ED] font-sans font-bold uppercase tracking-widest">Grill to Chill (গ্রিল টু চিল)</span>, we center our kitchen around high-heat charcoal tandoors, slow-roasted marinades, and classic North Indian curries. Whether you choose to dine in with loved ones, pick up a quick takeaway, or order no-contact delivery, every dish delivers honest flavor and comforting warmth.
          </p>
        </div>
      </section>

      {/* 2.5 FOOD PHOTOGRAPHS GALLERY */}
      <FoodPhotoGallery
        onOpenOrderModal={onOpenOrderModal}
        onNavigateToMenu={() => onNavigate('menu')}
      />

      {/* 3. WHY US / HIGHLIGHTS CARDS */}
      <section className="py-24 bg-[#0C0C0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-3">
            <p className="text-xs font-bold tracking-widest text-[#D94A38] uppercase">
              The Experience
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F2ED] tracking-tight">
              Why Guests Love Grill to Chill
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#0C0C0C] border border-white/10 p-8 hover:border-[#D94A38] transition-all duration-300 space-y-4 group"
                >
                  <div className="w-10 h-10 border border-[#D94A38] flex items-center justify-center text-[#D94A38] group-hover:bg-[#D94A38] group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#F5F2ED]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#F5F2ED]/60 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FEATURED DISHES TEASER */}
      <section className="py-24 bg-[#0C0C0C] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#D94A38] uppercase">
                Chef Selections
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F2ED] tracking-tight">
                Featured Charcoal Delicacies
              </h2>
            </div>
            <button
              onClick={() => onNavigate('menu')}
              id="view-full-menu-btn"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D94A38] hover:text-white transition-colors"
            >
              <span>Explore Complete Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-[#0C0C0C] border border-white/10 overflow-hidden hover:border-[#D94A38] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-[#151515]">
                  {dish.image ? (
                    <img
                      src={dish.image}
                      alt={dish.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#F5F2ED]/20">
                      <UtensilsCrossed className="w-12 h-12" />
                    </div>
                  )}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border ${
                        dish.foodType === 'veg'
                          ? 'bg-emerald-950/90 text-emerald-400 border-emerald-800'
                          : 'bg-rose-950/90 text-rose-400 border-rose-800'
                      }`}
                    >
                      {dish.foodType === 'veg' ? '● Veg' : '▲ Non-Veg'}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between border-t border-white/10">
                  <div>
                    <div className="text-[10px] font-bold text-[#D94A38] uppercase tracking-widest mb-1">
                      {dish.subCategory}
                    </div>
                    <h3 className="font-serif text-2xl font-normal text-[#F5F2ED]">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-[#F5F2ED]/60 leading-relaxed mt-2 font-sans">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={BUSINESS_FACTS.menuUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#D94A38] font-bold uppercase tracking-widest hover:underline"
                    >
                      <span>Menu on Zomato</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      onClick={() => onNavigate('menu')}
                      className="text-xs text-[#F5F2ED]/60 hover:text-white font-medium uppercase tracking-widest text-[10px]"
                    >
                      View in Menu →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* External Menu Note */}
          <div className="p-6 bg-[#0C0C0C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D94A38] shrink-0" />
              <span className="text-xs sm:text-sm text-[#F5F2ED]/80 font-sans">
                You can also view our full dish catalog directly on Zomato’s official page.
              </span>
            </div>
            <a
              href={BUSINESS_FACTS.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[#D94A38] text-xs font-bold uppercase tracking-widest text-[#D94A38] hover:bg-[#D94A38] hover:text-white transition-all whitespace-nowrap"
            >
              Open Zomato Menu ↗
            </a>
          </div>
        </div>
      </section>

      {/* 5. INSTAGRAM SECTION */}
      <InstagramGrid />

      {/* 6. LOCATION & HOURS SNAPSHOT */}
      <section className="py-24 bg-[#0C0C0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-white/10 bg-[#0C0C0C] p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Info Column */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#D94A38] text-xs font-bold text-[#D94A38] uppercase tracking-widest">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{BUSINESS_FACTS.hoursText}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F2ED] tracking-tight">
                  Visit Us in Kotrung, Uttarpara
                </h2>

                <div className="space-y-4 text-xs text-[#F5F2ED]/70 font-sans">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D94A38] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#F5F2ED] font-bold uppercase tracking-wider mb-1">Address:</strong>
                      <span className="text-sm">{BUSINESS_FACTS.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#D94A38] shrink-0" />
                    <div>
                      <strong className="text-[#F5F2ED] font-bold uppercase tracking-wider mr-2">Phone:</strong>
                      <a href={BUSINESS_FACTS.phoneRaw} className="text-[#D94A38] font-mono text-sm hover:underline">
                        {BUSINESS_FACTS.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={BUSINESS_FACTS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="get-directions-btn"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D94A38] hover:bg-[#b83828] text-white font-bold text-xs uppercase tracking-widest transition-all"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={BUSINESS_FACTS.phoneRaw}
                    className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-[#F5F2ED] hover:border-white/50 text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#D94A38]" />
                    <span>Tap to Call</span>
                  </a>
                </div>
              </div>

              {/* Map View Box */}
              <div className="relative h-72 sm:h-96 border border-white/10 bg-[#151515]">
                <iframe
                  title="Grill to Chill Location Map"
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
        </div>
      </section>
    </div>
  );
};
