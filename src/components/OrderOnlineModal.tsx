import React, { useState } from 'react';
import { BUSINESS_FACTS } from '../data/restaurantData';
import { ShoppingBag, Phone, ExternalLink, X, Settings2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface OrderOnlineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderOnlineModal: React.FC<OrderOnlineModalProps> = ({ isOpen, onClose }) => {
  const [customLink, setCustomLink] = useState('https://www.zomato.com/kolkata/grill-to-chill-uttarpara/order');
  const [showSettings, setShowSettings] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSaveCustomLink = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setShowSettings(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-md bg-[#0C0C0C] border border-white/20 p-6 sm:p-8 shadow-2xl text-[#F5F2ED]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 border border-white/10 text-[#F5F2ED]/60 hover:text-[#F5F2ED] hover:border-white/30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="text-center space-y-2 pb-6 border-b border-white/10">
            <div className="inline-flex items-center justify-center w-10 h-10 border border-[#D94A38] text-[#D94A38] mb-1">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-normal text-2xl tracking-tight">
              Order Online
            </h3>
            <p className="text-xs text-[#F5F2ED]/60 uppercase tracking-widest font-sans">
              {BUSINESS_FACTS.name} ({BUSINESS_FACTS.bengaliName}) • Uttarpara
            </p>
          </div>

          {/* Service Badge Highlights */}
          <div className="my-5 flex flex-wrap justify-center gap-2 text-xs">
            {BUSINESS_FACTS.serviceOptions.map((opt, i) => (
              <span
                key={i}
                className="px-2.5 py-1 border border-white/10 text-[#F5F2ED]/80 font-sans"
              >
                ✓ {opt}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            {/* Primary Order Link */}
            <a
              href={customLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-4 bg-[#D94A38] text-white font-bold uppercase tracking-widest text-xs transition-all group hover:bg-[#b83828]"
            >
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-4 h-4" />
                <div className="text-left">
                  <div className="text-xs font-bold">Order Online</div>
                  <div className="text-[10px] font-normal text-white/80 tracking-normal normal-case">
                    Fast delivery & takeaway options
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Direct Phone Call option */}
            <a
              href={BUSINESS_FACTS.phoneRaw}
              className="w-full flex items-center justify-between p-4 border border-white/20 hover:border-[#D94A38] text-[#F5F2ED] font-medium transition-all group"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D94A38]" />
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-widest">Call Direct</div>
                  <div className="text-xs font-mono text-[#F5F2ED]/60">{BUSINESS_FACTS.phone}</div>
                </div>
              </div>
              <span className="text-xs text-[#D94A38] font-bold uppercase tracking-widest">Call →</span>
            </a>
          </div>

          {/* Client Custom Link Configurator toggle */}
          <div className="mt-6 pt-4 border-t border-white/10 text-center">
            {!showSettings ? (
              <button
                onClick={() => setShowSettings(true)}
                className="inline-flex items-center gap-1.5 text-xs text-[#F5F2ED]/40 hover:text-[#F5F2ED]/80 transition-colors uppercase tracking-widest text-[10px]"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>Configure Order URL</span>
              </button>
            ) : (
              <form onSubmit={handleSaveCustomLink} className="space-y-3 text-left border border-white/10 p-4">
                <label className="block text-xs font-medium text-[#F5F2ED]/80">
                  Insert Client Order / Google Link:
                </label>
                <input
                  type="url"
                  value={customLink}
                  onChange={(e) => setCustomLink(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 bg-[#121212] border border-white/20 text-xs text-[#F5F2ED] focus:outline-none focus:border-[#D94A38]"
                  required
                />
                <div className="flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowSettings(false)}
                    className="px-3 py-1.5 text-xs text-[#F5F2ED]/60 hover:text-[#F5F2ED]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#D94A38] text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1"
                  >
                    {savedSuccess ? <Check className="w-3.5 h-3.5" /> : null}
                    {savedSuccess ? 'Saved!' : 'Update Link'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
