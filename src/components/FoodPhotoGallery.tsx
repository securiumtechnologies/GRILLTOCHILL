import React, { useState } from 'react';
import { FOOD_PHOTOGRAPHS, FoodPhoto } from '../data/restaurantData';
import { Camera, Maximize2, X, ShoppingBag, Utensils, Flame, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FoodPhotoGalleryProps {
  onOpenOrderModal: () => void;
  onNavigateToMenu: () => void;
}

export const FoodPhotoGallery: React.FC<FoodPhotoGalleryProps> = ({
  onOpenOrderModal,
  onNavigateToMenu,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhotoModal, setActivePhotoModal] = useState<FoodPhoto | null>(null);

  const categories = ['All', 'Tandoori Special', 'Biryani & Rice', 'Vegetarian Grill', 'Rich Curries'];

  const filteredPhotos = selectedCategory === 'All'
    ? FOOD_PHOTOGRAPHS
    : FOOD_PHOTOGRAPHS.filter(p => p.category === selectedCategory || (selectedCategory === 'Tandoori Special' && (p.category.includes('Tandoori') || p.category.includes('Kebabs'))));

  return (
    <section className="py-24 bg-[#0C0C0C] border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#D94A38] uppercase">
              <Camera className="w-4 h-4" />
              <span>Authentic Culinary Gallery</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F2ED] tracking-tight">
              Food Photographs
            </h2>
            <p className="text-xs text-[#F5F2ED]/60 max-w-xl font-sans uppercase tracking-widest">
              Glimpse our flame-roasted tandoori kebabs, rich butter curries, and aromatic dum biryanis freshly prepared in Uttarpara.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateToMenu}
              id="gallery-explore-menu-btn"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-[#F5F2ED] hover:border-[#D94A38] hover:text-[#D94A38] text-xs font-bold uppercase tracking-widest transition-all"
            >
              <span>Explore Complete Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all border ${
                selectedCategory === cat
                  ? 'border-[#D94A38] bg-[#D94A38] text-white shadow-md'
                  : 'border-white/10 bg-[#0C0C0C] text-[#F5F2ED]/60 hover:border-white/30 hover:text-[#F5F2ED]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setActivePhotoModal(photo)}
              className="group relative cursor-pointer overflow-hidden border border-white/10 bg-[#151515] hover:border-[#D94A38] transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-[#0C0C0C]/80 border border-[#D94A38] text-[10px] font-bold uppercase tracking-widest text-[#D94A38] backdrop-blur-md">
                    {photo.tag}
                  </span>
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4 text-[#D94A38]" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 space-y-1.5 text-left">
                  <span className="text-[10px] font-bold text-[#D94A38] uppercase tracking-widest">
                    {photo.category}
                  </span>
                  <h3 className="font-serif text-xl text-[#F5F2ED] group-hover:text-white transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-[#F5F2ED]/70 font-sans line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / High-Res View Modal */}
      <AnimatePresence>
        {activePhotoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full bg-[#0C0C0C] border border-white/20 overflow-hidden shadow-2xl space-y-0"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setActivePhotoModal(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 border border-white/20 flex items-center justify-center text-white hover:border-[#D94A38] hover:text-[#D94A38] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Frame */}
              <div className="relative aspect-[16/10] bg-[#151515] overflow-hidden">
                <img
                  src={activePhotoModal.imageUrl}
                  alt={activePhotoModal.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content Footer */}
              <div className="p-6 sm:p-8 space-y-4 border-t border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1 border border-[#D94A38] text-xs font-bold uppercase tracking-widest text-[#D94A38]">
                    {activePhotoModal.tag} • {activePhotoModal.category}
                  </span>
                  <span className="text-xs font-sans text-[#F5F2ED]/50 uppercase tracking-widest">
                    Grill to Chill • GT Road Uttarpara
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5F2ED]">
                  {activePhotoModal.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#F5F2ED]/70 font-sans leading-relaxed">
                  {activePhotoModal.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#F5F2ED]/60 font-sans">
                    <Flame className="w-4 h-4 text-[#D94A38]" />
                    <span>Prepared fresh daily over live charcoal</span>
                  </div>

                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => {
                        setActivePhotoModal(null);
                        onOpenOrderModal();
                      }}
                      className="w-full sm:w-auto px-6 py-3 bg-[#D94A38] hover:bg-[#b83828] text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Order This Dish</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
