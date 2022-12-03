import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Facebook from '../icons/Facebook';
import Instagram from '../icons/Instagram';
import Linkedin from '../icons/Linkedin';
import Telegram from '../icons/Telegram';
import Youtube from '../icons/Youtube';

const TopNav_Comp = () => {
  return (
    <div className="bg-hightlightColor">
      <div className="w-full h-10 container mx-auto text-[#D4D2C9] flex flex-wrap justify-between">
        <div className="flex">
          <div className="px-4">
            <Telegram className="w-[14px] h-[14px]" fill="#D4D2C9" />
          </div>
          <div className="px-4">
            <Facebook className="w-[8px] h-[14px]" fill="#D4D2C9" />
          </div>
          <div className="px-4">
            <Linkedin className="w-[12px] h-[14px]" fill="#D4D2C9" />
          </div>
          <div className="px-4">
            <Youtube className="w-[14px] h-[14px]" fill="#D4D2C9" />
          </div>
          <div className="px-4">
            <Instagram className="w-[12px] h-[14px]" fill="#D4D2C9" />
          </div>
        </div>
        <div className="contact-info">
          <Link href="tel:+855963689777">ទូរស័ព្ទ: +855 96 3689 777</Link>
          <Link href="mailto:z1newsnetwork@gmail.com">
            អ៊ីមែល: z1newsnetwork@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav_Comp;
