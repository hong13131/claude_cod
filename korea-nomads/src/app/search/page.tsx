'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import CityCard from '@/components/city/CityCard';
import { Button } from '@/components/ui/button';
import { cities, filterCities, sortCities } from '@/lib/data';
import { City } from '@/lib/types';
import { ArrowLeft, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [searchResults, setSearchResults] = useState<City[]>([]);
  const [sortBy, setSortBy] = useState<'popularity' | 'rating' | 'cost_low' | 'cost_high'>('popularity');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      if (query.trim()) {
        const results = filterCities(cities, { query: query.trim() });
        const sortedResults = sortCities(results, sortBy);
        setSearchResults(sortedResults);
      } else {
        setSearchResults([]);
      }
      setIsLoading(false);
    }, 500); // Simulate loading time

    return () => clearTimeout(timer);
  }, [query, sortBy]);

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
        {/* Search Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    홈으로
                  </Button>
                </Link>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {query ? `${query} 검색 결과` : '검색 결과'}
                  </h1>
                  {!isLoading && (
                    <p className="text-gray-600">
                      총 {searchResults.length}개의 도시를 찾았습니다
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSortChange}
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  {getSortLabel()}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600">검색 중...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {searchResults.map((city) => (
                <CityCard key={city.id} city={city} />
              ))}
            </div>
          ) : query ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                &quot;{query}&quot;에 대한 검색 결과가 없습니다
              </h2>
              <p className="text-gray-600 mb-8">
                다른 키워드로 검색하시거나 아래 제안을 확인해보세요
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 max-w-md mx-auto">
                <h3 className="font-semibold text-gray-900 mb-4">검색 팁</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• 도시 이름을 정확히 입력해보세요</li>
                  <li>• 지역명(수도권, 영남권 등)으로 검색해보세요</li>
                  <li>• 특성 키워드(자연형, 도심형 등)로 검색해보세요</li>
                  <li>• 영문명으로도 검색이 가능합니다</li>
                </ul>
                
                <div className="mt-6">
                  <Link href="/">
                    <Button className="w-full">
                      전체 도시 둘러보기
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🇰🇷</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                검색어를 입력해주세요
              </h2>
              <p className="text-gray-600 mb-8">
                원하는 도시나 지역을 검색해보세요
              </p>
              
              <Link href="/">
                <Button>
                  홈으로 돌아가기
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Search Suggestions */}
        {!isLoading && searchResults.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                더 정확한 검색을 원하시나요?
              </h3>
              <p className="text-gray-600 mb-6">
                필터를 사용하여 예산, 지역, 스타일별로 도시를 찾아보세요
              </p>
              <Link href="/">
                <Button variant="outline">
                  필터로 검색하기
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}