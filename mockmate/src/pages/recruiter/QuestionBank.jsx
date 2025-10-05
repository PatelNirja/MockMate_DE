import React from 'react'
import { useStore } from '../../state/store.jsx'

export default function QuestionBank() {
  const { state, setState } = useStore()
  const [filter, setFilter] = React.useState('All')
  const [text, setText] = React.useState('')
  const [type, setType] = React.useState('HR')

  const list = state.questions.filter((q) => (filter === 'All' ? true : q.type === filter))

  const add = () => {
    if (!text.trim()) return
    const q = { id: 'q' + Date.now(), type, text }
    setState((s) => ({ ...s, questions: [q, ...s.questions] }))
    setText('')
  }

  const remove = (id) => setState((s) => ({ ...s, questions: s.questions.filter((q) => q.id !== id) }))

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <section className="card" style={{ padding: 16 }}>
        <h2>Question Bank</h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} style={selectStyle}>
            <option>All</option>
            <option>HR</option>
            <option>Technical</option>
            <option>Behavioral</option>
          </select>
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter question" style={inputStyle} />
          <select value={type} onChange={(e) => setType(e.target.value)} style={selectStyle}>
            <option>HR</option>
            <option>Technical</option>
            <option>Behavioral</option>
          </select>
          <button className="btn" onClick={add}>Add</button>
        </div>
      </section>
      <section className="card" style={{ padding: 16 }}>
        <div style={{ display: 'grid', gap: 8 }}>
          {list.map((q) => (
            <div key={q.id} className="card" style={{ padding: 12, display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 8 }}>
              <div>
                <div style={{ fontWeight: 700 }}>{q.type}</div>
                <div>{q.text}</div>
              </div>
              <a className="btn" href="#/recruiter/edit-question" aria-disabled style={{ pointerEvents: 'none', opacity: .7 }}>Edit</a>
              <button className="btn" onClick={() => remove(q.id)}>Delete</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const inputStyle = { flex: '1 1 320px', padding: '12px', borderRadius: 10, border: '1px solid rgba(2,6,23,0.12)' }
const selectStyle = { padding: '12px', borderRadius: 10, border: '1px solid rgba(2,6,23,0.12)' }


