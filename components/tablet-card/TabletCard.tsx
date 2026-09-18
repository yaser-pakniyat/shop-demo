// import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/productTypes";
import styles from "./TabletCard.module.css";

export default function TabletCard({
  id,
  productName,
  address,
  price,
}: Product) {
  return (
    <div className="cardWrapper group">
      <Link href={`/shop/tabletstore/${productName}`}>
        <img
          alt={productName}
          // src={address}
          src={`/shop-demo${address}`}
          width={1280}
          height={720}
          // priority
          className={styles.image}
        />
        <h2 className="flex justify-center">{productName}</h2>
      </Link>

      <Link
        className={styles.link}
        href={`/shop/tabletstore/${productName}`}
      >
        more info
      </Link>
    </div>
  );
}
