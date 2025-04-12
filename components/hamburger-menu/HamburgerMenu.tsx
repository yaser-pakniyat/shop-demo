import { closeOffcanvas } from "@/redux/slices/offCanvas";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import db from "@/db.json";
import { RootState } from "@/redux/store";

interface Menu {
  id: number;
  href: string;
  linkName: string;
}

export default function HamburgerMenu() {
  const isOpen = useSelector((store: RootState) => store.offcanvas.isOpen);
  const theme = useSelector((store: RootState) => store.global.theme);
  const dispatch = useDispatch();
  const CloseOffCanvasHandler = () => {
    dispatch(closeOffcanvas());
  };
  return (
    <aside
      className={`fixed top-0 right-0 z-[60] h-screen w-1/2 transition-transform duration-1500 ${isOpen ? "translate-x-0" : "translate-x-full"} ${theme === "dark" ? "bg-stone-700" : "bg-green-800"} md:translate-x-full`}
    >
      {/* close button start */}
      <div>
        <Icon
          icon="line-md:close"
          width="32"
          height="32"
          className="cursor-pointer hover:scale-105"
          onClick={CloseOffCanvasHandler}
        />
      </div>
      {/* close button end */}

      {/* map on menu start */}
      <nav>
        <ul className="">
          {db.menu.map((menu: Menu) => (
            <li key={menu.id} className="h-12 w-full text-xl hover:bg-blue-950">
              <Link
                className="flex h-full w-full items-center justify-center hover:scale-105"
                href={menu.href}
                onClick={CloseOffCanvasHandler}
              >
                {menu.linkName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* map on menu end */}
    </aside>
  );
}
