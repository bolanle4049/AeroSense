import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function SignIn() {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center font-body-md text-on-background p-margin-mobile md:p-margin-desktop" style={{backgroundImage:'radial-gradient(#d1e4ff 1px, transparent 1px)', backgroundSize:'20px 20px'}}>
      <main className="w-full max-w-[480px]">
        <div className="bg-surface-container-lowest rounded-xl card-shadow-lg p-md md:p-lg border border-outline-variant/30 flex flex-col gap-lg">
          <div className="flex flex-col items-center text-center gap-sm">
            <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center mb-sm">
              <Logo className="h-34 w-auto" />
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary">Welcome Back</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Sign in to your Japa AI Agent dashboard to continue your relocation journey.</p>
          </div>

          <div className="flex flex-col gap-sm">
            {[{icon:'G', label:'Sign in with Google'},{icon:'in', label:'Sign in with LinkedIn'}].map(({icon,label}) => (
              <button key={label} className="w-full flex items-center justify-center gap-base py-sm px-md rounded bg-surface-container border border-outline-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md text-on-surface">
                <span className="font-bold text-sm w-5 h-5 flex items-center justify-center bg-white rounded border">{icon}</span>
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-sm">
            <div className="flex-1 h-px bg-outline-variant/50"/>
            <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">Or</span>
            <div className="flex-1 h-px bg-outline-variant/50"/>
          </div>

          <form className="flex flex-col gap-md" onSubmit={e=>e.preventDefault()}>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="email">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">mail</span>
                <input className="w-full pl-lg pr-sm py-sm rounded border border-outline-variant bg-surface-container-lowest text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all font-body-md text-body-md placeholder:text-on-surface-variant/50" id="email" placeholder="name@example.com" type="email"/>
              </div>
            </div>
            <div className="flex flex-col gap-xs">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="password">Password</label>
                <Link to="/forgot-password" className="font-caption text-caption text-secondary hover:text-secondary-container transition-colors font-medium">Forgot Password?</Link>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">lock</span>
                <input className="w-full pl-lg pr-sm py-sm rounded border border-outline-variant bg-surface-container-lowest text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all font-body-md text-body-md placeholder:text-on-surface-variant/50" id="password" placeholder="••••••••" type="password"/>
              </div>
            </div>
            <Link to="/discovery">
              <button className="w-full py-sm px-md rounded bg-primary-container text-on-primary font-label-md text-label-md hover:bg-inverse-surface transition-colors mt-sm card-shadow flex items-center justify-center gap-xs" type="button">
                Sign In <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </Link>
          </form>

          <div className="text-center mt-sm">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Don't have an account?{' '}
              <Link to="/signup" className="text-secondary hover:text-secondary-container font-label-md text-label-md transition-colors">Sign Up</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
