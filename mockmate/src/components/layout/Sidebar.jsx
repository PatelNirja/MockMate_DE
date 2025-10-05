import React from 'react'
import { LayoutGrid, Play, FileBarChart2, LineChart, Settings, Book, Users } from 'lucide-react'
import { useStore } from '../../state/store.jsx'

export function Sidebar() {
  const { state } = useStore()
  const role = state.auth.role

  const candidateLinks = [
    { href: '#/candidate/home', label: 'Home', icon: <LayoutGrid size={16} /> },
    { href: '#/candidate/start', label: 'Start Interview', icon: <Play size={16} /> },
    { href: '#/candidate/reports', label: 'Reports', icon: <FileBarChart2 size={16} /> },
    { href: '#/candidate/progress', label: 'Progress', icon: <LineChart size={16} /> },
    { href: '#/candidate/settings', label: 'Settings', icon: <Settings size={16} /> },
  ]
  const recruiterLinks = [
    { href: '#/recruiter/home', label: 'Home', icon: <LayoutGrid size={16} /> },
    { href: '#/recruiter/questions', label: 'Question Bank', icon: <Book size={16} /> },
    { href: '#/recruiter/candidates', label: 'Candidates', icon: <Users size={16} /> },
    { href: '#/recruiter/reports', label: 'Reports', icon: <FileBarChart2 size={16} /> },
    { href: '#/recruiter/settings', label: 'Settings', icon: <Settings size={16} /> },
  ]

  const links = role === 'recruiter' ? recruiterLinks : candidateLinks

  return (
    <div style={{ height: '100%', padding: 16, borderRight: '1px solid rgba(2,6,23,0.06)', background: 'var(--color-surface)' }}>
      <div style={{ fontWeight: 700, marginBottom: 12, color: 'var(--color-muted)' }}>{role === 'recruiter' ? 'Recruiter' : 'Candidate'} Menu</div>
      <nav style={{ display: 'grid', gap: 8 }}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className="card" style={{ padding: '10px 12px', textDecoration: 'none', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: 8 }}>
            {l.icon}
            <span>{l.label}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}


