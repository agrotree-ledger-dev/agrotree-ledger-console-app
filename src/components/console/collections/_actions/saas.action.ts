"use server";

import { auth } from "@/auth";
import {
  getSassAccountAddress,
  makeDelegateToSaasInstruction,
} from "@/lib/contracts/agrotree.contract";
import prisma from "@/lib/db";
import { PublicKey } from "@solana/web3.js";
import { redirect } from "next/navigation";
import axios from "axios";

export async function fetchSaasJobStatusAction(collectionId: number) {
  try {
    const session = await auth();

    if (!session || !session.user.id) {
      redirect("/");
    }

    const creator = session.user.id.toString();

    const collection = await prisma.collection.findFirst({
      where: {
        id: collectionId,
        creatorId: creator,
      },
    });

    if (!collection || !collection.merkelTree) {
      return {
        success: false,
        message: "Collection not found or merkel tree not created",
      };
    }

    const [saasAddress] = getSassAccountAddress(
      new PublicKey(creator),
      new PublicKey(collection.merkelTree)
    );

    const saasRequest = await prisma.saasRequest.findFirst({
      where: {
        id: saasAddress.toString(),
        status: "CREATED",
      },
    });

    if (!saasRequest) {
      return {
        success: false,
        status: "NOT_CREATED",
      };
    }

    const { data: createdJobs } = await axios.get(
      `${process.env.SASS_SERVICE_URL}/get-crons`
    );

    if (createdJobs.length > 0) {
      const job = createdJobs.find(
        (item: { name: string; next: string }) =>
          item.name === `job-${saasRequest.id}`
      );

      if (job) {
        return {
          success: true,
          status: "RUNNING",
        };
      }
    }
    return {
      success: true,
      status: "NOT_RUNNING",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      status: "ERROR",
    };
  }
}

export async function callCreateSassJob(id: string) {
  try {
    const saasRequest = await prisma.saasRequest.findFirst({
      where: {
        id,
      },
      include: {
        Collection: {
          select: {
            publickey: true,
            merkelTree: true,
          },
        },
      },
    });

    if (!saasRequest) {
      return;
    }

    await axios.post(
      `${process.env.SASS_SERVICE_URL}/api/add-job`,
      {
        requestId: id,
      },
      {
        headers: {
          "x-api-key": process.env.SASS_SERVICE_API_KEY!,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
}

export async function syncSaasMintAction(
  collectionId: string | number,
  maxNftCanMint: number
) {
  const session = await auth();

  if (!session || !session.user.id) {
    redirect("/");
  }

  try {
    const creator = session.user.id.toString();

    const collection = await prisma.collection.findFirst({
      where: {
        id: parseInt(collectionId.toString()),
        creatorId: creator,
      },
    });

    if (!collection || !collection.merkelTree) {
      return {
        success: false,
        message: "Collection not found or merkel tree not created",
      };
    }

    const [saasAddress] = getSassAccountAddress(
      new PublicKey(creator),
      new PublicKey(collection.merkelTree)
    );

    const saasRequest = await prisma.saasRequest.upsert({
      where: {
        id: saasAddress.toString(),
      },
      create: {
        id: saasAddress.toString(),
        collectionId: parseInt(collectionId.toString()),
        maxNftCanMint,
        userId: creator,
        status: "PENDING",
      },
      update: {
        collectionId: parseInt(collectionId.toString()),
        maxNftCanMint,
        status: "PENDING",
      },
    });

    await callCreateSassJob(saasRequest.id);
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
}

export async function createSassMintAction(
  collectionId: string | number,
  maxNftCanMint: number
) {
  const session = await auth();

  if (!session || !session.user.id) {
    redirect("/");
  }

  try {
    const creator = session.user.id.toString();

    const collection = await prisma.collection.findFirst({
      where: {
        id: parseInt(collectionId.toString()),
        creatorId: creator,
      },
    });

    if (!collection || !collection.merkelTree) {
      return {
        success: false,
        message: "Collection not found or merkel tree not created",
      };
    }

    const nfts = await prisma.nftMetadata.findMany({
      where: {
        collectionId: parseInt(collectionId.toString()),
        address: {
          equals: null,
        },
      },
    });

    if (nfts.length < maxNftCanMint) {
      return {
        success: false,
        message: "Not enough NFTs to mint",
      };
    }

    const { transaction } = await makeDelegateToSaasInstruction({
      collectionId: collectionId.toString(),
      creator,
      merkleTree: collection.merkelTree,
      maxNftCanMint,
    });

    return {
      success: true,
      transaction,
      collectionId,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
}
