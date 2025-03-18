import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex h-12 w-full items-center justify-between bg-amber-400 px-12 text-lg font-semibold text-red-900">
      <button>Theme Toggle Button</button>
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
