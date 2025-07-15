import Image from "next/image";
import Link from "next/link";
import { Mobile } from "@/types/mobileTypes";

const cardWrapper =
  "group col-span-12 flex max-w-96 cursor-pointer flex-col items-center overflow-hidden border border-gray-200 sm:col-span-6 md:col-span-6 lg:col-span-4";

export default function MobileCard() {
  return <div className={cardWrapper}></div>;
}
