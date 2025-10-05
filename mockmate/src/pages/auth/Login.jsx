import React from 'react'
import { useStore } from '../../state/store.jsx'

export default function Login() {
  const { login, setRole, state } = useStore()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    login(email || 'user@example.com', state.auth.role)
    window.location.hash = state.auth.role === 'recruiter' ? '#/recruiter/home' : '#/candidate/home'
  }

  return (
    <div className="container" style={{ maxWidth: 420 }}>
      <form className="card" style={{ display: 'grid', gap: 12, padding: 20 }} onSubmit={onSubmit}>
        <h2>Login</h2>
        <label>
          <div>Email</div>
          <input value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} type="email" placeholder="you@example.com" />
        </label>
        <label>
          <div>Password</div>
          <input value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle} type="password" placeholder="••••••••" />
        </label>
        <label>
          <div>Role</div>
          <select value={state.auth.role} onChange={(e) => setRole(e.target.value)} style={{ ...inputStyle, padding: '10px' }}>
            <option value="candidate">Candidate</option>
            <option value="recruiter">Recruiter</option>
          </select>
        </label>
        <button className="btn" type="submit">Sign In</button>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <a href="#/reset" style={{ color: 'var(--color-primary)' }}>Forgot password?</a>
          <a href="#/signup" style={{ color: 'var(--color-primary)' }}>Create account</a>
        </div>
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


