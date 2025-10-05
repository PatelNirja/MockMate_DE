import React from 'react'

export default function NotFound() {
  return (
    <div className="card" style={{ padding: 24, textAlign: 'center' }}>
      <h2>404 - Page Not Found</h2>
      <p className="text-slate-500 dark:text-slate-400">The page you are looking for does not exist.</p>
      <a className="btn" href="#/">Go Home</a>
    </div>
  )
}


