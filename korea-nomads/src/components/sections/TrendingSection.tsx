import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { trendingData, popularReviews } from '@/lib/data';
import { TrendingUp, MessageSquare, Star } from 'lucide-react';

export default function TrendingSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            📈 실시간 트렌드
          </h2>
          <p className="text-lg text-gray-600">
            지금 가장 주목받고 있는 도시와 인기 콘텐츠를 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Real-time Trends */}
          <Card className="border-orange-200 bg-orange-50/30">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-700">
                🔥 실시간 트렌드
                <TrendingUp className="w-5 h-5 ml-2" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trendingData.slice(0, 2).map((trend, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-orange-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-orange-600">
                        {index + 1}.
                      </span>
                      <span className="text-xl">{trend.emoji}</span>
                      <span className="font-medium text-gray-900">
                        {trend.city}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {trend.change}
                    </span>
                  </div>
                ))}
                
                <button className="w-full text-center text-orange-600 hover:text-orange-700 text-sm font-medium py-2 hover:bg-orange-50 rounded-lg transition-colors">
                  전체 순위 보기 →
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Migration Trends */}
          <Card className="border-blue-200 bg-blue-50/30">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                📈 이주 트렌드
                <TrendingUp className="w-5 h-5 ml-2" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trendingData.slice(2, 4).map((trend, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-blue-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-blue-600">
                        {index + 1}.
                      </span>
                      <span className="text-xl">{trend.emoji}</span>
                      <span className="font-medium text-gray-900">
                        {trend.city}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {trend.change}
                    </span>
                  </div>
                ))}
                
                <button className="w-full text-center text-blue-600 hover:text-blue-700 text-sm font-medium py-2 hover:bg-blue-50 rounded-lg transition-colors">
                  이주 통계 보기 →
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Popular Reviews */}
          <Card className="border-purple-200 bg-purple-50/30">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-700">
                💬 인기 리뷰
                <MessageSquare className="w-5 h-5 ml-2" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularReviews.map((review, index) => (
                  <div key={index} className="p-3 bg-white rounded-lg shadow-sm border border-purple-100 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-semibold text-gray-900">
                          {review.rating}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {index === 0 ? '2시간 전' : '4시간 전'}
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm leading-relaxed">
                      {review.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {index === 0 ? '노마드 생활 3개월 후기와 실용적인 팁들을 공유합니다...' : '원격근무하기 좋은 카페와 코워킹 스페이스 추천...'}
                    </p>
                  </div>
                ))}
                
                <button className="w-full text-center text-purple-600 hover:text-purple-700 text-sm font-medium py-2 hover:bg-purple-50 rounded-lg transition-colors">
                  모든 리뷰 보기 →
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats Row */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">
            📊 이번 주 하이라이트
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">+15%</div>
              <div className="text-sm text-gray-600">검색량 증가</div>
              <div className="text-xs text-gray-500 mt-1">제주도</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">127</div>
              <div className="text-sm text-gray-600">신규 리뷰</div>
              <div className="text-xs text-gray-500 mt-1">이번 주</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">4.8★</div>
              <div className="text-sm text-gray-600">평균 만족도</div>
              <div className="text-xs text-gray-500 mt-1">신규 리뷰</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-1">+234</div>
              <div className="text-sm text-gray-600">새 멤버</div>
              <div className="text-xs text-gray-500 mt-1">이번 주</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}