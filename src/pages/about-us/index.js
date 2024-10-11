import Layout from '@layout/Layout';
import React from 'react';
import AboutUsFooter from '@layout/Footer/AboutUsFooter';
import Navbar from '@layout/Header/Navbar';
import OurMission from '@components/AboutUS/OurMission';
import Values from '@components/AboutUS/Values';

const AboutUs = () => {
  return (
    <Layout>
      <Navbar />
      <OurMission />
      <Values />
      <AboutUsFooter />
    </Layout>
  );
};

export default AboutUs;
