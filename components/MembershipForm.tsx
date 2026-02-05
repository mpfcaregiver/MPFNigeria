import React, { useState } from 'react';
import { CheckCircle, ShieldCheck, Home, Loader2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MembershipForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xkovwjkg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        window.scrollTo(0, 0);
      } else {
        const data = await response.json();
        // Fix: Use Object.prototype.hasOwnProperty.call instead of Object.hasOwn for compatibility with older ES versions
        if (data && Object.prototype.hasOwnProperty.call(data, 'errors')) {
          setError(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          setError("Oops! There was a problem submitting your form. Please try again.");
        }
      }
    } catch (err) {
      setError("Network error. Please check your internet connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-12 md:p-24 text-center rounded-3xl shadow-2xl border-t-8 border-army animate-in fade-in zoom-in duration-500">
        <div className="flex justify-center mb-8">
          <div className="bg-emerald-100 p-6 rounded-full text-emerald-600">
            <CheckCircle size={80} />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-army uppercase mb-6">Application Received!</h2>
        <p className="text-xl text-gray-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          Thank you for applying to the <strong>Military Prayer Fellowship</strong>. Your application has been submitted successfully for strict investigation and verification.
        </p>
        <div className="bg-gray-50 p-8 rounded-2xl mb-12 border border-dashed border-gray-300">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Next Steps:</p>
          <p className="text-army font-black uppercase text-lg">Send your payment receipt and phone number to:</p>
          <p className="text-emerald-600 font-black text-xl mt-2 select-all">militaryprayerfellowship@gmail.com</p>
        </div>
        <Link 
          to="/" 
          className="inline-flex items-center gap-3 bg-army text-white px-12 py-5 rounded-xl font-black uppercase text-lg tracking-widest shadow-xl hover:bg-emerald-800 transition-all"
        >
          <Home size={24} /> Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 border-2 border-gray-300 form-print-shadow font-serif">
      {/* Header section replica */}
      <div className="text-center mb-10 pb-6 border-b-2 border-army">
        <h2 className="text-2xl md:text-4xl font-black text-army uppercase leading-none">HEAR THEIR CRY PRAYER FELLOWSHIP</h2>
        <p className="text-sm font-bold text-gray-600 italic mt-1">(Aka...Military Prayer Fellowship Nig.)</p>
        <p className="text-[10px] md:text-xs font-bold uppercase mt-4 max-w-xl mx-auto tracking-tighter">
          OPETE TOWN: ALTAR PRAYER MOUNTAIN BY HIGH TENSION RD. OFF DSC EXPRESSWAY OTOKUTU JUNCTION, UDU/WARRI, DELTA STATE NIGERIA.
        </p>
        <div className="mt-8 flex justify-between items-center px-4">
          <div className="bg-black text-white px-6 py-2 font-black text-xl uppercase tracking-widest">MEMBERSHIP FORM</div>
          <div className="text-right">
             <p className="text-xl font-black text-army">#10,000 / $7</p>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-600 text-red-800 flex items-center gap-3 font-bold uppercase text-xs">
          <AlertCircle size={20} />
          {error}
        </div>
      )}

      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
           <div className="border border-gray-400 p-4 text-[10px] uppercase font-bold bg-gray-50">
             INSTRUCTION: All Sections in this form must be completed in block letters. The Mission will verify all information giving in this form.
           </div>
           <div className="flex flex-col justify-end space-y-4 text-xs font-bold uppercase">
              <div className="flex gap-2"><span>No:</span> <input name="form_serial_no" type="text" className="border-b border-black flex-grow outline-none bg-transparent" /></div>
              <div className="flex gap-2"><span>Official Receipt No:</span> <input name="receipt_no" type="text" className="border-b border-black flex-grow outline-none bg-transparent" /></div>
           </div>
        </div>

        {/* Part 1: Personal */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="flex flex-col"><label className="text-[10px] font-black uppercase">Name (Surname):</label><input name="surname" type="text" required className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" /></div>
             <div className="flex flex-col"><label className="text-[10px] font-black uppercase">Other-Name:</label><input name="other_name" type="text" required className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" /></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             <div className="flex flex-col"><label className="text-[10px] font-black uppercase">Date of Birth:</label><input name="dob" type="text" required className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" /></div>
             <div className="flex flex-col"><label className="text-[10px] font-black uppercase">Sex:</label><div className="flex gap-4 mt-1"><label className="text-xs"><input name="sex" value="Male" type="radio" className="mr-1"/> M</label><label className="text-xs"><input name="sex" value="Female" type="radio" className="mr-1"/> F</label></div></div>
             <div className="flex flex-col md:col-span-2"><label className="text-[10px] font-black uppercase">Nationality:</label><input name="nationality" type="text" required className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="flex flex-col"><label className="text-[10px] font-black uppercase">Local Govt. of Origin:</label><input name="lga" type="text" required className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" /></div>
             <div className="flex flex-col"><label className="text-[10px] font-black uppercase">State of Origin:</label><input name="state" type="text" required className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" /></div>
          </div>
          <div className="flex flex-wrap gap-6">
             <label className="text-[10px] font-black uppercase">Marital Status:</label>
             {['Married', 'Divorced', 'Single', 'Widow'].map(s => <label key={s} className="text-xs font-bold"><input name="marital_status" value={s} type="radio" className="mr-1"/> {s}</label>)}
          </div>
          <div className="flex flex-col"><label className="text-[10px] font-black uppercase">Religion:</label><input name="religion" type="text" required className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" /></div>
          <div className="flex flex-col"><label className="text-[10px] font-black uppercase">Postal Address:</label><textarea name="postal_address" rows={2} className="border-b-2 border-gray-300 outline-none p-1 focus:border-army resize-none bg-transparent" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="flex flex-col"><label className="text-[10px] font-black uppercase">Tel:</label><input name="phone" type="text" required className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" /></div>
             <div className="flex flex-col"><label className="text-[10px] font-black uppercase">E-mail:</label><input name="email" type="email" required className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" /></div>
          </div>
          <div className="flex flex-col"><label className="text-[10px] font-black uppercase">Permanent Home Address:</label><input name="permanent_address" type="text" required className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" /></div>
          <div className="flex flex-col"><label className="text-[10px] font-black uppercase">Residential Address:</label><input name="residential_address" type="text" required className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" /></div>
        </div>

        {/* Part 2: Education */}
        <div className="pt-10">
          <h3 className="text-xs font-black uppercase mb-6 border-b-2 border-black inline-block">Educational Institution Attended/Date:</h3>
          <div className="space-y-6">
             <div className="flex flex-col"><label className="text-[10px] font-black uppercase">Pri/Sec. Sch:</label><input name="education_pri_sec" type="text" className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" /></div>
             <div className="flex flex-col"><label className="text-[10px] font-black uppercase">University:</label><input name="education_uni" type="text" className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" /></div>
             <div className="flex flex-col"><label className="text-[10px] font-black uppercase">Other Institutions:</label><input name="education_other" type="text" className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" /></div>
          </div>
        </div>

        {/* Part 3: Employment Table */}
        <div className="pt-10">
          <h3 className="text-xs font-black uppercase mb-6">EMPLOYMENT HISTORY</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-black min-w-[600px]">
               <thead>
                 <tr className="bg-gray-100 text-[10px] font-black uppercase">
                   <th className="border border-black p-2">Organization</th>
                   <th className="border border-black p-2">Position</th>
                   <th className="border border-black p-2">Occupied</th>
                   <th className="border border-black p-2">from</th>
                   <th className="border border-black p-2">To</th>
                 </tr>
               </thead>
               <tbody>
                 {[1,2,3].map(i => (
                   <tr key={i}>
                    <td className="border border-black h-8"><input name={`employment_org_${i}`} type="text" className="w-full h-full outline-none px-1 bg-transparent" /></td>
                    <td className="border border-black h-8"><input name={`employment_pos_${i}`} type="text" className="w-full h-full outline-none px-1 bg-transparent" /></td>
                    <td className="border border-black h-8"><input name={`employment_occ_${i}`} type="text" className="w-full h-full outline-none px-1 bg-transparent" /></td>
                    <td className="border border-black h-8"><input name={`employment_from_${i}`} type="text" className="w-full h-full outline-none px-1 bg-transparent" /></td>
                    <td className="border border-black h-8"><input name={`employment_to_${i}`} type="text" className="w-full h-full outline-none px-1 bg-transparent" /></td>
                  </tr>
                 ))}
               </tbody>
            </table>
          </div>
        </div>

        {/* Ministry Section */}
        <div className="pt-10 space-y-6">
          {[
            { label: 'Current Employer', name: 'ministry_employer' },
            { label: 'Address of Employer', name: 'ministry_employer_address' },
            { label: 'Current Position held', name: 'ministry_position' },
            { label: 'Name of Church', name: 'ministry_church' },
            { label: 'Name of your General Overseer/Tel No', name: 'ministry_go_info' },
            { label: 'State years of Experience in the Ministry', name: 'ministry_experience' },
            { label: 'Why do you want to join the Chaplain?', name: 'ministry_why_join' },
            { label: 'State other Organization(s) where you are a member', name: 'ministry_other_orgs' }
          ].map(field => (
            <div key={field.name} className="flex flex-col">
              <label className="text-[10px] font-black uppercase">{field.label}:</label>
              <input name={field.name} type="text" className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" />
            </div>
          ))}
        </div>

        {/* Referee */}
        <div className="pt-10 border-t-2 border-army mt-10">
          <h3 className="text-xs font-black uppercase mb-2">REFEREE SECTION:</h3>
          <p className="text-[10px] italic mb-6">(Your referee must be a General Overseer of a Church or a Prominent citizen in the Society)</p>
          <div className="space-y-6">
            <p className="text-sm">I, <input name="referee_self_name" type="text" className="border-b border-black w-64 outline-none bg-transparent" /> recommend <input name="referee_recommendee_name" type="text" className="border-b border-black w-64 outline-none bg-transparent" /> as a proper person for recruitment into your mission.</p>
            {[
              { label: 'Name of Referee', name: 'referee_name' },
              { label: 'Position Rank', name: 'referee_rank' },
              { label: 'Address', name: 'referee_address' },
              { label: 'Tel', name: 'referee_tel' }
            ].map(l => (
              <div key={l.name} className="flex flex-col"><label className="text-[10px] font-black uppercase">{l.label}:</label><input name={l.name} type="text" className="border-b-2 border-gray-300 outline-none p-1 focus:border-army bg-transparent" /></div>
            ))}
          </div>
        </div>

        {/* Bank & Pledge */}
        <div className="pt-10">
           <label className="text-[10px] font-black uppercase">YOUR BANK DETAILS:</label>
           <input name="applicant_bank_details" type="text" className="border-b-2 border-gray-300 outline-none p-1 focus:border-army w-full bg-transparent" />
        </div>

        <div className="pt-10 bg-gray-50 p-10 border-2 border-dashed border-army italic text-xs leading-relaxed">
          <h3 className="text-sm font-black uppercase not-italic mb-4 underline">PLEDGE:</h3>
          <p>
            I pledge to be loyal, obedient and to offer myself for the promotion and defence of the mission's objective, integrity and purpose. I will not incite others against the authority of the mission or do anything that will be detrimental to the mission or its officers. I will obey orders issue by my senior officer and obey the instructions and rules of the Mission. I conscientiously make this pledge in the presence of God this <input name="pledge_day" type="text" className="border-b border-black outline-none bg-transparent w-12 text-center" /> day of <input name="pledge_month" type="text" className="border-b border-black outline-none bg-transparent w-48 text-center" /> 20<input name="pledge_year_suffix" type="text" className="border-b border-black outline-none bg-transparent w-10 text-center" />.
          </p>
          <div className="mt-12 flex justify-between">
            <div className="w-1/2 border-t border-black pt-2 uppercase font-black not-italic text-[10px]">Applicant's Signature</div>
            <div className="w-1/4 border-t border-black pt-2 uppercase font-black not-italic text-[10px]">Date</div>
          </div>
        </div>

        <div className="pt-10 border-t-8 border-double border-army text-center">
           <h3 className="font-black uppercase mb-10 text-xl tracking-tighter">FOR OFFICIAL USE ONLY</h3>
           <div className="flex flex-col gap-10 text-left text-xs uppercase font-black">
              <div className="flex justify-between items-end border-b border-gray-300 pb-2">
                <span>VERIFIED BY (CG): Apostle Dominion D. Dom</span>
                <div className="w-48 border-b border-black h-4"></div>
              </div>
              <div className="flex justify-between items-end border-b border-gray-300 pb-2">
                <span>GRAND COMMANDER: Rev. Dr. Veteran Butswat</span>
                <div className="w-48 border-b border-black h-4"></div>
              </div>
           </div>
        </div>

        <div className="text-center pt-16">
           <button 
            type="submit" 
            disabled={isLoading}
            className="bg-army text-white px-16 py-6 rounded-md font-black uppercase text-xl shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4 mx-auto"
           >
             {isLoading ? <><Loader2 className="animate-spin" /> Submitting...</> : "Submit Application"}
           </button>
           <p className="text-[10px] mt-4 font-bold text-red-600 uppercase tracking-widest animate-pulse">Strict Investigation will be carried out</p>
        </div>
      </form>
    </div>
  );
};

export default MembershipForm;