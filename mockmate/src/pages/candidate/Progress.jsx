import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function CandidateProgress() {
  const data = [
    { label: 'Aug', value: 65 },
    { label: 'Sep', value: 74 },
    { label: 'Oct', value: 82 },
  ]
  return (
    <div className="card" style={{ padding: 20 }}>
      <h2>Progress Over Time</h2>
      <div style={{ width: '100%', height: 240 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="var(--color-primary)" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}


