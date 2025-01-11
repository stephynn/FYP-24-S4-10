import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import home from "./images/home.png";
import user from "./images/user.png";
import feedback from "./images/feedback.png";
import profques from "./images/profques.png";
import workout from "./images/workout.png";
import logout from "./images/logout.png";

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
            <a href="/manage_profques" style={styles.linkStyle}>
              <img src={profques} alt="Profiling" style={styles.icon} />
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
  
  const ManageProfiling = () => {

    const navigate = useNavigate();

    const handleViewClick = (section) => {
        navigate(`/view_profiling/${section}`);
    };

    return (
      <div style={styles.dashboardContainer}>
        <header style={styles.header}>
          <div style={styles.headerLeft}>
            <div style={styles.logo}>PEAK FIT</div>
            <div style={styles.separator}></div>
            <div style={styles.managementCenter}>Management Center</div>
          </div>
        </header>
  
        <div style={styles.dashboardLayout}>
          <Sidebar />
          <div style={styles.dashboardContent}>
            <h2 style={styles.pageTitle}>Manage Profiling</h2>
            <div style={styles.tabContainer}>
              <div style={styles.tab}>User Details</div>
              <div style={styles.tab}>Fitness Preference</div>
              <div style={styles.tab}>Fitness Goals</div>
            </div>
            <div style={styles.cardContainer}>
              {/* User Details Card */}
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Questions</h3>
                <ul style={styles.cardList}>
                    <li style={styles.cardListItem}>Select Year of Birth</li>
                    <li style={styles.cardListItem}>Select Gender</li>
                    <li style={styles.cardListItem}>Select Weight (KG)</li>
                    <li style={styles.cardListItem}>Select Height (CM)</li>
                </ul>

                <button
                style={styles.cardButton}
                onClick={() => handleViewClick("user-details")}
                >
                    View
                </button>

              </div>
  
              {/* Fitness Preference Card */}
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Questions</h3>
                <ul style={styles.cardList}>
                  <li style={styles.cardListItem}>What is your fitness level</li>
                  <li style={styles.cardListItem}>Any limitations to training</li>
                  <li style={styles.cardListItem}>Preferred workout duration</li>
                </ul>
                <button
                style={styles.cardButton}
                onClick={() => handleViewClick("fitness-preference")}
                >
                    View
                </button>
              </div>
  
              {/* Fitness Goals Card */}
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Questions</h3>
                <ul style={styles.cardList}>
                  <li style={styles.cardListItem}>Your fitness goals</li>
                  <li style={styles.cardListItem}>What is your goal weight</li>
                  <li style={styles.cardListItem}>How often do you exercise</li>
                </ul>
                <button
                style={styles.cardButton}
                onClick={() => handleViewClick("fitness-goals")}
                >
                    View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const styles = {
    dashboardContainer: {
      margin: 0,
      padding: 0,
      backgroundColor: "#fff",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
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
      height: "40px",
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
    dashboardLayout: {
      display: "flex",
      flex: 1,
      height: "calc(100vh - 60px)",
    },
    dashboardContent: {
      backgroundColor: "#eaf6f6",
      padding: "20px",
      overflowY: "auto",
      height: "100%",
      width: "100%",
      flex: 1,
    },
    pageTitle: {
      fontSize: "20px",
      marginBottom: "20px",
    },
    tabContainer: {
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "#f0f0f0",
      padding: "10px",
      borderRadius: "5px",
      marginBottom: "20px",
    },
    tab: {
      flex: 1,
      textAlign: "center",
      padding: "10px 0",
      fontWeight: "bold",
      color: "#333",
      cursor: "pointer",
      borderBottom: "2px solid transparent",
    },
    cardContainer: {
      display: "flex",
      justifyContent: "space-around",
      gap: "20px",
    },
    card: {
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "5px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        textAlign: "center",
        width: "30%",
        display: "flex", // Add flexbox
        flexDirection: "column", // Keep column layout
        alignItems: "center", // Center align content
        justifyContent: "space-between", // Distribute space evenly
    },
    cardTitle: {
      fontSize: "18px",
      marginBottom: "10px",
      fontWeight: "bold",
    },
    cardList: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center align items
        gap: "15px", // Space between each item
        textAlign: "center", // Center align text
    },
    cardListItem: {
        fontSize: "16px", // Font size for readability
        lineHeight: "1.5", // Improves readability
    },

    cardButton: {
      marginTop: "40px",
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
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
        fontSize: "16px",
        display: "flex", 
        alignItems: "center", 
        gap: "10px", 
      },
  };
  
  export default ManageProfiling;
  
  
  
