'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { budgetFilters, regionFilters, styleFilters, cities, filterCities } from '@/lib/data';

interface FilterSectionProps {
  onFilterChange?: (filters: {
    budget: string[];
    region: string[];
    style: string[];
  }) => void;
}

export default function FilterSection({ onFilterChange }: FilterSectionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Initialize filters from URL params
  const [selectedFilters, setSelectedFilters] = useState({
    budget: searchParams.getAll('budget') || [],
    region: searchParams.getAll('region') || [],
    style: searchParams.getAll('style') || [],
  });

  const [sortBy, setSortBy] = useState<'popularity' | 'rating' | 'cost_low' | 'cost_high'>('popularity');

  // Calculate filtered city count
  const filteredCities = filterCities(cities, selectedFilters);
  const cityCount = filteredCities.length;

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    selectedFilters.budget.forEach(budget => params.append('budget', budget));
    selectedFilters.region.forEach(region => params.append('region', region));
    selectedFilters.style.forEach(style => params.append('style', style));
    
    if (params.toString()) {
      router.push(`/?${params.toString()}`, { scroll: false });
    } else {
      router.push('/', { scroll: false });
    }
    
    // Notify parent component of filter changes
    if (onFilterChange) {
      onFilterChange(selectedFilters);
    }
  }, [selectedFilters, router, onFilterChange]);

  const toggleFilter = (filterType: 'budget' | 'region' | 'style', filterId: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(filterId)
        ? prev[filterType].filter(id => id !== filterId)
        : [...prev[filterType], filterId]
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      budget: [],
      region: [],
      style: [],
    });
  };

  const hasActiveFilters = selectedFilters.budget.length > 0 || 
                          selectedFilters.region.length > 0 || 
                          selectedFilters.style.length > 0;

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
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
            🔍 빠른 필터
          </h2>
          <p className="text-gray-600">원하는 조건으로 도시를 필터링해보세요</p>
        </div>

        <div className="space-y-6">
          
          {/* Budget Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              💰 예산별
            </h3>
            <div className="flex flex-wrap gap-2">
              {budgetFilters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilters.budget.includes(filter.id) ? "default" : "outline"}
                  size="sm"
                  className={selectedFilters.budget.includes(filter.id) 
                    ? "bg-orange-500 text-white border-orange-500 hover:bg-orange-600" 
                    : "border-orange-200 hover:border-orange-400 hover:bg-orange-50 text-gray-700"
                  }
                  onClick={() => toggleFilter('budget', filter.id)}
                >
                  {filter.emoji} {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Region Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              📍 지역별
            </h3>
            <div className="flex flex-wrap gap-2">
              {regionFilters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilters.region.includes(filter.id) ? "default" : "outline"}
                  size="sm"
                  className={selectedFilters.region.includes(filter.id) 
                    ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600" 
                    : "border-blue-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700"
                  }
                  onClick={() => toggleFilter('region', filter.id)}
                >
                  {filter.emoji} {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Style Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              🎯 스타일별
            </h3>
            <div className="flex flex-wrap gap-2">
              {styleFilters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilters.style.includes(filter.id) ? "default" : "outline"}
                  size="sm"
                  className={selectedFilters.style.includes(filter.id) 
                    ? "bg-purple-500 text-white border-purple-500 hover:bg-purple-600" 
                    : "border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-gray-700"
                  }
                  onClick={() => toggleFilter('style', filter.id)}
                >
                  {filter.emoji} {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-100 gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                총 {cityCount}개 도시
              </span>
              {hasActiveFilters && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={clearFilters}
                >
                  필터 초기화
                </Button>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleSortChange}
              >
                {getSortLabel()}
              </Button>
              <Button variant="outline" size="sm">
                보기: 카드형
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}