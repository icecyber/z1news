import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SidebarTitle from './SidebarTitle';

type Props = {};

const SidebarSponsor = ({ sponsor }: any) => {
  return (
    <div>
      <SidebarTitle title="អ្នកឧបត្ថម្ភ" />
      <div className="grid 1 gap-3">
        {sponsor.children.reverse().map((sponsor: any) => (
          <Link
            href={sponsor.custompage_externallink.externalLink}
            key={sponsor.id}
          >
            <div className="w-full h-auto ">
              <Image
                src={sponsor.featuredImage.sourceUrl}
                alt={sponsor.featuredImage.title}
                width={1000}
                height={400}
              ></Image>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarSponsor;
