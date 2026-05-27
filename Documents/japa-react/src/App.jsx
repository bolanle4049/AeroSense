import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import ProfileOnboarding from './pages/ProfileOnboarding'
import DiscoveryDashboard from './pages/DiscoveryDashboard'
import ApplicationEngine from './pages/ApplicationEngine'
import DocumentChecklist from './pages/DocumentChecklist'
import ScholarshipDetails from './pages/ScholarshipDetails'
import WeeklyDigest from './pages/WeeklyDigest'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/profile" element={<ProfileOnboarding />} />
      <Route path="/discovery" element={<DiscoveryDashboard />} />
      <Route path="/applications" element={<ApplicationEngine />} />
      <Route path="/documents" element={<DocumentChecklist />} />
      <Route path="/scholarship" element={<ScholarshipDetails />} />
      <Route path="/digest" element={<WeeklyDigest />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
