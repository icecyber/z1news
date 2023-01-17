import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Banner } from '../../../Types/CategoryNews';

const CategoryBanner = (banner: Banner) => {
  return (
    <Link href={banner.banner.custompage_externallink.externalLink}>
      <div className="relative h-full max-h-[105px] ">
        <video
          src={banner.banner.custompage_externallink.posterBanner.mediaItemUrl}
          autoPlay
          loop
          muted
        />
      </div>
    </Link>
  );
};

export default CategoryBanner;
