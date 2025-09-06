import Image from "next/image";
import Link from "next/link";
import mobilesPoster from "../../public/posters/mobiles.svg";

export default function Shop() {
  return (
    <div>
      <Link href="/shop/mobilestore">
        <Image width={1280} height={720} alt="mobiles" src={mobilesPoster} />
      </Link>
    </div>
  );
}
