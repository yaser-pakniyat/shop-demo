import Image from "next/image";
import Link from "next/link";
import { Tablet } from "@/types/tabletTypes";

export default function TabletCard({ id, tabletName, address, price }: Tablet) {
  return (
    <div className="cardWrapper group">
      <Link href={`/shop/tabletstore/${tabletName}`}>
        <Image
          alt={tabletName}
          src={address}
          width={1280}
          height={720}
          priority
          className="transition-transform duration-[2000ms] ease-linear group-hover:scale-110"
        />
        <h2 className="flex justify-center">{tabletName}</h2>
      </Link>

      <Link
        className="my-3 cursor-pointer rounded border bg-gray-300 px-3 py-1 hover:scale-90 hover:bg-green-500 hover:font-bold hover:text-white"
        href={`/shop/tabletstore/${tabletName}`}
      >
        more info
      </Link>
    </div>
  );
}
