import React from 'react';
import Image from 'next/image';

import LinkedinIcon from '../images/svg/linkedin-icon.svg';
import GithubIcon from '../images/svg/github-icon.svg';

export default function SocialLinks({ vertical }) {
  return (
    <div className={`flex gap-2${vertical ? ' flex-col' : ' flex-row'}`}>
      <a href="https://www.linkedin.com/in/cerabano/" target='_blank'>
        <Image src={LinkedinIcon} alt='Visit my LinkedIn account' />
      </a>
      <a href="https://github.com/charmaine-rabano" target='_blank'>
        <Image src={GithubIcon} alt='Visit my Github account' />
      </a>
    </div>
  );
}
