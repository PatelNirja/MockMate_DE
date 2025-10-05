import React from 'react'
import { StoreProvider } from './state/store.jsx'
import { createRouter } from './utils/router.js'
import { AppShell } from './components/layout/AppShell.jsx'
import { Header as TopHeader } from './components/layout/Header.jsx'
import { Sidebar } from './components/layout/Sidebar.jsx'
import { Footer } from './components/layout/Footer.jsx'

import Landing from './pages/Landing.jsx'
import Login from './pages/auth/Login.jsx'
import Signup from './pages/auth/Signup.jsx'
import Reset from './pages/auth/Reset.jsx'
import CandidateHome from './pages/candidate/Home.jsx'
import StartInterview from './pages/candidate/Start.jsx'
import Interview from './pages/candidate/Interview.jsx'
import Results from './pages/candidate/Results.jsx'
import CandidateReports from './pages/candidate/Reports.jsx'
import CandidateProgress from './pages/candidate/Progress.jsx'
import CandidateSettings from './pages/candidate/Settings.jsx'
import RecruiterHome from './pages/recruiter/Home.jsx'
import QuestionBank from './pages/recruiter/QuestionBank.jsx'
import Candidates from './pages/recruiter/Candidates.jsx'
import RecruiterReports from './pages/recruiter/Reports.jsx'
import About from './pages/shared/About.jsx'
import Help from './pages/shared/Help.jsx'
import FAQ from './pages/shared/FAQ.jsx'
import Contact from './pages/shared/Contact.jsx'
import { Protected } from './utils/guard.jsx'

const routes = {
  '/': <Landing />,
  '/login': <Login />,
  '/signup': <Signup />,
  '/reset': <Reset />,
  '/candidate/home': <Protected role="candidate"><CandidateHome /></Protected>,
  '/candidate/start': <Protected role="candidate"><StartInterview /></Protected>,
  '/candidate/interview': <Protected role="candidate"><Interview /></Protected>,
  '/candidate/results': <Protected role="candidate"><Results /></Protected>,
  '/candidate/reports': <Protected role="candidate"><CandidateReports /></Protected>,
  '/candidate/progress': <Protected role="candidate"><CandidateProgress /></Protected>,
  '/candidate/settings': <Protected role="candidate"><CandidateSettings /></Protected>,
  '/recruiter/home': <Protected role="recruiter"><RecruiterHome /></Protected>,
  '/recruiter/questions': <Protected role="recruiter"><QuestionBank /></Protected>,
  '/recruiter/candidates': <Protected role="recruiter"><Candidates /></Protected>,
  '/recruiter/reports': <Protected role="recruiter"><RecruiterReports /></Protected>,
  '/about': <About />,
  '/help': <Help />,
  '/faq': <FAQ />,
  '/contact': <Contact />,
}

const router = createRouter(routes)

function App() {
  const [path, setPath] = React.useState(router.getPath())
  React.useEffect(() => router.subscribe(setPath), [])
  const Page = routes[path] || routes['/']
  const showSidebar = path.startsWith('/candidate') || path.startsWith('/recruiter')

  return (
    <StoreProvider>
      <div className="app">
        <button className="btn" id="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode" style={{ position: 'fixed', right: 16, bottom: 16, zIndex: 50 }}>🌓</button>
        <AppShell header={<TopHeader />} sidebar={showSidebar ? <Sidebar /> : null} footer={<Footer />}>
          {Page}
        </AppShell>
      </div>
    </StoreProvider>
  )
}

function toggleTheme() {
  const html = document.documentElement
  const isLight = html.getAttribute('data-theme') !== 'dark'
  html.setAttribute('data-theme', isLight ? 'dark' : 'light')
  localStorage.setItem('theme', isLight ? 'dark' : 'light')
  // Also sync Tailwind dark class
  html.classList.toggle('dark', isLight)
}

// Initialize theme from storage or system preference
;(function initTheme() {
  const stored = localStorage.getItem('theme')
  if (stored) {
    document.documentElement.setAttribute('data-theme', stored)
    return
  }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
})()

export default App


