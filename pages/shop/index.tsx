import Image from "next/image";
import Link from "next/link";
import mobilesPoster from "../../public/posters/mobiles.svg";

export default function Shop() {
  return (
    <div className="wrapper flex flex-col items-center gap-y-4 sm:flex-row sm:justify-evenly">
      <Link href="/shop/mobilestore">
        <Image
          width={1280}
          height={720}
          alt="mobiles"
          src={mobilesPoster}
          className="w-96 rounded-2xl bg-sky-200"
        />
      </Link>
      <Link href="/shop/tabletstore">tablet Store</Link>
    </div>
  );
}
