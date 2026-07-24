import JsonLd from "@/components/JsonLd";
import HeroBlock from "@/components/HeroBlock";
import KeywordIntro from "@/components/KeywordIntro";
import FactsStrip from "@/components/FactsStrip";
import WhySection from "@/components/WhySection";
import BentoCollections from "@/components/BentoCollections";
import CompareTable from "@/components/CompareTable";
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
      <FactsStrip />
      <WhySection />
      <BentoCollections />
      <CompareTable />
      <CtaBand
        id="register"
        title="Register for The Enclave Milton Townhomes — floor plans & pricing"
      />
      <GeoLocationHub />
      <FaqSection />
      <CtaBand
        id="register-footer"
        title="Get The Enclave Milton Sundial Homes floor plans for all 15 models"
      />
    </>
  );
}
