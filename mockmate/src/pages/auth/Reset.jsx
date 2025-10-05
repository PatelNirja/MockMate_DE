import React from 'react'

export default function Reset() {
  const [email, setEmail] = React.useState('')
  const [sent, setSent] = React.useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="container" style={{ maxWidth: 420 }}>
      <form className="card" style={{ display: 'grid', gap: 12, padding: 20 }} onSubmit={onSubmit}>
        <h2>Reset Password</h2>
        <label>
          <div>Email</div>
          <input value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} type="email" placeholder="you@example.com" />
        </label>
        <button className="btn" type="submit">Send Reset Link</button>
        {sent && <div style={{ color: 'var(--color-primary)' }}>Check your email for reset instructions.</div>}
      </form>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '12px 12px',
  borderRadius: '10px',
  border: '1px solid rgba(2,6,23,0.12)'
}


