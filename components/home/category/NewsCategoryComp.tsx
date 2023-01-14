import React from 'react';
import CategoryBanner from './CategoryBanner';
import CategoryBigPost from './CategoryBigPost';
import NewsCategoryTitle from './NewsCategoryTitle';

const NewsCategoryComp = ({ banner, title, categorylink, news }: any) => {
  return (
    <div>
      <CategoryBanner banner={banner.children} />
      <NewsCategoryTitle title={title} categorylink={categorylink} />
      <CategoryBigPost news={news} />
    </div>
  );
};

export default NewsCategoryComp;
