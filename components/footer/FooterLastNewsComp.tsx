import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FooterHeading from './FooterHeading';

const FooterLastNewsComp = ({ lastnews, about }: any) => {
  return (
    <div className="">
      {/* LastNews */}
      <div>
        <FooterHeading title="អត្ថបទថ្មីៗ" />
        <div>
          {lastnews.map((news: any) => (
            <Link
              href={`/article/${news.databaseId}`}
              key={news.id}
              className="grid grid-cols-12 mb-[10px] gap-2 border-b border-b-[#555] last:border-none pb-3"
            >
              <div className="col-span-3 relative w-full h-[60px]">
                <Image
                  alt={news.featuredImage.altText}
                  src={news.featuredImage.sourceUrl}
                  fill
                  className="mr-[10px] object-cover"
                ></Image>
              </div>
              <div className="col-span-9 text-sm text-[#d4d2d4]  flex items-center">
                {news.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterLastNewsComp;
