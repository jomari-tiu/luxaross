"use client";

import { BoxLogo } from "@/public/assets/images";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "./data";
import Text from "../Text";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <section className="w-full mx-auto  fixed top-0 left-0 right-0 z-50 bg-foreground">
      <nav className=" flex items-center relative justify-between w-[90%] mx-auto py-2">
        <figure className="w-10 h-10">
          <Image src={BoxLogo} alt="Box Logo" width={100} height={100} />
        </figure>

        <ul className=" lg:flex hidden items-center gap-10 text-subtle">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <Text
                  size="caption"
                  className="hover:text-accent transition-all duration-300"
                >
                  {link.label}
                </Text>
              </Link>
            </li>
          ))}
        </ul>

        <MobileMenu />
      </nav>
    </section>
  );
}
