
import React, { useState } from 'react';
import { Heart, ShoppingCart, X, Plus, Minus, Maximize2 } from 'lucide-react';
import { Product, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ProductCardProps {
  product: Product;
  lang: Language;
  rank?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, lang, rank }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const t = TRANSLATIONS[lang];

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div className="group bg-white overflow-hidden rounded-lg flex flex-col h-full relative transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100">
        {rank !== undefined && (
          <div className="absolute top-0 left-0 z-10 w-10 h-10 bg-gray-900 text-white flex items-center justify-center font-black italic rounded-br-lg">
            {rank}
          </div>
        )}
        
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 cursor-pointer" onClick={toggleModal}>
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <button className="p-2 bg-white/80 rounded-full hover:bg-white text-gray-400 hover:text-pink-600 shadow-sm transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-white/90 px-4 py-2 rounded-full text-xs font-bold shadow-md flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Maximize2 className="w-4 h-4" /> {t.quickView}
            </span>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <span className="text-[12px] font-black text-pink-600 mb-1 uppercase tracking-wider">{product.brand}</span>
          <h3 className="text-[13px] text-gray-700 font-medium line-clamp-2 mb-3 h-10">{product.name}</h3>
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg font-black text-gray-900">{(product.price).toLocaleString()}원</span>
              <span className="text-lg font-black text-pink-600">{product.discount}%</span>
            </div>
            <span className="text-xs text-gray-400 line-through">{(product.originalPrice).toLocaleString()}원</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={toggleModal}>
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-xl shadow-2xl flex flex-col md:flex-row relative animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <button onClick={toggleModal} className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"><X className="w-6 h-6" /></button>
            <div className="w-full md:w-1/2 bg-gray-50"><img src={product.imageUrl} className="w-full h-full object-cover" /></div>
            <div className="w-full md:w-1/2 p-10 flex flex-col">
              <span className="text-pink-600 font-black mb-2">{product.brand}</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-black text-gray-900">{(product.price).toLocaleString()}원</span>
                <span className="text-xl font-bold text-pink-600">{product.discount}% OFF</span>
              </div>
              <p className="text-gray-500 leading-relaxed mb-8">{product.description}</p>
              <div className="mt-auto flex gap-4">
                <button className="flex-grow h-14 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2">
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
