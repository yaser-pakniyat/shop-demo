import MobileCard from "@/components/mobile-card/MobileCard";
import { fetchProducts } from "@/redux/slices/productsSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MobilesCarousel() {
  const products = useSelector((store: RootState) => store.products.products);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch]);
  return (
    <div>
      <Swiper slidesPerView={1.5} spaceBetween={16}>
        {products.slice(0, 12).map((product) => (
          <SwiperSlide key={product.id}>
            <MobileCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
