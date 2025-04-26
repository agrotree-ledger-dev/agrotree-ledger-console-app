import { auth } from "@/auth";
import AuthButton from "@/components/auth/AuthButton";
import ConsoleMenu from "@/components/console/ConsoleMenu";
import ProjectSelection from "@/components/console/ProjectSelection";
import EndNavbarSection from "@/components/layout/EndNavbarSection";
import MobileNavbar from "@/components/layout/MobileNavbar";
import AuthProvider from "@/components/providers/AuthProvider";
import { DashboardProviderWithNoSSR } from "@/components/providers/ConsoleProvider";
import { unstable_noStore as noStore } from "next/cache";
import React, { PropsWithChildren } from "react";

const ConsoleLayout: React.FC<PropsWithChildren> = async ({ children }) => {
  noStore();
  const session = await auth();

  return (
    <AuthProvider>
      <DashboardProviderWithNoSSR>
        {/* <Navbar /> */}
        <div className="w-full relative">
          {!session ? (
            <div className="w-full h-full fixed bg-foreground/30 z-50 backdrop-blur-xs flex items-center justify-center">
              <AuthButton label="Login to continue" />
            </div>
          ) : null}
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-30 lg:flex lg:w-64 lg:flex-col">
            <div className="flex grow flex-col overflow-y-auto bg-darkGreen">
              <div className="flex h-16 shrink-0 items-center">
                <ProjectSelection />
              </div>
              <ConsoleMenu />
            </div>
          </div>

          <div className="lg:pl-64">
            <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 shadow-xs sm:gap-x-6 border-b border-darkGreen px-4 sm:px-6 lg:px-8 bg-background">
              <MobileNavbar>
                <ProjectSelection className="w-full" />
                <ConsoleMenu />
              </MobileNavbar>

              <div className="flex justify-end w-full">
                <EndNavbarSection />
              </div>
            </div>

            <main className="py-6 px-4 sm:px-6 lg:px-8">{children}</main>
          </div>
        </div>
      </DashboardProviderWithNoSSR>
    </AuthProvider>
  );
};

export default ConsoleLayout;
