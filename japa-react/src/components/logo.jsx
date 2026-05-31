import logo from '../assets/japalogo.png'

export default function Logo({ className = 'h-8 w-auto', dark = false }) {
  return (
    <img
      src={logo}
      alt="Japa AI Agent"
      className={`${className} ${dark ? 'brightness-0 invert' : ''} object-contain`}
      style={{ mixBlendMode: dark ? 'normal' : 'multiply' }}
    />
  )
}