import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LastPost, Tags } from '../../Types/Layout';

const HomeLastNewComp = ({ lastnews }: { lastnews: LastPost }) => {
  console.log(
    '🚀 ~ file: HomeLastNewComp.tsx:6 ~ HomeLastNewComp ~ lastnews',
    lastnews[0].tags.name
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 px-3">
      {lastnews.map((news: LastPost) => (
        <Link
          key={news.id}
          href={`/article/${news.databaseId}`}
          className="md:first:col-span-2 lg:first:row-span-2 relative h-[170px] md:h-[131px] lg:h-[145px] 2xl:h-[170px] md:first:h-[350px] lg:first:h-auto lg:first:col-span-6 lg:col-span-3 "
        >
          <div>
            <div className="z-10 absolute  text-white ">
              <div className="flex gap-1">
                {news.tags.slice(0, 2).map((tag: Tags) => (
                  <span key={tag.id} className="bg-secondaryColor px-1 text-xs">
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
            <Image
              alt={news.featuredImage.altText}
              src={news.featuredImage.sourceUrl}
              fill
              className="object-cover"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeLastNewComp;
