import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MobilesCarousel() {
  const mobiles = useSelector((store: RootState) => store.mobiles.mobiles);
  <div></div>;
}
