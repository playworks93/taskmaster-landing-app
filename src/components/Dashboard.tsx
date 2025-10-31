import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'task_creation_and_editing' ? 'active' : ''}
          onClick={() => setActiveTab('task_creation_and_editing')}
        >
          Task Creation And Editing
        </button>
        <button 
          className={activeTab === 'collaborative_task_assignment' ? 'active' : ''}
          onClick={() => setActiveTab('collaborative_task_assignment')}
        >
          Collaborative Task Assignment
        </button>
        <button 
          className={activeTab === 'due_date_and_reminder_notifications' ? 'active' : ''}
          onClick={() => setActiveTab('due_date_and_reminder_notifications')}
        >
          Due Date And Reminder Notifications
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'task_creation_and_editing' && (
          <div className="tab-content">
            <h2>Task Creation and Editing</h2>
            <p>Manage your task creation and editing here.</p>
          </div>
        )}

        {activeTab === 'collaborative_task_assignment' && (
          <div className="tab-content">
            <h2>Collaborative Task Assignment</h2>
            <p>Manage your collaborative task assignment here.</p>
          </div>
        )}

        {activeTab === 'due_date_and_reminder_notifications' && (
          <div className="tab-content">
            <h2>Due Date and Reminder Notifications</h2>
            <p>Manage your due date and reminder notifications here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard