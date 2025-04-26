import { NAVBAR_ITEMS } from "@/lib/constants";
import React from "react";
import NavbarItem from "./NavbarItem";
import EndNavbarSection from "./EndNavbarSection";

const DesktopNavbar = () => {
  return (
    <div className="hidden border-separate border-b bg-background md:block w-full">
      <nav className="container mx-auto flex items-center justify-between px-8">
        <div className="flex h-[64px] min-h-[60px] items-center gap-x-4">
          <div className="flex h-full gap-x-4">
            {NAVBAR_ITEMS.map((item) => (
              <NavbarItem key={item.label} item={item} />
            ))}
          </div>
        </div>
        <EndNavbarSection />
      </nav>
    </div>
  );
};

export default DesktopNavbar;
