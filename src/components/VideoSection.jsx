// src/components/VideoSection.js
import React from 'react';

const VideoSection = () => (
  <section className="w-full bg-black">
    <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
      <video
        className="absolute top-0 left-0 w-full h-full"
        src={`/src/assets/Video/Fashion Promo Slideshow - After Effects Template.mp4`}
        autoPlay
        muted
        loop
      />
    </div>
  </section>
);

export default VideoSection;
