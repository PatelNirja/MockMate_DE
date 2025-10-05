import React from 'react'

export default function FAQ() {
  const faqs = [
    { q: 'Is there voice input?', a: 'A mic UI is available; actual voice capture can be integrated later.' },
    { q: 'Can I export reports?', a: 'Yes, PDF/JSON/Excel export buttons are provided as placeholders.' },
    { q: 'Does this require a backend?', a: 'This demo uses in-memory data; you can connect APIs later.' },
  ]
  return (
    <div className="card" style={{ padding: 20 }}>
      <h2>FAQ</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {faqs.map((f, i) => (
          <article key={i} className="card" style={{ padding: 12 }}>
            <div style={{ fontWeight: 700 }}>{f.q}</div>
            <div style={{ color: 'var(--color-muted)' }}>{f.a}</div>
          </article>
        ))}
      </div>
    </div>
  )
}


