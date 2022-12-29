import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper';
import Link from 'next/link';

const LogoAds = ({ banner }: any) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        modules={[Autoplay]}
      >
        {banner.children.map((data: any) => (
          <SwiperSlide key={data.id} className="w-full h-full relative">
            {data.featuredImage?.sourceUrl && (
              <Link href={data.custompage_externallink.externalLink}>
                <Image
                  src={data.featuredImage.sourceUrl}
                  alt={data.featuredImage.altText}
                  fill
                  sizes="(max-width: 856px)"
                  className="object-contain"
                  priority
                />
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LogoAds;
