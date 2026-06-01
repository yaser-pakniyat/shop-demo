import Image from "next/image";
import Link from "next/link";
import { posters } from "@/public/db.json";

export default function Shop() {
  return (
    <div className="wrapper mt-24 flex flex-col items-center sm:flex-row sm:justify-evenly">
      {posters.map((poster) => (
        <Link key={poster.id} href={poster.href}>
          <Image
            width={1280}
            height={720}
            alt={poster.alt}
            src={poster.src}
            className="w-96 rounded-2xl bg-sky-200"
          />
        </Link>
      ))}
    </div>
  );
}
