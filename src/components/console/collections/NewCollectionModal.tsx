"use client";
import { Button } from "@/components/ui/button";
import { FolderPlus } from "lucide-react";
import React, { useState } from "react";
import NewCollectionForm from "./NewCollectionForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const NewCollectionModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <FolderPlus className="size-4 mr-2" />
          Create new collection
        </Button>
      </DialogTrigger>
      <DialogContent
        // side={"bottom"}
        className="flex flex-col overflow-hidden max-w-4xl"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Enter collection information</DialogTitle>
          <DialogDescription>
            This information will be used to review your collection before
            launching, and will be used as a preview in different UI surfaces.
            You can edit it later.
          </DialogDescription>
        </DialogHeader>

        <NewCollectionForm callbackFn={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default NewCollectionModal;
