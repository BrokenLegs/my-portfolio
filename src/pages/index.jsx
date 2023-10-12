"use client"; // This is a client component 👈🏽
import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import Layout from "@/components/Layout";
import MySocialMedia from "@/components/MySocialMedia";
import Contact from "@/components/Contact";
import Image from "next/image";
import { Link } from "react-scroll";

import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import Skills from "@/components/Skills";
import { ChakraProvider } from "@chakra-ui/react";

export default function Index() {
  const [isSkillsDisplaying, setIsSkillsDisplaying] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <ChakraProvider>
        <I18nextProvider i18n={i18n}>
          <div
            className="min-h-screen min-w-screen relative z-0 "
            style={{
              backgroundColor: "#2d3039",
            }}
          >
            <div
              className="w-11/12 mx-auto min-h-screen  whitespace-pre-wrap"
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
                  <div className="flex flex-wrap px-10 justify-between mt-20 font-bold">
                    <div className="w-5/12 xs:w-full">
                      <h1 className=" text-6xl  text-white  ">
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
                            className="animate-bounce xs:hidden"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-wrap w-4/12 z-1 xs:w-full">
                      <div>
                        <h2 className="text-3xl text-white">{t("about")}</h2>
                        <p className="text-gray-400 my-5">{t("aboutText")}</p>
                        <a
                          className="underline text-gray-400 "
                          href="#"
                          onClick={() =>
                            setIsSkillsDisplaying(!isSkillsDisplaying)
                          }
                        >
                          {t("aboutLink")}
                          <div
                            className={`inset-0 fixed z-50 transform transition-transform ease-out ${
                              isSkillsDisplaying
                                ? "translate-x-0"
                                : "translate-x-full"
                            }`}
                          >
                            <Skills />
                          </div>
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
                      <div className="mr-auto mb-5 xs:hidden">
                        <h2 className="text-3xl text-white mt-5 xs:basis-full xs:text-center">
                          {t("socialMedia")}
                        </h2>
                        <MySocialMedia />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="border-gray-400 w-full" id="work-with-me" />
                <div
                  className="work-with-me text-white flex flex-wrap pt-40 ml-20 min-h-screen xs:pt-10 xs:m-0 xs:justify-center"
                  style={{ backgroundColor: "#1b1e23" }}
                >
                  <div className="get-in-touch flex-wrap whitespace-pre xs:text-center xs:justify-center xs:mb-5">
                    {/* <h2 className="text-7xl xs:text-3xl xs:hidden">
                    {t("workTogether")}
                  </h2> */}
                    <h3 className="text-6xl pb-3 mt-10 xs:mt-0">
                      {t("contactMe")}
                    </h3>
                    <p className="text-gray-400 ">{t("contactText")}</p>
                    <div className=" xs:m-0 xs:justify-center xs:flex">
                      <MySocialMedia />
                    </div>
                  </div>
                  <div className="contact-form-div w-5/12 ml-auto mr-20 xs:w-full xs:m-0 relative">
                    {/* <div className="under-construction bg-opacity-50 bg-black absolute z-10 inset-0 flex justify-center items-center">
                      <div className="text-white text-center">
                        <h2 className="text-4xl font-bold mb-4">
                          Under Construction
                        </h2>
                        <p className="text-lg">
                          {
                            "We're sorry, this feature is currently under construction."
                          }
                        </p>
                      </div>
                    </div> */}
                    <div className="rounded-lg bg-gray-800 p-20 relative z-0">
                      <Contact
                        inputStyle="placeholder-opacity-15 px-6 bg-transparent text-white text-2xl placeholder-white"
                        hrLineColor="border-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </Layout>
            </div>
          </div>
        </I18nextProvider>
      </ChakraProvider>
    </>
  );
}
