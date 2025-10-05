import React from 'react'

export function SimpleRadarChart({ data = [], size = 220, color = 'var(--color-primary)' }) {
  const radius = size / 2 - 20
  const cx = size / 2
  const cy = size / 2
  const count = data.length || 1
  const max = Math.max(1, ...data.map((d) => d.value))

  const angleFor = (i) => (Math.PI * 2 * i) / count - Math.PI / 2
  const pointFor = (i, val) => {
    const pct = (val || 0) / max
    const r = pct * radius
    const a = angleFor(i)
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
  }

  const polygon = data
    .map((d, i) => pointFor(i, d.value))
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`)
    .join(' ') + ' Z'

  return (
    <svg width={size} height={size} role="img" aria-label="Radar chart">
      {[1, 0.66, 0.33].map((f, idx) => (
        <circle key={idx} cx={cx} cy={cy} r={radius * f} fill="none" stroke="rgba(148,163,184,0.4)" />
      ))}
      {data.map((d, i) => {
        const [px, py] = pointFor(i, max)
        return <line key={i} x1={cx} y1={cy} x2={px} y2={py} stroke="rgba(148,163,184,0.4)" />
      })}
      <path d={polygon} fill={color} opacity="0.2" stroke={color} strokeWidth="2" />
      {data.map((d, i) => {
        const a = angleFor(i)
        const lx = cx + (radius + 12) * Math.cos(a)
        const ly = cy + (radius + 12) * Math.sin(a)
        return (
          <text key={i} x={lx} y={ly} fontSize="10" textAnchor={Math.cos(a) > 0.1 ? 'start' : Math.cos(a) < -0.1 ? 'end' : 'middle'} fill="var(--color-muted)">{d.label}</text>
        )
      })}
    </svg>
  )
}


