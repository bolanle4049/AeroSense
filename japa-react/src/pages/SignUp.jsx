import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [showPass, setShowPass] = useState(false)

  return (
    <div className="bg-background min-h-screen flex text-on-background">
      {/* Left branding panel */}
      <div className="hidden lg:flex w-1/2 relative bg-surface-tint overflow-hidden flex-col justify-between p-margin-desktop">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{backgroundImage:`url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800')`}}>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30"/>
        </div>
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-secondary-fixed text-4xl filled">rocket_launch</span>
            <span className="font-headline-md text-headline-md text-on-primary tracking-tight">Japa AI Agent</span>
          </div>
          <div className="space-y-sm max-w-lg">
            <div className="flex items-center gap-sm mb-md">
              <div className="flex -space-x-3">
                {['#102a43','#006972','#314863'].map((c,i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-white text-xs font-bold" style={{background:c}}>
                    {['A','B','C'][i]}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-primary bg-secondary flex items-center justify-center font-label-md text-label-md text-on-secondary">+9k</div>
              </div>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-primary">Join 10,000+ scholars navigating their relocation journey.</h1>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim">Precision tools, AI-driven insights, and a community dedicated to your international success.</p>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-margin-mobile lg:p-margin-desktop bg-surface-container-lowest relative">
        <div className="absolute top-4 left-4 flex items-center gap-sm lg:hidden">
          <span className="material-symbols-outlined text-secondary text-2xl filled">rocket_launch</span>
          <span className="font-label-md text-label-md text-primary tracking-tight">Japa AI Agent</span>
        </div>
        <div className="w-full max-w-md space-y-lg mt-12 lg:mt-0">
          <div className="space-y-sm">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Create an account</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Start your seamless relocation process today.</p>
          </div>

          <form className="space-y-md" onSubmit={e=>e.preventDefault()}>
            {[
              {id:'fullName', label:'Full Name', type:'text', placeholder:'Dr. Jane Doe'},
              {id:'email', label:'Email address', type:'email', placeholder:'jane.doe@example.com'},
            ].map(({id,label,type,placeholder}) => (
              <div key={id} className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-on-surface" htmlFor={id}>{label}</label>
                <input className="w-full px-sm py-sm border border-outline-variant rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary-container bg-surface-container-lowest text-on-surface font-body-md text-body-md transition-all card-shadow" id={id} placeholder={placeholder} type={type}/>
              </div>
            ))}

            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="password">Create Password</label>
              <div className="relative">
                <input className="w-full px-sm py-sm border border-outline-variant rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary-container bg-surface-container-lowest text-on-surface font-body-md text-body-md transition-all card-shadow pr-10" id="password" placeholder="••••••••" type={showPass?'text':'password'}/>
                <button className="absolute inset-y-0 right-0 pr-sm flex items-center text-outline-variant hover:text-on-surface transition-colors" onClick={()=>setShowPass(!showPass)} type="button">
                  <span className="material-symbols-outlined text-xl">{showPass?'visibility':'visibility_off'}</span>
                </button>
              </div>
              <p className="font-caption text-caption text-on-surface-variant mt-1">Must be at least 8 characters long.</p>
            </div>

            <div className="flex items-start gap-sm pt-xs">
              <input className="w-4 h-4 rounded border-outline-variant cursor-pointer mt-1" id="terms" type="checkbox"/>
              <label className="font-caption text-caption text-on-surface-variant cursor-pointer" htmlFor="terms">
                I agree to the <a href="#" className="text-secondary hover:text-on-secondary-container font-label-md transition-colors">Terms and Conditions</a> and <a href="#" className="text-secondary hover:text-on-secondary-container font-label-md transition-colors">Privacy Policy</a>.
              </label>
            </div>

            <Link to="/profile">
              <button className="w-full flex justify-center py-sm px-md rounded-lg card-shadow font-label-md text-label-md text-on-primary bg-primary-container hover:bg-inverse-surface focus:outline-none transition-all duration-200" type="button">
                Create Account
              </button>
            </Link>
          </form>

          <div className="text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Already have an account?{' '}
              <Link to="/signin" className="font-label-md text-label-md text-secondary hover:text-on-secondary-container transition-colors">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
