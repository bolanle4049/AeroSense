import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

export default function DiscoveryDashboard() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface min-h-screen flex">
      <Sidebar/>
      <main className="flex-1 md:ml-64 pt-16 md:pt-0 pb-20 md:pb-0 px-margin-mobile md:px-margin-desktop py-lg">
        {/* Header */}
        <header className="mb-lg flex justify-between items-end">
          <div>
            <h2 className="font-display-lg text-display-lg text-primary mb-xs">Opportunity Discovery</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Based on your academic profile and relocation preferences, we've curated the highest-probability pathways for you.</p>
          </div>
          <div className="hidden md:flex gap-sm">
            <button className="bg-surface-container-lowest border border-outline-variant text-primary font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-surface-container transition-colors flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              Filters
            </button>
          </div>
        </header>

        {/* AI Insight Banner */}
        <div className="ai-insight-border p-md mb-xl flex items-start gap-md">
          <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-secondary text-[24px]">lightbulb</span>
          </div>
          <div className="flex-1">
            <h3 className="font-headline-md text-headline-md text-primary mb-xs">AI Insight: High Match Probability</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">Your background in Environmental Science strongly aligns with this year's Chevening priority areas. We recommend prioritizing this application. Deadline is approaching in 4 weeks.</p>
            <div className="flex gap-sm">
              <Link to="/scholarship">
                <button className="bg-primary-container text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg hover:opacity-90 transition-colors">Start Chevening Prep</button>
              </Link>
              <button className="bg-transparent border border-outline-variant text-primary font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-surface-container transition-colors">View Criteria</button>
            </div>
          </div>
        </div>

        {/* Top Tier Scholarships */}
        <section className="mb-xl">
          <div className="flex items-center justify-between mb-md">
            <h3 className="font-headline-lg text-headline-lg text-primary flex items-center gap-sm">
              <span className="material-symbols-outlined text-secondary">workspace_premium</span>
              Top Tier Scholarships
            </h3>
            <a href="#" className="font-label-md text-label-md text-secondary hover:underline">View all (12)</a>
          </div>

          <div className="grid grid-cols-12 gap-gutter">
            {/* Featured Card */}
            <Link to="/scholarship" className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl card-shadow p-md border border-surface-container flex flex-col justify-between overflow-hidden relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-surface-container rounded-full opacity-50 blur-3xl pointer-events-none"/>
              <div className="relative z-10 flex justify-between items-start mb-lg">
                <div>
                  <div className="flex items-center gap-xs mb-sm">
                    <span className="bg-surface-container-high text-on-surface text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">UK Government</span>
                    <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm flex items-center gap-[2px]">
                      <span className="material-symbols-outlined text-[12px]">verified</span> 98% Match
                    </span>
                  </div>
                  <h4 className="font-display-lg text-display-lg text-primary leading-tight mb-2">Chevening Scholarship</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Fully-funded master's degree program for individuals with leadership potential from around the world.</p>
                </div>
                <div className="w-16 h-16 bg-surface-container rounded-lg flex items-center justify-center shrink-0 border border-outline-variant">
                  <span className="material-symbols-outlined text-outline text-[32px]">account_balance</span>
                </div>
              </div>
              <div className="relative z-10 grid grid-cols-3 gap-md border-t border-outline-variant pt-md">
                <div>
                  <p className="font-caption text-caption text-on-surface-variant mb-1">Funding</p>
                  <p className="font-label-md text-label-md text-primary">Fully Funded + Stipend</p>
                </div>
                <div>
                  <p className="font-caption text-caption text-on-surface-variant mb-1">Deadline</p>
                  <p className="font-label-md text-label-md text-error flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[16px]">schedule</span> Nov 7, 2024
                  </p>
                </div>
                <div className="flex items-end justify-end">
                  <button className="bg-primary-container text-on-primary font-label-md text-label-md px-6 py-2 rounded-lg hover:opacity-90 transition-colors w-full text-center">View Details</button>
                </div>
              </div>
            </Link>

            {/* Side Cards */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
              {[{title:'Commonwealth',sub:"Master's / PhD",match:'85%',deadline:'Dec 15, 2024'},
                {title:'DAAD EPOS',sub:'Germany',match:'72%',deadline:'Varies by course'}].map(({title,sub,match,deadline}) => (
                <article key={title} className="bg-surface-container-lowest rounded-xl card-shadow p-md border border-surface-container flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-headline-md text-headline-md text-primary mb-1">{title}</h4>
                      <span className="bg-surface-container-highest text-on-surface-variant text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">{sub}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-12 h-12 rounded-full border-2 border-secondary">
                      <span className="font-label-md text-label-md text-secondary">{match}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-end mt-auto pt-4 border-t border-outline-variant">
                    <div>
                      <p className="font-caption text-caption text-on-surface-variant mb-1">Deadline</p>
                      <p className="font-label-md text-label-md text-primary">{deadline}</p>
                    </div>
                    <button className="text-secondary font-label-md text-label-md hover:underline">Details →</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Alternative Pathways */}
        <section>
          <div className="flex items-center justify-between mb-md">
            <h3 className="font-headline-lg text-headline-lg text-primary flex items-center gap-sm">
              <span className="material-symbols-outlined text-secondary">alt_route</span>
              Alternative Pathways
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {icon:'school',title:'Funded PhD Programs',desc:'Explore research positions with full tuition coverage and stipends in North America and Europe.',match:'Strong',w:'80%',btn:'Browse 45 Openings'},
              {icon:'work',title:'Skilled Worker Visas',desc:'Direct employment routes for professionals in high-demand sectors like Tech and Healthcare.',match:'Moderate',w:'60%',btn:'Assess Eligibility'},
              {icon:'public',title:'Global Remote Roles',desc:'Build international experience and capital while planning your physical relocation strategy.',match:'Very Strong',w:'95%',btn:'View Job Board'},
            ].map(({icon,title,desc,match,w,btn}) => (
              <article key={title} className="bg-surface-container-lowest rounded-xl card-shadow p-md border border-surface-container flex flex-col hover:-translate-y-1 transition-transform duration-200">
                <div className="w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary">{icon}</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-primary mb-2">{title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">{desc}</p>
                <div className="bg-surface-container rounded-lg p-sm mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-caption text-caption text-on-surface-variant">Profile Match</span>
                    <span className="font-label-md text-label-md text-primary">{match}</span>
                  </div>
                  <div className="w-full bg-outline-variant h-1.5 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full rounded-full" style={{width:w}}/>
                  </div>
                </div>
                <button className="w-full bg-transparent border border-primary text-primary font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-surface-container-low transition-colors">{btn}</button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
