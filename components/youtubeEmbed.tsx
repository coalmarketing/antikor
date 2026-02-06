"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const YouTubeEmbed = ({ id, title }: { id: string; title: string }) => {
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      <LiteYouTubeEmbed id={id} title={title} />
    </div>
  );
};

export default YouTubeEmbed;
