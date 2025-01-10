import React from "react";
import { useNavigate } from 'react-router-dom';
import home from "./images/home.png";
import user from "./images/user.png";
import feedback from "./images/feedback.png";
import profques from "./images/profques.png";
import workout from "./images/workout.png";
import logout from "./images/logout.png";
import backgroundImage from './images/manage_feedback.png';
import backgroundImageUserDashboard from './images/manage_user_dashboard.png';

// Sidebar 
const Sidebar = ({ handleLogout }) => (
  <aside style={styles.sidebar}>
    <nav>
      <ul style={styles.sidebarNav}>
        <li style={styles.sidebarNavItem}>
          <a href="/dashboard" style={styles.linkStyle}>
            <img src={home} alt="Home" style={styles.icon} />
            Home Page
          </a>
          <hr style={styles.horizontalLine} />
        </li>

        <li style={styles.sidebarNavItem}>
          <a href="/manage_user_dashboard" style={styles.linkStyle}>
            <img src={user} alt="User" style={styles.icon} />
            Manage User Dashboard
          </a>
        </li>

        <li style={styles.sidebarNavItem}>
          <a href="/manage_feedback" style={styles.linkStyle}>
            <img src={feedback} alt="Feedback" style={styles.icon} />
            Manage Feedback
          </a>
          <hr style={styles.horizontalLine} />
        </li>

        <li style={styles.sidebarNavItem}>
          <a href="/profiling" style={styles.linkStyle}>
            <img src={profques} alt="profiling" style={styles.icon} />
            Manage Profiling
          </a>
        </li>

        <li style={styles.sidebarNavItem}>
          <a href="/workout" style={styles.linkStyle}>
            <img src={workout} alt="workout" style={styles.icon} />
            Manage Workout and Training
          </a>
          <hr style={styles.horizontalLine} />
        </li>

        {/* Logout button */}
        <li style={styles.sidebarNavItem}>
        <a href="/" style={styles.linkStyle}>
            <img src={logout} alt="Logout" style={styles.icon} />
            Logout
        </a>
        </li>
      </ul>
    </nav>
  </aside>
);

// Dashboard Component
const Dashboard = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  // Handle the click for Start Now button
  const handleStartNowClick = () => {
    navigate('/manage_user_dashboard'); // Redirects to the manage user dashboard page
  };

   // Handle the click for Start Now button
   const handleStartNowFeedbackClick = () => {
    navigate('/manage_feedback'); // Redirects to the manage user dashboard page
  };

  // Logout function to clear session and navigate to the login page
  const handleLogout = () => {
    localStorage.removeItem("userToken"); // Clear user token from local storage
    navigate('/'); // Navigate to the login page
  };

  return (
    <div style={styles.dashboardContainer}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={styles.logo}>PEAK FIT</div>
          <div style={styles.separator}></div>
          <div style={styles.managementCenter}>Management Center</div>
        </div>
      </header>

      {/* Dashboard Layout */}
      <div style={styles.dashboardLayout}>
        {/* Pass handleLogout as a prop to Sidebar */}
        <Sidebar handleLogout={handleLogout} />
        <div style={styles.dashboardContent}>
          <h2 style={styles.overviewTitle}>Overview</h2>
          {/* Add sections here */}
          <div style={styles.sectionsContainer}>
            <div style={styles.fullWidthSection}>
              <h3>Users and App Performance</h3>
              <p>Track user details and app performance metrics in real-time.</p>
            </div>

            {/* Bottom sections with background images */}
            <div
              style={{
                ...styles.sectionWithBackground,
                backgroundImage: `url(${backgroundImage})`,
              }}
            >
              <h3>Manage Feedback</h3>
              <button style={styles.button} onClick={handleStartNowFeedbackClick}>
                Start Now
              </button>
            </div>

            <div
              style={{
                ...styles.sectionWithBackground,
                backgroundImage: `url(${backgroundImageUserDashboard})`,
              }}
            >
              <h3>Manage User Dashboard</h3>
              <button style={styles.button} onClick={handleStartNowClick}>
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  dashboardContainer: {
    margin: 0,
    padding: 0,
    backgroundColor: "#fff",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    height: "100vh", // Ensure it takes the full viewport height
    fontFamily: "Arial, sans-serif",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 2rem",
    backgroundColor: "#333333",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    zIndex: 1,
    height: "40px", // Set height for the header
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    marginRight: "10px",
    color: "#FFF",
  },
  separator: {
    height: "24px",
    width: "2px",
    backgroundColor: "#FFFFFF",
    margin: "0 10px",
  },
  managementCenter: {
    fontSize: "16px",
    color: "#FFF",
  },
  sidebar: {
    backgroundColor: "#f2f2f2",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },

  sidebarNav: {
    listStyle: "none",
    padding: 0,
  },
  sidebarNavItem: {
    margin: "30px 0",
    width: "100%",
  },
  linkStyle: {
    textDecoration: "none",
    color: "black",
    fontSize: "18px",
  },
 
  dashboardContent: {
    backgroundColor: "#eaf6f6",
    padding: "20px",
    overflowY: "auto",
    height: "100%",
    width: "100px",
    flex: 1,
  },

  linkStyle: {
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    display: "flex", 
    alignItems: "center", 
    gap: "10px", 
  },
  icon: {
    width: "20px", 
    height: "30px", 
  },
  horizontalLine: {
    border: "none", 
    borderTop: "2px solid white", 
    margin: "15px 0", 
    width: "100%", 
  },
  dashboardLayout: {
    display: "flex",
    flex: 1, 
    height: "calc(100vh - 60px)", 
  },

  overviewTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  sectionsContainer: {
    display: "grid",
    gridTemplateRows: "auto auto", // Two rows: one for the top section, one for the bottom row
    gridTemplateColumns: "1fr 1fr", // Two equal columns for the bottom row
    gap: "20px", // Space between sections
    marginTop: "20px",
  },
  fullWidthSection: {
    gridColumn: "1 / -1", // Spans all columns
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  sectionWithBackground: {
    backgroundSize: "cover", // Ensure the background covers the entire section
    backgroundPosition: "center", // Center the image
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    color: "#000", // Ensure text is visible on the background
    height: "200px", // Set a height for sections with background
  },

  button: {
    marginTop: "20px", 
    padding: "10px 20px", 
    backgroundColor: "#333333", 
    color: "white", 
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  }
};

export default Dashboard;
