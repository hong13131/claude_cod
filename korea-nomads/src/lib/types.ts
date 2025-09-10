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
  description?: string;
  highlights?: string[];
  images?: string[];
  climate?: {
    temperature: string;
    humidity: string;
    season: string;
  };
  livingCost?: {
    accommodation: number;
    food: number;
    transportation: number;
    utilities: number;
  };
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

export interface CityReview {
  id: string;
  cityId: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  pros: string[];
  cons: string[];
  duration: string;
  createdAt: string;
  helpful: number;
  tags: string[];
}

export interface SearchParams {
  query?: string;
  budget?: string[];
  region?: string[];
  style?: string[];
  sort?: 'popularity' | 'rating' | 'cost_low' | 'cost_high';
}