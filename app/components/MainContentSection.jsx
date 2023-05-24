import React from "react";
import Typewriter from "typewriter-effect";

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
        <p className="mt-9 md:text-2xl">
          <strong className="font-black">I’m Charmaine Eunice Rabano.</strong> A
          React front-end developer who also creates smart contracts using
          Solidity (web3). Someone who enjoys building things from nothing and
          bringing vision into life.{" "}
        </p>
      </div>
      <div className="mt-14 lg:my-52">
        <h2 className="hidden font-bold mb-12 lg:block">Get In Touch</h2>
        <a href="mailto:charmaine.rabano@gmail.com" className="btn">
          you can reach me here
        </a>
      </div>
    </div>
  );
}
