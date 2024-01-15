import Link from "next/link";
import React from "react";

interface PropItems {
  title: string;
  address: string;
  Icon: any;
}
export default function MenuItem({ title, address, Icon }: PropItems) {
  return (
    <>
      <Link href={address} className="hover:text-amber-500">
        <Icon className="text-2xl sm:hidden" />
        <p className="uppercase hidden sm:inline text-sm">{title}</p>
      </Link>
    </>
  );
}
