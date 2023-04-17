import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex gap-6 bg-white p-4">
      <Link className="underline" href="/">
        Home
      </Link>
      <Link className="underline" href="/server">
        Server Side
      </Link>
      <Link className="underline" href="/client">
        Client Side
      </Link>
    </nav>
  );
};
