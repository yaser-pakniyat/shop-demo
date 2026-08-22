import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div>
        <h1>Choose your device</h1>
        <p>You could find your device easily with the best price</p>
        <Link href="/shop" draggable={false}>
          Discover Shop
        </Link>
      </div>
    </div>
  );
}
