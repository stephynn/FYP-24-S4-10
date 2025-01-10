import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import home from "./images/home.png";
import user from "./images/user.png";
import feedback from "./images/feedback.png";
import profques from "./images/profques.png";
import workout from "./images/workout.png";
import logout from "./images/logout.png";

// Sidebar Component
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

// Manage Sub Category Component
const ManageSubCategory = () => {
  const [subCategories, setSubCategories] = useState([
    { id: 1, name: "Strength Training", status: "Active" },
    { id: 2, name: "Cardio Workouts", status: "Inactive" },
    { id: 3, name: "Yoga", status: "Active" },
  ]);

  // State for new sub-category name
  const [newSubCategoryName, setNewSubCategoryName] = useState("");

  // Handle the addition of a new sub-category
  const handleAddSubCategory = () => {
    if (newSubCategoryName.trim() === "") return; // Do nothing if input is empty

    const newSubCategory = {
      id: subCategories.length + 1,
      name: newSubCategoryName,
      status: "Inactive",
    };
    setSubCategories([...subCategories, newSubCategory]);
    setNewSubCategoryName(""); // Reset the input field
  };

  // Handle deleting a sub-category
  const handleDeleteSubCategory = (id) => {
    setSubCategories(subCategories.filter((subCategory) => subCategory.id !== id));
  };

  // Handle toggling the status of a sub-category
  const handleToggleStatus = (id) => {
    setSubCategories(
      subCategories.map((subCategory) =>
        subCategory.id === id
          ? { ...subCategory, status: subCategory.status === "Active" ? "Inactive" : "Active" }
          : subCategory
      )
    );
  };

  const navigate = useNavigate(); 

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

      {/* Main Layout */}
      <div style={styles.dashboardLayout}>
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div style={styles.dashboardContent}>

        {/* Arrow Button and Title */}
        <div style={styles.arrowButtonContainer}>
              <button 
                style={styles.arrowButton} 
                onClick={() => navigate('/workout')}
              >
                &#8592; Manage Workout and Training
              </button>
        </div>

          <h2 style={styles.overviewTitle}>Manage Sub Category</h2>

          {/* Input for new sub-category name and Add Button */}
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={newSubCategoryName}
              onChange={(e) => setNewSubCategoryName(e.target.value)}
              placeholder="Enter new sub-category..."
              style={styles.inputField}
            />
            <button onClick={handleAddSubCategory} style={styles.addButton}>
              Add Sub Category
            </button>
          </div>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>ID</th>
                <th style={styles.tableHeader}>Name</th>
                <th style={styles.tableHeader}>Status</th>
                <th style={styles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {subCategories.map((subCategory) => (
                <tr key={subCategory.id} style={styles.tableRow}>
                  <td style={styles.tableCell}>{subCategory.id}</td>
                  <td style={styles.tableCell}>{subCategory.name}</td>
                  <td style={styles.tableCell}>{subCategory.status}</td>
                  <td style={styles.tableCell}>
                    <button
                      onClick={() => handleToggleStatus(subCategory.id)}
                      style={styles.actionButton}
                    >
                      Toggle Status
                    </button>
                    <button
                      onClick={() => handleDeleteSubCategory(subCategory.id)}
                      style={styles.actionButton}
                    >
                      Delete
                    </button>
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

// Styles for Layout
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
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  tableHeader: {
    backgroundColor: "#ddd",
    fontWeight: "bold",
    padding: "10px",
    border: "1px solid #ccc",
  },
  tableRow: {
    backgroundColor: "#fff",
  },
  tableCell: {
    padding: "10px",
    border: "1px solid #ccc",
    textAlign: "center",
  },
  actionButton: {
    margin: "0 5px",
    padding: "5px 10px",
    backgroundColor: "#333",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  inputField: {
    padding: "10px 20px",
    width: "60%",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px", // Adds space between the input field and button
    marginBottom: "20px",
  },
  overviewTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  arrowButtonContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "20px",
  },

  arrowButton: {
    backgroundColor: "#eaf6f6",
    color: "#333",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    fontSize: "14px",
    borderRadius: "5px",
  }
};

export default ManageSubCategory;
