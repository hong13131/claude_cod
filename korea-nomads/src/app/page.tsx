import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import FilterSection from '@/components/sections/FilterSection';
import FeaturedCities from '@/components/sections/FeaturedCities';
import TrendingSection from '@/components/sections/TrendingSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FilterSection />
      <FeaturedCities />
      <TrendingSection />
      <CTASection />
    </>
  );
}