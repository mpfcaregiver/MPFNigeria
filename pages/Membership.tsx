
import React, { useState } from 'react';
import MembershipForm from '../components/MembershipForm';
import { Info, ShieldCheck } from 'lucide-react';

const Membership: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative h-[40vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/DPgrCpcQ/MPF-6.jpg" 
            alt="MPF Membership background" 
            className="w-full h-full object-cover brightness-[0.35]" 
          />
          <div className="absolute inset-0 bg-army/40"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Membership</h1>
          <p className="text-lg md:text-2xl font-bold text-emerald-300 uppercase tracking-widest">Become a Care-Giver for the Military</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 -mt-12 relative z-10">
        {!isStarted ? (
          <div className="bg-white p-12 rounded-3xl shadow-2xl border-t-8 border-army">
            <div className="flex items-start gap-4 bg-red-50 p-6 rounded-2xl border-l-4 border-red-600 mb-10">
              <Info className="text-red-600 shrink-0" size={32} />
              <div className="text-sm font-medium text-red-900 leading-relaxed">
                <strong>REMEMBER:</strong> "WHO YOU KNOW" matters in the sphere of life. 
                Membership is open strictly to ministers of the gospel and men and women of 
                <strong> NOTABLE CHARACTER and INTEGRITY </strong> after Investigation!
              </div>
            </div>

            <h2 className="text-3xl font-black text-army uppercase mb-6">How to Join</h2>
            <ol className="space-y-6 mb-12 text-gray-700 font-medium">
              <li className="flex gap-4"><span className="bg-army text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0">1</span> Procure your form by paying #10,000 (USA $7) to the UBA account.</li>
              <li className="flex gap-4"><span className="bg-army text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0">2</span> Fill out the Digital Application Form below.</li>
              <li className="flex gap-4"><span className="bg-army text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0">3</span> Send phone number/payment receipt to militaryprayerfellowship@gmail.com.</li>
            </ol>

            <button 
              onClick={() => setIsStarted(true)}
              className="w-full bg-army hover:bg-emerald-800 text-white py-6 rounded-2xl font-black uppercase text-2xl tracking-widest shadow-xl transition-all flex items-center justify-center gap-4"
            >
              <ShieldCheck size={32} /> Start Application Form
            </button>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <MembershipForm />
            <button 
              onClick={() => setIsStarted(false)}
              className="mt-8 text-gray-500 font-bold uppercase text-xs hover:text-army tracking-widest"
            >
              &larr; Go Back to Instructions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Membership;
