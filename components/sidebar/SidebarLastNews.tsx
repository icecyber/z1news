import Link from 'next/link';
import React from 'react';
import SidebarTitle from './SidebarTitle';

const SidebarLastNews = ({ lastnews }: any) => {
  console.log(
    '🚀 ~ file: SidebarLastNews.tsx:5 ~ SidebarLastNews ~ lastnews',
    lastnews
  );

  return (
    <div className="mb-5">
      <SidebarTitle title="អត្ថបទថ្មីៗ" />
      <ul style={{ listStyleType: 'disc' }} className="pl-6">
        {lastnews.map((item: any) => (
          <li key={item.id}>
            <Link href={`/article/${item.databaseId}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarLastNews;
