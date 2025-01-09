import React from "react";
import home from "./images/home.png";
import user from "./images/user.png";
import feedback from "./images/feedback.png";
import profques from "./images/profques.png";
import workout from "./images/workout.png";
import logout from "./images/logout.png";

const Sidebar = () => (
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
          <a href="/feedback" style={styles.linkStyle}>
            <img src={feedback} alt="Feedback" style={styles.icon} />
            Manage Feedback
          </a>
          <hr style={styles.horizontalLine} />
        </li>
        <li style={styles.sidebarNavItem}>
          <a href="/profiling" style={styles.linkStyle}>
            <img src={profques} alt="Profiling" style={styles.icon} />
            Manage Profiling
          </a>
        </li>
        <li style={styles.sidebarNavItem}>
          <a href="/workout" style={styles.linkStyle}>
            <img src={workout} alt="Workout" style={styles.icon} />
            Manage Workout and Training
          </a>
          <hr style={styles.horizontalLine} />
        </li>
        <li style={styles.sidebarNavItem}>
          <a href="/logout" style={styles.linkStyle}>
            <img src={logout} alt="Logout" style={styles.icon} />
            Logout
          </a>
        </li>
      </ul>
    </nav>
  </aside>
);

const ManageUserDashboard = () => {
  const users = [
    {
      id: 1,
      type: "User",
      email: "user@example.com",
      password: "********",
      status: "Live",
    },
    {
      id: 2,
      type: "Business User",
      email: "businessuser@example.com",
      password: "********",
      status: "Waiting for approval",
    },
  ];

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
        <Sidebar />
        <div style={styles.dashboardContent}>
          <h2 style={styles.overviewTitle}>Manage User Dashboard</h2>

          {/* Search Bar */}
          <div style={styles.searchBarContainer}>
            <input
              type="text"
              placeholder="Search for user..."
              style={styles.searchInput}
            />
            <button style={styles.searchButton}>Search</button>
            <select style={styles.filterDropdown}>
              <option value="all">All</option>
              <option value="user">User</option>
              <option value="businessuser">Business User</option>
            </select>
          </div>

          {/* Buttons */}
          <button style={styles.DeleteButton}>Delete</button>
          <button style={styles.ApproveButton}>Approve</button>

          {/* User Table */}
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>
                  <input type="checkbox" style={styles.checkbox} />
                </th>
                <th style={styles.tableHeader}>ID</th>
                <th style={styles.tableHeader}>User Type</th>
                <th style={styles.tableHeader}>Email</th>
                <th style={styles.tableHeader}>Password</th>
                <th style={styles.tableHeader}>Status</th>
                <th style={styles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} style={styles.tableRow}>
                  <td style={styles.tableCell}>
                    <input type="checkbox" style={styles.checkbox} />
                  </td>
                  <td style={styles.tableCell}>{user.id}</td>
                  <td style={styles.tableCell}>{user.type}</td>
                  <td style={styles.tableCell}>{user.email}</td>
                  <td style={styles.tableCell}>{user.password}</td>
                  <td style={styles.tableCell}>{user.status}</td>
                  <td style={styles.tableCell}>
                    <a href={`/view_user_dashboard/${user.id}`} style={styles.viewLink}>
                      View
                    </a>
                    <a href="#" style={styles.deleteLink}>
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
    marginLeft: "10px", 
  },

  DeleteButton: {
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
  
  ApproveButton: {
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

  
};

export default ManageUserDashboard;
