"use client";
import { navLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={240}
            height={180}
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
          <ul className="sidebar-nav_elements">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = link.route === pathname;
              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive ? "bg-purple-gradient text-white" : "text-grey"
                  }`}
                >
                  <Link href={link.route} className="sidebar-link">
                    <Image
                      src={link.icon}
                      alt="link-icon"
                      width={18}
                      height={18}
                      className={`${isActive && "brightness-200"}`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="sidebar-nav_elements">
            {navLinks.slice(6).map((link) => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive ? "bg-purple-gradient text-white" : "text-grey"
                  }`}
                >
                  <Link href={link.route} className="sidebar-link">
                    <Image
                      src={link.icon}
                      alt="link-icon"
                      width={18}
                      height={18}
                      className={`${isActive && "brightness-200"}`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl='/' showName />
              </li>
          </ul>
          {/* user profile button */}

          </SignedIn>

          <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>


          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;