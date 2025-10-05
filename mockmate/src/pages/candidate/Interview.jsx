import React from 'react'
import { useStore } from '../../state/store.jsx'

export default function Interview() {
  const { state } = useStore()
  const params = new URLSearchParams(window.location.hash.split('?')[1] || '')
  const type = params.get('type') || 'HR'
  const questions = state.questions.filter((q) => q.type === type)
  const [idx, setIdx] = React.useState(0)
  const [answer, setAnswer] = React.useState('')
  const [timeLeft, setTimeLeft] = React.useState(90)

  React.useEffect(() => {
    const t = setInterval(() => setTimeLeft((s) => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(t)
  }, [])

  const next = () => {
    setAnswer('')
    if (idx < questions.length - 1) setIdx(idx + 1)
    else window.location.hash = '#/candidate/results'
  }

  const q = questions[idx] || { text: 'No question' }
  const progress = `${idx + 1}/${questions.length || 1}`

  return (
    <div className="card" style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>Question {progress}</div>
        <div style={{ fontWeight: 700 }}>⏱ {timeLeft}s</div>
      </div>
      <h3 style={{ marginTop: 8 }}>{q.text}</h3>
      <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} rows={6} placeholder="Type your response..." style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid rgba(2,6,23,0.12)' }} />
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        <button className="btn" onClick={next}>Next</button>
        <button className="btn" title="Voice input (mock)">🎙</button>
      </div>
    </div>
  )
}


