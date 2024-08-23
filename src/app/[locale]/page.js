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
    <div className="w-full flex flex-col items-center">
      <HomePageMainSection />
      <div className="max-w-[1500px]">
        <OfferSection sectionKey="Home" images={images} />
      </div>

      <CardSlider />
      <Contact />
    </div>
  );
}
