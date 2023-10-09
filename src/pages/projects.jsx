import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
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
