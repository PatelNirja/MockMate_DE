import React from 'react'

export function Footer() {
  return (
    <footer className="footer container">
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div style={{ color: 'var(--color-muted)' }}>© {new Date().getFullYear()} MockMate</div>
        <div className="spacer" />
        <nav className="footer-links">
          <a href="#/about">About</a>
          <a href="#/help">Help</a>
          <a href="#/faq">FAQ</a>
        </nav>
      </div>
    </footer>
  )
}


