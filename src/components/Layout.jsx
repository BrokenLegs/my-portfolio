import React from "react";
import NavBar from "@/components/NavBar";
import "tailwindcss/tailwind.css";

export default function layout({ children }) {
  const navBarStyling =
    "flex flex-row flex-wrap gap-4 p-10 w-screen absolute z-10 transparent";
  return (
    <>
      <NavBar className={navBarStyling} />
      <main>{children}</main>
    </>
  );
}
