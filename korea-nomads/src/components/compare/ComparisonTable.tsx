'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeftRight, Wifi, Coffee, Users, Train, Star } from 'lucide-react';
import { City } from '@/lib/types';
import ComparisonCharts from './ComparisonCharts';

interface ComparisonTableProps {
  cities: (City | null)[];
}

export default function ComparisonTable({ cities }: ComparisonTableProps) {
  const validCities = cities.filter((city): city is City => city !== null);
  
  if (validCities.length === 0) {
    return (
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5" />
            비교 결과
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              도시를 선택하면 비교 결과가 여기에 표시됩니다
            </h3>
            <p className="text-gray-600">
              생활비, 인프라, 교통, 날씨 등 다양한 지표를 시각적으로 비교할 수 있습니다.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const formatCurrency = (amount: number) => {
    return (amount / 10000).toFixed(0) + '만원';
  };

  const getCostColor = (category: string) => {
    switch (category) {
      case 'cheap': return 'bg-green-100 text-green-800';
      case 'moderate': return 'bg-blue-100 text-blue-800';
      case 'expensive': return 'bg-orange-100 text-orange-800';
      case 'luxury': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-blue-600';
    if (score >= 4) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowLeftRight className="w-5 h-5" />
          비교 결과 ({validCities.length}개 도시)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">항목</th>
                {validCities.map((city) => (
                  <th key={city.id} className="text-center py-3 px-4 font-semibold min-w-[200px]">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl">{city.emoji}</span>
                      <span>{city.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {city.region}
                      </Badge>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* 전체 평점 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="py-4 px-4 font-medium flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  전체 평점
                </td>
                {validCities.map((city) => (
                  <td key={city.id} className="text-center py-4 px-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-lg font-bold text-yellow-600">
                        ⭐ {city.rating.overall}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({city.rating.reviewCount}개 리뷰)
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* 월 생활비 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="py-4 px-4 font-medium">💰 월 생활비</td>
                {validCities.map((city) => (
                  <td key={city.id} className="text-center py-4 px-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-lg font-bold">
                        {formatCurrency(city.cost.monthly)}
                      </span>
                      <Badge className={getCostColor(city.cost.category)}>
                        {city.cost.category === 'cheap' && '저렴'}
                        {city.cost.category === 'moderate' && '보통'}
                        {city.cost.category === 'expensive' && '비쌈'}
                        {city.cost.category === 'luxury' && '고급'}
                      </Badge>
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* 인터넷 속도 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="py-4 px-4 font-medium flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-blue-500" />
                  인터넷 속도
                </td>
                {validCities.map((city) => (
                  <td key={city.id} className="text-center py-4 px-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-lg font-bold">
                        {city.infrastructure.internetSpeed}Mbps
                      </span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${Math.min((city.infrastructure.internetSpeed / 1000) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* 카페 수 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="py-4 px-4 font-medium flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-amber-600" />
                  카페 수
                </td>
                {validCities.map((city) => (
                  <td key={city.id} className="text-center py-4 px-4">
                    <span className="text-lg font-bold">
                      {city.infrastructure.cafeCount}개
                    </span>
                  </td>
                ))}
              </tr>
              
              {/* 코워킹 스페이스 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="py-4 px-4 font-medium flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-500" />
                  코워킹 스페이스
                </td>
                {validCities.map((city) => (
                  <td key={city.id} className="text-center py-4 px-4">
                    <span className="text-lg font-bold">
                      {city.infrastructure.coworkingSpaces}개
                    </span>
                  </td>
                ))}
              </tr>
              
              {/* 교통 점수 */}
              <tr className="border-b hover:bg-gray-50">
                <td className="py-4 px-4 font-medium flex items-center gap-2">
                  <Train className="w-4 h-4 text-green-500" />
                  교통 점수
                </td>
                {validCities.map((city) => (
                  <td key={city.id} className="text-center py-4 px-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className={`text-lg font-bold ${getScoreColor(city.transportation.score)}`}>
                        {city.transportation.score}/10
                      </span>
                      <span className="text-xs text-gray-500">
                        지하철 {city.transportation.subwayLines}개 노선
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
              
              {/* 태그 */}
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-4 font-medium">🏷️ 특징</td>
                {validCities.map((city) => (
                  <td key={city.id} className="text-center py-4 px-4">
                    <div className="flex flex-wrap justify-center gap-1">
                      {city.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        
        {validCities.length >= 2 && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">💡 비교 인사이트</h4>
            <div className="space-y-2 text-sm text-blue-800">
              {/* 가장 저렴한 도시 */}
              {(() => {
                const cheapestCity = validCities.reduce((prev, current) => 
                  prev.cost.monthly < current.cost.monthly ? prev : current
                );
                return (
                  <p>
                    💰 <strong>{cheapestCity.name}</strong>이 가장 저렴합니다 ({formatCurrency(cheapestCity.cost.monthly)})
                  </p>
                );
              })()}
              
              {/* 가장 높은 평점 */}
              {(() => {
                const highestRatedCity = validCities.reduce((prev, current) => 
                  prev.rating.overall > current.rating.overall ? prev : current
                );
                return (
                  <p>
                    ⭐ <strong>{highestRatedCity.name}</strong>이 평점이 가장 높습니다 ({highestRatedCity.rating.overall}/5.0)
                  </p>
                );
              })()}
              
              {/* 가장 빠른 인터넷 */}
              {(() => {
                const fastestInternetCity = validCities.reduce((prev, current) => 
                  prev.infrastructure.internetSpeed > current.infrastructure.internetSpeed ? prev : current
                );
                return (
                  <p>
                    🚀 <strong>{fastestInternetCity.name}</strong>의 인터넷이 가장 빠릅니다 ({fastestInternetCity.infrastructure.internetSpeed}Mbps)
                  </p>
                );
              })()}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function ComparisonSection({ cities }: ComparisonTableProps) {
  return (
    <div className="space-y-8">
      <ComparisonTable cities={cities} />
      <ComparisonCharts cities={cities} />
    </div>
  );
}