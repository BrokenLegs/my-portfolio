import "tailwindcss/tailwind.css";
import NavBar from "@/components/NavBar";
import React from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Image from "next/image";

export default function index() {
  return (
    <>
      <Layout>
        <div className="h-screen">
          <img src="/1.jpg" alt="background" style={{ objectFit: "cover" }} />
        </div>
      </Layout>
    </>
  );
}
