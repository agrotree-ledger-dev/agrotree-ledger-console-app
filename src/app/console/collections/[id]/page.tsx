import { getCollectionByIdOrPubkey } from "@/components/console/collections/_actions/getCollectionByIdOrPubkey";
import CollectionActionMemu from "@/components/console/collections/CollectionActionMemu";
import CreateMerkelTreeModal from "@/components/console/collections/CreateMerkelTreeModal";
import CollectionNfts from "@/components/console/collections/CollectionNfts";
import HeaderPage from "@/components/layout/HeaderPage";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import CollectionMerkelTreeConfig from "@/components/console/collections/CollectionMerkelTreeConfig";
type Props = {
  params: Promise<{
    id: string;
  }>;
};
const CollectionDetailPage: React.FC<Props> = async ({ params }) => {
  const { id } = await params;

  noStore();
  const collection = await getCollectionByIdOrPubkey(id);
  if (!collection) {
    return null;
  }
  return (
    <div>
      <HeaderPage
        title={`NFTs - Collection ${collection?.name}`}
        description={
          collection?.description ?? "Create and manage your NFTs in collection"
        }
        start={
          <div className="size-14 rounded-lg shadow-lg border-lightGrey">
            {collection?.image ? (
              <Image
                src={collection.image}
                width={56}
                height={56}
                alt={"collection image"}
                className="rounded-lg w-full h-full object-cover size-14"
              />
            ) : (
              <ImageIcon className="size-14 rounded-lg" />
            )}
          </div>
        }
        end={
          collection.merkelTree ? (
            <CollectionActionMemu
              collectionId={collection.id}
              nfts={collection.NftMetadata}
              merkleTree={collection.merkelTree}
            />
          ) : null
        }
      />
      <div className="py-5 space-y-5">
        {!collection.merkelTree ? (
          <CreateMerkelTreeModal cid={collection.id.toString()} />
        ) : (
          <>
            <CollectionMerkelTreeConfig merkleTree={collection.merkelTree} />
            <CollectionNfts collectionId={collection.id.toString()} />
          </>
        )}
      </div>
    </div>
  );
};

export default CollectionDetailPage;
