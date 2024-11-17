"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constant";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex flex-row gap-5">
        <SignedIn>
        <UserButton afterSignOutUrl="/"/>

        <Sheet>
          <SheetTrigger>
            <Image
            src='/assets/icons/menu.svg'
            alt="menu"
            width={18}
            height={18}
            />
          </SheetTrigger>
          <SheetContent>
          
          <SheetTitle>


              <Link href="/">
                <Image
                  src="/assets/images/logo-text.svg"
                  alt="logo"
                  width={180}
                  height={28}
                />
              </Link>
          </SheetTitle>
       
           

              <ul className="header-nav_elements">
            {navLinks.map((link) => {
              const isActive = link.route === pathname;
              return (
                <li
                  key={link.route}
                  className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700 cursor-pointer`}
                >
                  <Link href={link.route} className="sidebar-link">
                    <Image
                      src={link.icon}
                      alt="link-icon"
                      width={18}
                      height={18}
                      
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
           
          </SheetContent>
        </Sheet>

        </SignedIn>
      </nav>
    </header>
  );
};

export default MobileNav;
