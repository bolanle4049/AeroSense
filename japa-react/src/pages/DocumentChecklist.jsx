import Sidebar from '../components/Sidebar'

const docs = [
  {
    id:1, span:2, title:'IELTS Academic Scores', desc:'Official test report form indicating your English proficiency. Required minimum overall band score: 6.5.',
    status:'Pending Upload', statusClass:'bg-tertiary-fixed text-on-tertiary-fixed-variant', statusIcon:'pending',
    icon:'language', iconBg:'bg-surface-container', priority:true, action:'upload'
  },
  {
    id:2, title:'Police Clearance', desc:'Certificate of no criminal conviction. Uploaded 2 days ago.',
    status:'In Review', statusClass:'bg-primary-fixed text-on-primary-fixed', statusIcon:'hourglass_empty',
    icon:'policy', iconBg:'bg-surface-container-high', action:'view'
  },
  {
    id:3, title:'Academic Transcripts', desc:'Official university records. AI successfully extracted GPA data.',
    status:'Verified', statusClass:'bg-[#E8F5E9] text-[#2E7D32]', statusIcon:'verified',
    icon:'school', iconBg:'bg-[#E0F2F1] text-[#00695C]', verified:true
  },
  {
    id:4, title:'Passport Copy', desc:'Valid biometric passport data page. Expiry date checked.',
    status:'Verified', statusClass:'bg-[#E8F5E9] text-[#2E7D32]', statusIcon:'verified',
    icon:'badge', iconBg:'bg-[#E0F2F1] text-[#00695C]', verified:true
  },
  {
    id:5, title:'Reference Letters (x2)', desc:'Academic or professional references signed on official letterhead.',
    status:'Pending', statusClass:'bg-tertiary-fixed text-on-tertiary-fixed-variant', statusIcon:'pending',
    icon:'contact_mail', iconBg:'bg-surface-container-high', action:'upload'
  },
]

export default function DocumentChecklist() {
  return (
    <div className="bg-background min-h-screen text-on-background font-body-md flex bg-grid-pattern">
      <Sidebar/>
      <main className="flex-1 md:ml-64 pt-16 md:pt-0 pb-20 md:pb-0">
        <div className="flex-1 px-margin-mobile md:px-margin-desktop py-lg md:py-margin-desktop max-w-[1280px] mx-auto w-full">
          {/* Header */}
          <div className="mb-lg flex flex-col md:flex-row md:items-end justify-between gap-md">
            <div>
              <h2 className="font-display-lg text-display-lg text-primary tracking-tight mb-xs">Document Center</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Manage and upload required documentation for your targeted relocation pathways. AI verification is active.</p>
            </div>
            <div className="flex bg-surface-container-high rounded-full p-xs border border-outline-variant/20 card-shadow w-max">
              {['UK Target','Germany','Canada'].map((t,i) => (
                <button key={t} className={`px-md py-sm rounded-full font-label-md text-label-md transition-all ${i===0?'bg-primary-container text-on-primary card-shadow':'text-on-surface-variant hover:text-primary'}`}>{t}</button>
              ))}
            </div>
          </div>

          {/* AI Banner */}
          <div className="mb-lg rounded-xl bg-gradient-to-r from-surface-container-low to-inverse-on-surface border border-secondary/20 p-md flex flex-col sm:flex-row items-start sm:items-center gap-md card-shadow relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"/>
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 z-10">
              <span className="material-symbols-outlined filled">auto_awesome</span>
            </div>
            <div className="flex-1 z-10">
              <h3 className="font-label-md text-label-md text-on-surface mb-xs flex items-center gap-xs">
                AI Agent Suggestion
                <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-secondary/10 text-secondary tracking-wider">Priority</span>
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Uploading your <strong className="text-primary font-semibold">IELTS Scores</strong> next will unlock 12 additional scholarship matches in the UK pool. Processing time is currently under 2 minutes.
              </p>
            </div>
            <button className="shrink-0 z-10 bg-surface-container-lowest text-secondary font-label-md text-label-md py-sm px-md rounded-lg card-shadow border border-outline-variant/30 hover:bg-surface-container transition-colors">
              View Matches
            </button>
          </div>

          {/* Progress */}
          <div className="mb-lg">
            <div className="flex justify-between items-end mb-sm">
              <div>
                <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider text-xs">Overall Progress</span>
                <h4 className="font-headline-md text-headline-md text-primary">40% Complete</h4>
              </div>
              <span className="font-body-md text-body-md text-on-surface-variant">2 of 5 Required Documents</span>
            </div>
            <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/20">
              <div className="h-full bg-secondary rounded-full transition-all duration-1000 ease-out" style={{width:'40%'}}/>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md lg:gap-lg">
            {docs.map(({id,span,title,desc,status,statusClass,statusIcon,icon,iconBg,priority,verified,action}) => (
              <div key={id} className={`${span===2?'lg:col-span-2 glass-card':'bg-surface-container-lowest'} rounded-xl p-md flex flex-col border ${verified?'border-secondary/30':'border-outline-variant/30'} card-shadow hover:shadow-lg transition-all relative overflow-hidden`}>
                {priority && <div className="absolute top-0 left-0 w-1 h-full bg-error-container"/>}
                {verified && <div className="absolute -right-4 -top-4 w-16 h-16 bg-secondary/10 rounded-full blur-xl"/>}

                <div className="flex justify-between items-start mb-md">
                  <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center text-primary`}>
                    <span className={`material-symbols-outlined ${verified?'filled':''}`}>{icon}</span>
                  </div>
                  <div className={`px-sm py-1 rounded-full ${statusClass} font-label-md text-label-md text-xs flex items-center gap-xs`}>
                    <span className="material-symbols-outlined text-[14px]">{statusIcon}</span>
                    {status}
                  </div>
                </div>

                <div className="mb-lg flex-1 z-10">
                  <h3 className="font-label-md text-label-md text-on-surface text-lg mb-xs">{title}</h3>
                  <p className="font-caption text-caption text-on-surface-variant">{desc}</p>
                </div>

                {priority && (
                  <div className="flex items-center justify-between border-t border-outline-variant/20 pt-md mt-auto">
                    <div className="flex gap-sm">
                      {['picture_as_pdf','image'].map(i => (
                        <div key={i} className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center border border-outline-variant/30 border-dashed text-on-surface-variant">
                          <span className="material-symbols-outlined text-[16px]">{i}</span>
                        </div>
                      ))}
                      <span className="font-caption text-caption text-on-surface-variant self-center ml-xs">Max 5MB</span>
                    </div>
                    <button className="bg-primary-container text-on-primary font-label-md text-label-md py-sm px-md rounded-lg card-shadow hover:bg-primary transition-all flex items-center gap-xs active:scale-95 duration-200">
                      <span className="material-symbols-outlined text-[18px]">upload</span>
                      Upload Document
                    </button>
                  </div>
                )}

                {action==='view' && !priority && (
                  <button className="w-full bg-transparent text-primary-container font-label-md text-label-md py-sm px-md rounded-lg border border-outline-variant hover:bg-surface-container transition-colors flex justify-center items-center gap-xs z-10">
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                    View Upload
                  </button>
                )}

                {verified && (
                  <div className="w-full py-sm px-md rounded-lg bg-surface-container text-primary font-label-md text-label-md text-center border border-transparent cursor-default z-10 flex justify-center items-center gap-xs opacity-70">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    Requirement Met
                  </div>
                )}

                {action==='upload' && !priority && (
                  <button className="w-full bg-transparent text-primary-container font-label-md text-label-md py-sm px-md rounded-lg border border-primary-container hover:bg-surface-container transition-colors flex justify-center items-center gap-xs z-10">
                    <span className="material-symbols-outlined text-[18px]">upload</span>
                    Upload
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
