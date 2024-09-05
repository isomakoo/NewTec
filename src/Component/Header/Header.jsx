import React, { useEffect, useState } from 'react';
import './Header.css';

const StatItem = ({ value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // 2 sekund ichida ko'tariladi
    const increment = end / (duration / 16); // Har 16ms da necha qiymatga ko'tarilishini hisoblaymiz

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        start = end;
      }
      setCount(Math.ceil(start));
    }, 16); // 16ms intervalda yangilanadi

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="stat-item">
      <h2>{count}</h2>
      <p>{label}</p>
    </div>
  );
};

const Header = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Experiences Fueled by <span className="highlight">Passion</span> and <span className="highlight">Expertise</span></h1>
        <p>At our core, we’re more than just a creative agency – we’re a dynamic team of storytellers, strategists, and tech enthusiasts.</p>
      </div>

      <div className="stats">
        <StatItem value={25} label="Years Of Experience" />
        <StatItem value={250} label="Project Complete" />
        <StatItem value={100} label="Happy Client" />
        <StatItem value={35} label="Wining Awards" />
      </div>
    </section>
  );
};

export default Header;
