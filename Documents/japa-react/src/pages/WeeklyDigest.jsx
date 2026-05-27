import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

export default function WeeklyDigest() {
  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex">
      <Sidebar/>
      <main className="w-full md:ml-64 pt-20 md:pt-8 px-4 md:px-margin-desktop pb-20 max-w-7xl mx-auto">
        <header className="mb-md">
          <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background mb-2">Your Weekly Digest</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Here is a summary of your relocation journey progress for the week of Oct 24th.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Top Matches */}
          <section className="col-span-1 md:col-span-8 bg-surface-container-lowest rounded-xl card-shadow p-md border border-outline-variant/30 flex flex-col gap-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary filled">star</span>
                Top AI Matches
              </h3>
              <button className="text-secondary font-label-md text-label-md hover:underline">View All</button>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">We found 3 new opportunities that closely align with your profile this week.</p>
            <div className="flex flex-col gap-3">
              {[
                {title:'Chevening Scholarship 2024', sub:'Fully Funded Masters • UK', match:'98% Match'},
                {title:'Erasmus Mundus Joint Masters', sub:'Data Science Track • Europe', match:'92% Match'},
                {title:'Global Tech Talent Visa', sub:'Skilled Worker Route • Canada', match:'85% Match'},
              ].map(({title,sub,match}) => (
                <div key={title} className="p-4 rounded-lg bg-surface flex flex-col sm:flex-row items-start sm:items-center justify-between border border-surface-container hover:card-shadow transition-shadow">
                  <div className="flex-grow">
                    <h4 className="font-label-md text-label-md text-on-surface mb-1">{title}</h4>
                    <p className="font-caption text-caption text-on-surface-variant">{sub}</p>
                  </div>
                  <div className="mt-3 sm:mt-0 flex items-center gap-4">
                    <div className="flex items-center gap-1 bg-surface-container text-primary px-3 py-1 rounded-full">
                      <span className="material-symbols-outlined text-[16px] filled">bolt</span>
                      <span className="font-label-md text-[12px]">{match}</span>
                    </div>
                    <Link to="/scholarship">
                      <button className="w-8 h-8 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Action Required */}
          <section className="col-span-1 md:col-span-4 bg-primary-container rounded-xl card-shadow-lg p-md flex flex-col gap-sm text-on-primary relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary opacity-20 rounded-full blur-2xl"/>
            <h3 className="font-headline-md text-headline-md flex items-center gap-2 mb-2 z-10">
              <span className="material-symbols-outlined text-secondary-fixed filled">alarm</span>
              Action Required
            </h3>
            <div className="flex flex-col gap-4 z-10">
              {[
                {deadline:'In 3 Days (Oct 27)',deadlineClass:'text-secondary-fixed',title:'Submit IELTS Registration',desc:'Required for 2 active applications.'},
                {deadline:'Next Week (Nov 2)',deadlineClass:'text-surface-variant',title:'Upload Degree Transcripts',desc:'Pending university verification.'},
              ].map(({deadline,deadlineClass,title,desc}) => (
                <div key={title} className="border-l-2 border-secondary-fixed pl-3">
                  <p className={`font-label-md text-label-md ${deadlineClass} mb-1`}>{deadline}</p>
                  <h4 className="font-body-md text-body-md font-medium text-on-primary">{title}</h4>
                  <p className="font-caption text-caption text-primary-fixed-dim mt-1">{desc}</p>
                </div>
              ))}
            </div>
            <button className="mt-auto pt-4 flex items-center justify-center gap-2 text-primary-fixed font-label-md text-label-md hover:text-on-primary transition-colors z-10">
              View Calendar
              <span className="material-symbols-outlined text-[18px] filled">calendar_month</span>
            </button>
          </section>

          {/* Draft Progress */}
          <section className="col-span-1 md:col-span-6 bg-surface-container-lowest rounded-xl card-shadow p-md border border-outline-variant/30 flex flex-col gap-sm">
            <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary filled">donut_large</span>
              Draft Progress
            </h3>
            <div className="flex flex-col gap-6">
              {[
                {label:'Chevening Personal Statement', pct:80, color:'bg-secondary', hint:'AI suggests strengthening leadership examples.', hintIcon:'psychology'},
                {label:'Academic CV', pct:45, color:'bg-primary', hint:'Awaiting recent project details.', hintIcon:'edit_document'},
              ].map(({label,pct,color,hint,hintIcon}) => (
                <div key={label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-label-md text-label-md text-on-surface">{label}</span>
                    <span className={`font-label-md text-label-md ${color==='bg-secondary'?'text-secondary':'text-primary'}`}>{pct}%</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2">
                    <div className={`${color} h-2 rounded-full`} style={{width:`${pct}%`}}/>
                  </div>
                  <p className="font-caption text-caption text-on-surface-variant mt-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] filled">{hintIcon}</span>
                    {hint}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* AI Tip */}
          <section className="col-span-1 md:col-span-6 bg-gradient-to-br from-surface-bright to-surface-container rounded-xl card-shadow p-md border border-secondary/20 flex flex-col gap-sm relative">
            <div className="absolute top-4 right-4 text-secondary opacity-50">
              <span className="material-symbols-outlined text-[48px] filled">lightbulb</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full self-start mb-2">
              <span className="material-symbols-outlined text-[16px] filled">smart_toy</span>
              <span className="font-label-md text-[12px]">AI Tip of the Week</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface pr-12">Mastering the IELTS Speaking Section</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Based on your target score of 7.5, focus on expanding your vocabulary related to abstract topics. Don't memorize answers; instead, practice speaking for 2 minutes on unfamiliar subjects to build fluency and confidence.
            </p>
            <button className="mt-4 self-start border border-primary text-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-colors">
              Start Practice Session
            </button>
          </section>
        </div>
      </main>
    </div>
  )
}
