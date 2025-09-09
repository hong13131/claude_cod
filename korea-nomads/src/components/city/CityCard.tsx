import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { City } from '@/lib/types';
import { Heart, Eye, Wifi, Coffee } from 'lucide-react';

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW'
    }).format(amount);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-200">
      {/* City Header with Emoji Visual */}
      <div className="relative p-6 pb-0">
        <div className="w-full h-32 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
          {/* Emoji Pattern Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-6 gap-2 h-full w-full p-2">
              {Array.from({ length: 18 }, (_, i) => (
                <div key={i} className="flex items-center justify-center text-2xl opacity-60">
                  {city.emoji}
                </div>
              ))}
            </div>
          </div>
          
          {/* Main Emoji */}
          <div className="relative z-10 text-6xl group-hover:scale-110 transition-transform duration-300">
            {city.emoji}
          </div>
        </div>
      </div>

      <CardContent className="px-6 pb-4">
        {/* City Info */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900">{city.name}</h3>
            <div className="flex items-center text-amber-500">
              ⭐ <span className="ml-1 font-semibold">{city.rating.overall}/5.0</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-1">{city.nameEn}</p>
          <p className="text-sm text-gray-500">{city.region}</p>
        </div>

        {/* Key Metrics */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 flex items-center">
              💰 월 생활비
            </span>
            <span className="font-semibold text-lg text-gray-900">
              {formatCurrency(city.cost.monthly)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 flex items-center">
              <Wifi className="w-4 h-4 mr-1" />
              인터넷
            </span>
            <span className="font-medium text-gray-700">
              {city.infrastructure.internetSpeed}Mbps
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 flex items-center">
              <Coffee className="w-4 h-4 mr-1" />
              카페
            </span>
            <span className="font-medium text-gray-700">
              {city.infrastructure.cafeCount}개
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {city.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-6 pt-0">
        <div className="flex w-full gap-2">
          <Button 
            className="flex-1" 
            size="sm"
            variant="default"
          >
            <Eye className="w-4 h-4 mr-1" />
            상세
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            className="flex-shrink-0"
          >
            <Heart className="w-4 h-4" />
            <span className="ml-1 hidden sm:inline">즐겨찾기</span>
          </Button>
        </div>
      </CardFooter>

      {/* Featured Badge */}
      {city.featured && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
          추천
        </div>
      )}
    </Card>
  );
}