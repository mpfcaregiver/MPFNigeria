
import React from 'react';
import { MapPin, Phone, Mail, CreditCard, Building } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[40vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/DPgrCpcQ/MPF-6.jpg" 
            alt="MPF Contact background" 
            className="w-full h-full object-cover brightness-[0.35]" 
          />
          <div className="absolute inset-0 bg-army/40"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Contact & Support</h1>
          <p className="text-lg md:text-2xl font-bold text-emerald-300 uppercase tracking-widest">Reach Our National Mission Office</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="flex gap-6 items-start">
            <div className="bg-army p-4 rounded-xl text-white"><MapPin size={32} /></div>
            <div>
              <h3 className="text-2xl font-black text-army uppercase mb-2">Office Address</h3>
              <p className="text-gray-700 leading-relaxed font-bold">
                OPETE TOWN: AltarPrayer Mountain Udu/WARRI.<br />
                OFF DSC EXPRESS WAY OTOKUTU JUNCTION. 2nd STREET LEFT,<br />
                HIGH TENSION R/D AFTER DEEPER LIFE HIGH SCH OPETE.<br />
                UDU/WARRI DELTA STATE NIGERIA.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="bg-army p-4 rounded-xl text-white"><Phone size={32} /></div>
            <div>
              <h3 className="text-2xl font-black text-army uppercase mb-2">Direct Lines</h3>
              <p className="text-2xl font-bold text-army">+2348023746737</p>
              <p className="text-2xl font-bold text-army">+2348058689937</p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="bg-army p-4 rounded-xl text-white"><Mail size={32} /></div>
            <div>
              <h3 className="text-2xl font-black text-army uppercase mb-2">Official Email</h3>
              <p className="text-lg font-bold text-gray-700">militaryprayerfellowship@gmail.com</p>
              <p className="text-lg font-bold text-gray-700">usamilitaryprayerfellowship1@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-10 rounded-3xl border-2 border-army shadow-2xl space-y-8">
           <div className="flex items-center gap-4 text-army border-b-2 border-army pb-4">
             <CreditCard size={40} />
             <h2 className="text-3xl font-black uppercase tracking-tight">Banking Details</h2>
           </div>
           <p className="font-black text-red-600 uppercase text-xs tracking-[0.2em] mb-4">"NO CASH HANDLING - BANK DEPOSIT ONLY"</p>
           
           <div className="space-y-6">
             <div>
               <p className="text-[10px] uppercase font-black text-gray-500">Bank Name</p>
               <p className="text-2xl font-black text-army">UBA (United Bank for Africa)</p>
             </div>
             <div>
               <p className="text-[10px] uppercase font-black text-gray-500">Account Number</p>
               <p className="text-4xl font-black text-army font-oswald tracking-widest">1028334218</p>
             </div>
             <div>
               <p className="text-[10px] uppercase font-black text-gray-500">Account Name</p>
               <p className="text-xl font-black text-gray-800">HEAR THEIR CRY PRAYER FELLOWSHIP</p>
               <p className="text-sm italic font-bold opacity-60">Aka: Military Prayer Fellowship (MPF)</p>
             </div>
             <div className="bg-army p-6 rounded-2xl text-white text-center">
                <p className="text-xs font-bold uppercase mb-1">Registration Token</p>
                <p className="text-3xl font-black">#10,000 / $7 USD</p>
                <p className="text-[10px] uppercase mt-2 opacity-70">Send receipt to email above</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
