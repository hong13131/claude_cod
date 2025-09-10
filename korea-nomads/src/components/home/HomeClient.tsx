'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import HeroSection from '@/components/sections/HeroSection';
import FilterSection from '@/components/sections/FilterSection';
import FeaturedCities from '@/components/sections/FeaturedCities';
import TrendingSection from '@/components/sections/TrendingSection';
import CTASection from '@/components/sections/CTASection';
import { cities, filterCities, sortCities } from '@/lib/data';
import { City } from '@/lib/types';

function HomeContent() {
  const searchParams = useSearchParams();
  const [filteredCities, setFilteredCities] = useState<City[]>(cities);
  const [hasActiveFilters, setHasActiveFilters] = useState(false);

  useEffect(() => {
    // Update filters from URL params
    const newFilters = {
      budget: searchParams.getAll('budget') || [],
      region: searchParams.getAll('region') || [],
      style: searchParams.getAll('style') || [],
    };
    
    // Check if any filters are active
    const hasFilters = newFilters.budget.length > 0 || 
                      newFilters.region.length > 0 || 
                      newFilters.style.length > 0;
    
    setHasActiveFilters(hasFilters);
    
    // Apply filters
    if (hasFilters) {
      const filtered = filterCities(cities, newFilters);
      const sorted = sortCities(filtered, 'popularity');
      setFilteredCities(sorted);
    } else {
      setFilteredCities(cities);
    }
  }, [searchParams]);

  const handleFilterChange = (newFilters: {
    budget: string[];
    region: string[];
    style: string[];
  }) => {
    const hasFilters = newFilters.budget.length > 0 || 
                      newFilters.region.length > 0 || 
                      newFilters.style.length > 0;
    
    setHasActiveFilters(hasFilters);
    
    if (hasFilters) {
      const filtered = filterCities(cities, newFilters);
      const sorted = sortCities(filtered, 'popularity');
      setFilteredCities(sorted);
    } else {
      setFilteredCities(cities);
    }
  };

  return (
    <>
      <HeroSection />
      <FilterSection onFilterChange={handleFilterChange} />
      <FeaturedCities 
        filteredCities={filteredCities}
        showAllCities={hasActiveFilters}
      />
      {!hasActiveFilters && (
        <>
          <TrendingSection />
          <CTASection />
        </>
      )}
    </>
  );
}

export default function HomeClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50">
        <div className="animate-pulse">
          <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="h-12 bg-gray-200 rounded mx-auto mb-6 max-w-2xl" />
              <div className="h-6 bg-gray-200 rounded mx-auto mb-8 max-w-lg" />
            </div>
          </div>
        </div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}