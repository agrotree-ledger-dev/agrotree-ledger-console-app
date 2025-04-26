import { Construction } from "lucide-react";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center border border-lightGreen border-dashed text-sm bg-lightGreen/10 cursor-pointer hover:bg-lightGreen/30 transition-colors duration-500 rounded-lg w-full h-full min-h-80 ">
      <Construction className="size-[100px] text-muted-foreground animate-bounce" />
      <p className="text-pretty">
        This page is under construction. Please check back later for updates.
      </p>
    </div>
  );
};

export default ComingSoon;
