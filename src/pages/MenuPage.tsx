import React, { useState, useMemo } from 'react';
import { CategoryType, FoodType, MenuItem } from '../types';
import { MENU_ITEMS, BUSINESS_FACTS } from '../data/restaurantData';
import {
  Utensils,
  Coffee,
  Search,
  ShoppingBag,
  ExternalLink,
  Flame,
  Leaf,
  Drumstick,
  Sparkles,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MenuPageProps {
  onOpenOrderModal: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onOpenOrderModal }) => {
  // Top-level Category State: 'food' | 'beverages'
  const [activeCategory, setActiveCategory] = useState<CategoryType>('food');

  // Food Sub-List Toggle State: 'veg' | 'non-veg'
  const [foodTypeFilter, setFoodTypeFilter] = useState<FoodType>('non-veg');

  // Search Filter
  const [searchQuery, setSearchQuery] = useState('');

  // Sub-category filter option (e.g. "All", "Tandoori & Starters", "Main Course", "Breads & Rice")
  const [selectedSubCat, setSelectedSubCat] = useState<string>('all');

  // Filter menu items dynamically
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Top level category match
      if (item.category !== activeCategory) return false;

      // If category is food, match foodType filter
      if (activeCategory === 'food' && item.foodType !== foodTypeFilter) return false;

      // Subcategory match
      if (selectedSubCat !== 'all' && item.subCategory !== selectedSubCat) return false;

      // Search match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.subCategory.toLowerCase().includes(q) ||
          (item.description && item.description.toLowerCase().includes(q))
        );
      }

      return true;
    });
  }, [activeCategory, foodTypeFilter, selectedSubCat, searchQuery]);

  // Extract available subcategories for active view
  const availableSubCategories = useMemo(() => {
    const list = MENU_ITEMS.filter((item) => {
      if (item.category !== activeCategory) return false;
      if (activeCategory === 'food' && item.foodType !== foodTypeFilter) return false;
      return true;
    });
    const subCats = Array.from(new Set(list.map((i) => i.subCategory)));
    return ['all', ...subCats];
  }, [activeCategory, foodTypeFilter]);

  return (
    <div className="min-h-screen bg-[#0C0C0C] pb-24 space-y-10">
      {/* Menu Header Banner */}
      <section className="relative py-20 bg-[#0C0C0C] border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#D94A38] text-xs font-bold text-[#D94A38] uppercase tracking-widest">
            <Flame className="w-4 h-4 fill-current" />
            <span>Grill to Chill Menu</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#F5F2ED] tracking-tight">
            Our Culinary Offerings
          </h1>
          <p className="max-w-xl mx-auto text-xs text-[#F5F2ED]/60 uppercase tracking-widest font-sans">
            Carefully crafted Indian delicacies flame-roasted over charcoal & simmered in aromatic spices.
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#F5F2ED]/50 font-sans">
            <Info className="w-3.5 h-3.5 text-[#D94A38]" />
            <span>Dishes displayed with descriptions. Complete pricing available on Zomato or in-house menu.</span>
          </div>
        </div>
      </section>

      {/* Persistent Order Online Floating Ribbon / Bar */}
      <div className="sticky top-[69px] z-30 bg-[#0C0C0C]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#F5F2ED] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D94A38] animate-ping"></span>
            <span className="hidden sm:inline">Ready to dine?</span>
            <span className="text-[#F5F2ED]/60 font-normal">Delivery & Takeaway active</span>
          </div>

          <button
            onClick={onOpenOrderModal}
            id="persistent-menu-order-btn"
            className="px-5 py-2 border border-[#D94A38] text-[#D94A38] hover:bg-[#D94A38] hover:text-white text-xs font-bold uppercase tracking-widest transition-all active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5 inline mr-1.5" />
            <span>Order Online</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* TOP LEVEL CATEGORY SWITCHER (FOOD vs BEVERAGES) */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 bg-[#0C0C0C] border border-white/20">
            <button
              onClick={() => {
                setActiveCategory('food');
                setSelectedSubCat('all');
              }}
              id="category-tab-food"
              className={`px-6 sm:px-8 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2.5 transition-all ${
                activeCategory === 'food'
                  ? 'bg-[#D94A38] text-white'
                  : 'text-[#F5F2ED]/60 hover:text-[#F5F2ED]'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Food</span>
            </button>

            <button
              onClick={() => {
                setActiveCategory('beverages');
                setSelectedSubCat('all');
              }}
              id="category-tab-beverages"
              className={`px-6 sm:px-8 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2.5 transition-all ${
                activeCategory === 'beverages'
                  ? 'bg-[#D94A38] text-white'
                  : 'text-[#F5F2ED]/60 hover:text-[#F5F2ED]'
              }`}
            >
              <Coffee className="w-4 h-4" />
              <span>Beverages</span>
            </button>
          </div>
        </div>

        {/* FOOD SUB-LIST TOGGLE (VEG vs NON-VEG) - SHOWN ONLY FOR FOOD */}
        {activeCategory === 'food' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <div className="inline-flex p-1 bg-[#0C0C0C] border border-white/10">
              <button
                onClick={() => {
                  setFoodTypeFilter('non-veg');
                  setSelectedSubCat('all');
                }}
                id="food-type-non-veg-btn"
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all ${
                  foodTypeFilter === 'non-veg'
                    ? 'bg-rose-950 text-rose-300 border border-rose-800'
                    : 'text-[#F5F2ED]/50 hover:text-[#F5F2ED]'
                }`}
              >
                <Drumstick className="w-3.5 h-3.5 text-rose-400" />
                <span>Non-Veg Specials</span>
              </button>

              <button
                onClick={() => {
                  setFoodTypeFilter('veg');
                  setSelectedSubCat('all');
                }}
                id="food-type-veg-btn"
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all ${
                  foodTypeFilter === 'veg'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'text-[#F5F2ED]/50 hover:text-[#F5F2ED]'
                }`}
              >
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>Veg Delights</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* Search & Sub-category Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#F5F2ED]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Tikka, Biryani)..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#0C0C0C] border border-white/20 text-xs text-[#F5F2ED] placeholder-[#F5F2ED]/40 focus:outline-none focus:border-[#D94A38] transition-colors"
            />
          </div>

          {/* Subcategory Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {availableSubCategories.map((subCat) => (
              <button
                key={subCat}
                onClick={() => setSelectedSubCat(subCat)}
                className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all border ${
                  selectedSubCat === subCat
                    ? 'border-[#D94A38] text-[#D94A38] bg-[#D94A38]/10'
                    : 'border-white/10 text-[#F5F2ED]/60 hover:text-[#F5F2ED] hover:border-white/30'
                }`}
              >
                {subCat === 'all' ? 'All Sections' : subCat}
              </button>
            ))}
          </div>
        </div>

        {/* MENU ITEMS GRID / LIST */}
        <div className="space-y-6">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-[#0C0C0C] border border-white/10 space-y-3">
              <Sparkles className="w-8 h-8 text-[#D94A38] mx-auto" />
              <h3 className="text-lg font-serif text-[#F5F2ED]">No dishes found matching your search</h3>
              <p className="text-xs text-[#F5F2ED]/50 uppercase tracking-wider font-sans">Try clearing filters or searching for something else.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSubCat('all');
                }}
                className="mt-2 px-4 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest text-[#F5F2ED]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#0C0C0C] border border-white/10 p-6 hover:border-[#D94A38] transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    {/* Header line with badge and subcategory */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold text-[#D94A38] uppercase tracking-widest">
                        {item.subCategory}
                      </span>
                      {item.foodType && (
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 border ${
                            item.foodType === 'veg'
                              ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800'
                              : 'bg-rose-950/80 text-rose-400 border-rose-800'
                          }`}
                        >
                          {item.foodType === 'veg' ? '● VEG' : '▲ NON-VEG'}
                        </span>
                      )}
                    </div>

                    {/* Dish Name Only - NO PRICES */}
                    <h3 className="font-serif text-2xl font-normal text-[#F5F2ED] group-hover:text-[#D94A38] transition-colors">
                      {item.name}
                    </h3>

                    {/* Description */}
                    {item.description && (
                      <p className="text-xs text-[#F5F2ED]/60 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    )}

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 border border-white/10 text-[#F5F2ED]/60 font-mono"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer button */}
                  <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-[#F5F2ED]/40 uppercase tracking-widest">Grill to Chill Specialty</span>
                    <button
                      onClick={onOpenOrderModal}
                      className="text-[#D94A38] hover:underline font-bold text-xs uppercase tracking-widest flex items-center gap-1"
                    >
                      <span>Order Item →</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Zomato Official Menu Direct Banner */}
        <div className="mt-12 p-8 bg-[#0C0C0C] border border-white/10 text-center space-y-4">
          <h3 className="font-serif text-2xl font-normal text-[#F5F2ED]">
            Looking for Zomato's Live Menu & Prices?
          </h3>
          <p className="max-w-md mx-auto text-xs text-[#F5F2ED]/60 uppercase tracking-widest font-sans">
            You can also view the original digital Zomato menu card for Grill to Chill Uttarpara anytime.
          </p>
          <div>
            <a
              href={BUSINESS_FACTS.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#D94A38] text-xs font-bold uppercase tracking-widest text-[#D94A38] hover:bg-[#D94A38] hover:text-white transition-all shadow-md"
            >
              <span>View Zomato Menu Card</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
