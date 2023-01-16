import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper';
import Link from 'next/link';

const LastNewAdsSwiper = ({ lastnewads }: any) => {
  return (
    <div className="w-full h-full px-3 relative">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 5000,
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
        {lastnewads.children.map((data: any) => (
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
                    sizes="(max-width: 856px)"
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

export default LastNewAdsSwiper;
