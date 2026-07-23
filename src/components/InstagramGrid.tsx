import React from 'react';
import { INSTAGRAM_POSTS, BUSINESS_FACTS } from '../data/restaurantData';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export const InstagramGrid: React.FC = () => {
  return (
    <section className="py-20 bg-[#0C0C0C] border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#D94A38] uppercase">
              <Instagram className="w-4 h-4" />
              <span>@_grill_to_chill</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F2ED] tracking-tight">
              Fresh Off The Charcoal
            </h2>
            <p className="text-xs text-[#F5F2ED]/60 max-w-xl font-sans uppercase tracking-widest">
              Catch our daily specials, kitchen moments, and culinary highlights directly on Instagram.
            </p>
          </div>

          <div>
            <a
              href={BUSINESS_FACTS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="instagram-follow-btn"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#D94A38] text-xs font-bold uppercase tracking-widest text-[#D94A38] hover:bg-[#D94A38] hover:text-white transition-all shadow-md group"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow Us on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#F5F2ED]/50 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Post Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative bg-[#0C0C0C] border border-white/10 hover:border-[#D94A38] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-[#151515]">
                <img
                  src={post.imageUrl}
                  alt="Grill to Chill Instagram Dish"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-40 group-hover:opacity-20 transition-opacity" />

                <div className="absolute top-3 right-3 p-1.5 bg-[#0C0C0C]/80 border border-white/10 text-white">
                  <Instagram className="w-3.5 h-3.5 text-[#D94A38]" />
                </div>
              </div>

              {/* Content Footer */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between border-t border-white/10">
                <p className="text-xs text-[#F5F2ED]/70 line-clamp-2 font-sans leading-relaxed">
                  {post.caption}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#F5F2ED]/50">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[#D94A38]">
                      <Heart className="w-3.5 h-3.5 fill-[#D94A38]" />
                      <span className="font-mono text-xs">{post.likes}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#F5F2ED]/60">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span className="font-mono text-xs">{post.comments}</span>
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#F5F2ED]/40">
                    {post.date}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
