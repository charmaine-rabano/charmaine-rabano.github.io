import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript, SiReact, SiNextdotjs, SiGatsby, SiVuedotjs, SiCsharp, SiPython, SiMysql, SiSolidity } from "react-icons/si";
import ProjectItem from "./ProjectItem";

import allProjects from "../content/projects.json";

export default function MainContentSection() {
  return (
    <div className="m-auto text-center p-3 md:max-w-[610px]">
      <div className="mt-11">
        <div className="accentText text-5xl md:text-7xl ">
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("hello, world!")
                .pauseFor(5000)
                .deleteAll()
                .typeString("welcome...")
                .pauseFor(2000)
                .deleteAll()
                .typeString("explore :)")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <p className="mt-9 text-xl md:text-2xl">
          <strong className="font-black">I’m Charmaine Eunice Rabano.</strong> A
          React front-end developer who also creates smart contracts using
          Solidity (web3). Someone who enjoys building things from nothing and
          bringing vision into life.{" "}
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-2 justify-center text-3xl">
        <SiHtml5 />
        <SiCss3 />
        <SiTailwindcss />
        <SiBootstrap />
        <SiJavascript />
        <SiReact />
        <SiNextdotjs />
        <SiGatsby />
        <SiVuedotjs />
        <SiCsharp />
        <SiPython />
        <SiMysql />
        <SiSolidity />
      </div>
      <div className="mt-52">
        <h2 className="font-bold mb-12">Projects</h2>
        <div>
          {allProjects.map(p => {
            return <ProjectItem key={p.title} project={p} first={() => p === allProjects[0]} />
          })}
        </div>
      </div>
      <Link href="/practicum">
        <div className="flex flex-row items-center justify-center gap-2 px-2 py-8 mt-10 border border-custom-black dark:border-custom-white rounded-sm hover:gradientBg">
          <p>View my practicum presentation</p>
          <IoIosArrowRoundForward size="1.5em" />
        </div>
      </Link>
      <div className="mt-52 mb-28">
        <h2 className="font-bold mb-12">Get In Touch</h2>
        <a href="mailto:charmaine.rabano@gmail.com" className="btn">
          you can reach me here
        </a>
      </div>
    </div>
  );
}
