'use client';

import React, { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import CityCard from '@/components/city/CityCard';
import { cities, getCityById } from '@/lib/data';
import { City } from '@/lib/types';
import { 
  User as UserIcon, 
  Edit2, 
  Save, 
  X, 
  Heart, 
  MapPin, 
  Calendar,
  Mail,
  Globe
} from 'lucide-react';

interface ProfileContentProps {
  user: User;
}

interface UserProfile {
  displayName: string;
  bio: string;
  location: string;
  website: string;
  occupation: string;
}

export default function ProfileContent({ user }: ProfileContentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    displayName: user.user_metadata?.display_name || '',
    bio: user.user_metadata?.bio || '',
    location: user.user_metadata?.location || '',
    website: user.user_metadata?.website || '',
    occupation: user.user_metadata?.occupation || ''
  });
  const [originalProfile, setOriginalProfile] = useState<UserProfile>(profile);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  // Load favorites from localStorage (in real app, this would be from database)
  useEffect(() => {
    const savedFavorites = localStorage.getItem(`favorites_${user.id}`);
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, [user.id]);

  const handleEdit = () => {
    setOriginalProfile(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setProfile(originalProfile);
    setIsEditing(false);
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In real app, this would update user metadata in Supabase
    console.log('Saving profile:', profile);
    
    setIsSaving(false);
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof UserProfile, value: string) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleFavorite = (cityId: string) => {
    const newFavorites = favorites.includes(cityId)
      ? favorites.filter(id => id !== cityId)
      : [...favorites, cityId];
    
    setFavorites(newFavorites);
    localStorage.setItem(`favorites_${user.id}`, JSON.stringify(newFavorites));
  };

  const favoriteCities = favorites.map(id => getCityById(id)).filter(Boolean) as City[];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Profile Information */}
        <div className="lg:col-span-1 space-y-6">
          {/* Basic Info Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <UserIcon className="w-5 h-5" />
                프로필 정보
              </CardTitle>
              {!isEditing && (
                <Button variant="outline" size="sm" onClick={handleEdit}>
                  <Edit2 className="w-4 h-4" />
                </Button>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              {isEditing ? (
                <>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      표시 이름
                    </label>
                    <Input
                      value={profile.displayName}
                      onChange={(e) => handleInputChange('displayName', e.target.value)}
                      placeholder="이름을 입력하세요"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      직업
                    </label>
                    <Input
                      value={profile.occupation}
                      onChange={(e) => handleInputChange('occupation', e.target.value)}
                      placeholder="개발자, 디자이너, 마케터 등"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      현재 위치
                    </label>
                    <Input
                      value={profile.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="서울, 부산 등"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      웹사이트
                    </label>
                    <Input
                      value={profile.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      placeholder="https://example.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      자기소개
                    </label>
                    <Textarea
                      value={profile.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      placeholder="간단한 자기소개를 작성해주세요"
                      rows={3}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <Button 
                      onClick={handleSave} 
                      disabled={isSaving}
                      className="flex-1"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {isSaving ? '저장 중...' : '저장'}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={handleCancel}
                      disabled={isSaving}
                      className="sm:w-auto"
                    >
                      <X className="w-4 h-4 mr-2 sm:mr-0" />
                      <span className="sm:hidden">취소</span>
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center pb-4 border-b">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl text-white font-bold">
                        {(profile.displayName || user.email?.charAt(0) || 'U').toUpperCase()}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {profile.displayName || '이름 미설정'}
                    </h2>
                    {profile.occupation && (
                      <p className="text-gray-600">{profile.occupation}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{user.email}</span>
                    </div>
                    
                    {profile.location && (
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{profile.location}</span>
                      </div>
                    )}
                    
                    {profile.website && (
                      <div className="flex items-center gap-2 text-sm">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <a 
                          href={profile.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 truncate"
                        >
                          {profile.website}
                        </a>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">
                        {new Date(user.created_at).toLocaleDateString('ko-KR')} 가입
                      </span>
                    </div>
                  </div>

                  {profile.bio && (
                    <div className="pt-3 border-t">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {profile.bio}
                      </p>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">활동 통계</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{favorites.length}</div>
                  <div className="text-sm text-gray-600">즐겨찾기</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {Math.floor(Math.random() * 10) + 1}
                  </div>
                  <div className="text-sm text-gray-600">리뷰 작성</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Favorites Section */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center lg:justify-start gap-2">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              즐겨찾기 도시
            </h2>
            <p className="text-gray-600 text-center lg:text-left text-sm sm:text-base">
              관심있는 도시들을 즐겨찾기에 추가하여 쉽게 찾아보세요
            </p>
          </div>

          {favoriteCities.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {favoriteCities.map((city) => (
                  <div key={city.id} className="relative">
                    <CityCard city={city} />
                    <button
                      onClick={() => toggleFavorite(city.id)}
                      className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Heart className="w-4 h-4 text-red-500 fill-current" />
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  아직 즐겨찾기한 도시가 없습니다
                </h3>
                <p className="text-gray-600 mb-6">
                  도시 페이지에서 하트 버튼을 눌러 즐겨찾기에 추가해보세요
                </p>
                <Button onClick={() => window.location.href = '/'}>
                  도시 둘러보기
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Quick Add Favorites */}
          {favoriteCities.length < cities.length && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">추천 도시</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                  {cities.slice(0, 8).filter(city => !favorites.includes(city.id)).map((city) => (
                    <button
                      key={city.id}
                      onClick={() => toggleFavorite(city.id)}
                      className="p-2 sm:p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
                    >
                      <div className="text-xl sm:text-2xl mb-1">{city.emoji}</div>
                      <div className="text-xs sm:text-sm font-medium text-gray-900 leading-tight">{city.name}</div>
                      <div className="text-xs text-gray-600 leading-tight">{city.region}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}