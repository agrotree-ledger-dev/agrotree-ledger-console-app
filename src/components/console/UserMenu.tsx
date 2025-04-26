"use client";
import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { CircleUserRound, EllipsisVertical, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAuthProvider } from "../providers/AuthProvider";

const UserMenu = () => {
  const { session, logout } = useAuthProvider();
  const user = session?.user;

  if (!session || !user) return null;
  return (
    <div className="flex items-center gap-2 bg-lightGreen -mx-4 p-3 h-16 select-none">
      <Avatar className="size-7">
        <AvatarFallback className="uppercase font-bold text-xs">
          {user.publickey?.slice(0, 2)}
        </AvatarFallback>
      </Avatar>
      <div className="flex items-center justify-between w-full">
        <div className="text-xs">
          <h3 className="font-semibold text-white/80">{user.name}</h3>
          <span className="text-white/50 cursor-pointer hover:text-white/80 flex items-center gap-1">
            {user.publickey?.slice(0, 13)} ...
          </span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical className="size-4 text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-full">
            <DropdownMenuLabel asChild>
              <div className="flex items-center gap-2">
                <Avatar className="size-7">
                  <AvatarFallback className="uppercase font-bold text-xs">
                    {user.publickey?.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-xs">
                  <h3 className="font-semibold">{user.name}</h3>
                  <span className="text-muted-foreground cursor-pointer hover:text-white/80 flex items-center gap-1">
                    {user.publickey?.slice(0, 13)} ...
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <div className="p-1 flex items-center gap-2 text-xs">
                  <CircleUserRound className="size-4 mr-2" />
                  Account
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>
                <div className="p-1 flex items-center gap-2 text-xs">
                  <LogOut className="size-4 mr-2" />
                  Logout
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserMenu;
