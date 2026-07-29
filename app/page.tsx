import JsonLd from "@/components/JsonLd";
import HeroBlock from "@/components/HeroBlock";
import KeywordIntro from "@/components/KeywordIntro";
import WhySection from "@/components/WhySection";
import BentoCollections from "@/components/BentoCollections";
import CompareTable from "@/components/CompareTable";
import FeaturesAmenities from "@/components/FeaturesAmenities";
import CtaBand from "@/components/CtaBand";
import GeoLocationHub from "@/components/GeoLocationHub";
import FaqSection from "@/components/FaqSection";
import { homepageGraph } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageGraph()} />
      <HeroBlock />
      <KeywordIntro />
      <WhySection />
      <BentoCollections />
      <CompareTable />
      <FeaturesAmenities />
      <CtaBand
        id="register-mid"
        title="Register for The Enclave Milton price list & floor plans"
      />
      <GeoLocationHub />
      <FaqSection />
      <CtaBand
        id="register-footer"
        title="Get The Enclave Milton Sundial Homes price list & floor plans"
        variant="light"
      />
    </>
  );
}
