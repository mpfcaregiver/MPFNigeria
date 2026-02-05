
import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';

const Benefits: React.FC = () => {
  const list = [
    "Seeing military men/women worship/give their lives to Jesus Christ.",
    "Physical fitness.",
    "Gain respect in the public.",
    "Uninterrupted delay while traveling.",
    "Security back up where necessary.",
    "Embassy accessibility.",
    "Networking with all Military barracks in Nigeria and international Chaplain organizations.",
    "Attend International Peace Keeping Missions (IPKM).",
    "Become an International Chaplain Agency DELEGATION.",
    "International Passport made available to all MPF members.",
    "END OF YEAR CASH DISBURSEMENT/AWARD TO MPF MEMBERS."
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[40vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/DPgrCpcQ/MPF-6.jpg" 
            alt="MPF Benefits background" 
            className="w-full h-full object-cover brightness-[0.35]" 
          />
          <div className="absolute inset-0 bg-army/40"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">MPF Benefits</h1>
          <p className="text-lg md:text-2xl font-bold text-emerald-300 uppercase tracking-widest italic">Prov 14:23 - "In all labour there is profit..."</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-army p-8 text-white flex items-center justify-between">
            <h2 className="text-2xl font-black uppercase tracking-widest">Member Advantages</h2>
            <Star className="text-emerald-400" size={32} />
          </div>
          <div className="p-10 space-y-6">
            <p className="text-gray-600 font-bold mb-8 uppercase text-sm tracking-widest border-b pb-4 italic">
              "Members are appreciated for all their contributions and sacrifices."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {list.map((benefit, i) => (
                <div key={i} className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors border-l-4 border-army">
                  <CheckCircle2 className="text-army shrink-0" size={24} />
                  <p className="font-bold text-gray-800 text-sm md:text-md uppercase leading-tight">
                    <span className="text-army mr-2">#{i + 1}</span> {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 p-8 text-center border-t italic text-gray-500 text-sm">
            BY MPF NATIONAL/STATE/LGA EXECUTIVE MANAGEMENT COUNCIL
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
