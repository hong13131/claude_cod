export interface City {
  id: string;
  name: string;
  nameEn: string;
  region: string;
  emoji: string;
  featured: boolean;
  rating: {
    overall: number;
    reviewCount: number;
  };
  cost: {
    monthly: number;
    category: "cheap" | "moderate" | "expensive" | "luxury";
  };
  infrastructure: {
    internetSpeed: number;
    cafeCount: number;
    coworkingSpaces: number;
  };
  transportation: {
    subwayLines: number;
    score: number;
  };
  tags: string[];
  lastUpdated: string;
}

export interface FilterState {
  budget: string[];
  region: string[];
  style: string[];
}

export interface TrendingData {
  city: string;
  change: string;
  emoji: string;
}

export interface PopularReview {
  title: string;
  rating: number;
}