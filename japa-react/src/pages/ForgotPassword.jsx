import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function ForgotPassword() {
  const [sent, setSent] = useState(false)

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-body-md relative" style={{backgroundImage:'radial-gradient(circle at 2px 2px, rgba(16, 42, 67, 0.05) 1px, transparent 0)', backgroundSize:'32px 32px'}}>
      <main className="flex-grow flex items-center justify-center p-margin-mobile md:p-margin-desktop relative z-10">
        <div className="w-full max-w-md bg-surface-container-lowest rounded-xl card-shadow p-md md:p-lg border border-outline-variant/30 flex flex-col gap-md">
          <div className="w-full flex justify-center mb-sm">
            <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center">
              <Logo className="h-16 w-auto" />
            </div>
          </div>

          {!sent ? (
            <>
              <div className="text-center flex flex-col gap-xs">
                <h1 className="font-headline-md text-headline-md text-primary font-bold">Reset Password</h1>
                <p className="font-body-md text-body-md text-on-surface-variant">Enter your email to receive a password reset link.</p>
              </div>

              <form className="flex flex-col gap-md mt-sm" onSubmit={e=>{e.preventDefault();setSent(true)}}>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="email">Email Address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">mail</span>
                    <input className="w-full pl-lg pr-sm py-sm rounded border border-outline-variant bg-surface-container-lowest text-on-surface font-body-md text-body-md transition-all focus:border-secondary focus:ring-1 focus:ring-secondary outline-none placeholder:text-outline-variant" id="email" placeholder="name@example.com" required type="email"
                      style={{boxShadow:'none'}} onFocus={e=>e.target.style.boxShadow='0 0 0 3px rgba(0, 163, 177, 0.2)'} onBlur={e=>e.target.style.boxShadow='none'}/>
                  </div>
                </div>
                <div className="flex flex-col gap-sm mt-sm">
                  <button className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-sm px-md rounded hover:bg-primary transition-colors flex items-center justify-center gap-base" type="submit">
                    <span>Send Reset Link</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </button>
                  <Link to="/signin" className="w-full text-center font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors mt-xs flex items-center justify-center gap-xs">
                    <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                    Back to Sign In
                  </Link>
                </div>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-sm mt-sm text-center py-md">
              <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-xs">
                <span className="material-symbols-outlined">mark_email_read</span>
              </div>
              <h3 className="font-label-md text-label-md text-primary font-bold text-lg">Check your inbox</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">We've sent further instructions to your email address.</p>
              <button className="mt-md font-label-md text-label-md text-secondary hover:text-secondary-fixed-dim transition-colors" onClick={()=>setSent(false)} type="button">
                Try another email
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
