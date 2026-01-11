"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="banner-bg flex h-[46px] items-center justify-center bg-cover bg-no-repeat md:h-[72px]">
        <div className="banner-foreground h-[46px] w-[600px] cursor-pointer bg-center bg-no-repeat md:h-[72px]"></div>
      </div>
      <nav className="bg-white my-8"></nav>
    </>
  );
}
