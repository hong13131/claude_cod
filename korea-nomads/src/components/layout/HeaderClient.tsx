'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X } from 'lucide-react';
import { cities, filterCities } from '@/lib/data';
import { City } from '@/lib/types';

interface HeaderClientProps {
  authButton: React.ReactNode;
}

export default function HeaderClient({ authButton }: HeaderClientProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<City[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle search with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        const results = filterCities(cities, { query: searchQuery });
        setSearchResults(results.slice(0, 8)); // Show max 8 results
        setShowSearchResults(true);
      } else {
        setSearchResults([]);
        setShowSearchResults(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle click outside to close search results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearchResults(false);
      setIsMobileSearchOpen(false);
    }
  };

  const handleCityClick = (cityId: string) => {
    router.push(`/city/${cityId}`);
    setShowSearchResults(false);
    setIsMobileSearchOpen(false);
    setSearchQuery('');
  };

  const openMobileSearch = () => {
    setIsMobileSearchOpen(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const closeMobileSearch = () => {
    setIsMobileSearchOpen(false);
    setSearchQuery('');
    setShowSearchResults(false);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🇰🇷</span>
              <span className="text-xl font-bold text-gray-900">KoreaNomads.com</span>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="도시나 지역을 검색하세요..."
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery && setShowSearchResults(true)}
                />
                
                {/* Search Results Dropdown */}
                {showSearchResults && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
                    {searchResults.length > 0 ? (
                      <>
                        <div className="px-4 py-2 text-sm text-gray-600 border-b">
                          검색 결과 ({searchResults.length}개)
                        </div>
                        {searchResults.map((city) => (
                          <div
                            key={city.id}
                            className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                            onClick={() => handleCityClick(city.id)}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{city.emoji}</span>
                              <div className="flex-1">
                                <div className="font-medium text-gray-900">{city.name}</div>
                                <div className="text-sm text-gray-600">{city.nameEn} · {city.region}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium">⭐ {city.rating.overall}</div>
                                <div className="text-xs text-gray-500">{city.rating.reviewCount} 리뷰</div>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div className="px-4 py-2 text-center border-t">
                          <button
                            type="submit"
                            className="text-blue-600 text-sm hover:text-blue-800"
                          >
                            모든 검색 결과 보기 →
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="px-4 py-6 text-center text-gray-500">
                        <div className="text-lg mb-2">🔍</div>
                        <div>검색 결과가 없습니다</div>
                        <div className="text-sm">다른 키워드로 검색해보세요</div>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>

            {/* Auth Buttons */}
            {authButton}
          </div>

          {/* Navigation Menu */}
          <nav className="border-t border-gray-100">
            <div className="flex items-center space-x-8 py-3">
              <Link href="/" className="flex items-center text-sm font-medium text-gray-900 hover:text-blue-600">
                🏠 홈
              </Link>
              <Link href="/explore" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                🗺️ 도시탐색
              </Link>
              <Link href="/compare" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                📊 비교
              </Link>
              <Link href="/community" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                👥 커뮤니티
              </Link>
              <Link href="/trends" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                📈 트렌드
              </Link>
              <Link href="/guide" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                💡 가이드
              </Link>
              <Link href="/faq" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                ❓ FAQ
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <span className="text-lg sm:text-xl">🇰🇷</span>
              <span className="text-sm sm:text-lg font-bold text-gray-900">KoreaNomads</span>
            </Link>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={openMobileSearch}
              >
                <Search className="w-4 h-4" />
              </Button>
              {authButton}
              <Button variant="ghost" size="sm">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          {!isMobileSearchOpen && (
            <div className="mt-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="검색..."
                  className="pl-10 w-full text-sm"
                  onFocus={openMobileSearch}
                  readOnly
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="p-4">
            {/* Search Header */}
            <div className="flex items-center gap-3 mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={closeMobileSearch}
              >
                <X className="w-5 h-5" />
              </Button>
              <form onSubmit={handleSearchSubmit} className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    ref={inputRef}
                    type="text"
                    placeholder="도시나 지역을 검색하세요..."
                    className="pl-10 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>

            {/* Mobile Search Results */}
            <div className="space-y-2">
              {searchResults.length > 0 ? (
                <>
                  <div className="text-sm text-gray-600 px-2 py-1">
                    검색 결과 ({searchResults.length}개)
                  </div>
                  {searchResults.map((city) => (
                    <div
                      key={city.id}
                      className="p-3 bg-gray-50 rounded-lg cursor-pointer"
                      onClick={() => handleCityClick(city.id)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{city.emoji}</span>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{city.name}</div>
                          <div className="text-sm text-gray-600">{city.nameEn} · {city.region}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">⭐ {city.rating.overall}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={handleSearchSubmit}
                    className="w-full p-3 text-center text-blue-600 hover:bg-gray-50 rounded-lg"
                  >
                    모든 검색 결과 보기 →
                  </button>
                </>
              ) : searchQuery ? (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-2xl mb-2">🔍</div>
                  <div>검색 결과가 없습니다</div>
                  <div className="text-sm">다른 키워드로 검색해보세요</div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-2xl mb-2">🇰🇷</div>
                  <div>도시나 지역을 검색해보세요</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}