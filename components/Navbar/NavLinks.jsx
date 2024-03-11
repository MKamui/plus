"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavLinks = ({ handleMenu }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const pathname = usePathname();
  const links = [
    {
      name: "Home",
      route: "/content",
    },
    {
      name: "Categories",
      route: "/content",
    },
  ];
  return (
    <>
      {links.map((link, index) => (
        <div
          key={index}
          className={` w-full h-fit xl:h-full xl:w-fit relative group/menu first-submenu `}
        >
          <div className="w-full xl:h-full xl:w-fit ">
            <span
              className={`pl-[35px] h-full whitespace-nowrap xl:pl-0 xl:hover:bg-transparent xl:hover:text-inherit flex items-center xl:h-full gap-2 cursor-pointer hover:underline-offset-[6px] xl:hover:underline decoration-2 text-sm md:text-lg lg:text-xl xl:text-2xl 3xl:text-5xl 4xl:text-6xl 5xl:text-7xl 4xl:gap-5 ${
                pathname === link.route && " font-semibold xl:text-inherit"
              }`}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.route ? (
                <Link
                  href={link.route}
                  className="flex h-fit py-[18px] xl:py-0 xl:h-full items-center"
                  onClick={() => {
                    handleMenu();
                  }}
                >
                  {link.name}
                </Link>
              ) : (
                <>{link.name}</>
              )}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
