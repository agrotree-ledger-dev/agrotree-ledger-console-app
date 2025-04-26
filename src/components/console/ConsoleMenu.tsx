"use client";
import { DASHBOARD_MENU } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
import UserMenu from "./UserMenu";
import Link from "next/link";

const ConsoleMenu = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-1 flex-col p-4 bg-primary">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-3">
            {DASHBOARD_MENU.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    item.href === pathname
                      ? "bg-lightGreen text-white"
                      : "text-green-200 hover:bg-lightGreen hover:text-white",
                    "group flex gap-x-3 rounded-md p-2 text-xs font-semibold leading-6"
                  )}
                >
                  <item.icon
                    aria-hidden="true"
                    className={cn(
                      item.href === pathname
                        ? "text-white"
                        : "text-green-200 group-hover:text-white",
                      "size-5 shrink-0"
                    )}
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li className="mt-auto">
          <UserMenu />
        </li>
      </ul>
    </nav>
  );
};

export default ConsoleMenu;
