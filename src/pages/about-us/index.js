import Layout from '@layout/Layout';
import React from 'react';
import AboutUsFooter from '@layout/Footer/AboutUsFooter';
import Navbar from '@layout/Header/Navbar';
import OurMission from '@components/AboutUS/OurMission';
import Values from '@components/AboutUS/Values';
import Workings from '@components/AboutUS/Workings';
import Experience from '@components/AboutUS/Experience';
import WhatWeDo from '@components/AboutUS/WhatWeDo';
import HeroSection from '@components/AboutUS/HeroSection';
import StatisticsOverview from '@components/AboutUS/StatisticsOverview';
import Overview from '@components/AboutUS/Overview';
import Evolution from '@components/AboutUS/Evolution';
import OurTeam from '@components/AboutUS/OurTeam';

const AboutUs = () => {
  return (
    <Layout>
      <Navbar insurance />
      <HeroSection />
      <WhatWeDo />
      <StatisticsOverview />
      <OurMission />
      <Values />
      <Evolution />
      <Workings />
      <OurTeam />
      <Experience />
      <Overview />
      <AboutUsFooter />
    </Layout>
  );
};

export default AboutUs;
