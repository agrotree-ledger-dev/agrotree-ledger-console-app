"use client";
import { getCollection } from "@/components/console/collections/_actions/getCollection.action";
import NewCollectionModal from "@/components/console/collections/NewCollectionModal";
import HeaderPage from "@/components/layout/HeaderPage";
import NoData from "@/components/NoData";
import SkeletonWapper from "@/components/SkeletonWapper";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateToDisplay, getShyftTranslatorLink } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, ImageIcon, Loader2, ProjectorIcon } from "lucide-react";
import { AsyncImage } from "loadable-image";
import Link from "next/link";
import React from "react";
import { useConsoleContext } from "@/components/providers/ConsoleProvider";

const CollectionsPage = () => {
  const { selectedProject } = useConsoleContext();
  const { data: collections, isLoading } = useQuery({
    queryKey: ["get-collections", selectedProject?.id],
    queryFn: () => getCollection(selectedProject?.id),
    enabled: !!selectedProject?.id,
  });

  if (!selectedProject) {
    return (
      <div className="flex flex-col gap-5 justify-center items-center border border-lightGreen border-dashed text-sm bg-lightGreen/10 cursor-pointer hover:bg-lightGreen/30 transition-colors duration-500 rounded-lg w-full h-40 md:h-80">
        <ProjectorIcon className="size-[50px] text-muted-foreground animate-bounce" />
        <p className="text-pretty">Please select or create a project first. </p>
      </div>
    );
  }

  return (
    <div>
      <HeaderPage
        title="Collections"
        description="Create and manage your collections of NFTs"
        end={<NewCollectionModal />}
      />
      <div className="py-5">
        {collections?.length === 0 ? (
          <NoData />
        ) : (
          <SkeletonWapper isLoading={isLoading}>
            <Table>
              <TableCaption>A list of your collections.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px] truncate">Name</TableHead>
                  <TableHead>Collection ID</TableHead>
                  <TableHead className="text-right">Number of NFTs</TableHead>
                  <TableHead className="text-right">Creation date</TableHead>
                  {/* <TableHead className="text-right"></TableHead> */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {collections?.map((coll) => (
                  <TableRow key={coll.publickey}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {coll.image ? (
                          <AsyncImage
                            src={coll.image}
                            loader={
                              <div className="flex justify-center items-center bg-white/10">
                                <Loader2 className="size-5 animate-spin stroke-white/50" />
                              </div>
                            }
                            alt={"collection image"}
                            style={{ width: 44, height: 44 }}
                            className="rounded-lg aspect-square object-cover"
                          />
                        ) : (
                          <ImageIcon className="size-11 rounded-lg" />
                        )}

                        <span className="ml-2">
                          <Link href={`/collections/${coll.publickey}`}>
                            {coll.name}
                          </Link>
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {coll.publickey ? (
                        <Link
                          href={getShyftTranslatorLink(coll.publickey)}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          className="text-lightGrey hover:underline flex items-center gap-1 "
                        >
                          {coll.publickey}
                          <ExternalLink className="size-4" />
                        </Link>
                      ) : null}
                    </TableCell>
                    <TableCell className="text-right">
                      {coll.NftMetadata.length || "-"}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatDateToDisplay(coll.createdAt)}
                    </TableCell>
                    {/* <TableCell className="text-right">
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    alert("Delete");
                  }}
                >
                  <Trash2 className="size-5 text-red-500/50" />
                </Button>
              </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </SkeletonWapper>
        )}
      </div>
    </div>
  );
};

export default CollectionsPage;
