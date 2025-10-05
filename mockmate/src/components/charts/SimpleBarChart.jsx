import React from 'react'

export function SimpleBarChart({ data = [], width = 360, height = 160, color = 'var(--color-primary)' }) {
  const max = Math.max(1, ...data.map((d) => d.value))
  const barWidth = Math.max(8, (width - 40) / (data.length || 1) - 8)
  return (
    <svg width={width} height={height} role="img" aria-label="Bar chart">
      <rect x="0" y="0" width={width} height={height} fill="none" />
      {data.map((d, i) => {
        const x = 20 + i * (barWidth + 8)
        const h = Math.round(((height - 30) * d.value) / max)
        const y = height - 20 - h
        return (
          <g key={i}>
            <rect x={x} y={y} width={barWidth} height={h} fill={color} rx="6" />
            <text x={x + barWidth / 2} y={height - 6} fontSize="10" textAnchor="middle" fill="var(--color-muted)">{d.label}</text>
          </g>
        )
      })}
    </svg>
  )
}


