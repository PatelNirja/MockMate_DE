import React from 'react'

export default function CandidateSettings() {
  const [emailNotifs, setEmailNotifs] = React.useState(true)
  const [password, setPassword] = React.useState('')
  return (
    <div className="card" style={{ padding: 20, display: 'grid', gap: 12 }}>
      <h2>Settings</h2>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input type="checkbox" checked={emailNotifs} onChange={(e) => setEmailNotifs(e.target.checked)} />
        Email notifications
      </label>
      <label>
        <div>Change Password</div>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New password" style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid rgba(2,6,23,0.12)' }} />
      </label>
      <button className="btn" style={{ width: 'fit-content' }}>Save Changes</button>
    </div>
  )
}


