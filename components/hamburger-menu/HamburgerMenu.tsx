import { closeOffcanvas } from "@/redux/slices/offCanvas";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import db from "@/public/db.json";
import { RootState } from "@/redux/store";
import Menu from "@/types/menu";
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  const isOpen = useSelector((store: RootState) => store.offcanvas.isOpen);
  const theme = useSelector((store: RootState) => store.global.theme);
  const dispatch = useDispatch();
  const CloseOffCanvasHandler = () => {
    dispatch(closeOffcanvas());
  };
  return (
    <>
      {isOpen && (
        <div
          className={`${styles.overLay} ${theme === "dark" ? "bg-white/70" : "bg-black/70"}`}
          onClick={CloseOffCanvasHandler}
        ></div>
      )}
      <aside
        className={`${styles.aside} ${isOpen ? "translate-x-0" : "translate-x-full"} ${theme === "dark" ? "bg-stone-700" : "bg-green-800"}`}
      >
        {/* close button start */}
        <div className="pt-3 pl-3">
          <Icon
            icon="line-md:close"
            width="26"
            height="26"
            className={styles.icon}
            onClick={CloseOffCanvasHandler}
          />
        </div>
        {/* close button end */}

        {/* map on menu start */}
        <nav>
          <ul className="">
            {db.menu.map((menu: Menu) => (
              <li key={menu.id} className={styles.list}>
                <Link
                  className={styles.link}
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
    </>
  );
}
