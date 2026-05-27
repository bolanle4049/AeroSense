import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'

export default function ScholarshipDetails() {
  const navigate = useNavigate()
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col md:flex-row">
      <Sidebar/>
      <main className="flex-1 md:ml-64 pt-16 md:pt-0 pb-32 p-margin-mobile md:p-margin-desktop max-w-[1280px] mx-auto w-full">
        <button onClick={()=>navigate(-1)} className="flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md mb-md">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Back to Discovery
        </button>

        {/* Header */}
        <header className="bg-surface-container-lowest rounded-xl p-md md:p-lg card-shadow mb-gutter border border-outline-variant/20 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-md">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"/>
          <div className="flex items-center gap-md z-10 w-full md:w-auto">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-surface-container flex items-center justify-center rounded-lg border border-outline-variant/30 flex-shrink-0">
              <span className="material-symbols-outlined text-primary text-headline-lg">school</span>
            </div>
            <div className="flex-1">
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-xs">Chevening Scholarship</h1>
              <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-xs">
                <span className="material-symbols-outlined text-[16px]">public</span>
                Foreign, Commonwealth and Development Office
              </p>
            </div>
          </div>
          <div className="flex items-center gap-sm bg-surface-container-lowest border border-secondary-container rounded-lg p-sm card-shadow z-10 w-full md:w-auto justify-between md:justify-start">
            <div className="flex flex-col">
              <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">AI Match Score</span>
              <span className="font-headline-md text-headline-md text-secondary font-bold">98%</span>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-surface-container flex items-center justify-center relative">
              <svg className="w-full h-full transform -rotate-90 absolute" viewBox="0 0 36 36">
                <path className="text-surface-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"/>
                <path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="98, 100" strokeWidth="4"/>
              </svg>
              <span className="material-symbols-outlined text-secondary text-[20px] absolute filled">star</span>
            </div>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-gutter">
          {/* Left Column */}
          <div className="col-span-1 flex flex-col gap-gutter">
            {/* Key Facts */}
            <div className="bg-surface-container-lowest rounded-xl p-md card-shadow border border-outline-variant/20">
              <h2 className="font-label-md text-label-md text-on-background mb-md pb-xs border-b border-outline-variant/30 flex items-center gap-xs">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">info</span>
                Overview
              </h2>
              <ul className="flex flex-col gap-sm">
                {[
                  {icon:'payments',label:'Funding',value:'Fully Funded'},
                  {icon:'event',label:'Deadline',value:'November 7, 2024'},
                  {icon:'location_on',label:'Location',value:'United Kingdom'},
                  {icon:'school',label:'Degree Level',value:"Master's Degree"},
                ].map(({icon,label,value}) => (
                  <li key={label} className="flex items-start gap-sm">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">{icon}</span>
                    </div>
                    <div>
                      <p className="font-caption text-caption text-on-surface-variant">{label}</p>
                      <p className="font-body-md text-body-md text-on-background font-medium">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility */}
            <div className="bg-surface-container-lowest rounded-xl p-md card-shadow border border-outline-variant/20">
              <h2 className="font-label-md text-label-md text-on-background mb-md pb-xs border-b border-outline-variant/30 flex items-center gap-xs">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">fact_check</span>
                Eligibility Check
              </h2>
              <ul className="flex flex-col gap-sm">
                {[
                  {text:'Undergraduate degree (2:1 equivalent)',met:true},
                  {text:'2+ years work experience',met:true},
                  {text:'English language requirement met',met:true},
                  {text:'Unconditional offer from UK university (Pending)',met:false},
                ].map(({text,met}) => (
                  <li key={text} className="flex items-center gap-sm">
                    <span className={`material-symbols-outlined ${met?'text-secondary filled':'text-outline'}`}>{met?'check_circle':'pending'}</span>
                    <span className={`font-body-md text-body-md ${met?'text-on-background':'text-on-surface-variant'}`}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI Draft Assistant */}
          <div className="col-span-1 md:col-span-2">
            <div className="bg-surface-container-lowest rounded-xl card-shadow border border-secondary-container/50 overflow-hidden h-full flex flex-col relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary-container to-secondary"/>
              <div className="p-md border-b border-outline-variant/20 flex justify-between items-center bg-surface-bright">
                <h2 className="font-label-md text-label-md text-primary flex items-center gap-xs">
                  <span className="material-symbols-outlined text-secondary">auto_awesome</span>
                  AI Draft Assistant
                </h2>
                <span className="px-2 py-1 bg-secondary-container text-on-secondary-container font-caption text-caption rounded-full font-medium">Ready for Review</span>
              </div>
              <div className="flex-1 p-md flex flex-col gap-md">
                <div className="bg-surface-container rounded-lg p-sm border border-outline-variant/30">
                  <p className="font-caption text-caption text-on-surface-variant mb-1 font-semibold uppercase tracking-wide">Essay Prompt: Leadership & Influence</p>
                  <p className="font-body-md text-body-md text-on-background italic">"Chevening is looking for individuals who will be future leaders or influencers in their home countries. Explain how you meet this requirement, using clear examples of your own leadership and influencing skills."</p>
                </div>
                <div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-lg p-md relative group">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-xs bg-surface-container rounded-md hover:bg-surface-container-high text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px]">content_copy</span>
                    </button>
                  </div>
                  <div className="font-body-md text-on-surface-variant leading-relaxed space-y-4">
                    <p>True leadership is not merely holding a position of authority, but the ability to catalyze positive change and inspire others towards a shared vision. Throughout my professional journey in the tech sector, I have consistently demonstrated a commitment to impactful leadership.</p>
                    <p>A defining example occurred during my tenure as Project Lead at InnovateTech. Recognizing a critical gap in digital literacy among local youth, I conceptualized and spearheaded the 'Code for Tomorrow' initiative.</p>
                    <p>By employing empathetic communication and strategic negotiation—skills I aim to further hone in the UK—I successfully influenced key community leaders to support the program. The initiative ultimately provided foundational coding skills to over 200 students...</p>
                  </div>
                </div>
              </div>
              <div className="p-md bg-surface-bright border-t border-outline-variant/20 flex gap-sm justify-end">
                <button className="px-md py-sm rounded-lg border border-primary text-primary font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                  Manual Edit
                </button>
                <button className="px-md py-sm rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container transition-colors flex items-center gap-xs card-shadow">
                  <span className="material-symbols-outlined text-[18px]">auto_fix_high</span>
                  Refine with AI
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Bar */}
        <div className="fixed bottom-0 left-0 md:left-64 right-0 p-margin-mobile md:p-md bg-surface-container-lowest/90 backdrop-blur-md border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-sm z-30" style={{boxShadow:'0 -4px 20px rgba(16,42,67,0.05)'}}>
          <p className="font-caption text-caption text-on-surface-variant hidden md:block">Application takes approximately 15 minutes to auto-fill.</p>
          <div className="flex w-full md:w-auto gap-sm">
            <button className="flex-1 md:flex-none px-md py-sm rounded-lg border border-primary text-primary font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center justify-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">bookmark_border</span>
              Save for Later
            </button>
            <button className="flex-1 md:flex-none px-md py-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors flex items-center justify-center gap-xs card-shadow">
              <span className="material-symbols-outlined text-[18px]">send</span>
              Start Auto-Fill
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
