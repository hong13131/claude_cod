import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Mail, Lock, User, Check } from 'lucide-react';
import { signup } from './actions';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12">
      <div className="max-w-md mx-auto px-4">
        
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            홈으로 돌아가기
          </Link>
        </div>

        {/* Register Card */}
        <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/80">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <div className="text-4xl">🚀</div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              KoreaNomads 회원가입
            </CardTitle>
            <p className="text-gray-600 mt-2">
              디지털 노마드 여정을 시작하세요
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form action={signup} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                  이메일
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700 block">
                  비밀번호
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="8자 이상 입력하세요"
                    className="pl-10 h-12"
                    required
                    minLength={8}
                  />
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="space-y-4">
                <label className="flex items-start space-x-3 text-sm">
                  <input type="checkbox" className="rounded border-gray-300 mt-0.5" required />
                  <span className="text-gray-700">
                    <span className="text-red-500">*</span> 
                    <Link href="#" className="text-blue-600 hover:text-blue-700 underline">
                      이용약관
                    </Link>
                    {' '}및{' '}
                    <Link href="#" className="text-blue-600 hover:text-blue-700 underline">
                      개인정보처리방침
                    </Link>
                    에 동의합니다
                  </span>
                </label>
              </div>

              {/* Register Button */}
              <Button 
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium"
                size="lg"
              >
                회원가입 완료
              </Button>
            </form>


            {/* Login Link */}
            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-gray-600">
                이미 계정이 있으신가요?{' '}
                <Link 
                  href="/login" 
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  로그인
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm mb-4">
            가입하면 이런 혜택을 받을 수 있어요
          </p>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Check className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-2xl">🎯</span>
              </div>
              <p className="text-gray-700 font-medium">AI 맞춤 추천</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Check className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-2xl">💾</span>
              </div>
              <p className="text-gray-700 font-medium">즐겨찾기 저장</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Check className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-2xl">👥</span>
              </div>
              <p className="text-gray-700 font-medium">커뮤니티 참여</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Check className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-2xl">📊</span>
              </div>
              <p className="text-gray-700 font-medium">도시 비교</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}