import React from 'react';
import SidebarTitle from './SidebarTitle';

const SidebarVideo = ({ video }: any) => {
  console.log('🚀 ~ file: SidebarVideo.tsx:5 ~ SidebarVideo ~ video', video);
  return (
    <div className="my-3">
      <SidebarTitle title="វីដេអូ" />
      <div className="grid grid-cols-1 gap-3">
        {video.children.reverse().map((vdo: any) => (
          <iframe
            key={vdo.id}
            width="100%"
            height="100%"
            src={`https://www.youtube-nocookie.com/embed/${vdo.embed.ytVideoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default SidebarVideo;
