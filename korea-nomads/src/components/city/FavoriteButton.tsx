'use client';

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FavoriteButtonProps {
  cityId: string;
  userId?: string;
  className?: string;
  size?: 'sm' | 'lg';
}

export default function FavoriteButton({ cityId, userId, className = '', size = 'lg' }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!userId) return;
    
    const savedFavorites = localStorage.getItem(`favorites_${userId}`);
    if (savedFavorites) {
      const favorites = JSON.parse(savedFavorites);
      setIsFavorite(favorites.includes(cityId));
    }
  }, [cityId, userId]);

  const toggleFavorite = () => {
    if (!userId) {
      // If user is not logged in, redirect to login
      window.location.href = '/login';
      return;
    }

    setIsAnimating(true);
    
    const savedFavorites = localStorage.getItem(`favorites_${userId}`);
    const currentFavorites = savedFavorites ? JSON.parse(savedFavorites) : [];
    
    const newFavorites = isFavorite
      ? currentFavorites.filter((id: string) => id !== cityId)
      : [...currentFavorites, cityId];
    
    localStorage.setItem(`favorites_${userId}`, JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
    
    // Reset animation after a short delay
    setTimeout(() => setIsAnimating(false), 300);
  };

  const buttonSize = size === 'sm' ? 'sm' : 'lg';
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <Button
      variant={isFavorite ? "default" : "outline"}
      size={buttonSize}
      onClick={toggleFavorite}
      className={`
        ${isFavorite 
          ? 'bg-red-500 hover:bg-red-600 text-white border-red-500' 
          : 'border-gray-300 text-gray-700 hover:border-red-300 hover:text-red-600'
        }
        ${isAnimating ? 'scale-110' : 'scale-100'}
        transition-all duration-300
        ${className}
      `}
    >
      <Heart 
        className={`
          ${iconSize} mr-2 
          ${isFavorite ? 'fill-current' : ''}
          ${isAnimating ? 'animate-pulse' : ''}
        `} 
      />
      {isFavorite ? '즐겨찾기 해제' : '즐겨찾기'}
    </Button>
  );
}