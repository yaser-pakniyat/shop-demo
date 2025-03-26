import Link from "next/link";
import styles from "./Header.module.css";
import ThemeButton from "../theme-button/ThemeButton";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Header() {
  const theme = useSelector((store: RootState) => store.global.theme);
  return (
    <header
      className={`${styles.header} ${theme == "dark" ? styles.dark : ""}`}
    >
      {/* <button>Theme Toggle Button</button> */}

      <ThemeButton />

      <nav>
        <ul className={styles.navigationList}>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/technologies">Technologies</Link>
          </li>
          <li>
            <Link href="/feature">Feature</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
