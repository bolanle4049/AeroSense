import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

const countries = ['United Kingdom', 'Canada', 'Germany', 'Netherlands', 'Australia']

export default function ProfileOnboarding() {
  const [selected, setSelected] = useState(['United Kingdom', 'Canada'])
  const toggle = c => setSelected(p => p.includes(c) ? p.filter(x=>x!==c) : p.length < 3 ? [...p,c] : p)

  return (
    <div className="bg-background text-on-background min-h-screen font-body-md flex">
      <Sidebar/>
      <main className="flex-1 md:ml-64 pt-16 md:pt-0 pb-20 md:pb-0">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-md md:py-lg flex flex-col gap-lg">
          {/* Header Banner */}
          <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden card-shadow relative flex items-center justify-center bg-surface-container">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/80 to-transparent"/>
            <div className="relative z-10 text-left w-full px-md md:px-xl">
              <h1 className="font-display-lg text-display-lg text-on-primary">Build Your Profile</h1>
              <p className="font-body-lg text-body-lg text-surface-container-high mt-xs max-w-2xl">Tell us about your background and goals to personalize your relocation strategy.</p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            {/* Stepper */}
            <div className="col-span-1 md:col-span-3 bg-surface-container-lowest rounded-xl p-md card-shadow sticky top-lg">
              <ol className="hidden md:flex overflow-hidden flex-col gap-lg relative">
                <div className="absolute left-4 top-4 bottom-4 w-px bg-outline-variant z-0"/>
                {[
                  {n:1,label:'Account Basics',done:true},
                  {n:2,label:'Academic & Experience',current:true},
                  {n:3,label:'Relocation Goals',done:false},
                ].map(({n,label,done,current}) => (
                  <li key={n} className="relative z-10">
                    <div className="group flex items-start">
                      <span className="flex h-9 items-center">
                        <span className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full shadow-sm ${done?'bg-secondary':current?'border-2 border-secondary bg-surface-container-lowest':'border-2 border-outline-variant bg-surface-container-lowest'}`}>
                          {done
                            ? <span className="material-symbols-outlined text-on-secondary text-sm filled">check</span>
                            : <span className={`font-label-md text-label-md ${current?'text-secondary':'text-on-surface-variant'}`}>{n}</span>}
                        </span>
                      </span>
                      <span className="ml-4 flex min-w-0 flex-col">
                        <span className={`font-label-md text-label-md ${current||done?'text-secondary':'text-on-surface-variant'} uppercase tracking-wider`}>Step {n}</span>
                        <span className={`font-body-md text-body-md ${current?'text-on-surface font-bold':'text-on-surface-variant'}`}>{label}</span>
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Form */}
            <div className="col-span-1 md:col-span-9 flex flex-col gap-md">
              {/* Academic */}
              <div className="bg-surface-container-lowest rounded-xl p-md md:p-xl card-shadow border border-surface-variant">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-md md:mb-lg">Academic Background</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-md">
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-md text-label-md text-on-surface">Highest Degree Achieved</label>
                    <div className="relative">
                      <select className="w-full px-sm py-sm border border-outline-variant rounded-lg bg-surface-container-lowest text-body-md text-on-surface focus:outline-none focus:border-secondary appearance-none cursor-pointer">
                        <option value="">Select your degree</option>
                        <option>High School Diploma</option>
                        <option>Bachelor's Degree</option>
                        <option>Master's Degree</option>
                        <option>PhD / Doctorate</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-md text-label-md text-on-surface">Field of Study</label>
                    <input className="w-full px-sm py-sm border border-outline-variant rounded-lg bg-surface-container-lowest text-body-md text-on-surface focus:outline-none focus:border-secondary" placeholder="e.g. Computer Science, Business" type="text"/>
                  </div>
                </div>
                <div className="flex flex-col gap-xs md:w-1/2">
                  <label className="font-label-md text-label-md text-on-surface">GPA / Grades (Optional)</label>
                  <div className="relative">
                    <input className="w-full pl-sm pr-10 py-sm border border-outline-variant rounded-lg bg-surface-container-lowest text-body-md text-on-surface focus:outline-none focus:border-secondary" placeholder="e.g. 3.8/4.0 or Second Class Upper" type="text"/>
                    <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline">school</span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-surface-container-lowest rounded-xl p-md md:p-xl card-shadow border border-surface-variant">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-md md:mb-lg">Professional Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-md text-label-md text-on-surface">Years of Experience</label>
                    <div className="relative">
                      <select className="w-full px-sm py-sm border border-outline-variant rounded-lg bg-surface-container-lowest text-body-md text-on-surface focus:outline-none focus:border-secondary appearance-none cursor-pointer">
                        <option value="">Select duration</option>
                        <option>Less than 1 year</option>
                        <option>1 - 3 years</option>
                        <option>3 - 5 years</option>
                        <option>5+ years</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-md text-label-md text-on-surface">Current or Most Recent Job Title</label>
                    <div className="relative">
                      <input className="w-full pl-sm pr-10 py-sm border border-outline-variant rounded-lg bg-surface-container-lowest text-body-md text-on-surface focus:outline-none focus:border-secondary" placeholder="e.g. Software Engineer" type="text"/>
                      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline">work</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Goals */}
              <div className="bg-surface-container-lowest rounded-xl p-md md:p-xl card-shadow border border-surface-variant relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low to-secondary-fixed/10 pointer-events-none opacity-50"/>
                <div className="relative z-10">
                  <div className="flex items-center gap-xs mb-md md:mb-lg">
                    <span className="material-symbols-outlined text-secondary filled">travel_explore</span>
                    <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Relocation Goals</h2>
                  </div>
                  <div className="flex flex-col gap-xs mb-lg">
                    <label className="font-label-md text-label-md text-on-surface mb-xs">Target Countries (Select up to 3)</label>
                    <div className="flex flex-wrap gap-sm">
                      {countries.map(c => (
                        <button key={c} onClick={()=>toggle(c)} className={`px-md py-sm rounded-full border text-body-md transition-all shadow-sm ${selected.includes(c)?'border-2 border-secondary bg-surface-container text-secondary font-bold':'border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary'}`}>
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    {[{id:'budget',label:'Available Budget (USD)',opts:['Under $10,000','$10,000 - $30,000','$30,000 - $50,000','Over $50,000']},
                      {id:'timeline',label:'Expected Timeline',opts:['Within 6 months','6 - 12 months','1 - 2 years','Just exploring options']}
                    ].map(({id,label,opts}) => (
                      <div key={id} className="flex flex-col gap-xs">
                        <label className="font-label-md text-label-md text-on-surface">{label}</label>
                        <div className="relative">
                          <select className="w-full px-sm py-sm border border-outline-variant rounded-lg bg-surface-container-lowest text-body-md text-on-surface focus:outline-none focus:border-secondary appearance-none cursor-pointer">
                            <option value="">Select...</option>
                            {opts.map(o=><option key={o}>{o}</option>)}
                          </select>
                          <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-sm mt-sm pt-md border-t border-outline-variant">
                <button className="w-full md:w-auto px-lg py-sm rounded-lg font-label-md text-label-md text-primary-container bg-transparent hover:bg-surface-variant transition-colors">Save as Draft</button>
                <Link to="/discovery" className="w-full md:w-auto">
                  <button className="w-full px-lg py-sm rounded-lg font-label-md text-label-md text-on-primary bg-primary-container hover:bg-primary transition-colors card-shadow flex items-center justify-center gap-xs group">
                    Continue to Next Step
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
