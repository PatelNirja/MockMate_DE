import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

export default function CandidateReports() {
  const items = [
    { id: 'r1', date: '2025-09-01', type: 'HR', score: 72 },
    { id: 'r2', date: '2025-09-15', type: 'Technical', score: 80 },
    { id: 'r3', date: '2025-10-01', type: 'Behavioral', score: 86 },
  ]
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <section className="card" style={{ padding: 20 }}>
        <h2>Past Interviews</h2>
        <div style={{ display: 'grid', gap: 8 }}>
          {items.map((i) => (
            <div key={i.id} className="card" style={{ padding: 12, display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 8 }}>
              <div>
                <div style={{ fontWeight: 700 }}>{i.type}</div>
                <div style={{ color: 'var(--color-muted)' }}>{i.date}</div>
              </div>
              <div style={{ fontWeight: 700, alignSelf: 'center' }}>{i.score}</div>
              <button className="btn">View</button>
            </div>
          ))}
        </div>
      </section>
      <section className="card" style={{ padding: 20 }}>
        <h3>Scores Overview</h3>
        <div style={{ width: '100%', height: 220 }}>
          <ResponsiveContainer>
            <BarChart data={items.map((i) => ({ name: i.type, score: i.score }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="score" fill="var(--color-primary)" radius={[8,8,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  )
}


