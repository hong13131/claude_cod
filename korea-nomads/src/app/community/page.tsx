import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Users, Calendar, TrendingUp, Clock, Heart } from 'lucide-react';

export default function CommunityPage() {
  const posts = [
    {
      id: 1,
      title: "제주도에서 6개월 살아본 후기",
      author: "제주러버",
      category: "경험담",
      comments: 23,
      likes: 45,
      timeAgo: "2시간 전",
      tags: ["제주", "원격근무", "워케이션"]
    },
    {
      id: 2,
      title: "부산 해운대 근처 코워킹스페이스 추천해주세요",
      author: "부산신입",
      category: "질문",
      comments: 8,
      likes: 12,
      timeAgo: "4시간 전",
      tags: ["부산", "코워킹", "추천"]
    },
    {
      id: 3,
      title: "서울 강남 vs 판교, 어디가 더 나을까요?",
      author: "고민중",
      category: "토론",
      comments: 31,
      likes: 28,
      timeAgo: "1일 전",
      tags: ["서울", "판교", "비교"]
    },
    {
      id: 4,
      title: "춘천 카페 투어 완주 인증!",
      author: "카페순례자",
      category: "경험담",
      comments: 15,
      likes: 67,
      timeAgo: "2일 전",
      tags: ["춘천", "카페", "투어"]
    }
  ];

  const categories = [
    { name: "전체", count: 156, active: true },
    { name: "질문", count: 42 },
    { name: "경험담", count: 68 },
    { name: "팁 공유", count: 31 },
    { name: "토론", count: 15 }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              👥 커뮤니티
            </h1>
            <p className="text-xl opacity-90 max-w-2xl">
              한국 노마드들과 함께 소통하세요. 
              경험을 공유하고, 질문하고, 서로 도움을 주고받을 수 있습니다.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">최근 게시글</h2>
                  <p className="text-gray-600">노마드들의 생생한 경험을 확인해보세요</p>
                </div>
                <Button>
                  새 글 작성하기
                </Button>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant={category.active ? "default" : "outline"}
                    size="sm"
                    className="h-8"
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>

              {/* Posts */}
              <div className="space-y-4">
                {posts.map((post) => (
                  <Card key={post.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {post.category}
                            </Badge>
                            <span className="text-sm text-gray-500">{post.author}</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-sm text-gray-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.timeAgo}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
                            {post.title}
                          </h3>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {post.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline">
                  더 많은 글 보기
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Community Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="w-5 h-5" />
                    커뮤니티 현황
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">전체 회원</span>
                      <span className="font-semibold">1,247명</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">오늘 접속</span>
                      <span className="font-semibold text-green-600">89명</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">총 게시글</span>
                      <span className="font-semibold">2,156개</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">인기 태그</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["제주", "서울", "부산", "원격근무", "코워킹", "카페", "워케이션", "전주", "춘천"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Calendar className="w-5 h-5" />
                    예정된 이벤트
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="font-medium text-blue-900 text-sm">제주 노마드 밋업</div>
                      <div className="text-blue-700 text-xs">12월 15일 (토) 오후 2시</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="font-medium text-green-900 text-sm">서울 코워킹 투어</div>
                      <div className="text-green-700 text-xs">12월 20일 (목) 오후 6시</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="font-medium text-purple-900 text-sm">온라인 네트워킹</div>
                      <div className="text-purple-700 text-xs">12월 25일 (화) 오후 8시</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rules */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">커뮤니티 규칙</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>• 서로를 존중하며 예의를 지켜주세요</p>
                    <p>• 광고성 게시물은 금지됩니다</p>
                    <p>• 개인정보 공유를 주의해주세요</p>
                    <p>• 건설적인 토론을 지향합니다</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}