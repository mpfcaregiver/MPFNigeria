
import React from 'react';
import { Camera, Play, Video } from 'lucide-react';

const Gallery: React.FC = () => {
  const siteImages = [
    // Primary Site Images (First)
    { url: "https://i.ibb.co/FkQbmqpF/MPF.jpg", title: "MPF Hero" },
    { url: "https://i.ibb.co/qYdQqtkx/MPF-1.jpg", title: "Soldiers Gathering" },
    { url: "https://i.ibb.co/WvgM8Zj9/MPF-3.jpg", title: "Rev. Dr. Butswat Istifanus" },
    { url: "https://i.ibb.co/XqKvMtR/MPF-4.jpg", title: "Dr. Dominion D. Dom" },
    { url: "https://i.ibb.co/G43tJV6S/MPF-5.jpg", title: "Altar Prayer" },
    { url: "https://i.ibb.co/DPgrCpcQ/MPF-6.jpg", title: "Military Mission" },
    { url: "https://i.ibb.co/wFc8Qq6R/MPF-7.jpg", title: "Barracks Outreach" },
    { url: "https://i.ibb.co/6RZNPtmt/MPF-8.jpg", title: "Founding Vision" },
    { url: "https://i.ibb.co/qLWzmy8p/MPF-9.jpg", title: "Worship at the Altar" },
    { url: "https://i.ibb.co/tpNbmHc0/MPF-12.jpg", title: "Affiliation & Operations" },
    { url: "https://i.ibb.co/6JDLgTLF/MPF-13.jpg", title: "Fellowship Gathering" },
    
    // Mission Impact Batch
    { url: "https://i.ibb.co/fG8X7KGQ/Whats-App-Image-2026-02-03-at-3-24-49-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/nMbg3WPP/Whats-App-Image-2026-02-03-at-3-24-41-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/dJHrjWmt/Whats-App-Image-2026-02-03-at-12-23-23-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/FLXfm7Ky/Whats-App-Image-2026-02-03-at-3-24-53-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/C3NGdT5L/Whats-App-Image-2026-02-03-at-3-24-51-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/9kb18MFw/Whats-App-Image-2026-02-03-at-3-24-51-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/vCMJMVzr/Whats-App-Image-2026-02-03-at-3-24-50-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/JFMxwdxP/Whats-App-Image-2026-02-03-at-3-24-48-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/93z4fMqZ/Whats-App-Image-2026-02-03-at-3-24-46-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/gMVXXFS6/Whats-App-Image-2026-02-03-at-3-24-43-PM-2.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/zVmVq1gX/Whats-App-Image-2026-02-03-at-3-24-43-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/mFM7M5ZB/Whats-App-Image-2026-02-03-at-3-24-38-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/N2PNXmXq/Whats-App-Image-2026-02-03-at-3-24-35-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/F4Nbmp8c/Whats-App-Image-2026-02-03-at-3-24-31-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/5hMdw3Hm/Whats-App-Image-2026-02-03-at-1-36-14-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/ksKDF2jM/Whats-App-Image-2026-02-03-at-1-36-15-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/3yPfNMjd/Whats-App-Image-2026-02-03-at-1-36-16-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/8nJqXW7j/Whats-App-Image-2026-02-03-at-1-36-11-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/HpzHrh1T/Whats-App-Image-2026-02-03-at-1-36-11-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/CpsbWScB/Whats-App-Image-2026-02-03-at-1-36-10-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/mLZ9dmF/Whats-App-Image-2026-02-03-at-1-36-10-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/svj6FSbG/Whats-App-Image-2026-02-03-at-1-36-09-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/7dcw3Qq4/Whats-App-Image-2026-02-03-at-1-36-09-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/gMn3Lxvk/Whats-App-Image-2026-02-03-at-1-35-03-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/Z1HxJTLm/Whats-App-Image-2026-02-03-at-1-35-03-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/GQ9mRnfx/Whats-App-Image-2026-02-03-at-1-35-02-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/MkyWqXLt/Whats-App-Image-2026-02-03-at-1-35-02-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/VY7mk84r/Whats-App-Image-2026-02-03-at-12-23-47-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/j2wJW9r/Whats-App-Image-2026-02-03-at-12-23-46-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/k2ZsTgLm/Whats-App-Image-2026-02-03-at-12-23-44-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/zH66yHr5/Whats-App-Image-2026-02-03-at-12-23-42-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/84b48vfs/Whats-App-Image-2026-02-03-at-12-23-42-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/9kt000Br/Whats-App-Image-2026-02-03-at-12-23-41-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/qLBqqbZ6/Whats-App-Image-2026-02-03-at-12-23-40-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/nN7VCD0M/Whats-App-Image-2026-02-03-at-12-23-40-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/wFtdFHFX/Whats-App-Image-2026-02-03-at-12-23-39-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/rK7VfS1M/Whats-App-Image-2026-02-03-at-12-23-39-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/ymTJXpZG/Whats-App-Image-2026-02-03-at-12-23-37-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/nqZ15TGx/Whats-App-Image-2026-02-03-at-12-23-37-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/gbVMyRcB/Whats-App-Image-2026-02-03-at-12-23-35-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/KcpYLbc8/Whats-App-Image-2026-02-03-at-12-23-36-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/svNqp7Rb/Whats-App-Image-2026-02-03-at-12-23-34-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/yzTtWnq/Whats-App-Image-2026-02-03-at-12-23-33-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/nqTHFZDH/Whats-App-Image-2026-02-03-at-12-23-32-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/xckSbfY/Whats-App-Image-2026-02-03-at-12-23-27-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/9H5pbpR2/Whats-App-Image-2026-02-03-at-12-23-26-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/bgZ1d9G5/Whats-App-Image-2026-02-03-at-12-23-26-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/zhVs9r3z/Whats-App-Image-2026-02-03-at-12-23-22-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/845kMrkd/Whats-App-Image-2026-02-03-at-12-23-20-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/7tVHBRdB/Whats-App-Image-2026-02-03-at-12-23-15-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/sv3MSSBW/Whats-App-Image-2026-02-03-at-12-23-14-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/r29GtZLX/Whats-App-Image-2026-02-03-at-12-23-08-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/0pBptVcL/Whats-App-Image-2026-02-03-at-12-23-06-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/7dzFq5tS/Whats-App-Image-2026-02-03-at-12-23-05-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/BpFcyDn/Whats-App-Image-2026-02-03-at-12-23-04-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/84YKY0Xh/Whats-App-Image-2026-02-03-at-12-23-04-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/0yqQTcts/Whats-App-Image-2026-02-03-at-12-23-03-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/tSbsL0x/Whats-App-Image-2026-02-03-at-12-23-02-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/d4HK86Ry/Whats-App-Image-2026-02-03-at-12-23-01-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/G4ghGvTR/Whats-App-Image-2026-02-03-at-12-21-07-PM-1.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/7JxBqnkn/Whats-App-Image-2026-02-03-at-12-21-05-PM.jpg", title: "Mission Impact" },
    { url: "https://i.ibb.co/TDxs3pVB/Whats-App-Image-2026-02-03-at-12-21-03-PM.jpg", title: "Mission Impact" },
  ];

  const vimeoVideos = [
    { id: "1162076467", title: "Mission Witness 1" },
    { id: "1162076430", title: "Mission Witness 2" },
    { id: "1162076405", title: "Mission Witness 3" },
    { id: "1162076376", title: "Mission Witness 4" },
    { id: "1162076365", title: "Mission Witness 5" },
    { id: "1162076335", title: "Mission Witness 6" },
    { id: "1162076310", title: "Mission Witness 7" },
    { id: "1162076260", title: "Mission Witness 8" },
    { id: "1162076221", title: "Mission Witness 9" },
    { id: "1162076181", title: "Mission Witness 10" },
    { id: "1162080899", title: "Mission Witness 11" },
    { id: "1162080866", title: "Mission Witness 12" },
    { id: "1162080827", title: "Mission Witness 13" },
    { id: "1162080801", title: "Mission Witness 14" },
    { id: "1162080736", title: "Mission Witness 15" },
    { id: "1162080699", title: "Mission Witness 16" },
    { id: "1162080671", title: "Mission Witness 17" },
    { id: "1162080641", title: "Mission Witness 18" },
    { id: "1162080603", title: "Mission Witness 19" },
    { id: "1162080559", title: "Mission Witness 20" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[40vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/DPgrCpcQ/MPF-6.jpg" 
            alt="MPF Gallery background" 
            className="w-full h-full object-cover brightness-[0.35]" 
          />
          <div className="absolute inset-0 bg-army/40"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Mission Gallery</h1>
          <p className="text-lg md:text-2xl font-bold text-emerald-300 uppercase tracking-widest">Banners, Posters, and Witness Videos</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* IMAGE GALLERY SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-army uppercase mb-4">Featured Images</h2>
          <div className="w-24 h-2 bg-army mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {siteImages.map((img, i) => (
            <div key={i} className="group relative aspect-square bg-gray-100 rounded-2xl overflow-hidden border-2 border-transparent hover:border-army transition-all shadow-lg">
              <img 
                src={img.url} 
                alt={img.title} 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-army/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 p-6 text-center">
                 <Camera className="text-emerald-400 mb-4" size={40} />
                 <h3 className="text-white font-black uppercase tracking-widest text-sm">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* VIDEO GALLERY SECTION */}
        <div className="text-center mb-16">
          <div className="flex items-center gap-4 justify-center">
            <div className="h-px bg-gray-200 w-16 md:w-32"></div>
            <h2 className="text-4xl font-black text-army uppercase whitespace-nowrap">Witness Videos</h2>
            <div className="h-px bg-gray-200 w-16 md:w-32"></div>
          </div>
          <p className="text-gray-500 font-bold uppercase text-xs tracking-[0.2em] mt-4">Actual footage from our mission fields</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {vimeoVideos.map((video, idx) => (
            <div key={idx} className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-b-8 border-army group hover:border-emerald-500 transition-colors">
              <div className="aspect-video relative">
                <iframe
                  src={`https://player.vimeo.com/video/${video.id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  className="absolute inset-0 w-full h-full"
                  title={video.title}
                ></iframe>
              </div>
              <div className="p-6 bg-gray-900 flex items-center justify-between text-white">
                <div>
                  <h3 className="font-black uppercase tracking-widest text-sm">{video.title}</h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">MPF Official Witness Tape</p>
                </div>
                <div className="bg-army p-2 rounded-lg text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Video size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center p-12 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 w-full max-w-2xl">
             <Play className="text-gray-300 mb-6" size={64} fill="currentColor" />
             <h3 className="text-xl font-black text-army uppercase mb-2">More footage coming soon</h3>
             <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.2em] text-center max-w-xs">
               Our teams are currently on active missions across Nigeria and the Diaspora. Stay tuned for more updates.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
