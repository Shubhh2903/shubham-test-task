import React from "react";
import Flex from "../../../../lib/atoms/flex";
import HeroSection from "../components/HeroSection";
import LatestProductionSection from "../components/LatestProductionSection";
import ShopbyCategory from "../components/ShopByCategory";
import FavouritesSection from "../components/FavouritesSection";
import PromoSection from "../components/PromoSection";
import FeatureSection from "../components/FeatureSection";
import AboutSection from "../components/AboutSection";
import TestimonialSection from "../components/TestimonialSection";
import MackerSection from "../components/MackerSection";
import NewsSection from "../components/NewsSection";
import FooterSection from "../components/FooterSection";

const MainLandingPage = () => {
  return (
    <Flex direction="column">
      <HeroSection />
      <LatestProductionSection />
      <ShopbyCategory />
      <FeatureSection />
      <FavouritesSection />
      <PromoSection />
      <AboutSection />
      <TestimonialSection />
      <MackerSection />
      <NewsSection />
      <FooterSection />
    </Flex>
  );
};

export default MainLandingPage;
