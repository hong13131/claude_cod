import Header from '@/components/layout/Header';
import StatsCharts from '@/components/stats/StatsCharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Minus, Calendar, Users, DollarSign, MapPin } from 'lucide-react';
import { cities } from '@/lib/data';

export default function TrendsPage() {
  // 실제 도시 데이터를 기반으로 한 트렌딩 도시들 (평점 순으로 정렬하고 가상 변화율 추가)
  const trendingCities = cities
    .sort((a, b) => b.rating.overall - a.rating.overall)
    .slice(0, 8)
    .map((city, index) => {
      // 가상의 변화율 생성 (실제 구현에서는 real data 사용)
      const changes = ['+34%', '+28%', '+22%', '+18%', '+15%', '+8%', '-2%', '-5%'];
      const directions = ['up', 'up', 'up', 'up', 'up', 'up', 'down', 'down'];
      return {
        name: city.name,
        emoji: city.emoji,
        change: changes[index],
        direction: directions[index] as 'up' | 'down',
        period: "지난 달"
      };
    });

  const marketInsights = [
    {
      title: "소도시 인기 급상승",
      description: "춘천, 전주 등 중소도시들이 원격근무 도시로 주목받고 있습니다.",
      icon: "📈",
      category: "시장 동향"
    },
    {
      title: "생활비 상승세",
      description: "전국적으로 생활비가 평균 3.2% 상승했지만, 지방 도시는 여전히 경쟁력을 유지하고 있습니다.",
      icon: "💰",
      category: "경제 지표"
    },
    {
      title: "코워킹스페이스 확산",
      description: "지방 도시에도 고품질 코워킹스페이스가 늘어나며 원격근무 환경이 개선되고 있습니다.",
      icon: "💻",
      category: "인프라"
    },
    {
      title: "계절성 이주 패턴",
      description: "여름에는 해안 도시, 겨울에는 온천 지역으로 이동하는 패턴이 뚜렷해지고 있습니다.",
      icon: "🌊",
      category: "이동 패턴"
    }
  ];

  // 실제 데이터를 기반으로 한 통계
  const totalUsers = cities.reduce((sum, city) => sum + city.rating.reviewCount, 0);
  const averageCost = cities.reduce((sum, city) => sum + city.cost.monthly, 0) / cities.length;
  const averageRating = cities.reduce((sum, city) => sum + city.rating.overall, 0) / cities.length;
  const totalCities = cities.length;
  const featuredCities = cities.filter(city => city.featured).length;

  const monthlyStats = [
    { month: "8월", searches: 12500, signups: 89, reviews: 156 },
    { month: "9월", searches: 14200, signups: 124, reviews: 203 },
    { month: "10월", searches: 16800, signups: 167, reviews: 289 },
    { month: "11월", searches: 19600, signups: 234, reviews: 345 },
    { month: "12월", searches: 22100, signups: 298, reviews: 398 },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              📈 트렌드 분석
            </h1>
            <p className="text-xl opacity-90 max-w-2xl">
              한국 디지털 노마드 시장의 최신 트렌드와 데이터 분석을 확인해보세요. 
              어떤 도시가 인기를 얻고 있는지, 시장이 어떻게 변화하고 있는지 알 수 있습니다.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Trending Cities */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🔥 인기 상승 도시</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingCities.slice(0, 8).map((city, index) => (
                <Card key={city.name} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-2">{city.emoji}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{city.name}</h3>
                    <div className={`flex items-center justify-center gap-1 text-sm mb-1 ${
                      city.direction === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {city.direction === 'up' ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span className="font-semibold">{city.change}</span>
                    </div>
                    <div className="text-xs text-gray-500">{city.period}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Market Insights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 시장 인사이트</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {marketInsights.map((insight, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{insight.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {insight.category}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{insight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Monthly Growth */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  월별 성장 지표
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyStats.map((stat, index) => (
                    <div key={stat.month} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="font-medium">{stat.month}</div>
                      <div className="flex gap-6 text-sm">
                        <div className="text-center">
                          <div className="text-blue-600 font-semibold">{stat.searches.toLocaleString()}</div>
                          <div className="text-gray-500 text-xs">검색</div>
                        </div>
                        <div className="text-center">
                          <div className="text-green-600 font-semibold">{stat.signups}</div>
                          <div className="text-gray-500 text-xs">가입</div>
                        </div>
                        <div className="text-center">
                          <div className="text-purple-600 font-semibold">{stat.reviews}</div>
                          <div className="text-gray-500 text-xs">리뷰</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  주요 지표
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">총 사용자</div>
                        <div className="text-sm text-gray-600">누적 가입자 수</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{totalUsers.toLocaleString()}</div>
                      <div className="text-sm text-green-600">+18% ↗</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">평균 생활비</div>
                        <div className="text-sm text-gray-600">월 기준</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{Math.round(averageCost / 10000)}만원</div>
                      <div className="text-sm text-red-600">+3.2% ↗</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">만족도</div>
                        <div className="text-sm text-gray-600">평균 평점</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}/5.0</div>
                      <div className="text-sm text-green-600">+0.1 ↗</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 통계 차트들 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 상세 통계</h2>
            <StatsCharts />
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{totalCities}</div>
                <div className="text-sm text-gray-600">전체 도시</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{featuredCities}</div>
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
                  {Math.round(cities.reduce((sum, city) => sum + city.infrastructure.internetSpeed, 0) / cities.length)}Mbps
                </div>
                <div className="text-sm text-gray-600">평균 인터넷</div>
              </CardContent>
            </Card>
          </div>

          {/* Predictions */}
          <Card>
            <CardHeader>
              <CardTitle>🔮 2025년 전망</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl mb-3">🌟</div>
                  <h3 className="font-semibold text-gray-900 mb-2">신흥 도시 부상</h3>
                  <p className="text-sm text-gray-600">
                    경주, 안동 등 문화 도시들이 새로운 노마드 핫스팟으로 부상할 것으로 예상됩니다.
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-3">💻</div>
                  <h3 className="font-semibold text-gray-900 mb-2">인프라 고도화</h3>
                  <p className="text-sm text-gray-600">
                    5G 확산과 코워킹스페이스 품질 향상으로 더 많은 선택지가 생길 예정입니다.
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-3">🤝</div>
                  <h3 className="font-semibold text-gray-900 mb-2">커뮤니티 성장</h3>
                  <p className="text-sm text-gray-600">
                    지역별 노마드 커뮤니티가 더욱 활성화되어 네트워킹 기회가 증가할 것입니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}