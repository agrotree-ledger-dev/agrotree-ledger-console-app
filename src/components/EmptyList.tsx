import { FolderOpen } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

type Props = {
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
};

const EmptyList: React.FC<Props> = ({
  message = "No items found",
  actionLabel = "Add item",
  onAction,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[150px] border border-lightGreen border-dashed text-sm bg-lightGreen/10 cursor-pointer hover:bg-lightGreen/30 transition-colors duration-500 rounded-lg w-full">
      <FolderOpen className="w-8 h-8 text-muted-foreground mb-4" />
      <p className="font-medium  mb-2">{message}</p>
      {onAction ? <Button onClick={onAction}>{actionLabel}</Button> : null}
    </div>
  );
};

export default EmptyList;
