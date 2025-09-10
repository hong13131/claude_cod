import { City, TrendingData, PopularReview, CityReview } from './types';

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
  },
  // 경기도 도시들
  {
    id: "suwon",
    name: "수원",
    nameEn: "Suwon",
    region: "수도권",
    emoji: "🏰",
    featured: false,
    rating: {
      overall: 4.1,
      reviewCount: 523
    },
    cost: {
      monthly: 2500000,
      category: "expensive"
    },
    infrastructure: {
      internetSpeed: 700,
      cafeCount: 445,
      coworkingSpaces: 35
    },
    transportation: {
      subwayLines: 1,
      score: 8.2
    },
    tags: ["역사", "교통편리", "문화형"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "seongnam",
    name: "성남",
    nameEn: "Seongnam",
    region: "수도권",
    emoji: "💻",
    featured: false,
    rating: {
      overall: 4.0,
      reviewCount: 398
    },
    cost: {
      monthly: 2700000,
      category: "expensive"
    },
    infrastructure: {
      internetSpeed: 900,
      cafeCount: 567,
      coworkingSpaces: 89
    },
    transportation: {
      subwayLines: 2,
      score: 8.7
    },
    tags: ["IT특화", "도심형", "스타트업"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "goyang",
    name: "고양",
    nameEn: "Goyang",
    region: "수도권",
    emoji: "🌳",
    featured: false,
    rating: {
      overall: 3.9,
      reviewCount: 267
    },
    cost: {
      monthly: 2300000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 600,
      cafeCount: 234,
      coworkingSpaces: 18
    },
    transportation: {
      subwayLines: 1,
      score: 7.8
    },
    tags: ["자연형", "조용한", "주거형"],
    lastUpdated: "2024-12-01"
  },
  // 강원도 도시들
  {
    id: "chuncheon",
    name: "춘천",
    nameEn: "Chuncheon",
    region: "강원권",
    emoji: "🏔️",
    featured: true,
    rating: {
      overall: 4.5,
      reviewCount: 634
    },
    cost: {
      monthly: 1600000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 400,
      cafeCount: 189,
      coworkingSpaces: 8
    },
    transportation: {
      subwayLines: 0,
      score: 6.0
    },
    tags: ["자연형", "휴양", "저렴함"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "gangneung",
    name: "강릉",
    nameEn: "Gangneung",
    region: "강원권",
    emoji: "🏖️",
    featured: false,
    rating: {
      overall: 4.3,
      reviewCount: 456
    },
    cost: {
      monthly: 1800000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 350,
      cafeCount: 145,
      coworkingSpaces: 5
    },
    transportation: {
      subwayLines: 0,
      score: 5.5
    },
    tags: ["자연형", "해변", "휴양"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "wonju",
    name: "원주",
    nameEn: "Wonju",
    region: "강원권",
    emoji: "🏥",
    featured: false,
    rating: {
      overall: 3.8,
      reviewCount: 234
    },
    cost: {
      monthly: 1500000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 300,
      cafeCount: 98,
      coworkingSpaces: 4
    },
    transportation: {
      subwayLines: 0,
      score: 5.8
    },
    tags: ["조용형", "의료특화", "저렴함"],
    lastUpdated: "2024-12-01"
  },
  // 충청도 도시들
  {
    id: "cheonan",
    name: "천안",
    nameEn: "Cheonan",
    region: "충청권",
    emoji: "🚄",
    featured: false,
    rating: {
      overall: 3.9,
      reviewCount: 345
    },
    cost: {
      monthly: 1900000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 500,
      cafeCount: 267,
      coworkingSpaces: 15
    },
    transportation: {
      subwayLines: 1,
      score: 7.0
    },
    tags: ["교통편리", "산업", "중간규모"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "cheongju",
    name: "청주",
    nameEn: "Cheongju",
    region: "충청권",
    emoji: "🌾",
    featured: false,
    rating: {
      overall: 3.7,
      reviewCount: 298
    },
    cost: {
      monthly: 1700000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 400,
      cafeCount: 178,
      coworkingSpaces: 9
    },
    transportation: {
      subwayLines: 0,
      score: 6.2
    },
    tags: ["조용형", "저렴함", "전통"],
    lastUpdated: "2024-12-01"
  },
  // 전라도 도시들
  {
    id: "jeonju",
    name: "전주",
    nameEn: "Jeonju",
    region: "호남권",
    emoji: "🌺",
    featured: true,
    rating: {
      overall: 4.4,
      reviewCount: 567
    },
    cost: {
      monthly: 1600000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 400,
      cafeCount: 234,
      coworkingSpaces: 14
    },
    transportation: {
      subwayLines: 0,
      score: 6.5
    },
    tags: ["문화형", "전통", "한옥마을"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "mokpo",
    name: "목포",
    nameEn: "Mokpo",
    region: "호남권",
    emoji: "⛵",
    featured: false,
    rating: {
      overall: 3.6,
      reviewCount: 189
    },
    cost: {
      monthly: 1400000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 300,
      cafeCount: 89,
      coworkingSpaces: 3
    },
    transportation: {
      subwayLines: 0,
      score: 5.0
    },
    tags: ["자연형", "해변", "조용한"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "yeosu",
    name: "여수",
    nameEn: "Yeosu",
    region: "호남권",
    emoji: "🌅",
    featured: false,
    rating: {
      overall: 4.2,
      reviewCount: 423
    },
    cost: {
      monthly: 1800000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 350,
      cafeCount: 156,
      coworkingSpaces: 6
    },
    transportation: {
      subwayLines: 0,
      score: 5.5
    },
    tags: ["자연형", "관광", "해변"],
    lastUpdated: "2024-12-01"
  },
  // 경상도 추가 도시들
  {
    id: "changwon",
    name: "창원",
    nameEn: "Changwon",
    region: "영남권",
    emoji: "🔧",
    featured: false,
    rating: {
      overall: 3.8,
      reviewCount: 267
    },
    cost: {
      monthly: 1900000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 400,
      cafeCount: 234,
      coworkingSpaces: 18
    },
    transportation: {
      subwayLines: 0,
      score: 6.0
    },
    tags: ["산업", "조용한", "계획도시"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "jinju",
    name: "진주",
    nameEn: "Jinju",
    region: "영남권",
    emoji: "🏮",
    featured: false,
    rating: {
      overall: 3.9,
      reviewCount: 234
    },
    cost: {
      monthly: 1500000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 300,
      cafeCount: 123,
      coworkingSpaces: 5
    },
    transportation: {
      subwayLines: 0,
      score: 5.8
    },
    tags: ["문화형", "전통", "저렴함"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "pohang",
    name: "포항",
    nameEn: "Pohang",
    region: "영남권",
    emoji: "🏭",
    featured: false,
    rating: {
      overall: 3.7,
      reviewCount: 198
    },
    cost: {
      monthly: 1700000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 350,
      cafeCount: 134,
      coworkingSpaces: 7
    },
    transportation: {
      subwayLines: 0,
      score: 5.5
    },
    tags: ["산업", "해변", "저렴함"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "gyeongju",
    name: "경주",
    nameEn: "Gyeongju",
    region: "영남권",
    emoji: "🏛️",
    featured: false,
    rating: {
      overall: 4.1,
      reviewCount: 389
    },
    cost: {
      monthly: 1600000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 300,
      cafeCount: 145,
      coworkingSpaces: 6
    },
    transportation: {
      subwayLines: 0,
      score: 5.2
    },
    tags: ["문화형", "역사", "관광"],
    lastUpdated: "2024-12-01"
  },
  // 제주 지역 세분화
  {
    id: "seogwipo",
    name: "서귀포",
    nameEn: "Seogwipo",
    region: "제주권",
    emoji: "🌺",
    featured: false,
    rating: {
      overall: 4.6,
      reviewCount: 678
    },
    cost: {
      monthly: 2200000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 280,
      cafeCount: 167,
      coworkingSpaces: 8
    },
    transportation: {
      subwayLines: 0,
      score: 4.8
    },
    tags: ["자연형", "휴양", "온화한기후"],
    lastUpdated: "2024-12-01"
  },
  // 기타 수도권 도시들
  {
    id: "anyang",
    name: "안양",
    nameEn: "Anyang",
    region: "수도권",
    emoji: "🌆",
    featured: false,
    rating: {
      overall: 3.8,
      reviewCount: 345
    },
    cost: {
      monthly: 2600000,
      category: "expensive"
    },
    infrastructure: {
      internetSpeed: 750,
      cafeCount: 378,
      coworkingSpaces: 45
    },
    transportation: {
      subwayLines: 2,
      score: 8.5
    },
    tags: ["도심형", "교통편리", "주거형"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "bucheon",
    name: "부천",
    nameEn: "Bucheon",
    region: "수도권",
    emoji: "🎭",
    featured: false,
    rating: {
      overall: 3.7,
      reviewCount: 289
    },
    cost: {
      monthly: 2400000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 650,
      cafeCount: 298,
      coworkingSpaces: 28
    },
    transportation: {
      subwayLines: 1,
      score: 8.0
    },
    tags: ["문화형", "영화", "예술"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "yongin",
    name: "용인",
    nameEn: "Yongin",
    region: "수도권",
    emoji: "🎢",
    featured: false,
    rating: {
      overall: 3.9,
      reviewCount: 234
    },
    cost: {
      monthly: 2500000,
      category: "expensive"
    },
    infrastructure: {
      internetSpeed: 600,
      cafeCount: 267,
      coworkingSpaces: 23
    },
    transportation: {
      subwayLines: 1,
      score: 7.2
    },
    tags: ["주거형", "자연형", "가족형"],
    lastUpdated: "2024-12-01"
  },
  // 지방 중소도시들
  {
    id: "andong",
    name: "안동",
    nameEn: "Andong",
    region: "영남권",
    emoji: "🏘️",
    featured: false,
    rating: {
      overall: 3.8,
      reviewCount: 167
    },
    cost: {
      monthly: 1300000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 250,
      cafeCount: 78,
      coworkingSpaces: 3
    },
    transportation: {
      subwayLines: 0,
      score: 4.5
    },
    tags: ["전통", "조용한", "저렴함"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "sokcho",
    name: "속초",
    nameEn: "Sokcho",
    region: "강원권",
    emoji: "🦀",
    featured: false,
    rating: {
      overall: 4.0,
      reviewCount: 298
    },
    cost: {
      monthly: 1700000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 280,
      cafeCount: 89,
      coworkingSpaces: 4
    },
    transportation: {
      subwayLines: 0,
      score: 4.0
    },
    tags: ["자연형", "해변", "관광"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "asan",
    name: "아산",
    nameEn: "Asan",
    region: "충청권",
    emoji: "♨️",
    featured: false,
    rating: {
      overall: 3.6,
      reviewCount: 189
    },
    cost: {
      monthly: 1800000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 400,
      cafeCount: 123,
      coworkingSpaces: 8
    },
    transportation: {
      subwayLines: 1,
      score: 6.5
    },
    tags: ["온천", "산업", "조용한"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "iksan",
    name: "익산",
    nameEn: "Iksan",
    region: "호남권",
    emoji: "🚄",
    featured: false,
    rating: {
      overall: 3.5,
      reviewCount: 145
    },
    cost: {
      monthly: 1400000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 300,
      cafeCount: 67,
      coworkingSpaces: 3
    },
    transportation: {
      subwayLines: 0,
      score: 6.0
    },
    tags: ["교통편리", "저렴함", "조용한"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "namwon",
    name: "남원",
    nameEn: "Namwon",
    region: "호남권",
    emoji: "🏔️",
    featured: false,
    rating: {
      overall: 3.7,
      reviewCount: 123
    },
    cost: {
      monthly: 1200000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 250,
      cafeCount: 45,
      coworkingSpaces: 2
    },
    transportation: {
      subwayLines: 0,
      score: 4.0
    },
    tags: ["자연형", "전통", "저렴함"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "gumi",
    name: "구미",
    nameEn: "Gumi",
    region: "영남권",
    emoji: "💻",
    featured: false,
    rating: {
      overall: 3.8,
      reviewCount: 234
    },
    cost: {
      monthly: 1600000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 450,
      cafeCount: 156,
      coworkingSpaces: 12
    },
    transportation: {
      subwayLines: 0,
      score: 5.5
    },
    tags: ["IT특화", "산업", "저렴함"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "gunsan",
    name: "군산",
    nameEn: "Gunsan",
    region: "호남권",
    emoji: "🏛️",
    featured: false,
    rating: {
      overall: 3.6,
      reviewCount: 167
    },
    cost: {
      monthly: 1350000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 280,
      cafeCount: 78,
      coworkingSpaces: 4
    },
    transportation: {
      subwayLines: 0,
      score: 4.5
    },
    tags: ["역사", "해변", "저렴함"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "tongyeong",
    name: "통영",
    nameEn: "Tongyeong",
    region: "영남권",
    emoji: "🐟",
    featured: false,
    rating: {
      overall: 4.1,
      reviewCount: 289
    },
    cost: {
      monthly: 1500000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 250,
      cafeCount: 89,
      coworkingSpaces: 3
    },
    transportation: {
      subwayLines: 0,
      score: 4.2
    },
    tags: ["자연형", "해변", "관광"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "jecheon",
    name: "제천",
    nameEn: "Jecheon",
    region: "충청권",
    emoji: "🏞️",
    featured: false,
    rating: {
      overall: 3.7,
      reviewCount: 156
    },
    cost: {
      monthly: 1300000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 300,
      cafeCount: 67,
      coworkingSpaces: 3
    },
    transportation: {
      subwayLines: 0,
      score: 5.0
    },
    tags: ["자연형", "조용한", "저렴함"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "chungju",
    name: "충주",
    nameEn: "Chungju",
    region: "충청권",
    emoji: "🚣",
    featured: false,
    rating: {
      overall: 3.5,
      reviewCount: 134
    },
    cost: {
      monthly: 1250000,
      category: "cheap"
    },
    infrastructure: {
      internetSpeed: 280,
      cafeCount: 56,
      coworkingSpaces: 2
    },
    transportation: {
      subwayLines: 0,
      score: 4.8
    },
    tags: ["자연형", "호수", "저렴함"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "dongducheon",
    name: "동두천",
    nameEn: "Dongducheon",
    region: "수도권",
    emoji: "🏔️",
    featured: false,
    rating: {
      overall: 3.4,
      reviewCount: 89
    },
    cost: {
      monthly: 1800000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 400,
      cafeCount: 78,
      coworkingSpaces: 5
    },
    transportation: {
      subwayLines: 1,
      score: 6.0
    },
    tags: ["자연형", "조용한", "산악"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "paju",
    name: "파주",
    nameEn: "Paju",
    region: "수도권",
    emoji: "📚",
    featured: false,
    rating: {
      overall: 3.8,
      reviewCount: 234
    },
    cost: {
      monthly: 2000000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 500,
      cafeCount: 156,
      coworkingSpaces: 12
    },
    transportation: {
      subwayLines: 1,
      score: 6.5
    },
    tags: ["문화형", "출판", "조용한"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "gimpo",
    name: "김포",
    nameEn: "Gimpo",
    region: "수도권",
    emoji: "✈️",
    featured: false,
    rating: {
      overall: 3.9,
      reviewCount: 298
    },
    cost: {
      monthly: 2300000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 600,
      cafeCount: 189,
      coworkingSpaces: 18
    },
    transportation: {
      subwayLines: 1,
      score: 7.5
    },
    tags: ["공항접근", "신도시", "편리함"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "hwaseong",
    name: "화성",
    nameEn: "Hwaseong",
    region: "수도권",
    emoji: "🏭",
    featured: false,
    rating: {
      overall: 3.7,
      reviewCount: 267
    },
    cost: {
      monthly: 2400000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 550,
      cafeCount: 234,
      coworkingSpaces: 25
    },
    transportation: {
      subwayLines: 1,
      score: 7.0
    },
    tags: ["산업", "신도시", "IT특화"],
    lastUpdated: "2024-12-01"
  },
  {
    id: "siheung",
    name: "시흥",
    nameEn: "Siheung",
    region: "수도권",
    emoji: "🏗️",
    featured: false,
    rating: {
      overall: 3.6,
      reviewCount: 178
    },
    cost: {
      monthly: 2200000,
      category: "moderate"
    },
    infrastructure: {
      internetSpeed: 500,
      cafeCount: 145,
      coworkingSpaces: 15
    },
    transportation: {
      subwayLines: 1,
      score: 7.2
    },
    tags: ["신도시", "개발", "주거형"],
    lastUpdated: "2024-12-01"
  }
];

export const featuredCities = cities.filter(city => city.featured);

export const trendingData: TrendingData[] = [
  { city: "제주도", change: "+15%", emoji: "🍊" },
  { city: "서울강남", change: "+8%", emoji: "🏙️" },
  { city: "춘천", change: "+34%", emoji: "🏔️" },
  { city: "전주", change: "+28%", emoji: "🌺" },
  { city: "속초", change: "+22%", emoji: "🦀" },
  { city: "부산", change: "+12%", emoji: "🌊" },
  { city: "강릉", change: "+18%", emoji: "🏖️" },
  { city: "여수", change: "+25%", emoji: "🌅" }
];

export const popularReviews: PopularReview[] = [
  { title: "제주도 한 달 후기", rating: 4.9 },
  { title: "부산 원격근무 꿀팁", rating: 4.8 },
  { title: "춘천 디지털노마드 경험담", rating: 4.7 },
  { title: "전주 한옥마을 워케이션", rating: 4.6 },
  { title: "서울 코워킹스페이스 비교", rating: 4.5 },
  { title: "강릉 해변 근무 3개월 후기", rating: 4.8 },
  { title: "대전 과학도시 IT 생활", rating: 4.4 },
  { title: "속초 관광+일 병행 팁", rating: 4.6 },
  { title: "성남 판교 스타트업 환경", rating: 4.5 },
  { title: "인천공항 근처 생활 가이드", rating: 4.3 }
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

// Sample city reviews
export const cityReviews: CityReview[] = [
  {
    id: "review-1",
    cityId: "seoul",
    author: "김디지털",
    rating: 4.5,
    title: "서울 강남에서 3개월 원격근무 후기",
    content: "강남 코워킹스페이스들의 인프라가 정말 좋았습니다. 특히 인터넷 속도와 회의실 시설이 훌륭했어요. 다만 생활비가 많이 들어가는 점은 아쉬웠습니다.",
    pros: ["빠른 인터넷", "우수한 코워킹스페이스", "편리한 교통", "다양한 문화생활"],
    cons: ["높은 생활비", "복잡한 교통", "소음"],
    duration: "3개월",
    createdAt: "2024-11-15",
    helpful: 24,
    tags: ["코워킹", "교통", "문화생활"]
  },
  {
    id: "review-2",
    cityId: "busan",
    author: "바다러버",
    rating: 4.8,
    title: "부산 해운대 디지털노마드 라이프",
    content: "해변이 보이는 카페에서 일하는 것이 정말 힐링이었습니다. 서울보다 생활비도 저렴하고 사람들도 친절해요.",
    pros: ["아름다운 해변", "저렴한 생활비", "맛있는 음식", "따뜻한 기후"],
    cons: ["제한된 코워킹스페이스", "서울 대비 네트워킹 기회 부족"],
    duration: "2개월",
    createdAt: "2024-11-20",
    helpful: 18,
    tags: ["해변", "힐링", "음식"]
  },
  {
    id: "review-3",
    cityId: "jeju",
    author: "제주살이",
    rating: 4.9,
    title: "제주도에서의 완벽한 워케이션",
    content: "자연 속에서 일할 수 있어서 너무 좋았습니다. 스트레스가 확실히 줄어들고 창의성도 높아진 것 같아요.",
    pros: ["아름다운 자연", "깨끗한 공기", "힐링", "독특한 문화"],
    cons: ["느린 인터넷", "교통 불편", "겨울 날씨"],
    duration: "4개월",
    createdAt: "2024-10-30",
    helpful: 32,
    tags: ["자연", "힐링", "워케이션"]
  },
  {
    id: "review-4",
    cityId: "chuncheon",
    author: "산촌라이프",
    rating: 4.6,
    title: "춘천에서의 여유로운 리모트워크",
    content: "조용하고 자연이 아름다운 춘천에서 집중도 높은 작업을 할 수 있었습니다. 생활비도 저렴해서 만족스러웠어요.",
    pros: ["조용한 환경", "저렴한 생활비", "자연 접근성", "맛있는 닭갈비"],
    cons: ["제한된 문화생활", "교통 불편", "겨울 추위"],
    duration: "6개월",
    createdAt: "2024-11-05",
    helpful: 15,
    tags: ["조용함", "자연", "집중"]
  },
  {
    id: "review-5",
    cityId: "jeonju",
    author: "전통매니아",
    rating: 4.4,
    title: "전주 한옥마을 근처에서의 특별한 경험",
    content: "전통과 현대가 조화된 분위기에서 일할 수 있어서 영감을 많이 받았습니다. 한옥 카페들이 특히 인상적이었어요.",
    pros: ["독특한 문화 경험", "맛있는 음식", "저렴한 생활비", "친절한 사람들"],
    cons: ["제한된 코워킹 시설", "교통 불편", "밤 문화 부족"],
    duration: "2개월",
    createdAt: "2024-12-01",
    helpful: 12,
    tags: ["전통", "문화", "한옥"]
  }
];

// Utility functions for data filtering and searching
export const filterCities = (cities: City[], filters: {
  budget?: string[];
  region?: string[];
  style?: string[];
  query?: string;
}) => {
  let filteredCities = [...cities];

  // Budget filter
  if (filters.budget && filters.budget.length > 0) {
    filteredCities = filteredCities.filter(city => {
      return filters.budget!.some(budget => {
        switch (budget) {
          case 'budget-1': return city.cost.monthly <= 1500000;
          case 'budget-2': return city.cost.monthly > 1500000 && city.cost.monthly <= 2500000;
          case 'budget-3': return city.cost.monthly > 2500000 && city.cost.monthly <= 3500000;
          case 'budget-4': return city.cost.monthly > 3500000;
          default: return true;
        }
      });
    });
  }

  // Region filter
  if (filters.region && filters.region.length > 0) {
    filteredCities = filteredCities.filter(city => {
      return filters.region!.some(region => {
        switch (region) {
          case 'region-1': return city.region === '수도권';
          case 'region-2': return city.region === '영남권';
          case 'region-3': return city.region === '호남권';
          case 'region-4': return city.region === '충청권';
          case 'region-5': return city.region === '강원권';
          case 'region-6': return city.region === '제주권';
          default: return true;
        }
      });
    });
  }

  // Style filter
  if (filters.style && filters.style.length > 0) {
    filteredCities = filteredCities.filter(city => {
      return filters.style!.some(style => {
        switch (style) {
          case 'style-1': return city.tags.includes('도심형');
          case 'style-2': return city.tags.includes('자연형');
          case 'style-3': return city.tags.includes('문화형');
          case 'style-4': return city.tags.includes('조용형') || city.tags.includes('조용한');
          case 'style-5': return city.tags.includes('활기형') || city.tags.includes('활기찬');
          default: return true;
        }
      });
    });
  }

  // Search query filter
  if (filters.query) {
    const query = filters.query.toLowerCase();
    filteredCities = filteredCities.filter(city => 
      city.name.toLowerCase().includes(query) ||
      city.nameEn.toLowerCase().includes(query) ||
      city.region.toLowerCase().includes(query) ||
      city.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  return filteredCities;
};

export const sortCities = (cities: City[], sortBy: 'popularity' | 'rating' | 'cost_low' | 'cost_high') => {
  const sortedCities = [...cities];
  
  switch (sortBy) {
    case 'popularity':
      return sortedCities.sort((a, b) => b.rating.reviewCount - a.rating.reviewCount);
    case 'rating':
      return sortedCities.sort((a, b) => b.rating.overall - a.rating.overall);
    case 'cost_low':
      return sortedCities.sort((a, b) => a.cost.monthly - b.cost.monthly);
    case 'cost_high':
      return sortedCities.sort((a, b) => b.cost.monthly - a.cost.monthly);
    default:
      return sortedCities;
  }
};

export const getCityById = (id: string): City | undefined => {
  return cities.find(city => city.id === id);
};

export const getReviewsByCityId = (cityId: string): CityReview[] => {
  return cityReviews.filter(review => review.cityId === cityId);
};