"use client";
import React, { PropsWithChildren, useState } from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MenuIcon } from "lucide-react";

const MobileNavbar: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="block border-separate bg-primary md:hidden">
      <Sheet open={isOpened} onOpenChange={setIsOpened}>
        <SheetTrigger asChild>
          <Button
            variant={"ghost"}
            type="button"
            onClick={() => setIsOpened(true)}
            className="-m-2.5 p-2.5 text-lightGrey lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon aria-hidden="true" className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          className="w-[400px] sm:w-[540px] bg-primary"
          side={"left"}
        >
          <SheetHeader>
            <SheetTitle asChild>
              {/* <div className="flex h-16 shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/img/logos/mark.svg?color=white"
                  className="h-8 w-auto"
                />
              </div> */}
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-1 pt-4">{children}</div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
