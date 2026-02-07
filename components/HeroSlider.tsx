
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Banner } from '../types';

interface HeroSliderProps {
  banners: Banner[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % banners.length);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden group">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img src={banner.imageUrl} alt={banner.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-xl text-white">
                <span className="inline-block px-3 py-1 bg-pink-600 text-xs font-bold mb-4">EXCLUSIVE</span>
                <h2 className="text-6xl font-black mb-4 leading-tight">{banner.title}</h2>
                <p className="text-xl opacity-90 mb-8">{banner.subtitle}</p>
                <button className="px-8 py-3 bg-white text-black font-bold hover:bg-pink-600 hover:text-white transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/20 hover:bg-black/50 text-white flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/20 hover:bg-black/50 text-white flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-24 h-1 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
