'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, DollarSign } from 'lucide-react';
import { City } from '@/lib/types';
import { cities } from '@/lib/data';

interface KoreaMapProps {
  selectedCities?: City[];
  onCityClick?: (city: City) => void;
}

// 한국 주요 도시들의 대략적인 좌표 (SVG viewBox 기준)
const cityCoordinates: Record<string, { x: number; y: number }> = {
  seoul: { x: 250, y: 180 },
  busan: { x: 380, y: 350 },
  daegu: { x: 350, y: 280 },
  incheon: { x: 220, y: 170 },
  gwangju: { x: 200, y: 320 },
  daejeon: { x: 280, y: 250 },
  ulsan: { x: 390, y: 310 },
  sejong: { x: 270, y: 240 },
  suwon: { x: 240, y: 190 },
  goyang: { x: 230, y: 160 },
  seongnam: { x: 260, y: 200 },
  bucheon: { x: 230, y: 180 },
  anyang: { x: 240, y: 200 },
  yongin: { x: 270, y: 210 },
  changwon: { x: 340, y: 340 },
  cheonan: { x: 260, y: 220 },
  jeonju: { x: 250, y: 280 },
  chuncheon: { x: 320, y: 120 },
  jeju: { x: 190, y: 450 },
  gangneung: { x: 380, y: 140 },
  pohang: { x: 400, y: 250 },
  gimpo: { x: 210, y: 165 },
  siheung: { x: 230, y: 190 },
  hwaseong: { x: 250, y: 210 },
  paju: { x: 240, y: 140 },
  seogwipo: { x: 180, y: 470 }
};

export default function KoreaMap({ selectedCities = [], onCityClick }: KoreaMapProps) {
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const handleCityClick = (city: City) => {
    setSelectedCity(city);
    onCityClick?.(city);
  };

  const getCityColor = (city: City) => {
    if (selectedCities.some(c => c.id === city.id)) {
      return '#EF4444'; // 빨간색 - 선택된 도시
    }
    if (city.featured) {
      return '#3B82F6'; // 파란색 - 인기 도시
    }
    return '#10B981'; // 초록색 - 일반 도시
  };

  const getCitySize = (city: City) => {
    if (selectedCities.some(c => c.id === city.id)) {
      return 12; // 선택된 도시는 크게
    }
    if (city.featured) {
      return 8; // 인기 도시는 중간 크기
    }
    return 6; // 일반 도시는 작게
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            한국 도시 지도
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* 지도 영역 */}
            <div className="flex-1">
              <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-lg overflow-hidden">
                <svg 
                  viewBox="0 0 500 600" 
                  className="w-full h-96 lg:h-[500px]"
                  style={{ maxWidth: '100%' }}
                >
                  {/* 한국 지도 윤곽 (간단한 형태) */}
                  <defs>
                    <filter id="shadow">
                      <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.3"/>
                    </filter>
                  </defs>
                  
                  {/* 한국 본토 윤곽 */}
                  <path
                    d="M 150 100 
                       Q 200 80 280 90
                       Q 350 95 420 130
                       Q 450 160 430 220
                       Q 420 280 400 320
                       Q 380 360 350 380
                       Q 300 390 250 370
                       Q 200 350 180 320
                       Q 160 280 150 240
                       Q 140 200 150 160
                       Q 145 130 150 100 Z"
                    fill="#E5F3FF"
                    stroke="#B3D9FF"
                    strokeWidth="2"
                    filter="url(#shadow)"
                  />
                  
                  {/* 제주도 */}
                  <ellipse
                    cx="190"
                    cy="450"
                    rx="35"
                    ry="20"
                    fill="#E5F3FF"
                    stroke="#B3D9FF"
                    strokeWidth="2"
                    filter="url(#shadow)"
                  />
                  
                  {/* 도시 마커들 */}
                  {cities.map(city => {
                    const coords = cityCoordinates[city.id];
                    if (!coords) return null;
                    
                    return (
                      <g key={city.id}>
                        <circle
                          cx={coords.x}
                          cy={coords.y}
                          r={getCitySize(city)}
                          fill={getCityColor(city)}
                          stroke="white"
                          strokeWidth="2"
                          className="cursor-pointer hover:scale-110 transition-transform duration-200"
                          onMouseEnter={() => setHoveredCity(city)}
                          onMouseLeave={() => setHoveredCity(null)}
                          onClick={() => handleCityClick(city)}
                          filter="url(#shadow)"
                        />
                        
                        {/* 도시 이름 라벨 */}
                        <text
                          x={coords.x}
                          y={coords.y - getCitySize(city) - 5}
                          textAnchor="middle"
                          className="text-xs font-medium fill-gray-700 pointer-events-none"
                        >
                          {city.name}
                        </text>
                        
                        {/* 호버 시 이모지 표시 */}
                        {hoveredCity?.id === city.id && (
                          <text
                            x={coords.x}
                            y={coords.y + 3}
                            textAnchor="middle"
                            className="text-lg pointer-events-none"
                            style={{ dominantBaseline: 'central' }}
                          >
                            {city.emoji}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>
                
                {/* 범례 */}
                <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-lg shadow-lg">
                  <div className="text-sm font-semibold mb-2">범례</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span>선택된 도시</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>인기 도시</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>일반 도시</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 도시 정보 패널 */}
            <div className="lg:w-80">
              {selectedCity ? (
                <Card className="h-fit">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{selectedCity.emoji}</span>
                      <div>
                        <CardTitle className="text-lg">{selectedCity.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{selectedCity.region}</Badge>
                          {selectedCity.featured && (
                            <Badge variant="default">인기</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-medium">{selectedCity.rating.overall}</span>
                      <span className="text-sm text-gray-600">
                        ({selectedCity.rating.reviewCount}개 리뷰)
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <span className="font-medium">
                        {Math.round(selectedCity.cost.monthly / 10000)}만원/월
                      </span>
                      <Badge 
                        className={
                          selectedCity.cost.category === 'cheap' ? 'bg-green-100 text-green-800' :
                          selectedCity.cost.category === 'moderate' ? 'bg-blue-100 text-blue-800' :
                          selectedCity.cost.category === 'expensive' ? 'bg-orange-100 text-orange-800' :
                          'bg-purple-100 text-purple-800'
                        }
                      >
                        {selectedCity.cost.category === 'cheap' && '저렴'}
                        {selectedCity.cost.category === 'moderate' && '보통'}
                        {selectedCity.cost.category === 'expensive' && '비쌈'}
                        {selectedCity.cost.category === 'luxury' && '고급'}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="text-gray-600">인터넷: </span>
                        <span className="font-medium">{selectedCity.infrastructure.internetSpeed}Mbps</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">카페: </span>
                        <span className="font-medium">{selectedCity.infrastructure.cafeCount}개</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">코워킹: </span>
                        <span className="font-medium">{selectedCity.infrastructure.coworkingSpaces}개</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">교통 점수: </span>
                        <span className="font-medium">{selectedCity.transportation.score}/10</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {selectedCity.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="h-96 lg:h-[500px] flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600 font-medium">도시를 클릭하세요</p>
                    <p className="text-sm text-gray-500 mt-1">
                      도시 정보를 확인할 수 있습니다
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* 통계 요약 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{cities.length}</div>
            <div className="text-sm text-gray-600">전체 도시</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{cities.filter(c => c.featured).length}</div>
            <div className="text-sm text-gray-600">인기 도시</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{new Set(cities.map(c => c.region)).size}</div>
            <div className="text-sm text-gray-600">지역</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {Math.round(cities.reduce((sum, city) => sum + city.rating.overall, 0) / cities.length * 10) / 10}
            </div>
            <div className="text-sm text-gray-600">평균 평점</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}