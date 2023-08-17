import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "About MEtaData App",
    description: "Generated by About MEtaData app",
  };

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return( <>
        {/* <nav>About NavBar</nav> */}
        <main className=" min-h-[100vh] grid place-content-center">
            {children}
        </main>

  </>);
}
