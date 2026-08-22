import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Hero() {
  const theme = useSelector((store: RootState) => store.global.theme);
  return (
    <div>
      <div>
        <h1>Choose your device</h1>
        <p>You could find your device easily with the best price</p>
        <Link href="/shop" draggable={false}>
          Discover Shop
        </Link>
      </div>
    </div>
  );
}
