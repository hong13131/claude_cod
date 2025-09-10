import Header from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, MapPin, Wifi, Home, CreditCard, Users, Shield, Lightbulb } from 'lucide-react';

export default function GuidePage() {
  const guides = [
    {
      title: "디지털 노마드 시작하기",
      description: "처음 노마드 생활을 시작하는 분들을 위한 완벽 가이드",
      icon: <BookOpen className="w-6 h-6" />,
      topics: ["준비물 체크리스트", "예산 계획 세우기", "첫 도시 선택법", "기본 마인드셋"],
      difficulty: "초급",
      readTime: "15분"
    },
    {
      title: "도시별 정착 가이드",
      description: "각 도시에서 빠르게 정착하는 방법과 필수 정보",
      icon: <MapPin className="w-6 h-6" />,
      topics: ["숙소 찾기", "교통편 이용법", "병원 및 약국", "생활 필수품 구매처"],
      difficulty: "초급",
      readTime: "20분"
    },
    {
      title: "원격근무 환경 구축",
      description: "효율적인 원격근무를 위한 환경 설정과 도구 활용법",
      icon: <Wifi className="w-6 h-6" />,
      topics: ["인터넷 연결 최적화", "코워킹스페이스 활용", "홈오피스 구축", "생산성 도구"],
      difficulty: "중급",
      readTime: "25분"
    },
    {
      title: "주거 솔루션",
      description: "다양한 주거 옵션과 각각의 장단점, 선택 기준",
      icon: <Home className="w-6 h-6" />,
      topics: ["단기 렌탈", "게스트하우스", "원룸 월세", "쉐어하우스"],
      difficulty: "중급",
      readTime: "18분"
    },
    {
      title: "재정 관리",
      description: "노마드 생활의 핵심인 스마트한 재정 관리 방법",
      icon: <CreditCard className="w-6 h-6" />,
      topics: ["예산 설정", "지출 추적", "세금 처리", "비상 자금"],
      difficulty: "중급",
      readTime: "22분"
    },
    {
      title: "커뮤니티 네트워킹",
      description: "현지에서 인맥을 쌓고 커뮤니티에 참여하는 방법",
      icon: <Users className="w-6 h-6" />,
      topics: ["로컬 커뮤니티 찾기", "네트워킹 이벤트", "온라인 그룹 참여", "관계 유지"],
      difficulty: "중급",
      readTime: "16분"
    },
    {
      title: "안전 및 보안",
      description: "여행과 거주 중 안전을 지키는 필수 보안 수칙",
      icon: <Shield className="w-6 h-6" />,
      topics: ["개인정보 보호", "응급상황 대처", "보험 가입", "안전한 결제"],
      difficulty: "고급",
      readTime: "20분"
    },
    {
      title: "고급 노마드 팁",
      description: "경험 많은 노마드들이 알려주는 고급 노하우",
      icon: <Lightbulb className="w-6 h-6" />,
      topics: ["도시 간 이동 최적화", "장기 계획 수립", "수익원 다각화", "라이프스타일 균형"],
      difficulty: "고급",
      readTime: "30분"
    }
  ];

  const quickTips = [
    {
      title: "체크인 전에 미리 연락하기",
      content: "숙소 도착 전에 미리 연락하여 체크인 시간과 방법을 확인하세요."
    },
    {
      title: "인터넷 속도 테스트하기",
      content: "숙소나 카페에서 speedtest.net으로 인터넷 속도를 확인해보세요."
    },
    {
      title: "현지 SIM카드 구매",
      content: "장기 체류시 현지 SIM카드가 로밍보다 경제적입니다."
    },
    {
      title: "응급상황 번호 저장",
      content: "119(소방서), 112(경찰), 1339(응급의료) 번호를 미리 저장하세요."
    },
    {
      title: "현금과 카드 분리 보관",
      content: "현금과 카드를 분리해서 보관하여 분실 위험을 줄이세요."
    },
    {
      title: "백업 계획 준비",
      content: "숙소나 인터넷에 문제가 생겼을 때를 대비한 플랜 B를 준비하세요."
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '초급': return 'bg-green-100 text-green-800';
      case '중급': return 'bg-blue-100 text-blue-800';
      case '고급': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              💡 노마드 가이드
            </h1>
            <p className="text-xl opacity-90 max-w-2xl">
              한국에서의 디지털 노마드 생활을 위한 완벽한 가이드입니다. 
              초보자부터 숙련자까지 모든 단계별 정보를 제공합니다.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Quick Tips */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ 빠른 팁</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickTips.map((tip, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{tip.title}</h3>
                  <p className="text-gray-700 text-xs">{tip.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Guides */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 완전 가이드</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guides.map((guide, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        {guide.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}>
                            {guide.difficulty}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                          <span>📖 {guide.readTime} 읽기</span>
                          <span>📝 {guide.topics.length}개 주제</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">주요 내용</h4>
                      <ul className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                        {guide.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center gap-1">
                            <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full" size="sm">
                      가이드 보기
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Resource Links */}
          <Card>
            <CardHeader>
              <CardTitle>🔗 유용한 리소스</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🏠</div>
                  <h3 className="font-medium text-gray-900 mb-1">숙소 찾기</h3>
                  <p className="text-xs text-gray-600 mb-3">단기/장기 렌탈 플랫폼</p>
                  <div className="space-y-1 text-xs">
                    <div>에어비앤비</div>
                    <div>직방</div>
                    <div>다방</div>
                  </div>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">💻</div>
                  <h3 className="font-medium text-gray-900 mb-1">코워킹스페이스</h3>
                  <p className="text-xs text-gray-600 mb-3">업무 공간 예약</p>
                  <div className="space-y-1 text-xs">
                    <div>패스트파이브</div>
                    <div>위워크</div>
                    <div>스페이스클라우드</div>
                  </div>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🚗</div>
                  <h3 className="font-medium text-gray-900 mb-1">교통</h3>
                  <p className="text-xs text-gray-600 mb-3">이동 수단</p>
                  <div className="space-y-1 text-xs">
                    <div>카카오 T</div>
                    <div>코레일톡</div>
                    <div>지하철맵</div>
                  </div>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">📱</div>
                  <h3 className="font-medium text-gray-900 mb-1">필수 앱</h3>
                  <p className="text-xs text-gray-600 mb-3">생활 필수 앱</p>
                  <div className="space-y-1 text-xs">
                    <div>카카오맵</div>
                    <div>배달의민족</div>
                    <div>토스</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}