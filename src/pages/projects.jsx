import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function projects() {
  return (
    <Layout>
      <div className="flex flex-wrap justify-evenly ">
        <div className="project-container w-300 ">
          <Image src="/lasses-projekt.jpg" alt="me" width={300} height={300} />
          <h2 className="text-center">One Trick Pony</h2>
        </div>
      </div>
    </Layout>
  );
}
