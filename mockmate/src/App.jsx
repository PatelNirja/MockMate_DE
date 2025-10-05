import React from 'react'

function App() {
  return (
    <div className="app">
      <header className="app-header container">
        <h1 className="app-title">MockMate – Interview & Feedback Bot</h1>
        <div className="spacer" />
        <button className="btn" id="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          🌓
        </button>
      </header>
      <main className="container">
        <section className="card">
          <h2>Project Setup Complete</h2>
          <p>React + JS + CSS baseline is ready. Next: build layouts and pages.</p>
        </section>
      </main>
      <footer className="footer container">
        <nav className="footer-links">
          <a href="#/about">About</a>
          <a href="#/help">Help</a>
          <a href="#/faq">FAQ</a>
        </nav>
      </footer>
    </div>
  )
}

function toggleTheme() {
  const html = document.documentElement
  const isLight = html.getAttribute('data-theme') !== 'dark'
  html.setAttribute('data-theme', isLight ? 'dark' : 'light')
  localStorage.setItem('theme', isLight ? 'dark' : 'light')
}

// Initialize theme from storage or system preference
;(function initTheme() {
  const stored = localStorage.getItem('theme')
  if (stored) {
    document.documentElement.setAttribute('data-theme', stored)
    return
  }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
})()

export default App


