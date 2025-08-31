"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { accountPasswordPath, accountProfilePath } from "@/paths";
import { usePathname } from "next/navigation";

const AccountTabs = () => {
  const pathname = usePathname();
  return (
    <Tabs value={pathname.split("/").at(-1)}>
      <TabsList>
        <TabsTrigger value="profile" asChild>
          <Link href={accountProfilePath()}>Profile</Link>
        </TabsTrigger>
        <TabsTrigger value="password" asChild>
          <Link href={accountPasswordPath()}>Password</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export { AccountTabs };
