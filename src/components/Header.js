import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [gradient, setGradient] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;

    setGradient({ x, y });
  };

  return (
    <header
      className="header"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${gradient.x}% ${gradient.y}%, #8b0000, black)`,
      }}
    >
      <div className="logo">Abhimanyu Prasad</div>
      {/* <nav className="nav">
        <a href="#home" className="nav-item">
          Hii
        </a>
        <a href="#about" className="nav-item">
          Hello
        </a>
        <a href="#services" className="nav-item">
          Nice
        </a>
        <a href="#contact" className="nav-item">
          Day
        </a> */}
      {/* </nav> */}
    </header>
  );
};

export default Header;
