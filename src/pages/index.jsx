import "tailwindcss/tailwind.css";
import NavBar from "@/components/NavBar";
import React from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Image from "next/image";

export default function index() {
  return (
    <>
      <div className="h-screen relative" style={{ height: "200vh" }}>
        <Layout>
          <Image
            src="/1.jpg"
            alt="background"
            layout="fill"
            objectFit="cover"
            className="fixed z-[-1]"
          />
        </Layout>
      </div>
    </>
  );
}
