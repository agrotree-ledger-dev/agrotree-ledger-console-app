import React from "react";
import ThemeToogle from "./ThemeToogle";
import AuthButton from "../auth/AuthButton";
import { Button } from "../ui/button";
import { BellIcon, MessageSquareTextIcon } from "lucide-react";

export default function EndNavbarSection() {
  return (
    <div className="flex items-center gap-2">
      <Button size={"icon"} variant="secondary">
        <MessageSquareTextIcon className="size-5" />
      </Button>
      <Button size={"icon"} variant="secondary">
        <BellIcon className="size-5" />
      </Button>
      <ThemeToogle />
      <AuthButton />
    </div>
  );
}
