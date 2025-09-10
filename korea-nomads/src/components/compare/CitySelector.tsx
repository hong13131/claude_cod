'use client';

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { City } from '@/lib/types';
import { cities } from '@/lib/data';

interface CitySelectorProps {
  selectedCity: City | null;
  onCitySelect: (city: City) => void;
  onCityRemove: () => void;
  placeholder: string;
}

export default function CitySelector({ 
  selectedCity, 
  onCitySelect, 
  onCityRemove, 
  placeholder 
}: CitySelectorProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = cities.filter(city =>
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.region.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCities(filtered.slice(0, 10));
      setIsOpen(true);
    } else {
      setFilteredCities([]);
      setIsOpen(false);
    }
  }, [searchQuery]);

  const handleCitySelect = (city: City) => {
    onCitySelect(city);
    setSearchQuery('');
    setIsOpen(false);
  };

  const handleCityRemove = () => {
    onCityRemove();
    setSearchQuery('');
  };

  return (
    <Card>
      <CardContent className="p-6">
        {selectedCity ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">{selectedCity.emoji}</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{selectedCity.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{selectedCity.region}</p>
            <button
              onClick={handleCityRemove}
              className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 text-sm"
            >
              <X className="w-4 h-4" />
              제거
            </button>
          </div>
        ) : (
          <div className="text-center relative">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{placeholder}</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="도시를 검색하세요..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery && setIsOpen(true)}
              />
              
              {isOpen && filteredCities.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {filteredCities.map((city) => (
                    <div
                      key={city.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                      onClick={() => handleCitySelect(city)}
                    >
                      <span className="text-lg">{city.emoji}</span>
                      <div>
                        <div className="font-medium">{city.name}</div>
                        <div className="text-sm text-gray-500">{city.region}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}