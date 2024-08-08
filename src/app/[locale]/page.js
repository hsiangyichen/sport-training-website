import Contact from "@components/Contact";
import HomePageMainSection from "@components/HomePageMainSection";
import CardSlider from "@components/CardSlider";
import HomeOfferSection from "@components/HomeOfferSection";

export default function Home() {
  return (
    <div>
      <HomePageMainSection />
      <HomeOfferSection />
      <CardSlider />
      <Contact />
    </div>
  );
}
