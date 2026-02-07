
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import HeroSlider from './components/HeroSlider';
import Footer from './components/Footer';
import { Language, Product } from './types';
import { TRANSLATIONS, MOCK_PRODUCTS, MAIN_BANNERS } from './constants';
import { Sparkles, ChevronUp, Heart } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.KO);
  const [showTopBtn, setShowTopBtn] = useState(false);
  
  const t = useMemo(() => TRANSLATIONS[lang], [lang]);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Quick Menus Data
  const quickMenus = [
    { name: "마에스트로", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=200" },
    { name: "지오지아", img: "https://images.unsplash.com/photo-1488161628813-ec447cc5122d?q=80&w=200" },
    { name: "무드별원피스", img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=200" },
    { name: "최종마감세일", dark: true },
    { name: "시에나라이프", img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=200" },
    { name: "무스탕&밍크", img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=200" },
    { name: "설준비대전", img: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?q=80&w=200" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header lang={lang} onLanguageChange={setLang} t={t} />

      <main className="flex-grow">
        <HeroSlider banners={MAIN_BANNERS} />

        {/* Brand/Quick Navigation */}
        <section className="max-w-[1400px] mx-auto px-4 py-16 flex justify-center space-x-12 overflow-x-auto no-scrollbar">
          {quickMenus.map((menu, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer min-w-[100px]">
              <div className={`w-24 h-24 rounded-full overflow-hidden mb-3 border border-gray-100 shadow-sm relative transition-all group-hover:shadow-md ${menu.dark ? 'bg-pink-600' : 'bg-white'}`}>
                {menu.dark ? (
                  <div className="w-full h-full flex items-center justify-center text-white font-black text-xl">SALE</div>
                ) : (
                  <img src={menu.img} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all" />
                )}
              </div>
              <span className="text-[13px] font-bold text-gray-700 group-hover:text-black">{menu.name}</span>
            </div>
          ))}
        </section>

        {/* Best Products Grid */}
        <section className="max-w-[1400px] mx-auto px-4 py-20 border-t border-gray-50">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">실시간 랭킹</h2>
            <button className="text-sm font-bold text-gray-400 hover:text-black transition-colors">전체보기 &gt;</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {MOCK_PRODUCTS.map((product, idx) => (
              <ProductCard key={product.id} product={product} lang={lang} rank={idx + 1} />
            ))}
          </div>
        </section>

        {/* Weekly Keywords - Simplified Restoration */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl font-black text-center text-gray-900 mb-12">금주의 추천 테마</h2>
            <div className="flex justify-center gap-4 mb-12 overflow-x-auto no-scrollbar pb-2">
              {["셔츠레이어드", "데일리코디", "겨울아우터", "봄신상미리보기", "오피스룩"].map(tag => (
                <button key={tag} className="px-8 py-3 bg-white border border-gray-200 rounded-full font-bold text-sm hover:border-black transition-all">#{tag}</button>
              ))}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
               {MOCK_PRODUCTS.map(p => (
                 <div key={p.id + '_theme'} className="bg-white p-4 rounded-xl shadow-sm">
                   <img src={p.imageUrl} className="aspect-[3/4] object-cover rounded-lg mb-4" />
                   <p className="font-bold text-pink-600 text-xs mb-1">{p.brand}</p>
                   <p className="text-sm font-medium text-gray-700 truncate">{p.name}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />

      {/* Floating UI */}
      <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-4">
        {showTopBtn && (
          <button onClick={scrollToTop} className="w-14 h-14 bg-white border border-gray-100 rounded-full shadow-xl flex items-center justify-center text-gray-400 hover:text-black transition-all">
            <ChevronUp className="w-8 h-8" />
          </button>
        )}
        <button className="w-16 h-16 bg-black text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform group relative">
          <Sparkles className="w-8 h-8" />
          <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border">AI 가이드 ✨</div>
        </button>
      </div>
    </div>
  );
};

export default App;
