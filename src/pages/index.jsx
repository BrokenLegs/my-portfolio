"use client"; // This is a client component 👈🏽
import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import Layout from "@/components/myHomePage/MyHomePageLayout";
import Link from "next/link";
import MySocialMedia from "@/components/myHomePage/MySocialMedia";
import Contact from "@/components/myHomePage/Contact";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

import { ChakraProvider } from "@chakra-ui/react";
import Skills from "@/components/myHomePage/Skills";

export default function Index() {
  const [isSkillsDisplaying, setIsSkillsDisplaying] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <ChakraProvider>
        <I18nextProvider i18n={i18n}>
          <div
            className="absolute top-0 lg:px-20"
            style={{
              backgroundColor: "#2d3039",
            }}
          >
            <div
              className="whitespace-pre-wrap"
              style={{
                background: "#1b1e23",
                backgroundImage: "url('/myHomePage/me.png')",
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
                        <ScrollLink
                          to="work-with-me"
                          smooth={true}
                          duration={500}
                          className="cursor-pointer"
                        >
                          <Image
                            src="/myHomePage/arrow.png"
                            alt="Arrow"
                            width={100}
                            height={100}
                            className="animate-bounce xs:hidden"
                            loading="lazy"
                          />
                        </ScrollLink>
                      </div>
                    </div>
                    <div className="flex flex-wrap w-4/12 z-1 xs:w-full">
                      <div>
                        <h2 className="text-3xl text-white">{t("about")}</h2>
                        <p className="text-gray-400 my-5">{t("aboutText")}</p>
                        <Link
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
                        </Link>
                      </div>
                      <hr className="border-gray-400 w-full mt-10" />
                      <div>
                        <h2 className="text-3xl text-white mt-10">
                          {t("project")}
                        </h2>
                        <p className="text-gray-400 my-5">{t("projectText")}</p>

                        <Link
                          className="underline text-gray-400"
                          href="/projects/onetrickpony/homepage"
                          to="/projects/onetrickpony/homepage"
                        >
                          {t("projectLink")}
                        </Link>
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
                  className="work-with-me text-white grid lg:grid-cols-2 gap-3 min-h-screen p-20"
                  style={{ backgroundColor: "#1b1e23" }}
                >
                  <div className="get-in-touch  ">
                    <h3 className="text-6xl pb-3">
                      {t("contactMe")}
                      {"  "}
                      <Image
                        src={"/myHomePage/r-arrow.svg"}
                        alt="Right arrow"
                        width={65}
                        height={65}
                        loading="lazy"
                        className="hidden lg:inline-block"
                      />
                    </h3>
                    <p className="text-gray-400 ">{t("contactText")}</p>
                    <div className="">
                      <MySocialMedia />
                    </div>
                  </div>
                  <div className="contact-form-div">
                    <div className="rounded-lg bg-gray-800 p-20 relative z-0">
                      <Contact
                        inputStyle="placeholder-opacity-15 bg-transparent text-white text-2xl placeholder-white"
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
