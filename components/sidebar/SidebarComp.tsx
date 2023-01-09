import React from 'react';
import SidebarFacebook from './SidebarFacebook';
import SidebarPopular from './SidebarPopular';
import SidebarVideo from './SidebarVideo';

const SidebarComp = ({ popularnews, video }: any) => {
  return (
    <div>
      <SidebarPopular popularnews={popularnews} />
      <SidebarFacebook />
      <SidebarVideo video={video} />
    </div>
  );
};

export default SidebarComp;
