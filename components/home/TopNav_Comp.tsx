import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TopNav_Comp = ({ socialmedia, contact }: any) => {
  console.log(socialmedia, contact);
  return (
    <div className="bg-hightlightColor">
      <div className="w-full h-10 container mx-auto text-[#D4D2C9] flex flex-wrap justify-between">
        <div className="flex">
          <div></div>
        </div>
        <div className="contact-info">
          {contact?.slice(-2).map((contact: any) => (
            <Link href={contact.content} key={contact.id}>
              {contact.title}
            </Link>
          ))}
          {/* <Link href="tel:+855963689777">ទូរស័ព្ទ: +855 96 3689 777</Link>
          <Link href="mailto:z1newsnetwork@gmail.com">
            អ៊ីមែល: z1newsnetwork@gmail.com
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default TopNav_Comp;
