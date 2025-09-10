'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import CityCard from '@/components/city/CityCard';
import KoreaMap from '@/components/map/KoreaMap';
import { Button } from '@/components/ui/button';
import { cities, filterCities, sortCities } from '@/lib/data';
import { City } from '@/lib/types';
import { Map, Grid, List, SlidersHorizontal } from 'lucide-react';

export default function ExplorePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [filters, setFilters] = useState({
    budget: [] as string[],
    region: [] as string[],
    style: [] as string[],
  });
  const [sortBy, setSortBy] = useState<'popularity' | 'rating' | 'cost_low' | 'cost_high'>('popularity');

  const filteredCities = filterCities(cities, filters);
  const sortedCities = sortCities(filteredCities, sortBy);

  const handleSortChange = () => {
    const sortOptions: Array<'popularity' | 'rating' | 'cost_low' | 'cost_high'> = 
      ['popularity', 'rating', 'cost_low', 'cost_high'];
    const currentIndex = sortOptions.indexOf(sortBy);
    const nextIndex = (currentIndex + 1) % sortOptions.length;
    setSortBy(sortOptions[nextIndex]);
  };

  const getSortLabel = () => {
    switch (sortBy) {
      case 'popularity': return '정렬: 인기순';
      case 'rating': return '정렬: 평점순';
      case 'cost_low': return '정렬: 저가순';
      case 'cost_high': return '정렬: 고가순';
      default: return '정렬: 인기순';
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🗺️ 도시 탐색
            </h1>
            <p className="text-xl opacity-90 max-w-2xl">
              한국의 모든 노마드 친화적인 도시들을 탐색해보세요. 
              {cities.length}개 도시의 상세한 정보와 실제 노마드들의 후기를 확인할 수 있습니다.
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  총 {sortedCities.length}개 도시
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSortChange}
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  {getSortLabel()}
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">보기:</span>
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'map' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('map')}
                >
                  <Map className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedCities.map((city) => (
                <CityCard key={city.id} city={city} />
              ))}
            </div>
          )}

          {viewMode === 'list' && (
            <div className="space-y-4">
              {sortedCities.map((city) => (
                <div key={city.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-6">
                    <div className="text-4xl">{city.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{city.name}</h3>
                        <div className="flex items-center gap-1 text-amber-500">
                          ⭐ <span className="font-medium">{city.rating.overall}</span>
                          <span className="text-gray-500 text-sm">({city.rating.reviewCount})</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2">{city.nameEn} · {city.region}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>💰 {new Intl.NumberFormat('ko-KR').format(city.cost.monthly)}원</span>
                        <span>🌐 {city.infrastructure.internetSpeed}Mbps</span>
                        <span>☕ {city.infrastructure.cafeCount}개</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm">상세보기</Button>
                      <Button variant="outline" size="sm">❤️</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {viewMode === 'map' && (
            <KoreaMap />
          )}
        </div>
      </div>
    </>
  );
}