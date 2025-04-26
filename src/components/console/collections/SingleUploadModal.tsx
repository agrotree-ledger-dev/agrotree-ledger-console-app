import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { File } from "lucide-react";
import React from "react";
type Props = {
  collectionId: number;
};
const SingleUploadModal: React.FC<Props> = ({ collectionId }) => {
  return (
    <Dialog>
      <DialogTrigger className="flex gap-2 items-center text-xs">
        <File className="size-4" />
        Single upload {collectionId}
      </DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SingleUploadModal;
