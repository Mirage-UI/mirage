import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center text-7xl text-blue-600">
        {" "}
        Lets Start
      </div>
    </>
  );
}
