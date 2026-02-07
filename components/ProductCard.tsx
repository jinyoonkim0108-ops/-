
import React, { useState } from 'react';
import { Heart, ShoppingCart, X, Maximize2 } from 'lucide-react';
import { Product, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ProductCardProps {
  product: Product;
  lang: Language;
  rank?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, lang, rank }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div className="group bg-white flex flex-col h-full relative transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100 p-2 rounded-lg">
        {rank !== undefined && (
          <div className="absolute top-2 left-2 z-10 w-8 h-8 bg-black text-white flex items-center justify-center font-black italic rounded">
            {rank}
          </div>
        )}
        
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 cursor-pointer rounded-md" onClick={toggleModal}>
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-pink-600">
              <Heart className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <button className="bg-white/90 px-4 py-2 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all flex items-center gap-1">
              <Maximize2 className="w-3 h-3" /> {t.quickView}
            </button>
          </div>
        </div>

        <div className="mt-3 flex flex-col flex-grow">
          <span className="text-[11px] font-black text-pink-600 mb-1 uppercase">{product.brand}</span>
          <h3 className="text-sm text-gray-800 font-medium line-clamp-2 mb-2 leading-tight">{product.name}</h3>
          <div className="mt-auto">
            <div className="flex items-center gap-2">
              <span className="text-base font-black text-gray-900">{(product.price).toLocaleString()}원</span>
              <span className="text-base font-black text-pink-600">{product.discount}%</span>
            </div>
            <span className="text-xs text-gray-400 line-through">{(product.originalPrice).toLocaleString()}원</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={toggleModal}>
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-xl shadow-2xl flex flex-col md:flex-row relative" onClick={e => e.stopPropagation()}>
            <button onClick={toggleModal} className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full"><X className="w-6 h-6" /></button>
            <div className="w-full md:w-1/2 bg-gray-50"><img src={product.imageUrl} className="w-full h-full object-cover" /></div>
            <div className="w-full md:w-1/2 p-10 flex flex-col">
              <span className="text-pink-600 font-black mb-2">{product.brand}</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-black text-gray-900">{(product.price).toLocaleString()}원</span>
                <span className="text-xl font-bold text-pink-600">{product.discount}% OFF</span>
              </div>
              <p className="text-gray-500 leading-relaxed mb-10">{product.description}</p>
              <div className="mt-auto flex gap-4">
                <button className="flex-grow h-14 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" /> {t.addToCart}
                </button>
                <button className="w-14 h-14 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-pink-600 transition-colors">
                  <Heart className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
