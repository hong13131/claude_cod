import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, User, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇰🇷</span>
              <span className="text-xl font-bold text-gray-900">KoreaNomads.com</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="도시나 지역을 검색하세요..."
                  className="pl-10 w-full"
                />
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                로그인
              </Button>
              <Button size="sm">
                회원가입
              </Button>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="border-t border-gray-100">
            <div className="flex items-center space-x-8 py-3">
              <a href="#" className="flex items-center text-sm font-medium text-gray-900 hover:text-blue-600">
                🏠 홈
              </a>
              <a href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                🗺️ 도시탐색
              </a>
              <a href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                📊 비교
              </a>
              <a href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                👥 커뮤니티
              </a>
              <a href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                📈 트렌드
              </a>
              <a href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                💡 가이드
              </a>
              <a href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                ❓ FAQ
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-xl">🇰🇷</span>
              <span className="text-lg font-bold text-gray-900">KoreaNomads</span>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="mt-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="검색..."
                className="pl-10 w-full text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}