import Link from "next/link";
import Image from "next/legacy/image";
// import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <div className="mt-1.5 hidden items-center md:block lg:block">
        <Image
          height={40}
          width={40}
          src=""
          alt={"logo"}
          className="h-8 w-8 rounded-full sm:h-10 sm:w-10 lg:h-12 lg:w-12"
        />
      </div>
    </Link>
  );
}
