import React from "react";
import NavBar from "@/components/NavBar";
import "tailwindcss/tailwind.css";

export default function layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
