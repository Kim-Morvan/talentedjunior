"use client";

import { useContext } from "react";
import Logo from "./components/header/header-logo";
import Nav from "./components/header/header-nav";
export default function Header() {
  return (
    <header className="fixed top-0 z-50 -mr-1.5 h-10 w-screen text-white  md:sticky md:h-14">
      <div
        className={`m-auto flex h-10 max-w-6xl flex-row items-center justify-center px-5 md:h-14 2xl:px-0`}
      >
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="flex justify-end md:flex-1">
          <Nav />
        </div>
      </div>
    </header>
  );
}
