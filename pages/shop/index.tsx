// import Image from "next/image";
import Link from "next/link";
import db from "@/public/db.json";

export default function Shop() {
  return (
    <div className="wrapper mt-24 flex flex-col items-center gap-y-12 sm:justify-evenly md:flex-row">
      {db.posters.map((poster) => (
        <Link key={poster.id} href={poster.href}>
          <img
            width={1280}
            height={720}
            alt={poster.alt}
            // src={poster.src}
            src={`/shop-demo${poster.src}`}
            className="w-88 rounded-2xl bg-sky-200"
          />
        </Link>
      ))}
    </div>
  );
}
