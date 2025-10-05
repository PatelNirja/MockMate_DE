import React from 'react'
import { useStore } from '../../state/store.jsx'

export function Header() {
  const { state, setRole, toggleSidebar, logout } = useStore()

  return (
    <header className="container flex items-center gap-3 py-4">
      <button className="btn" onClick={toggleSidebar} aria-label="Toggle sidebar">☰</button>
      <div className="font-extrabold">MockMate</div>
      <nav className="flex gap-3 text-slate-500 dark:text-slate-400">
        <a href="#/" className="no-underline">Home</a>
        <a href="#/about" className="no-underline">About</a>
        <a href="#/help" className="no-underline">Help</a>
        <a href="#/contact" className="no-underline">Contact</a>
      </nav>
      <div className="spacer" />
      <select aria-label="Select role" className="card" onChange={(e) => setRole(e.target.value)} value={state.auth.role} style={{ padding: '8px 10px', border: '1px solid rgba(2,6,23,0.08)' }}>
        <option value="candidate">Candidate</option>
        <option value="recruiter">Recruiter</option>
      </select>
      <button className="btn" onClick={() => document.getElementById('theme-toggle')?.click()}>Theme</button>
      {state.auth.isAuthenticated ? (
        <button className="btn" onClick={logout}>Logout</button>
      ) : (
        <a className="btn" href="#/login">Login</a>
      )}
    </header>
  )
}


