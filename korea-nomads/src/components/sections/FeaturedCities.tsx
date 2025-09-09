import React from 'react';
import CityCard from '@/components/city/CityCard';
import { featuredCities } from '@/lib/data';

export default function FeaturedCities() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🌟 이달의 추천 도시 🌟
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            디지털 노마드들에게 가장 인기 있는 한국의 도시들을 만나보세요
          </p>
        </div>

        {/* Cities Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>

        {/* More Cities Section */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              더 많은 도시를 둘러보세요
            </h3>
            <p className="text-gray-600 mb-6">
              한국 전역의 40+ 도시 정보와 실제 노마드들의 생생한 후기를 확인해보세요
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                전체 도시 보기
              </button>
              
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
                내 조건으로 필터링
              </button>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">4.6★</div>
              <div className="text-sm opacity-90">평균 만족도</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold mb-2">2.3M</div>
              <div className="text-sm opacity-90">평균 생활비</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold mb-2">600</div>
              <div className="text-sm opacity-90">평균 인터넷 속도</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold mb-2">1,000+</div>
              <div className="text-sm opacity-90">실제 리뷰</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}