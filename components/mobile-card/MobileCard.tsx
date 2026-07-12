// import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/productTypes";

export default function MobileCard({
  id,
  productName,
  address,
  price,
}: Product) {
  return (
    <div className="cardWrapper group">
      <Link href={`/shop/mobilestore/${productName}`}>
        <img
          alt={productName}
          src={address}
          width={1280}
          height={720}
          // priority
          className="transition-transform duration-[2000ms] ease-linear group-hover:scale-110"
        />
        <h2 className="flex justify-center">{productName}</h2>
      </Link>
      <Link
        className="my-3 cursor-pointer rounded border bg-gray-300 px-3 py-1 hover:scale-90 hover:bg-green-500 hover:font-bold hover:text-white"
        href={`/shop/mobilestore/${productName}`}
      >
        more info
      </Link>
    </div>
  );
}
