import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Banner } from '../../../Types/CategoryNews';

const CategoryBanner = (banner: Banner) => {
  return (
    <Link href={banner.banner.custompage_externallink.externalLink}>
      <div className="relative h-full max-h-[105px] ">
        <Image
          alt={banner.banner.featuredImage?.altText}
          src={banner.banner.featuredImage?.sourceUrl}
          height={158}
          width={1280}
        />
      </div>
    </Link>
  );
};

export default CategoryBanner;
