import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <div>Theme Toggle Button</div>
      <ul>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
        <li>
          <Link href="/Technologies">Technologies</Link>
        </li>
        <li>
          <Link href="/Feature">Feature</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
