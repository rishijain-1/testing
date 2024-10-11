import Layout from '@layout/Layout';
import Navbar from '@layout/Header/Navbar';
import Footer from '@layout/Footer/Footer';
import LineSlider from '@components/Home/LineSlider';
import HeroSection from '@components/Home/HeroSection';
import DigitalLegacyProtection from '@components/Home/DigitalLegacyProtection';
import WillAndAssetOverview from '@components/Home/WillAndAssetOverview';
import GettingStartedGuide from '@components/Home/GettingStartedGuide';
import MultiPlatformAlerts from '@components/Home/MultiPlatformAlerts';
import LegacyManagementStats from '@components/Home/LegacyManagementStats';
import Pricing from '@components/Home/Pricing';
import CallToActionBanner from '@components/Home/CallToActionBanner';
import FaqSection from '@components/Home/FaqSection';
import CustomerFeeback from '@components/Home/CustomerFeedback';

export default function Home() {
  return (
    <Layout>
      <Navbar insurance />
      <HeroSection />
      <DigitalLegacyProtection />
      <WillAndAssetOverview insurance />
      <LineSlider />
      <GettingStartedGuide />
      <MultiPlatformAlerts />
      <CustomerFeeback />
      <LegacyManagementStats />
      <Pricing />
      <FaqSection />
      <CallToActionBanner />
      <Footer />
    </Layout>
  );
}
