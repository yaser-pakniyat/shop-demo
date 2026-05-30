import TabletsCarousel from "../Carousel/responsive-carousel/TabletsCarousel";
import TabletsFetch from "@/components/tablets-fetch/tabletsFetch";

export default function TabletStore() {
  return (
    <div className="pages-wrapper">
      <div className="block md:hidden">
        <TabletsCarousel />
      </div>
      <div>
        <TabletsFetch />
      </div>
    </div>
  );
}
