import React from 'react'

export default function Candidates() {
  const list = [
    { id: 'c1', name: 'Alice Johnson', role: 'Frontend', lastScore: 86 },
    { id: 'c2', name: 'Bob Smith', role: 'Backend', lastScore: 78 },
    { id: 'c3', name: 'Carla Gomez', role: 'Data', lastScore: 92 },
  ]
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <h2>Candidates</h2>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {list.map((c) => (
          <article key={c.id} className="card" style={{ padding: 16 }}>
            <div style={{ fontWeight: 700 }}>{c.name}</div>
            <div style={{ color: 'var(--color-muted)' }}>{c.role}</div>
            <div style={{ marginTop: 8 }}>Last Score: <strong>{c.lastScore}</strong></div>
            <a className="btn" href="#/recruiter/reports" style={{ marginTop: 8, display: 'inline-block' }}>View Performance</a>
          </article>
        ))}
      </div>
    </div>
  )
}


