import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
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
    const [questions, setQuestions] = useState([
      { id: 1, question: "What is your fitness goal?", options: ["Lose weight", "Build muscle", "Improve endurance"] },
      { id: 2, question: "How often do you exercise?", options: ["Daily", "Weekly", "Occasionally"] },
      { id: 3, question: "What types of workouts do you enjoy?", options: ["Cardio", "Strength Training", "Yoga"] },
    ]);
  
    const [newQuestion, setNewQuestion] = useState("");
    const [editQuestionId, setEditQuestionId] = useState(null);
    const [editQuestionText, setEditQuestionText] = useState("");
    const [editingOptions, setEditingOptions] = useState(null);
    const [newOption, setNewOption] = useState({});

  
    const handleAddQuestion = () => {
      if (newQuestion.trim() === "") return;
      const newEntry = {
        id: questions.length + 1,
        question: newQuestion,
        options: [],
      };
      setQuestions([...questions, newEntry]);
      setNewQuestion("");
    };
  
    const handleDeleteQuestion = (id) => {
      setQuestions(questions.filter((q) => q.id !== id));
    };
  
    const handleEditQuestion = (id, text) => {
      setEditQuestionId(id);
      setEditQuestionText(text);
    };
  
    const handleSaveEdit = () => {
      setQuestions(
        questions.map((q) =>
          q.id === editQuestionId ? { ...q, question: editQuestionText } : q
        )
      );
      setEditQuestionId(null);
      setEditQuestionText("");
    };
  
    const handleEditOptions = (id) => {
        if (editingOptions === id) {
          setEditingOptions(null); // Close editing options
        } else {
          setEditingOptions(id); // Open options for editing
        }
      };
      
  
    const handleAddOption = (id) => {
        if (!newOption[id] || newOption[id].trim() === "") return;
      
        setQuestions(
          questions.map((q) =>
            q.id === id
              ? { ...q, options: [...q.options, newOption[id]] }
              : q
          )
        );
        setNewOption({ ...newOption, [id]: "" });
      };

      const handleNewOptionChange = (id, value) => {
  setNewOption({ ...newOption, [id]: value });
};
  
    const handleDeleteOption = (id, option) => {
      setQuestions(
        questions.map((q) =>
          q.id === id
            ? { ...q, options: q.options.filter((opt) => opt !== option) }
            : q
        )
      );
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
  
        {/* Main Layout */}
        <div style={styles.dashboardLayout}>
          <Sidebar />
  
          {/* Content */}
          <div style={styles.dashboardContent}>
            <h2 style={styles.overviewTitle}>Manage Profiling Questions</h2>
  
            {/* Add New Question */}
            <div style={styles.inputContainer}>
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Enter a new question..."
                style={styles.inputField}
              />
              <button onClick={handleAddQuestion} style={styles.addButton}>
                Add Question
              </button>
            </div>
  
            {/* Questions Table */}
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.tableHeader}>Question</th>
                  <th style={styles.tableHeader}>Options</th>
                  <th style={styles.tableHeader}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((q) => (
                    <tr key={q.id} style={styles.tableRow}>
                    <td style={styles.tableCell}>
                        {editQuestionId === q.id ? (
                        <input
                            type="text"
                            value={editQuestionText}
                            onChange={(e) => setEditQuestionText(e.target.value)}
                            style={styles.inputField}
                        />
                        ) : (
                        q.question
                        )}
                    </td>
                    <td style={styles.tableCell}>
                        {editingOptions === q.id ? (
                        <div>
                            <input
                            type="text"
                            value={newOption[q.id] || ""}
                            onChange={(e) => handleNewOptionChange(q.id, e.target.value)}
                            placeholder="New Option"
                            style={styles.inputField}
                            />
                            <button
                            onClick={() => handleAddOption(q.id)}
                            style={styles.actionButton}
                            >
                            Add
                            </button>
                            <ul>
                            {q.options.map((opt, idx) => (
                                <li key={idx} style={{ margin: "5px 0" }}>
                                {opt}
                                <button
                                    onClick={() => handleDeleteOption(q.id, opt)}
                                    style={styles.actionButton}
                                >
                                    Delete
                                </button>
                                </li>
                            ))}
                            </ul>
                        </div>
                        ) : (
                        q.options.join(", ")
                        )}
                    </td>
                    <td style={styles.tableCell}>
                        {editQuestionId === q.id ? (
                        <button onClick={handleSaveEdit} style={styles.actionButton}>
                            Save
                        </button>
                        ) : (
                        <button
                            onClick={() => handleEditQuestion(q.id, q.question)}
                            style={styles.actionButton}
                        >
                            Edit
                        </button>
                        )}
                        <button
                        onClick={() => handleDeleteQuestion(q.id)}
                        style={styles.actionButton}
                        >
                        Delete
                        </button>
                        <button
                        onClick={() => handleEditOptions(q.id)}
                        style={styles.actionButton}
                        >
                        {editingOptions === q.id ? "Done" : "Edit Options"}
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
    margin: "5px 5px",
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
    gap: "10px",
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

export default ManageProfiling;

