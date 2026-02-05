
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Heart,
  Users,
  ChevronRight,
  Play,
  BookOpen,
  Award,
  Target,
  Phone,
  Mail,
  MapPin,
  Star,
  Zap
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 animate-pulse-slow">
          <img
            src="https://i.ibb.co/FkQbmqpF/MPF.jpg"
            alt="Military personnel in prayer"
            className="w-full h-full object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-army/70 via-transparent to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 px-6 py-2 rounded-full mb-8 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="text-emerald-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Nigeria / Diaspora Outreach</p>
            </div>

            <h1 className="text-4xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tighter leading-[0.9] uppercase drop-shadow-2xl">
              Military Prayer <br className="hidden md:block" />
              <span className="text-emerald-400">Fellowship</span>
            </h1>

            <p className="text-xl md:text-3xl font-black mb-10 text-white uppercase tracking-[0.2em] opacity-90">
              Hear Their Cry Prayer Fellowship
            </p>

            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border-y border-white/10 py-10 mb-12 transform -skew-x-2">
              <h3 className="text-2xl md:text-6xl font-oswald italic font-bold text-white uppercase tracking-tighter leading-none">
                “IT’S NOT THE GUNS <span className="text-emerald-500 underline decoration-army underline-offset-8">BUT GOD</span> THAT SAVES.”
              </h3>
            </div>

            <p className="text-sm md:text-lg max-w-3xl mx-auto mb-12 text-gray-300 leading-relaxed font-bold uppercase tracking-wide">
              Standing in the gap for military personnel through prayer, evangelism,
              and holistic spiritual support across the globe.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/membership" className="bg-white text-army px-14 py-5 rounded-md font-black uppercase text-sm tracking-[0.2em] shadow-2xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 group">
                Join The Mission <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/membership" className="bg-army/40 backdrop-blur-sm border-2 border-white/20 text-white px-14 py-5 rounded-md font-black uppercase text-sm tracking-[0.2em] hover:bg-army/60 transition-all shadow-xl">
                Membership Form
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-12 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-army/5 rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
            <img
              src="https://i.ibb.co/qYdQqtkx/MPF-1.jpg"
              className="relative z-10 rounded-3xl shadow-2xl border-2 border-army/10 w-full object-cover"
              alt="Soldiers praying gathering"
            />
            <div className="absolute -bottom-10 -right-10 z-20 bg-army p-10 rounded-2xl shadow-2xl text-white hidden md:block border-b-8 border-emerald-500">
              <Zap className="mb-4 text-emerald-400" size={32} />
              <p className="font-black text-2xl uppercase italic leading-none">Global<br />Mission</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1 bg-army text-white text-[10px] font-black uppercase tracking-[0.4em] mb-6 rounded">The Call to Arms</div>
            <h2 className="text-5xl md:text-6xl font-black text-army uppercase mb-10 leading-[1.1]">
              Who We Are
            </h2>
            <div className="space-y-8 text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
              <p>
                The <strong>Military Prayer Fellowship (MPF) Nigeria/Diaspora</strong> is the Paramilitary Mission and Evangelism arm of
                <strong> Hear Their Cry Prayer Fellowship Inc. (CAC No. 8416265).</strong>
              </p>
              <p className="border-l-4 border-army pl-8 italic text-army bg-army/5 py-6 rounded-r-2xl">
                Established in response to a divine vision to address the deep needs, spiritual pains, and challenges faced by military personnel serving the nation.
              </p>
              <p>
                We provide a sanctuary of prayer, emotional encouragement, and holistic care for the men and women in uniform and their families, ensuring they are never alone on the battlefield of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDING & LEADERSHIP */}
      <section className="py-12 md:py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-6 rounded">Our Governance</div>
              <h2 className="text-5xl md:text-6xl font-black text-army uppercase mb-10">Command &<br />Leadership</h2>
              <div className="space-y-8 text-gray-700 text-lg leading-relaxed font-medium">
                <p>
                  MPF was convened by <strong>Dr. Dominion D. Dom (Apostle)</strong>, a veteran with over 16 years of service experience as an NCC 2nd Lt. Chaplain Officer.
                </p>
                <p>
                  Supported by <strong>MWO Rev. Dr. Butswat Istifanus Hausa (Rtd.)</strong>, our Grand Commander and Patron, who brings decades of specialized experience in Rehabilitation and Mental Health.
                </p>
                <div className="pt-6">
                  <Link to="/about" className="text-army font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
                    Full Leadership Bio <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-army text-center hover:shadow-2xl transition-all group">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-army rounded-full scale-110 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <img src="https://i.ibb.co/XqKvMtR/MPF-4.jpg" className="w-40 h-40 rounded-full object-cover border-4 border-army/10 shadow-lg relative z-10" alt="Dr. Dominion D. Dom" />
                </div>
                <h3 className="text-2xl font-black text-army uppercase mb-2">Dr. Dominion D. Dom</h3>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Convener / President</p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-army text-center hover:shadow-2xl transition-all group">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-army rounded-full scale-110 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <img src="https://i.ibb.co/WvgM8Zj9/MPF-3.jpg" className="w-40 h-40 rounded-full object-cover border-4 border-army/10 shadow-lg relative z-10" alt="MWO Rev. Dr. Butswat Istifanus" />
                </div>
                <h3 className="text-2xl font-black text-army uppercase mb-2">MWO Rev. Dr. Butswat</h3>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Grand Commander</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPIRITUAL STAND */}
      <section className="relative py-40 text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/G43tJV6S/MPF-5.jpg"
            className="w-full h-full object-cover brightness-[0.4] scale-110"
            alt="Altar prayer"
          />
          <div className="absolute inset-0 bg-army/30 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-[0.5em] text-emerald-400 mb-12 drop-shadow-xl">Our Unwavering Stand</h2>
          <div className="space-y-12">
            <div className="bg-white/5 backdrop-blur-xl p-16 rounded-[3rem] border border-white/10 shadow-3xl">
              <h3 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 uppercase leading-none">
                “IT’S NOT THE GUNS <br />BUT <span className="text-emerald-500">GOD</span> THAT SAVES.”
              </h3>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <p className="text-3xl md:text-6xl font-black uppercase tracking-tight text-white/90">
                “STRONG MEN <span className="text-emerald-400 italic">STILL</span> SEEK GOD”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <ShieldCheck size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-army uppercase mb-10 tracking-tighter">
            Enlist in the <br className="hidden md:block" />Army of Prayer
          </h2>
          <p className="text-xl md:text-3xl text-gray-500 font-medium max-w-4xl mx-auto mb-16 leading-relaxed uppercase tracking-tight">
            We invite ministers of the gospel and men of integrity to join hands in this global spiritual mission.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Link to="/membership" className="w-full md:w-auto bg-army text-white px-16 py-7 rounded-md font-black uppercase text-xl tracking-[0.2em] shadow-2xl hover:bg-emerald-900 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1">
              Become a Member <ShieldCheck size={28} />
            </Link>
            <Link to="/contact" className="w-full md:w-auto bg-white border-4 border-army text-army px-16 py-6 rounded-md font-black uppercase text-xl tracking-[0.2em] shadow-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
              Contact Office <Phone size={28} />
            </Link>
          </div>
          <p className="mt-12 text-gray-400 font-black uppercase tracking-[0.3em] text-[10px]">Active Missions in Nigeria and the Diaspora</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
