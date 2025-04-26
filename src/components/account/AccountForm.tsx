"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft, Loader2, SaveIcon } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { getAccountAction, updateAccountAction } from "./account.action";
import { useAlert } from "../providers/AlertDialogProvider";

const formSchema = z.object({
  name: z.string().min(5).max(10),
  fullname: z.string().min(10),
  email: z.string().email(),
});

type formSchemaType = z.infer<typeof formSchema>;

type Props = {
  userId: string;
};

const AccountForm: React.FC<Props> = ({ userId }) => {
  const queryClient = useQueryClient();
  const alert = useAlert();
  const { data: accountInfo } = useQuery({
    queryKey: ["get-account-info", userId],
    queryFn: async () => getAccountAction(userId),
  });

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: accountInfo?.name || "Melissa",
      fullname: accountInfo?.fullname || "Melissa Lee",
      email: accountInfo?.email || "lee@gmail.com",
    },
  });

  useEffect(() => {
    if (accountInfo) {
      form.reset({
        name: accountInfo.name as string,
        fullname: accountInfo.fullname as string,
        email: accountInfo.email as string,
      });
    }
  }, [accountInfo, form]);
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["update-account"],
    mutationFn: async (data: FormData) => updateAccountAction(data),
  });

  const onSubmit = async (values: formSchemaType) => {
    toast.promise(
      new Promise(async (resolve, reject) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("fullname", values.fullname);
        formData.append("email", values.email);

        const { success } = await mutateAsync(formData);
        if (success) {
          resolve(true);
        } else {
          reject();
        }
      }),
      {
        loading: "Updating account...",
        success: async () => {
          alert({
            title: "Congratulations",
            body: "Your account has been updated successfully",
          });

          await queryClient.invalidateQueries({
            queryKey: ["get-account-info", userId],
          });
          return "Account updated";
        },
        error: "Failed to update account",
      }
    );
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Display name</FormLabel>
                <FormControl>
                  <Input placeholder="Your display name" {...field} />
                </FormControl>
                <FormDescription>Choose your diplay name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* fullname */}
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormDescription>Enter your full name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email" {...field} />
                </FormControl>
                <FormDescription>Enter your email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end w-full gap-5">
            <Link href="/console">
              <Button variant={"outline"}>
                <ChevronLeft className="size-4 mr-2" />
                Back
              </Button>
            </Link>
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <Loader2 className="size-4 mr-2 animate-spin" />
              ) : (
                <SaveIcon className="size-4 mr-2" />
              )}
              Save changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AccountForm;
