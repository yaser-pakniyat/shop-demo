import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import styles from "./Hero.module.css";
import { Baumans } from "next/font/google";

const baumans = Baumans({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  const theme = useSelector((store: RootState) => store.global.theme);
  return (
    <div
      className={`${styles.heroWrapper} ${theme === "dark" ? "from-slate-950 to-stone-900" : "from-teal-500 to-gray-50"}`}
    >
      <div className={styles.contentWrapper}>
        <h1 className={`${baumans.className} ${styles.heading}`}>
          Choose your device
        </h1>
        <p className={styles.paragraph}>
          You could find your device easily with the best price
        </p>
        <Link
          href="/shop"
          className={`${styles.link} ${theme === "dark" ? "bg-amber-500" : "bg-amber-400"}`}
          draggable={false}
        >
          Discover Shop
        </Link>
      </div>
    </div>
  );
}
