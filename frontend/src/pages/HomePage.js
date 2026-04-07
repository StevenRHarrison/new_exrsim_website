import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import SectorsOverview from '../components/SectorsOverview';
import FeaturesOverview from '../components/FeaturesOverview';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <SectorsOverview />
      <FeaturesOverview />
      <CTASection />
    </div>
  );
};

export default HomePage;