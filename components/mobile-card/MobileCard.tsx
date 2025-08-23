import Image from "next/image";
import Link from "next/link";
import { Mobile } from "@/types/mobileTypes";

const cardWrapper =
  "group col-span-12 flex max-w-96 cursor-pointer flex-col items-center overflow-hidden border border-gray-200 sm:col-span-6 md:col-span-6 lg:col-span-4";

export default function MobileCard({ id, mobileName, address, price }: Mobile) {
  return (
    <div className={cardWrapper}>
      <Link href={`/shop/mobilestore/${mobileName}`}>
        <Image
          alt={mobileName}
          src={address}
          width={1280}
          height={720}
          priority
          className="transition-transform duration-[2000ms] ease-linear group-hover:scale-110"
        />
        <h2 className="flex justify-center">{mobileName}</h2>
      </Link>
      <Link
        className="my-3 cursor-pointer rounded border bg-gray-300 px-3 py-1 hover:scale-90 hover:bg-green-500 hover:font-bold hover:text-white"
        href={`/shop/mobilestore/${mobileName}`}
      >
        more info
      </Link>
    </div>
  );
}