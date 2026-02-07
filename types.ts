
export enum Language {
  KO = 'KO',
  EN = 'EN',
  CN = 'CN'
}

export interface Product {
  id: number;
  brand: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: number;
  imageUrl: string;
  description: string;
  isNew?: boolean;
  isBest?: boolean;
}

export interface Banner {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  color: string;
}

export interface MainCategory {
  name: string;
  subCategories: string[];
}

export interface TranslationStrings {
  home: string;
  best: string;
  new: string;
  outlet: string;
  brand: string;
  search: string;
  login: string;
  join: string;
  cart: string;
  myPage: string;
  todayDeals: string;
  ranking: string;
  footerInfo: string;
  quickView: string;
  addToCart: string;
  description: string;
  close: string;
  sortBy: string;
  allBrands: string;
  priceLowHigh: string;
  priceHighLow: string;
  newArrivals: string;
  bestsellers: string;
  clearFilters: string;
  allCategories: string;
  categories: MainCategory[];
}

export type Translations = Record<Language, TranslationStrings>;
