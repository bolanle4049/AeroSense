import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function LandingPage() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      {/* Top Nav */}
      <header className="bg-surface shadow-sm fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4">
        <div className="flex items-center gap-3">
            <Logo className="h-16 w-auto" />
        </div>
        <nav className="hidden md:flex gap-md font-label-md text-label-md">
          {['Solutions', 'Pricing', 'Scholarships', 'Checklist'].map(item => (
            <a key={item} href="#" className="text-on-surface-variant hover:text-secondary transition-colors">{item}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/signin">
            <button className="font-label-md text-label-md text-primary hover:text-secondary transition-colors px-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-primary-container text-on-primary font-label-md text-label-md px-md py-sm rounded-full hover:bg-secondary transition-colors shadow-sm">Get Started</button>
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="px-margin-mobile md:px-margin-desktop py-xl max-w-[1280px] mx-auto grid md:grid-cols-2 gap-lg items-center relative overflow-hidden">
          <div className="z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md mb-6 border border-outline-variant">
              <span className="material-symbols-outlined text-secondary filled text-sm">robot_2</span>
              Meet your new expert guide
            </div>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">
              Your Personal Relocation Assistant tsting
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
              Navigate international relocation, secure fully-funded scholarships, and manage complex visa applications with an AI engineered for precision and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <button className="bg-secondary text-on-secondary font-label-md text-label-md px-8 py-4 rounded-lg shadow-md hover:opacity-90 transition-all flex justify-center items-center gap-2 group">
                  Start Your Journey
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </Link>
              <button className="border border-primary-container text-primary-container font-label-md text-label-md px-8 py-4 rounded-lg hover:bg-surface-container-high transition-all">
                View Demo
              </button>
            </div>
          </div>

          <div className="relative z-10 hidden md:block">
            <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-surface-container-high to-surface-container-low card-shadow-lg border border-outline-variant overflow-hidden p-8 flex flex-col justify-between">
              <div className="bg-white rounded-xl p-4 card-shadow border-l-4 border-secondary transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm filled">school</span>
                  </div>
                  <span className="font-label-md text-label-md text-primary">New Scholarship Match!</span>
                </div>
                <p className="font-caption text-caption text-on-surface-variant">Stanford University - PhD Computer Science (Fully Funded)</p>
              </div>

              <div className="bg-white rounded-xl p-4 card-shadow self-end transform translate-x-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="font-label-md text-label-md text-primary">IELTS Results Synced</span>
                </div>
                <div className="h-2 w-full bg-surface-container-highest rounded-full mt-2">
                  <div className="h-full bg-secondary rounded-full" style={{width:'85%'}}/>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 card-shadow-lg border border-secondary-fixed absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4">
                <div className="flex items-center justify-between mb-4 border-b border-surface-container-highest pb-2">
                  <span className="font-label-md text-label-md text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">auto_awesome</span>
                    Essay Assistant
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">Optimizing your personal statement for clarity and alignment with the program's core values...</p>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-secondary-container opacity-20 rounded-full blur-3xl z-0 pointer-events-none"/>
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 bg-primary-fixed opacity-30 rounded-full blur-3xl z-0 pointer-events-none"/>
        </section>

        {/* Features Bento */}
        <section className="bg-surface-container-low py-xl" id="solutions">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Intelligent Relocation Systems</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Everything you need to successfully transition abroad, powered by AI.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 card-shadow border border-outline-variant md:col-span-2 hover:card-shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined filled text-2xl">travel_explore</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Opportunity Discovery</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Our AI analyzes your profile to instantly match you with high-probability scholarships and PhD programs globally.</p>
                <div className="space-y-3 bg-surface p-4 rounded-xl border border-surface-container-high">
                  {[{u:'University of Toronto - Data Science', m:'92% Match'},{u:'ETH Zurich - Robotics MSc', m:'85% Match'}].map(({u,m}) => (
                    <div key={u} className="flex items-center justify-between p-3 bg-white rounded-lg card-shadow border-l-2 border-secondary">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-on-surface-variant">location_on</span>
                        <span className="font-label-md text-label-md">{u}</span>
                      </div>
                      <span className="bg-secondary-container text-on-secondary-container text-xs px-2 py-1 rounded font-bold">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary text-white rounded-2xl p-8 card-shadow flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-inverse-surface flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined filled text-2xl text-secondary-fixed">fact_check</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-3 text-white">Document Checklist</h3>
                  <p className="font-body-md text-body-md text-on-primary-container mb-6">Real-time tracking for every requirement. Never miss a deadline again.</p>
                </div>
                <div className="space-y-4">
                  {[{l:'IELTS Booking',v:100,c:'text-secondary-fixed'},{l:'Official Transcripts',v:30,c:'text-tertiary-fixed-dim'}].map(({l,v,c}) => (
                    <div key={l} className="flex flex-col gap-1">
                      <div className="flex justify-between font-label-md text-label-md text-sm">
                        <span className="text-white">{l}</span>
                        <span className={c}>{v===100?'Done':'Pending'}</span>
                      </div>
                      <div className="w-full bg-inverse-surface rounded-full h-1.5">
                        <div className={`${v===100?'bg-secondary-fixed':'bg-tertiary-fixed-dim'} h-1.5 rounded-full`} style={{width:`${v}%`}}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 card-shadow border border-outline-variant md:col-span-3 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
                <div className="flex-1 z-10">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined filled text-2xl text-primary">edit_document</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">Auto-Application Engine</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Say goodbye to repetitive forms. Our engine securely stores your data to automate application filling with tailored essay frameworks.</p>
                </div>
                <div className="flex-1 w-full bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 shadow-inner z-10">
                  <div className="flex items-center gap-2 mb-4 text-primary font-label-md text-label-md border-b border-surface-container-highest pb-2">
                    <span className="material-symbols-outlined text-secondary">magic_button</span>
                    AI Essay Optimization
                  </div>
                  <div className="space-y-3 font-body-md text-sm">
                    <p className="text-on-surface-variant opacity-50 line-through">I have always been interested in computer science because...</p>
                    <div className="bg-secondary-container/20 p-3 rounded border border-secondary-container">
                      <p className="text-on-secondary-fixed-variant">My drive to innovate within distributed systems stems from my work optimizing...</p>
                      <div className="flex justify-end mt-2">
                        <button className="text-xs bg-secondary text-white px-2 py-1 rounded">Accept Suggestion</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-surface-variant to-transparent opacity-30 pointer-events-none"/>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-xl bg-surface">
          <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">Ready to start your next chapter?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">Join thousands of successful applicants who used Japa AI Agent to secure their future abroad.</p>
            <Link to="/signup">
              <button className="bg-primary text-on-primary font-label-md text-label-md px-10 py-5 rounded-lg shadow-lg hover:bg-inverse-surface transition-colors duration-200 text-lg">
                Create Your Free Profile
              </button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-primary w-full py-xl px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-base border-t border-outline-variant">
       <div className="flex items-center gap-2">
          <Logo className="h-14 w-auto brightness-0 invert" />
      </div>
        <div className="font-body-md text-body-md text-on-primary-fixed-variant text-sm">© 2024 Japa AI Agent. Precision Relocation Assistance.</div>
        <nav className="flex gap-md font-label-md text-label-md">
          {['Privacy Policy','Terms of Service','Help Center','Contact Us'].map(l => (
            <a key={l} href="#" className="text-on-primary-fixed-variant hover:text-secondary-fixed-dim transition-opacity">{l}</a>
          ))}
        </nav>
      </footer>
    </div>
  )
}
