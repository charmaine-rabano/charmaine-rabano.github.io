import React from 'react';
import Image from 'next/image';

import bannerPic from '../images/banner1.jpeg';
import profilePic from '../images/profile.jpg';

export default function HeaderSection() {
  return (
    <div className="relative p-3">
      <div className="pinkBorder bg-custom-dark-pink h-[200px] md:h-[300px] relative">
        <Image
          src={bannerPic}
          alt='Banner image'
          className="opacity-70 hover:opacity-100 object-cover"
          placeholder="blur"
          fill
        />
      </div>
      <div className="absolute -bottom-6 lg:-bottom-24 right-6 xl:right-52 md:right-14 pinkBorder bg-custom-dark-pink">
        <Image
          src={profilePic}
          alt='Picture of Charmaine Eunice'
          className="h-[95px] w-[95px] md:h-[140px] md:w-[140px] opacity-70 hover:opacity-100"
          placeholder='blur'
        />
      </div>
    </div>
  );
}
