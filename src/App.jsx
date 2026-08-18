import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <AppShell>
        <Dashboard />
      </AppShell>
    </Router>
  )
}

export default App
