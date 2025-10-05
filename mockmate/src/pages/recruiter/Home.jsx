import React from 'react'

export default function RecruiterHome() {
  const stats = [
    { label: 'Total Candidates', value: 128 },
    { label: 'Active Interviews', value: 7 },
    { label: 'Reports Generated', value: 312 },
  ]
  return (
    <div className="card" style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        {stats.map((s) => (
          <article key={s.label} className="card" style={{ padding: 16, textAlign: 'center' }}>
            <div style={{ color: 'var(--color-muted)' }}>{s.label}</div>
            <div style={{ fontSize: 24, fontWeight: 800 }}>{s.value}</div>
          </article>
        ))}
      </div>
    </div>
  )
}


