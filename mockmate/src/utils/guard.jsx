import React from 'react'
import { useStore } from '../state/store.jsx'

export function Protected({ role, children }) {
  const { state } = useStore()
  if (!state.auth.isAuthenticated) {
    window.location.hash = '#/login'
    return null
  }
  if (role && state.auth.role !== role) {
    window.location.hash = state.auth.role === 'recruiter' ? '#/recruiter/home' : '#/candidate/home'
    return null
  }
  return children
}


