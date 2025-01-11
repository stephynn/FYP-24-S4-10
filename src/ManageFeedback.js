import React, { useState } from "react";
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

const ManageFeedback = () => {
  const [showUploadPopup, setShowUploadPopup] = useState(false); // Separate state for Upload
  const [showSchedulePopup, setShowSchedulePopup] = useState(false); // Separate state for Schedule
  const [selectedDate, setSelectedDate] = useState("");
  const [filter, setFilter] = useState("all"); // State to track filter
  

  const users = [
    { id: 1, email: "user@example.com", date: "12/09/2024", rating: "4/5", status: "" },
    { id: 2, email: "user@example.com", date: "01/07/2024", rating: "5/5", status: "Live" },
    { id: 3, email: "user@example.com", date: "18/06/2024", rating: "3/5", status: "" },
  ];

  const filteredUsers = users.filter((user) => {
    if (filter === "all") return true; // Show all users
    return user.status === filter; // Filter by "Live" or "Nil"
  });

  const handleScheduleClick = () => {
    setShowSchedulePopup(true);
  };

  const handleUploadClick = () => {
    setShowUploadPopup(true);
  };

  const handlePopupClose = () => {
    setShowUploadPopup(false);
    setShowSchedulePopup(false);
  };

  const handleSend = () => {
    console.log("Selected Date:", selectedDate);
    setShowSchedulePopup(false);
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
          <h2 style={styles.overviewTitle}>Manage Feedback</h2>

          {/* Filter */}
          <select
            style={styles.filterDropdown}
            onChange={(e) => setFilter(e.target.value)} // Update the filter state
            value={filter}
          >
            <option value="all">All</option>
            <option value="Live">Live</option>
            <option value=""></option>
          </select>

          {/* Buttons */}
          <button style={styles.UploadButton} onClick={handleUploadClick}>
            Upload
          </button>
          <button style={styles.ScheduleButton} onClick={handleScheduleClick}>
            Schedule
          </button>

          {/* User Table */}
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>
                  <input type="checkbox" style={styles.checkbox} />
                </th>
                <th style={styles.tableHeader}>ID</th>
                <th style={styles.tableHeader}>Email</th>
                <th style={styles.tableHeader}>Date</th>
                <th style={styles.tableHeader}>Rating</th>
                <th style={styles.tableHeader}>Status</th>
                <th style={styles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} style={styles.tableRow}>
                  <td style={styles.tableCell}>
                    <input type="checkbox" style={styles.checkbox} />
                  </td>
                  <td style={styles.tableCell}>{user.id}</td>
                  <td style={styles.tableCell}>{user.email}</td>
                  <td style={styles.tableCell}>{user.date}</td>
                  <td style={styles.tableCell}>{user.rating}</td>
                  <td style={styles.tableCell}>{user.status}</td>
                  <td style={styles.tableCell}>
                    <a href={`/view_feedback/${user.id}`} style={styles.viewLink}>
                      View
                    </a>
                    <a href="#" style={styles.deleteLink} onClick={handleUploadClick}>
                      Upload
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Popup */}
      {showUploadPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popup}>
            <h3 style={styles.popupTitle}>Uploaded successfully</h3>
            <div style={styles.popupActions}>
              <button style={styles.CloseButton} onClick={handlePopupClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Popup */}
      {showSchedulePopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popup}>
            <h3 style={styles.popupTitle}>Schedule Feedback</h3>
            <label style={styles.label}>
              Date:
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                style={styles.input}
              />
            </label>
            <div style={styles.popupActions}>
              <button style={styles.SendButton} onClick={handleSend}>
                Send
              </button>
              <button style={styles.CloseButton} onClick={handlePopupClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
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

  sidebarNav: {
    listStyle: "none",
    padding: 0,
  },
  sidebarNavItem: {
    margin: "30px 0",
    width: "100%",
  },

  dashboardContent: {
    backgroundColor: "#eaf6f6",
    padding: "20px",
    overflowY: "auto",
    height: "100%",
    width: "100%",
    flex: 1,
    marginBottom: "30px", 
  },
  

  searchBarContainer: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0", 
  },

  searchInput: {
    padding: "10px",
    fontSize: "16px",
    width: "600px", 
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginRight: "10px", 
  },

  searchButton: {
    padding: "10px 15px",
    backgroundColor: "#333333",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },

  linkStyle: {
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    display: "flex", 
    alignItems: "center", 
    gap: "10px", 
  },

  viewLink: {
    padding: "10px",

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
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
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
  },

  filterDropdown: {
    padding: "12px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
    cursor: "pointer",
    width: "120px",
    marginRight: "10px",
  },

  ResetButton: {
    marginTop: "20px",
    marginBottom: "30px", 
    padding: "10px 20px",
    backgroundColor: "#333333",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    marginRight: "10px",
  },
  
  UploadButton: {
    marginTop: "20px",
    marginBottom: "30px", 
    padding: "10px 20px",
    backgroundColor: "#333333",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    marginRight: "10px",
  },

  ScheduleButton: {
    marginTop: "20px",
    marginBottom: "30px", 
    padding: "10px 20px",
    backgroundColor: "#333333",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  
  

  table: {
  width: "100%",
  borderCollapse: "collapse",
  tableLayout: "auto", // Let the table adjust based on content
},

tableHeader: {
  backgroundColor: "#ddd",
  color: "#000",
  fontWeight: "bold",
  textAlign: "left",
  padding: "10px",
  border: "1px solid #ddd",
},

checkbox: {
  width: "14px",
  height: "14px",
  cursor: "pointer",
},

tableCell: {
  border: "1px solid #fff",
  padding: "10px",
  textAlign: "left",
  wordWrap: "break-word", // Allow words to wrap within cells
  whiteSpace: "normal",  // Allow text wrapping instead of keeping it on one line
  overflow: "hidden", 
  textOverflow: "ellipsis", // Optional: Add ellipsis if content exceeds
},

tableRow: {
  backgroundColor: "#f9f9f9",
},

popupOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    textAlign: "center",
  },
  popupTitle: {
    marginBottom: "20px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  label: {
    display: "block",
    marginBottom: "10px",
    textAlign: "left",
  },
  input: {
    width: "80%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    width: "80%",
    padding: "10px",
    height: "80px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  popupActions: {
    display: "flex",
    justifyContent: "center", 
    gap: "10px", 
    padding: "10px",
  },
  
  SendButton: {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  CloseButton: {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ManageFeedback;
