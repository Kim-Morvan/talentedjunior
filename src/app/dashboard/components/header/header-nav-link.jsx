"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function NavLink({ href, children, onClick }) {
  const segment = useSelectedLayoutSegments();

  const isActive =
    href === `/dashboard${segment}` ||
    href === `/dashboard/${segment}` ||
    href === "" ||
    href === "/dashboard/()";

  return (
    <Link
      onClick={onClick}
      className={
        isActive
          ? "z-[-1] h-[34px] rounded-md bg-neutral-100 font-semibold text-[#0F70B7] decoration-[#0F70B7] dark:bg-[#202124]"
          : "hover:text-[#0F70B7]"
      }
      href={href}
    >
      {children}
    </Link>
  );
}
