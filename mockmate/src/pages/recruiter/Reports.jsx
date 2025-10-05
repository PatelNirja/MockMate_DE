import React from 'react'

export default function RecruiterReports() {
  const [range, setRange] = React.useState('Last 30 days')
  return (
    <div className="card" style={{ padding: 20, display: 'grid', gap: 12 }}>
      <h2>Reports</h2>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <select value={range} onChange={(e) => setRange(e.target.value)} style={{ padding: '12px', borderRadius: 10, border: '1px solid rgba(2,6,23,0.12)' }}>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Year to date</option>
        </select>
        <button className="btn">Generate Batch Report</button>
        <button className="btn">Export PDF</button>
        <button className="btn">Export Excel</button>
      </div>
      <div style={{ color: 'var(--color-muted)' }}>Generated reports will appear here.</div>
    </div>
  )
}


