
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Target,
  Users,
  BookOpen,
  Heart,
  Award,
  Shield,
  Star,
  Zap,
  Phone,
  ArrowRight,
  Medal
} from 'lucide-react';

const About: React.FC = () => {
  const leadershipImages = [
    "https://i.ibb.co/7NvXWMXm/Whats-App-Image-2026-02-03-at-3-18-36-PM-1.jpg",
    "https://i.ibb.co/jvwwDX2r/Whats-App-Image-2026-02-03-at-3-18-36-PM.jpg",
    "https://i.ibb.co/0yQCJPxZ/Whats-App-Image-2026-02-03-at-3-18-35-PM-1.jpg",
    "https://i.ibb.co/mrgCk18k/Whats-App-Image-2026-02-03-at-3-18-35-PM.jpg",
    "https://i.ibb.co/yx3DHDk/Whats-App-Image-2026-02-03-at-3-18-34-PM-1.jpg",
    "https://i.ibb.co/fzjZwR01/Whats-App-Image-2026-02-03-at-3-18-34-PM.jpg",
    "https://i.ibb.co/zVHgQczW/Whats-App-Image-2026-02-03-at-3-18-32-PM.jpg",
    "https://i.ibb.co/FqYc5Sbb/Whats-App-Image-2026-02-03-at-3-18-31-PM.jpg",
    "https://i.ibb.co/PqGdFSh/Whats-App-Image-2026-02-03-at-3-18-30-PM-2.jpg",
    "https://i.ibb.co/v4RfBkBb/Whats-App-Image-2026-02-03-at-3-18-30-PM-1.jpg",
    "https://i.ibb.co/MxjzT2YJ/Whats-App-Image-2026-02-03-at-3-18-30-PM.jpg",
    "https://i.ibb.co/2187nc6X/Whats-App-Image-2026-02-03-at-3-18-29-PM-3.jpg",
    "https://i.ibb.co/B2RhP9r1/Whats-App-Image-2026-02-03-at-3-18-29-PM-1.jpg",
    "https://i.ibb.co/chydHxr0/Whats-App-Image-2026-02-03-at-3-18-29-PM.jpg",
    "https://i.ibb.co/ycvwWyXt/Whats-App-Image-2026-02-03-at-3-18-28-PM-2.jpg",
    "https://i.ibb.co/vCjFBTm9/Whats-App-Image-2026-02-03-at-3-18-28-PM-1.jpg",
    "https://i.ibb.co/Y4vN37CQ/Whats-App-Image-2026-02-03-at-3-18-28-PM.jpg",
    "https://i.ibb.co/pBQJG85N/Whats-App-Image-2026-02-03-at-3-18-27-PM.jpg",
    "https://i.ibb.co/zWNxps1Y/Whats-App-Image-2026-02-03-at-3-18-26-PM-3.jpg",
    "https://i.ibb.co/3y2y78FZ/Whats-App-Image-2026-02-03-at-3-18-26-PM-2.jpg",
    "https://i.ibb.co/WvJhdQnQ/Whats-App-Image-2026-02-03-at-3-18-26-PM-1.jpg",
    "https://i.ibb.co/0jYkRQj8/Whats-App-Image-2026-02-03-at-3-18-26-PM.jpg",
    "https://i.ibb.co/cKgZhCjs/Whats-App-Image-2026-02-03-at-3-18-23-PM-1.jpg",
    // Newly Added Batch
    "https://i.ibb.co/fG8X7KGQ/Whats-App-Image-2026-02-03-at-3-24-49-PM.jpg",
    "https://i.ibb.co/nMbg3WPP/Whats-App-Image-2026-02-03-at-3-24-41-PM-1.jpg",
    "https://i.ibb.co/C5Bjs2QP/Whats-App-Image-2026-02-03-at-3-24-42-PM.jpg",
    "https://i.ibb.co/N2PNXmXq/Whats-App-Image-2026-02-03-at-3-24-35-PM.jpg",
    "https://i.ibb.co/7FX0cVF/Whats-App-Image-2026-02-03-at-3-24-27-PM.jpg"
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. PAGE HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/DPgrCpcQ/MPF-6.jpg"
            alt="Military personnel mission"
            className="w-full h-full object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-army/40"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            About Military Prayer Fellowship (MPF)
          </h1>
          <p className="text-lg md:text-2xl font-bold text-emerald-300 uppercase tracking-widest mb-6">
            Hear Their Cry Prayer Fellowship – Nigeria / Diaspora
          </p>
          <div className="bg-white/10 backdrop-blur-sm border-y border-white/20 py-4 px-8 inline-block">
            <p className="text-xl md:text-3xl font-oswald italic font-bold uppercase tracking-tight">
              “IT’S NOT THE GUNS BUT GOD THAT SAVES.”
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-black text-army uppercase mb-8 border-b-4 border-army pb-2 inline-block">
              Who We Are
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                The <strong>Military Prayer Fellowship (MPF) Nigeria/Diaspora</strong> is a Paramilitary Mission and Evangelism arm of <strong>Hear Their Cry Prayer Fellowship Inc. (CAC No. 8416265).</strong>
              </p>
              <p>
                MPF was established in response to a divine vision concerning the deep needs, pains, and challenges faced by military personnel, particularly in the Niger Delta region and across the nation.
              </p>
              <p>
                We exist to provide prayer encouragement, spiritual support, and holistic care to military men and women and their families, both in Nigeria and the Diaspora.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://i.ibb.co/qLWzmy8p/MPF-9.jpg"
              className="rounded-3xl shadow-2xl border-2 border-army/10 object-cover w-full h-full"
              alt="MPF Mission Fellowship"
            />
          </div>
        </div>
      </section>

      {/* 3. ABOUT DR. DOMINION D. DOM (APOSTLE) */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <img
              src="https://i.ibb.co/YwWfBNk/MPF-14.jpg"
              className="rounded-3xl shadow-2xl border-2 border-army/10"
              alt="Dr. Dominion D. Dom (Apostle)"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black text-army uppercase mb-8 border-b-4 border-army pb-2 inline-block">
              About Dr. Dominion D. Dom (Apostle)
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-medium">
              <p>
                Apostle Dr. Dominic Denedo Dominion is a seasoned and renowned gospel preacher with over four decades of ministry experience. He is a prolific writer, with numerous Christian books to his credit, and a passionate servant of God committed to AltarPrayers, discipleship, and kingdom impact.
              </p>
              <p>
                He leads a registered dedicated body (ORGANIZATION) of Christian soldiers (clergy) known as “Hear Their Cry Prayer Fellowship” Inc., also called Military Prayer Fellowship (MPF) Nigeria/Diaspora. MPF is a prayer-driven fellowship committed to serving members of the military community in Nigeria and across the diaspora as CARE-GIVERS, intercessors, and spiritual support partners.
              </p>
              <p>
                As the Chairman and Founder of MPF Nigeria/Diaspora, Apostle Dr. Dominion has established MPF chapters across Nigeria and overseas with membership stretching over a hundred at it's first year of conception.
              </p>
              <p>
                He is also the Founder and Senior Pastor of Opete Altar Prayer Mountain Inc, a ministry devoted to prayer, revival, and spiritual restoration.
                In addition, he is the CEO of Hear Their Cry Dominic Dominion AltarPrayer Foundation, an Orphanage Children’s Home located in Udu/Warri, Delta State, Nigeria, dedicated to caring for vulnerable children, widows and old people, restoring hope.
              </p>
              <p>
                Apostle Dr. Dominic Denedo Dominion is a devoted family man, happily married to Rev. (Mrs) Dominion Favour Emoyoma, and they are blessed with three grown children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP & GOVERNANCE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-army uppercase mb-4">Leadership & Governance</h2>
            <div className="w-24 h-2 bg-army mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Convener */}
            <div className="bg-gray-50 p-8 rounded-3xl border-t-8 border-army shadow-lg flex flex-col items-center text-center">
              <img src="https://i.ibb.co/XqKvMtR/MPF-4.jpg" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-army/10 shadow-lg" alt="Dr. Dominion D. Dom" />
              <h3 className="text-2xl font-black text-army uppercase mb-2">Dr. Dominion D. Dom (Apostle)</h3>
              <p className="text-emerald-700 font-bold uppercase text-xs tracking-widest mb-4">Convener / President</p>
              <ul className="text-gray-600 space-y-2 font-medium">
                <li>Former NCC 2nd Lt. Chaplain Officer</li>
                <li>Over 16 years of service experience in Delta State</li>
              </ul>
            </div>
            {/* Grand Commander */}
            <div className="bg-gray-50 p-8 rounded-3xl border-t-8 border-army shadow-lg flex flex-col items-center text-center">
              <img src="https://i.ibb.co/WvgM8Zj9/MPF-3.jpg" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-army/10 shadow-lg" alt="MWO Rev. Dr. Butswat Istifanus" />
              <h3 className="text-2xl font-black text-army uppercase mb-2">MWO Rev. Dr. Butswat Istifanus Hausa (Rtd.)</h3>
              <p className="text-emerald-700 font-bold uppercase text-xs tracking-widest mb-4">Grand Commander (GC) / Patron</p>
              <ul className="text-gray-600 space-y-2 font-medium">
                <li>Former JTF Chaplain</li>
                <li>Rehabilitation & Mental Health Counselor</li>
                <li>Stress Management Specialist</li>
              </ul>
              <p className="mt-6 text-sm italic text-gray-500 font-medium">
                Rev. Dr. Butswat remains an active member of MPF, offering spiritual, emotional, and mental health support to military personnel and their families.
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-army font-black uppercase tracking-widest text-lg">
              Chief Admin Commander (CAC)
            </p>
            <p className="text-gray-500 font-bold uppercase text-xs tracking-[0.2em]">For MPF Nigeria / Diaspora</p>
          </div>
        </div>
      </section>

      {/* NEW: COMMISSIONED OFFICERS & PILLARS SECTION */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-white rounded-2xl shadow-sm mb-4">
              <Medal className="text-army" size={32} />
            </div>
            <h2 className="text-4xl font-black text-army uppercase mb-4">Commissioned Officers & Pillars</h2>
            <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em]">Recognition of Service and Impact</p>
            <div className="w-24 h-1 bg-army mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {leadershipImages.map((url, index) => (
              <div key={index} className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-2 border-white hover:border-army transition-all transform hover:-translate-y-1">
                <img
                  src={url}
                  alt={`MPF Officer ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-army/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-army/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-[10px] text-white font-black uppercase tracking-widest text-center">MPF Pillar</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest max-w-2xl mx-auto leading-relaxed">
              These are the dedicated men and women standing as pillars of the Military Prayer Fellowship,
              ensuring the vision reaches every barrack and military community.
            </p>
          </div>
        </div>
      </section>

      {/* 5. OUR SPIRITUAL STAND */}
      <section className="relative py-32 text-white text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/qLWzmy8p/MPF-9.jpg"
            className="w-full h-full object-cover brightness-[0.45]"
            alt="Worship raised hands at the altar"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-[0.3em] text-emerald-400 mb-8">Our Spiritual Stand</h2>
          <div className="space-y-8">
            <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90 italic">
              MPF stands as a testimony to the Power of Prayer at the Altar, drawing military men and women back to God with the firm belief that:
            </p>
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20">
              <h3 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-4 uppercase">
                “IT’S NOT THE GUNS BUT GOD THAT SAVES.”
              </h3>
            </div>
            <p className="text-2xl md:text-5xl font-black uppercase tracking-tight text-emerald-300">
              “STRONG MEN STILL SEEK GOD”
            </p>
            <p className="text-lg md:text-xl font-oswald font-bold uppercase tracking-widest text-white/80 mt-12">
              We honour military men and women who serve the nation in rain, sun, and cold.
            </p>
          </div>
        </div>
      </section>

      {/* 6. OUR VISION & MISSION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-army uppercase mb-4">Our Vision & Mission</h2>
            <p className="text-emerald-700 font-bold uppercase text-xs tracking-widest">Our Mission Objectives</p>
            <div className="w-24 h-2 bg-army mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <BookOpen />, text: "To pray and preach the Gospel of our Lord Jesus Christ to military personnel." },
              { icon: <ShieldCheck />, text: "To join hands in prayer for the protection of officers on active duty and their families, extending the healing hands of Jesus through spiritual and material support." },
              { icon: <Award />, text: "To award scholarships, especially to the children of fallen heroes." },
              { icon: <Heart />, text: "To refurbish and build barrack churches and officers’ homes." },
              { icon: <Target />, text: "To provide security information." },
              { icon: <Users />, text: "To organize monthly Altar Prayer and fasting in collaboration with Chaplain Officers, including Holy Communion and needs-based support." },
              { icon: <Star />, text: "To conduct end-of-year mission outreach through the Military Couples Dinner Night (MCDN)." },
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-gray-50 rounded-2xl border-b-8 border-army/10 hover:border-army hover:bg-white transition-all shadow-sm hover:shadow-xl">
                <div className="text-army mb-6 p-4 bg-white rounded-xl shadow-sm inline-block group-hover:bg-army group-hover:text-white transition-colors">
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <p className="text-gray-700 font-bold uppercase text-sm leading-relaxed">
                  <span className="text-army mr-2 text-xl font-black">{i + 1}.</span> {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR CHARITABLE FOCUS */}
      <section className="py-24 bg-army text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://i.ibb.co/wFc8Qq6R/MPF-7.jpg"
              className="rounded-3xl shadow-2xl border-2 border-white/20 object-cover"
              alt="Barracks outreach"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-xl shadow-2xl text-army hidden md:block">
              <Zap className="mb-2 text-emerald-600" />
              <p className="font-black text-xl uppercase italic">Impact</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black uppercase mb-8 border-b-4 border-white pb-2 inline-block">
              Our Charitable Focus
            </h2>
            <div className="space-y-6 text-lg leading-relaxed font-medium">
              <p>
                MPF’s primary outreach focus is the <strong>Nigerian Army</strong>.
                By extension, MPF also reaches out to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['The Nigerian Navy', 'The Nigerian Air Force', 'The Nigerian Police Force'].map((arm) => (
                  <div key={arm} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20">
                    <Star className="text-emerald-400 shrink-0" size={20} />
                    <span className="font-black uppercase text-sm tracking-widest">{arm}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 opacity-80 italic">
                Through prayer, evangelism, outreach programs, and material support, MPF continues to impact military personnel and their families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FUNDING & SUPPORT */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black text-army uppercase mb-8">Funding & Support</h2>
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
            <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-6">MPF is funded by:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {['Apostle Dr. Dominion D. Dom', 'MPF partners', 'Member contributions', 'Mission offerings'].map(src => (
                <div key={src} className="p-4 bg-gray-50 rounded-xl font-black text-army uppercase text-sm tracking-widest flex items-center justify-center gap-3">
                  <Zap size={16} className="text-emerald-500" /> {src}
                </div>
              ))}
            </div>
            <p className="text-xl text-gray-700 font-medium italic leading-relaxed">
              "We are open to grants and donations from well-meaning individuals, financial institutions, and grant makers."
            </p>
          </div>
        </div>
      </section>

      {/* 9. AFFILIATION & OPERATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black text-army uppercase mb-8 border-b-4 border-army pb-2 inline-block">
              Affiliation & Operations
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-medium">
              <p>
                MPF is officially attached to the <strong>Nigerian Army Chaplain Office, 3 Battalion, Effurun Barracks, Warri, Delta State.</strong>
              </p>
              <div className="p-8 bg-emerald-50 rounded-2xl border-l-8 border-army italic text-army">
                "As part of our outreach culture, MPF periodically stops at military military checkpoints to offer prayer, share communion, and provide support to military personnel on duty."
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://i.ibb.co/tpNbmHc0/MPF-12.jpg"
              className="rounded-3xl shadow-2xl border-2 border-army/10 object-cover w-full"
              alt="Military checkpoint prayer and outreach"
            />
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-12">
            <img
              src="https://i.ibb.co/6JDLgTLF/MPF-13.jpg"
              className="w-full h-64 object-cover rounded-3xl shadow-2xl mb-12"
              alt="Fellowship gathering prayer mountain"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-army uppercase mb-8 tracking-tighter">
            Join Us in Prayer
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
            We invite ministers of the Gospel and men and women of notable character and integrity to join hands with us in prayer and service to those who serve the nation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/membership" className="bg-army text-white px-12 py-5 rounded-md font-black uppercase text-lg tracking-[0.2em] shadow-2xl hover:bg-emerald-800 transition-all flex items-center justify-center gap-2">
              Become a Member <ShieldCheck />
            </Link>
            <Link to="/contact" className="bg-white border-2 border-army text-army px-12 py-5 rounded-md font-black uppercase text-lg tracking-[0.2em] shadow-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              Contact MPF <Phone />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
