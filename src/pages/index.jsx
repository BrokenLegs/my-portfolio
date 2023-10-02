import "tailwindcss/tailwind.css";
import React from "react";
import Layout from "@/components/Layout";
import MySocialMedia from "@/components/MySocialMedia";
import Contact from "@/components/Contact";
import Image from "next/image";
import { Link } from "react-scroll";

export default function index() {
  return (
    <>
      <div
        className="min-h-screen min-w-screen relative z-0 "
        style={{
          backgroundColor: "#2d3039",
        }}
      >
        <div
          className="w-11/12 mx-auto min-h-screen"
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
                  <h1 className="text-6xl  text-white">
                    {"I'm Carl, a Web Developer"}
                  </h1>
                  <p className="text-gray-400 mt-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae mollitia assumenda, fugiat dolor ipsa incidunt
                    voluptate temporibus, expedita numquam id exercitationem a,
                    adipisci illo vel.
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
                    <h2 className="text-3xl text-white">About</h2>
                    <p className="text-gray-400 mt-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque aliquam sunt alias nam. Explicabo non tenetur qui
                      quo praesentium tempore. <br />
                      <a className="underline " href="#">
                        About
                      </a>
                    </p>
                  </div>
                  <hr className="border-gray-400 w-full mt-20" />
                  <div>
                    <h2 className="text-3xl text-white mt-20">Nåt annat</h2>
                    <p className="text-gray-400 mt-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque aliquam sunt alias nam. Explicabo non tenetur qui
                      quo praesentium tempore. <br />
                      <a className="underline " href="#">
                        nåt annat
                      </a>
                    </p>
                  </div>
                  <hr className="border-gray-400 w-full mt-20" />
                  <div className="mr-auto">
                    <h2 className="text-3xl text-white">Social media</h2>
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
              <div className="get-in-touch  flex-wrap ">
                <h2 className="text-7xl ">{"Let's work together "}</h2>
                <h3 className="text-4xl mt-10 ">Get in touch with me</h3>
                <p className="text-gray-400">
                  Reach out and me send me an email! I will respond as soon as
                  possible. Usually within 24-48 hours.
                </p>
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
    </>
  );
}
