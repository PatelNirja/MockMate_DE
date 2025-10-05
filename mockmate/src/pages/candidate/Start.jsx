import React from 'react'

export default function StartInterview() {
  const [type, setType] = React.useState('HR')
  return (
    <div className="card" style={{ padding: 20 }}>
      <h2>Start Interview</h2>
      <label>
        <div>Interview Type</div>
        <select value={type} onChange={(e) => setType(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid rgba(2,6,23,0.12)' }}>
          <option>HR</option>
          <option>Technical</option>
          <option>Behavioral</option>
        </select>
      </label>
      <a className="btn" href={`#/candidate/interview?type=${encodeURIComponent(type)}`} style={{ marginTop: 12, display: 'inline-block' }}>Start</a>
    </div>
  )
}


