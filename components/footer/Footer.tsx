import { RootState } from "@/redux/store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSelector } from "react-redux";
import db from "@/public/db.json";

export default function Footer() {
  const theme = useSelector((store: RootState) => store.global.theme);
  return (
    <footer
      className={`flex w-full flex-col gap-y-4 pt-8 transition-colors duration-1000 ease-out ${theme === "dark" ? "bg-stone-900 text-stone-300" : "bg-stone-300 text-stone-900"}`}
    >
      {/* address & phone section + social section start */}
      <div className="w-full px-8">
        {/* address and phone section start */}
        <div className="my-2 rounded-2xl border border-y-8 border-gray-400 p-4">
          <address className="flex flex-col justify-between gap-y-8 px-3 md:flex-row">
            <div>
              <p className="font-bold not-italic">Address:</p>
              <p>No.123</p>
              <p>example Street</p>
              <p>city, country</p>
            </div>
            <div>
              <p className="font-bold not-italic">Inquiries:</p>
              <p>
                Email:
                <a aria-label="Email" href="mailto:">
                  example@example.com
                </a>
              </p>

              <p>
                Phone:
                <a aria-label="Tel" href="tel:">
                  +98 (21) 12345678
                </a>
              </p>
            </div>
          </address>
        </div>
        {/* address and phone section end */}

        {/* social media section start*/}
        <div className="flex justify-center space-x-4 rounded-2xl bg-gray-400 py-2">
          {db.social.map((social) => (
            <div key={social.id} className="hover:scale-110">
              <a aria-label={social.name} href={social.address}>
                <Icon icon={social.icon} width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
        {/* social media section end*/}
      </div>
      {/* address & phone section + social section end */}

      {/* CopyRight section start */}
      <div
        className={`transition-colors duration-1000 ease-out ${
          theme === "dark"
            ? "bg-gray-950 text-gray-300"
            : "bg-gray-400 text-gray-950"
        } `}
      >
        <p className="text-center text-xs">
          ©2025 companyName. All right reserved.
        </p>
      </div>
      {/* CopyRight section end */}
    </footer>
  );
}
