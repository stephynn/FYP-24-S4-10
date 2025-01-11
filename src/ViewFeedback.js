import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  
const ViewFeedback = () => {
    const { id } = useParams(); // Retrieve user ID from the route parameter
    const navigate = useNavigate();  // Use navigate to redirect
    const [user, setUser] = useState(null);
    const [isPasswordEditable, setIsPasswordEditable] = useState(false); // State for toggling password editability
    const [password, setPassword] = useState(''); // State to hold the password value
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await fetch(`/api/users/${id}`);
          if (!response.ok) {
            throw new Error(`Error fetching user data: ${response.statusText}`);
          }
          const data = await response.json();
          setUser(data);
          setPassword(data?.password || ''); // Set initial password value
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  
      fetchUserData();
    }, [id]);
  
    const handlePasswordReset = () => {
      setIsPasswordEditable(true); // Enable password field for editing
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value); // Update password value when user types
    };
  
    const handleUpdate = async () => {
        console.log("Update button clicked"); // Debugging line
        // Simulate updating the password (you can replace this with actual API logic)
        try {
          const response = await fetch(`/api/users/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }), // Update with the new password
          });
    
          if (!response.ok) {
            throw new Error(`Error updating user data: ${response.statusText}`);
          }
    
          // After updating, redirect back to the user dashboard page
          navigate('/manage_user_dashboard');
        } catch (error) {
          console.error("Error updating user data:", error);
        }
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
        <Sidebar /> {/* Sidebar component */}



        {/* Dashboard Content */}
        <div style={styles.dashboardContent}>
          {/* Arrow Button and Title */}
          <div style={styles.arrowButtonContainer}>
            <button 
              style={styles.arrowButton} 
              onClick={() => navigate('/manage_feedback')}
            >
              &#8592; Manage Feedback
            </button>
          </div>

            <div style={styles.headerWithButton}>
                <h2 style={styles.overviewTitle}>Rating and Review</h2>

            </div>

          <div style={styles.userInfoContainer}>
            <div style={styles.column}>
              <p style={styles.userInfoText}>ID </p>
              <input 
                type="text" 
                value={user?.username || 'User123'} 
                readOnly 
                style={styles.readOnlyInput} 
              />
              <p style={styles.userInfoText}>Email </p>
              <input 
                type="text" 
                value={user?.email || 'user@example.com'} 
                readOnly 
                style={styles.readOnlyInput} 
              />

            </div>
            <div style={styles.column}>
            <p style={styles.userInfoText}>Rating:</p>
                <div style={styles.ratingContainer}>
                    <input 
                    type="text" 
                    value={user?.gender || '4'} // This part stays as it is, displaying user data or default value
                    readOnly 
                    style={styles.readOnlyInput} 
                    />
                    <span style={styles.ratingText}>/5</span>  {/* Add "/5" outside the input */}
                </div>

            <p style={styles.userInfoText}>Review:</p>
            <textarea
            value={user?.height || 'The application is very user friendly, easy to navigate around'}
            readOnly
            style={{ ...styles.readOnlyInput, height: '150px' }} 
            rows="6" 
            />
                    
            
  
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
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  userInfoContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px", // Adds space between the columns
    backgroundColor: "#f2f2f2",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "95%",
  },

  column: {
    flex: 1, // Each column takes equal width
    display: "flex",
    flexDirection: "column",
  },

  userInfoText: {
    fontWeight: "normal", // Ensure that the Username and Email are not bold
  },

  readOnlyInput: {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "14px",
    width: "200px", // Adjust width as needed
    marginBottom: "10px", // Add space between fields
    color: "#333",
    cursor: "not-allowed", // To indicate it is not editable
  },

  resetPasswordLink: {
    color: "#0066cc",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: "14px",
    marginTop: "10px",
  },

  headerWithButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
  },

  updateButton: {
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
    marginLeft: "auto",  // This moves the button to the right of its container
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
  },

  ratingContainer: {
    display: "flex",  // Flexbox allows input and span to sit next to each other
    alignItems: "center",  // Align vertically in the center
    
  },
  
  ratingText: {
    fontSize: "16px",  // Adjust font size if needed
    marginLeft: "5px",  // Adds space between input field and "/5"
    color: "#333",  // Color for the "/5" text
  }
  
};

export default ViewFeedback;
