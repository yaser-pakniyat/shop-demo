import MobilesCarousel from "@/components/Carousel/responsive-carousel/MobilesCarousel";
import MobilesFetch from "@/components/mobiles-fetch/mobilsFetch";

export default function MobileStore() {
  return (
    <div className="wrapper">
      <div>
        <MobilesCarousel />
      </div>
      <div>
        <MobilesFetch />
      </div>
    </div>
  );
}
