import Image from 'next/image';
import React from 'react';

type Props = {};

const CategoryBanner = (banner: any) => {
  return (
    <div className="relative h-full max-h-[105px] ">
      <Image
        alt={banner.banner[4].featuredImage.altText}
        src={`${banner.banner[4].featuredImage.sourceUrl}`}
        height={158}
        width={1280}
      />
    </div>
  );
};

export default CategoryBanner;
