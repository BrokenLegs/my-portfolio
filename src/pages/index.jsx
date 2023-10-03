import "tailwindcss/tailwind.css";
import React from "react";
import Layout from "@/components/Layout";
import MySocialMedia from "@/components/MySocialMedia";
import Contact from "@/components/Contact";
import Image from "next/image";
import { Link } from "react-scroll";

import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <div
          className="min-h-screen min-w-screen relative z-0 "
          style={{
            backgroundColor: "#2d3039",
          }}
        >
          <div
            className="w-11/12 mx-auto min-h-screen text-balance whitespace-pre-wrap"
            style={{
              background: "#1b1e23",
              backgroundImage: "url('/me.png')",
              backgroundPosition: "center bottom",
              backgroundSize: "50vh",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
            <Layout>
              <div className=" min-h-screen">
                <div className="flex px-10 justify-between mt-20 font-bold">
                  <div className="w-5/12">
                    <h1 className=" text-6xl text-white  ">
                      {t("introduction")}
                    </h1>
                    <p className=" text-gray-400 mt-5 drop-shadow-[0_1px_0.01px_rgba(0,0,0,1)] text-lg ">
                      {t("myStatement")}
                    </p>
                    <div className="mt-20 flex rounded-full">
                      <Link
                        to="work-with-me"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer"
                      >
                        <Image
                          src="/arrow.png"
                          alt="Arrow"
                          width={100}
                          height={100}
                          className="animate-bounce"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-wrap w-4/12 z-1 ">
                    <div>
                      <h2 className="text-3xl text-white"> {t("about")}</h2>
                      <p className="text-gray-400 my-5">{t("aboutText")}</p>
                      <a className="underline text-gray-400 " href="#">
                        {t("aboutLink")}
                      </a>
                    </div>
                    <hr className="border-gray-400 w-full mt-10" />
                    <div>
                      <h2 className="text-3xl text-white mt-10">
                        {t("project")}
                      </h2>
                      <p className="text-gray-400 my-5">{t("projectText")}</p>
                      <a className="underline text-gray-400" href="#">
                        {t("projectLink")}
                      </a>
                    </div>
                    <hr className="border-gray-400 w-full mt-10" />
                    <div className="mr-auto">
                      <h2 className="text-3xl text-white mt-5">
                        {t("socialMedia")}
                      </h2>
                      <MySocialMedia />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-gray-400 w-full" id="work-with-me" />
              <div
                className="work-with-me text-white flex flex-wrap pt-40 ml-20 min-h-screen"
                style={{ backgroundColor: "#1b1e23" }}
              >
                <div className="get-in-touch  flex-wrap whitespace-pre">
                  <h2 className="text-7xl ">{t("workTogether")}</h2>
                  <h3 className="text-4xl mt-10 ">{t("contactMe")}</h3>
                  <p className="text-gray-400 ">{t("contactText")}</p>
                  <MySocialMedia />
                </div>
                <div className="contact-form-div w-5/12 ml-auto mr-20   ">
                  <div className="rounded-lg bg-gray-800 p-20">
                    <Contact
                      inputStyle="px-6 bg-transparent text-white text-2xl placeholder-white"
                      hrLineColor="border-gray-400"
                    />
                  </div>
                </div>
              </div>
            </Layout>
          </div>
        </div>
      </I18nextProvider>
    </>
  );
}
