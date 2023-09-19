import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function NavBar({ className }) {
  const navRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(null);

  const handleScroll = () => {
    const nav = navRef.current;
  };

  return (
    <>
      <nav onScroll>
        <ul className={className}>
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
                <path d="M 12 3.90625 L 11.75 4.0625 L 0.25 11.0625 L 0.75 11.9375 L 12 5.09375 L 23.25 11.9375 L 23.75 11.0625 L 20 8.78125 L 20 4 L 18 4 L 18 7.5625 L 12.25 4.0625 Z M 12 6.5 L 2 12.5 L 2 24 L 22 24 L 22 12.5 Z M 9 13 L 15 13 L 15 22 L 9 22 Z"></path>
              </svg>
            </Link>
          </li>
          <li className="text-2xl">
            <Link href="items">Items</Link>
          </li>
          <li className="text-2xl">
            <Link href="about">About</Link>
          </li>
          <h2 className="text-6xl ml-auto font-bold">My Portfolio</h2>
        </ul>
      </nav>
    </>
  );
}
