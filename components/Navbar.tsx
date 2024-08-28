"use client";

import Link from "next/link";
import { Roboto } from "next/font/google";
import { BedIcon, Link as LinkIcon } from "lucide-react";

const roboto = Roboto({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <header className=" flex justify-between items-center px-10 py-4">
      <div>
        <BedIcon
          absoluteStrokeWidth
          color="white"
          size="50px"
          className="font-black"
        />
      </div>
      <div className=" flex justify-evenly gap-10 border border-slate-600 px-10 py-4 rounded-full w-1/3">
        <Link
          href="/home"
          className={` text-xl font-bold ${roboto.className}`}
          title="Go to Home"
        >
          Home
        </Link>
        <Link
          href="/About"
          className={` text-xl font-bold ${roboto.className}`}
          title="Go to About"
        >
          About
        </Link>
        <Link
          href="/Services"
          className={` text-xl  font-bold ${roboto.className}`}
          title="Go to Services"
        >
          Services
        </Link>
      </div>
      <div>
        <button className="border border-slate-500 px-5 py-2 rounded-none">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Navbar;
