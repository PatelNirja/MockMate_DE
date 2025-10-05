import React from 'react'

export function SimpleLineChart({ data = [], width = 360, height = 160, color = 'var(--color-primary)' }) {
  if (!data.length) return null
  const max = Math.max(1, ...data.map((d) => d.value))
  const min = Math.min(0, ...data.map((d) => d.value))
  const xStep = (width - 40) / Math.max(1, data.length - 1)
  const yScale = (val) => {
    const range = max - min || 1
    const pct = (val - min) / range
    return 20 + (1 - pct) * (height - 40)
  }
  const points = data.map((d, i) => [20 + i * xStep, yScale(d.value)])
  const path = points.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(' ')

  return (
    <svg width={width} height={height} role="img" aria-label="Line chart">
      <path d={path} fill="none" stroke={color} strokeWidth="2" />
      {points.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3" fill={color} />
      ))}
    </svg>
  )
}


