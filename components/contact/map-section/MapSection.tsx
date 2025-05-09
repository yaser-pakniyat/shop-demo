import { RootState } from "@/redux/store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSelector } from "react-redux";

export default function MapSection() {
  const theme = useSelector((store: RootState) => store.global.theme);
  return (
    <div
      className={`col-span-2 bg-gray-50 text-gray-700 transition duration-1000 ease-out md:col-span-1
        ${theme === "dark" ? "darkWrapper" : ""}`}
    >
      <div className="h-24 ps-3">
        <h2 className="mt-8 font-bold">Find Us:</h2>
        <p className="my-3">Our location is available on the map.</p>
      </div>
      <div
        className={`grid h-[590px] w-full gap-x-2 rounded-3xl bg-sky-300 p-4 transition duration-1000 ease-out sm:grid-cols-1
          ${theme === "dark" ? "bg-sky-800" : "bg-sky-100"}`}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414696.5295978688!2d50.75673979865266!3d35.70612959789037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1746034399011!5m2!1sen!2s"
          width={400}
          height={600}
          className="mx-auto mt-5 h-96 w-full rounded border-2 border-sky-400 sm:h-[394px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer"
        ></iframe>
        <address className="space-y-4">
          <div className="flex items-center gap-x-1">
            <Icon
              icon="mdi:address-marker"
              width="28"
              height="28"
              className="text-red-700"
            />
            <p>No.123 example Street city, country</p>
          </div>
          <div className="flex items-center gap-x-1">
            <Icon
              icon="clarity:email-solid"
              width="28"
              height="28"
              className="text-neutral-500"
            />
            <a aria-label="Email" href="mailto:">
              example@example.com
            </a>
          </div>
          <div className="flex items-center gap-x-1">
            <Icon
              icon="f7:phone-fill"
              width="28"
              height="28"
              className="text-green-600"
            />
            <a aria-label="Tel" href="tel:">
              +98 (21) 12345678
            </a>
          </div>
        </address>
      </div>
    </div>
  );
}