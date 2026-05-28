import TabletsCarousel from "../Carousel/responsive-carousel/TabletsCarousel";
import TabletsFetch from "@/components/tablets-fetch/tabletsFetch";

export default function TabletStore() {
  return (
    <div>
      <div>
        <TabletsCarousel />
      </div>
      <div>
        <TabletsFetch />
      </div>
    </div>
  );
}
