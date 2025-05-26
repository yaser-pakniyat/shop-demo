import Link from "next/link";
import styles from "./Header.module.css";
import ThemeButton from "../theme-button/ThemeButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
import { Icon } from "@iconify/react/dist/iconify.js";
import { openOffcanvas } from "@/redux/slices/offCanvas";
import db from "@/public/db.json";

export default function Header() {
  const theme = useSelector((store: RootState) => store.global.theme);
  const dispatch = useDispatch();
  const offcanvasOpenHandler = () => {
    dispatch(openOffcanvas());
  };
  return (
    <header
      className={`${styles.header} ${theme == "dark" ? styles.dark : ""}`}
    >
      <ThemeButton />
      <HamburgerMenu />

      {/* Hamburger Menu Icon start */}
      <Icon
        icon="icon-park-outline:hamburger-button"
        width="48"
        height="48"
        className="flex cursor-pointer md:hidden"
        onClick={offcanvasOpenHandler}
      />
      {/* Hamburger Menu Icon end */}

      <nav className="hidden md:flex">
        <ul className={styles.navigationList}>
          {db.menu
            .slice()
            .reverse()
            .map((menu) => (
              <li key={menu.id}>
                <Link href={menu.href}>{menu.linkName}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
