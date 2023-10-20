import Link from "next/link";
import Button from "./Button";

export default function DesktopNavbar() {
  return (
    <nav className="bg-neutral-950 text-white px-2 py-4">
      <div className="container flex justify-between">
        <div className="flex-auto flex justify-evenly">
          <Link href="/">
            <Button title="Home" bgColor="bg-stone-700" />
          </Link>
          <Link href="/about">
            <Button title="About" bgColor="bg-stone-700" className="ml-4" />
          </Link>
          <Link href="/team">
            <Button title="Team" bgColor="bg-stone-700" className="ml-4" />
          </Link>
          <Link href="/product">
            <Button title="Product" bgColor="bg-stone-700" className="ml-4" />
          </Link>
          <Link href="/samples">
            <Button title="Samples" bgColor="bg-stone-700" className="ml-4" />
          </Link>
          <Link href="/order">
            <Button
              title="Ordering Our Product"
              bgColor="bg-stone-700"
              className="ml-4"
            />
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
