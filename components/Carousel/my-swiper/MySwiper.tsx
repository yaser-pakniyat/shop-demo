import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MySwiper() {
  return (
    <Swiper modules={[]}>
      <SwiperSlide>
        <Image src={} alt="" width={} height={}></Image>
      </SwiperSlide>
    </Swiper>
  );
}
