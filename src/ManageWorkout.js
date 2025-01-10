import React, { useState, useRef, useEffect } from "react";
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
  
  const ManageWorkout = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [hoveredOption, setHoveredOption] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null); // Track selected dropdown option
    const dropdownButtonRef = useRef(null);
    const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  
    const handleDropdownToggle = () => {
      setDropdownVisible(!dropdownVisible);
    };
  
    const handleOptionClick = (option) => {
      setSelectedOption(option); // Set the selected option
      setDropdownVisible(false); // Close the dropdown after selection
    };
  
    const handleMouseEnter = (index) => {
      setHoveredOption(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredOption(null);
    };
  
    useEffect(() => {
      if (dropdownVisible && dropdownButtonRef.current) {
        const rect = dropdownButtonRef.current.getBoundingClientRect();
        setButtonPosition({ top: rect.bottom, left: rect.left });
      }
    }, [dropdownVisible]);
  
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
            <label style={styles.dropdownLabel}>
              Manage Workout and Training
              <span
                onClick={handleDropdownToggle}
                style={styles.dropdownIcon}
                ref={dropdownButtonRef}
              >
                ▼
              </span>
            </label>
            {dropdownVisible && (
              <div
                style={{
                  ...styles.dropdownMenu,
                  top: buttonPosition.top,
                  left: buttonPosition.left,
                }}
              >
                {["Workout Tags", "Workout Content Repository", "Personalized Workouts"].map((option, index) => (
                  <div
                    key={index}
                    style={hoveredOption === index ? styles.dropdownOptionHovered : styles.dropdownOption}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
  
           {/* Conditionally render tables */}
           {selectedOption === "Workout Tags" && (
            <div>
                <p>Workout Tags</p>
                <table style={styles.table}>
                <thead>
                    <tr>
                    <th style={styles.tableHeader}>
                        <input
                        type="checkbox"
                        style={styles.checkbox}
                        onChange={(e) => {
                            const checkboxes = document.querySelectorAll(".row-checkbox");
                            checkboxes.forEach((checkbox) => (checkbox.checked = e.target.checked));
                        }}
                        />
                    </th>
                    <th style={styles.tableHeader}>Category</th>
                    <th style={styles.tableHeader}>Sub Category</th>
                    <th style={styles.tableHeader}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={styles.tableRow}>
                    <td style={styles.tableCell}>
                        <input type="checkbox" className="row-checkbox" style={styles.checkbox} />
                    </td>
                    <td style={styles.tableCell}>Difficulty Level</td>
                    <td style={styles.tableCell}>
                        <button
                        style={styles.manageButton}
                        onClick={() => (window.location.href = "/manage_sub_category")}
                        >
                        Manage
                        </button>
                    </td>
                    <td style={styles.tableCell}>Live</td>
                    </tr>
                    <tr style={styles.tableRow}>
                    <td style={styles.tableCell}>
                        <input type="checkbox" className="row-checkbox" style={styles.checkbox} />
                    </td>
                    <td style={styles.tableCell}>Type of Workout</td>
                    <td style={styles.tableCell}>
                        <button
                        style={styles.manageButton}
                        onClick={() => (window.location.href = "/manage_sub_category")}
                        >
                        Manage
                        </button>
                    </td>
                    <td style={styles.tableCell}>Live</td>
                    </tr>
                    <tr style={styles.tableRow}>
                    <td style={styles.tableCell}>
                        <input type="checkbox" className="row-checkbox" style={styles.checkbox} />
                    </td>
                    <td style={styles.tableCell}>User Goals</td>
                    <td style={styles.tableCell}>
                        <button
                        style={styles.manageButton}
                        onClick={() => (window.location.href = "/manage_sub_category")}
                        >
                        Manage
                        </button>
                    </td>
                    <td style={styles.tableCell}>Live</td>
                    </tr>
                    <tr style={styles.tableRow}>
                    <td style={styles.tableCell}>
                        <input type="checkbox" className="row-checkbox" style={styles.checkbox} />
                    </td>
                    <td style={styles.tableCell}>Limitations</td>
                    <td style={styles.tableCell}>
                        <button
                        style={styles.manageButton}
                        onClick={() => (window.location.href = "/manage_sub_category")}
                        >
                        Manage
                        </button>
                    </td>
                    <td style={styles.tableCell}>Live</td>
                    </tr>
                </tbody>
                </table>
            </div>
            )}

            
  
            {selectedOption === "Workout Content Repository" && (

               <div>
                
               <p>Workout Content Repository</p>

               <div style={styles.buttonContainer}>
                <button style={styles.actionButton} onClick={() => alert('Workout Content has been sent to business user')}>
                  Send
                </button>
                <button style={styles.actionButton} onClick={() => alert('Workout Content has been refreshed')}>
                  Refresh Repository
                </button>
               </div>

               <div style={{ maxHeight: "400px", overflowY: "auto", border: "1px solid #ddd", borderRadius: "5px" }}>
               <table style={styles.table}>
                
               <thead>
                
                   <tr>
                   <th style={styles.tableHeader}>

                       <input
                       type="checkbox"
                       style={styles.checkbox}
                       onChange={(e) => {
                           const checkboxes = document.querySelectorAll(".row-checkbox");
                           checkboxes.forEach((checkbox) => (checkbox.checked = e.target.checked));
                       }}
                       />
                   </th>
                   <th style={styles.tableHeader}>Workout Videos</th>
                  
                   </tr>
               </thead>
               <tbody>
                
               <tr style={styles.tableRow}>
                <td style={styles.tableCell}>
                  <input type="checkbox" className="row-checkbox" style={styles.checkbox} />
                </td>
                <td style={styles.tableCell}>
                  <iframe
                    style={{ width: "30%", height: "50%" }}
                    src="https://www.youtube.com/embed/NfSB6sNFvO4?si=okTDJekBOewA6GXR"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                  ></iframe>
                </td>
              </tr>

              <tr style={styles.tableRow}>
                <td style={styles.tableCell}>
                  <input type="checkbox" className="row-checkbox" style={styles.checkbox} />
                </td>
                <td style={styles.tableCell}>
                  <iframe
                     style={{ width: "30%", height: "50%" }}
                    src="https://www.youtube.com/embed/q_kYnAShnnI?si=AylxpXMaPLEeaacx"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                  ></iframe>
                </td>
              </tr>

              <tr style={styles.tableRow}>
                <td style={styles.tableCell}>
                  <input type="checkbox" className="row-checkbox" style={styles.checkbox} />
                </td>
                <td style={styles.tableCell}>
                  <iframe
                     style={{ width: "30%", height: "50%" }}
                    src="https://www.youtube.com/embed/cbKkB3POqaY?si=Pq07Z_A3CXHH7dDO"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                  ></iframe>
                </td>
              </tr>

              
              <tr style={styles.tableRow}>
                <td style={styles.tableCell}>
                  <input type="checkbox" className="row-checkbox" style={styles.checkbox} />
                </td>
                <td style={styles.tableCell}>
                  <iframe
                     style={{ width: "30%", height: "50%" }}
                    src="https://www.youtube.com/embed/u3UjeyPOjoU?si=cwvMP_pL36GeerGA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                  ></iframe>
                </td>
              </tr>
                   
               </tbody>
               </table>

               
           </div>
           </div>
            )}
  
            {selectedOption === "Personalized Workouts" && (
              <div>

                <p>Personalized Workout Tracking</p>

                <div style={styles.buttonContainer}>
                <select style={styles.filterDropdown}>
                  <option value="all">All</option>
                  <option value="tick">✔</option>
                  <option value="nil">---</option>
                </select>
               </div>

               

                <table style={styles.table}>
                <thead>
                    <tr>
                    <th style={styles.tableHeader}> User ID</th>
                    <th style={styles.tableHeader}>Personalized Plan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={styles.tableRow}>
                    <td style={styles.tableCell}>122</td>
                    <td style={styles.tableCell}>
                    <span
                      style={{fontSize: "16px", color: "black"}}
                    >
                      ✔
                    </span>
                        
                    </td>
                    </tr>


                    <tr style={styles.tableRow}>
                    <td style={styles.tableCell}>123</td>
                    <td style={styles.tableCell}>
                    <span
                      style={{fontSize: "16px", color: "black"}}
                    >
                      ✔
                    </span>
                        
                    </td>
                    </tr>

                    <tr style={styles.tableRow}>
                    <td style={styles.tableCell}>124</td>
                    <td style={styles.tableCell}>
                    <span
                      style={{fontSize: "16px", color: "black"}}
                    >
                      ✔
                    </span>
                        
                    </td>
                    </tr>

                    <tr style={styles.tableRow}>
                    <td style={styles.tableCell}>125</td>
                    <td style={styles.tableCell}>
                    <span
                      style={{fontSize: "16px", color: "black"}}
                    >
                      ---
                    </span>
                        
                    </td>
                    </tr>





                    
                </tbody>
                </table>
            </div>
            )}

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
    marginBottom: "50px",
  },

  dropdownLabel: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
  },

  dropdownIcon: {
    marginLeft: "10px",
    cursor: "pointer",
  },

  dropdownMenu: {
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    zIndex: 9999, // Ensures it's on top of other elements
    display: "block", // Dropdown is always visible when dropdownVisible is true
    padding: "10px", // Reduced padding for smaller size
    width: "230px", // Set a fixed smaller width
  },

  dropdownOption: {
    padding: "5px 10px", // Reduced padding for smaller height
    cursor: "pointer",
    fontSize: "15px", // Smaller font size
  },

  dropdownOptionHovered: {
    padding: "5px 10px",
    cursor: "pointer",
    backgroundColor: "#f0f0f0",
    fontSize: "16px", // Keep font size consistent with unhovered options
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    tableLayout: "auto",
  },

  tableHeader: {
    backgroundColor: "#ddd",
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
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
    textAlign: "center",
    wordWrap: "break-word",
    whiteSpace: "normal",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  tableRow: {
    backgroundColor: "#f9f9f9",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginBottom: "10px",
  },
  
  actionButton: {
    backgroundColor: "#000",
    color: "#FFF",
    border: "none",
    padding: "8px 15px",
    fontSize: "14px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  
  actionButtonHover: {
    backgroundColor: "#0056b3",
  },
  filterDropdown: {
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
    cursor: "pointer",
    width: "110px",
    marginLeft: "10px", 
  },
};

export default ManageWorkout;
