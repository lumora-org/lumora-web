import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full border-b py-4">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-4">
        <div className="text-lg font-semibold">App</div>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
