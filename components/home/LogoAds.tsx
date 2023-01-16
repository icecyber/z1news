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
    <div className="w-full h-full px-3">
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
          <SwiperSlide key={data.id}>
            {data.featuredImage?.sourceUrl && (
              <Link
                href={data.custompage_externallink.externalLink}
                className="w-full h-full relative"
              >
                <div className="w-full h-full relative">
                  <Image
                    src={data.featuredImage.sourceUrl}
                    alt={data.featuredImage.altText}
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoAds;
