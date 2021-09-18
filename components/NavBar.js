import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <Link href="/">Home</Link>
        </ul>
        <ul>
          <Link href="/about">About</Link>
        </ul>
        <ul>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
