import React from 'react';
import SidebarAds from './SidebarAds';
import SidebarFacebook from './SidebarFacebook';
import SidebarLastNews from './SidebarLastNews';
import SidebarPopular from './SidebarPopular';
import SidebarSponsor from './SidebarSponsor';
import SidebarVideo from './SidebarVideo';

const SidebarComp = ({ popularnews, video, sponsor, ads, lastnews }: any) => {
  return (
    <div className="relative grid gap-2">
      <SidebarPopular popularnews={popularnews} />
      <SidebarFacebook />
      <SidebarVideo video={video} />
      <SidebarSponsor sponsor={sponsor} />
      <SidebarAds ads={ads} />
      <SidebarLastNews lastnews={lastnews} />
    </div>
  );
};

export default SidebarComp;
