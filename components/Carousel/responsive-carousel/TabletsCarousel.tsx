import TabletCard from "@/components/tablet-card/TabletCard";
import { fetchProducts } from "@/redux/slices/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function TabletsCarousel() {
  const products = useSelector((store: RootState) => store.products.products);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch]);
  return (
    <div>

    </div>
  );
}
