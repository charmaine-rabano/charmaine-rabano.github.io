import React from 'react';
import ThemeToggle from './ThemeToggle';
import SocialLinks from './SocialLinks';
import Image from 'next/image';

import ShortVerticalLine from '../images/svg/short-vertical-line.svg';

export default function FooterSection() {
  return (
    <div className="flex flex-col mt-28 mb-4 items-center gap-3">
      <div className="flex flex-col items-center gap-3 lg:hidden">
        <SocialLinks />
        <a href="mailto:charmaine.rabano@gmail.com">
          <p className="accentText text-sm">charmaine.rabano@gmail.com</p>
        </a>
        <ThemeToggle />
        <Image src={ShortVerticalLine} alt='' />
      </div>
      <p className="accentText text-sm">
        Designed and Built by Charmaine Eunice Rabano
      </p>
    </div>
  );
}
