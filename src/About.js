import React from "react";
import Image from "./images/logo.png";
import Image1 from "./images/Harvey.jpg";
import Image2 from "./images/Qian Ying.png";
import Image3 from "./images/Stephanie.jpg";
import Image4 from "./images/Brion.png";
import Image5 from "./images/K.jpg";
import Image6 from "./images/Min.jpg";

function About() {
  return (
    <div style={styles.aboutContainer}>
      {/* Our Vision Section */}
      <div style={styles.gridSection}>
        <div style={styles.gridItem}>
          <img src={Image} alt="Fitness" style={styles.image} />
        </div>
        <div style={styles.gridItem}>
          <h2 style={styles.header}>OUR VISION</h2>
          <p style={styles.text}>
            At PEAK FIT, we recognize the immense value that fitness professionals bring to the wellness industry. 
            Our vision is to create a thriving community where your expertise, creativity, and passion for fitness empower users to achieve their goals while simultaneously growing your personal brand and business.
          </p>
          <p style={styles.text}>
            As a fitness professional with PEAK FIT, you have the opportunity to reach a wider audience, deliver your expertise through personalized workouts, and help individuals transform their lives. Whether you're a personal trainer, wellness coach, or fitness instructor, PEAK FIT enables you to share your knowledge with a diverse group of motivated users, while providing the tools to make your offerings scalable and accessible.
          </p>
        </div>
      </div>

      {/* Our Creative Team Section */}
      <div style={styles.teamSection}>
        <h2 style={styles.header}>OUR CREATIVE TEAM</h2>
        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.teamCard}>
              <img src={member.image} alt={member.name} style={styles.teamImage} />
              <h3 style={styles.teamName}>{member.name}</h3>
              <p style={styles.teamRole}>{member.role}</p>
              <p style={styles.teamDescription}>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const teamMembers = [
  {
    image: Image1,
    name: "Harvey",
    role: "Position / Role",
    description: "Describe the team member here. Write a brief description of their role and responsibilities, or a short bio with a background summary.",
  },
  {
    image: Image2,
    name: "Qian Ying",
    role: "Position / Role",
    description: "Describe the team member here. Write a brief description of their role and responsibilities, or a short bio with a background summary.",
  },
  {
    image: Image3, 
    name: "Stephanie",
    role: "Position / Role",
    description: "Describe the team member here. Write a brief description of their role and responsibilities, or a short bio with a background summary.",
  },
  {
    image: Image4, 
    name: "Brion",
    role: "Position / Role",
    description: "Describe the team member here. Write a brief description of their role and responsibilities, or a short bio with a background summary.",
  },
  {
    image: Image5,
    name: "K",
    role: "Position / Role",
    description: "Describe the team member here. Write a brief description of their role and responsibilities, or a short bio with a background summary.",
  },
  {
    image: Image6,
    name: "Min",
    role: "Position / Role",
    description: "Describe the team member here. Write a brief description of their role and responsibilities, or a short bio with a background summary.",
  },
];

const styles = {
  aboutContainer: {
    padding: "20px", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "#f0f8ff",
  },
  gridSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "10px",
    alignItems: "center",
    marginBottom: "40px",
    width: "100%",
  },
  gridItem: {
    textAlign: "center",
    boxSizing: "border-box",
  },
  header: {
    fontSize: "25px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  text: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
    textAlign: "justify",
  },
  image: {
    width: "100%", // Full width within its container
    maxWidth: "400px", // Limits the image size
    height: "auto",
    borderRadius: "10px",
  },
  teamSection: {
    width: "100%",
    textAlign: "center",
    padding: "0 10px", // Ensures full width without excess padding
    boxSizing: "border-box",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Explicitly sets 3 columns
    gap: "20px",
    marginTop: "20px",
    width: "100%",
  },
  teamCard: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    boxSizing: "border-box",
  },
  teamImage: {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    marginBottom: "15px",
  },
  teamName: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  teamRole: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "10px",
  },
  teamDescription: {
    fontSize: "14px",
    color: "#777",
  },
};


export default About;
