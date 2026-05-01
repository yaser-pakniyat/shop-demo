import Image from "next/image";
import Link from "next/link";
import mobilesPoster from "../../public/posters/mobiles.svg";
import tabletsPoster from "../../public/posters/tablets.svg";

export default function Shop() {
  return (
    <div className="wrapper mt-24 flex flex-col items-center sm:flex-row sm:justify-evenly">
      <Link href="/shop/mobilestore">
        <Image
          width={1280}
          height={720}
          alt="mobiles"
          src={mobilesPoster}
          className="w-96 rounded-2xl bg-sky-200"
        />
      </Link>
      <Link
        href="/shop/tabletstore"
        className="flex h-32 w-32 items-center justify-center bg-emerald-400 text-white hover:text-black"
      >
        tablet Store
      </Link>
    </div>
  );
}
