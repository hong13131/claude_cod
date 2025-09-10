'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CitySelector from '@/components/compare/CitySelector';
import { ComparisonSection } from '@/components/compare/ComparisonTable';
import { City } from '@/lib/types';
import { cities } from '@/lib/data';

export default function ComparePage() {
  const [selectedCities, setSelectedCities] = useState<(City | null)[]>([null, null, null]);

  const handleCitySelect = (index: number, city: City) => {
    const newCities = [...selectedCities];
    
    // Check if city is already selected in another slot
    const existingIndex = newCities.findIndex(c => c?.id === city.id);
    if (existingIndex !== -1 && existingIndex !== index) {
      return; // Don't allow duplicate selections
    }
    
    newCities[index] = city;
    setSelectedCities(newCities);
  };

  const handleCityRemove = (index: number) => {
    const newCities = [...selectedCities];
    newCities[index] = null;
    setSelectedCities(newCities);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              📊 도시 비교
            </h1>
            <p className="text-xl opacity-90 max-w-2xl">
              여러 도시를 직접 비교해보세요. 생활비, 인프라, 교통 등 
              다양한 지표를 한눈에 확인할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* City Selection */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">비교할 도시를 선택하세요 (최대 3개)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CitySelector
                selectedCity={selectedCities[0]}
                onCitySelect={(city) => handleCitySelect(0, city)}
                onCityRemove={() => handleCityRemove(0)}
                placeholder="도시 1"
              />
              <CitySelector
                selectedCity={selectedCities[1]}
                onCitySelect={(city) => handleCitySelect(1, city)}
                onCityRemove={() => handleCityRemove(1)}
                placeholder="도시 2"
              />
              <CitySelector
                selectedCity={selectedCities[2]}
                onCitySelect={(city) => handleCitySelect(2, city)}
                onCityRemove={() => handleCityRemove(2)}
                placeholder="도시 3 (선택사항)"
              />
            </div>
          </div>

          {/* Comparison Result */}
          <ComparisonSection cities={selectedCities} />

          {/* Popular Comparisons */}
          <Card>
            <CardHeader>
              <CardTitle>🔥 인기 비교</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { city1: { name: '서울', emoji: '🏙️', id: 'seoul' }, city2: { name: '부산', emoji: '🌊', id: 'busan' } },
                  { city1: { name: '제주', emoji: '🍊', id: 'jeju' }, city2: { name: '춘천', emoji: '🏔️', id: 'chuncheon' } },
                  { city1: { name: '대전', emoji: '🔬', id: 'daejeon' }, city2: { name: '대구', emoji: '🏛️', id: 'daegu' } },
                  { city1: { name: '전주', emoji: '🌺', id: 'jeonju' }, city2: { name: '광주', emoji: '🌸', id: 'gwangju' } }
                ].map((comparison, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      // Auto-select the popular comparison
                      const city1 = cities.find(c => c.id === comparison.city1.id);
                      const city2 = cities.find(c => c.id === comparison.city2.id);
                      if (city1 && city2) {
                        setSelectedCities([city1, city2, null]);
                      }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{comparison.city1.emoji}</span>
                        <span className="font-medium">{comparison.city1.name}</span>
                      </div>
                      <span className="text-gray-400">vs</span>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{comparison.city2.emoji}</span>
                        <span className="font-medium">{comparison.city2.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}