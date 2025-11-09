"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "./data";
import Link from "next/link";
import Text from "../Text";
import { IoMdClose } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window?.innerWidth);

  const shouldShowMobileMenu = isMobileMenuOpen && windowWidth <= 1024;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth > 1024) {
    return null;
  }

  return (
    <>
      {!shouldShowMobileMenu && (
        <CiMenuKebab
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-3xl text-accent lg:hidden"
        />
      )}
      {shouldShowMobileMenu && (
        <div className="fixed top-0 left-0 w-full h-screen bg-foreground/70 flex justify-center items-center">
          <IoMdClose
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-5xl text-accent absolute top-4 right-4 cursor-pointer"
          />
          <ul className="space-y-4 text-subtle px-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Text
                    size="heading"
                    className="hover:text-accent transition-all duration-300 border-b-4 border-accent pb-2"
                  >
                    {link.label}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
