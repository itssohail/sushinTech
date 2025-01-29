import React from "react";
import "./App.css";
import {
  LayoutGrid,
  Users,
  Calendar,
  User,
  Building2,
  LifeBuoy,
  Settings,
  Bell,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

function App() {
  return (
    <div>
      <header className="header">
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Vasitum</h1>
          <input className="search-bar" type="text" placeholder="Search" />
        </div>
        <div className="notification-icons">
          <Bell size={20} className="icon-style" />
          <MessageSquare size={20} className="icon-style" />
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div className="avatar"></div>
            <span>Admira John</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </header>

      <div className="app-container">
        <aside className="sidebar">
          <div className="menu-section">
            <div className="menu-title">MAIN MENU</div>
            <div className="menu-item active">
              <LayoutGrid size={20} />
              Dashboard
            </div>
            <div className="menu-item">
              <Users size={20} />
              Recruitment
            </div>
            <div className="menu-item">
              <Calendar size={20} />
              Schedule
            </div>
            <div className="menu-item">
              <User size={20} />
              Employee
            </div>
            <div className="menu-item">
              <Building2 size={20} />
              Department
            </div>
          </div>

          <div className="menu-section">
            <div className="menu-title">OTHER</div>
            <div className="menu-item">
              <LifeBuoy size={20} />
              Support
            </div>
            <div className="menu-item">
              <Settings size={20} />
              Settings
            </div>
          </div>
        </aside>

        <main className="main-content">
          <h2 style={{ fontSize: "24px", marginBottom: "24px" }}>Dashboard</h2>

          <div className="stats-grid">
            <div className="stats-card card-pink">
              <h3>Available Position</h3>
              <div className="stats-value">24</div>
              <div className="stats-subtitle">4 Urgently needed</div>
            </div>

            <div className="stats-card card-blue">
              <h3>Job Open</h3>
              <div className="stats-value">10</div>
              <div className="stats-subtitle">4 Active hiring</div>
            </div>

            <div className="stats-card card-purple">
              <h3>New Employees</h3>
              <div className="stats-value">24</div>
              <div className="stats-subtitle">4 Department</div>
            </div>
          </div>

          <div className="analytics-grid">
            <div className="card">
              <h3>Total Employees</h3>
              <div className="stats-value">216</div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="stats-subtitle">120 Men</span>
                <span className="stats-subtitle">96 Women</span>
              </div>
              <div className="trend-positive">+2% Past month</div>
            </div>

            <div className="card">
              <h3>Talent Request</h3>
              <div className="stats-value">16</div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="stats-subtitle">6 Men</span>
                <span className="stats-subtitle">10 Women</span>
              </div>
              <div className="trend-positive">+5% Past month</div>
            </div>
          </div>

          <div className="analytics-grid">
            <div className="card announcement-section">
              <div className="announcement-header">
                <h3>Announcement</h3>
                <span>Today, 13 Sep 2021</span>
              </div>

              <div className="announcement-item">
                <h4>Outing schedule for every department</h4>
                <div className="stats-subtitle">5 Minutes ago</div>
              </div>

              <div className="announcement-item">
                <h4>Meeting HR Department</h4>
                <div className="stats-subtitle">Yesterday, 12:30 PM</div>
              </div>

              <div className="announcement-item">
                <h4>
                  IT Department need two more talents for UX/UI Designer
                  position
                </h4>
                <div className="stats-subtitle">Yesterday, 09:15 AM</div>
              </div>

              <div style={{ textAlign: "center", marginTop: "16px" }}>
                <a href="#" style={{ color: "#ef4444" }}>
                  See All Announcement
                </a>
              </div>
            </div>

            <div className="recent-activity">
              <h3 style={{ marginBottom: "16px" }}>Recently Activity</h3>
              <div style={{ color: "#94a3b8", marginBottom: "24px" }}>
                10.40 AM, Fri 10 Sept 2021
              </div>
              <h4 style={{ marginBottom: "12px" }}>You Posted a New Job</h4>
              <p style={{ color: "#94a3b8", marginBottom: "24px" }}>
                Kindly check the requirements and terms of work and make sure
                everything is right.
              </p>
              <div style={{ color: "#94a3b8", marginBottom: "12px" }}>
                Today you makes 12 Activity
              </div>
              <button
                style={{
                  background: "#ef4444",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                See All Activity
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
