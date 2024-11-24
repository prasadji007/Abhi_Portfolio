import React from "react";
import { useState,useEffect } from "react";
import "./Home.css";

const Home = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <main className="home">
        <div className="background-design">
        <div className="background-noise">
        </div>
        </div>
        <div
        className="cursor"
        style={{
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
          transform: `translate(-50%, -50%) scale(1.2)`,
        }}
      ></div>
      {/* Introduction Card */}
      <section className="card">
        <h2>Abhimanyu Prasad</h2>
        <p>Newtown, Kolkata, West Bengal</p>
        <p>📞 +91 77428----- | 📧 prasad.11774@gmail.com</p>
        <div className="social-links">
          
        </div>
      </section>

      {/* Education Card */}
      <section className="card">
        <h3>Education</h3>
        <p><strong>RCC Institute Of Information Technology, Kolkata</strong></p>
        <p>B.Tech - Electrical Engineering | CGPA: 8.37</p>
        <p>2019 – 2023</p>
      </section>

      {/* Experience Cards */}
      <section className="card">
        <h3>Experience</h3>
        <div>
          <h4>Assistant System Engineer, TCS</h4>
          <p>March 2024 - Present</p>
          <ul>
            <li>Enabled SharePoint “modern” site classification using PowerShell.</li>
            <li>Created SOPs for CoffeeNet365 API Integration between Azure and Microsoft O365.</li>
            <li>Managed migrations from SharePoint On-Premises to Online.</li>
          </ul>
        </div>
        <div>
          <h4>Prompt Engineer, Scale AI</h4>
          <p>Sept 2023 - Jan 2024</p>
          <ul>
            <li>Reviewed AI prompts to identify and mitigate biases.</li>
            <li>Implemented QA processes to ensure prompt accuracy and effectiveness.</li>
          </ul>
        </div>
      </section>

      {/* Projects Cards */}
      <section className="card">
        <h3>Projects</h3>
        <div>
          <h4>Jobify Webapp</h4>
          <p>JavaScript, Express.js, Node.js, ReactJS, MongoDB</p>
          <ul>
            <li>Designed dynamic UI and implemented job posting features.</li>
            <li>Integrated JWT for secure user authentication.</li>
          </ul>
        </div>
        <div>
          <h4>File Share Webapp</h4>
          <p>HTML, CSS, Express.js, Node.js</p>
          <ul>
            <li>Developed file upload/download functionality using Multer middleware.</li>
            <li>Ensured responsive design for better accessibility.</li>
          </ul>
        </div>
      </section>

      {/* Skills Card */}
      <section className="card">
        <h3>Technical Skills</h3>
        <p><strong>Languages:</strong> Java, C++, JavaScript, SQL</p>
        <p><strong>Technologies/Frameworks:</strong> HTML5, CSS, ExpressJS, NodeJS, SharePoint</p>
        <p><strong>Tools:</strong> VS Code, Postman, Azure Admin Center</p>
      </section>

      {/* Achievements Card */}
      <section className="card">
        <h3>Achievements</h3>
        <ul>
          <li>3-star rating on CodeChef (Max rating: 1620).</li>
          <li>Solved over 300 problems across various coding platforms.</li>
        </ul>
      </section>
      
    </main>
  );
};

export default Home;
