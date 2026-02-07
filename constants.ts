
import { Language, Translations, Product, Banner } from './types';

export const TRANSLATIONS: Translations = {
  [Language.KO]: {
    home: "홈",
    best: "베스트",
    new: "신상품",
    outlet: "아울렛",
    brand: "브랜드",
    search: "[단독특가] 가을 신상품 최대 80% 세일 상품을 찾아보세요!",
    login: "로그인",
    join: "회원가입",
    cart: "장바구니",
    myPage: "마이페이지",
    todayDeals: "오늘의 딜",
    ranking: "실시간 랭킹",
    footerInfo: "하프클럽 클론 디자인 프로젝트. 쇼피파이 적용을 위한 고품질 React 시안입니다.",
    quickView: "퀵뷰",
    addToCart: "장바구니 담기",
    description: "상품 상세설명",
    close: "닫기",
    sortBy: "정렬 기준",
    allBrands: "모든 브랜드",
    priceLowHigh: "가격 낮은순",
    priceHighLow: "가격 높은순",
    newArrivals: "신상품순",
    bestsellers: "베스트셀러순",
    clearFilters: "필터 초기화",
    allCategories: "전체 카테고리",
    categories: [
      { name: "여성의류", subCategories: ["아우터", "원피스", "티셔츠/블라우스", "팬츠/스커트", "언더웨어"] },
      { name: "남성의류", subCategories: ["정장", "캐주얼", "아우터", "상의", "하의/청바지"] },
      { name: "유아동", subCategories: ["남아", "여아", "베이비", "아동슈즈", "장난감"] },
      { name: "골프", subCategories: ["남성골프", "여성골프", "골프클럽", "골프백/용품"] },
      { name: "스포츠/아웃도어", subCategories: ["등산/아웃도어", "러닝/트레이닝", "수영/서핑", "캠핑/낚시"] },
      { name: "슈즈/잡화", subCategories: ["여성슈즈", "남성슈즈", "운동화", "가방/지갑", "시계/쥬얼리"] },
      { name: "뷰티/건강", subCategories: ["스킨케어", "메이크업", "헤어/바디", "향수", "건강식품"] },
      { name: "리빙/가전", subCategories: ["가구/인테리어", "침구/커튼", "주방용품", "생활용품", "가전/디지털"] }
    ]
  },
  [Language.EN]: {
    home: "Home",
    best: "Best",
    new: "New",
    outlet: "Outlet",
    brand: "Brand",
    search: "[EXCLUSIVE] Search Autumn New Arrivals Up to 80% OFF!",
    login: "Login",
    join: "Join",
    cart: "Cart",
    myPage: "My Page",
    todayDeals: "Deals",
    ranking: "Ranking",
    footerInfo: "HalfClub Clone Project.",
    quickView: "Quick View",
    addToCart: "Add to Cart",
    description: "Description",
    close: "Close",
    sortBy: "Sort By",
    allBrands: "All Brands",
    priceLowHigh: "Low Price",
    priceHighLow: "High Price",
    newArrivals: "Newest",
    bestsellers: "Best",
    clearFilters: "Clear",
    allCategories: "All Categories",
    categories: [
      { name: "Women", subCategories: ["Outerwear", "Dresses", "Tops", "Pants", "Underwear"] },
      { name: "Men", subCategories: ["Suits", "Casual", "Outerwear", "Tops", "Bottoms"] },
      { name: "Kids", subCategories: ["Boys", "Girls", "Baby", "Shoes", "Toys"] },
      { name: "Golf", subCategories: ["Men's Golf", "Women's Golf", "Clubs", "Accessories"] },
      { name: "Sports", subCategories: ["Outdoor", "Training", "Swim", "Camping"] },
      { name: "Shoes/Bags", subCategories: ["Shoes", "Sneakers", "Bags", "Wallets", "Jewelry"] },
      { name: "Beauty", subCategories: ["Skincare", "Makeup", "Hair", "Perfume", "Health"] },
      { name: "Home", subCategories: ["Furniture", "Bedding", "Kitchen", "Living", "Digital"] }
    ]
  },
  [Language.CN]: {
    home: "首页",
    best: "畅销",
    new: "新品",
    outlet: "奥特莱斯",
    brand: "品牌",
    search: "[独家特惠] 查找秋季新品，最高享80%折扣！",
    login: "登录",
    join: "注册",
    cart: "购物车",
    myPage: "个人中心",
    todayDeals: "今日特惠",
    ranking: "实时排行",
    footerInfo: "HalfClub 启发式克隆项目。",
    quickView: "快速查看",
    addToCart: "加入购物车",
    description: "产品详情",
    close: "关闭",
    sortBy: "排序方式",
    allBrands: "所有品牌",
    priceLowHigh: "价格从低到高",
    priceHighLow: "价格从高到低",
    newArrivals: "新品优先",
    bestsellers: "畅销优先",
    clearFilters: "重置筛选",
    allCategories: "全部分类",
    categories: [
      { name: "女装", subCategories: ["外套", "连衣裙", "上衣", "裤子", "内衣"] },
      { name: "男装", subCategories: ["西装", "休闲", "外套", "上衣", "下装"] },
      { name: "童装", subCategories: ["男童", "女童", "婴儿", "童鞋", "玩具"] },
      { name: "高尔夫", subCategories: ["男士高尔夫", "女士高尔夫", "球杆", "配件"] },
      { name: "运动", subCategories: ["户外", "训练", "游泳", "露营"] },
      { name: "鞋包", subCategories: ["鞋履", "运动鞋", "包袋", "钱包", "首饰"] },
      { name: "美妆", subCategories: ["护肤", "彩妆", "美发", "香수", "健康"] },
      { name: "家居", subCategories: ["家具", "床上用品", "厨房", "生活", "数码"] }
    ]
  }
};

export const POPULAR_SEARCHES = [
  { term: "여성패딩", change: 0 },
  { term: "패딩", change: 0 },
  { term: "코트", change: 0 },
  { term: "원피스", change: 0 },
  { term: "pat여성", change: 0 },
  { term: "남성패딩", change: 0 },
  { term: "써스데이아일랜드", change: 0 },
  { term: "가디건", change: 1 },
  { term: "여성코트", change: -1 },
  { term: "모조에스", change: 0 },
  { term: "헤지스여성", change: -1 },
  { term: "여성경량패딩", change: 0 },
  { term: "플리스자켓", change: 0 },
  { term: "여성가디건", change: 0 },
  { term: "여성니트", change: 1 },
  { term: "헤지스남성", change: -1 },
  { term: "여성트위드자켓", change: 1 },
  { term: "롱패딩", change: -1 },
  { term: "닥스남성", change: 0 },
  { term: "헤지스키즈", change: 1 }
];

export const POPULAR_BRANDS = [
  { name: "써스데이아일랜드", change: 0 },
  { name: "쉬즈미스", change: 0 },
  { name: "올리비아로렌", change: 0 },
  { name: "지센", change: 0 },
  { name: "헤지스", change: 0 },
  { name: "질스튜어트뉴...", change: 1 },
  { name: "닥스", change: -1 },
  { name: "알레그리", change: -1 },
  { name: "베네통", change: 0 },
  { name: "모조에스핀", change: 0 },
  { name: "크로커다일레...", change: 1 },
  { name: "리스트", change: -1 },
  { name: "데코", change: 0 },
  { name: "조이너스", change: 0 },
  { name: "닥스레이디스", change: 0 },
  { name: "지고트", change: 0 },
  { name: "시슬리", change: 0 },
  { name: "팬암", change: 0 },
  { name: "아미", change: 0 },
  { name: "나이키", change: 1 }
];

const LOREM_DESC = "이 프리미엄 아이템은 세련된 디자인과 고급 소재를 특징으로 합니다. 일상적인 모습부터 격식 있는 자리까지 모두 어울리며 극강의 편안함과 스타일을 제공합니다.";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    brand: "SJSJ",
    name: "울 블렌드 테일러드 자켓",
    category: "여성의류",
    price: 185000,
    originalPrice: 450000,
    discount: 59,
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aec16adea?auto=format&fit=crop&q=80&w=800",
    description: LOREM_DESC,
    isBest: true
  },
  {
    id: 2,
    brand: "MICHAA",
    name: "클래식 실크 스카프 드레스",
    category: "여성의류",
    price: 298000,
    originalPrice: 890000,
    discount: 66,
    imageUrl: "https://images.unsplash.com/photo-1539008835270-2131976a445f?auto=format&fit=crop&q=80&w=800",
    description: LOREM_DESC,
    isNew: true
  },
  {
    id: 3,
    brand: "HAZZYS",
    name: "피케 코튼 폴로 셔츠",
    category: "남성의류",
    price: 89000,
    originalPrice: 158000,
    discount: 44,
    imageUrl: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=800",
    description: LOREM_DESC,
    isBest: true
  },
  {
    id: 4,
    brand: "DAKS",
    name: "레더 시그니처 토트백",
    category: "슈즈/잡화",
    price: 420000,
    originalPrice: 850000,
    discount: 50,
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800",
    description: LOREM_DESC
  }
];

export const MAIN_BANNERS: Banner[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000",
    title: "SEASON OFF CLEARANCE",
    subtitle: "명품 브랜드 최대 80% 할인",
    color: "#E11D48"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1441984969813-91c7950fe460?auto=format&fit=crop&q=80&w=2000",
    title: "NEW SEASON PREVIEW",
    subtitle: "2024 봄/여름 컬렉션 선공개",
    color: "#0F172A"
  }
];
