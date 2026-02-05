
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ShieldCheck, Heart } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About MPF', path: '/about' },
    { name: 'Benefits', path: '/benefits' },
    { name: 'Membership', path: '/membership' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-army selection:text-white">
      {/* Top Banner */}
      <div className="bg-army text-white py-2 px-4 text-xs font-bold uppercase tracking-widest text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <span className="relative z-10">"It's Not The Guns But God That Saves"</span>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b-2 border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 h-24 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-xl shadow-lg shadow-army/10">
              <img 
                src="https://i.ibb.co/mFTZzxrG/MPF.png" 
                alt="MPF Logo" 
                className="w-14 h-14 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black leading-none text-army tracking-tighter">MPF NIGERIA</span>
              <span className="text-[9px] md:text-[11px] uppercase font-black text-emerald-700 tracking-widest mt-1">Nigeria / Diaspora</span>
            </div>
          </Link>

          <nav className="hidden lg:flex space-x-8 font-black text-xs uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`${location.pathname === link.path ? 'text-army border-b-2 border-army' : 'text-gray-500 hover:text-army'} transition-all py-1`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link to="/membership" className="hidden md:block bg-army hover:bg-emerald-900 text-white px-8 py-3 rounded-md font-black text-xs uppercase transition-all shadow-xl hover:-translate-y-0.5 active:translate-y-0">
            Join Fellowship
          </Link>

          <button className="lg:hidden text-army p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-army text-white absolute w-full p-8 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-xl font-black uppercase tracking-widest border-b border-white/10 pb-3">{link.name}</Link>
              ))}
              <Link to="/membership" className="bg-white text-army text-center py-4 rounded-xl font-black tracking-widest text-lg shadow-2xl">MEMBERSHIP FORM</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 pt-20 pb-10 border-t-8 border-army relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://i.ibb.co/mFTZzxrG/MPF.png" 
                alt="MPF Logo" 
                className="w-12 h-12 object-contain brightness-110"
              />
              <h3 className="text-white font-black uppercase text-sm tracking-[0.2em]">Business Name</h3>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-sm font-bold leading-relaxed text-gray-200 uppercase tracking-tight">
                HEAR THEIR CRY PRAYER FELLOWSHIP:<br />
                <span className="text-army text-xs mt-1 block">Aka: Military Prayer Fellowship (MPF) Nigeria/Diaspora.</span>
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">CAC No. 8416265</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-black uppercase text-sm border-l-4 border-army pl-4 tracking-[0.2em]">National Office</h3>
            <p className="text-sm font-medium leading-relaxed text-gray-300">
              OPETE TOWN: Altar Prayer Mountain, 2nd Street Left, High Tension Rd, Warri, Delta State, Nigeria.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-black uppercase text-sm border-l-4 border-army pl-4 tracking-[0.2em]">Support Lines</h3>
            <div className="space-y-2">
              <p className="text-lg font-black text-gray-100">+234 802 374 6737</p>
              <p className="text-lg font-black text-gray-100">+234 805 868 9937</p>
            </div>
            <p className="text-xs text-emerald-500 font-black uppercase tracking-widest mt-4">militaryprayerfellowship@gmail.com</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-black uppercase text-sm border-l-4 border-army pl-4 tracking-[0.2em]">Core Mantra</h3>
            <p className="text-3xl font-oswald italic text-emerald-400 font-bold drop-shadow-2xl uppercase tracking-tighter leading-none">
              "Strong Men Still Seek God!"
            </p>
            <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.3em]">Hear Their Cry Mission Arm</p>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-10"></div>
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-600">
            &copy; {new Date().getFullYear()} Military Prayer Fellowship (MPF) Nigeria/Diaspora | All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
