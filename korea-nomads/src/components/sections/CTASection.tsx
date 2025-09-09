import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, BarChart3, Users } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🚀 지금 바로 시작해보세요! 🚀
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            완벽한 디지털 노마드 생활을 위한 첫 걸음을 내딛어보세요. 
            AI가 추천하는 맞춤 도시에서 새로운 경험을 시작하세요.
          </p>
        </div>

        {/* CTA Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* AI 도시 추천 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              🎯 AI 도시 추천 받기
            </h3>
            
            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
              5분간의 간단한 질문으로 당신에게 완벽한 도시를 찾아드립니다. 
              예산, 라이프스타일, 선호도를 고려한 맞춤 추천을 받아보세요.
            </p>
            
            <Button 
              size="lg" 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white border-none"
            >
              무료로 추천받기
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* 도시 비교 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              📊 도시 비교하기
            </h3>
            
            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
              관심있는 도시들을 직접 비교해보세요. 
              생활비, 인프라, 문화 등 모든 지표를 한눈에 확인할 수 있습니다.
            </p>
            
            <Button 
              size="lg" 
              variant="outline"
              className="w-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              비교 도구 사용
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* 커뮤니티 가입 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              👥 커뮤니티 가입하기
            </h3>
            
            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
              한국 노마드들과 소통하며 실제 경험을 공유해보세요. 
              질문하고, 조언을 구하고, 네트워킹의 기회를 만나보세요.
            </p>
            
            <Button 
              size="lg" 
              variant="outline"
              className="w-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              무료 가입하기
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-sm text-blue-200">만족한 사용자</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-white mb-2">4.8★</div>
              <div className="text-sm text-blue-200">평균 만족도</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-sm text-blue-200">추천 정확도</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-blue-200">실시간 업데이트</div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-blue-200 text-sm">
              💝 <span className="font-semibold">완전 무료</span> · 
              🔒 <span className="font-semibold">개인정보 보호</span> · 
              ⚡ <span className="font-semibold">즉시 시작</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}