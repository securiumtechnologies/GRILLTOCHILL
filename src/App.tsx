import React, { useState } from 'react';
import { NavPage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OrderOnlineModal } from './components/OrderOnlineModal';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { VisitPage } from './pages/VisitPage';
import { BUSINESS_FACTS } from './data/restaurantData';
import { ShoppingBag, Phone, MapPin } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0E0F12] text-[#F4F1EA] font-sans relative selection:bg-[#E05326] selection:text-white">
      {/* Header Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
      />

      {/* Main Page View Router */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenOrderModal={() => setIsOrderModalOpen(true)}
              />
            )}
            {currentPage === 'menu' && (
              <MenuPage
                onOpenOrderModal={() => setIsOrderModalOpen(true)}
              />
            )}
            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onOpenOrderModal={() => setIsOrderModalOpen(true)}
              />
            )}
            {currentPage === 'visit' && (
              <VisitPage
                onOpenOrderModal={() => setIsOrderModalOpen(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
      />

      {/* Mobile Sticky Quick Action Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#12141B]/95 backdrop-blur-lg border-t border-[#262A37] p-3 shadow-2xl flex items-center justify-around gap-2">
        <button
          onClick={() => handleNavigate('menu')}
          className="flex-1 py-2.5 rounded-xl bg-[#1D202B] border border-[#2D3242] text-xs font-semibold text-[#F4F1EA] flex items-center justify-center gap-1.5"
        >
          <span>View Menu</span>
        </button>

        <button
          onClick={() => setIsOrderModalOpen(true)}
          className="flex-1 py-2.5 rounded-xl bg-[#E05326] text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-lg shadow-[#E05326]/30"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Order Online</span>
        </button>

        <a
          href={BUSINESS_FACTS.phoneRaw}
          className="p-2.5 rounded-xl bg-[#1D202B] border border-[#2D3242] text-[#E05326] flex items-center justify-center"
          aria-label="Call restaurant"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>

      {/* Order Online Modal */}
      <OrderOnlineModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
}
