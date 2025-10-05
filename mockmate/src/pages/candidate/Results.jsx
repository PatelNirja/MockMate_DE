import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

export default function Results() {
  const scores = [
    { label: 'Relevance', value: 78 },
    { label: 'Clarity', value: 84 },
    { label: 'Confidence', value: 70 },
  ]

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <section className="card" style={{ padding: 20 }}>
        <h2>Scorecard</h2>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ width: 260, height: 260 }}>
            <ResponsiveContainer>
              <RadarChart data={scores}>
                <PolarGrid />
                <PolarAngleAxis dataKey="label" />
                <Radar dataKey="value" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ display: 'grid', gap: 8, minWidth: 240 }}>
            {scores.map((s) => (
              <div key={s.label} className="card" style={{ padding: 12, display: 'flex', justifyContent: 'space-between' }}>
                <div>{s.label}</div>
                <div style={{ fontWeight: 700 }}>{s.value}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="card" style={{ padding: 20 }}>
        <h3>Strengths & Weaknesses</h3>
        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          <article className="card" style={{ padding: 12 }}>
            <div style={{ fontWeight: 700 }}>Strengths</div>
            <ul>
              <li>Clear structure in answers</li>
              <li>Relevant examples</li>
            </ul>
          </article>
          <article className="card" style={{ padding: 12 }}>
            <div style={{ fontWeight: 700 }}>Weaknesses</div>
            <ul>
              <li>Speed: pauses between points</li>
              <li>Confidence: filler words</li>
            </ul>
          </article>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button className="btn">Download PDF</button>
          <button className="btn">Download JSON</button>
        </div>
      </section>
    </div>
  )
}


