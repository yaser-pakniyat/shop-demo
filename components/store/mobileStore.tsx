import MobilesCarousel from "@/components/Carousel/responsive-carousel/MobilesCarousel";
import MobilesFetch from "@/components/mobiles-fetch/MobilesFetch";

export default function MobileStore() {
  return (
    <div className="pages-wrapper">
      <div className="block md:hidden">
        <MobilesCarousel />
      </div>
      <div className="hidden md:block">
        <MobilesFetch />
      </div>
    </div>
  );
}
