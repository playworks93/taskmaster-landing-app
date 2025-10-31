import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import TaskForm from './components/TaskForm'
import UserProfile from './components/UserProfile'

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
          <p className="tagline">Elevate Your Task Management</p>
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
          <li>Task Creation and Editing</li>
          <li>Collaborative Task Assignment</li>
          <li>Due Date and Reminder Notifications</li>
          <li>Priority Tagging and Filtering</li>
          <li>Progress Tracking and Analytics</li>
          <li>Real-Time Collaboration Tools (Comments/Attachments)</li>
          </ul>
        </div>
        <p>&copy; 2025 TaskMaster. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App