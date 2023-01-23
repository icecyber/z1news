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
    <div className="w-full h-full ">
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
            {data.custompage_externallink.posterBanner.mediaItemUrl && (
              <Link
                href={data.custompage_externallink.externalLink}
                className="w-full h-full relative"
              >
                <video
                  src={`${data.custompage_externallink.posterBanner.mediaItemUrl}`}
                  autoPlay
                  loop
                  muted
                  className="h-full w-auto"
                />
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoAds;
