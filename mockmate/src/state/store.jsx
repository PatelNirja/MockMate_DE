import React from 'react'

const initialState = {
  auth: { isAuthenticated: false, role: 'candidate', user: null },
  ui: { sidebarOpen: true },
  interviews: [],
  questions: [
    { id: 'q1', type: 'HR', text: 'Tell me about yourself.' },
    { id: 'q2', type: 'Technical', text: 'Explain event loop in JavaScript.' },
    { id: 'q3', type: 'Behavioral', text: 'Describe a time you solved a conflict.' },
  ],
  reports: [],
}

export const StoreContext = React.createContext()

export function StoreProvider({ children }) {
  const [state, setState] = React.useState(initialState)

  const login = (email, role = 'candidate') => {
    setState((s) => ({ ...s, auth: { isAuthenticated: true, role, user: { email, name: 'User' } } }))
  }
  const logout = () => setState((s) => ({ ...s, auth: { isAuthenticated: false, role: 'candidate', user: null } }))
  const setRole = (role) => setState((s) => ({ ...s, auth: { ...s.auth, role } }))
  const toggleSidebar = () => setState((s) => ({ ...s, ui: { ...s.ui, sidebarOpen: !s.ui.sidebarOpen } }))

  const value = { state, setState, login, logout, setRole, toggleSidebar }
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = React.useContext(StoreContext)
  if (!ctx) throw new Error('StoreProvider missing')
  return ctx
}


