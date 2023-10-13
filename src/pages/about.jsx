import React from "react";
import Layout from "@/components/myHomePage/MyHomePageLayout";
import Skills from "@/components/myHomePage/Skills";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

export default function about() {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center ">
        <div className="basis-1/3 mt-20">
          <h1>About</h1>
          <p>
            Welcome to my website! My name is [Your Name], and I&apos;m a [Your
            Profession] based in [Your Location]. I created this website as a
            part of my portfolio to showcase my skills and experience in [Your
            Field]. In addition to using this website as a portfolio, I also
            wanted to use it as a way to promote the work of my talented
            friends. That&apos;s why you&apos;ll find a section on this website
            dedicated to the art of my friend [Friend&apos;s Name].
            [He/She/They] is an incredibly talented [Artist&apos;s Profession]
            who creates beautiful and unique pieces that I&apos;m proud to share
            with the world. I hope you enjoy browsing my website and learning
            more about my work and the work of my friend. If you have any
            questions or comments, please don&apos;t hesitate to get in touch.
            Thank you for visiting!
          </p>
        </div>
      </div>
    </Layout>
  );
}
