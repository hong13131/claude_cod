import React from 'react';
import { Button } from '@/components/ui/button';
import { featuredCities } from '@/lib/data';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🌟 당신에게 완벽한 한국 도시를 찾아보세요 🌟
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            디지털 노마드를 위한 데이터 기반 도시 추천 플랫폼
          </p>
          
          {/* Featured Cities Quick View */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4">
              {featuredCities.map((city) => (
                <div key={city.id} className="flex flex-col items-center">
                  <div className="text-3xl md:text-4xl mb-2 hover:scale-110 transition-transform cursor-pointer">
                    {city.emoji}
                  </div>
                  <div className="text-sm font-medium text-gray-700">{city.name}</div>
                  <div className="flex items-center text-xs text-amber-600">
                    ⭐ {city.rating.overall}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              🎯 나에게 맞는 도시 찾기
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-blue-200 hover:border-blue-400 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">
                📊 도시 비교
              </Button>
              
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-purple-200 hover:border-purple-400 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">
                👥 커뮤니티
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm border border-white/20">
            <div className="text-2xl font-bold text-blue-600">8+</div>
            <div className="text-sm text-gray-600">주요 도시</div>
          </div>
          
          <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm border border-white/20">
            <div className="text-2xl font-bold text-purple-600">1000+</div>
            <div className="text-sm text-gray-600">실제 리뷰</div>
          </div>
          
          <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm border border-white/20">
            <div className="text-2xl font-bold text-green-600">실시간</div>
            <div className="text-sm text-gray-600">데이터 업데이트</div>
          </div>
          
          <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm border border-white/20">
            <div className="text-2xl font-bold text-orange-600">AI</div>
            <div className="text-sm text-gray-600">맞춤 추천</div>
          </div>
        </div>
      </div>
    </section>
  );
}