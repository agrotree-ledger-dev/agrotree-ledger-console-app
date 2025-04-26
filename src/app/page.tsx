import { Button } from "@/components/ui/button";
import appConfig from "@/lib/config";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-darkGreen w-full h-screen">
      <div className="flex justify-center items-center">
        <Image src="/brand/logo-dark.png" alt="logo" width={450} height={450} />
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="max-w-2xl">
          <p className="font-medium text-center md:text-2xl md:leading-10 px-5">
            {appConfig.appDescription}
          </p>
        </div>
        <Link href={"/console"}>
          <Button variant={"secondary"} size={"lg"}>
            Get started
          </Button>
        </Link>
      </div>
    </div>
  );
}
