import Contact from "@components/Contact";
import HomePageMainSection from "@components/HomePageMainSection";
import CardSlider from "@components/CardSlider";
import OfferSection from "@components/OfferSection";

export default function Home() {
  const images = [
    { src: "/images/HomePage3.jpg", alt: "HomePage3" },
    { src: "/images/HomePage3.jpg", alt: "HomePage3" },
  ];
  return (
    <div>
      <HomePageMainSection />
      <OfferSection sectionKey="Home" images={images} />
      <CardSlider />
      <Contact />
    </div>
  );
}
