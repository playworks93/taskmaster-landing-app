import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import AuthComponent from './components/AuthComponent'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import CollaborationPanel from './components/CollaborationPanel'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>TaskMaster</h1>
          <p className="tagline">Streamline Your Productivity</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>User Authentication & Onboarding</li>
          <li>Task Creation & Management</li>
          <li>Collaboration Tools (Comments/Tags)</li>
          <li>Due Dates & Reminders</li>
          <li>Analytics Dashboard</li>
          <li>Integrations with Calendar & Third-party Apps</li>
          </ul>
        </div>
        <p>&copy; 2025 TaskMaster. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App