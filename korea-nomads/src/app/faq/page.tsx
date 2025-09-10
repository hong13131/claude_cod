'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ChevronDown, ChevronRight, Search, MessageCircle, Mail, Phone } from 'lucide-react';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const faqCategories = [
    {
      title: "🏠 숙소 및 주거",
      faqs: [
        {
          question: "단기 체류에 적합한 숙소는 어떤 것이 있나요?",
          answer: "단기 체류(1주-3개월)에는 에어비앤비, 게스트하우스, 레지던스 호텔이 적합합니다. 에어비앤비는 월 할인을 제공하며, 게스트하우스는 경제적이지만 프라이버시가 제한적입니다. 레지던스 호텔은 비싸지만 편의시설이 완벽합니다."
        },
        {
          question: "전세금이나 보증금 없이 집을 구할 수 있나요?",
          answer: "가능합니다. 먼슬리 렌탈, 쉐어하우스, 고시원 등이 보증금 부담을 줄일 수 있는 옵션입니다. 다만 월세가 상대적으로 높을 수 있고, 계약 조건을 잘 확인해야 합니다."
        },
        {
          question: "숙소에서 확인해야 할 필수 사항은 무엇인가요?",
          answer: "Wi-Fi 속도(최소 50Mbps 권장), 책상과 의자, 충분한 콘센트, 자연광, 소음 수준, 보안 상태를 확인하세요. 또한 세탁기, 냉장고 등 기본 가전제품 사용 가능 여부도 중요합니다."
        }
      ]
    },
    {
      title: "💻 업무 환경",
      faqs: [
        {
          question: "코워킹스페이스를 이용할 때 주의사항이 있나요?",
          answer: "사전 예약 필수 여부, 이용 시간, 프린터/스캐너 사용료, Wi-Fi 비밀번호, 회의실 예약 방법을 미리 확인하세요. 또한 음성 통화 가능 구역과 조용한 작업 구역을 구분해서 이용하는 것이 중요합니다."
        },
        {
          question: "인터넷이 끊어졌을 때 대안은 무엇인가요?",
          answer: "휴대폰 핫스팟, 근처 카페나 도서관 이용, 모바일 Wi-Fi 라우터 대여를 준비하세요. 중요한 회의나 업무가 있는 날에는 미리 백업 장소를 확인해두는 것이 좋습니다."
        },
        {
          question: "어떤 장비를 준비해야 하나요?",
          answer: "노트북(충전기 포함), 모바일 Wi-Fi, 노이즈 캔슬링 이어폰, 휴대용 모니터, 무선 마우스, 멀티탭을 기본으로 준비하세요. 직업에 따라 웹캠, 마이크, 태블릿 등 추가 장비가 필요할 수 있습니다."
        }
      ]
    },
    {
      title: "💰 비용 및 예산",
      faqs: [
        {
          question: "한 달 생활비는 얼마나 필요한가요?",
          answer: "지역과 생활 스타일에 따라 차이가 있지만, 서울 기준 200-400만원, 지방 도시는 150-250만원 정도 필요합니다. 여기에는 숙소비, 식비, 교통비, 통신비가 포함됩니다."
        },
        {
          question: "비용을 절약할 수 있는 방법이 있나요?",
          answer: "장기 할인 활용, 로컬 마트 이용, 대중교통 정기권 구매, 무료 Wi-Fi 공간 활용, 쿠킹 시설이 있는 숙소 선택 등으로 비용을 절약할 수 있습니다."
        },
        {
          question: "예상치 못한 비용은 어떤 것들이 있나요?",
          answer: "병원비, 긴급 숙소 변경, 장비 수리비, 비자 연장비, 귀국 항공료 변경 수수료 등이 있을 수 있습니다. 총 예산의 20% 정도를 비상금으로 준비하는 것을 권장합니다."
        }
      ]
    },
    {
      title: "🚗 교통 및 이동",
      faqs: [
        {
          question: "대중교통 이용 시 팁이 있나요?",
          answer: "T-money 카드나 모바일 카드를 이용하면 요금 할인과 환승 혜택을 받을 수 있습니다. 지하철맵 앱으로 최적 경로를 확인하고, 출퇴근 시간대를 피해 이동하면 더 편리합니다."
        },
        {
          question: "도시 간 이동할 때 추천하는 방법은?",
          answer: "KTX(고속철도)가 가장 빠르고 편리하며, 고속버스는 경제적인 옵션입니다. 항공편은 제주도나 먼 거리일 때 유용합니다. 코레일톡이나 버스타고 앱으로 미리 예약하면 할인을 받을 수 있습니다."
        },
        {
          question: "렌터카를 이용해도 되나요?",
          answer: "국제운전면허증이 있다면 가능합니다. 다만 주차비, 기름값, 톨게이트 비용이 추가로 발생하고, 도시 중심가에서는 주차가 어려울 수 있어 신중히 검토해야 합니다."
        }
      ]
    },
    {
      title: "🏥 건강 및 안전",
      faqs: [
        {
          question: "아플 때는 어떻게 해야 하나요?",
          answer: "가까운 약국에서 일반의약품을 구매하거나, 병원 진료를 받으세요. 응급상황에는 119(응급실) 또는 1339(응급의료정보센터)에 연락하면 됩니다. 여행자보험 가입을 권장합니다."
        },
        {
          question: "필수 보험이 있나요?",
          answer: "여행자보험은 필수이며, 의료비, 휴대품 도난, 항공기 지연 등을 보장받을 수 있습니다. 장기 체류 시에는 국민건강보험 가입도 검토해볼 수 있습니다."
        },
        {
          question: "안전하게 생활하려면?",
          answer: "귀중품은 분산 보관하고, 늦은 시간 외출을 자제하며, 응급 연락처를 저장해두세요. 또한 현지 치안 상황을 파악하고, 위험 지역을 피하는 것이 중요합니다."
        }
      ]
    },
    {
      title: "📱 생활 정보",
      faqs: [
        {
          question: "필수 앱은 어떤 것들이 있나요?",
          answer: "카카오맵(지도), 지하철맵(교통), 배달의민족(음식), 쿠팡(쇼핑), 토스(결제), 카카오 T(택시), 네이버(검색) 등이 기본적으로 필요한 앱들입니다."
        },
        {
          question: "언어 장벽은 어떻게 극복하나요?",
          answer: "파파고나 구글 번역 앱을 활용하고, 기본적인 한국어 인사말과 숫자를 익혀두세요. 관광지나 젊은 층이 많은 지역에서는 영어 소통이 가능한 경우가 많습니다."
        },
        {
          question: "현지인과 네트워킹하려면?",
          answer: "외국인 커뮤니티, 언어 교환 모임, 취미 동호회 참여를 추천합니다. 미트업, 페이스북 그룹, 번개 앱 등을 통해 다양한 모임을 찾을 수 있습니다."
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex: number, faqIndex: number) => {
    const itemId = categoryIndex * 100 + faqIndex;
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(itemId)) {
      newExpandedItems.delete(itemId);
    } else {
      newExpandedItems.add(itemId);
    }
    setExpandedItems(newExpandedItems);
  };

  const isExpanded = (categoryIndex: number, faqIndex: number) => {
    return expandedItems.has(categoryIndex * 100 + faqIndex);
  };

  // Filter FAQs based on search query
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ❓ 자주 묻는 질문
            </h1>
            <p className="text-xl opacity-90 max-w-2xl">
              한국 디지털 노마드 생활에 대한 궁금한 점들을 해결해드립니다. 
              찾으시는 답변이 없다면 언제든 문의해 주세요.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="질문을 검색해보세요..."
                className="pl-10 text-center"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-6">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                      {category.title}
                    </h2>
                    <div className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => (
                        <div key={faqIndex} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                          <button
                            className="w-full text-left flex items-center justify-between py-2 hover:text-blue-600 transition-colors"
                            onClick={() => toggleItem(categoryIndex, faqIndex)}
                          >
                            <span className="font-medium text-gray-900 pr-4">
                              {faq.question}
                            </span>
                            {isExpanded(categoryIndex, faqIndex) ? (
                              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                          </button>
                          {isExpanded(categoryIndex, faqIndex) && (
                            <div className="pt-3 pb-1">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    검색 결과가 없습니다
                  </h3>
                  <p className="text-gray-600">
                    다른 키워드로 검색하시거나 아래 문의 방법을 이용해주세요.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Contact Information */}
          <Card className="mt-12">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                🤝 추가 도움이 필요하시나요?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">커뮤니티</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    다른 노마드들과 소통하며 실시간으로 질문하고 답변받으세요
                  </p>
                  <button className="text-blue-600 text-sm hover:text-blue-800">
                    커뮤니티 참여하기 →
                  </button>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">이메일 문의</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    자세한 문의사항이나 개인적인 상담이 필요할 때
                  </p>
                  <button className="text-green-600 text-sm hover:text-green-800">
                    help@koreanomads.com
                  </button>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">카카오톡 상담</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    빠른 답변이 필요하거나 한국어로 상담받고 싶을 때
                  </p>
                  <button className="text-purple-600 text-sm hover:text-purple-800">
                    @KoreaNomads 추가
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}