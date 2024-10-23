import ComapareWithOther from '@components/CompareWhyUs/ComapareWithOther';
import HeroSection from '@components/CompareWhyUs/HeroSection';
import HowItWork from '@components/CompareWhyUs/HowItWork';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import Layout from '@layout/Layout';
import React from 'react';
import FeatureAndPricing from '@components/CompareWhyUs/FeatureAndPricing';

const ConpareWhyUs = () => {
  return (
    <Layout>
      <Navbar insurance />
      <HeroSection />
      <ComapareWithOther />
      <HowItWork />
      <FeatureAndPricing />
      <Footer />
    </Layout>
  );
};

export default ConpareWhyUs;
