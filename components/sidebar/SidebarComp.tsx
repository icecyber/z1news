import React from 'react';
import SidebarFacebook from './SidebarFacebook';
import SidebarPopular from './SidebarPopular';

const SidebarComp = ({ popularnews }: any) => {
  return (
    <div>
      <SidebarPopular popularnews={popularnews} />
      <SidebarFacebook />
    </div>
  );
};

export default SidebarComp;
