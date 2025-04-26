import { Box } from "lucide-react";
import React from "react";

const NoData = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center border border-lightGreen border-dashed text-sm bg-lightGreen/10 cursor-pointer hover:bg-lightGreen/30 transition-colors duration-500 rounded-lg w-full h-40 md:h-80">
      <Box className="size-[50px] text-muted-foreground animate-bounce" />
      <p className="text-pretty">
        No data available. Please add some data to view.
      </p>
    </div>
  );
};

export default NoData;
