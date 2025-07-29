import MobileCard from "@/components/mobile-card/MobileCard";
import { fetchMobiles } from "@/redux/slices/mobilesSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MobilesCarousel() {
  const mobiles = useSelector((store: RootState) => store.mobiles.mobiles);
  <div></div>;
}
