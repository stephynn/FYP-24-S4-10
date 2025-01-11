import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import backgroundImage from './images/landing.png';
import Dashboard from './Dashboard'; // Overview (Home Page)
import ManageUserDashboard from "./ManageUserDashboard";  // Manage User Dashboard
import ViewUserDashboard from "./ViewUserDashboard";
import ManageWorkout from "./ManageWorkout";
import ManageWorkoutSub from "./ManageWorkoutSub";
import ManageFeedback from "./ManageFeedback";
import ViewFeedback from "./ViewFeedback";
import ManageProfiling from "./ManageProfiling";
import ViewProfiling from "./ViewProfiling";

function App() {
 
  return (
    <Router>
      <Routes>
        {/* Route for LoginForm*/}
        <Route path="/" element={<LoginForm />} />
        
        {/* Route for Dashboard*/}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Route for Manage User Dashboard (pass users as prop) */}
        <Route path="/manage_user_dashboard" element={<ManageUserDashboard />} />

        {/* Route for Manage User Dashboard (View)*/}
        <Route path="/view_user_dashboard/:id" element={<ViewUserDashboard />} />

        {/* Route for Workout and Training */}
        <Route path="/workout" element={<ManageWorkout/>} />

        {/* Route for Workout and Training (Sub Category) */}
        <Route path="/manage_sub_category" element={<ManageWorkoutSub/>} />

        {/* Route for Feedback */}
        <Route path="/manage_feedback" element={<ManageFeedback/>} />

        {/* Route for Feedback (View)*/}
        <Route path="/view_feedback/:id" element={<ViewFeedback />} />

        {/* Route for Profiling Questions*/}
        <Route path="/manage_profques" element={<ManageProfiling/>} />

         {/* Route for Profiling Questions*/}
         <Route path="/view_profiling/:section" element={<ViewProfiling />} />


      </Routes>
    </Router>
  );
}



function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      // After successful login, navigate to the dashboard
      navigate("/dashboard");
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div style={styles.loginPage}>
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={styles.logo}>PEAK FIT</div>
          <div style={styles.separator}></div>
          <div style={styles.managementCenter}>Management Center</div>
        </div>
      </header>

      <div style={styles.loginContent}>
        <div style={styles.description}>
          <h2 style={styles.descriptionTitle}>Peak Fit Management</h2>
          <p style={styles.descriptionText}>
            Welcome to Peak Fit's Management Platform. An easy solution for handling administrative tasks within the 
            Peak Fit Application. 
          </p>
        </div>

        <div style={styles.loginForm}>
          <form onSubmit={handleLogin}>
            <div style={styles.formGroup}>
              <h2 style={styles.loginTitle}>Login</h2>
              <label htmlFor="email" style={styles.label}>
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>
                Password*
              </label>
              <input
                type="password"
                id="password"
                name="password"
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  loginPage: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#333",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  loginContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    padding: "2rem",
  },
  description: {
    maxWidth: "440px",
    marginRight: "3rem",
    color: "#FFF",
  },
  descriptionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "1rem",
    marginLeft: "8rem",
    color: "#FFF",
  },
  descriptionText: {
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#FFF",
    marginLeft: "8rem",
  },
  loginTitle: {
    padding: "0.7rem",
    fontSize: "20px",
    fontWeight: "bold",
    marginLeft: "6rem",

  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 2rem",
    backgroundColor: "#E0D9CE",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    marginRight: "10px",
  },
  separator: {
    height: "24px",
    width: "2px",
    backgroundColor: "#333",
    margin: "0 10px",
  },
  managementCenter: {
    fontSize: "16px",
    color: "#555",
  },
  loginForm: {
    backgroundColor: "#d3d3d3",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "280px",
    height: "400px",
    marginRight: "10rem",
  },
  formGroup: {
    marginBottom: "3rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontSize: "14px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "0.7rem",
    fontSize: "14px",
    fontWeight: "bold",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "auto",
  },
};

export default App;
