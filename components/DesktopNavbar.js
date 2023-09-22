import Link from "next/link";
import Button from "./Button";

export default function DesktopNavbar() {
  return (
    <nav className="bg-neutral-950 text-white px-2 py-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex-1 flex justify-end">
          <Link href="/">
            <Button title="Home" bgColor="bg-stone-700" />
          </Link>
          <Link href="/about">
            <Button title="About" bgColor="bg-stone-700" className="ml-4" />
          </Link>
          <Link href="/products">
            <Button title="Products" bgColor="bg-stone-700" className="ml-4" />
          </Link>
          <Link href="/samples">
            <Button title="Samples" bgColor="bg-stone-700" className="ml-4" />
          </Link>
          <Link href="/references">
            <Button
              title="References"
              bgColor="bg-stone-700"
              className="ml-4"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
