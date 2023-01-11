import React from 'react';
import CategoryBanner from './CategoryBanner';

const NewsCategoryComp = ({ banner }: any) => {
  return (
    <div>
      <CategoryBanner banner={banner.children} />
    </div>
  );
};

export default NewsCategoryComp;
