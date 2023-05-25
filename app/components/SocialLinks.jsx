import React from "react";

import LinkedinIcon from "./svg/LinkedinIcon";
import GithubIcon from "./svg/GithubIcon";
import CVIcon from "./svg/CVIcon";

export default function SocialLinks({ vertical }) {
  return (
    <div className={`flex gap-2${vertical ? " flex-col" : " flex-row"}`}>
      <a href="https://www.linkedin.com/in/cerabano/" target="_blank">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/charmaine-rabano" target="_blank">
        <GithubIcon />
      </a>
      <a href="/cv.pdf" target="_blank">
        <CVIcon />
      </a>
    </div>
  );
}
