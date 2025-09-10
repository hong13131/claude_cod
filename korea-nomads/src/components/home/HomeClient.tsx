'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import HeroSection from '@/components/sections/HeroSection';
import FilterSection from '@/components/sections/FilterSection';
import FeaturedCities from '@/components/sections/FeaturedCities';
import TrendingSection from '@/components/sections/TrendingSection';
import CTASection from '@/components/sections/CTASection';
import { cities, filterCities, sortCities } from '@/lib/data';
import { City } from '@/lib/types';

export default function HomeClient() {
  const searchParams = useSearchParams();
  const [filteredCities, setFilteredCities] = useState<City[]>(cities);
  const [hasActiveFilters, setHasActiveFilters] = useState(false);

  // Initialize filters from URL params
  const [filters, setFilters] = useState({
    budget: searchParams.getAll('budget') || [],
    region: searchParams.getAll('region') || [],
    style: searchParams.getAll('style') || [],
  });

  useEffect(() => {
    // Update filters from URL params
    const newFilters = {
      budget: searchParams.getAll('budget') || [],
      region: searchParams.getAll('region') || [],
      style: searchParams.getAll('style') || [],
    };
    
    setFilters(newFilters);
    
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
    setFilters(newFilters);
    
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