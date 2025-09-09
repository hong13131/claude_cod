import { City, TrendingData, PopularReview } from './types';

export const cities: City[] = [
  {
    id: "seoul",
    name: "서울",
    nameEn: "Seoul",
    region: "수도권",
    emoji: "🏙️",
    featured: true,
    rating: {
      overall: 4.6,
      reviewCount: 1247
    },
    cost: {
      monthly: 3200000,
      category: "expensive"
    },
    infrastructure: {
      internetSpeed: 1000,
      cafeCount: 1247,
      coworkingSpaces: 127
    },
    transportation: {
      subwayLines: 9,
      score: 9.8
    },
    tags: ["도심형", "문화생활", "교통편리"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "busan",
    name: "부산",
    nameEn: "Busan",
    region: "영남권",
    emoji: "🌊",
    featured: true,
    rating: {
      overall: 4.3,
      reviewCount: 892
    },
    cost: {
      monthly: 2100000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 500,
      cafeCount: 654,
      coworkingSpaces: 45
    },
    transportation: {
      subwayLines: 4,
      score: 7.5
    },
    tags: ["자연형", "해변", "온화한기후"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "jeju",
    name: "제주",
    nameEn: "Jeju",
    region: "제주권",
    emoji: "🍊",
    featured: true,
    rating: {
      overall: 4.8,
      reviewCount: 1156
    },
    cost: {
      monthly: 2400000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 300,
      cafeCount: 234,
      coworkingSpaces: 15
    },
    transportation: {
      subwayLines: 0,
      score: 5.2
    },
    tags: ["자연형", "휴양", "조용한"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "daejeon",
    name: "대전",
    nameEn: "Daejeon",
    region: "충청권",
    emoji: "🔬",
    featured: true,
    rating: {
      overall: 4.2,
      reviewCount: 687
    },
    cost: {
      monthly: 1900000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 600,
      cafeCount: 456,
      coworkingSpaces: 32
    },
    transportation: {
      subwayLines: 1,
      score: 6.8
    },
    tags: ["조용형", "학술", "저렴함"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "daegu",
    name: "대구",
    nameEn: "Daegu",
    region: "영남권",
    emoji: "🏛️",
    featured: false,
    rating: {
      overall: 4.1,
      reviewCount: 543
    },
    cost: {
      monthly: 1800000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 450,
      cafeCount: 389,
      coworkingSpaces: 28
    },
    transportation: {
      subwayLines: 3,
      score: 7.2
    },
    tags: ["전통", "문화", "저렴함"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "gwangju",
    name: "광주",
    nameEn: "Gwangju",
    region: "호남권",
    emoji: "🌸",
    featured: false,
    rating: {
      overall: 4.0,
      reviewCount: 432
    },
    cost: {
      monthly: 1700000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 400,
      cafeCount: 298,
      coworkingSpaces: 22
    },
    transportation: {
      subwayLines: 1,
      score: 6.5
    },
    tags: ["문화형", "예술", "저렴함"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "ulsan",
    name: "울산",
    nameEn: "Ulsan",
    region: "영남권",
    emoji: "🏭",
    featured: false,
    rating: {
      overall: 3.9,
      reviewCount: 234
    },
    cost: {
      monthly: 2000000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 350,
      cafeCount: 187,
      coworkingSpaces: 12
    },
    transportation: {
      subwayLines: 0,
      score: 5.8
    },
    tags: ["산업", "조용한", "자연접근"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "incheon",
    name: "인천",
    nameEn: "Incheon",
    region: "수도권",
    emoji: "✈️",
    featured: false,
    rating: {
      overall: 4.4,
      reviewCount: 765
    },
    cost: {
      monthly: 2800000,
      category: "expensive"
    },
    infrastructure: {
      internetSpeed: 800,
      cafeCount: 567,
      coworkingSpaces: 78
    },
    transportation: {
      subwayLines: 2,
      score: 8.5
    },
    tags: ["공항접근", "국제적", "편리함"],
    lastUpdated: "2024-12-01"
  }
];

export const featuredCities = cities.filter(city => city.featured);

export const trendingData: TrendingData[] = [
  { city: "제주도", change: "+15%", emoji: "🍊" },
  { city: "서울강남", change: "+8%", emoji: "🏙️" },
  { city: "춘천", change: "+34%", emoji: "🏔️" },
  { city: "전주", change: "+28%", emoji: "🌺" }
];

export const popularReviews: PopularReview[] = [
  { title: "제주도 한 달 후기", rating: 4.9 },
  { title: "부산 원격근무 꿀팁", rating: 4.8 }
];

export const budgetFilters = [
  { id: "budget-1", label: "~150만원", emoji: "💸" },
  { id: "budget-2", label: "150-250만원", emoji: "💳" },
  { id: "budget-3", label: "250-350만원", emoji: "💎" },
  { id: "budget-4", label: "350만원+", emoji: "👑" }
];

export const regionFilters = [
  { id: "region-1", label: "수도권", emoji: "🏙️" },
  { id: "region-2", label: "영남권", emoji: "🌊" },
  { id: "region-3", label: "호남권", emoji: "🌸" },
  { id: "region-4", label: "충청권", emoji: "🔬" },
  { id: "region-5", label: "강원권", emoji: "🏔️" },
  { id: "region-6", label: "제주권", emoji: "🍊" }
];

export const styleFilters = [
  { id: "style-1", label: "도심형", emoji: "🏙️" },
  { id: "style-2", label: "자연형", emoji: "🌿" },
  { id: "style-3", label: "문화형", emoji: "🎭" },
  { id: "style-4", label: "조용형", emoji: "🤫" },
  { id: "style-5", label: "활기형", emoji: "🎉" }
];