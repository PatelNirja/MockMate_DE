import React from 'react'
import { useStore } from '../../state/store.jsx'

export function AppShell({ header, sidebar, children, footer }) {
  const { state } = useStore()
  return (
    <div className="app-shell" style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh' }}>
      {header}
      <div className="app-body" style={{ display: 'grid', gridTemplateColumns: sidebar ? (state.ui.sidebarOpen ? '260px 1fr' : '0 1fr') : '1fr' }}>
        {sidebar ? (
          <aside aria-hidden={!state.ui.sidebarOpen} className="sidebar" style={{ overflow: 'hidden' }}>
            {sidebar}
          </aside>
        ) : null}
        <main className="app-content container" style={{ paddingTop: 16, paddingBottom: 24 }}>
          {children}
        </main>
      </div>
      {footer}
    </div>
  )
}


