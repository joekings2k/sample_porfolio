import Image from "next/image";
import localFont from "next/font/local";
import Masked from "@/components/masked";
import Second from "@/components/SecondComponent/second";
import About from "@/components/about";
import MyWork from "@/components/work";
import Test from "@/components/work/test";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="">
      <Masked />
      <About />
      {/* <MyWork /> */}
      <Test />
      {/* <Second /> */}
    </div>
  );
}
