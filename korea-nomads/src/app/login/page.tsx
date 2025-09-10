import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Mail, Lock } from 'lucide-react';
import { login } from './actions';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="max-w-md mx-auto px-4">
        
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            홈으로 돌아가기
          </Link>
        </div>

        {/* Login Card */}
        <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/80">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <div className="text-4xl">🇰🇷</div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              KoreaNomads 로그인
            </CardTitle>
            <p className="text-gray-600 mt-2">
              디지털 노마드 여정을 계속하세요
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form action={login} className="space-y-6">
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
                    placeholder="비밀번호를 입력하세요"
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-600">로그인 상태 유지</span>
                </label>
                <Link 
                  href="#" 
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  비밀번호 찾기
                </Link>
              </div>

              {/* Login Button */}
              <Button 
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
                size="lg"
              >
                로그인
              </Button>
            </form>


            {/* Register Link */}
            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-gray-600">
                아직 계정이 없으신가요?{' '}
                <Link 
                  href="/register" 
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  회원가입
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm mb-4">
            로그인하면 더 많은 기능을 이용할 수 있어요
          </p>
          <div className="flex justify-center space-x-6 text-xs text-gray-500">
            <div className="flex items-center">
              <span className="mr-1">⭐</span>
              <span>맞춤 추천</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">💾</span>
              <span>즐겨찾기</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">👥</span>
              <span>커뮤니티</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}