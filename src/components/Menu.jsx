"use client";

import React, { useState } from "react";
import { menuItems } from "./data";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  const [collapsedSections, setCollapsedSections] = useState({});

  const toggleSection = (title) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="mt-2 text-lg h-full">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <div
            className=" flex justify-between items-center text-gray-400 font-light my-3 cursor-pointer"
            onClick={() => toggleSection(i.title)}
          >
            <span className="block">{i.title}</span>
            <span className="hidden lg:block">
              {!collapsedSections[i.title] ? "▼" : "▲"}
            </span>
          </div>

          {!collapsedSections[i.title] &&
            i.items.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className="flex justify-start gap-2 items-center p-3 border-b-0 border-gray-300"
              >
                <Image
                  src={item.icon}
                  width={20}
                  height={20}
                  alt={item.label}
                />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
