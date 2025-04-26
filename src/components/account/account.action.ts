'use server';

import { auth } from "@/auth";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";


export async function getAccountAction(userId: string) {


    const account = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    return account

}

export async function updateAccountAction(data: FormData) {


    const session = await auth();

    if (!session || !session.user.id) {
        redirect("/");
    }

    try {
        const creator = session.user.id.toString();
        const name = data.get("name") as string;
        const fullname = data.get("fullname") as string;
        const email = data.get("email") as string;

        const account = await prisma.user.update({
            where: {
                id: creator
            },
            data: {
                name: name,
                fullname: fullname,
                email: email,
                updatedAt: new Date()
            }
        })

        return {
            success: true,
            account,
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
        };
    }
}