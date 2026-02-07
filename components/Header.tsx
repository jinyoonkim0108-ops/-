
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Heart, Globe, Menu, ChevronRight, X, Triangle } from 'lucide-react';
import { Language, TranslationStrings } from '../types';
import { POPULAR_SEARCHES, POPULAR_BRANDS } from '../constants';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationStrings;
}

const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange, t }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSearchOpen]);

  const renderRankList = (items: { term?: string; name?: string; change: number }[], title: string) => (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-black text-gray-900 flex items-center gap-2">
          {title === '인기 검색어' ? (
            <span className="text-gray-900">실시간 <span className="text-pink-600">인기 검색어</span></span>
          ) : (
            <span className="text-gray-900">실시간 <span className="text-pink-600">인기 브랜드</span></span>
          )}
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-x-12">
        <div className="space-y-4">
          {items.slice(0, 10).map((item, i) => (
            <div key={i} className="flex items-center group cursor-pointer">
              <span className={`w-6 font-black text-lg ${i < 3 ? 'text-pink-600' : 'text-gray-400'}`}>{i + 1}</span>
              <span className="flex-grow text-sm font-bold text-gray-700 group-hover:text-pink-600 transition-colors ml-2 truncate">{item.term || item.name}</span>
              <span className="ml-2">
                {item.change === 0 ? <span className="text-[10px] text-gray-300">-</span> : item.change > 0 ? <Triangle className="w-2 h-2 fill-red-500 text-red-500" /> : <Triangle className="w-2 h-2 fill-blue-500 text-blue-500 rotate-180" />}
              </span>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {items.slice(10, 20).map((item, i) => (
            <div key={i + 10} className="flex items-center group cursor-pointer">
              <span className="w-6 font-black text-lg text-gray-400">{i + 11}</span>
              <span className="flex-grow text-sm font-bold text-gray-700 group-hover:text-pink-600 transition-colors ml-2 truncate">{item.term || item.name}</span>
              <span className="ml-2">
                {item.change === 0 ? <span className="text-[10px] text-gray-300">-</span> : item.change > 0 ? <Triangle className="w-2 h-2 fill-red-500 text-red-500" /> : <Triangle className="w-2 h-2 fill-blue-500 text-blue-500 rotate-180" />}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        {/* Top Utility */}
        <div className="max-w-[1400px] mx-auto px-4 h-10 flex items-center justify-end text-[11px] text-gray-500 space-x-4">
          <button className="hover:text-black">로그인</button>
          <button className="hover:text-black">회원가입</button>
          <button className="hover:text-black">장바구니</button>
          <button className="hover:text-black">마이페이지</button>
          <button className="hover:text-black">고객센터</button>
          <div className="flex items-center space-x-2 border-l pl-4 ml-2">
            <button onClick={() => onLanguageChange(Language.KO)} className={`${lang === Language.KO ? 'text-black font-bold' : ''}`}>KO</button>
            <button onClick={() => onLanguageChange(Language.EN)} className={`${lang === Language.EN ? 'text-black font-bold' : ''}`}>EN</button>
          </div>
        </div>

        {/* Main Header Area */}
        <div className="max-w-[1400px] mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-black tracking-tighter text-black cursor-pointer">halfclub</h1>
          </div>

          <div className="flex-grow max-w-xl mx-8 relative">
            <input
              type="text"
              placeholder="써스데이아일랜드, 봄 신상 단독 오픈"
              onClick={() => setIsSearchOpen(true)}
              className="w-full h-11 px-4 border border-gray-200 rounded-full focus:outline-none placeholder:text-gray-400 text-sm font-medium cursor-pointer"
              readOnly
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-black">
              <Search className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-6 text-sm font-bold text-gray-900">
            <button className="hover:text-pink-600">닥스골프</button>
            <button className="hover:text-pink-600">아우터특가</button>
            <button className="hover:text-pink-600 flex items-center gap-1">TV쇼핑 <span className="bg-blue-600 text-white text-[8px] px-1 rounded-sm">LIVE</span></button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 flex items-center h-14 space-x-8 text-[15px] font-bold text-gray-800">
            <button className="hover:text-pink-600">여성</button>
            <button className="hover:text-pink-600">남성</button>
            <button className="hover:text-pink-600">골프</button>
            <button className="hover:text-pink-600">스포츠</button>
            <button className="hover:text-pink-600">슈즈/ACC</button>
            <button className="hover:text-pink-600">식품</button>
            <button className="hover:text-pink-600">라이프</button>
            <div className="w-[1px] h-4 bg-gray-200"></div>
            <button className="text-gray-500 hover:text-black font-medium">베스트</button>
            <button className="text-gray-500 hover:text-black font-medium">브랜드</button>
            <button className="text-gray-500 hover:text-black font-medium">혜택</button>
          </div>
        </nav>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-white animate-in fade-in duration-200 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 pt-10 pb-20">
            <div className="flex items-center justify-between mb-12">
              <div className="flex-grow relative">
                <input autoFocus type="text" placeholder="검색어를 입력하세요" className="w-full text-2xl py-4 border-b-2 border-gray-900 focus:outline-none font-bold" />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-900"><Search className="w-8 h-8" /></button>
              </div>
              <button onClick={() => setIsSearchOpen(false)} className="ml-8 p-2 text-gray-400 hover:text-gray-900"><X className="w-10 h-10" /></button>
            </div>
            <div className="flex gap-16">
              {renderRankList(POPULAR_SEARCHES, '인기 검색어')}
              <div className="w-[1px] bg-gray-100" />
              {renderRankList(POPULAR_BRANDS, '인기 브랜드')}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
