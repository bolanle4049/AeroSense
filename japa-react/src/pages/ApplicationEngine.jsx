import Sidebar from '../components/Sidebar'

export default function ApplicationEngine() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex">
      <Sidebar/>
      <main className="flex-1 md:ml-64 pt-16 md:pt-0 pb-20 md:pb-0 p-margin-mobile md:p-margin-desktop">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">Auto-Application Engine</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Your centralized hub for tracking and submitting university applications. Our AI continuously refines your documents to meet specific institutional standards.</p>
            </div>
            <button className="bg-primary-container text-on-primary py-3 px-6 rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-inverse-surface transition-colors shrink-0">
              <span className="material-symbols-outlined">add_circle</span>
              New Application
            </button>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Active Applications */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline-md text-headline-md text-primary">Active Submissions</h3>
                <span className="bg-surface-container-high text-on-surface px-3 py-1 rounded-full font-caption text-caption font-semibold">3 In Progress</span>
              </div>

              {/* App Card 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-6 card-shadow border-l-4 border-secondary relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"/>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-headline-md text-headline-md text-primary mb-1">University of Oxford</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">school</span>
                      MSc Advanced Computer Science
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-label-md text-label-md text-error mb-1">Due in 5 Days</div>
                    <div className="font-caption text-caption text-on-surface-variant">Nov 15, 2023</div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between font-caption text-caption mb-2">
                    <span className="text-secondary font-semibold">Ready for Review</span>
                    <span className="text-on-surface-variant">90% Complete</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-full rounded-full relative">
                      <div className="absolute inset-0 bg-white/20 animate-pulse"/>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3 text-xs text-on-surface-variant font-medium">
                    <span className="flex items-center gap-1 text-secondary"><span className="material-symbols-outlined text-[16px] filled">check_circle</span> Form Filled</span>
                    <span className="flex items-center gap-1 text-secondary"><span className="material-symbols-outlined text-[16px] filled">check_circle</span> Docs Uploaded</span>
                    <span className="flex items-center gap-1 text-primary"><span className="material-symbols-outlined text-[16px]">radio_button_unchecked</span> Submitted</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-surface-container py-3 px-4 rounded-lg border border-secondary-fixed/30">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary filled mt-0.5">auto_awesome</span>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">AI CV Tailor Complete</p>
                      <p className="font-caption text-caption text-on-surface-variant">Optimized for UK Russell Group standards.</p>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto bg-secondary text-on-secondary py-2 px-5 rounded-lg font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-colors card-shadow">
                    Review & Submit
                  </button>
                </div>
              </div>

              {/* App Card 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-6 card-shadow border border-outline-variant/30">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-headline-md text-headline-md text-primary mb-1">University of Toronto</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">school</span>
                      Master of Applied Science
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-label-md text-label-md text-on-surface mb-1">Due in 28 Days</div>
                    <div className="font-caption text-caption text-on-surface-variant">Dec 08, 2023</div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between font-caption text-caption mb-2">
                    <span className="text-primary font-semibold">Drafting Documents</span>
                    <span className="text-on-surface-variant">60% Complete</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container w-[60%] rounded-full"/>
                  </div>
                  <div className="flex justify-between mt-3 text-xs text-on-surface-variant font-medium">
                    <span className="flex items-center gap-1 text-secondary"><span className="material-symbols-outlined text-[16px] filled">check_circle</span> Form Filled</span>
                    <span className="flex items-center gap-1 text-primary"><span className="material-symbols-outlined text-[16px]">radio_button_unchecked</span> Docs Uploaded</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">radio_button_unchecked</span> Submitted</span>
                  </div>
                </div>
                <div className="bg-surface py-3 px-4 rounded-lg border border-outline-variant/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant">edit_document</span>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">Personal Statement Draft</p>
                      <p className="font-caption text-caption text-on-surface-variant">Awaiting your final review of the AI suggestions.</p>
                    </div>
                  </div>
                  <button className="text-primary font-label-md text-label-md border border-primary py-2 px-4 rounded-lg hover:bg-surface-container-high transition-colors">Continue Editing</button>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* AI Suggestions */}
              <div className="bg-gradient-to-br from-surface-container to-surface-container-highest rounded-xl p-6 card-shadow border border-white/50 relative">
                <div className="absolute top-4 right-4 text-secondary/20">
                  <span className="material-symbols-outlined text-4xl filled">smart_toy</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2 relative z-10">Agent Suggestions</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 relative z-10">I've analyzed your upcoming deadlines and document readiness.</p>
                <div className="space-y-4 relative z-10">
                  {[
                    {icon:'lightbulb',title:'Boost Oxford Chances',desc:"Your research proposal needs more focus on methodology to align with Oxford's standard.",link:'Apply AI Fix'},
                    {icon:'schedule',title:'Reference Letters Pending',desc:"Prof. Smith hasn't submitted for Toronto yet. Send an automated reminder?"},
                  ].map(({icon,title,desc,link}) => (
                    <div key={title} className="bg-surface-container-lowest p-4 rounded-lg card-shadow border border-outline-variant/20 flex gap-3">
                      <span className="material-symbols-outlined text-secondary shrink-0">{icon}</span>
                      <div>
                        <p className="font-label-md text-label-md text-on-surface mb-1">{title}</p>
                        <p className="font-caption text-caption text-on-surface-variant">{desc} {link && <a href="#" className="text-secondary hover:underline">{link}</a>}</p>
                        {!link && <button className="mt-2 text-xs font-semibold text-primary bg-primary-fixed hover:bg-primary-fixed-dim px-3 py-1 rounded transition-colors">Send Reminder</button>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Documents */}
              <div className="bg-surface-container-lowest rounded-xl p-6 card-shadow border border-outline-variant/30">
                <h3 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">folder_special</span>
                  Core Documents
                </h3>
                <ul className="space-y-3">
                  {[
                    {icon:'description',bg:'bg-secondary/10 text-secondary',label:'Master CV',badge:'Tailored',badgeClass:'text-secondary text-xs font-semibold bg-secondary/10 px-2 py-1 rounded'},
                    {icon:'article',bg:'bg-primary-container/10 text-primary-container',label:'Transcripts (Verified)',check:true},
                    {icon:'language',bg:'bg-outline-variant/20 text-outline',label:'IELTS Score',badge:'Pending Upload',badgeClass:'text-xs font-semibold text-outline px-2 py-1 bg-outline-variant/20 rounded',dim:true},
                  ].map(({icon,bg,label,badge,badgeClass,check,dim}) => (
                    <li key={label} className={`flex items-center justify-between p-3 rounded-lg hover:bg-surface transition-colors cursor-pointer border border-transparent hover:border-outline-variant/30 ${dim?'opacity-70':''}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded ${bg} flex items-center justify-center`}>
                          <span className="material-symbols-outlined text-sm">{icon}</span>
                        </div>
                        <span className="font-label-md text-label-md text-on-surface">{label}</span>
                      </div>
                      {check
                        ? <span className="material-symbols-outlined text-secondary filled">check_circle</span>
                        : <span className={badgeClass}>{badge}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
