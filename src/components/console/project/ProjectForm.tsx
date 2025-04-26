/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ChevronLeft, CirclePlus, Loader2, Trash } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectAction } from "./_actions/createProject.action";
import { toast } from "sonner";
import { useConsoleContext } from "@/components/providers/ConsoleProvider";
import { useAlert } from "@/components/providers/AlertDialogProvider";
import Link from "next/link";
import { Uploader } from "@/components/ui/uploader";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const formSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(3),
  content: z.string().min(50),
  visibility: z.enum(["PUBLIC", "PRIVATE"]),
  images: z
    .array(z.any())
    .refine((files) => files?.length >= 1, { message: "Image is required." }),
});

type formSchemaType = z.infer<typeof formSchema>;

const ProjectForm = () => {
  const queryClient = useQueryClient();
  const { setSelectedProject } = useConsoleContext();
  const alert = useAlert();
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      content: "",
      visibility: "PUBLIC",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["create-project"],
    mutationFn: (data: FormData) => createProjectAction(data),
  });

  const onSubmit = async (data: formSchemaType) => {
    toast.promise(
      new Promise(async (resolve, reject) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("content", data.content);
        formData.append("visibility", data.visibility);
        console.log(data.images);
        if (data.images) {
          data.images.forEach((file: File) => {
            if (typeof file !== "string") {
              formData.append("images", file);
            }
          });
        }

        const { success, project } = await mutateAsync(formData);
        if (success && project) {
          await queryClient.invalidateQueries({
            queryKey: ["get-projects"],
          });
          setSelectedProject({
            id: project.id,
            name: project.name,
          });
          resolve(project);
        } else {
          reject();
        }
      }),
      {
        loading: "Creating project...",
        success: () => {
          alert({
            title: "Congratulations",
            body: "Project created successfully",
          });

          form.reset();
          return "Project created successfully";
        },
        error: "Failed to create project",
      }
    );
  };

  const handleDelete = (index: number) => {
    form.setValue(
      "images",
      form.getValues("images").filter((_, i) => i !== index)
    );
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid md:grid-cols-3 gap-5">
            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name your project" {...field} />
                    </FormControl>
                    <FormDescription>
                      Choose a name that represents your project
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="visibility"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Visibility</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="PUBLIC">Public</SelectItem>
                      <SelectItem value="PRIVATE">Private</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choose the visibility of your project
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Description" {...field} rows={2} />
                </FormControl>
                <FormDescription>
                  Describe your project in a few words
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project images</FormLabel>
                {field.value ? (
                  <div className="grid grid-cols-5 gap-2 rounded-md">
                    {(
                      field.value as {
                        path: string;
                        preview: string;
                      }[]
                    ).map((file, index) => (
                      <AspectRatio key={index}>
                        <div className="relative">
                          <img
                            src={file.preview}
                            alt="project image"
                            className="w-full object-cover"
                          />
                          <Button
                            size={"icon"}
                            variant={"outline"}
                            className="absolute top-1 right-1"
                            onClick={() => handleDelete(index)}
                          >
                            <Trash className="size-4" />
                          </Button>
                        </div>
                      </AspectRatio>
                    ))}
                  </div>
                ) : null}
                <Uploader
                  maxFiles={5}
                  accept={{
                    "image/png": [".png"],
                    "image/jpeg": [".jpg", ".jpeg"],
                  }}
                  onExceedFileSize={() =>
                    form.setError("images", {
                      message: "Max file size is 5MB",
                    })
                  }
                  value={field.value ? field.value : []}
                  onChange={(files) => {
                    console.log("Files: ", files);
                    field.onChange(files);
                  }}
                />

                <FormDescription>
                  Upload images to showcase your project
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea placeholder="Content" {...field} rows={5} />
                </FormControl>
                <FormDescription>
                  Write a detailed description of your project
                </FormDescription>
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
                <CirclePlus className="size-4 mr-2" />
              )}
              Create project
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProjectForm;
