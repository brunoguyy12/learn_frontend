"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/5 p-4 bg-sky-50 flex flex-col justify-center items-center gap-4 ">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`p-2 rounded-lg  w-full text-center text-md font-medium ${
              pathname === link.href
                ? "bg-sky-600 text-white"
                : "hover:bg-slate-300"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="">{children}</div>
    </div>
  );
};

const links = [
  { title: "Home", href: "/Routes" },
  { title: "First", href: "/Routes/First" },
  { title: "Second", href: "/Routes/contact" },
];

export default Layout;
