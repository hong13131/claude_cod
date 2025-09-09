import React from 'react';
import { Button } from '@/components/ui/button';
import { budgetFilters, regionFilters, styleFilters } from '@/lib/data';

export default function FilterSection() {
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
                  variant="outline"
                  size="sm"
                  className="border-orange-200 hover:border-orange-400 hover:bg-orange-50 text-gray-700"
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
                  variant="outline"
                  size="sm"
                  className="border-blue-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700"
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
                  variant="outline"
                  size="sm"
                  className="border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-gray-700"
                >
                  {filter.emoji} {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                총 8개 도시
              </span>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                필터 초기화
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                정렬: 인기순
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