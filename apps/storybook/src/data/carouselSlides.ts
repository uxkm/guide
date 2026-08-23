export type CarouselSlideData = {
  id: number;
  overline: string;
  title: string;
  body: string;
  color: 'primary' | 'success' | 'warning' | 'info';
};

export const carouselSlides: CarouselSlideData[] = [
  { id: 1, overline: '이벤트', title: '신규 가입 혜택', body: '첫 주문 20% 할인 쿠폰을 드립니다.', color: 'primary' },
  { id: 2, overline: '혜택', title: '무료 배송', body: '3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다.', color: 'success' },
  { id: 3, overline: '세일', title: '시즌 세일', body: '베스트셀러 상품을 최대 50% 할인합니다.', color: 'warning' },
  { id: 4, overline: 'FEATURED', title: '봄 컬렉션', body: '새로운 계절을 위한 추천 콘텐츠입니다.', color: 'info' },
  { id: 5, overline: 'FEATURED', title: '여름 컬렉션', body: '가볍게 즐기는 여름 추천 콘텐츠입니다.', color: 'primary' },
  { id: 6, overline: 'FEATURED', title: '가을 컬렉션', body: '차분한 분위기의 가을 추천 콘텐츠입니다.', color: 'success' },
  { id: 7, overline: 'FEATURED', title: '겨울 컬렉션', body: '따뜻한 겨울을 위한 추천 콘텐츠입니다.', color: 'warning' },
  { id: 8, overline: 'EDITOR PICK', title: '에디터 추천', body: '지금 주목할 만한 콘텐츠를 소개합니다.', color: 'info' },
  { id: 9, overline: 'POPULAR', title: '인기 콘텐츠', body: '사용자가 많이 찾은 콘텐츠입니다.', color: 'primary' },
  { id: 10, overline: 'NEW', title: '새로운 소식', body: '최근 업데이트된 콘텐츠를 확인하세요.', color: 'success' },
  { id: 11, overline: 'TREND', title: '오늘의 트렌드', body: '오늘 가장 주목받는 콘텐츠입니다.', color: 'warning' },
  { id: 12, overline: 'RECOMMEND', title: '맞춤 추천', body: '취향에 맞는 콘텐츠를 추천합니다.', color: 'info' },
];
