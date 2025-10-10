import React from 'react'
import { useStore } from '../../state/store.jsx'
import '../../styles/home.css'

export default function CandidateHome() {
  const { state } = useStore()
  const upcoming = [
    { id: 'i1', date: '2025-10-06', type: 'Technical' },
    { id: 'i2', date: '2025-10-10', type: 'Behavioral' },
  ]

  return (
    <div>
      <section className="card" style={{ marginBottom: 16 }}>
        <h2>Welcome {state.auth.user?.name || 'Candidate'}</h2>
        <p style={{ color: 'var(--color-muted)' }}>You have {upcoming.length} upcoming mock interviews.</p>
      </section>
      <section style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {upcoming.map((u) => (
          <article key={u.id} className="card" style={{ padding: 16 }}>
            <div style={{ fontWeight: 700 }}>{u.type}</div>
            <div style={{ color: 'var(--color-muted)' }}>{u.date}</div>
            <a className="btn" href="#/candidate/start" style={{ marginTop: 8, display: 'inline-block' }}>Prepare</a>
          </article>
        ))}
        <article className="card" style={{ padding: 16 }}>
          <div style={{ fontWeight: 700 }}>Quick Tips</div>
          <ul>
            <li>Structure answers: Situation, Task, Action, Result</li>
            <li>Speak clearly and concisely</li>
            <li>Align with job requirements</li>
          </ul>
        </article>
      </section>
    </div>
  )
}


