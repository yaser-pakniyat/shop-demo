import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Hero() {
  const theme = useSelector((store: RootState) => store.global.theme);
  return (
    <div className="h-dvh w-full bg-linear-to-b transition-colors duration-1000 ease-linear selection:bg-transparent">
      <div className="mt-12 flex h-60 flex-col items-center justify-between pt-18">
        <h1 className="text-center text-4xl font-bold sm:text-6xl md:text-7xl 2xl:text-9xl">
          Choose your device
        </h1>
        <p className="pt-6 text-center text-xs sm:text-xl md:text-2xl 2xl:text-4xl">
          You could find your device easily with the best price
        </p>
        <Link
          href="/shop"
          className="mt-12 w-48 cursor-pointer rounded-4xl px-8 py-6 text-center font-bold text-shadow-green-400 hover:shadow-lg hover:shadow-amber-300 hover:text-shadow-2xs"
          draggable={false}
        >
          Discover Shop
        </Link>
      </div>
    </div>
  );
}
