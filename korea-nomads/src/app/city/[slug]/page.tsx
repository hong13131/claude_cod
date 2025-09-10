import { notFound } from 'next/navigation';
import { getCityById } from '@/lib/data';
import type { Metadata } from 'next';

interface CityDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CityDetailPageProps): Promise<Metadata> {
  const city = getCityById(params.slug);
  
  if (!city) {
    return {
      title: '도시를 찾을 수 없습니다',
    };
  }

  return {
    title: `${city.name} - 한국 노마드`,
    description: `${city.name}에서의 디지털 노마드 생활 정보. 월 생활비 ${city.cost.monthly.toLocaleString()}원, 평점 ${city.rating.overall}점`,
    keywords: [city.name, city.nameEn, '디지털노마드', '원격근무', city.region, ...city.tags],
  };
}

export default function CityDetailPage({ params }: CityDetailPageProps) {
  const city = getCityById(params.slug);

  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-4">{city.emoji}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {city.name}
              <span className="text-xl md:text-2xl ml-4 font-light">
                {city.nameEn}
              </span>
            </h1>
            <p className="text-xl mb-6">{city.region}</p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span>⭐</span>
                <span>{city.rating.overall}점</span>
                <span className="text-blue-200">({city.rating.reviewCount}개 후기)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💰</span>
                <span>월 {city.cost.monthly.toLocaleString()}원</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {city.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🌐</div>
                    <div className="text-2xl font-bold text-gray-900">{city.infrastructure.internetSpeed}Mbps</div>
                    <div className="text-sm text-gray-600">인터넷 속도</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-center">
                    <div className="text-3xl mb-2">☕</div>
                    <div className="text-2xl font-bold text-gray-900">{city.infrastructure.cafeCount}개</div>
                    <div className="text-sm text-gray-600">카페</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-center">
                    <div className="text-3xl mb-2">💼</div>
                    <div className="text-2xl font-bold text-gray-900">{city.infrastructure.coworkingSpaces}개</div>
                    <div className="text-sm text-gray-600">코워킹스페이스</div>
                  </div>
                </div>
              </div>

              {/* Transportation */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>🚇</span>
                  교통
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">지하철 노선</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {city.transportation.subwayLines > 0 ? `${city.transportation.subwayLines}개 노선` : '없음'}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">교통 점수</div>
                    <div className="text-2xl font-bold text-gray-900">{city.transportation.score}/10</div>
                  </div>
                </div>
              </div>

              {/* Cost Details */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>💰</span>
                  생활비
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">월 평균 생활비</span>
                    <span className="text-xl font-bold text-gray-900">
                      {city.cost.monthly.toLocaleString()}원
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">비용 수준</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      city.cost.category === 'cheap' ? 'bg-green-100 text-green-800' :
                      city.cost.category === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {city.cost.category === 'cheap' ? '저렴함' :
                       city.cost.category === 'moderate' ? '보통' : '비쌈'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-6">
              
              {/* Quick Stats */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold mb-4">빠른 정보</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">평점</span>
                    <span className="font-medium">{city.rating.overall}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">후기 수</span>
                    <span className="font-medium">{city.rating.reviewCount}개</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">지역</span>
                    <span className="font-medium">{city.region}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">추천 도시</span>
                    <span className="font-medium">{city.featured ? '✓' : '✗'}</span>
                  </div>
                </div>
              </div>

              {/* Last Updated */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-600 text-center">
                  마지막 업데이트: {city.lastUpdated}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}