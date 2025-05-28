import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Fragment, useState } from "react";
import { CiChat2 } from "react-icons/ci";
import { IoMdChatbubbles } from "react-icons/io";
import MyWidget from "@/components/MyWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  const [show, setShow] = useState(false);

  return (
    <Fragment>

      {/* <MyWidget /> */}
    </Fragment >
  );
}
