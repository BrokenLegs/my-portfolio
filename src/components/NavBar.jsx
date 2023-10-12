import Link from "next/link";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (lang) => i18n.changeLanguage(lang);
  const selectLanguage = () => {
    return (
      <>
        <button onClick={() => handleLanguageChange("en")}>Eng</button>
        <button className="ml-2" onClick={() => handleLanguageChange("sv")}>
          Swe
        </button>
      </>
    );
  };
  // When the user scrolls down the navBar gets hidden
  // When the user scrolls up the navBar gets shown but with a white background and black text
  // If the scroll direction is up and page is in the top the background get transparent

  const [scrollOnTop, setScrollOnTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrollPosition, setScrollPosition] = useState(0);

  // This useEffect is used to add and remove the event listener for the scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // This function is used to determine the scroll direction and position
  function handleScroll() {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition < 1) {
      setScrollOnTop(true);
    } else {
      setScrollOnTop(false);
    }

    if (currentScrollPosition > scrollPosition) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    setScrollPosition(currentScrollPosition);
  }
  const navBarStyling = whichNavBarStyling();

  const ulStyling =
    "flex flex-row flex-wrap gap-4 p-10 w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  ";

  // This function is used to determine the styling of the navBar
  function whichNavBarStyling() {
    let navBarStyling = "sticky top-0 z-10 relative sm:display-none";
    if (scrollOnTop && scrollDirection === "up") {
      navBarStyling +=
        "transition-all duration-1000 opacity-100 transparent text-white  ";
    }
    if (scrollDirection === "up" && !scrollOnTop) {
      navBarStyling +=
        "transition-all duration-1000 ease-in-out opacity-100 bg-white text-black";
    }
    if (scrollDirection === "down") {
      navBarStyling +=
        "transition-all duration-1000 ease-in-out opacity-0 text-white z-[-10]";
    }

    return navBarStyling;
  }

  return (
    <>
      <nav className={navBarStyling}>
        <ul className={ulStyling}>
          <li>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  d="M 12 3.90625 L 11.75 4.0625 L 0.25 11.0625 L 0.75 11.9375 L 12 5.09375 L 23.25 11.9375 L 23.75 11.0625 L 20 8.78125 L 20 4 L 18 4 L 18 7.5625 L 12.25 4.0625 Z M 12 6.5 L 2 12.5 L 2 24 L 22 24 L 22 12.5 Z M 9 13 L 15 13 L 15 22 L 9 22 Z"
                  fill={
                    scrollDirection === "up" && !scrollOnTop ? "black" : "white"
                  }
                  className="transition-all duration-1000 ease-in-out"
                ></path>
              </svg>
            </Link>
          </li>
          <li className="text-2xl">
            <Link href="projects">{t("navProjects")}</Link>
          </li>
          <li className="text-2xl">
            <Link href="about">About</Link>
          </li>
          <li className="align-top"> {selectLanguage()}</li>
          <h2 className="text-6xl ml-auto font-bold ">{t("myPortfolio")}</h2>
        </ul>
      </nav>
    </>
  );
}
